import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf8ff]/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(33,49,86,0.06)]">
      <div className="flex justify-between items-center px-6 sm:px-8 md:px-10 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-black text-[#213156] dark:text-white tracking-tighter font-headline">
          StackMinds
        </Link>
        <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] font-bold text-sm tracking-tight">
          <Link to="/" className={`transition-colors duration-300 ${location.pathname === '/' ? 'text-[#623fde] border-b-2 border-[#623fde] pb-1' : 'text-[#213156]/70 dark:text-slate-300 hover:text-[#623fde]'}`}>Home</Link>
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
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:inline-block bg-[#1e40af] text-[#fcf7ff] px-6 py-2.5 rounded-full font-headline font-bold text-sm scale-95 hover:scale-100 active:opacity-80 transition-all duration-200 ease-in-out hover:shadow-lg">
            Get Started
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#213156] dark:text-white hover:bg-black/5 rounded-lg transition-colors z-50"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Side Drawer */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[400px] bg-white dark:bg-slate-900 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24 overflow-y-auto">
          <nav className="flex flex-col space-y-8 font-['Plus_Jakarta_Sans'] font-bold text-xl tracking-tight">
            <Link to="/" className={`${location.pathname === '/' ? 'text-[#623fde]' : 'text-[#213156]/70 dark:text-slate-300'}`}>Home</Link>
            <Link to="/services" className={`${location.pathname.startsWith('/services') ? 'text-[#623fde]' : 'text-[#213156]/70 dark:text-slate-300'}`}>Services</Link>
            <Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'text-[#623fde]' : 'text-[#213156]/70 dark:text-slate-300'}`}>Portfolio</Link>
            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-[#623fde]' : 'text-[#213156]/70 dark:text-slate-300'}`}>Contact</Link>
          </nav>

          <div className="mt-auto pt-10 border-t border-black/5 dark:border-white/5">
            <Link 
              to="/contact" 
              className="block w-full text-center bg-[#1e40af] text-[#fcf7ff] py-4 rounded-xl font-headline font-bold text-lg hover:shadow-xl transition-all active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
