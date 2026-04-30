import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, HeartPulse, Car, Home as HomeIcon, Phone, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Protect Insurance — Trusted Insurance Broker in France | NovaProtect",
  description:
    "Nova Protect is a licensed insurance broker in France (ORIAS n° 07 022 045). Health, auto, home & pet insurance across France. Free quotes.",
  alternates: {
    canonical: "https://novaprotect.site/nova-protect-insurance",
    languages: { "en": "https://novaprotect.site/nova-protect-insurance", "fr-FR": "https://novaprotect.site" },
  },
  openGraph: {
    title: "Nova Protect Insurance — Insurance Broker in France",
    description: "Looking for insurance in France? Nova Protect offers health, auto, home and pet insurance. Licensed ORIAS broker.",
    url: "https://novaprotect.site/nova-protect-insurance",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Nova Protect Insurance" }],
  },
  keywords: [
    "nova protect insurance", "nova protect france", "insurance in france", "insurance broker france",
    "health insurance france", "auto insurance france", "home insurance france", "pet insurance france",
    "expat insurance france", "NovaProtect", "Nova Protect", "ORIAS broker", "french insurance broker",
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org", "@type": "InsuranceAgency",
  name: "NovaProtect", alternateName: ["Nova Protect", "Nova Protect Insurance", "Nova Protect France"],
  url: "https://novaprotect.site", logo: "https://novaprotect.site/logo.png",
  description: "Nova Protect is a licensed insurance broker in France offering health, auto, home and pet insurance.",
  telephone: "+33780180414", email: "contact@novaprotect.site",
  address: { "@type": "PostalAddress", streetAddress: "5 rue de Seze", addressLocality: "Lyon", postalCode: "69006", addressCountry: "FR" },
  areaServed: { "@type": "Country", name: "France" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "500", bestRating: "5" },
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Nova Protect Insurance Services", itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Health Insurance (Mutuelle Santé)", description: "Comprehensive health coverage in France: optical, dental, hospitalization. Reimbursement within 48h." }},
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Insurance", description: "Full vehicle protection in France with 24/7 roadside assistance." }},
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Insurance (Habitation)", description: "Complete home protection: fire, water damage, theft, natural disasters." }},
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pet Insurance (Animaux)", description: "Health coverage for dogs and cats: vet, surgery, medication. Up to 100% reimbursement." }},
  ]},
};

const faqJsonLd = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Nova Protect insurance?", acceptedAnswer: { "@type": "Answer", text: "Nova Protect (NovaProtect) is a licensed insurance broker in France (ORIAS n° 07 022 045). We compare insurance deals to offer optimal health, auto, home, and pet insurance coverage across France." }},
    { "@type": "Question", name: "How does insurance work in France?", acceptedAnswer: { "@type": "Answer", text: "France has a national health system (Sécurité Sociale) covering basic costs. A mutuelle santé covers remaining expenses. Auto insurance is mandatory. Home insurance is required for renters. Nova Protect helps navigate these." }},
    { "@type": "Question", name: "Is Nova Protect available throughout France?", acceptedAnswer: { "@type": "Answer", text: "Yes! Nova Protect serves all regions of France — Paris, Lyon, Marseille, Bordeaux, Toulouse, and everywhere in between." }},
    { "@type": "Question", name: "How do I get a free quote?", acceptedAnswer: { "@type": "Answer", text: "Visit novaprotect.site, select insurance type, fill a brief form. A dedicated advisor contacts you within 24h. Also via WhatsApp: +33 7 80 18 04 14." }},
    { "@type": "Question", name: "Is Nova Protect a legitimate broker?", acceptedAnswer: { "@type": "Answer", text: "Yes. ORIAS n° 07 022 045, regulated by ACPR. Verify at orias.fr." }},
    { "@type": "Question", name: "What types of insurance does Nova Protect offer?", acceptedAnswer: { "@type": "Answer", text: "Four types: Health Insurance (Mutuelle Santé), Auto Insurance, Home Insurance (Habitation), and Pet Insurance (Animaux)." }},
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://novaprotect.site" },
    { "@type": "ListItem", position: 2, name: "Nova Protect Insurance", item: "https://novaprotect.site/nova-protect-insurance" },
  ],
};

