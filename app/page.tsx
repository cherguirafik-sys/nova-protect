import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Nova Protect - Courtier Assurance Lyon & France | Mutuelle, Auto, Habitation, Animaux",
  },
  description:
    "Nova Protect (NovaProtect), courtier d'assurances agréé ORIAS n° 07 022 045 basé à Lyon. Comparez vos mutuelles santé, assurances auto, habitation et animaux en France. Devis gratuit, réponse sous 24h.",
  alternates: {
    canonical: "https://novaprotect.site",
    languages: {
      "fr-FR": "https://novaprotect.site",
      "x-default": "https://novaprotect.site",
    },
  },
  openGraph: {
    title: "Nova Protect Lyon & France - Courtier d'Assurances Agréé",
    description:
      "Mutuelle santé, assurance auto, habitation et animaux : comparez les meilleures garanties avec un courtier agréé ORIAS basé à Lyon. Devis gratuit en ligne.",
    url: "https://novaprotect.site",
    type: "website",
  },
};

// JSON-LD Structured Data for Organization + InsuranceAgency
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "NovaProtect",
  alternateName: ["Nova Protect", "Nova Protect France", "NovaProtect Lyon"],
  url: "https://novaprotect.site",
  logo: "https://novaprotect.site/logo.png",
  image: "https://novaprotect.site/logo.png",
  description:
    "NovaProtect est un courtier d'assurances agréé ORIAS basé à Lyon, spécialisé en mutuelle santé, assurance auto, habitation et animaux pour les particuliers en France.",
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
    {
      "@type": "City",
      name: "Lyon",
    },
    {
      "@type": "AdministrativeArea",
      name: "Auvergne-Rhône-Alpes",
    },
    {
      "@type": "Country",
      name: "France",
    },
  ],
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    // Add social media profile URLs here when available:
    // "https://www.linkedin.com/company/novaprotect",
    // "https://www.facebook.com/novaprotect",
    // "https://www.instagram.com/novaprotect",
  ],
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
    {
      "@type": "Question",
      name: "Nova Protect est-il un courtier d'assurance à Lyon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Nova Protect (NovaProtect) est un courtier d'assurances agréé ORIAS basé à Lyon, au 5 rue de Seze, 69006 Lyon. Nous accompagnons les particuliers à Lyon, en Auvergne-Rhône-Alpes et dans toute la France.",
      },
    },
    {
      "@type": "Question",
      name: "Nova Protect propose-t-il des assurances partout en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Nova Protect opère sur l'ensemble du territoire français. Depuis Lyon, nos conseillers comparent les offres de mutuelle santé, assurance auto, habitation et animaux pour proposer une couverture adaptée à chaque profil.",
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
