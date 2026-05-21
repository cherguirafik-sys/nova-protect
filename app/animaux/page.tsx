import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mutuelle Animaux Lyon & France - Assurance Chien & Chat | NovaProtect",
  description:
    "Courtier mutuelle animaux à Lyon et en France : assurance chien et chat, consultations, chirurgie, médicaments, forfait prévention. Devis gratuit.",
  alternates: {
    canonical: "https://novaprotect.site/animaux",
  },
  openGraph: {
    title: "Mutuelle Animaux Lyon & France | NovaProtect",
    description:
      "Assurance santé animaux : consultations vétérinaires, chirurgie, vaccins. Jusqu'à 100% de remboursement. Courtier agréé ORIAS.",
    url: "https://novaprotect.site/animaux",
    type: "website",
  },
  keywords: [
    "mutuelle animaux",
    "assurance chien",
    "assurance chat",
    "mutuelle vétérinaire",
    "assurance animaux de compagnie",
    "mutuelle chien chat",
    "NovaProtect animaux",
    "assurance santé animaux",
    "assurance animaux Lyon",
    "mutuelle chien chat Lyon",
    "devis assurance animaux Lyon",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Mutuelle Animaux NovaProtect",
  description: "Assurance chien et chat : consultations vétérinaires, chirurgie, médicaments, forfait prévention. Jusqu'à 100% remboursé.",
  provider: { "@type": "InsuranceAgency", name: "NovaProtect", alternateName: ["Nova Protect", "NovaProtect Lyon"], url: "https://novaprotect.site" },
  areaServed: [{ "@type": "City", name: "Lyon" }, { "@type": "Country", name: "France" }],
  serviceType: "Assurance animaux",
  url: "https://novaprotect.site/animaux",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://novaprotect.site" },
    { "@type": "ListItem", position: 2, name: "Assurance Animaux", item: "https://novaprotect.site/animaux" },
  ],
};

export default function AnimauxPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-24 pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
  <ol className="inline-flex items-center gap-2 text-sm text-brand-text-medium bg-white px-4 py-2 rounded-full shadow-sm w-fit border border-slate-100">
    <li><Link href="/" className="hover:text-brand-green transition-colors">Accueil</Link></li>
    <li className="text-slate-300">/</li>
    <li className="text-brand-navy font-semibold bg-slate-100 px-3 py-1 rounded-full">Assurance Animaux</li>
  </ol>
</nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6 uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1.1-3.48 0 0-1.92-6.42-.5-7 1.42-.58 4.52.26 6.4 2.26.65-.17 1.32-.26 2-.26z" /><path d="M9 13h.01" /><path d="M15 13h.01" /><path d="M12 16h.01" /></svg>
                Animaux
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight leading-tight">
                Mutuelle <span className="text-brand-green">Animaux</span>
              </h1>
              <p className="text-lg text-brand-text-medium mb-8 leading-relaxed max-w-xl">
                Parce qu'ils font partie de la famille, vos compagnons méritent les meilleurs soins. NovaProtect vous propose une mutuelle chien et chat pour couvrir leurs frais de santé vétérinaires sans vous ruiner.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Prise en charge des consultations et opérations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Forfait prévention (vaccins, vermifuges)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Assistance en cas de perte de l'animal</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 text-center">
                  Obtenir un devis gratuit
                </Link>
                <a href="https://wa.me/33780180414" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-200 hover:border-brand-navy text-brand-navy font-bold py-4 px-8 rounded-full shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Appeler un conseiller
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/Animaux.png" 
                alt="Mutuelle animaux NovaProtect - assurance chien et chat en France" 
                fill
                className="object-cover"
                priority
              />
              {/* Decorative Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-brand-green text-white p-3 rounded-full">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-extrabold text-brand-navy">Jusqu'à 100%</p>
                  <p className="text-sm font-medium text-brand-text-medium">De frais remboursés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full filter blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      </section>

      {/* Blog/Details Content */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-8 uppercase tracking-tight">Pourquoi choisir la mutuelle animaux NovaProtect ?</h2>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              Les frais vétérinaires peuvent grimper très rapidement en cas d'accident ou de maladie de votre animal. Pour ne jamais avoir à choisir entre votre budget et la santé de votre boule de poils, NovaProtect vous offre des solutions de mutuelle chien et chat accessibles et protectrices.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">1</span>
              Des garanties claires et sans surprise
            </h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              Nous remboursons les frais liés aux maladies et aux accidents (consultations, examens, interventions chirurgicales, médicaments prescrits). De plus, nos formules incluent un forfait prévention pour financer les vaccins, les vermifuges, et les traitements anti-puces annuels de votre animal.
            </p>

            <div className="bg-brand-bg-blue p-8 md:p-10 rounded-3xl my-12 border border-brand-green/20 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full filter blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                <span className="text-brand-green text-2xl">💡</span> Le saviez-vous ?
              </h4>
              <p className="text-brand-navy/80 font-medium text-lg leading-relaxed">
                Avec l'âge, les risques de développer des maladies chroniques augmentent chez les chiens et les chats. En souscrivant notre mutuelle le plus tôt possible, vous garantissez à votre compagnon une couverture à vie, même si son état de santé vient à se dégrader.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">2</span>
              Des démarches ultra-simples
            </h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              Après votre visite chez le vétérinaire, il vous suffit de nous envoyer la feuille de soins remplie et la facture depuis votre espace client. Nous traitons votre demande et procédons au remboursement par virement bancaire sous quelques jours.
            </p>
            
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Protégez votre fidèle compagnon</h3>
              <p className="text-brand-text-medium mb-8 text-lg">
                Faites un devis gratuit pour la mutuelle de votre chien ou de votre chat et assurez-lui la meilleure santé possible tout au long de sa vie.
              </p>
              <Link href="/#contact" className="inline-block bg-brand-navy hover:bg-brand-navy/90 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Obtenir mon tarif Animaux
              </Link>
            </div>

            {/* Article connexe */}
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Article connexe</h3>
              <Link href="/blog/assurance-animaux" className="bg-brand-bg-blue rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-all group border border-brand-green/20">
                <div className="bg-brand-green/10 p-3 rounded-xl flex-shrink-0"><Shield className="w-6 h-6 text-brand-green" /></div>
                <div>
                  <p className="font-bold text-brand-navy group-hover:text-brand-green transition-colors">Pourquoi assurer son animal de compagnie est indispensable</p>
                  <p className="text-sm text-brand-text-medium">Les frais vétérinaires peuvent grimper très vite. Découvrez pourquoi l&apos;assurance est essentielle.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
