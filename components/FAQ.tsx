"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ShieldCheck } from 'lucide-react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string>('');

  const handleValueChange = (value: string) => {
    setOpenItem(value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const data = [
    {
      id: '1',
      question: 'Comment choisir ma mutuelle ?',
      answer: 'Comparez les garanties optique, dentaire et hospitalisation selon vos besoins réels.'
    },
    {
      id: '2',
      question: "C'est quoi le 100% Santé ?",
      answer: "Un dispositif pour des lunettes, dents et aides auditives intégralement remboursées."
    },
    {
      id: '3',
      question: 'Quel est le délai de remboursement ?',
      answer: "Le remboursement est automatique via NOEMIE, généralement sous 48h sur votre compte."
    },
    {
      id: '4',
      question: 'Quand puis-je résilier mon contrat ?',
      answer: 'À tout moment après un an de contrat, sans frais ni justificatif, grâce à la loi Hamon.'
    },
    {
      id: '5',
      question: 'Le tiers payant est-il inclus ?',
      answer: "Oui, chez plus de 200 000 professionnels de santé pour ne pas avancer de frais."
    },
    {
      id: '6',
      question: 'Puis-je ajouter mes enfants ?',
      answer: "Bien sûr, vous pouvez ajouter vos ayants droit très simplement depuis votre espace client."
    }
  ];

  return (
    <section id="faq" className="relative flex w-full flex-col items-center justify-center py-12 md:py-16 bg-[#ebf3f8] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(46,204,113,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-brand-green/20">
              Aide & Support
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight uppercase leading-tight">
            QUESTIONS <span className="text-brand-green">FRÉQUENTES</span>
          </h2>
          <p className="text-brand-text-medium text-lg max-w-2xl mx-auto font-medium">
            Réponses rapides sur nos solutions de mutuelle santé.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={handleValueChange}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {data.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`group h-fit rounded-3xl border transition-all duration-500 overflow-hidden ${openItem === faq.id
                    ? 'border-brand-green shadow-[0_10px_30px_-10px_rgba(46,204,113,0.2)] bg-white'
                    : 'border-brand-border bg-white/60 hover:bg-white hover:border-brand-green/30 hover:shadow-lg'
                  }`}
              >
                <AccordionItem
                  value={faq.id}
                  className="border-none px-6"
                >
                  <AccordionTrigger className="group cursor-pointer hover:no-underline [&>svg]:hidden py-4">
                    <div className="flex w-full items-center justify-between gap-4">
                      <span
                        className={`text-left text-base md:text-lg font-bold leading-tight transition-colors duration-300 ${openItem === faq.id
                            ? 'text-brand-green'
                            : 'text-brand-navy group-hover:text-brand-green'
                          }`}
                      >
                        {faq.question}
                      </span>
                      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openItem === faq.id ? 'bg-brand-green text-white rotate-180' : 'bg-brand-bg-gray text-brand-green group-hover:bg-brand-green/10'
                        }`}>
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-brand-text-medium leading-relaxed font-medium text-base border-t border-brand-border/50 pt-6"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
