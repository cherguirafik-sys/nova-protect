import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Car,
  CheckCircle,
  HeartPulse,
  Home as HomeIcon,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courtier Assurance Lyon - Mutuelle, Auto, Habitation | NovaProtect",
  description:
    "NovaProtect, courtier d'assurance à Lyon agréé ORIAS n° 07 022 045. Mutuelle santé, assurance auto, habitation et animaux. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://novaprotect.site/courtier-assurance-lyon",
  },
  openGraph: {
    title: "Courtier Assurance Lyon | NovaProtect",
    description:
      "Courtier d'assurances basé à Lyon : comparez mutuelle santé, auto, habitation et animaux avec un conseiller NovaProtect. Devis gratuit.",
    url: "https://novaprotect.site/courtier-assurance-lyon",
    type: "website",
    locale: "fr_FR",
  },
  keywords: [
    "courtier assurance Lyon",
    "courtier assurances Lyon",
    "courtier ORIAS Lyon",
    "devis assurance Lyon",
    "mutuelle santé Lyon",
    "complémentaire santé Lyon",
    "assurance auto Lyon",
    "assurance jeune conducteur Lyon",
    "assurance habitation Lyon",
    "assurance logement Lyon",
    "assurance locataire Lyon",
    "assurance animaux Lyon",
    "mutuelle chien chat Lyon",
    "NovaProtect Lyon",
    "Nova Protect Lyon",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "NovaProtect",
  alternateName: ["Nova Protect", "NovaProtect Lyon"],
  url: "https://novaprotect.site/courtier-assurance-lyon",
  logo: "https://novaprotect.site/logo.png",
  image: "https://novaprotect.site/logo.png",
  description:
    "NovaProtect est un courtier d'assurances agréé ORIAS basé à Lyon, spécialisé en mutuelle santé, assurance auto, habitation et animaux.",
  telephone: "+33780180414",
  email: "contact@novaprotect.site",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 rue de Seze",
    addressLocality: "Lyon",
    addressRegion: "Auvergne-Rhône-Alpes",
    postalCode: "69006",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7578,
    longitude: 4.832,
  },
  areaServed: [
    { "@type": "City", name: "Lyon" },
    { "@type": "City", name: "Villeurbanne" },
    { "@type": "City", name: "Caluire-et-Cuire" },
    { "@type": "AdministrativeArea", name: "Métropole de Lyon" },
    { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    { "@type": "Country", name: "France" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "€€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Assurances à Lyon",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mutuelle santé à Lyon",
          description:
            "Comparaison de complémentaires santé pour étudiants, familles, indépendants et seniors à Lyon.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assurance auto à Lyon",
          description:
            "Assurance au tiers, intermédiaire ou tous risques pour conducteurs lyonnais, jeunes conducteurs et petits rouleurs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assurance habitation à Lyon",
          description:
            "Assurance logement pour locataires, propriétaires occupants et propriétaires bailleurs à Lyon.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assurance animaux à Lyon",
          description:
            "Mutuelle chien et chat pour les frais vétérinaires, les accidents, les maladies et la prévention.",
        },
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "NovaProtect est-il un courtier d'assurance à Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, NovaProtect est un courtier d'assurances agréé ORIAS n° 07 022 045 basé à Lyon, au 5 rue de Seze, 69006 Lyon.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles assurances propose NovaProtect à Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NovaProtect accompagne les particuliers pour la mutuelle santé, l'assurance auto, l'assurance habitation et l'assurance animaux à Lyon et dans toute la France.",
      },
    },
    {
      "@type": "Question",
      name: "Comment obtenir un devis assurance à Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez demander un devis gratuit en ligne ou contacter un conseiller NovaProtect. Une réponse personnalisée est préparée sous 24h.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://novaprotect.site" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Courtier Assurance Lyon",
      item: "https://novaprotect.site/courtier-assurance-lyon",
    },
  ],
};

const services = [
  {
    icon: HeartPulse,
    title: "Mutuelle santé Lyon",
    text: "Complémentaire santé pour les soins courants, l'optique, le dentaire, l'hospitalisation et les médecines douces.",
    href: "/mutuelles",
  },
  {
    icon: Car,
    title: "Assurance auto Lyon",
    text: "Formules au tiers, intermédiaire ou tous risques, avec options dépannage 0 km et garanties jeune conducteur.",
    href: "/auto",
  },
  {
    icon: HomeIcon,
    title: "Assurance habitation Lyon",
    text: "Contrats pour appartement, maison, résidence principale, locataire, propriétaire occupant ou bailleur.",
    href: "/habitation",
  },
  {
    icon: Shield,
    title: "Assurance animaux Lyon",
    text: "Mutuelle chien et chat pour consultations vétérinaires, chirurgie, médicaments et forfait prévention.",
    href: "/animaux",
  },
];

const localAreas = [
  "Lyon 1er",
  "Lyon 2e",
  "Lyon 3e",
  "Lyon 6e",
  "Villeurbanne",
  "Caluire-et-Cuire",
  "Bron",
  "Écully",
];

