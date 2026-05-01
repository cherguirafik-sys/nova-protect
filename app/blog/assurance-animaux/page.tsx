import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pourquoi assurer son animal de compagnie est indispensable",
  description: "Les frais vétérinaires peuvent grimper très vite. Découvrez pourquoi souscrire une assurance pour votre chien ou chat est un choix judicieux. Guide NovaProtect.",
  alternates: { canonical: "https://novaprotect.site/blog/assurance-animaux" },
  openGraph: { title: "Pourquoi assurer son animal de compagnie | NovaProtect", description: "Guide complet sur l'assurance santé animale : frais vétérinaires, prévention, remboursement.", url: "https://novaprotect.site/blog/assurance-animaux", type: "article", images: [{ url: "/Animaux.png", width: 1200, height: 630, alt: "Assurance Animaux" }] },
  keywords: ["assurance animaux", "assurance chien chat", "mutuelle animaux", "frais vétérinaires", "assurance santé animale", "assurance animal de compagnie", "courtier assurance animaux Lyon"],
};

const articleJsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: "Pourquoi assurer son animal de compagnie est indispensable", description: "Les frais vétérinaires peuvent grimper très vite. Découvrez pourquoi l'assurance animale est essentielle.", image: "https://novaprotect.site/Animaux.png", author: { "@type": "Organization", name: "NovaProtect", url: "https://novaprotect.site" }, publisher: { "@type": "Organization", name: "NovaProtect", logo: { "@type": "ImageObject", url: "https://novaprotect.site/logo.png" } }, datePublished: "2024-02-02", dateModified: "2025-01-15", mainEntityOfPage: "https://novaprotect.site/blog/assurance-animaux", articleSection: "Assurance Animaux", inLanguage: "fr-FR" };
const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://novaprotect.site" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://novaprotect.site/blog" }, { "@type": "ListItem", position: 3, name: "Assurance Animaux", item: "https://novaprotect.site/blog/assurance-animaux" }] };

export default function BlogPostAssuranceAnimaux() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <section className="pt-32 pb-16 overflow-hidden relative bg-white">
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <nav aria-label="Fil d'Ariane" className="mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
  <ol className="inline-flex items-center gap-2 text-sm text-brand-text-medium bg-white px-4 py-2 rounded-full shadow-sm w-fit border border-slate-100">
    <li><Link href="/" className="hover:text-brand-green transition-colors">Accueil</Link></li>
    <li className="text-slate-300">/</li>
    <li><Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link></li>
    <li className="text-slate-300">/</li>
    <li className="text-brand-navy font-semibold bg-slate-100 px-3 py-1 rounded-full">Assurance Animaux</li>
  </ol>
</nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="w-full lg:w-1/2">
              <Link href="/blog" className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-green-hover mb-8 transition-colors"><ArrowLeft className="w-5 h-5" /> Retour au blog</Link>
              <div className="mb-6"><span className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">Animaux</span></div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">Pourquoi assurer son animal de compagnie est indispensable</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-brand-text-medium font-medium">
                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-brand-bg-blue flex items-center justify-center text-brand-navy"><User className="w-5 h-5" /></div><span className="font-semibold text-brand-navy">Équipe NovaProtect</span></div>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 02 Février 2024</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 3 min de lecture</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[350px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image src="/Animaux.png" alt="Guide assurance animaux - chien chat" fill className="object-cover" priority />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-bg-blue p-8 rounded-3xl mb-12 border border-brand-green/20">
              <h2 className="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-brand-green" /> En résumé</h2>
              <p className="text-brand-navy/80 font-medium m-0">Une intervention vétérinaire peut coûter entre 500€ et 1500€. L&apos;assurance santé animale couvre les urgences, les maladies chroniques et la prévention (vaccins, antiparasitaires, stérilisation). Assurez votre animal dès son plus jeune âge pour garantir une couverture à vie. NovaProtect propose des formules de 50% à 100% de remboursement.</p>
            </div>
            <article className="prose prose-lg prose-slate max-w-none prose-headings:text-brand-navy prose-a:text-brand-green hover:prose-a:text-brand-green-hover">
              <p className="text-xl text-brand-text-medium leading-relaxed mb-8">Chiens et chats font partie intégrante de notre famille. Et tout comme nous, ils peuvent tomber malades ou être victimes d&apos;accidents. Face à l&apos;augmentation constante des frais vétérinaires, l&apos;assurance santé animale devient une nécessité.</p>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">Faire face à l&apos;imprévu sans se ruiner</h2>
              <p className="mb-8 text-black">Une patte cassée, l&apos;ingestion d&apos;un corps étranger, ou une maladie chronique... Une intervention peut coûter entre 500€ et 1500€, voire plus avec des examens poussés (IRM, scanner). L&apos;assurance permet de faire soigner votre compagnon sans avoir à choisir entre votre portefeuille et sa santé.</p>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">La prévention : un aspect essentiel</h2>
              <p className="mb-6 text-black">De nombreux contrats NovaProtect incluent un <strong>forfait prévention</strong> :</p>
              <ul className="space-y-4 mb-8 list-none pl-0 text-black">
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>Vaccins annuels :</strong> Prise en charge des rappels contre les maladies courantes.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>Antiparasitaires :</strong> Remboursement des vermifuges et traitements puces/tiques.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>Stérilisation et identification :</strong> Aide financière pour ces actes recommandés.</span></li>
              </ul>
              <div className="bg-brand-bg-blue p-8 rounded-3xl my-10 border border-brand-green/20">
                <h3 className="text-xl font-bold text-brand-navy mb-3 flex items-center gap-2"><span className="text-brand-green text-2xl">⏳</span> Agir tôt est le meilleur calcul</h3>
                <p className="text-brand-navy/80 font-medium m-0">N&apos;attendez pas que votre animal soit vieux ou malade. Les assurances imposent des limites d&apos;âge (souvent 8 ans pour les chiens, 10 ans pour les chats). En l&apos;assurant jeune, vous garantissez une couverture à vie.</p>
              </div>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">Comment fonctionne le remboursement ?</h2>
              <p className="mb-8 text-black">Le vétérinaire remplit une feuille de soins. Vous nous la transmettez avec la facture, et le remboursement est effectué sous quelques jours, selon le taux choisi (de 50% à 100%).</p>
              <div className="mt-16 pt-10 border-t border-slate-200 text-center">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">La meilleure protection pour votre fidèle compagnon</h3>
                <p className="text-brand-text-medium mb-8">Prenez soin d&apos;eux comme ils prennent soin de vous. Découvrez nos offres personnalisées.</p>
                <Link href="/animaux" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">Découvrir nos offres Animaux <ArrowRight className="w-5 h-5" /></Link>
              </div>
            </article>
            <div className="mt-20 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-extrabold text-brand-navy mb-8 uppercase tracking-tight">Articles <span className="text-brand-green">connexes</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/mutuelle-sante" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Santé</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Comment bien choisir sa mutuelle santé ?</h4><p className="text-sm text-brand-text-medium line-clamp-2">Les critères essentiels pour la couverture idéale.</p></Link>
                <Link href="/blog/assurance-auto" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Auto</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Jeunes conducteurs : baisser la prime</h4><p className="text-sm text-brand-text-medium line-clamp-2">Astuces pour réduire votre cotisation auto.</p></Link>
                <Link href="/blog/assurance-habitation" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Habitation</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Assurance habitation : ce qui est couvert</h4><p className="text-sm text-brand-text-medium line-clamp-2">Dégât des eaux, incendie, vol... Les garanties essentielles.</p></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
