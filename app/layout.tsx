import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://novaprotect.site";
const SITE_NAME = "NovaProtect";
const DEFAULT_DESCRIPTION =
  "NovaProtect, courtier d'assurances agréé ORIAS n° 07 022 045 basé à Lyon. Comparez vos mutuelles santé, assurances auto, habitation et animaux en France. Devis gratuit en ligne, réponse sous 24h.";

export const metadata: Metadata = {
  // ─── Base URL ────────────────────────────────────────
  metadataBase: new URL(SITE_URL),

  // ─── Title (template applies to child pages) ─────────
  title: {
    default: "NovaProtect | Courtier Assurance Lyon & France",
    template: "%s | NovaProtect",
  },

  // ─── Description ─────────────────────────────────────
  description: DEFAULT_DESCRIPTION,

  // ─── Keywords ────────────────────────────────────────
  keywords: [
    "NovaProtect",
    "Nova Protect",
    "nova protect france",
    "nova protect lyon",
    "assurance",
    "mutuelle santé",
    "assurance auto",
    "assurance habitation",
    "assurance animaux",
    "courtier assurance",
    "courtier assurance France",
    "courtier assurance Lyon",
    "courtier agréé",
    "courtier ORIAS Lyon",
    "devis assurance gratuit",
    "devis assurance Lyon",
    "comparer assurances",
    "mutuelle pas cher",
    "meilleure mutuelle",
    "mutuelle santé Lyon",
    "complémentaire santé Lyon",
    "assurance en ligne",
    "ORIAS",
    "assurance Lyon",
    "courtier Lyon",
    "assurance auto Lyon",
    "assurance habitation Lyon",
    "assurance animaux Lyon",
    "mutuelle chien chat Lyon",
    "assurance jeune conducteur Lyon",
    "assurance logement Lyon",
    "assurance France",
    "devis mutuelle",
    "devis auto",
    "devis habitation",
    "protection santé",
    "couverture médicale",
    "résiliation assurance",
    "garanties assurance",
    "RGPD assurance",
  ],

  // ─── Authors & Creator ──────────────────────────────
  authors: [{ name: "NovaProtect", url: SITE_URL }],
  creator: "NovaProtect",
  publisher: "NovaProtect",

  // ─── Application info ───────────────────────────────
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  // ─── Format Detection ───────────────────────────────
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ─── Canonical & Alternates ─────────────────────────
  alternates: {
    canonical: "https://novaprotect.site/",
    languages: {
      "fr-FR": "https://novaprotect.site/",
      "x-default": "https://novaprotect.site/",
    },
  },

  // ─── Robots (meta tag level) ────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },


  // ─── Open Graph ─────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "NovaProtect - Courtier d'Assurances à Lyon et en France",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NovaProtect - Courtier d'Assurances Agréé",
        type: "image/png",
      },
    ],
  },

  // ─── Twitter Card ───────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "NovaProtect - Courtier Assurance Lyon & France",
    description: DEFAULT_DESCRIPTION,
    images: ["/logo.png"],
  },

  // ─── Category ───────────────────────────────────────
  category: "Assurance",

  // ─── Other Meta Tags ────────────────────────────────
  other: {
    "geo.region": "FR-69",
    "geo.placename": "Lyon",
    "geo.position": "45.7578;4.8320",
    "ICBM": "45.7578, 4.8320",
    "revisit-after": "7 days",
    "rating": "general",
    "distribution": "global",
    "language": "French",
    "content-language": "fr",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1F3A5F" },
    { media: "(prefers-color-scheme: dark)", color: "#1B2F4B" },
  ],
};

import FloatingContactButton from "@/components/FloatingContactButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-brand-navy">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <FloatingContactButton />
      </body>
    </html>
  );
}
