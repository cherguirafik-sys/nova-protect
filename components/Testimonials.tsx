"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "J'ai enfin une mutuelle adaptée à mes besoins d'optique !",
        emoji: "👵",
        name: "Mme. Dubois",
        role: "71 ans",
    },
    {
        text: "Une couverture familiale complète et rassurante pour mes enfants.",
        emoji: "👨‍👩‍👧‍👦",
        name: "M. Laurent",
        role: "45 ans",
    },
    {
        text: "Le remboursement de mes soins dentaires est ultra rapide !",
        emoji: "🦷",
        name: "Mme. Martin",
        role: "32 ans",
    },
    {
        text: "Une équipe à l'écoute pour m'aider dans mes démarches.",
        emoji: "🤝",
        name: "M. Petit",
        role: "62 ans",
    },
    {
        text: "Enfin une assurance qui comprend les besoins des jeunes actifs.",
        emoji: "💼",
        name: "Mme. Lefebvre",
        role: "28 ans",
    },
    {
        text: "Simple, efficace et transparent. Exactement ce que je cherchais.",
        emoji: "✨",
        name: "M. Moreau",
        role: "54 ans",
    },
    {
        text: "Une mutuelle qui prend vraiment soin des seniors. Merci !",
        emoji: "💙",
        name: "Mme. Bernard",
        role: "68 ans",
    },
    {
        text: "Très satisfait du rapport qualité-prix de ma nouvelle mutuelle.",
        emoji: "⭐",
        name: "M. Girard",
        role: "41 ans",
    },
    {
        text: "L'assistance en cas d'hospitalisation est tout simplement parfaite.",
        emoji: "🏥",
        name: "Mme. Petit",
        role: "39 ans",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonials;
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, emoji, name, role }, i) => (
                                <div className="p-8 rounded-3xl border border-brand-border bg-white shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300 max-w-sm w-full" key={i}>
                                    <div className="text-brand-text-medium text-sm leading-relaxed font-medium italic">"{text}"</div>
                                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-brand-border/50">
                                        <div className="h-12 w-12 rounded-full bg-brand-bg-blue border border-brand-border flex items-center justify-center text-2xl shadow-sm">
                                            {emoji}
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-bold tracking-tight text-brand-navy">{name}</div>
                                            <div className="text-xs font-semibold text-brand-green uppercase tracking-widest">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 relative bg-brand-bg-gray overflow-hidden border-t border-b border-brand-border/50">
            {/* Background blur decorative elements matching the brand */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-brand-green/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-blue/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="container z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-brand-green/20">
                            Témoignages
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-navy uppercase tracking-tighter leading-tight mb-6">
                        Adopté par des clients <br className="hidden sm:block" /> <span className="text-brand-green">partout en France</span>
                    </h2>
                    <p className="text-base text-brand-text-medium mt-4 font-medium leading-relaxed">
                        Découvrez comment NovaProtect simplifie l'assurance et offre une protection optimale à des milliers de clients satisfaits.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[700px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={27} />
                </div>
            </div>
        </section>
    );
}
