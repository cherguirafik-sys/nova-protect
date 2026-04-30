import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "NovaProtect - Assurances Mutuelle Santé, Auto, Habitation, Animaux | Courtier Agréé Lyon",
  },
  description:
    "NovaProtect, courtier d'assurances agréé ORIAS n° 07 022 045. Comparez et souscrivez vos assurances Mutuelle Santé, Auto, Habitation et Animaux. Devis gratuit, réponse sous 24h. +500 clients satisfaits.",
  alternates: {
    canonical: "https://novaprotect.site",
  },
  openGraph: {
    title: "NovaProtect - Optimisez Votre Protection avec Nos Assurances Personnalisées",
    description:
      "Mutuelle Santé, Auto, Habitation et Animaux : bénéficiez des meilleures garanties, sans tracas. Courtier agréé ORIAS, devis gratuit en ligne.",
    url: "https://novaprotect.site",
    type: "website",
  },
};

// JSON-LD Structured Data for Organization + InsuranceAgency
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "NovaProtect",
  url: "https://novaprotect.site",
  logo: "https://novaprotect.site/logo.png",
  image: "https://novaprotect.site/logo.png",
  description:
    "NovaProtect est votre courtier d'assurances de confiance, offrant des assurances Mutuelle Santé, Auto, Habitation et Animaux aux meilleures garanties.",
  telephone: "+33780180414",
  email: "contact@novaprotect.site",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 rue de Seze",
    addressLocality: "Lyon",
    postalCode: "69006",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7578,
    longitude: 4.832,
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Assurances NovaProtect",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mutuelle Santé",
          description:
            "Couverture santé complète et personnalisée avec remboursements rapides sous 48h, réseau de soins partenaires.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assurance Auto",
          description:
            "Protection véhicule complète avec assistance dépannage, couverture tous risques et protection juridique.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assurance Habitation",
          description:
            "Protection logement contre incendie, dégâts des eaux, vol avec assistance d'urgence 24/7.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Assurance Animaux",
          description:
            "Couverture santé animaux avec consultations vétérinaires, chirurgie et médicaments inclus.",
        },
      },
    ],
  },
};

// WebSite schema for sitelinks search box
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NovaProtect",
  url: "https://novaprotect.site",
  description:
    "Courtier d'assurances agréé - Mutuelle Santé, Auto, Habitation et Animaux.",
  publisher: {
    "@type": "Organization",
    name: "NovaProtect",
    logo: {
      "@type": "ImageObject",
      url: "https://novaprotect.site/logo.png",
    },
  },
};

// FAQ Schema
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel type d'assurance proposez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons 4 types d'assurance : Mutuelle Santé, Auto, Habitation et Animaux, chacune étant personnalisée en fonction de vos besoins.",
      },
    },
    {
      "@type": "Question",
      name: "Comment résilier mon contrat actuel ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NovaProtect prend en charge gratuitement la résiliation de vos anciens contrats. Nous gérons toutes les démarches à votre place pour vous faciliter la vie.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il un questionnaire médical ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, nos mutuelles santé ne nécessitent aucun questionnaire médical, quelle que soit votre situation.",
      },
    },
    {
      "@type": "Question",
      name: "Êtes-vous un courtier agréé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, NovaProtect est immatriculé à l'ORIAS n° 07 022 045, sous le contrôle de l'ACPR.",
      },
    },
  ],
};

// BreadcrumbList schema
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
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
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

      {/* Client-side interactive home page */}
      <HomeClient />
    </>
  );
}
