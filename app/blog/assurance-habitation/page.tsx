import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assurance habitation : ce qui est vraiment couvert | Guide complet",
  description: "Dégât des eaux, incendie, vol... Faisons le point sur les garanties indispensables de votre assurance multirisque habitation. Guide expert NovaProtect.",
  alternates: { canonical: "https://novaprotect.site/blog/assurance-habitation" },
  openGraph: { title: "Assurance habitation : ce qui est vraiment couvert | NovaProtect", description: "Les garanties indispensables de votre assurance multirisque habitation.", url: "https://novaprotect.site/blog/assurance-habitation", type: "article", images: [{ url: "/Habitations.png", width: 1200, height: 630, alt: "Assurance Habitation" }] },
  keywords: ["assurance habitation", "multirisque habitation", "garanties habitation", "dégât des eaux assurance", "assurance vol habitation", "rééquipement à neuf", "assurance locataire", "courtier habitation Lyon"],
};

const articleJsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: "Assurance habitation : ce qui est vraiment couvert", description: "Dégât des eaux, incendie, vol... Les garanties essentielles de votre assurance multirisque habitation.", image: "https://novaprotect.site/Habitations.png", author: { "@type": "Organization", name: "NovaProtect", url: "https://novaprotect.site" }, publisher: { "@type": "Organization", name: "NovaProtect", logo: { "@type": "ImageObject", url: "https://novaprotect.site/logo.png" } }, datePublished: "2024-04-28", dateModified: "2025-01-15", mainEntityOfPage: "https://novaprotect.site/blog/assurance-habitation", articleSection: "Assurance Habitation", inLanguage: "fr-FR" };
const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://novaprotect.site" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://novaprotect.site/blog" }, { "@type": "ListItem", position: 3, name: "Assurance Habitation", item: "https://novaprotect.site/blog/assurance-habitation" }] };

export default function BlogPostAssuranceHabitation() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <section className="pt-32 pb-16 overflow-hidden relative bg-white">
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brand-text-medium">
              <li><Link href="/" className="hover:text-brand-green transition-colors">Accueil</Link></li><li>/</li>
              <li><Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link></li><li>/</li>
              <li className="text-brand-navy font-semibold">Assurance Habitation</li>
            </ol>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="w-full lg:w-1/2">
              <Link href="/blog" className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-green-hover mb-8 transition-colors"><ArrowLeft className="w-5 h-5" /> Retour au blog</Link>
              <div className="mb-6"><span className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">Habitation</span></div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">Assurance habitation : ce qui est vraiment couvert</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-brand-text-medium font-medium">
                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-brand-bg-blue flex items-center justify-center text-brand-navy"><User className="w-5 h-5" /></div><span className="font-semibold text-brand-navy">Équipe NovaProtect</span></div>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 28 Avril 2024</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 4 min de lecture</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[350px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image src="/Habitations.png" alt="Guide assurance habitation - garanties couvertes" fill className="object-cover" priority />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-bg-blue p-8 rounded-3xl mb-12 border border-brand-green/20">
              <h2 className="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-brand-green" /> En résumé</h2>
              <p className="text-brand-navy/80 font-medium m-0">L&apos;assurance multirisque habitation (MRH) couvre les dégâts des eaux, incendies, catastrophes naturelles et la responsabilité civile. La garantie vol est souvent en option. L&apos;option &quot;rééquipement à neuf&quot; permet d&apos;être indemnisé à la valeur d&apos;achat actuelle. NovaProtect vous aide à trouver la meilleure couverture pour votre logement.</p>
            </div>
            <article className="prose prose-lg prose-slate max-w-none prose-headings:text-brand-navy prose-a:text-brand-green hover:prose-a:text-brand-green-hover">
              <p className="text-xl text-brand-text-medium leading-relaxed mb-8">L&apos;assurance multirisque habitation (MRH) est obligatoire pour les locataires et fortement recommandée pour les propriétaires. Mais savez-vous exactement ce qui se cache derrière ce contrat ? Faisons le point sur les garanties essentielles.</p>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">Les garanties de base incontournables</h2>
              <p className="mb-6 text-black">Tout contrat d&apos;assurance habitation standard comprend un socle de garanties :</p>
              <ul className="space-y-4 mb-8 list-none pl-0 text-black">
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>Dégâts des eaux :</strong> Couvre les dommages causés par des fuites, ruptures de canalisation ou débordements.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>Incendie et explosion :</strong> Prend en charge les dommages matériels causés par le feu, la fumée ou les interventions des pompiers.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>Catastrophes naturelles :</strong> Couvre les dégâts liés aux tempêtes, inondations, sécheresses ou tremblements de terre.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>Responsabilité civile :</strong> Indemnise les dommages que vous ou vos proches pourriez causer involontairement à un tiers.</span></li>
              </ul>
              <div className="bg-brand-bg-blue p-8 rounded-3xl my-10 border border-brand-green/20">
                <h3 className="text-xl font-bold text-brand-navy mb-3 flex items-center gap-2"><span className="text-brand-green text-2xl">⚠️</span> Attention aux exclusions</h3>
                <p className="text-brand-navy/80 font-medium m-0">Les dommages liés à un défaut d&apos;entretien flagrant ou les biens laissés à l&apos;extérieur ne sont généralement pas couverts par les garanties de base.</p>
              </div>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">La garantie vol et vandalisme : souvent en option</h2>
              <p className="mb-8 text-black">Contrairement aux idées reçues, la garantie contre le vol n&apos;est pas toujours incluse dans les contrats de base. Chez NovaProtect, nous la recommandons vivement. Pour être indemnisé en cas de cambriolage, vous devrez respecter des exigences de sécurité (serrure 3 points, volets).</p>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">Le rééquipement à neuf : le petit plus qui change tout</h2>
              <p className="mb-8 text-black">L&apos;option &quot;Rééquipement à neuf&quot; permet de contourner la vétusté. Votre bien endommagé sera indemnisé à sa valeur d&apos;achat actuelle, vous permettant de le remplacer sans perte financière.</p>
              <div className="mt-16 pt-10 border-t border-slate-200 text-center">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Protégez votre cocon dès aujourd&apos;hui</h3>
                <p className="text-brand-text-medium mb-8">Vous déménagez ou souhaitez revoir votre contrat actuel ? Obtenez un tarif sur-mesure.</p>
                <Link href="/habitation" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">Découvrir nos offres Habitation <ArrowRight className="w-5 h-5" /></Link>
              </div>
            </article>
            <div className="mt-20 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-extrabold text-brand-navy mb-8 uppercase tracking-tight">Articles <span className="text-brand-green">connexes</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/mutuelle-sante" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Santé</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Comment bien choisir sa mutuelle santé ?</h4><p className="text-sm text-brand-text-medium line-clamp-2">Les critères essentiels pour la couverture idéale.</p></Link>
                <Link href="/blog/assurance-auto" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Auto</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Jeunes conducteurs : baisser la prime</h4><p className="text-sm text-brand-text-medium line-clamp-2">Astuces légales pour réduire votre cotisation auto.</p></Link>
                <Link href="/blog/assurance-animaux" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Animaux</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Pourquoi assurer son animal</h4><p className="text-sm text-brand-text-medium line-clamp-2">Les frais vétérinaires peuvent grimper vite.</p></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
