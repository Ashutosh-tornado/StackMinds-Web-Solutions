import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Layout, ShoppingCart, Share2, MousePointerClick, Search, PenTool, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Website Development", desc: "Custom coded, high-performance websites built for absolute speed.", icon: <Terminal className="w-5 h-5" />, color: "primary", featured: false, link: "/services/web-development" },
    { title: "WordPress Websites", desc: "Dynamic, manageable, and SEO friendly WordPress platforms.", icon: <Layout className="w-5 h-5" />, color: "primary", featured: false, link: "/services/wordpress" },
    { title: "Ecommerce Development", desc: "Convert visitors into customers with high-converting stores.", icon: <ShoppingCart className="w-5 h-5" />, color: "primary", featured: false, link: "/services/ecommerce" },
    { title: "Social Media Marketing", desc: "Strategic social presence that sparks engagement and loyalty.", icon: <Share2 className="w-5 h-5" />, color: "primary", featured: true, link: "/services/social-media-marketing" },
    { title: "Google Ads", desc: "Targeted PPC campaigns that deliver instant ROI on search intent.", icon: <MousePointerClick className="w-5 h-5" />, color: "primary", featured: false, link: "/services/google-ads" },
    { title: "SEO", desc: "Rank higher and dominate search results with our expert team.", icon: <Search className="w-5 h-5" />, color: "primary", featured: false, link: "/services/seo" },
    { title: "Content Writing", desc: "Persuasive copy that speaks specifically to your audience.", icon: <PenTool className="w-5 h-5" />, color: "primary", featured: false, link: "/services/content-writing" },
    { title: "Creative Designing", desc: "Visual identities that transcend standard designs for industry leaders.", icon: <Palette className="w-5 h-5" />, color: "primary", featured: false, link: "/services/creative-designing" },
  ];

  return (
    <div className="bg-[#faf8ff] min-h-screen">
      <section className="px-8 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e2ddf2] text-[#623fde] font-headline font-bold text-xs tracking-widest uppercase mb-4">
                Our Capabilities
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-[#213156] leading-[1.05] tracking-tight">
                Digital <span className="text-[#623fde]">Services</span>
            </h1>
            <p className="text-xl text-[#213156]/70 leading-relaxed font-body max-w-2xl mx-auto">
                Comprehensive digital solutions engineered for performance, precision, and market dominance.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
                <div key={i} className={`p-8 rounded-[2rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col ${service.featured ? 'bg-[#8a94ff] hover:shadow-[0_20px_40px_rgba(138,148,255,0.4)] text-white' : 'bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#213156]/5 text-[#213156]'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 ${service.featured ? 'bg-white/20 text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                        {service.icon}
                    </div>
                    <h3 className={`text-xl font-headline font-bold mb-3 ${service.featured ? 'text-white' : 'text-[#213156]'}`}>{service.title}</h3>
                    <p className={`text-sm leading-relaxed flex-grow pb-10 ${service.featured ? 'text-white/90' : 'text-on-surface-variant'}`}>{service.desc}</p>
                    <Link to={service.link} className={`inline-flex items-center gap-2 mt-auto self-start px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 ${service.featured ? 'bg-white text-[#623fde] shadow-lg shadow-white/20' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg'}`}>
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="bg-[#5735c9] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#623fde]/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c5deb] rounded-full blur-[100px] -mr-32 -mt-32 opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4c2bb5] rounded-full blur-[100px] -ml-32 -mb-32 opacity-80"></div>
          
          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight">
              Ready for rapid growth?
            </h2>
            <p className="text-[#d1c4f9] text-xl">
              Partner with StackMinds today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact" className="w-full sm:w-auto bg-white text-[#623fde] px-10 py-4 rounded-full font-headline font-bold flex justify-center hover:scale-105 transition-transform shadow-xl hover:bg-slate-50">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
