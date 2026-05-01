import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Nova Protect - Assurances Mutuelle Santé, Auto, Habitation, Animaux | Courtier Agréé France",
  },
  description:
    "Nova Protect (NovaProtect), courtier d'assurances agréé ORIAS n° 07 022 045 en France. Comparez et souscrivez vos assurances Mutuelle Santé, Auto, Habitation et Animaux. Devis gratuit, réponse sous 24h. +500 clients satisfaits. Insurance broker in France.",
  alternates: {
    canonical: "https://novaprotect.site",
    languages: {
      "fr-FR": "https://novaprotect.site",
      "en": "https://novaprotect.site/nova-protect-insurance",
    },
  },
  openGraph: {
    title: "Nova Protect France - Optimisez Votre Protection avec Nos Assurances Personnalisées",
    description:
      "Mutuelle Santé, Auto, Habitation et Animaux : bénéficiez des meilleures garanties, sans tracas. Courtier agréé ORIAS, devis gratuit en ligne. Nova Protect insurance broker in France.",
    url: "https://novaprotect.site",
    type: "website",
  },
};

// JSON-LD Structured Data for Organization + InsuranceAgency
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "NovaProtect",
  alternateName: ["Nova Protect", "Nova Protect Insurance", "Nova Protect France"],
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
      name: "Nova Protect propose-t-il des assurances partout en France ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Nova Protect (NovaProtect) est un courtier d'assurances opérant sur l'ensemble du territoire français. Que vous soyez à Lyon, Paris, Marseille, Bordeaux ou ailleurs en France, nous vous proposons des assurances Mutuelle Santé, Auto, Habitation et Animaux adaptées à vos besoins. Nova Protect insurance services are available throughout France.",
      },
    },
    {
      "@type": "Question",
      name: "What is Nova Protect insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nova Protect (NovaProtect) is a licensed insurance broker in France (ORIAS n° 07 022 045). We offer health insurance (Mutuelle Santé), auto insurance, home insurance (Habitation), and pet insurance (Animaux) across all of France. Get a free quote at novaprotect.site.",
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
