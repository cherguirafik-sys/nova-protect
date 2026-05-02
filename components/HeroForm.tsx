"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function HeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const insuranceType = formData.get("insurance_type") as string;
    const name = formData.get("hero_name") as string;
    const postalCode = formData.get("hero_postal") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          phone: formData.get("hero_phone") as string,
          email: formData.get("hero_email") as string,
          subject: insuranceType,
          message: `Demande de devis rapide — ${insuranceType}`,
          postalCode: postalCode,
          formType: "hero",
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      variants={scaleUp}
      className="bg-white rounded-3xl shadow-xl p-4 border-t-4 border-brand-green max-w-sm"
      onSubmit={handleSubmit}
    >
      <h3 className="font-bold text-brand-navy mb-3 uppercase text-xs tracking-wider">
        Recevez votre étude personnalisée gratuitement
      </h3>

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
        <input type="text" name="hero_postal" required pattern="[0-9]{5}" title="Veuillez entrer un code postal français valide (5 chiffres)" placeholder="Code Postal (ex: 75001)" className="border border-brand-border rounded-md px-3 py-2 text-black text-xs outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder:text-slate-400" />
        <input type="text" name="hero_name" required placeholder="Prénom et Nom" className="border border-brand-border rounded-md px-3 py-2 text-black text-xs outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all placeholder:text-slate-400" />
        <input type="email" name="hero_email" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="Veuillez entrer une adresse e-mail valide" placeholder="Adresse E-mail" className="border border-brand-border rounded-md px-3 py-2 text-black text-xs outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all md:col-span-2 placeholder:text-slate-400" />
        <input type="tel" name="hero_phone" required placeholder="Numéro de Téléphone" className="border border-brand-border rounded-md px-3 py-2 text-black text-xs outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all md:col-span-2 placeholder:text-slate-400" />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full font-bold py-2.5 rounded-md shadow-lg text-xs transition-all ${
          status === "success"
            ? "bg-blue-600 text-white"
            : status === "error"
            ? "bg-red-500 text-white"
            : "bg-brand-green hover:bg-brand-green-hover text-white"
        } ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ENVOI EN COURS...
          </span>
        ) : status === "success" ? (
          "✓ DEMANDE ENVOYÉE AVEC SUCCÈS !"
        ) : status === "error" ? (
          "✕ ÉCHEC — RÉESSAYEZ"
        ) : (
          "VALIDER MA DEMANDE"
        )}
      </motion.button>
    </motion.form>
  );
}
