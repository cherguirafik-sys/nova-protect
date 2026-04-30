import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment bien choisir sa mutuelle santé en 2026 ? Guide complet",
  description:
    "Découvrez les critères essentiels pour sélectionner une couverture santé parfaitement adaptée à vos besoins et à votre budget. Guide expert par NovaProtect, courtier agréé ORIAS.",
  alternates: {
    canonical: "https://novaprotect.site/blog/mutuelle-sante",
  },
  openGraph: {
    title: "Comment bien choisir sa mutuelle santé en 2026 ? | NovaProtect",
    description:
      "Guide complet pour choisir la meilleure mutuelle santé : optique, dentaire, hospitalisation, médecines douces. Critères, pièges à éviter et conseils d'experts.",
    url: "https://novaprotect.site/blog/mutuelle-sante",
    type: "article",
    images: [{ url: "/Mutuelle Santé.png", width: 1200, height: 630, alt: "Mutuelle Santé NovaProtect" }],
  },
  keywords: [
    "choisir mutuelle santé",
    "meilleure mutuelle 2026",
    "comparatif mutuelle santé",
    "mutuelle optique dentaire",
    "remboursement mutuelle",
    "mutuelle sans questionnaire médical",
    "mutuelle pas cher",
    "courtier mutuelle Lyon",
  ],
};

// JSON-LD BlogPosting Schema
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Comment bien choisir sa mutuelle santé en 2026 ?",
  description:
    "Découvrez les critères essentiels pour sélectionner une couverture santé parfaitement adaptée à vos besoins et à votre budget sans compromis.",
  image: "https://novaprotect.site/Mutuelle Santé.png",
  author: {
    "@type": "Organization",
    name: "NovaProtect",
    url: "https://novaprotect.site",
  },
  publisher: {
    "@type": "Organization",
    name: "NovaProtect",
    logo: { "@type": "ImageObject", url: "https://novaprotect.site/logo.png" },
  },
  datePublished: "2026-01-15",
  dateModified: "2026-04-30",
  mainEntityOfPage: "https://novaprotect.site/blog/mutuelle-sante",
  articleSection: "Mutuelle Santé",
  wordCount: 1200,
  inLanguage: "fr-FR",
};

// BreadcrumbList Schema
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://novaprotect.site" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://novaprotect.site/blog" },
    { "@type": "ListItem", position: 3, name: "Mutuelle Santé", item: "https://novaprotect.site/blog/mutuelle-sante" },
  ],
};

// FAQ Schema for this article
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment choisir sa mutuelle santé en 2025 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour bien choisir sa mutuelle santé, évaluez vos besoins réels (optique, dentaire, hospitalisation, médecines douces), comprenez les pourcentages de remboursement basés sur le Tarif de Convention, et vérifiez les délais de carence et services inclus comme le tiers payant.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce que le 100% Santé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La réforme 100% Santé permet de bénéficier d'un reste à charge zéro sur une sélection de lunettes, d'aides auditives et de prothèses dentaires. NovaProtect inclut automatiquement le 100% Santé dans toutes ses formules responsables.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il un questionnaire médical pour souscrire une mutuelle ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, chez NovaProtect, nos mutuelles santé ne nécessitent aucun questionnaire médical, quelle que soit votre situation de santé.",
      },
    },
  ],
};

