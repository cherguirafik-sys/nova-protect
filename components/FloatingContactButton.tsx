"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingContactButton() {
  return (
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
  );
}
