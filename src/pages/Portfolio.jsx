import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const categories = ['All Works', 'Website', 'Landing Page'];

const themeMap = {
  Website: {
    tag: 'text-[#623fde]',
    titleHover: 'group-hover:text-[#623fde]',
    overlay: 'bg-[#623fde]/15',
    buttonText: 'text-[#623fde]',
  },
  'Landing Page': {
    tag: 'text-[#ea580c]',
    titleHover: 'group-hover:text-[#ea580c]',
    overlay: 'bg-[#ea580c]/15',
    buttonText: 'text-[#ea580c]',
  },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Works');

  const projects = Object.values(portfolioData);

  const filteredProjects =
    activeFilter === 'All Works'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <section className="py-20 bg-background text-center px-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-xs tracking-widest uppercase mb-6">
          Our Showcase
        </div>

        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight mb-6">
          Our <span className="text-primary italic">Work</span>
        </h1>

        <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-12">
          Real-world projects crafted with precision, blending premium design and high-performance development.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface-container text-[#213156] hover:bg-white hover:shadow-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 bg-background min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div layout className="grid md:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => {
                const theme = themeMap[project.category] || themeMap.Website;

                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
                    className={i % 2 !== 0 ? 'md:translate-y-12' : ''}
                  >
                    {/* Card wrapper */}
                    <div className="group block">
                      {/* IMAGE AREA → VIEW DETAILS */}
                      <Link
                        to={`/portfolio/${project.slug}`}
                        className="block"
                      >
                        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 bg-surface-container shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={project.previewImg}
                            alt={project.client}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />

                          <div
                            className={`absolute inset-0 ${theme.overlay} opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
                          >
                            <div className={`bg-white ${theme.buttonText} px-8 py-4 rounded-full font-headline font-bold shadow-2xl`}>
                              View Details
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* CONTENT */}
                      <div className="space-y-2 px-4 bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-outline-variant/10 -mt-16 mx-4 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                        <div className={`${theme.tag} font-bold text-xs uppercase tracking-widest`}>
                          {project.category}
                        </div>

                        <h3 className={`text-2xl font-headline font-bold text-on-surface ${theme.titleHover} transition-colors`}>
                          {project.client}
                        </h3>

                        <p className="text-on-surface-variant line-clamp-2 text-sm">
                          {project.subtitle}
                        </p>

                        {/* LIVE SITE LINK → stays below */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 mt-4 font-bold text-sm ${theme.buttonText} hover:opacity-80 transition-opacity`}
                        >
                          View Live Site
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-[#213156]/50">
              <p className="text-xl font-bold font-headline">
                More projects launching soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-5xl mx-auto bg-surface-container-low rounded-[3rem] p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight">
              Ready to build your masterpiece?
            </h2>

            <p className="text-xl text-on-surface-variant my-6">
              Let's collaborate to create something exceptional.
            </p>

            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dim text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all hover:-translate-y-1 inline-block"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}