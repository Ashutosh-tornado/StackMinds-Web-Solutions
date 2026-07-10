import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-[#faf8ff]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-headline font-extrabold text-8xl md:text-9xl bg-gradient-to-r from-[#623fde] to-[#8b77ff] bg-clip-text text-transparent leading-none"
        >
          404
        </motion.h1>

        <h2 className="font-headline font-bold text-2xl md:text-3xl text-[#0d1b3e] mt-6">
          Page not found
        </h2>

        <p className="font-['Manrope'] text-[#213156]/60 mt-4 text-base md:text-lg">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#623fde] text-white font-['Manrope'] font-semibold text-sm hover:bg-[#5433c4] transition-colors duration-200 shadow-lg shadow-[#623fde]/25"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#213156]/15 text-[#213156] font-['Manrope'] font-semibold text-sm hover:border-[#623fde]/40 hover:text-[#623fde] transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
