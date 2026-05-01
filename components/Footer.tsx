import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t-4 border-brand-green">
      <div className="container mx-auto px-4 max-w-6xl text-center flex flex-col items-center">
        <Image src="/logo.png" alt="Nova Protect - Courtier d'assurances agréé en France" width={80} height={30} className="object-contain" priority />

        <p className="text-brand-text-medium text-sm mb-8 mt-4">Nova Protect — Votre courtier d&apos;assurances agréé en France pour une protection optimale au meilleur prix.</p>

        {/* Service Links — Internal linking for SEO */}
        <nav aria-label="Nos assurances" className="mb-10">
          <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-sm">Nos Assurances</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-brand-text-medium">
            <Link href="/mutuelles" className="hover:text-white transition-colors">Mutuelle Santé</Link>
            <span className="text-white/20">•</span>
            <Link href="/auto" className="hover:text-white transition-colors">Assurance Auto</Link>
            <span className="text-white/20">•</span>
            <Link href="/habitation" className="hover:text-white transition-colors">Assurance Habitation</Link>
            <span className="text-white/20">•</span>
            <Link href="/animaux" className="hover:text-white transition-colors">Assurance Animaux</Link>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row justify-between gap-12 w-full text-sm text-left max-w-4xl mx-auto mb-12">
          <div>
            <h4 className="font-bold mb-4 text-white uppercase tracking-wider">Nous Contacter</h4>
            <ul className="space-y-2 text-brand-text-medium">
              <li>5 rue de Seze</li>
              <li>69006 Lyon</li>
              <li><a href="tel:+33780180414" className="hover:text-white transition-colors">+ (33) 7 80 18 04 14</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white uppercase tracking-wider">Mentions Légales</h4>
            <ul className="space-y-2 text-brand-text-medium">
              <li>NovaProtect - Capital 1000 €</li>
              <li>RCS Lyon 912 685 538</li>
            </ul>
          </div>
          <div className="md:text-left">
            <h4 className="font-bold mb-4 text-white uppercase tracking-wider">Réglementation</h4>
            <ul className="space-y-2 text-brand-text-medium">
              <li>ORIAS n° 07 022 045</li>
              <li>Contrôle ACPR</li>
              <li>Hébergement</li>
            </ul>
          </div>
        </div>

        <nav aria-label="Liens légaux" className="w-full max-w-2xl mx-auto flex justify-between gap-4 text-sm text-brand-text-medium border-t border-white/10 pt-8 flex-wrap">
          <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
          <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
          <Link href="/a-propos" className="hover:text-white transition-colors">À Propos</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <a href="mailto:contact@novaprotect.site" className="hover:text-white transition-colors">contact@novaprotect.site</a>
        </nav>
    <p className="text-sm text-brand-text-medium mt-8">© 2026 Nova Protect (NovaProtect). Tous droits réservés.</p>
  </div>
    </footer >
  );
}
