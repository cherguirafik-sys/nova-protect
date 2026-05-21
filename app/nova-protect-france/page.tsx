import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, MapPin, Phone, ArrowRight, HeartPulse, Car, Home as HomeIcon, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Protect France — Courtier d'Assurances basé à Lyon | NovaProtect",
  description:
    "Nova Protect France, courtier d'assurances agréé ORIAS basé à Lyon. Mutuelle santé, auto, habitation et animaux partout en France. Devis gratuit sous 24h.",
  alternates: { canonical: "https://novaprotect.site/nova-protect-france" },
  openGraph: {
    title: "Nova Protect France — Courtier d'Assurances Agréé basé à Lyon",
    description: "Nova Protect, courtier agréé ORIAS n° 07 022 045 basé à Lyon. Mutuelle santé, auto, habitation et animaux partout en France.",
    url: "https://novaprotect.site/nova-protect-france",
    type: "website",
  },
  keywords: [
    "nova protect france", "nova protect assurance", "nova protect lyon", "courtier assurance france",
    "assurance france entière", "courtier agréé france", "NovaProtect france", "assurance mutuelle france",
    "assurance auto france", "assurance habitation france", "courtier ORIAS france", "courtier assurance Lyon",
    "mutuelle santé Lyon", "devis assurance Lyon",
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org", "@type": "InsuranceAgency",
  name: "NovaProtect", alternateName: ["Nova Protect", "Nova Protect France", "NovaProtect Lyon"],
  url: "https://novaprotect.site", logo: "https://novaprotect.site/logo.png",
  description: "Nova Protect France — Courtier d'assurances agréé ORIAS basé à Lyon, spécialisé en mutuelle santé, auto, habitation et animaux sur le territoire français.",
  telephone: "+33780180414", email: "contact@novaprotect.site",
  address: { "@type": "PostalAddress", streetAddress: "5 rue de Seze", addressLocality: "Lyon", addressRegion: "Auvergne-Rhône-Alpes", postalCode: "69006", addressCountry: "FR" },
  areaServed: [
    { "@type": "City", name: "Lyon" },
    { "@type": "AdministrativeArea", name: "Métropole de Lyon" },
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
    { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
    { "@type": "AdministrativeArea", name: "Nouvelle-Aquitaine" },
    { "@type": "AdministrativeArea", name: "Occitanie" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "500", bestRating: "5" },
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Nova Protect est-il disponible partout en France ?", acceptedAnswer: { "@type": "Answer", text: "Oui, Nova Protect opère sur l'ensemble du territoire français depuis Lyon. Nos services d'assurance sont accessibles en ligne pour la mutuelle santé, l'auto, l'habitation et les animaux." }},
    { "@type": "Question", name: "Qu'est-ce que Nova Protect France ?", acceptedAnswer: { "@type": "Answer", text: "Nova Protect France (NovaProtect) est un courtier d'assurances agréé ORIAS n° 07 022 045, basé à Lyon. Nous proposons des assurances mutuelle santé, auto, habitation et animaux aux meilleures garanties." }},
    { "@type": "Question", name: "Comment obtenir un devis chez Nova Protect France ?", acceptedAnswer: { "@type": "Answer", text: "Rendez-vous sur novaprotect.site, choisissez votre type d'assurance et remplissez le formulaire. Un conseiller dédié vous recontacte sous 24h. Vous pouvez aussi nous joindre par WhatsApp au +33 7 80 18 04 14." }},
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://novaprotect.site" },
    { "@type": "ListItem", position: 2, name: "Nova Protect France", item: "https://novaprotect.site/nova-protect-france" },
  ],
};

const regions = [
  { name: "Auvergne-Rhône-Alpes", cities: "Lyon, Grenoble, Saint-Étienne" },
  { name: "Île-de-France", cities: "Versailles, Boulogne, Créteil" },
  { name: "Provence-Alpes-Côte d'Azur", cities: "Marseille, Nice, Toulon" },
  { name: "Nouvelle-Aquitaine", cities: "Bordeaux, Limoges, Poitiers" },
  { name: "Occitanie", cities: "Toulouse, Montpellier, Nîmes" },
  { name: "Hauts-de-France", cities: "Lille, Amiens, Roubaix" },
  { name: "Grand Est", cities: "Strasbourg, Metz, Reims" },
  { name: "Pays de la Loire", cities: "Nantes, Angers, Le Mans" },
  { name: "Bretagne", cities: "Rennes, Brest, Lorient" },
  { name: "Normandie", cities: "Rouen, Caen, Le Havre" },
  { name: "Bourgogne-Franche-Comté", cities: "Dijon, Besançon, Auxerre" },
  { name: "Centre-Val de Loire", cities: "Tours, Orléans, Bourges" },
];

export default function NovaProtectFrancePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 overflow-hidden relative bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6 uppercase tracking-wider">
                <MapPin className="w-4 h-4" /> Partout en France
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight leading-tight">
                Nova Protect <span className="text-brand-green">France</span>
              </h1>
              <p className="text-lg text-brand-text-medium mb-8 leading-relaxed max-w-xl">
                Nova Protect France est votre courtier d&apos;assurances de confiance sur l&apos;ensemble du territoire français. Basé à Lyon et agréé ORIAS n° 07 022 045, nous comparons les meilleures offres du marché pour vous proposer des assurances Mutuelle Santé, Auto, Habitation et Animaux adaptées à vos besoins, où que vous soyez en France.
              </p>
              <ul className="space-y-4 mb-10">
                {["Courtier agréé ORIAS — contrôle ACPR", "Couverture nationale sur toute la France", "+500 clients satisfaits dans toute la France"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0"><CheckCircle className="w-5 h-5" /></div>
                    <span className="text-brand-navy font-semibold text-lg">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 text-center">Obtenir un devis gratuit</Link>
                <a href="https://wa.me/33780180414" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-200 hover:border-brand-navy text-brand-navy font-bold py-4 px-8 rounded-full shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> Appeler un conseiller</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image src="/logo.png" alt="Nova Protect France - Courtier d'assurances agréé partout en France" fill className="object-contain bg-brand-bg-blue p-12" priority />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full filter blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      </section>

      {/* Services */}
      <section className="py-24 bg-brand-bg-blue">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-12 uppercase tracking-tight text-center">Nos Assurances <span className="text-brand-green">Partout en France</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HeartPulse, title: "Mutuelle Santé", desc: "Couverture santé complète : optique, dentaire, hospitalisation. Remboursements sous 48h.", href: "/mutuelles" },
              { icon: Car, title: "Assurance Auto", desc: "Tiers, intermédiaire ou tous risques. Dépannage 0 km et assistance 24/7 dans toute la France.", href: "/auto" },
              { icon: HomeIcon, title: "Assurance Habitation", desc: "Protection logement : incendie, dégâts des eaux, vol. Assistance d'urgence 24/7.", href: "/habitation" },
              { icon: Shield, title: "Assurance Animaux", desc: "Chien et chat : consultations, chirurgie, médicaments. Jusqu'à 100% remboursé.", href: "/animaux" },
            ].map(s => (
              <Link key={s.title} href={s.href} className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-b-4 border-transparent hover:border-brand-green flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-bg-blue flex items-center justify-center mb-4"><s.icon className="w-8 h-8 text-brand-icon-blue group-hover:scale-110 transition-transform" /></div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{s.title}</h3>
                <p className="text-sm text-brand-text-medium mb-4">{s.desc}</p>
                <span className="mt-auto text-brand-green font-bold text-sm inline-flex items-center gap-1">En savoir plus <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight text-center">Nova Protect couvre <span className="text-brand-green">toute la France</span></h2>
          <p className="text-lg text-brand-text-medium text-center mb-12 max-w-3xl mx-auto">
            Basé à Lyon, Nova Protect vous accompagne aussi à Marseille, Bordeaux, Toulouse et dans n&apos;importe quelle autre ville française pour trouver l&apos;assurance idéale au meilleur prix.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map(r => (
              <div key={r.name} className="bg-brand-bg-gray rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <h3 className="font-bold text-brand-navy">{r.name}</h3>
                </div>
                <p className="text-sm text-brand-text-medium pl-8">{r.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-brand-bg-gray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-12 uppercase tracking-tight text-center">Pourquoi choisir <span className="text-brand-green">Nova Protect France</span> ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: "Courtier Indépendant", desc: "Nous ne sommes liés à aucune compagnie. Nous comparons objectivement les offres pour vous." },
              { icon: CheckCircle, title: "Agréé ORIAS", desc: "Immatriculation n° 07 022 045, sous contrôle de l'ACPR. Vérifiable sur orias.fr." },
              { icon: Users, title: "+500 Clients Satisfaits", desc: "Notre expertise et notre proximité ont conquis des clients dans toute la France." },
              { icon: MapPin, title: "Couverture Nationale", desc: "De la métropole aux DOM-TOM, Nova Protect France vous accompagne partout." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-3xl p-8 shadow-md border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4"><item.icon className="w-6 h-6 text-brand-green" /></div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-brand-text-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-12 uppercase tracking-tight text-center">Questions <span className="text-brand-green">Fréquentes</span></h2>
          <div className="space-y-6">
            {[
              { q: "Nova Protect est-il disponible partout en France ?", a: "Oui, Nova Protect opère sur tout le territoire français depuis Lyon. Nos services sont 100% en ligne et accessibles partout." },
              { q: "Qu'est-ce que Nova Protect France ?", a: "Nova Protect France (NovaProtect) est un courtier d'assurances agréé ORIAS n° 07 022 045, basé à Lyon. Nous proposons Mutuelle Santé, Auto, Habitation et Animaux aux meilleures garanties." },
              { q: "Comment contacter Nova Protect France ?", a: "Par téléphone : +33 7 80 18 04 14, par email : contact@novaprotect.site, ou via le formulaire de devis gratuit sur novaprotect.site." },
            ].map(item => (
              <details key={item.q} className="bg-brand-bg-gray rounded-2xl shadow-md border border-slate-100 group">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-brand-navy text-lg select-none list-none">{item.q}<ArrowRight className="w-5 h-5 text-brand-green transition-transform group-open:rotate-90 flex-shrink-0 ml-4" /></summary>
                <div className="px-6 pb-6 text-brand-text-medium leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/#contact" className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">Obtenir mon devis gratuit</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