export default function CourtierAssuranceLyonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg-gray font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      <nav
        aria-label="Fil d'Ariane"
        className="container mx-auto overflow-x-auto whitespace-nowrap px-4 pb-4 pt-24"
      >
        <ol className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-sm text-brand-text-medium shadow-sm">
          <li>
            <Link href="/" className="transition-colors hover:text-brand-green">
              Accueil
            </Link>
          </li>
          <li className="text-slate-300">/</li>
          <li className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-brand-navy">
            Courtier Assurance Lyon
          </li>
        </ol>
      </nav>

      <section className="bg-white py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-brand-green">
              <MapPin className="h-4 w-4" /> Lyon, Auvergne-Rhône-Alpes
            </div>
            <h1 className="mb-6 text-4xl font-extrabold uppercase leading-tight tracking-tight text-brand-navy md:text-5xl lg:text-6xl">
              Courtier assurance <span className="text-brand-green">Lyon</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-brand-text-medium">
              NovaProtect est un courtier d&apos;assurances agréé ORIAS basé à Lyon.
              Nous comparons les contrats de mutuelle santé, assurance auto,
              habitation et animaux pour trouver une protection adaptée à votre
              profil, à votre budget et à votre situation locale.
            </p>
            <ul className="mb-10 space-y-4">
              {[
                "Siège social : 5 rue de Seze, 69006 Lyon",
                "Courtier ORIAS n° 07 022 045, sous contrôle ACPR",
                "Devis gratuit en ligne avec réponse personnalisée sous 24h",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="rounded-full bg-brand-green/20 p-2 text-brand-green">
                    <CheckCircle className="h-5 w-5" />
                  </span>
                  <span className="text-lg font-semibold text-brand-navy">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-full bg-brand-green px-8 py-4 text-center font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-green-hover hover:shadow-xl"
              >
                Obtenir un devis gratuit
              </Link>
              <a
                href="https://wa.me/33780180414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 font-bold text-brand-navy shadow-md transition-all hover:border-brand-navy hover:shadow-lg"
              >
                <Phone className="h-5 w-5" /> Parler à un conseiller
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-brand-bg-blue p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-extrabold uppercase tracking-tight text-brand-navy">
              Assurances recherchées à Lyon
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="rounded-xl bg-brand-green/10 p-3 text-brand-green">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-bold text-brand-navy transition-colors group-hover:text-brand-green">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-brand-text-medium">
                      {service.text}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-5 text-3xl font-extrabold uppercase tracking-tight text-brand-navy md:text-4xl">
              Un accompagnement local, des contrats valables en France
            </h2>
            <p className="text-lg leading-relaxed text-brand-text-medium">
              Votre conseiller NovaProtect connaît les besoins fréquents des
              assurés lyonnais : appartement en centre-ville, véhicule utilisé
              au quotidien, famille à protéger, mutuelle senior, jeune conducteur
              ou animal de compagnie. Le contrat reste adapté à votre usage réel,
              pas seulement à un tarif affiché.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Analyse du besoin",
                text: "Nous vérifions votre profil, vos garanties actuelles, vos franchises et vos priorités avant de comparer.",
              },
              {
                title: "Comparaison claire",
                text: "Vous recevez une proposition lisible, avec les garanties importantes et les limites à connaître.",
              },
              {
                title: "Suivi humain",
                text: "Un conseiller reste disponible pour la souscription, la résiliation et les questions après signature.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-7 shadow-md">
                <h3 className="mb-3 text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="leading-relaxed text-brand-text-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-5 text-center text-3xl font-extrabold uppercase tracking-tight text-brand-navy md:text-4xl">
            Zone de service autour de <span className="text-brand-green">Lyon</span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-brand-text-medium">
            NovaProtect accompagne les particuliers à Lyon, dans la Métropole de
            Lyon et en Auvergne-Rhône-Alpes, avec des contrats utilisables dans
            toute la France.
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {localAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl bg-brand-bg-gray p-4 font-semibold text-brand-navy"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 text-brand-green" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-3xl font-extrabold uppercase tracking-tight text-brand-navy md:text-4xl">
            Questions fréquentes
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Pourquoi passer par un courtier d'assurance à Lyon ?",
                a: "Un courtier compare plusieurs offres, vérifie les garanties utiles pour votre profil et vous aide à éviter un contrat trop cher ou mal adapté.",
              },
              {
                q: "NovaProtect peut-il assurer un logement à Lyon ?",
                a: "Oui. Nous accompagnons les locataires, propriétaires occupants et propriétaires bailleurs pour l'assurance habitation à Lyon et dans ses environs.",
              },
              {
                q: "Le devis est-il gratuit ?",
                a: "Oui. La demande de devis est gratuite et sans engagement. Un conseiller prépare une réponse personnalisée sous 24h.",
              },
            ].map((item) => (
              <details key={item.q} className="group rounded-2xl bg-white shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-bold text-brand-navy">
                  {item.q}
                  <ArrowRight className="ml-4 h-5 w-5 flex-shrink-0 text-brand-green transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 leading-relaxed text-brand-text-medium">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
