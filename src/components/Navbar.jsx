import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

/* ─── Magnetic nav link with animated underline ─── */
function NavLink({ to, children, active }) {
  return (
    <Link
      to={to}
      className="relative group flex flex-col items-center"
      style={{ color: active ? '#623fde' : 'rgba(33,49,86,0.65)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '-0.01em', transition: 'color 0.2s ease' }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#623fde'; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(33,49,86,0.65)'; }}
    >
      {children}
      {/* Animated underline */}
      <span
        style={{
          position: 'absolute', bottom: -3, left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, #623fde, #8b77ff)',
          borderRadius: 2,
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.28s cubic-bezier(0.22,1,0.36,1)',
        }}
        className="group-hover:scale-x-100"
      />
    </Link>
  );
}

/* ─── Services dropdown link ─── */
function DropdownLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-5 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg mx-1"
      style={{ color: 'rgba(33,49,86,0.72)' }}
      onMouseEnter={e => { e.currentTarget.style.color = '#623fde'; e.currentTarget.style.background = 'rgba(98,63,222,0.06)'; }}
      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(33,49,86,0.72)'; e.currentTarget.style.background = 'transparent'; }}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  /* Track scroll for glassmorphism intensification */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu & dropdown on route change */
  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  /* Nav items stagger */
  const navContainer = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } };
  const navItem = {
    hidden: { opacity: 0, y: -10 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* ═══ MAIN NAV BAR ═══ */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, width: '100%', zIndex: 50,
          background: scrolled ? 'rgba(250,248,255,0.82)' : 'rgba(250,248,255,0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(98,63,222,0.10)' : '1px solid rgba(98,63,222,0.05)',
          boxShadow: scrolled ? '0 4px 32px rgba(33,49,86,0.07)' : '0 2px 16px rgba(33,49,86,0.04)',
          transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
          willChange: 'transform',
        }}
      >
        <div className="flex justify-between items-center px-6 sm:px-8 md:px-10 py-4 max-w-7xl mx-auto">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <Link
              to="/"
              className="font-headline font-black tracking-tighter"
              style={{ fontSize: '1.45rem', color: '#213156', letterSpacing: '-0.04em', lineHeight: 1 }}
              onMouseEnter={e => { e.currentTarget.style.color = '#623fde'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#213156'; }}
            >
              Stack<span style={{ color: '#623fde' }}>Minds</span>
            </Link>
          </motion.div>

          {/* Desktop nav links */}
          <motion.div
            variants={navContainer}
            initial="hidden"
            animate="show"
            className="hidden md:flex items-center gap-8"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            <motion.div variants={navItem}>
              <NavLink to="/" active={isActive('/')}>Home</NavLink>
            </motion.div>

            {/* Services with dropdown */}
            <motion.div variants={navItem}>
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 font-bold text-sm"
                  style={{ color: isActive('/services') ? '#623fde' : 'rgba(33,49,86,0.65)', letterSpacing: '-0.01em', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => { if (!isActive('/services')) e.currentTarget.style.color = '#623fde'; }}
                  onMouseLeave={e => { if (!isActive('/services')) e.currentTarget.style.color = 'rgba(33,49,86,0.65)'; }}
                >
                  Services
                  <motion.span animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                    <ChevronDown style={{ width: 15, height: 15 }} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        position: 'absolute', top: 'calc(100% + 14px)', left: '-12px',
                        width: 240, zIndex: 60,
                        background: 'rgba(255,255,255,0.96)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 18,
                        boxShadow: '0 16px 48px rgba(33,49,86,0.14), 0 1px 0 rgba(255,255,255,0.9) inset',
                        border: '1px solid rgba(98,63,222,0.10)',
                        padding: '10px 0',
                        transformOrigin: 'top left',
                      }}
                    >
                      {[
                        ['Web Development', '/services/web-development'],
                        ['WordPress Websites', '/services/wordpress'],
                        ['Ecommerce', '/services/ecommerce'],
                        ['Social Media Marketing', '/services/social-media-marketing'],
                        ['Google Ads', '/services/google-ads'],
                        ['SEO', '/services/seo'],
                        ['Research & Academic Assistance', '/research-assistance'],
                        ['Content Writing', '/services/content-writing'],
                        ['Creative Designing', '/services/creative-designing'],
                      ].map(([label, path], i) => (
                        <DropdownLink key={i} to={path}>{label}</DropdownLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div variants={navItem}>
              <NavLink to="/portfolio" active={isActive('/portfolio')}>Portfolio</NavLink>
            </motion.div>
            <motion.div variants={navItem}>
              <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
            </motion.div>
          </motion.div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="hidden md:block"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 font-headline font-bold text-sm rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #623fde, #8b77ff)',
                  color: '#fff',
                  padding: '10px 22px',
                  boxShadow: '0 4px 18px rgba(98,63,222,0.28)',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(98,63,222,0.38)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(98,63,222,0.28)'; }}
              >
                {/* shimmer */}
                <span
                  className="absolute inset-0 -skew-x-12 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-600"
                  style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)', transitionDuration: '600ms' }}
                />
                Get Started
                <ArrowRight style={{ width: 14, height: 14, transition: 'transform 0.2s ease' }} className="group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Hamburger */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl"
              style={{ color: '#213156', background: 'transparent', border: 'none', cursor: 'pointer', transition: 'background 0.18s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(98,63,222,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X style={{ width: 22, height: 22 }} /></motion.span>
                  : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu style={{ width: 22, height: 22 }} /></motion.span>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ═══ MOBILE OVERLAY ═══ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(15,15,30,0.35)', backdropFilter: 'blur(4px)', zIndex: 40 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ═══ MOBILE DRAWER ═══ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '80%', maxWidth: 380, zIndex: 50,
              background: 'rgba(250,248,255,0.97)',
              backdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(98,63,222,0.10)',
              boxShadow: '-16px 0 48px rgba(33,49,86,0.12)',
              willChange: 'transform',
            }}
          >
            <div className="flex flex-col h-full overflow-y-auto" style={{ paddingTop: '5rem', paddingBottom: '2.5rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.2rem' }}>
                {[
                  ['Home', '/'],
                  ['Services', '/services'],
                  ['Portfolio', '/portfolio'],
                  ['Contact', '/contact'],
                ].map(([label, path], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 + i * 0.06, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={path}
                      style={{ color: isActive(path) ? '#623fde' : 'rgba(33,49,86,0.7)', letterSpacing: '-0.02em' }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginTop: 'auto', paddingTop: '2.5rem', borderTop: '1px solid rgba(98,63,222,0.08)' }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: 'block', textAlign: 'center', width: '100%',
                    background: 'linear-gradient(135deg, #623fde, #8b77ff)',
                    color: '#fff', padding: '16px', borderRadius: 16,
                    fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800,
                    fontSize: '1.05rem', letterSpacing: '-0.01em',
                    boxShadow: '0 8px 28px rgba(98,63,222,0.30)',
                  }}
                >
                  Get Started Free
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
