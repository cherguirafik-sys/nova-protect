import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Actualités Assurance | NovaProtect",
  description:
    "Découvrez les derniers conseils, actualités et guides sur l'assurance santé, auto, habitation et animaux avec NovaProtect. Optimisez votre protection au quotidien.",
  alternates: {
    canonical: "https://novaprotect.site/blog",
  },
  openGraph: {
    title: "Blog & Actualités | NovaProtect",
    description:
      "Conseils d'experts, guides pratiques et actualités pour mieux comprendre vos assurances. Courtier agréé ORIAS.",
    url: "https://novaprotect.site/blog",
    type: "website",
  },
  keywords: [
    "blog assurance",
    "conseils mutuelle",
    "guide assurance auto",
    "actualités santé",
    "assurance habitation conseils",
    "NovaProtect blog",
    "guide assurance animaux",
  ],
};

const blogPosts = [
  {
    id: 1,
    title: "Comment bien choisir sa mutuelle santé en 2026 ?",
    excerpt: "Découvrez les critères essentiels pour sélectionner une couverture santé parfaitement adaptée à vos besoins et à votre budget sans compromis.",
    category: "Mutuelle Santé",
    date: "15 Janvier 2026",
    readTime: "5 min",
    author: "Équipe NovaProtect",
    image: "/Mutuelle Santé.png",
    slug: "/blog/mutuelle-sante",
  },
  {
    id: 2,
    title: "Assurance habitation : ce qui est vraiment couvert",
    excerpt: "Dégât des eaux, incendie, vol... Faisons le point sur les garanties indispensables de votre assurance multirisque habitation pour une sérénité totale.",
    category: "Habitation",
    date: "20 Décembre 2025",
    readTime: "4 min",
    author: "Équipe NovaProtect",
    image: "/Habitations.png",
    slug: "/blog/assurance-habitation",
  },
  {
    id: 3,
    title: "Jeunes conducteurs : astuces pour faire baisser la prime",
    excerpt: "L'assurance auto jeune conducteur coûte cher. Voici nos meilleures astuces légales et pratiques pour réduire le montant de votre cotisation.",
    category: "Auto",
    date: "05 Novembre 2025",
    readTime: "6 min",
    author: "Équipe NovaProtect",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    slug: "/blog/assurance-auto",
  },
  {
    id: 4,
    title: "Pourquoi assurer son animal de compagnie est indispensable",
    excerpt: "Les frais vétérinaires peuvent grimper très vite. Découvrez pourquoi souscrire à une assurance pour votre chien ou votre chat est un choix judicieux.",
    category: "Animaux",
    date: "18 Octobre 2025",
    readTime: "3 min",
    author: "Équipe NovaProtect",
    image: "/Animaux.png",
    slug: "/blog/assurance-animaux",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-bg-gray">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 uppercase tracking-tight leading-tight">
            Le Blog <span className="text-brand-green">NovaProtect</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-text-medium mb-8 leading-relaxed">
            Conseils d'experts, actualités et guides pratiques pour vous aider à mieux comprendre et choisir vos assurances au quotidien.
          </p>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-brand-green/5 rounded-full filter blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Featured Post Section */}
      <section className="py-12 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden">
              <Image 
                src={featuredPost.image} 
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
                  {featuredPost.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 md:p-8">
              <div className="flex items-center gap-4 text-sm text-brand-text-medium mb-4 font-medium">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 leading-tight">
                <Link href={featuredPost.slug} className="hover:text-brand-green transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>
              
              <p className="text-lg text-brand-text-medium mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-bg-blue flex items-center justify-center text-brand-navy">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-brand-navy">{featuredPost.author}</span>
                </div>
                
                <Link href={featuredPost.slug} className="flex items-center gap-2 text-brand-green font-bold hover:text-brand-green-hover transition-colors group">
                  Lire l'article <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Posts Grid */}
      <section className="py-20 bg-brand-bg-gray relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-extrabold text-brand-navy uppercase tracking-tight">Derniers <span className="text-brand-green">Articles</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Post Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-md text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-brand-text-medium mb-4 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-brand-navy mb-4 leading-tight line-clamp-2">
                    <Link href={post.slug} className="hover:text-brand-green transition-colors">
                      {post.title}
                    </Link>
                  </h4>
                  
                  <p className="text-brand-text-medium mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-navy">{post.author}</span>
                    <Link href={post.slug} className="w-10 h-10 rounded-full bg-brand-bg-gray flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors group">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-16 text-center">
            <button className="inline-block cursor-pointer bg-white border-2 border-slate-200 hover:border-brand-navy text-brand-navy font-bold py-4 px-10 rounded-full shadow-sm transition-all hover:shadow-md">
              <Link href="/#contact">Charger plus d'articles</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="bg-brand-navy rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 uppercase tracking-tight relative z-10">
              Restez <span className="text-brand-green">Informé</span>
            </h3>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Abonnez-vous à notre newsletter pour recevoir nos derniers conseils, astuces et offres exclusives directement dans votre boîte mail.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                required
              />
              <button 
                type="submit" 
                className="bg-brand-green hover:bg-brand-green-hover text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
