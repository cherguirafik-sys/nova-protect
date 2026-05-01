import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeunes conducteurs : astuces pour faire baisser la prime auto",
  description: "L'assurance auto jeune conducteur coûte cher. Voici nos meilleures astuces légales pour réduire votre cotisation : conduite accompagnée, franchise, assurance au km.",
  alternates: { canonical: "https://novaprotect.site/blog/assurance-auto" },
  openGraph: { title: "Jeunes conducteurs : astuces pour baisser la prime | NovaProtect", description: "Guide complet pour réduire le coût de l'assurance auto jeune conducteur.", url: "https://novaprotect.site/blog/assurance-auto", type: "article", images: [{ url: "/Autos.png", width: 1200, height: 630, alt: "Assurance Auto" }] },
  keywords: ["assurance auto jeune conducteur", "réduire prime assurance auto", "conduite accompagnée assurance", "assurance auto pas cher", "surprime jeune conducteur", "assurance au kilomètre", "courtier assurance auto Lyon"],
};

const articleJsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: "Jeunes conducteurs : astuces pour faire baisser la prime", description: "L'assurance auto jeune conducteur coûte cher. Voici nos meilleures astuces.", image: "https://novaprotect.site/Autos.png", author: { "@type": "Organization", name: "NovaProtect", url: "https://novaprotect.site" }, publisher: { "@type": "Organization", name: "NovaProtect", logo: { "@type": "ImageObject", url: "https://novaprotect.site/logo.png" } }, datePublished: "2024-03-15", dateModified: "2025-01-15", mainEntityOfPage: "https://novaprotect.site/blog/assurance-auto", articleSection: "Assurance Auto", inLanguage: "fr-FR" };
const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://novaprotect.site" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://novaprotect.site/blog" }, { "@type": "ListItem", position: 3, name: "Assurance Auto", item: "https://novaprotect.site/blog/assurance-auto" }] };

export default function BlogPostAssuranceAuto() {
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
    <li className="text-brand-navy font-semibold bg-slate-100 px-3 py-1 rounded-full">Assurance Auto</li>
  </ol>
</nav>
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="w-full lg:w-1/2">
              <Link href="/blog" className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-green-hover mb-8 transition-colors"><ArrowLeft className="w-5 h-5" /> Retour au blog</Link>
              <div className="mb-6"><span className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">Auto</span></div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">Jeunes conducteurs : astuces pour faire baisser la prime</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-brand-text-medium font-medium">
                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-brand-bg-blue flex items-center justify-center text-brand-navy"><User className="w-5 h-5" /></div><span className="font-semibold text-brand-navy">Équipe NovaProtect</span></div>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 15 Mars 2024</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min de lecture</span>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[350px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image src="/Autos.png" alt="Astuces assurance auto jeune conducteur" fill className="object-cover" priority />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-bg-blue p-8 rounded-3xl mb-12 border border-brand-green/20">
              <h2 className="text-lg font-bold text-brand-navy mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-brand-green" /> En résumé</h2>
              <p className="text-brand-navy/80 font-medium m-0">Les jeunes conducteurs paient une surprime de 100% la première année. Pour la réduire : conduite accompagnée (-50%), conducteur secondaire, voiture à faible puissance, franchises élevées, ou assurance au kilomètre. NovaProtect compare les meilleures offres pour vous.</p>
            </div>
            <article className="prose prose-lg prose-slate max-w-none prose-headings:text-brand-navy prose-a:text-brand-green hover:prose-a:text-brand-green-hover">
              <p className="text-xl text-brand-text-medium leading-relaxed mb-8">L&apos;obtention du permis de conduire est un moment de liberté très attendu. Mais l&apos;euphorie retombe souvent face au coût de la première assurance auto. Les jeunes conducteurs étant considérés comme des &quot;profils à risque&quot;, la surprime est inévitable. Heureusement, il existe des solutions pour alléger la facture.</p>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">1. Conduite accompagnée : le sésame pour réduire la surprime</h2>
              <p className="mb-6 text-black">C&apos;est la solution la plus efficace. La surprime jeune conducteur est de 100% la première année. Pour un jeune ayant pratiqué la conduite accompagnée, <strong>cette surprime est réduite de moitié (50%)</strong> dès la première année.</p>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">2. S&apos;inscrire comme conducteur secondaire</h2>
              <p className="mb-6 text-black">Plutôt que d&apos;assurer une voiture à votre nom, utilisez occasionnellement le véhicule de vos parents et soyez déclaré &quot;conducteur secondaire&quot;.</p>
              <ul className="space-y-4 mb-8 list-none pl-0 text-black">
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>L&apos;avantage :</strong> Vous accumulez de l&apos;expérience sans la lourde prime d&apos;un contrat principal.</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" /><span><strong>La règle d&apos;or :</strong> Le conducteur secondaire ne doit conduire qu&apos;occasionnellement.</span></li>
              </ul>
              <div className="bg-brand-bg-blue p-8 rounded-3xl my-10 border border-brand-green/20">
                <h3 className="text-xl font-bold text-brand-navy mb-3 flex items-center gap-2"><span className="text-brand-green text-2xl">💡</span> Astuce Véhicule</h3>
                <p className="text-brand-navy/80 font-medium m-0">Évitez les véhicules puissants ou sportifs. Optez pour une voiture d&apos;occasion de faible puissance fiscale (moins de 5-6 CV). Une formule &quot;Au tiers&quot; sera bien moins onéreuse.</p>
              </div>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">3. Augmenter les franchises</h2>
              <p className="mb-8 text-black">Plus la franchise est élevée, plus la prime baisse. C&apos;est un excellent moyen de réduire la mensualité.</p>
              <h2 className="text-2xl font-bold mt-12 mb-6 text-black">4. Les assurances au kilomètre</h2>
              <p className="mb-8 text-black">Si vous roulez peu, l&apos;assurance au kilomètre est idéale. Vous ne payez que pour l&apos;usage réel de votre voiture. Chez NovaProtect, nous proposons des formules adaptées aux jeunes conducteurs.</p>
              <div className="mt-16 pt-10 border-t border-slate-200 text-center">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Jeune conducteur ? Prenez la route sereinement</h3>
                <p className="text-brand-text-medium mb-8">Réalisez un devis en quelques minutes pour découvrir nos tarifs avantageux.</p>
                <Link href="/auto" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">Découvrir nos offres Auto <ArrowRight className="w-5 h-5" /></Link>
              </div>
            </article>
            <div className="mt-20 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-extrabold text-brand-navy mb-8 uppercase tracking-tight">Articles <span className="text-brand-green">connexes</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/mutuelle-sante" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Santé</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Comment bien choisir sa mutuelle santé ?</h4><p className="text-sm text-brand-text-medium line-clamp-2">Les critères essentiels pour la couverture santé idéale.</p></Link>
                <Link href="/blog/assurance-habitation" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Habitation</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Assurance habitation : ce qui est vraiment couvert</h4><p className="text-sm text-brand-text-medium line-clamp-2">Dégât des eaux, incendie, vol... Les garanties essentielles.</p></Link>
                <Link href="/blog/assurance-animaux" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"><span className="text-xs font-bold text-brand-green uppercase tracking-wider">Animaux</span><h4 className="text-lg font-bold text-brand-navy mt-2 mb-2 group-hover:text-brand-green transition-colors">Pourquoi assurer son animal est indispensable</h4><p className="text-sm text-brand-text-medium line-clamp-2">Les frais vétérinaires peuvent grimper vite.</p></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
