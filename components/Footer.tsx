import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t-4 border-brand-green">
      <div className="container mx-auto px-4 max-w-6xl text-center flex flex-col items-center">
        <Image src="/logo.png" alt="NovaProtect Logo" width={80} height={30} className="object-contain" priority />

        <p className="text-brand-text-medium text-sm mb-12 mt-4">Votre courtier de proximité pour une protection optimale au meilleur prix.</p>

        <div className="flex flex-col md:flex-row justify-between gap-12 w-full text-sm text-left max-w-2xl mx-auto mb-12">
          <div>
            <h4 className="font-bold mb-4 text-white uppercase tracking-wider">Mentions Légales</h4>
            <ul className="space-y-2 text-brand-text-medium">
              <li>NovaProtect - Capital 1000 €</li>
              <li>RCS Lyon 912 685 538</li>
              <li>5 rue de Seze - 69006 Lyon</li>
            </ul>
          </div>
          <div className="md:text-left">
            <h4 className="font-bold mb-4 text-white uppercase tracking-wider">Réglementation</h4>
            <ul className="space-y-2 text-brand-text-medium">
              <li>ORIAS n° 07 022 045</li>
              <li>Contrôle ACPR</li>
              <li>Hébergement : Hostinger</li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto flex justify-between gap-4 text-sm text-brand-text-medium border-t border-white/10 pt-8 flex-wrap">
          <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          <a href="mailto:contact@novaprotect.site" className="hover:text-white transition-colors">contact@novaprotect.site</a>
        </div>
        <p className="text-sm text-brand-text-medium mt-8">© 2026 NovaProtect. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
