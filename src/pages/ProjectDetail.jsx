import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Sparkles, Ruler, Box, Zap, ShoppingCart, Shield, BarChart2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetail() {
  const { projectId } = useParams();
  
  // Provide a fallback if route doesn't match
  const data = portfolioData[projectId] || portfolioData["nexus-analytics"];

  // A helper map for rendering the dynamic icons in the Feature List
  const iconMap = {
    Sparkles, Ruler, Box, Zap, ShoppingCart, Shield, BarChart2, Cpu
  };

  return (
    <>
      <div className="bg-[#faf8ff] min-h-screen">
        {/* HERO SECTION */}
        <section className="px-8 pt-24 pb-16 max-w-7xl mx-auto">
          <div className="space-y-6 max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 bg-[#d1f4ff] text-[#006080] px-4 py-2 rounded-full font-bold text-[10px] tracking-widest uppercase">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {data.tag}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-[#213156] leading-[1.05] tracking-tight">
              {data.titleLine1} <br />
              <span className="text-[#623fde]">{data.titleLine2}</span>
            </h1>
            
            <p className="text-xl text-[#213156]/70 leading-relaxed font-body max-w-2xl">
              {data.subtitle}
            </p>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black">
            <img 
                src={data.heroImg} 
                alt="Project Hero" 
                className="w-full h-full object-cover aspect-[21/9] md:aspect-[24/10] opacity-90"
            />
            
            {/* Floating Stat Card */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-white/90 backdrop-blur-md p-6 md:px-8 md:py-6 rounded-2xl shadow-xl flex flex-col items-center">
              <span className="text-[#623fde] text-4xl md:text-5xl font-headline font-black mb-1">{data.statValue}</span>
              <span className="text-[#213156]/60 text-[10px] font-bold tracking-widest uppercase">{data.statLabel}</span>
            </div>
          </div>
        </section>

        {/* OVERVIEW & SIDE PANEL */}
        <section className="px-8 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column (Project Overview) */}
            <div className="lg:w-2/3 space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-1 bg-[#623fde] rounded-full"></div>
                  <h2 className="text-3xl font-headline font-bold text-[#213156]">Project Overview</h2>
                </div>
                
                <div className="space-y-6 text-lg text-[#213156]/70 leading-relaxed">
                  {data.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-[#213156]/10">
                <div>
                  <div className="text-[10px] font-bold text-[#213156]/50 uppercase tracking-widest mb-2">Client</div>
                  <div className="font-headline font-bold text-[#213156]">{data.client}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#213156]/50 uppercase tracking-widest mb-2">Duration</div>
                  <div className="font-headline font-bold text-[#213156]">{data.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#213156]/50 uppercase tracking-widest mb-2">Release</div>
                  <div className="font-headline font-bold text-[#213156]">{data.release}</div>
                </div>
              </div>
            </div>

            {/* Right Column (Side Panel) */}
            <div className="lg:w-1/3 space-y-8">
              {/* Scope of Work Box */}
              <div className="bg-[#623fde] p-8 md:p-10 rounded-[2rem] text-white shadow-xl shadow-[#623fde]/20">
                <h3 className="font-headline font-bold text-2xl mb-8">Scope of Work</h3>
                <ul className="space-y-5">
                  {data.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used Box */}
              <div className="bg-[#f0edfa] p-8 md:p-10 rounded-[2rem]">
                <h3 className="font-headline font-bold text-2xl text-[#213156] mb-8">Tools Used</h3>
                <div className="flex flex-wrap gap-3">
                  {data.tools.map((tool, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white px-5 py-2.5 rounded-full text-sm font-bold text-[#623fde] shadow-sm hover:shadow-md transition-shadow cursor-default border border-[#e2ddf2]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* FEATURE SECTION */}
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Mobile UI Box */}
            <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-[0_20px_60px_rgba(33,49,86,0.05)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px]"></div>
                <img src={data.featureImg} alt="Mobile feature UI" className="relative z-10 w-full max-w-[280px] object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>

            {/* Right: Feature Text */}
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-bold text-[#213156] leading-tight">
                {data.featureTitle}
              </h2>
              <p className="text-lg text-[#213156]/70 leading-relaxed">
                {data.featureText}
              </p>
              
              <div className="space-y-4 pt-4">
                {data.featuresList.map((feature, idx) => {
                  const IconComp = iconMap[feature.icon] || Sparkles;
                  return (
                    <div key={idx} className="flex items-center gap-4 bg-[#f0edfa] px-6 py-4 rounded-xl group hover:bg-[#623fde] transition-colors duration-300 cursor-default">
                      <IconComp className="w-5 h-5 text-[#623fde] group-hover:text-white transition-colors" />
                      <span className="font-bold text-[#213156] group-hover:text-white transition-colors">{feature.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-8 py-24 max-w-7xl mx-auto">
          <div className="bg-[#5735c9] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#623fde]/20">
            {/* Subtle Gradient Backings */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c5deb] rounded-full blur-[100px] -mr-32 -mt-32 opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4c2bb5] rounded-full blur-[100px] -ml-32 -mb-32 opacity-80"></div>
            
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight">
                Ready to start a similar project?
              </h2>
              <p className="text-[#d1c4f9] text-xl">
                Let's collaborate to architect your next digital environment. Our team is ready to translate your vision into a high-performance reality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link to="/contact" className="w-full sm:w-auto bg-white text-[#623fde] px-10 py-4 rounded-full font-headline font-bold flex justify-center hover:scale-105 transition-transform shadow-xl hover:bg-slate-50">
                  Book a Strategy Call
                </Link>
                <Link to="/services" className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-4 rounded-full font-headline font-bold flex justify-center hover:bg-white/10 transition-colors">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
