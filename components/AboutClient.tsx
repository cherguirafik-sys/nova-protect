"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Users, Target, Heart, Award, CheckCircle2, ChevronRight, Play, Link } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <Image 
            src="/logo.png"
            alt="NovaProtect Logo Background" 
            width={800}
            height={800}
            className="object-contain opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />
        
        {/* Glow effect */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-brand-icon-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </span>
              <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">L'Histoire de NovaProtect</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8"
            >
              Redéfinir l'assurance pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">vous protéger mieux</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Plus qu'un courtier, nous sommes le partenaire de votre tranquillité d'esprit, engagé à vous offrir transparence, proximité et sécurité au quotidien.
            </motion.p>
          </div>
        </div>
        
        {/* Curved bottom separator */}
        <div className="absolute -bottom-1 left-0 w-full h-16 md:h-24 bg-slate-50" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-8 leading-tight">Notre engagement : <br/><span className="text-brand-green">L'humain avant tout</span></h2>
              
              <div className="prose prose-lg text-slate-600 mb-10">
                <p className="mb-6">
                  NovaProtect est née d'un constat simple : le monde de l'assurance est souvent perçu comme opaque et complexe. Nous avons voulu briser ces codes pour créer une expérience fluide, compréhensible et profondément humaine.
                </p>
                <p>
                  Chaque client a une histoire unique, des besoins spécifiques et des projets de vie. C'est pourquoi nous ne proposons pas de "formules toutes faites", mais un accompagnement sur mesure, conçu pour évoluer avec vous au fil du temps.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-bg-blue flex items-center justify-center text-brand-icon-blue shrink-0 shadow-sm">
                    <Users size={28} />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-3xl text-brand-navy mb-1">15k+</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Clients Confiance</div>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-slate-200 my-auto"></div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 shadow-sm">
                    <Award size={28} />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-3xl text-brand-navy mb-1">98%</div>
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <Image 
                  src="/Habitations.png"
                  alt="Assurance Habitation" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center text-white shrink-0 shadow-md shadow-brand-green/30">
                      <Shield size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy text-lg mb-1">Expertise Garantie</h4>
                      <p className="text-sm text-slate-500 font-medium">Des conseillers certifiés à votre écoute</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:16px_16px] opacity-40 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Domaines d'Expertise */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              Nos Domaines d'Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-6"
            >
              Une protection complète pour toute votre famille
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg"
            >
              NovaProtect vous accompagne au quotidien grâce à une gamme complète d'assurances pensées pour vous.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Mutuelle Santé",
                image: "/Mutuelle Santé.png",
                desc: "Des garanties sur-mesure pour votre santé et celle de vos proches. Remboursements rapides et accompagnement personnalisé."
              },
              {
                title: "Assurance Habitation",
                image: "/Habitations.png",
                desc: "Protégez votre foyer et vos biens précieux. Une couverture complète pour faire face à tous les imprévus du quotidien."
              },
              {
                title: "Assurance Auto",
                image: "/Autos.png",
                desc: "Prenez le volant l'esprit tranquille. Des formules adaptées à votre profil de conducteur et à votre véhicule."
              },
              {
                title: "Assurance Animaux",
                image: "/Animaux.png",
                desc: "La meilleure protection pour vos compagnons à quatre pattes. Frais vétérinaires couverts pour leur santé."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-brand-navy relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 opacity-30">
           <div className="absolute w-[800px] h-[800px] -top-40 -right-40 bg-brand-green rounded-full blur-[120px] mix-blend-screen"></div>
           <div className="absolute w-[800px] h-[800px] -bottom-40 -left-40 bg-brand-icon-blue rounded-full blur-[120px] mix-blend-screen"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4 block"
            >
              L'ADN NovaProtect
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
            >
              Nos valeurs fondamentales
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-lg md:text-xl"
            >
              Ces principes guident chacune de nos actions et définissent la manière dont nous accompagnons nos clients au quotidien pour bâtir une relation de confiance durable.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Target className="w-8 h-8 text-white" />,
                title: "Excellence & Rigueur",
                description: "Nous visons l'excellence dans chaque interaction, de la souscription à la gestion des sinistres, en travaillant avec les meilleurs partenaires du marché.",
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: <Heart className="w-8 h-8 text-white" />,
                title: "Proximité Humaine",
                description: "Derrière nos outils digitaux innovants se trouvent des humains dévoués, à l'écoute et prêts à intervenir pour assurer votre tranquillité d'esprit.",
                color: "from-brand-green to-emerald-400"
              },
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                title: "Transparence Totale",
                description: "Pas de jargon complexe ni de clauses cachées. Nous vous parlons de manière claire et honnête pour que vous maîtrisiez toujours votre couverture.",
                color: "from-purple-500 to-indigo-400"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Differentiators */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <span className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-4 block">
                Notre Différence
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-8 leading-tight">
                Pourquoi confier votre avenir à NovaProtect ?
              </h2>
              <p className="text-slate-600 text-lg mb-10">
                Parce que nous avons conçu un service d'assurance qui combine le meilleur de la technologie et l'indispensable contact humain.
              </p>

              <div className="space-y-6">
                {[
                  "Un conseiller dédié, expert de votre dossier",
                  "Des tarifs ultra-compétitifs négociés auprès des leaders",
                  "Gestion 100% digitale de vos contrats et attestations",
                  "Remboursements et indemnisations express",
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-green/30 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-green group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-lg font-medium text-brand-navy">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/Autos.png"
                  alt="Assurance Auto" 
                  fill 
                  className="object-cover"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-brand-navy/20 flex items-center justify-center group cursor-pointer transition-colors hover:bg-brand-navy/30">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl text-brand-green transform group-hover:scale-110 transition-transform duration-300 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-50"></div>
                    <Play fill="currentColor" className="ml-1 w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-bg-blue relative overflow-hidden">
        {/* Background graphic */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-gradient-to-l from-brand-icon-blue/10 to-transparent rounded-l-full blur-3xl mix-blend-multiply pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-6 leading-tight"
          >
            Prêt à rejoindre l'aventure <span className="text-brand-green">NovaProtect</span> ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-text-medium mb-12 max-w-2xl mx-auto"
          >
            Faites comme des milliers de clients satisfaits. Demandez votre devis gratuit et sans engagement dès aujourd'hui.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href="https://wa.me/33780180414" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer group relative bg-gradient-to-r from-brand-green to-brand-green-hover text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-brand-green/30 transition-all hover:shadow-2xl hover:shadow-brand-green/40 hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2">
              <span className="relative z-10">Obtenir mon Devis Gratuit</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            </a>
            
            <a href="/#contact">
            <button className="cursor-pointer group relative bg-white text-brand-navy border-2 border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:border-brand-navy hover:bg-slate-50 transition-all hover:-translate-y-1">
              Nous Contacter
            </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
