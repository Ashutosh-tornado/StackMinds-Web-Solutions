import React from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '918637738449';
const WHATSAPP_MSG = encodeURIComponent(
  "Hi StackMinds Research Division! I'm interested in your Research & Academic Assistance services. Can you help me?"
);
const RESEARCH_EMAIL = 'expertsresearch9@gmail.com';

const ResearchAssistance = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low asymmetric-shape -z-10"></div>
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Professional Services
            </div>
            <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter">
              Professional <span className="text-gradient">Research & Academic</span> Assistance
            </h1>
            <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl">
              Helping students, scholars, and professionals with structured research support, academic guidance, and publication-ready documentation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/research-contact"
                className="bg-primary hover:bg-primary-dim text-on-primary px-8 py-4 rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 transition-all text-center inline-block"
              >
                Get Consultation
              </Link>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window.gtag === "function") {
                    window.gtag('event', 'conversion', {
                      'send_to': 'AW-18109892306/FSCECKj6kKAcENKNvLtD'
                    });
                  }
                }}
                className="bg-[#25D366]/10 text-[#006880] px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-[#25D366]/20 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.852-6.89C16.64 2.132 14.195 1.12 11.6 1.12c-5.442 0-9.866 4.372-9.87 9.749-.001 1.764.483 3.426 1.405 4.821L2.122 22.04l6.525-1.886zM18.82 17.2c-.345-.174-2.04-1.007-2.355-1.122-.315-.115-.545-.174-.775.173-.23.348-.89 1.123-1.09 1.348-.2.227-.4.254-.746.08-1.396-.698-2.316-1.168-3.236-1.745-.733-.459-1.282-1.034-1.547-1.493-.265-.46-.028-.708.204-.938.209-.207.46-.538.69-.807.23-.268.307-.46.46-.767.153-.308.077-.576-.038-.807-.115-.23-.775-1.865-1.095-2.633-.31-.75-.63-.65-.775-.657-.14-.007-.298-.008-.46-.008-.16 0-.422.06-.643.302-.22.24-.84.822-.84 2.005 0 1.182.86 2.325.98 2.485.12.16 1.69 2.58 4.093 3.62.57.245 1.018.393 1.366.502 1.01.32 1.93.275 2.655.167.81-.12 2.04-.832 2.33-1.637.29-.803.29-1.49.203-1.636-.088-.147-.315-.233-.66-.407z"/>
                </svg>
                Talk on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest p-4 backdrop-blur-xl border border-white/20">
              <img
                alt="Research Dashboard Mockup"
                className="rounded-2xl w-full"
                data-alt="Premium research dashboard with thesis document, SPSS chart, and analytics"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2WRsbd2MzVFJf87u6vRQBUAiMnZH_THs2miJxnFapnTqt8uIaPDGb3lSaLugl2a6e-FJpX31CG47lrHipDhtV9Pht12ChHnl7BlJLkDGEkq0WmX14LFi6nuaOxuHyeYSCuLAbVu9FjNYLRnibcYNBdtOFUo4ZAmIoJ5nec_c-TwWRbPy79gt5MZdLLiDAQA4XmxiZA5MBtOC_ZXYnxhxK_yfA-qNXo8NXoL2ZSNiBYVJrH2EKDVYLqSv8w1CaWw5gGYTveNIK7w"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-12 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 rounded-full bg-surface-container text-on-surface font-bold text-sm shadow-sm">💻 Computer Science</div>
            <div className="px-6 py-3 rounded-full bg-surface-container text-on-surface font-bold text-sm shadow-sm">📊 Management</div>
            <div className="px-6 py-3 rounded-full bg-surface-container text-on-surface font-bold text-sm shadow-sm">🏥 Healthcare</div>
            <div className="px-6 py-3 rounded-full bg-surface-container text-on-surface font-bold text-sm shadow-sm">🌾 Agriculture</div>
            <div className="px-6 py-3 rounded-full bg-surface-container text-on-surface font-bold text-sm shadow-sm">📈 Commerce</div>
            <div className="px-6 py-3 rounded-full bg-surface-container text-on-surface font-bold text-sm shadow-sm">⚙️ Engineering</div>
            <div className="px-6 py-3 rounded-full bg-surface-container text-on-surface font-bold text-sm shadow-sm">🧠 Social Sciences</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-bold text-on-surface">Our Research Solutions</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Comprehensive academic support to elevate your research quality.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group hover:bg-[#f2f3ff] border border-transparent hover:border-[#623fde]/20">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-primary">description</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Thesis & Dissertation</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Comprehensive guidance for structuring and refining your doctoral or master's thesis to meet university standards.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group hover:bg-[#f2f3ff] border border-transparent hover:border-[#623fde]/20">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-secondary">lightbulb</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Research Proposal</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Expert assistance in drafting compelling research proposals and synopses that secure approval.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group hover:bg-[#f2f3ff] border border-transparent hover:border-[#623fde]/20">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-tertiary">menu_book</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Literature Review</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Systematic review support to identify research gaps and synthesize existing literature effectively.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group hover:bg-[#f2f3ff] border border-transparent hover:border-[#623fde]/20">
              <div className="w-12 h-12 rounded-full bg-[#1e40af]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-[#1e40af]">bar_chart</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Data Analysis</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Advanced statistical analysis, hypothesis testing, and data visualization for robust research findings.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group hover:bg-[#f2f3ff] border border-transparent hover:border-[#623fde]/20">
              <div className="w-12 h-12 rounded-full bg-[#006880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-[#006880]">format_align_left</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Paper Formatting</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Precision formatting to ensure your manuscript adheres perfectly to target journal guidelines.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group hover:bg-[#f2f3ff] border border-transparent hover:border-[#623fde]/20">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-primary">format_quote</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Citation & Referencing</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Accurate styling and management of references across APA, MLA, Harvard, IEEE, and Chicago formats.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group hover:bg-[#f2f3ff] border border-transparent hover:border-[#623fde]/20">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-tertiary">spellcheck</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Editing & Proofreading</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Meticulous language polishing, structural editing, and tone refinement for publication-ready documents.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group hover:bg-[#f2f3ff] border border-transparent hover:border-[#623fde]/20">
              <div className="w-12 h-12 rounded-full bg-[#1e40af]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-[#1e40af]">assignment</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Survey & Questionnaire</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Crafting reliable and valid survey instruments to gather high-quality primary data for your research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-on-surface">How We Work</h2>
            <p className="text-on-surface-variant mt-4 text-lg">A structured, transparent process for academic excellence.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-outline-variant/30 -z-10"></div>

            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-lg flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">1</div>
              <h3 className="font-headline font-bold text-lg mb-2">Requirement Discussion</h3>
              <p className="text-on-surface-variant text-sm">Understanding goals & guidelines.</p>
            </div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-lg flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">2</div>
              <h3 className="font-headline font-bold text-lg mb-2">Topic & Scope Review</h3>
              <p className="text-on-surface-variant text-sm">Evaluating feasibility.</p>
            </div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-lg flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">3</div>
              <h3 className="font-headline font-bold text-lg mb-2">Research Planning</h3>
              <p className="text-on-surface-variant text-sm">Outlining the methodology.</p>
            </div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-lg flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">4</div>
              <h3 className="font-headline font-bold text-lg mb-2">Draft Review</h3>
              <p className="text-on-surface-variant text-sm">Collaborative feedback loop.</p>
            </div>
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-lg flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">5</div>
              <h3 className="font-headline font-bold text-lg mb-2">Final Formatting</h3>
              <p className="text-on-surface-variant text-sm">Publication-ready delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-[#213156] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1dfba5]/15 flex items-center justify-center mb-4 text-[#1dfba5] transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">lock</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider">Confidential</h4>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1dfba5]/15 flex items-center justify-center mb-4 text-[#1dfba5] transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">account_tree</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider">Structured</h4>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1dfba5]/15 flex items-center justify-center mb-4 text-[#1dfba5] transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">format_align_center</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider">Professional</h4>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1dfba5]/15 flex items-center justify-center mb-4 text-[#1dfba5] transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">schedule</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider">Timely Delivery</h4>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 col-span-2 lg:col-span-1">
              <div className="w-16 h-16 rounded-full bg-[#1dfba5]/15 flex items-center justify-center mb-4 text-[#1dfba5] transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">science</span>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-wider">Research-Oriented</h4>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-on-surface">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-on-surface list-none [&::-webkit-details-marker]:hidden">
                What services are included?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4 leading-relaxed">We offer comprehensive support including thesis guidance, data analysis, literature reviews, formatting, and proofreading. We provide professional academic consulting and do not offer ready-made assignments.</p>
            </details>
            <details className="group bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-on-surface list-none [&::-webkit-details-marker]:hidden">
                Do you support specific formatting styles?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4 leading-relaxed">Yes, our team is proficient in all major academic formatting styles including APA, MLA, Harvard, Chicago, IEEE, and custom university guidelines.</p>
            </details>
            <details className="group bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-on-surface list-none [&::-webkit-details-marker]:hidden">
                Is my research work confidential?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4 leading-relaxed">Absolutely. We maintain strict non-disclosure agreements and ensure your data and intellectual property are handled with the highest level of security.</p>
            </details>
            <details className="group bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-on-surface list-none [&::-webkit-details-marker]:hidden">
                What tools/software are supported for data analysis?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant mt-4 leading-relaxed">We assist with major statistical and qualitative analysis software, primarily focusing on SPSS, Excel, R, and NVivo.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-[#213156] text-white relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1dfba5]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#1dfba5] animate-pulse"></span>
            Research Assistance Division
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold leading-tight">
            Ready to Elevate<br />
            <span style={{ background: 'linear-gradient(135deg, #1dfba5 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Research?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Connect directly with our Research Division experts. We're ready to guide your thesis, data analysis, literature review, and more.
          </p>

          {/* Contact info row */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${RESEARCH_EMAIL}`}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 font-semibold text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {RESEARCH_EMAIL}
            </a>
            <a
              href="tel:+918637738449"
              className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 font-semibold text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 8637738449
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/research-contact"
              className="bg-white text-[#213156] hover:bg-white/90 px-8 py-4 rounded-full font-headline font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 inline-block"
            >
              Get Consultation
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window.gtag === "function") {
                  window.gtag('event', 'conversion', { 'send_to': 'AW-18109892306/FSCECKj6kKAcENKNvLtD' });
                }
              }}
              className="bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-full font-headline font-bold text-lg transition-all shadow-xl shadow-[#25D366]/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.852-6.89C16.64 2.132 14.195 1.12 11.6 1.12c-5.442 0-9.866 4.372-9.87 9.749-.001 1.764.483 3.426 1.405 4.821L2.122 22.04l6.525-1.886zM18.82 17.2c-.345-.174-2.04-1.007-2.355-1.122-.315-.115-.545-.174-.775.173-.23.348-.89 1.123-1.09 1.348-.2.227-.4.254-.746.08-1.396-.698-2.316-1.168-3.236-1.745-.733-.459-1.282-1.034-1.547-1.493-.265-.46-.028-.708.204-.938.209-.207.46-.538.69-.807.23-.268.307-.46.46-.767.153-.308.077-.576-.038-.807-.115-.23-.775-1.865-1.095-2.633-.31-.75-.63-.65-.775-.657-.14-.007-.298-.008-.46-.008-.16 0-.422.06-.643.302-.22.24-.84.822-.84 2.005 0 1.182.86 2.325.98 2.485.12.16 1.69 2.58 4.093 3.62.57.245 1.018.393 1.366.502 1.01.32 1.93.275 2.655.167.81-.12 2.04-.832 2.33-1.637.29-.803.29-1.49.203-1.636-.088-.147-.315-.233-.66-.407z" /></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchAssistance;
