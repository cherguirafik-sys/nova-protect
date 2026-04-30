"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = [
    { id: "mutuelle", label: "Mutuelle" },
    { id: "habitation", label: "Habitation" },
    { id: "auto", label: "Auto" },
    { id: "animaux", label: "Animaux" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSubject) {
      alert("Veuillez sélectionner un sujet.");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="contact">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-bg-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-green-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 uppercase tracking-wide"
          >
            Contactez-<span className="text-brand-green">Nous</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text-medium max-w-2xl mx-auto"
          >
            Notre équipe d&apos;experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans le choix de vos garanties.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-2/5 bg-brand-navy p-8 lg:p-10 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white">Informations de contact</h3>
              <p className="text-brand-bg-blue/80 mb-10 leading-relaxed">
                Remplissez le formulaire et notre équipe vous recontactera sous 24h ouvrées.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/20 p-3 rounded-full text-brand-green">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-bg-blue/60 mb-1">Téléphone</p>
                    <a 
                      href="https://wa.me/33780180414" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-lg hover:text-brand-green transition-colors inline-block"
                    >
                      + (33) 7 80 18 04 14
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/20 p-3 rounded-full text-brand-green">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-bg-blue/60 mb-1">E-mail</p>
                    <a 
                      href="mailto:[contact@novaprotect.site]"
                      className="font-semibold text-lg hover:text-brand-green transition-colors inline-block"
                    >
                      contact@novaprotect.site
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/20 p-3 rounded-full text-brand-green">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-bg-blue/60 mb-1">Adresse</p>
                    <p className="font-semibold text-lg">5 rue de Seze<br/>69006 Lyon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/20 p-3 rounded-full text-brand-green">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-bg-blue/60 mb-1">Horaires</p>
                    <p className="font-semibold text-lg">Lun - Ven : 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-green rounded-full opacity-20 filter blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-brand-green/30 rounded-full"></div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-3/5 p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Nom */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-brand-navy">Prénom & Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all placeholder:text-slate-400"
                    placeholder="Jean Dupont"
                  />
                </div>

                {/* Téléphone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all placeholder:text-slate-400"
                    placeholder="+ (33) 12 34 56 78"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Adresse e-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all placeholder:text-slate-400"
                  placeholder="jean.dupont@email.com"
                />
              </div>

              {/* Sujet - Custom Animated Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-brand-navy">Sujet de votre demande</label>
                <div className="relative">
                  <input type="hidden" id="subject" required value={selectedSubject} />
                  
                  {isDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                  )}

                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full px-4 py-3 rounded-lg border flex justify-between items-center cursor-pointer transition-all relative z-40 ${
                      isDropdownOpen 
                        ? "border-brand-green ring-2 ring-brand-green/50 bg-white" 
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    } ${!selectedSubject ? "text-slate-400" : "text-brand-navy font-medium"}`}
                  >
                    <span className="truncate">
                      {selectedSubject ? subjects.find(s => s.id === selectedSubject)?.label : "Sélectionnez un sujet"}
                    </span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-brand-green" : "text-slate-400"}`} />
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2"
                      >
                        {subjects.map((subject) => (
                          <div
                            key={subject.id}
                            onClick={() => {
                              setSelectedSubject(subject.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-3 cursor-pointer transition-colors flex items-center group ${
                              selectedSubject === subject.id 
                                ? "bg-brand-green/10 text-brand-green font-semibold" 
                                : "text-brand-text-dark hover:bg-slate-50 hover:text-brand-navy"
                            }`}
                          >
                            <div className={`w-2 h-2 rounded-full mr-3 transition-colors ${
                              selectedSubject === subject.id 
                                ? "bg-brand-green" 
                                : "bg-slate-200 group-hover:bg-brand-green/50"
                            }`}></div>
                            {subject.label}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-brand-navy">Votre message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all resize-none placeholder:text-slate-400"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              {/* RGPD Consent */}
              <div className="flex items-start gap-3">
                <div className="flex items-center h-5 mt-0.5">
                  <input 
                    id="rgpd" 
                    type="checkbox" 
                    required
                    className="w-4 h-4 text-brand-green border-slate-300 rounded focus:ring-brand-green cursor-pointer"
                  />
                </div>
                <label htmlFor="rgpd" className="text-xs text-brand-text-medium leading-relaxed cursor-pointer">
                  En soumettant ce formulaire, j&apos;accepte que les informations saisies soient exploitées dans le cadre de ma demande et de la relation commerciale qui peut en découler.
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg flex justify-center items-center gap-2 transition-all ${
                  isSuccess ? 'bg-brand-blue' : 'bg-brand-green hover:bg-brand-green-hover'
                } ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : isSuccess ? (
                  <>Message envoyé avec succès !</>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-5 h-5 ml-1" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
