import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(33,49,86,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-black text-[#213156] dark:text-white tracking-tighter font-headline">
          StackMinds
        </Link>
        <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] font-bold text-sm tracking-tight">
          <Link to="/" className="text-[#623fde] border-b-2 border-[#623fde] pb-1 transition-colors duration-300">Home</Link>
          <div className="relative group">
            <Link to="/services" className="flex items-center gap-1 text-[#213156]/70 dark:text-slate-300 hover:text-[#623fde] transition-colors duration-300">
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-0 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-outline-variant/10 py-4 transform origin-top translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Link to="/services/web-development" className="block px-6 py-2.5 hover:bg-[#623fde]/5 hover:text-[#623fde] transition-colors">Website Development</Link>
                <Link to="/services/wordpress" className="block px-6 py-2.5 hover:bg-[#623fde]/5 hover:text-[#623fde] transition-colors">WordPress Websites</Link>
                <Link to="/services/ecommerce" className="block px-6 py-2.5 hover:bg-[#623fde]/5 hover:text-[#623fde] transition-colors">Ecommerce Development</Link>
                <Link to="/services/social-media-marketing" className="block px-6 py-2.5 hover:bg-[#623fde]/5 hover:text-[#623fde] transition-colors">Social Media Marketing</Link>
                <Link to="/services/google-ads" className="block px-6 py-2.5 hover:bg-[#623fde]/5 hover:text-[#623fde] transition-colors">Google Ads</Link>
                <Link to="/services/seo" className="block px-6 py-2.5 hover:bg-[#623fde]/5 hover:text-[#623fde] transition-colors">SEO</Link>
                <Link to="/services/content-writing" className="block px-6 py-2.5 hover:bg-[#623fde]/5 hover:text-[#623fde] transition-colors">Content Writing</Link>
                <Link to="/services/creative-designing" className="block px-6 py-2.5 hover:bg-[#623fde]/5 hover:text-[#623fde] transition-colors">Creative Designing</Link>
              </div>
            </div>
          </div>
          <Link to="/portfolio" className="text-[#213156]/70 dark:text-slate-300 hover:text-[#623fde] transition-colors duration-300">Portfolio</Link>
          <Link to="/contact" className="text-[#213156]/70 dark:text-slate-300 hover:text-[#623fde] transition-colors duration-300">Contact</Link>
        </div>
        <Link to="/contact" className="bg-[#1e40af] text-[#fcf7ff] px-6 py-2.5 rounded-full font-headline font-bold text-sm scale-95 hover:scale-100 active:opacity-80 transition-all duration-200 ease-in-out hover:shadow-lg">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
