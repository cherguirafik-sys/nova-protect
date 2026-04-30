import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Nova Protect - RGPD",
  description:
    "Politique de confidentialité et protection des données personnelles de Nova Protect (NovaProtect). Conformité RGPD, droits des utilisateurs, cookies.",
  alternates: { canonical: "https://novaprotect.site/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <Navbar />

      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-12 uppercase tracking-tight">
            Politique de <span className="text-brand-green">Confidentialité</span>
          </h1>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-brand-text-medium mb-8 text-lg">
              Nova Protect (NovaProtect) accorde une importance primordiale à la protection de vos données personnelles. La présente politique de confidentialité décrit les données que nous collectons, comment nous les utilisons et les droits dont vous disposez, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">1. Responsable du traitement</h2>
            <p className="text-brand-text-medium mb-6">
              Le responsable du traitement des données personnelles est :<br />
              <strong>NovaProtect</strong> (Nova Protect)<br />
              5 rue de Sèze, 69006 Lyon, France<br />
              Email : <a href="mailto:contact@novaprotect.site" className="text-brand-green hover:text-brand-green-hover">contact@novaprotect.site</a><br />
              ORIAS n° 07 022 045
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">2. Données collectées</h2>
            <p className="text-brand-text-medium mb-4">Dans le cadre de nos services, nous pouvons collecter les données suivantes :</p>
            <ul className="list-disc pl-6 text-brand-text-medium mb-6 space-y-2">
              <li><strong>Données d&apos;identification</strong> : nom, prénom, date de naissance</li>
              <li><strong>Coordonnées</strong> : adresse email, numéro de téléphone, adresse postale, code postal</li>
              <li><strong>Données de navigation</strong> : adresse IP, cookies, pages consultées</li>
              <li><strong>Données liées aux devis</strong> : type d&apos;assurance recherché, situation personnelle</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">3. Finalités du traitement</h2>
            <p className="text-brand-text-medium mb-4">Vos données sont collectées pour les finalités suivantes :</p>
            <ul className="list-disc pl-6 text-brand-text-medium mb-6 space-y-2">
              <li>Traitement et suivi de vos demandes de devis</li>
              <li>Mise en relation avec les compagnies d&apos;assurance partenaires</li>
              <li>Gestion de la relation client</li>
              <li>Amélioration de nos services et de l&apos;expérience utilisateur</li>
              <li>Envoi d&apos;informations commerciales (avec votre consentement)</li>
              <li>Respect de nos obligations légales et réglementaires</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">4. Base juridique</h2>
            <p className="text-brand-text-medium mb-6">
              Le traitement de vos données repose sur : votre consentement, l&apos;exécution d&apos;un contrat ou de mesures précontractuelles, le respect d&apos;obligations légales, et notre intérêt légitime à améliorer nos services.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">5. Durée de conservation</h2>
            <p className="text-brand-text-medium mb-6">
              Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et au maximum 3 ans après le dernier contact pour les prospects, conformément aux recommandations de la CNIL.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">6. Vos droits</h2>
            <p className="text-brand-text-medium mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 text-brand-text-medium mb-6 space-y-2">
              <li><strong>Droit d&apos;accès</strong> : obtenir confirmation du traitement de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p className="text-brand-text-medium mb-6">
              Pour exercer vos droits, contactez-nous à <a href="mailto:contact@novaprotect.site" className="text-brand-green hover:text-brand-green-hover">contact@novaprotect.site</a>. Vous disposez également du droit d&apos;introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés).
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">7. Cookies</h2>
            <p className="text-brand-text-medium mb-6">
              Notre site utilise des cookies techniques nécessaires au fonctionnement du site et des cookies analytiques pour mesurer l&apos;audience. Vous pouvez paramétrer votre navigateur pour refuser tout ou partie des cookies. Le refus des cookies techniques peut altérer le fonctionnement du site.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">8. Sécurité</h2>
            <p className="text-brand-text-medium mb-6">
              Nova Protect met en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la sécurité et la confidentialité de vos données personnelles, et les protéger contre tout accès non autorisé, perte, altération ou divulgation.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-4">9. Modification de la politique</h2>
            <p className="text-brand-text-medium mb-6">
              Nova Protect se réserve le droit de modifier la présente politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Dernière mise à jour : avril 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