const insuranceTypes = [
  { icon: HeartPulse, title: "Health Insurance", subtitle: "Mutuelle Santé", features: ["Optical, dental & hospitalization", "Reimbursement within 48h", "No medical questionnaire", "100% Santé included"], href: "/mutuelles", color: "text-red-500", bgColor: "bg-red-50" },
  { icon: Car, title: "Auto Insurance", subtitle: "Assurance Auto", features: ["Third-party to comprehensive", "0km roadside assistance 24/7", "Replacement vehicle included", "Young driver plans"], href: "/auto", color: "text-blue-500", bgColor: "bg-blue-50" },
  { icon: HomeIcon, title: "Home Insurance", subtitle: "Assurance Habitation", features: ["Fire, water damage & theft", "24/7 emergency assistance", "New-for-old replacement", "Tenant & homeowner plans"], href: "/habitation", color: "text-amber-500", bgColor: "bg-amber-50" },
  { icon: Shield, title: "Pet Insurance", subtitle: "Assurance Animaux", features: ["Dog & cat coverage", "Surgery & medication", "Prevention budget included", "Up to 100% reimbursement"], href: "/animaux", color: "text-green-500", bgColor: "bg-green-50" },
];

export default function NovaProtectInsurancePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray" lang="en">
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
                <Shield className="w-4 h-4" /> Insurance Broker in France
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight leading-tight">
                Nova Protect <span className="text-brand-green">Insurance</span>
              </h1>
              <p className="text-lg text-brand-text-medium mb-8 leading-relaxed max-w-xl">
                Nova Protect is your trusted insurance broker in France. We compare offers from multiple providers to find you the best health, auto, home, and pet insurance — all at competitive prices. Licensed ORIAS broker n° 07 022 045.
              </p>
              <ul className="space-y-4 mb-10">
                {["Licensed & regulated by ACPR (France)", "Free quotes — response within 24 hours", "500+ satisfied clients across France"].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="bg-brand-green/20 p-2 rounded-full text-brand-green flex-shrink-0"><CheckCircle className="w-5 h-5" /></div>
                    <span className="text-brand-navy font-semibold text-lg">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 text-center">Get a Free Quote</Link>
                <a href="https://wa.me/33780180414" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-slate-200 hover:border-brand-navy text-brand-navy font-bold py-4 px-8 rounded-full shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> Contact Us</a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[450px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image src="/logo.png" alt="Nova Protect Insurance - Trusted insurance broker in France" fill className="object-contain bg-brand-bg-blue p-12" priority />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full filter blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      </section>

      {/* Insurance Types */}
      <section className="py-24 bg-brand-bg-blue">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight">Insurance in France — <span className="text-brand-green">Our Services</span></h2>
            <p className="text-lg text-brand-text-medium max-w-3xl mx-auto">Whether you need health, auto, home, or pet insurance in France, Nova Protect compares offers from top French insurers to find you the best deal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insuranceTypes.map((t) => (
              <div key={t.title} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${t.bgColor} flex items-center justify-center`}><t.icon className={`w-7 h-7 ${t.color}`} /></div>
                  <div><h3 className="text-xl font-bold text-brand-navy">{t.title}</h3><p className="text-sm text-brand-text-medium font-medium">{t.subtitle}</p></div>
                </div>
                <ul className="space-y-3 mb-6">{t.features.map(f => (<li key={f} className="flex items-center gap-3 text-brand-text-medium"><CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" /><span>{f}</span></li>))}</ul>
                <Link href={t.href} className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-green-hover transition-colors group">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Insurance Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-12 uppercase tracking-tight text-center">How Insurance Works <span className="text-brand-green">in France</span></h2>
          <div className="prose prose-lg prose-slate mx-auto max-w-none">
            <p className="text-lg text-brand-text-medium leading-relaxed mb-8">France has one of the most comprehensive social security systems in Europe. However, the national health insurance (Sécurité Sociale) only covers a portion of medical expenses. A complementary health insurance (mutuelle santé) covers the gap. Nova Protect helps you find the best supplementary insurance.</p>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">1</span> Health Insurance in France</h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">The Sécurité Sociale reimburses ~70% of standard medical costs. A mutuelle covers the rest plus dental, optical, and alternative medicine. Nova Protect compares dozens of offers — no medical questionnaire required.</p>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">2</span> Auto Insurance in France</h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">Auto insurance is mandatory in France. Nova Protect offers three levels: third-party, intermediate (theft + fire), and comprehensive all-risk. Special rates for young drivers and pay-per-kilometer options available.</p>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">3</span> Home Insurance in France</h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">Home insurance (assurance habitation) is legally required for renters in France. Nova Protect covers fire, water damage, theft, natural disasters, and includes 24/7 emergency assistance with personal liability.</p>

            <h3 className="text-2xl font-bold text-brand-navy mt-12 mb-6 flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center text-sm">4</span> Pet Insurance in France</h3>
            <p className="text-brand-text-medium mb-6 leading-relaxed text-lg">Veterinary costs in France can be significant. Nova Protect pet insurance covers consultations, surgery, medication, and includes a prevention budget. Up to 100% reimbursement for dogs and cats.</p>

            <div className="bg-brand-bg-blue p-8 md:p-10 rounded-3xl my-12 border border-brand-green/20 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full filter blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2"><span className="text-brand-green text-2xl">💡</span> Why Choose Nova Protect?</h4>
              <ul className="space-y-3 text-brand-navy/80 font-medium text-lg">
                <li>• <strong>Independent broker</strong> — We work for you, not insurance companies</li>
                <li>• <strong>ORIAS n° 07 022 045</strong> — Verified and regulated</li>
                <li>• <strong>Free quotes</strong> — Personalized response in 24 hours</li>
                <li>• <strong>Based in France</strong> — Lyon HQ, serving all of France</li>
                <li>• <strong>GDPR compliant</strong> — Your data is protected</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-bg-gray">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-12 uppercase tracking-tight text-center">Frequently Asked <span className="text-brand-green">Questions</span></h2>
          <div className="space-y-6">
            {[
              { q: "What is Nova Protect insurance?", a: "Nova Protect (NovaProtect) is a licensed insurance broker in France (ORIAS n° 07 022 045). We compare offers from multiple companies for optimal health, auto, home, and pet insurance." },
              { q: "How does insurance work in France?", a: "France has mandatory national health insurance (Sécurité Sociale) covering basic costs. A mutuelle covers the rest. Auto insurance is mandatory. Home insurance required for renters. Nova Protect helps navigate all." },
              { q: "Is Nova Protect available throughout France?", a: "Yes! We serve all regions — Paris, Lyon, Marseille, Bordeaux, Toulouse, Nantes, and everywhere in between." },
              { q: "How do I get a free quote?", a: "Visit novaprotect.site, select insurance type, fill a brief form. Advisor contacts you within 24h. Or WhatsApp: +33 7 80 18 04 14." },
              { q: "Is Nova Protect legitimate?", a: "Yes. ORIAS n° 07 022 045, regulated by ACPR. Verify at orias.fr." },
            ].map((item) => (
              <details key={item.q} className="bg-white rounded-2xl shadow-md border border-slate-100 group">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-brand-navy text-lg select-none list-none">{item.q}<ArrowRight className="w-5 h-5 text-brand-green transition-transform group-open:rotate-90 flex-shrink-0 ml-4" /></summary>
                <div className="px-6 pb-6 text-brand-text-medium leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to get started?</h3>
            <p className="text-brand-text-medium mb-8 text-lg">Contact Nova Protect for a free, no-obligation insurance quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">Get Your Free Quote</Link>
              <a href="https://wa.me/33780180414" target="_blank" rel="noopener noreferrer" className="bg-brand-navy hover:bg-brand-navy/90 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
