import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Nova Protect - Courtier d'Assurances",
  description:
    "Mentions légales de Nova Protect (NovaProtect), courtier d'assurances agréé ORIAS n° 07 022 045 à Lyon. Informations juridiques, RCS, responsabilité éditoriale.",
  alternates: { canonical: "https://novaprotect.site/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <Navbar />

      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-12 uppercase tracking-tight">
            Mentions <span className="text-brand-green">Légales</span>
          </h1>

          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">1. Éditeur du site</h2>
            <p className="text-brand-text-medium mb-6">
              Le site <strong>novaprotect.site</strong> est édité par :<br />
              <strong>NovaProtect</strong> (Nova Protect)<br />
              Société de courtage en assurances<br />
              Capital social : 1 000 €<br />
              RCS Lyon : 912 685 538<br />
              Siège social : 5 rue de Sèze, 69006 Lyon, France<br />
              Email : <a href="mailto:contact@novaprotect.site" className="text-brand-green hover:text-brand-green-hover">contact@novaprotect.site</a><br />
              Téléphone : +33 7 80 18 04 14
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">2. Statut réglementaire</h2>
            <p className="text-brand-text-medium mb-6">
              Nova Protect est un courtier d&apos;assurances enregistré auprès de l&apos;<strong>ORIAS</strong> (Organisme pour le Registre unique des Intermédiaires en Assurance) sous le numéro <strong>07 022 045</strong>. Cette immatriculation est vérifiable sur le site officiel <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green-hover">orias.fr</a>.<br /><br />
              Nova Protect est soumis au contrôle de l&apos;<strong>ACPR</strong> (Autorité de Contrôle Prudentiel et de Résolution), 4 place de Budapest, CS 92459, 75436 Paris Cedex 09.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">3. Hébergement</h2>
            <p className="text-brand-text-medium mb-6">
              Ce site est hébergé par :<br />
              <strong>Hostinger International Ltd.</strong><br />
              61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
              Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green-hover">hostinger.fr</a>
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-brand-text-medium mb-6">
              L&apos;ensemble du contenu du site novaprotect.site (textes, images, logos, icônes, graphismes, vidéos, etc.) est la propriété exclusive de NovaProtect ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, du contenu du site est strictement interdite sans autorisation écrite préalable de NovaProtect.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">5. Responsabilité</h2>
            <p className="text-brand-text-medium mb-6">
              Les informations contenues sur le site novaprotect.site sont données à titre indicatif et sont susceptibles d&apos;évoluer. NovaProtect ne saurait être tenu responsable des erreurs, omissions, ou résultats qui pourraient être obtenus par un mauvais usage de ces informations. Les garanties et tarifs définitifs sont ceux figurant dans les contrats d&apos;assurance souscrits.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">6. Cookies</h2>
            <p className="text-brand-text-medium mb-6">
              Le site novaprotect.site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. Conformément à la réglementation en vigueur, vous pouvez paramétrer votre navigateur pour refuser les cookies.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">7. Droit applicable</h2>
            <p className="text-brand-text-medium mb-6">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux de Lyon seront seuls compétents.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
