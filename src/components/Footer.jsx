import { Link } from 'react-router-dom';
import { Globe, Mail, Link as LinkIcon, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f2f3ff] dark:bg-slate-950 w-full rounded-t-[1.5rem] py-20 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            <div className="space-y-8">
                <div className="text-xl font-bold text-[#623fde] font-headline">
                    StackMinds
                </div>
                <p className="font-['Manrope'] text-sm text-[#213156]/80 leading-relaxed">
                    We build high-performance digital experiences that help your business scale faster.
                </p>
                <div className="flex gap-4">
                    <a className="w-10 h-10 rounded-full bg-[#623fde]/10 flex items-center justify-center text-[#623fde] hover:bg-[#623fde] hover:text-white hover:-translate-y-1 transition-all duration-200" href="#"><Globe className="w-5 h-5" /></a>
                    <a className="w-10 h-10 rounded-full bg-[#623fde]/10 flex items-center justify-center text-[#623fde] hover:bg-[#623fde] hover:text-white hover:-translate-y-1 transition-all duration-200" href="#"><Mail className="w-5 h-5" /></a>
                    <a className="w-10 h-10 rounded-full bg-[#623fde]/10 flex items-center justify-center text-[#623fde] hover:bg-[#623fde] hover:text-white hover:-translate-y-1 transition-all duration-200" href="#"><LinkIcon className="w-5 h-5" /></a>
                </div>
            </div>
            <div>
                <h4 className="text-lg font-bold font-headline text-[#213156] dark:text-white mb-8">Quick Links</h4>
                <ul className="space-y-4 font-['Manrope'] text-sm">
                    <li><Link to="/" className="text-[#213156]/60 hover:text-[#623fde] hover:underline decoration-[#623fde]/30 underline-offset-4 transition-all duration-200 text-sm">Home</Link></li>
                    <li><Link to="/services" className="text-[#213156]/60 hover:text-[#623fde] hover:underline decoration-[#623fde]/30 underline-offset-4 transition-all duration-200 text-sm">Services</Link></li>
                    <li><Link to="/portfolio" className="text-[#213156]/60 hover:text-[#623fde] hover:underline decoration-[#623fde]/30 underline-offset-4 transition-all duration-200 text-sm">Portfolio</Link></li>
                    <li><Link to="/contact" className="text-[#213156]/60 hover:text-[#623fde] hover:underline decoration-[#623fde]/30 underline-offset-4 transition-all duration-200 text-sm">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-bold font-headline text-[#213156] dark:text-white mb-8">Services</h4>
                <ul className="space-y-4 font-['Manrope'] text-sm">
                    <li><Link to="/services/web-development" className="text-[#213156]/60 hover:text-[#623fde] hover:underline decoration-[#623fde]/30 underline-offset-4 transition-all duration-200 text-sm">Website Development</Link></li>
                    <li><Link to="/services/wordpress" className="text-[#213156]/60 hover:text-[#623fde] hover:underline decoration-[#623fde]/30 underline-offset-4 transition-all duration-200 text-sm">WordPress Websites</Link></li>
                    <li><Link to="/services/social-media-marketing" className="text-[#213156]/60 hover:text-[#623fde] hover:underline decoration-[#623fde]/30 underline-offset-4 transition-all duration-200 text-sm">Social Media Marketing</Link></li>
                    <li><Link to="/services/seo" className="text-[#213156]/60 hover:text-[#623fde] hover:underline decoration-[#623fde]/30 underline-offset-4 transition-all duration-200 text-sm">SEO Services</Link></li>
                </ul>
            </div>
            <div className="space-y-8">
                <h4 className="text-lg font-bold font-headline text-[#213156] dark:text-white mb-8">Newsletter</h4>
                <p className="font-['Manrope'] text-sm text-[#213156]/80">Stay updated with our latest digital strategies and insights.</p>
                <div className="relative group">
                    <input className="w-full bg-white/50 dark:bg-slate-900 border border-outline-variant/20 rounded-full py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#623fde] placeholder:text-[#213156]/30" placeholder="Enter your email" type="email" />
                    <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-[#623fde] text-white rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#5232c9] hover:scale-105 transition-all">
                        Subscribe <ArrowRight className="w-3 h-3 group-hover:translate-x-1 duration-200 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#213156]/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-['Manrope'] text-sm text-[#213156]/60">© 2024 StackMinds. Ethereal Architects of Digital Environments.</p>
            <div className="flex gap-8 text-sm text-[#213156]/60">
                <a className="hover:text-[#623fde] transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-[#623fde] transition-colors" href="#">Terms of Service</a>
            </div>
        </div>
    </footer>
  );
}