export default function BlogPostMutuelleSante() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 overflow-hidden relative bg-white">
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brand-text-medium">
              <li><Link href="/" className="hover:text-brand-green transition-colors">Accueil</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-brand-navy font-semibold">Mutuelle Santé</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            {/* Left side content */}
            <div className="w-full lg:w-1/2">
              <Link href="/blog" className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-green-hover mb-8 transition-colors">
                <ArrowLeft className="w-5 h-5" /> Retour au blog
              </Link>
              
              <div className="mb-6">
                <span className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                  Mutuelle Santé
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
                Comment bien choisir sa mutuelle santé en 2026 ?
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-brand-text-medium font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-bg-blue flex items-center justify-center text-brand-navy">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-brand-navy">Équipe NovaProtect</span>
                </div>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 15 Janvier 2026</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min de lecture</span>
              </div>
            </div>
            
            {/* Right side image */}
            <div className="w-full lg:w-1/2">
              <div className="relative h-[350px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/Mutuelle Santé.png" 
                  alt="Comment bien choisir sa mutuelle santé - Guide complet NovaProtect"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            {/* Summary Box — LLM-friendly self-contained section */}
            <div className="bg-brand-bg-blue p-8 rounded-3xl mb-12 border border-brand-green/20">
              <h2 className="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-green" /> En résumé
              </h2>
              <p className="text-brand-navy/80 font-medium m-0">
                Pour bien choisir sa mutuelle santé en 2025, il faut évaluer ses besoins réels (optique, dentaire, hospitalisation, médecines douces), comprendre les pourcentages de remboursement basés sur le Tarif de Convention, vérifier les délais de carence, et comparer les services inclus (tiers payant, téléconsultation). NovaProtect, courtier agréé ORIAS n° 07 022 045, vous aide à trouver la meilleure couverture au meilleur prix.
              </p>
            </div>

            <article className="prose prose-lg prose-slate max-w-none prose-headings:text-brand-navy prose-a:text-brand-green hover:prose-a:text-brand-green-hover">
              <p className="text-xl text-brand-text-medium leading-relaxed mb-8">
                La santé est un capital précieux, mais les frais médicaux peuvent rapidement peser sur le budget. Avec l&apos;évolution des offres et des besoins, choisir la bonne mutuelle santé en 2025 nécessite de se poser les bonnes questions. Voici notre guide pour vous aider à y voir plus clair.
              </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-6 text-black">1. Faire le point sur ses besoins réels</h2>
            <p className="mb-6 text-black">
              Inutile de payer pour des garanties que vous n&apos;utilisez pas. La première étape consiste à évaluer vos habitudes de soins et celles de votre famille :
            </p>
            <ul className="space-y-4 mb-8 list-none pl-0 text-black">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1 " />
                <span><strong>Optique :</strong> Portez-vous des lunettes ou des lentilles ? Renouvelez-vous souvent votre équipement ?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span><strong>Dentaire :</strong> Avez-vous besoin de prothèses, d&apos;implants ou d&apos;orthodontie pour vos enfants ?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span><strong>Médecines douces :</strong> Consultez-vous régulièrement un ostéopathe, un psychologue ou un acupuncteur ?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span><strong>Hospitalisation :</strong> Souhaitez-vous une chambre particulière et la prise en charge des dépassements d&apos;honoraires des chirurgiens ?</span>
              </li>
            </ul>

            <div className="bg-brand-bg-blue p-8 rounded-3xl my-10 border border-brand-green/20">
              <h3 className="text-xl font-bold text-brand-navy mb-3 flex items-center gap-2">
                <span className="text-brand-green text-2xl">💡</span> Notre conseil expert
              </h3>
              <p className="text-brand-navy/80 font-medium m-0">
                Ne vous fiez pas uniquement au prix d&apos;appel. Une mutuelle très bon marché cachera souvent des restes à charge importants en cas de pépin de santé sérieux. Optez pour le juste équilibre.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-black">2. Comprendre les pourcentages de remboursement</h2>
            <p className="mb-6 text-black">
              Les tableaux de garanties affichent souvent des pourcentages (100%, 150%, 200%, etc.). Ces pourcentages ne s&apos;appliquent pas sur vos frais réels, mais sur le <strong>Tarif de Convention (TC)</strong> défini par l&apos;Assurance Maladie.
            </p>
            <p className="mb-8 text-black">
              Par exemple, si un spécialiste facture sa consultation 60€ (dont 25€ pris en charge par la Sécurité Sociale), une garantie à 100% vous laissera un reste à charge. Il vous faudra une garantie à 200% ou plus pour être bien remboursé des dépassements d&apos;honoraires.
            </p>

            {/* Comparison Table — LLMs love structured data */}
            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="p-4 text-left font-bold">Critère</th>
                    <th className="p-4 text-left font-bold">Basique</th>
                    <th className="p-4 text-left font-bold">Confort</th>
                    <th className="p-4 text-left font-bold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 bg-white">
                    <td className="p-4 font-semibold text-brand-navy">Optique</td>
                    <td className="p-4 text-black">100% TC</td>
                    <td className="p-4 text-black">200% TC</td>
                    <td className="p-4 text-black">300% TC</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-brand-bg-gray">
                    <td className="p-4 font-semibold text-brand-navy">Dentaire</td>
                    <td className="p-4 text-black">125% TC</td>
                    <td className="p-4 text-black">250% TC</td>
                    <td className="p-4 text-black">400% TC</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-white">
                    <td className="p-4 font-semibold text-brand-navy">Hospitalisation</td>
                    <td className="p-4 text-black">150% TC</td>
                    <td className="p-4 text-black">300% TC</td>
                    <td className="p-4 text-black">Frais réels</td>
                  </tr>
                  <tr className="bg-brand-bg-gray">
                    <td className="p-4 font-semibold text-brand-navy">Médecines douces</td>
                    <td className="p-4 text-black">3 séances/an</td>
                    <td className="p-4 text-black">3 séances/an</td>
                    <td className="p-4 text-black">Illimité</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-black">3. Vérifier les délais de carence et services inclus</h2>
            <p className="mb-6 text-black">
              Le <strong>délai de carence</strong> est la période pendant laquelle vous cotisez sans pouvoir bénéficier de certaines garanties (souvent le dentaire ou l&apos;hospitalisation). Chez NovaProtect, nous privilégions les offres sans délai de carence pour une prise en charge immédiate.
            </p>
            <p className="mb-8 text-black">
              Pensez également aux services annexes qui font la différence au quotidien : le tiers payant (pour ne pas avancer les frais), la téléconsultation médicale incluse, ou un service d&apos;assistance aide ménagère en cas d&apos;hospitalisation.
            </p>

            <div className="mt-16 pt-10 border-t border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Besoin d&apos;aide pour choisir ?</h3>
              <p className="text-brand-text-medium mb-8">
                Nos conseillers NovaProtect sont disponibles pour réaliser un audit gratuit de vos besoins et vous proposer la formule la plus adaptée.
              </p>
              <Link href="/mutuelles" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Découvrir nos offres Santé <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </article>

          {/* Related Articles — Maillage Interne */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-extrabold text-brand-navy mb-8 uppercase tracking-tight">
              Articles <span className="text-brand-green">connexes</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog/assurance-habitation" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group">
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Habitation</span>
                <h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Assurance habitation : ce qui est vraiment couvert</h4>
                <p className="text-sm text-brand-text-medium line-clamp-2">Dégât des eaux, incendie, vol... Les garanties essentielles de votre MRH.</p>
              </Link>
              <Link href="/blog/assurance-auto" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group">
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Auto</span>
                <h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Jeunes conducteurs : astuces pour baisser la prime</h4>
                <p className="text-sm text-brand-text-medium line-clamp-2">Nos meilleures astuces pour réduire le montant de votre cotisation auto.</p>
              </Link>
              <Link href="/blog/assurance-animaux" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group">
                <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Animaux</span>
                <h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Pourquoi assurer son animal est indispensable</h4>
                <p className="text-sm text-brand-text-medium line-clamp-2">Les frais vétérinaires peuvent grimper vite. Découvrez pourquoi l&apos;assurance animale est essentielle.</p>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
