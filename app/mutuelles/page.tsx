import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, HeartPulse, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mutuelle Santé - Couverture Complète & Personnalisée | NovaProtect",
  description:
    "Découvrez nos mutuelles santé sur-mesure : optique, dentaire, hospitalisation, médecine douce. Remboursements sous 48h. Sans questionnaire médical. Devis gratuit.",
  alternates: {
    canonical: "https://novaprotect.site/mutuelles",
  },
  openGraph: {
    title: "Mutuelle Santé Personnalisée | NovaProtect",
    description:
      "Couverture santé complète : optique, dentaire, hospitalisation. Remboursements rapides sous 48h. Courtier agréé ORIAS.",
    url: "https://novaprotect.site/mutuelles",
    type: "website",
  },
  keywords: [
    "mutuelle santé",
    "mutuelle pas cher",
    "complémentaire santé",
    "mutuelle optique dentaire",
    "mutuelle personnalisée",
    "mutuelle sans questionnaire médical",
    "NovaProtect mutuelle",
    "courtier mutuelle Lyon",
  ],
};

export default function MutuellesPage() {
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
                <HeartPulse className="w-4 h-4" /> Santé
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight leading-tight">
                Mutuelle <span className="text-brand-green">Santé</span>
              </h1>
              <p className="text-lg text-brand-text-medium mb-8 leading-relaxed max-w-xl">
                Découvrez nos solutions de mutuelle santé adaptées à vos besoins et à votre budget. NovaProtect vous accompagne pour vous offrir la meilleure couverture médicale, avec des remboursements rapides et un service client dédié.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Remboursements rapides sous 48h</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Réseau de soins partenaires (Tiers payant)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-brand-navy font-semibold text-lg">Assistance 24/7 en cas d'urgence</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 text-center">
                  Obtenir un devis gratuit
                </Link>
                <a href="https://wa.me/33780180414" target="_blank" className="bg-white border-2 border-slate-200 hover:border-brand-navy text-brand-navy font-bold py-4 px-8 rounded-full shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Appeler un conseiller
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/Mutuelle Santé.png" 
                alt="Mutuelle Santé" 
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
                  <p className="font-extrabold text-brand-navy">100% Santé</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-8 uppercase tracking-tight">Pourquoi choisir une mutuelle santé NovaProtect ?</h2>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              La santé est ce que nous avons de plus précieux. C'est pourquoi NovaProtect a conçu des offres de mutuelle santé modulables qui s'adaptent à votre profil : étudiant, jeune actif, famille ou senior. Notre objectif est de vous garantir un accès aux soins sans vous soucier de votre budget.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">1</span>
              Des garanties qui font la différence
            </h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              En optant pour notre mutuelle, vous bénéficiez non seulement d'une excellente prise en charge des soins courants, mais aussi de forfaits avantageux pour les dépassements d'honoraires, l'optique, le dentaire et les médecines douces (ostéopathie, chiropraxie, psychologie). Nous adaptons les niveaux de remboursement selon vos priorités.
            </p>

            <div className="bg-brand-bg-blue p-8 md:p-10 rounded-3xl my-12 border border-brand-green/20 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full filter blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                <span className="text-brand-green text-2xl">💡</span> Le saviez-vous ?
              </h4>
              <p className="text-brand-navy/80 font-medium text-lg leading-relaxed">
                La réforme 100% Santé vous permet de bénéficier d'un reste à charge zéro sur une sélection de lunettes, d'aides auditives et de prothèses dentaires. NovaProtect inclut automatiquement le 100% Santé dans toutes ses formules responsables.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">2</span>
              Comment ça marche ?
            </h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">
              La souscription est rapide et 100% dématérialisée. Vous obtenez un tarif en quelques clics, vous signez électroniquement et vous êtes couvert immédiatement. Votre carte de tiers payant dématérialisée est disponible instantanément dans votre espace client sur votre smartphone.
            </p>
            
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Prêt à mieux vous protéger ?</h3>
              <p className="text-brand-text-medium mb-8 text-lg">
                N'attendez plus pour bénéficier d'une couverture santé optimale. Nos conseillers sont à votre disposition pour réaliser un bilan personnalisé de vos besoins.
              </p>
              <Link href="/#contact" className="inline-block bg-brand-navy hover:bg-brand-navy/90 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                Demander mon étude personnalisée
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
