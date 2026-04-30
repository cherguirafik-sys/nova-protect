"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Phone, ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'À propos de nous', href: '/a-propos' },
  { name: 'Santé', href: '/mutuelles' },
  { name: 'Auto', href: '/auto' },
  { name: 'Habitation', href: '/habitation' },
  { name: 'Animaux', href: '/animaux' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && (href.startsWith('#') || href.startsWith('/#'))) {
      e.preventDefault();
      const targetId = href.startsWith('/#') ? href.substring(1) : href;
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm py-3'
            : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Image src="/logo.png" alt="NovaProtect Logo" fill className="object-contain" />
            </div>
            <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-blue tracking-tight">
              Nova Protect
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-brand-text-medium hover:text-brand-green-hover font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="#contact" className="bg-gradient-to-r from-brand-green to-brand-green-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/40 hover:-translate-y-0.5 active:translate-y-0">
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden bg-white border border-slate-200 shadow-sm p-2 rounded-full flex items-center justify-center transition-transform active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-brand-navy" />
            ) : (
              <div className="flex flex-col gap-[5px] items-end justify-center w-6 py-0.5">
                <span className="w-6 h-[3px] bg-slate-700 rounded-full"></span>
                <span className="w-[18px] h-[3px] bg-slate-700 rounded-full"></span>
                <span className="w-[12px] h-[3px] bg-slate-700 rounded-full"></span>
              </div>
            )}
          </button>
        </div>

      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-brand-navy/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-[70] w-[85%] max-w-sm bg-white shadow-2xl flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Image src="/logo.png" alt="NovaProtect Logo" fill className="object-contain" />
                </div>
                <span className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-blue tracking-tight">
                  Nova Protect
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-200 transition-colors active:scale-95"
                aria-label="Close menu"
              >
                <X size={20} className="text-brand-navy" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="flex items-center gap-3 text-lg font-medium text-brand-navy hover:text-brand-green py-3 px-4 rounded-xl hover:bg-brand-green/5 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50">
              <button className="w-full bg-gradient-to-r from-brand-green to-brand-green-hover text-white px-6 py-4 rounded-xl font-medium shadow-lg shadow-brand-green/25 transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                Devis Gratuit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
