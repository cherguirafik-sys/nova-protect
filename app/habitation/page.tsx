import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Home as HomeIcon, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assurance Habitation - Protection Logement Complète | NovaProtect",
  description:
    "Protégez votre logement avec notre assurance habitation : incendie, dégâts des eaux, vol, catastrophes naturelles. Assistance d'urgence 24/7. Devis gratuit.",
  alternates: {
    canonical: "https://novaprotect.site/habitation",
  },
  openGraph: {
    title: "Assurance Habitation Complète | NovaProtect",
    description:
      "Protection logement tout risque : incendie, dégâts des eaux, vol. Assistance 24/7 et indemnisation rapide. Courtier agréé ORIAS.",
    url: "https://novaprotect.site/habitation",
    type: "website",
  },
  keywords: [
    "assurance habitation",
    "assurance multirisque habitation",
    "assurance logement",
    "assurance incendie",
    "assurance dégât des eaux",
    "assurance vol habitation",
    "NovaProtect habitation",
    "courtier assurance habitation Lyon",
  ],
};

export default function HabitationPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6 uppercase tracking-wider">
                <HomeIcon className="w-4 h-4" /> Habitation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight leading-tight">
                Assurance <span className="text-brand-green">Habitation</span>
              </h1>
              <p className="text-lg text-brand-text-medium mb-8 leading-relaxed max-w-xl">
                Protégez votre logement et vos biens précieux avec NovaProtect. Que vous soyez locataire ou propriétaire, nous vous proposons une couverture complète adaptée à votre foyer.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Protection incendie, dégâts des eaux, vol</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Assistance d'urgence 24/7 et serrurerie</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Relogement immédiat en cas de sinistre majeur</span>
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
                src="/Habitations.png" 
                alt="Assurance Habitation" 
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
                  <p className="font-extrabold text-brand-navy">Couverture Multi-risques</p>
                  <p className="text-sm font-medium text-brand-text-medium">Tranquillité absolue</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-8 uppercase tracking-tight">Pourquoi choisir l'assurance habitation NovaProtect ?</h2>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              Votre maison est bien plus qu'un simple toit, c'est le cœur de votre vie familiale et le gardien de vos souvenirs. Avec NovaProtect, vous bénéficiez d'une assurance habitation complète et personnalisable, conçue pour vous protéger contre tous les aléas du quotidien.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">1</span>
              Des garanties sur-mesure pour votre logement
            </h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              Que vous habitiez un appartement en ville ou une maison à la campagne, nos offres s'adaptent à vos besoins. Nous couvrons non seulement les dommages matériels liés aux incendies, dégâts des eaux, ou cambriolages, mais également votre responsabilité civile pour une protection totale.
            </p>

            <div className="bg-brand-bg-blue p-8 md:p-10 rounded-3xl my-12 border border-brand-green/20 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full filter blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                <span className="text-brand-green text-2xl">💡</span> Le saviez-vous ?
              </h4>
              <p className="text-brand-navy/80 font-medium text-lg leading-relaxed">
                Notre option "Équipement à neuf" vous permet d'être remboursé à la valeur d'achat pour vos appareils électroménagers et high-tech en cas de sinistre, sans aucune vétusté déduite pendant les 5 premières années.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">2</span>
              Une assistance réactive et disponible
            </h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              En cas d'urgence (fuite importante, perte de clés, bris de vitre), notre service d'assistance est joignable 24h/24 et 7j/7. Nous organisons et prenons en charge l'intervention rapide d'artisans qualifiés pour sécuriser votre domicile dans les plus brefs délais.
            </p>
            
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Protégez votre cocon dès aujourd'hui</h3>
              <p className="text-brand-text-medium mb-8 text-lg">
                Demandez votre devis en ligne et découvrez nos tarifs compétitifs pour assurer votre habitation et vos biens les plus précieux.
              </p>
              <Link href="/#contact" className="inline-block bg-brand-navy hover:bg-brand-navy/90 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Obtenir mon tarif Habitation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
