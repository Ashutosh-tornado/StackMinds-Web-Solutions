import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import * as Icons from 'lucide-react';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  
  // Provide a fallback to Web Development if somehow route doesn't match
  const data = servicesData[serviceId] || servicesData["web-development"];

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-10 pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/4 -translate-y-1/4 pointer-events-none select-none">
          <div className="w-[600px] h-[600px] rounded-full bg-primary-container blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-xs tracking-widest uppercase mb-2">
                    <Icons.Code2 className="w-5 h-5 flex-shrink-0" />
                    Core Expertise
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-tight sm:leading-snug tracking-tight break-words">
                    {data.titleLine1} <br/><span className="text-primary">{data.titleLine2}</span>
                </h1>
                <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
                    {data.heroDesc}
                </p>
                <div className="flex flex-wrap gap-4 relative z-20 pointer-events-auto">
                    <Link to="/contact" className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1 relative z-30 pointer-events-auto">
                        Start Project
                    </Link>
                    <Link to="/portfolio" className="inline-block bg-surface-container-high text-primary px-8 py-4 rounded-full font-headline font-bold text-base hover:bg-surface-container-highest transition-all hover:-translate-y-1 relative z-30 pointer-events-auto">
                        View Portfolio
                    </Link>
                </div>
            </div>
            
            <div className="relative mt-12 md:mt-0">
                <div className="aspect-square rounded-xl bg-surface-container-low overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-black/5 dark:border-white/5">
                    <img className="w-full h-full object-cover" src={data.heroImage} alt="Service Visual" />
                </div>
                {/* Floating Performance Card */}
                <div className="relative -translate-y-6 mx-auto w-[88%] md:w-auto md:translate-y-0 md:absolute md:-bottom-10 md:-left-10 glass p-8 rounded-[2rem] shadow-2xl border border-white/40 md:max-w-[260px] backdrop-blur-3xl hover:scale-105 transition-transform duration-300 z-20">
                    <div className="absolute inset-0 bg-white/40 dark:bg-black/20 rounded-[2rem] -z-10"></div>
                    <span className="text-primary font-headline font-black text-4xl block mb-2 leading-none relative z-10">{data.heroBadgeValue}</span>
                    <span className="text-on-surface-variant font-headline text-xs font-bold uppercase tracking-[0.15em] opacity-80 relative z-10">{data.heroBadgeText}</span>
                </div>
            </div>
        </div>
      </section>

      {/* Section 1: What We Offer */}
      <section className="py-24 bg-surface-container-low transition-colors">
          <div className="max-w-7xl mx-auto px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                  <div className="max-w-2xl">
                      <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6">What We Offer</h2>
                      <p className="text-on-surface-variant text-lg">
                          {data.offersDesc}
                      </p>
                  </div>
                  <div className="hidden md:block">
                      <Icons.Layers className="w-16 h-16 text-primary-container opacity-50" />
                  </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {data.offers.map((offer, i) => {
                      const LucideIcon = Icons[offer.icon] || Icons.Circle;
                      return (
                          <div key={i} className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_10px_30px_rgba(33,49,86,0.04)] hover:scale-[1.03] transition-all duration-300 group cursor-default">
                              <div className={`w-12 h-12 rounded-lg bg-${offer.color}/10 flex items-center justify-center text-${offer.color} mb-6 group-hover:bg-${offer.color} group-hover:text-on-${offer.color} group-hover:rotate-6 transition-all duration-300`}>
                                  <LucideIcon className="w-6 h-6" />
                              </div>
                              <h3 className="font-headline font-bold text-xl mb-4 group-hover:text-primary transition-colors">{offer.title}</h3>
                              <p className="text-on-surface-variant text-sm leading-relaxed">{offer.desc}</p>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* Section 2: Why Choose StackMinds */}
      <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                          <img className="w-full aspect-[4/5] object-cover rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLYqzw1PrbPqV0yqqG5B8W-NZPMwJ8NyM6h2WYzMz3LmfMmXk_u8LMW7HbOli9n9pS5_oPcaS7dyCUPW6IRvgaFsQ4wfnZZ0XTvwurYrxFRY1yhwE-UlfijIh2W74dHVcYn0IHdpLGYeTW0dBMGU1DpYkoZW7-UQz7IDtGkj72eOSKgO4kyE8Lo3JcAnR-HMGPf8rypEQ67-Wvyzth_NMp1XSvi2cDCU69AJGuIRICPtdmSePABUxEYsAlQQN3B98vCevXQEXjrg" alt="Team Work"/>
                          <div className="bg-primary p-8 rounded-xl text-on-primary hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                              <span className="font-headline font-black text-5xl flex items-center gap-2"><Icons.TrendingUp className="w-8 h-8 opacity-50" /> {data.whyChooseStat}</span>
                              <p className="font-label text-sm uppercase tracking-widest mt-2">{data.whyChooseSub}</p>
                          </div>
                      </div>
                      <div className="space-y-4 pt-12">
                          <div className="bg-surface-container-highest p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                              <Icons.ShieldCheck className="text-primary w-10 h-10 mb-4" />
                              <p className="font-headline font-bold text-lg text-on-surface">Premium Standards</p>
                          </div>
                          <img className="w-full aspect-square object-cover rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC22-goRZWTjh2J-g_-xueTGwjwYH8v4Tl_nuCGXS3MQk3A1e3QaQq1zqAMkDhJMlWGORHxFek4NZst4PYdiAyL-pfCSdgKC5sAuUjoLTtvz3x-cpadGppIcysKkj5V0KEVvaVaXDqvHEJwgELvlHJkRVANuQVAbtYuRn_qsEv9i557ktzInFw_E6KK_zX1ZW20HtvLFNVUhKRSewDT4X2fzNtjo1rZ0sDl5t1yNftIc1VM21P1g7-g7DI0lWJWqQOmAA8c9oYJWQ" alt="Modern Tech"/>
                      </div>
                  </div>

                  <div className="space-y-8">
                      <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight">Why Choose <span className="text-primary">StackMinds</span></h2>
                      
                      <div className="space-y-12">
                          {data.whyChooseFeatures.map((feat, i) => {
                              const LucideIcon = Icons[feat.icon] || Icons.Circle;
                              return (
                                  <div key={i} className="flex gap-6 group">
                                      <div className="shrink-0 w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                          <LucideIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                      </div>
                                      <div>
                                          <h4 className="font-headline font-bold text-xl mb-2 group-hover:text-primary transition-colors">{feat.title}</h4>
                                          <p className="text-on-surface-variant leading-relaxed">
                                              {feat.desc}
                                          </p>
                                      </div>
                                  </div>
                              );
                          })}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6">Our Process</h2>
                  <p className="text-on-surface-variant text-lg">A systematic approach to creating digital excellence, from initial concept to high-performance launch.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 relative">
                  <div className="hidden md:block absolute top-24 left-0 w-full h-px bg-outline-variant/30 -z-10"></div>
                  
                  <div className="relative flex flex-col items-center text-center group">
                      <div className="w-20 h-20 rounded-full bg-surface-container-lowest shadow-xl flex items-center justify-center text-primary font-headline font-black text-2xl mb-8 group-hover:bg-primary group-hover:text-on-primary group-hover:-translate-y-2 transition-all duration-300">
                          01
                      </div>
                      <h3 className="font-headline font-extrabold text-2xl mb-4 group-hover:text-primary transition-colors">Strategy & Research</h3>
                      <p className="text-on-surface-variant leading-relaxed">We dive deep into your business goals and user needs to build a roadmap for success.</p>
                  </div>
                  
                  <div className="relative flex flex-col items-center text-center group">
                      <div className="w-20 h-20 rounded-full bg-surface-container-lowest shadow-xl flex items-center justify-center text-primary font-headline font-black text-2xl mb-8 group-hover:bg-primary group-hover:text-on-primary group-hover:-translate-y-2 transition-all duration-300 mt-12 md:mt-0">
                          02
                      </div>
                      <h3 className="font-headline font-extrabold text-2xl mb-4 group-hover:text-primary transition-colors">Design & Development</h3>
                      <p className="text-on-surface-variant leading-relaxed">Where the ethereal becomes reality. We sculpt the UI and engineer the engine with precision code.</p>
                  </div>

                  <div className="relative flex flex-col items-center text-center group">
                      <div className="w-20 h-20 rounded-full bg-surface-container-lowest shadow-xl flex items-center justify-center text-primary font-headline font-black text-2xl mb-8 group-hover:bg-primary group-hover:text-on-primary group-hover:-translate-y-2 transition-all duration-300 mt-12 md:mt-0">
                          03
                      </div>
                      <h3 className="font-headline font-extrabold text-2xl mb-4 group-hover:text-primary transition-colors">Launch & Optimization</h3>
                      <p className="text-on-surface-variant leading-relaxed">The final ascent. We deploy and continuously refine for peak performance and maximum impact.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 4: Final CTA */}
      <section className="px-8 py-24">
          <div className="max-w-5xl mx-auto rounded-xl bg-gradient-to-br from-primary to-primary-dim p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20 group">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700">
                  <Icons.Rocket className="w-[30rem] h-[30rem] absolute -top-40 -left-20 text-white" />
              </div>
              <div className="relative z-10 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-on-primary tracking-tight">Ready to start <br/>your project?</h2>
                  <p className="text-on-primary/80 text-xl max-w-2xl mx-auto font-body">
                      Let's collaborate to build a digital environment that defines your brand's future.
                  </p>
                  <div className="pt-4">
                      <Link to="/contact" className="inline-block bg-on-primary text-primary px-10 py-5 rounded-full font-headline font-extrabold text-lg flex items-center justify-center gap-3 w-max mx-auto shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                          Get a Custom Quote <Icons.ArrowRight className="w-5 h-5" />
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
