"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle, Shield, Clock, Gift, Star, ShieldCheck,
  Car, Home as HomeIcon, HeartPulse, ChevronDown, Phone
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import { LogoLoop } from "@/components/ui/logo-loop";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

// Logos for the LogoLoop (Health insurance services)
const insuranceLogos = [
  { node: <span className="text-brand-green">✦</span>, title: "Mutuelle Santé" },
  { node: <span className="text-brand-green">✦</span>, title: "Assurance Auto" },
  { node: <span className="text-brand-green">✦</span>, title: "Assurance Habitation" },
  { node: <span className="text-brand-green">✦</span>, title: "Mutuelle Animaux" },
  { node: <span className="text-brand-green">✦</span>, title: "Prévoyance Famille" },
  { node: <span className="text-brand-green">✦</span>, title: "Assurance Scolaire" },
  { node: <span className="text-brand-green">✦</span>, title: "Protection Juridique" },
  { node: <span className="text-brand-green">✦</span>, title: "Assurance Emprunteur" },
];

// Reusable animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen font-sans">

      {/* HEADER / NAVBAR */}
      <Navbar />

      {/* PROMO BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-[#122238] text-white py-2 text-center text-xs sm:text-sm font-semibold tracking-widest uppercase border-b-2 border-brand-green/50"
      >
        PROTÉGER CE QUI COMPTE VRAIMENT
      </motion.div>

      {/* TRUST BAR */}
      <div className="bg-brand-blue text-white py-3 overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs sm:text-sm"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2"><CheckCircle className="text-brand-green h-4 w-4" /> <span><strong>Courtier agréé</strong> ORIAS n° 07 022 045</span></motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-2"><Shield className="text-brand-yellow h-4 w-4" /> <span><strong>Données 100% sécurisées</strong> (RGPD)</span></motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-2"><Clock className="text-brand-green-light h-4 w-4" /> <span><strong>Réponse sous</strong> 24h ouvrées</span></motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-2"><Gift className="text-red-400 h-4 w-4" /> <span><strong>Devis</strong> 100% gratuit &amp; sans engagement</span></motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-2"><Star className="text-brand-yellow h-4 w-4 fill-brand-yellow" /> <span><strong>+500 clients</strong> satisfaits</span></motion.div>
        </motion.div>
      </div>


      {/* HERO SECTION */}
      <section className="bg-brand-bg-gray relative overflow-hidden min-h-[600px] flex items-center">
        {/* Right: Image Carousel (Absolute full height, right half of screen) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 right-0 w-full lg:w-[55%] h-full hidden md:block z-0"
        >
          <HeroCarousel />
        </motion.div>

        <div className="container mx-auto flex flex-col lg:flex-row items-stretch relative z-10">

          {/* Left: Content & Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-1/2 py-10 px-4 lg:py-16 flex flex-col justify-center"
          >
            <motion.h1 variants={fadeLeft} className="text-2xl md:text-3xl font-extrabold text-brand-navy leading-tight mb-3 uppercase tracking-tight">
              Optimisez votre protection <br className="hidden md:block" />
              avec NovaProtect : <br className="hidden md:block" />
              l&apos;assurance pour tous.
            </motion.h1>
            <motion.p variants={fadeLeft} className="text-brand-text-medium text-sm mb-5 max-w-lg">
              Mutuelle, Auto, Habitation et Animaux : bénéficiez des meilleures garanties, en toute simplicité.
            </motion.p>

            {/* Form */}
            <motion.form
              variants={scaleUp}
              className="bg-white rounded-3xl shadow-xl p-4 border-t-4 border-brand-green max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Votre demande de devis a été envoyée avec succès ! Un conseiller vous contactera sous 24h.");
              }}
            >
              <h3 className="font-bold text-brand-navy mb-3 uppercase text-xs tracking-wider">Recevez votre étude personnalisée gratuitement</h3>

              <div className="flex flex-wrap gap-2 mb-4 text-xs font-medium">
                <label className="cursor-pointer relative">
                  <input type="radio" name="insurance_type" defaultChecked className="peer sr-only" value="Mutuelle Santé" />
                  <div className="px-3 py-1.5 rounded-md border border-brand-border text-brand-text-medium peer-checked:border-brand-green peer-checked:bg-brand-green/10 peer-checked:text-brand-green hover:border-brand-green hover:text-brand-green transition-all shadow-sm">
                    Mutuelle Santé
                  </div>
                </label>
                <label className="cursor-pointer relative">
                  <input type="radio" name="insurance_type" className="peer sr-only" value="Auto" />
                  <div className="px-3 py-1.5 rounded-md border border-brand-border text-brand-text-medium peer-checked:border-brand-green peer-checked:bg-brand-green/10 peer-checked:text-brand-green hover:border-brand-green hover:text-brand-green transition-all shadow-sm">
                    Auto
                  </div>
                </label>
                <label className="cursor-pointer relative">
                  <input type="radio" name="insurance_type" className="peer sr-only" value="Habitation" />
                  <div className="px-3 py-1.5 rounded-md border border-brand-border text-brand-text-medium peer-checked:border-brand-green peer-checked:bg-brand-green/10 peer-checked:text-brand-green hover:border-brand-green hover:text-brand-green transition-all shadow-sm">
                    Habitation
                  </div>
                </label>
                <label className="cursor-pointer relative">
                  <input type="radio" name="insurance_type" className="peer sr-only" value="Animaux" />
                  <div className="px-3 py-1.5 rounded-md border border-brand-border text-brand-text-medium peer-checked:border-brand-green peer-checked:bg-brand-green/10 peer-checked:text-brand-green hover:border-brand-green hover:text-brand-green transition-all shadow-sm">
                    Animaux
                  </div>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                <input type="text" required placeholder="Code Postal (ex: 75001)" className="border border-brand-border rounded-md px-3 py-2 text-black text-xs outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder:text-slate-400" />
                <input type="text" required placeholder="Prénom et Nom" className="border border-brand-border rounded-md px-3 py-2 text-black text-xs outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder:text-slate-400" />
                <input type="email" required placeholder="Adresse E-mail" className="border border-brand-border rounded-md px-3 py-2 text-black text-xs outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all md:col-span-2 placeholder:text-slate-400" />
                <input type="tel" required placeholder="Numéro de Téléphone" className="border border-brand-border rounded-md px-3 py-2 text-black text-xs outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all md:col-span-2 placeholder:text-slate-400" />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold py-2.5 rounded-md shadow-lg text-xs"
              >
                VALIDER MA DEMANDE
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
      {/* PARTNERS LOOP */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-2xl md:text-3xl font-black text-brand-navy mb-10 uppercase tracking-[0.2em]">
            Nos partenaires <span className="text-brand-green">de confiance</span>
          </p>
          <LogoLoop
            logos={insuranceLogos}
            speed={40}
            direction="left"
            logoHeight={40}
            gap={80}
            scaleOnHover
            fadeOut
            fadeOutColor="white"
            className="text-brand-navy/80 hover:text-brand-green transition-colors font-serif italic w-full"
          />
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-brand-bg-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-12 uppercase tracking-wide"
          >
            Nos Solutions D&apos;Assurances
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {/* Service Card 1 */}
            <motion.div variants={scaleUp} className="h-full">
              <Link href="/mutuelles" className="h-full bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center border-b-4 border-transparent hover:border-brand-green group cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full border-2 border-brand-icon-blue flex items-center justify-center mb-6 group-hover:bg-brand-bg-blue transition-colors">
                  <HeartPulse className="text-brand-icon-blue h-10 w-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 uppercase">Mutuelles</h3>
                <span className="mt-auto bg-brand-green text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-brand-green-hover transition-colors inline-block">EN SAVOIR PLUS</span>
              </Link>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div variants={scaleUp} className="h-full">
              <Link href="/habitation" className="h-full bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center border-b-4 border-transparent hover:border-brand-green group cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full border-2 border-brand-icon-blue flex items-center justify-center mb-6 group-hover:bg-brand-bg-blue transition-colors">
                  <HomeIcon className="text-brand-icon-blue h-10 w-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 uppercase">Habitations</h3>
                <span className="mt-auto bg-brand-green text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-brand-green-hover transition-colors inline-block">EN SAVOIR PLUS</span>
              </Link>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div variants={scaleUp} className="h-full">
              <Link href="/auto" className="h-full bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center border-b-4 border-transparent hover:border-brand-green group cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full border-2 border-brand-icon-blue flex items-center justify-center mb-6 group-hover:bg-brand-bg-blue transition-colors">
                  <Car className="text-brand-icon-blue h-10 w-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 uppercase">Autos</h3>
                <span className="mt-auto bg-brand-green text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-brand-green-hover transition-colors inline-block">EN SAVOIR PLUS</span>
              </Link>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div variants={scaleUp} className="h-full">
              <Link href="/animaux" className="h-full bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-8 flex flex-col items-center border-b-4 border-transparent hover:border-brand-green group cursor-pointer text-center">
                <div className="w-20 h-20 rounded-full border-2 border-brand-icon-blue flex items-center justify-center mb-6 group-hover:bg-brand-bg-blue transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-icon-blue group-hover:scale-110 transition-transform"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1.1-3.48 0 0-1.92-6.42-.5-7 1.42-.58 4.52.26 6.4 2.26.65-.17 1.32-.26 2-.26z" /><path d="M9 13h.01" /><path d="M15 13h.01" /><path d="M12 16h.01" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 uppercase">Animaux</h3>
                <span className="mt-auto bg-brand-green text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-brand-green-hover transition-colors inline-block">EN SAVOIR PLUS</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ SECTION */}
      <FAQ />

        {/* CONTACT SECTION */}
      <Contact />

      {/* FOOTER */}
      <footer className="bg-brand-navy text-white pt-16 pb-8 border-t-4 border-brand-green">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="container mx-auto px-4 max-w-6xl text-center flex flex-col items-center"
        >
          <Image src="/logo.png" alt="NovaProtect Logo" width={80} height={30} className="object-contain" priority />

          <p className="text-brand-text-medium text-sm mb-12">Votre courtier de proximité pour une protection optimale au meilleur prix.</p>

          <div className="flex flex-col md:flex-row justify-between gap-12 w-full text-sm text-left max-w-4xl mx-auto mb-12">
            <div>
              <h4 className="font-bold mb-4 text-white uppercase tracking-wider">Nous Contacter</h4>
              <ul className="space-y-2 text-brand-text-medium">
                <li>5 rue de Seze 69006 Lyon</li>
                <li><a href="tel:+33780180414" className="hover:text-white transition-colors">+ (33) 7 80 18 04 14</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white uppercase tracking-wider">Mentions Légales</h4>
              <ul className="space-y-2 text-brand-text-medium">
                <li>NovaProtect</li>
                <li>RCS Lyon 912 685 538</li>
              </ul>
            </div>
            <div className="md:text-left">
              <h4 className="font-bold mb-4 text-white uppercase tracking-wider">Réglementation</h4>
              <ul className="space-y-2 text-brand-text-medium">
                <li>ORIAS n° 07 022 045</li>
                <li>Contrôle ACPR</li>
              </ul>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto flex justify-between gap-4 text-sm text-brand-text-medium border-t border-white/10 pt-8 flex-wrap">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="mailto:contact@novaprotect.site" className="hover:text-white transition-colors">contact@novaprotect.site</a>
          </div>
          <p className="text-xs text-brand-text-medium mt-4">© 2026 NovaProtect. Tous droits réservés.</p>
        </motion.div>
      </footer>

      {/* Floating Action Button (WhatsApp Style from screenshot) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a href="https://wa.me/33780180414" target="_blank" rel="noopener noreferrer">
        <button className="bg-brand-green cursor-pointer hover:bg-brand-green-hover text-white rounded-full py-3 px-5 shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
          <Phone className="h-6 w-6" />
          <div className="text-left hidden sm:block">
            <p className="font-bold leading-tight">Devis gratuit</p>
            <p className="text-[10px] opacity-90">Réponse en quelques minutes</p>
          </div>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white shadow-sm">1</span>
        </button>
        </a>
      </motion.div>

    </div>
  );
}
