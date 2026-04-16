import { Link } from 'react-router-dom';
import { TrendingUp, Zap, ArrowRight, CheckCircle, Headset, Lightbulb, ShieldCheck, MessageSquare, Terminal, Layout, ShoppingCart, Share2, MousePointerClick, Search, PenTool, Palette } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 overflow-hidden px-4 sm:px-6 md:px-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low asymmetric-shape -z-10 pointer-events-none select-none" style={{clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)'}}></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-2">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      Next-Gen Digital Solutions
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-tight sm:leading-snug tracking-tighter break-words">
                      Grow your <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">digital business</span> with StackMinds
                  </h1>
                  <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl">
                      We build high-performing websites, marketing systems, and digital experiences that help your business scale faster.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4 relative z-20 pointer-events-auto">
                      <Link to="/contact" className="inline-block bg-primary hover:bg-primary-dim text-on-primary px-8 py-4 rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 relative z-30 pointer-events-auto">
                          Get Started
                      </Link>
                      <Link to="/portfolio" className="inline-block bg-surface-container-high text-primary px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-surface-container-highest transition-all hover:-translate-y-1 relative z-30 pointer-events-auto">
                          View Portfolio
                      </Link>
                  </div>
              </div>
              <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest p-4 group">
                      <img alt="Modern SaaS Dashboard Mockup" className="rounded-2xl w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB0aIVNad9oGtWQxhftTFxBwxNtFha6xzhRa-p_IXraFP90kga8PyyNv_axfgxReXuWzCklXB1UkV0lHutxiLxTe2Se39QdHRzeaiyncfEDnmzf_pMQrTySOykTxInGEw-kmNrV29lYFm782few-a3mxyLPGpCFRYLfd5t3n9hBc3bTZwRaqa6O3fAPTxbTPWvZR1iC74Rs55aXaQq3msSEGmZ5nkpGPaFp2NbLgKVgtaqQizYfskf6ANViaqe-ihA1g0nO9WbuA"/>
                      <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl border border-white/20 group-hover:scale-105 transition-transform duration-500">
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-tertiary-container flex items-center justify-center">
                                  <TrendingUp className="w-5 h-5 text-on-tertiary-container" />
                              </div>
                              <div>
                                  <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Conversion Rate</div>
                                  <div className="text-lg font-headline font-extrabold text-tertiary">+142%</div>
                              </div>
                          </div>
                      </div>
                      <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl border border-white/20 group-hover:scale-105 transition-transform duration-500">
                          <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">
                                  <Zap className="w-5 h-5 text-on-secondary-container" />
                              </div>
                              <div>
                                  <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Site Speed</div>
                                  <div className="text-lg font-headline font-extrabold text-secondary">0.8s LCP</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Business Services */}
      <section className="pb-24 pt-12">
          <div className="max-w-7xl mx-auto px-8">
              <div className="bg-gradient-to-br from-[#8a94ff] to-[#a28aff] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                          <h2 className="text-3xl md:text-4xl font-headline font-bold">Business Services</h2>
                          <div className="px-5 py-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-sm font-bold uppercase tracking-wider">
                              10+ Services
                          </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                          <Link className="group px-6 py-3 rounded-full flex items-center gap-3 font-bold text-sm bg-white/20 hover:bg-white/30 hover:-translate-y-1 transition-all border border-white/30" to="/services/seo">
                              SEO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200 transition-transform" />
                          </Link>
                          <Link className="group px-6 py-3 rounded-full flex items-center gap-3 font-bold text-sm bg-white/20 hover:bg-white/30 hover:-translate-y-1 transition-all border border-white/30" to="/services/creative-designing">
                              Graphic Design <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200 transition-transform" />
                          </Link>
                          <Link className="group px-6 py-3 rounded-full flex items-center gap-3 font-bold text-sm bg-white/20 hover:bg-white/30 hover:-translate-y-1 transition-all border border-white/30" to="/services/google-ads">
                              PPC <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200 transition-transform" />
                          </Link>
                          <Link className="group px-6 py-3 rounded-full flex items-center gap-3 font-bold text-sm bg-white/20 hover:bg-white/30 hover:-translate-y-1 transition-all border border-white/30" to="/services/social-media-marketing">
                              Social Media <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200 transition-transform" />
                          </Link>
                          <Link className="group px-6 py-3 rounded-full flex items-center gap-3 font-bold text-sm bg-white/20 hover:bg-white/30 hover:-translate-y-1 transition-all border border-white/30" to="/services/content-writing">
                              Content <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200 transition-transform" />
                          </Link>
                          <Link className="group px-6 py-3 rounded-full flex items-center gap-3 font-bold text-sm bg-white/20 hover:bg-white/30 hover:-translate-y-1 transition-all border border-white/30" to="/services/web-development">
                              Web Dev <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200 transition-transform" />
                          </Link>
                      </div>
                  </div>
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-surface-container-low transition-colors">
          <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center group/stats">
                  <div className="p-8 space-y-2 hover:-translate-y-2 transition-transform duration-300">
                      <div className="text-5xl font-headline font-extrabold text-primary">100+</div>
                      <div className="text-on-surface-variant font-semibold hover:text-primary transition-colors">Projects Delivered</div>
                  </div>
                  <div className="p-8 space-y-2 border-x border-outline-variant/20 hover:-translate-y-2 transition-transform duration-300">
                      <div className="text-5xl font-headline font-extrabold text-secondary">50+</div>
                      <div className="text-on-surface-variant font-semibold hover:text-secondary transition-colors">Happy Clients</div>
                  </div>
                  <div className="p-8 space-y-2 hover:-translate-y-2 transition-transform duration-300">
                      <div className="text-5xl font-headline font-extrabold text-tertiary">98%</div>
                      <div className="text-on-surface-variant font-semibold hover:text-tertiary transition-colors">High Conversion Focus</div>
                  </div>
              </div>
          </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                  <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary-container to-secondary-container relative overflow-hidden group shadow-2xl hover:shadow-[0_20px_60px_rgba(98,63,222,0.15)] transition-shadow duration-500">
                      <img alt="Team Collaboration" className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIYQsCXApx04WzhToItm_ER0-6AkGpP0WILWyI2SccHbsfKJbpDUwblwnVTNIOptH8_2qQHTVyd1ON5gl2GpelbJOa89XFUFD7DD43GF3ScrbTgWKMzHISkiYq029xiKT5Edvs8IyOnvvwBz4eFbz2T3hk7YoF3nj7sf2DKX2lIekIxGSxUTUDweIDjX-QaDS2TLZlDarM4NYhlrXiPWQ_YXcsgBXMb2H1QFVJS9FTAjmv8ZnfnOfNbPyNGS7lcWgB_IpamYSrqg"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6 lg:pl-4">
                  <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight tracking-tight">
                      We're not just an agency, we're your growth partners.
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                      StackMinds blends creativity and strategy to deliver impactful digital solutions for modern businesses. We believe in building digital products that aren't just beautiful, but are architected for massive scale and seamless performance.
                  </p>
                  <ul className="space-y-4 pt-4">
                      <li className="flex items-center gap-3 text-on-surface font-semibold group hover:-translate-y-0.5 transition-transform">
                          <CheckCircle className="w-5 h-5 text-tertiary group-hover:scale-110 transition-transform" />
                          Strategy-first approach to every project
                      </li>
                      <li className="flex items-center gap-3 text-on-surface font-semibold group hover:-translate-y-0.5 transition-transform">
                          <CheckCircle className="w-5 h-5 text-tertiary group-hover:scale-110 transition-transform" />
                          Built with modern, high-performance tech stacks
                      </li>
                      <li className="flex items-center gap-3 text-on-surface font-semibold group hover:-translate-y-0.5 transition-transform">
                          <CheckCircle className="w-5 h-5 text-tertiary group-hover:scale-110 transition-transform" />
                          Continuous support and data-driven optimization
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-surface-container-low/30">
          <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl font-headline font-bold text-on-surface">Our Core Values</h2>
                  <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">The principles that drive our commitment to excellence and client success.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      {num: "01", icon: <Headset className="w-6 h-6" />, title: "Customer-Centric", text: "We prioritize our clients and ensure value at every step of the journey.", color: "primary"},
                      {num: "02", icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", text: "We build modern, future-ready digital solutions that push boundaries.", color: "secondary"},
                      {num: "03", icon: <ShieldCheck className="w-6 h-6" />, title: "Excellence", text: "We focus on high-quality execution and performance in everything we do.", color: "tertiary"},
                      {num: "04", icon: <MessageSquare className="w-6 h-6" />, title: "Communication", text: "Clear, transparent, and consistent communication with every partner.", color: "primary"}
                  ].map((value, i) => (
                      <div key={i} className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-outline-variant/10 relative overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                          <div className="text-sm font-bold text-outline-variant mb-6 group-hover:text-primary transition-colors">{value.num}</div>
                          <div className={`w-12 h-12 rounded-full bg-${value.color}/5 flex items-center justify-center mb-6 absolute top-6 right-6 group-hover:bg-${value.color} group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                              {value.icon}
                          </div>
                          <h3 className="text-xl font-headline font-bold text-on-surface mb-3">{value.title}</h3>
                          <p className="text-on-surface-variant text-sm leading-relaxed">{value.text}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-8">
              <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl font-headline font-bold text-on-surface">Our Expertise</h2>
                  <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Comprehensive digital solutions designed to help you dominate your market.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { title: "Website Development", desc: "Custom coded, high-performance websites built for absolute speed.", icon: <Terminal className="w-5 h-5" />, color: "primary", featured: false, link: "/services/web-development" },
                      { title: "WordPress Websites", desc: "Dynamic, manageable, and SEO friendly WordPress platforms.", icon: <Layout className="w-5 h-5" />, color: "primary", featured: false, link: "/services/wordpress" },
                      { title: "Ecommerce Development", desc: "Convert visitors into customers with high-converting stores.", icon: <ShoppingCart className="w-5 h-5" />, color: "primary", featured: false, link: "/services/ecommerce" },
                      { title: "Social Media Marketing", desc: "Strategic social presence that sparks engagement and loyalty.", icon: <Share2 className="w-5 h-5" />, color: "primary", featured: true, link: "/services/social-media-marketing" },
                      { title: "Google Ads", desc: "Targeted PPC campaigns that deliver instant ROI on search intent.", icon: <MousePointerClick className="w-5 h-5" />, color: "primary", featured: false, link: "/services/google-ads" },
                      { title: "SEO", desc: "Rank higher and dominate search results with our expert team.", icon: <Search className="w-5 h-5" />, color: "primary", featured: false, link: "/services/seo" },
                      { title: "Content Writing", desc: "Persuasive copy that speaks specifically to your audience.", icon: <PenTool className="w-5 h-5" />, color: "primary", featured: false, link: "/services/content-writing" },
                      { title: "Creative Designing", desc: "Visual identities that transcend standard designs for industry leaders.", icon: <Palette className="w-5 h-5" />, color: "primary", featured: false, link: "/services/creative-designing" },
                  ].map((service, i) => (
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
              <div className="flex justify-center mt-12">
                  <Link to="/services" className="bg-[#8a94ff] hover:bg-primary text-white px-8 py-3.5 rounded-full font-headline font-bold flex items-center gap-2 shadow-lg transition-all hover:scale-105">
                      See all Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
              </div>
          </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
              <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary-container/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
                  <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                      <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-on-primary leading-tight">
                          Ready to grow your business with StackMinds?
                      </h2>
                      <p className="text-xl text-primary-container font-medium">
                          Join over 50+ businesses that have scaled their digital footprint with our expert team. Let's build something extraordinary together.
                      </p>
                      <div className="pt-8">
                          <Link to="/contact" className="inline-block bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-headline font-bold text-xl hover:scale-105 hover:-translate-y-1 transition-all shadow-xl">
                              Start Your Project
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
