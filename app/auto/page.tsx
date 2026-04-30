import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Car, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assurance Auto - Tous Risques, Tiers & Intermédiaire | NovaProtect",
  description:
    "Assurance auto adaptée à votre profil : tiers, intermédiaire ou tous risques. Dépannage 0 km, véhicule de remplacement, assistance 24/7. Devis gratuit en ligne.",
  alternates: {
    canonical: "https://novaprotect.site/auto",
  },
  openGraph: {
    title: "Assurance Auto Tous Risques | NovaProtect",
    description:
      "Protection véhicule complète : dépannage 0 km, assistance 24/7, prêt véhicule. Courtier agréé ORIAS.",
    url: "https://novaprotect.site/auto",
    type: "website",
  },
  keywords: [
    "assurance auto",
    "assurance voiture",
    "assurance tous risques",
    "assurance auto pas cher",
    "assurance jeune conducteur",
    "dépannage 0 km",
    "NovaProtect auto",
    "courtier assurance auto Lyon",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org", "@type": "Service",
  name: "Assurance Auto NovaProtect",
  description: "Assurance auto adaptée : tiers, intermédiaire ou tous risques. Dépannage 0 km, véhicule de remplacement, assistance 24/7.",
  provider: { "@type": "InsuranceAgency", name: "NovaProtect", alternateName: ["Nova Protect", "Nova Protect Insurance"], url: "https://novaprotect.site" },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Auto Insurance",
  url: "https://novaprotect.site/auto",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://novaprotect.site" },
    { "@type": "ListItem", position: 2, name: "Assurance Auto", item: "https://novaprotect.site/auto" },
  ],
};

export default function AutoPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-24 pb-0">
        <ol className="flex items-center gap-2 text-sm text-brand-text-medium">
          <li><Link href="/" className="hover:text-brand-green transition-colors">Accueil</Link></li>
          <li>/</li>
          <li className="text-brand-navy font-semibold">Assurance Auto</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6 uppercase tracking-wider">
                <Car className="w-4 h-4" /> Auto
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight leading-tight">
                Assurance <span className="text-brand-green">Auto</span>
              </h1>
              <p className="text-lg text-brand-text-medium mb-8 leading-relaxed max-w-xl">
                Prenez la route en toute sécurité avec NovaProtect. De l'assurance au tiers à la formule tous risques, trouvez la couverture idéale pour votre véhicule et votre profil de conducteur.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Dépannage 0 km et assistance 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Prêt d'un véhicule de remplacement</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Indemnisation rapide en cas de sinistre</span>
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
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
                alt="Assurance auto NovaProtect - protection véhicule tous risques en France" 
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
                  <p className="font-extrabold text-brand-navy">Assistance 0 km</p>
                  <p className="text-sm font-medium text-brand-text-medium">Inclus dans nos offres</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-8 uppercase tracking-tight">Pourquoi choisir l'assurance auto NovaProtect ?</h2>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              La route comporte son lot d'imprévus. Avec l'assurance auto NovaProtect, conduisez l'esprit léger. Nous vous offrons des garanties solides et une prise en charge rapide pour vous accompagner à chaque kilomètre, quels que soient vos trajets.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">1</span>
              Des formules adaptées à votre profil
            </h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              Jeune conducteur, automobiliste expérimenté ou petit rouleur, nous avons la formule qu'il vous faut. Choisissez entre une assurance au tiers pour l'essentiel, une formule intermédiaire contre le vol et l'incendie, ou notre assurance tous risques pour une protection maximale, même en cas d'accident responsable.
            </p>

            <div className="bg-brand-bg-blue p-8 md:p-10 rounded-3xl my-12 border border-brand-green/20 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full filter blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                <span className="text-brand-green text-2xl">💡</span> Le saviez-vous ?
              </h4>
              <p className="text-brand-navy/80 font-medium text-lg leading-relaxed">
                Avec notre option "Dépannage 0 km", vous êtes secouru même si votre véhicule tombe en panne devant chez vous. Nous prenons en charge le remorquage et vous fournissons un véhicule de prêt pour vous permettre de continuer votre route.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">2</span>
              Déclaration de sinistre simplifiée
            </h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              Un accrochage ? Un bris de glace ? Notre processus de déclaration est simple et rapide via notre espace client. Notre réseau de garages partenaires vous garantit des réparations de qualité sans avance de frais (hors franchise éventuelle).
            </p>
            
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Prêt à rouler assuré ?</h3>
              <p className="text-brand-text-medium mb-8 text-lg">
                Calculez votre devis auto en moins de 3 minutes et découvrez les économies que vous pourriez réaliser avec NovaProtect.
              </p>
              <Link href="/#contact" className="inline-block bg-brand-navy hover:bg-brand-navy/90 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Obtenir mon tarif Auto
              </Link>
            </div>

            {/* Article connexe */}
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Article connexe</h3>
              <Link href="/blog/assurance-auto" className="bg-brand-bg-blue rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg transition-all group border border-brand-green/20">
                <div className="bg-brand-green/10 p-3 rounded-xl flex-shrink-0"><Car className="w-6 h-6 text-brand-green" /></div>
                <div>
                  <p className="font-bold text-brand-navy group-hover:text-brand-green transition-colors">Jeunes conducteurs : astuces pour faire baisser la prime</p>
                  <p className="text-sm text-brand-text-medium">Nos meilleures astuces légales et pratiques pour réduire votre cotisation.</p>
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
