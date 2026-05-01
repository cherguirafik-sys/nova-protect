import nodemailer from "nodemailer";
import { smtpConfig } from "@/lib/config";

export const dynamic = "force-dynamic";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  formType?: "contact" | "hero";
}

// Subject label mapping
const subjectLabels: Record<string, string> = {
  mutuelle: "Mutuelle Santé",
  habitation: "Assurance Habitation",
  auto: "Assurance Auto",
  animaux: "Assurance Animaux",
  "Mutuelle Santé": "Mutuelle Santé",
  Auto: "Assurance Auto",
  Habitation: "Assurance Habitation",
  Animaux: "Assurance Animaux",
};

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const { name, phone, email, subject, message, formType } = body;

    if (!name || !email || !subject) {
      return Response.json(
        { error: "Champs obligatoires manquants (nom, email, sujet)." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    // Create Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpConfig.email,
        pass: smtpConfig.password.replace(/\s+/g, ""),
      },
    });

    const subjectLabel = subjectLabels[subject] || subject;
    const isHeroForm = formType === "hero";
    const formSource = isHeroForm
      ? "Formulaire Hero (Devis rapide)"
      : "Formulaire Contact";

    // Build the email HTML
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1F3A5F 0%, #122238 100%); padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px;">
            🛡️ NovaProtect
          </h1>
          <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">
            Nouvelle demande de contact
          </p>
        </div>

        <!-- Source Badge -->
        <div style="padding: 20px 32px 0;">
          <span style="background: #22c55e; color: white; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
            ${formSource}
          </span>
        </div>

        <!-- Content -->
        <div style="padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">
                Nom
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px; font-weight: 500;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                Téléphone
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px; font-weight: 500;">
                ${phone || "Non renseigné"}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                E-mail
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #22c55e; font-size: 15px; font-weight: 500; text-decoration: none;">
                  ${email}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                Sujet
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="background: #1F3A5F; color: white; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600;">
                  ${subjectLabel}
                </span>
              </td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                Message
              </td>
              <td style="padding: 12px 0; color: #1e293b; font-size: 15px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br/>")}
              </td>
            </tr>
            ` : ""}
          </table>
        </div>

        <!-- Footer -->
        <div style="background: #f1f5f9; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">
            Ce message a été envoyé depuis le site <strong>novaprotect.site</strong><br/>
            ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}
          </p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"NovaProtect" <${smtpConfig.email}>`,
      to: smtpConfig.receiveEmail,
      replyTo: email,
      subject: `[NovaProtect] Nouvelle demande — ${subjectLabel} — ${name}`,
      html: htmlContent,
    });

    return Response.json(
      { success: true, message: "Message envoyé avec succès !" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json(
      { error: "Échec de l'envoi du message. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
