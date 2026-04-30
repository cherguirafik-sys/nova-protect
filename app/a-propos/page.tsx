import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "À Propos de NovaProtect - Votre Courtier d'Assurances de Confiance",
  description:
    "Découvrez NovaProtect, courtier d'assurances agréé ORIAS basé à Lyon. Notre mission : vous offrir transparence, proximité et les meilleures garanties au meilleur prix.",
  alternates: {
    canonical: "https://novaprotect.site/a-propos",
  },
  openGraph: {
    title: "À Propos de NovaProtect | Courtier d'Assurances Agréé",
    description:
      "NovaProtect, courtier agréé ORIAS n° 07 022 045. +15k clients, 98% de satisfaction. Transparence, proximité et excellence.",
    url: "https://novaprotect.site/a-propos",
    type: "website",
  },
  keywords: [
    "NovaProtect",
    "courtier assurances Lyon",
    "courtier agréé ORIAS",
    "à propos NovaProtect",
    "assurance de confiance",
    "courtier proximité",
    "assurance personnalisée",
  ],
};

// JSON-LD for Organization (About Page)
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "InsuranceAgency",
    name: "NovaProtect",
    url: "https://novaprotect.site",
    description:
      "Courtier d'assurances agréé ORIAS, spécialisé en Mutuelle Santé, Auto, Habitation et Animaux. Basé à Lyon.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        postalCode: "69006",
        addressCountry: "FR",
      },
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10+",
    },
    knowsAbout: [
      "Mutuelle Santé",
      "Assurance Auto",
      "Assurance Habitation",
      "Assurance Animaux",
    ],
  },
};

// BreadcrumbList
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://novaprotect.site",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "À Propos",
      item: "https://novaprotect.site/a-propos",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AboutClient />
    </>
  );
}
