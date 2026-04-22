import { useRef, useEffect, useState } from 'react';
import {
  motion, useInView, AnimatePresence, useScroll, useTransform, useSpring,
} from 'framer-motion';
import {
  Phone, MessageCircle, CheckCircle, Star, ArrowRight,
  Globe, ShoppingCart, Layout, Smartphone, Zap, Search,
  MessageSquare, Clock, MapPin, Shield, TrendingUp, Users, Rocket,
} from 'lucide-react';

/* --- Easing presets --- */
const E  = [0.16, 1, 0.30, 1];
const EQ = [0.25, 1, 0.50, 1];
const EC = [0.00, 0.55, 0.45, 1];

/* --- Contact info --- */
const PHONE_NUMBER    = '9579837110';
const WHATSAPP_NUMBER = '919579837110';
const WHATSAPP_MSG    = encodeURIComponent(
  "Hi StackMinds! I'm interested in getting a website for my business. Can you help me?"
);

/* --- Data --- */
const SERVICES = [
  {
    icon: Globe,
    title: 'Business Website',
    desc: 'Professional, mobile-first websites that convert visitors into customers. Clean design, fast loading, and built to rank on Google.',
    accent: '#623fde',
    tag: 'Most Popular',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Website',
    desc: 'Full-featured online stores with product listings, cart, payment gateway integration, and admin panel.',
    accent: '#006880',
    tag: 'For Online Sellers',
  },
  {
    icon: Layout,
    title: 'WordPress Website',
    desc: 'Fully customizable WordPress sites with CMS panel so you can update content anytime without a developer.',
    accent: '#7c5ce8',
    tag: 'Easy to Manage',
  },
];

const PRICING = [
  {
    name: 'Basic',
    price: '₹9,999',
    desc: 'Perfect for freelancers and small businesses getting started online.',
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form',
      'Basic SEO setup',
      'WhatsApp chat button',
      '3-5 day delivery',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '₹14,999',
    desc: 'Great for growing businesses that need more features and pages.',
    features: [
      'Up to 10 pages',
      'Premium responsive design',
      'Contact + inquiry forms',
      'Full SEO optimization',
      'WhatsApp & call integration',
      '5-7 day delivery',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '₹25,000+',
    desc: 'Complete digital presence for established businesses and e-commerce.',
    features: [
      'Up to 15 pages',
      'Premium responsive design',
      'Custom animations & design',
      'E-commerce / booking system',
      'Advanced SEO & speed opt.',
      'WhatsApp & call integration',
      'Priority support',
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

const BENEFITS = [
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Looks perfect on all devices — phones, tablets, and desktops.' },
  { icon: MessageSquare, title: 'WhatsApp Integration', desc: 'Direct WhatsApp chat button so customers can contact you instantly.' },
  { icon: Search, title: 'SEO-Ready Structure', desc: 'Built with proper headings, meta tags, and structure to rank on Google.' },
  { icon: Zap, title: 'Fast Loading', desc: 'Optimized for speed. Faster sites convert more and rank higher.' },
  { icon: Shield, title: 'SSL Secured', desc: 'Free SSL certificate included. Your site runs on HTTPS — trusted by Google.' },
  { icon: TrendingUp, title: 'Lead Generation', desc: 'Designed to turn visitors into enquiries, calls, and paying customers.' },
];

const TESTIMONIALS = [
  {
    name: 'Deepak Patil',
    business: 'Patil Tours & Travels, Nallasopara',
    text: 'Excellent work by StackMinds. My travel website looks better than my competitors and now I get online bookings. Very happy with their service!',
    rating: 5,
  },
  {
    name: 'Vinayak',
    business: 'Business Owner, Vasai',
    text: 'Worked with Stackminds Web Solutions for a website project. They were easy to communicate with and made sure the final result matched what we had in mind.',
    rating: 5,
  },
  {
    name: 'Ramesh',
    business: 'Rudr Textile Solutions',
    text: 'The team at StackMinds created a fantastic website for our textile business. Their attention to detail and modern design has really helped us stand out in the local market.',
    rating: 5,
  },
];

const TRUST_STATS = [
  { icon: Globe,  value: '10+',     label: 'Websites Delivered' },
  { icon: Clock,  value: '3-5',     label: 'Days Delivery' },
  { icon: MapPin, value: 'Vasai-Virar', label: 'Local Service' },
  { icon: Users,  value: '100%',    label: 'Client Satisfaction' },
];

/* --- REUSABLE: Scroll reveal --- */
function Reveal({ children, direction = 'up', delay = 0, className = '', style = {} }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const map    = {
    up:    { opacity: 0, y: 44,  filter: 'blur(4px)' },
    left:  { opacity: 0, x: -48, filter: 'blur(4px)' },
    right: { opacity: 0, x:  48, filter: 'blur(4px)' },
    none:  { opacity: 0,         filter: 'blur(3px)' },
  };
  return (
    <motion.div
      ref={ref}
      initial={map[direction]}
      animate={inView ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' } : map[direction]}
      transition={{ duration: 0.72, ease: E, delay }}
      className={className}
      style={{ willChange: 'transform, opacity', ...style }}
    >
      {children}
    </motion.div>
  );
}

/* --- CTA BUTTONS --- */
function CallBtn({ size = 'md', label = 'Call Now', id }) {
  const big = size === 'lg';
  // Standardize label: remove emoji if present
  const cleanLabel = label.replace(/[📞]/g, '').trim();
  
  return (
    <motion.a
      id={id}
      href={`tel:${PHONE_NUMBER}`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: big ? 10 : 8,
        padding: big ? '16px 36px' : '12px 26px',
        borderRadius: 999,
        background: 'linear-gradient(135deg,#4a2fc0,#7c5ce8)',
        color: '#fff',
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontWeight: 800,
        fontSize: big ? '1.05rem' : '0.92rem',
        boxShadow: '0 10px 32px rgba(98,63,222,0.36)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { y: 0, scale: 1 },
        hover: { y: -4, scale: 1.04, boxShadow: '0 20px 48px rgba(98,63,222,0.52)' }
      }}
      transition={{ duration: 0.2, ease: EQ }}
    >
      <motion.div
        variants={{
          rest: { scale: 1, x: 0 },
          hover: { scale: 1.1, x: -2 }
        }}
        transition={{ duration: 0.2 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Phone style={{ width: big ? 18 : 16, height: big ? 18 : 16 }} strokeWidth={2.5} />
      </motion.div>
      {cleanLabel}
    </motion.a>
  );
}

function WhatsAppBtn({ size = 'md', label = 'Chat on WhatsApp', id }) {
  const big = size === 'lg';
  // Standardize label: remove emoji if present
  const cleanLabel = label.replace(/[💬]/g, '').trim();

  return (
    <motion.a
      id={id}
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: big ? 10 : 8,
        padding: big ? '16px 36px' : '12px 26px',
        borderRadius: 999,
        background: 'linear-gradient(135deg,#128c7e,#25d366)',
        color: '#fff',
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontWeight: 800,
        fontSize: big ? '1.05rem' : '0.92rem',
        boxShadow: '0 10px 32px rgba(37,211,102,0.32)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { y: 0, scale: 1 },
        hover: { y: -4, scale: 1.04, boxShadow: '0 20px 48px rgba(37,211,102,0.48)' }
      }}
      transition={{ duration: 0.2, ease: EQ }}
    >
      <motion.div
        variants={{
          rest: { scale: 1, rotate: 0 },
          hover: { scale: 1.1, rotate: 8 }
        }}
        transition={{ duration: 0.2 }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <MessageCircle style={{ width: big ? 18 : 16, height: big ? 18 : 16 }} strokeWidth={2.5} />
      </motion.div>
      {cleanLabel}
    </motion.a>
  );
}

function StickyMobileBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.36, ease: EQ }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          style={{
            padding: '12px 16px',
            background: 'rgba(13,27,62,0.96)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(98,63,222,0.25)',
            display: 'flex',
            gap: 10,
          }}
        >
          <a
            href={`tel:${PHONE_NUMBER}`}
            id="sticky-call-btn"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, padding: '12px 0', borderRadius: 12,
              background: 'linear-gradient(135deg,#4a2fc0,#7c5ce8)',
              color: '#fff', fontFamily: '"Plus Jakarta Sans",sans-serif',
              fontWeight: 800, fontSize: '0.88rem', textDecoration: 'none',
            }}
          >
            <Phone style={{ width: 16, height: 16 }} strokeWidth={2.5} /> Call Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank" rel="noopener noreferrer"
            id="sticky-whatsapp-btn"
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 8, padding: '12px 0', borderRadius: 12,
              background: 'linear-gradient(135deg,#128c7e,#25d366)',
              color: '#fff', fontFamily: '"Plus Jakarta Sans",sans-serif',
              fontWeight: 800, fontSize: '0.88rem', textDecoration: 'none',
            }}
          >
            <MessageCircle style={{ width: 16, height: 16 }} strokeWidth={2.5} /> WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* --- Section components --- */
function SectionLabel({ children, light = false }) {
  return (
    <p style={{
      fontSize: 10, fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase',
      color: light ? 'rgba(139,119,255,0.75)' : '#623fde', marginBottom: 14,
    }}>
      {children}
    </p>
  );
}

export default function GetWebsite() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 25 });
  
  const rocketX = useTransform(smoothProgress, [0, 0.25], [-150, 100]);
  const rocketYDrift = useTransform(smoothProgress, [0, 0.25], [0, -40]);
  const rocketRotate = useTransform(smoothProgress, [0, 0.25], [-20, 5]);
  const rocketOpacity = useTransform(smoothProgress, [0, 0.05], [0, 0.7]);
  
  const heroRef = useRef(null);
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
  const fromC = { hidden: { opacity: 0, y: 60, scale: 0.92, filter: 'blur(10px)' }, show: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: EQ } } };
  const fromB = { hidden: { opacity: 0, y: 80, filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: E } } };

  return (
    <div style={{ overflowX: 'hidden', fontFamily: '"Manrope",sans-serif', position: 'relative' }}>

      {/* Global Floating Rocket */}
      <motion.div
        className="hidden xl:block"
        style={{
          position: 'fixed', left: 0, top: '42%',
          zIndex: 10,
          x: rocketX,
          y: rocketYDrift,
          rotate: rocketRotate,
          opacity: rocketOpacity,
          pointerEvents: 'none',
          willChange: 'transform, opacity'
        }}
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ 
            width: 'clamp(40px,5vw,54px)', height: 'clamp(40px,5vw,54px)', borderRadius: 14, 
            background: 'linear-gradient(135deg,#623fde,#9b7dff)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 32px rgba(98,63,222,0.35)',
            color: '#fff'
          }}
        >
          <Rocket style={{ width: '55%', height: '55%' }} strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      {/* Trust Bar */}
      <div style={{
        background: 'linear-gradient(90deg,#3b22b0,#623fde)',
        padding: '9px 20px',
        textAlign: 'center',
        fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.90)',
        letterSpacing: '.02em',
      }}>
        🎉 Limited Time — Get Your Business Website Starting at{' '}
        <span style={{ color: '#c4b5fd', fontWeight: 900 }}>₹9,999</span>
        {' '}· Local service in Vasai-Virar
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          position: 'relative', overflow: 'hidden',
          background: 'linear-gradient(160deg,#f4f0ff 0%,#e8f4f8 45%,#ede9ff 80%,#faf8ff 100%)',
          padding: 'clamp(4rem,10vw,7rem) clamp(1.25rem,5vw,3rem) clamp(3rem,8vw,5rem)',
        }}
      >
        {/* Background Decorative Elements */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.55 }}
          transition={{ duration: 1.5, ease: EQ }}
          style={{
            position: 'absolute', top: '15%', left: '-5%',
            width: 'min(500px,60vw)', height: 'min(500px,60vw)', borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(98,63,222,0.12) 0%,transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: 'min(600px,70vw)', height: 'min(600px,70vw)', borderRadius: '50%',
            background: 'radial-gradient(ellipse,rgba(0,104,128,0.15) 0%,rgba(98,63,222,0.1) 50%,transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative Orb (Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, delay: 0.8 }}
          style={{
            position: 'absolute', right: '12%', top: '22%',
            width: 'clamp(100px,15vw,160px)', height: 'clamp(100px,15vw,160px)', borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(0,104,128,0.25) 0%,transparent 75%)',
            filter: 'blur(24px)',
            pointerEvents: 'none',
          }}
          className="hidden sm:block"
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(0,104,128,0.1)' }}
          />
        </motion.div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={fromC} style={{ marginBottom: 'clamp(1.2rem,2.5vw,1.8rem)' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '7px 18px', borderRadius: 999,
                background: 'rgba(98,63,222,0.07)', border: '1px solid rgba(98,63,222,0.15)',
                backdropFilter: 'blur(12px)', fontSize: 10, fontWeight: 800,
                letterSpacing: '.14em', textTransform: 'uppercase', color: '#5b3cca',
              }}>
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: '50%', background: '#623fde', display: 'block' }}
                />
                StackMinds Web Solutions · Vasai-Virar
              </span>
            </motion.div>
            <motion.div variants={fromC} style={{ marginBottom: 'clamp(1rem,2vw,1.6rem)' }}>
              <h1 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(2.2rem,7vw,5.2rem)', fontWeight: 900, lineHeight: 1.08, color: '#0d1b3e', letterSpacing: '-0.04em' }}>
                Get Your Business Website<br />
                <span style={{ background: 'linear-gradient(135deg,#623fde 0%,#9b7dff 45%,#006880 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Starting at ₹9,999</span>
              </h1>
            </motion.div>
            <motion.p variants={fromB} style={{ fontSize: 'clamp(1rem,1.8vw,1.15rem)', lineHeight: 1.74, color: 'rgba(33,49,86,0.62)', fontWeight: 500, maxWidth: 560, margin: '0 auto clamp(2rem,3.5vw,2.8rem)' }}>
              Mobile-friendly, fast, and designed to generate leads. Delivered in <strong style={{ color: '#0d1b3e' }}>3–5 business days</strong> — no hidden costs.
            </motion.p>
            <motion.div variants={fromB} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14, marginBottom: 'clamp(2rem,4vw,3.5rem)' }}>
              <CallBtn size="lg" label="Call Now" id="hero-call-btn" />
              <WhatsAppBtn size="lg" label="Chat on WhatsApp" id="hero-whatsapp-btn" />
            </motion.div>
            <motion.div variants={fromB} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
              {['✅ No hidden fees', '✅ Free hosting assistance', '✅ 3-5 day delivery', '✅ Local support'].map((item, i) => (
                <span key={i} style={{ padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: 'rgba(98,63,222,0.07)', color: '#3b22b0', border: '1px solid rgba(98,63,222,0.12)' }}>{item}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div style={{ position: 'relative', zIndex: 5, marginTop: 'clamp(3rem,6vw,5rem)', lineHeight: 0, overflow: 'hidden' }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}><path d="M0,20 C360,60 720,0 1080,30 C1260,45 1380,10 1440,20 L1440,60 L0,60 Z" fill="#0d1b3e" /></svg>
        </div>
      </section>

      {/* Trust Stats */}
      <section style={{ background: '#0d1b3e', position: 'relative', zIndex: 4, padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,3rem)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Reveal direction="up" style={{ textAlign: 'center', marginBottom: 'clamp(2rem,4vw,3.5rem)' }}>
            <SectionLabel light>Why Choose StackMinds</SectionLabel>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, lineHeight: 1.1, color: '#fff', letterSpacing: '-0.03em' }}>Trusted by local businesses.<br className="hidden sm:block" /> Delivering real results.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 'clamp(1rem,2vw,1.5rem)' }}>
            {TRUST_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal key={i} direction="up" delay={i * 0.1}>
                  <motion.div
                    style={{
                      padding: 'clamp(1.5rem,2.5vw,2rem)', borderRadius: 24, textAlign: 'center',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      height: '100%'
                    }}
                    whileHover={{
                      y: -5,
                      background: 'rgba(255,255,255,0.07)',
                      borderColor: 'rgba(255,255,255,0.15)',
                    }}
                    transition={{ duration: 0.25, ease: EQ }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 14, margin: '0 auto 14px', background: 'linear-gradient(135deg,rgba(98,63,222,0.28),rgba(139,119,255,0.16))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon style={{ width: 22, height: 22, color: '#c4b5fd' }} strokeWidth={2} />
                    </div>
                    <div style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1, fontFamily: '"Plus Jakarta Sans",sans-serif' }}>{stat.value}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.50)', marginTop: 6 }}>{stat.label}</div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 5, marginTop: 'clamp(3rem,6vw,5rem)', lineHeight: 0, overflow: 'hidden' }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}><path d="M0,40 C180,80 360,10 540,40 C720,70 900,10 1080,40 C1260,70 1380,28 1440,40 L1440,80 L0,80 Z" fill="#faf8ff" /></svg>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#faf8ff', position: 'relative', zIndex: 5, padding: 'clamp(1rem,4vw,3rem) clamp(1.25rem,5vw,3rem) clamp(3rem,7vw,5.5rem)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Reveal direction="up" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <SectionLabel>What We Build</SectionLabel>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', fontWeight: 900, lineHeight: 1.08, color: '#0d1b3e', letterSpacing: '-0.03em' }}>Every type of website, built<br className="hidden sm:block" /> for your business goals.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(1rem,2vw,1.5rem)' }}>
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={i} direction={i === 0 ? 'left' : i === 1 ? 'up' : 'right'} delay={i * 0.13}>
                  <motion.div
                    style={{
                      padding: 'clamp(1.8rem,3vw,2.4rem)', borderRadius: 28, background: '#ffffff',
                      border: '1px solid rgba(98,63,222,0.07)', boxShadow: '0 6px 28px rgba(98,63,222,0.05)',
                      position: 'relative', overflow: 'hidden', height: '100%'
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow: '0 20px 40px rgba(98,63,222,0.12)',
                      borderColor: 'rgba(98,63,222,0.20)',
                    }}
                    transition={{ duration: 0.3, ease: EQ }}
                  >
                    <span style={{ position: 'absolute', top: 18, right: 18, padding: '4px 10px', borderRadius: 999, fontSize: 10, fontWeight: 800, background: `${svc.accent}14`, color: svc.accent }}>{svc.tag}</span>
                    <div style={{ width: 46, height: 46, borderRadius: 14, marginBottom: 18, background: `${svc.accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon style={{ width: 22, height: 22, color: svc.accent }} strokeWidth={2.2} /></div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: '1.18rem', fontWeight: 800, color: '#0d1b3e', marginBottom: 10 }}>{svc.title}</h3>
                    <p style={{ fontSize: 13.5, lineHeight: 1.72, color: 'rgba(33,49,86,0.58)', fontWeight: 500 }}>{svc.desc}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div style={{ position: 'relative', zIndex: 5, marginTop: 'clamp(3rem,6vw,5rem)', lineHeight: 0, overflow: 'hidden' }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 80 }}><path d="M0,0 L1440,0 L1440,80 L0,80 Z" fill="#faf8ff" /><path d="M0,40 C200,80 450,8 720,40 C990,72 1200,12 1440,44 L1440,80 L0,80 Z" fill="#0d1b3e" /></svg>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: '#0d1b3e', position: 'relative', zIndex: 4, padding: 'clamp(1rem,4vw,3rem) clamp(1.25rem,5vw,3rem) clamp(3rem,7vw,5.5rem)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Reveal direction="up" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <SectionLabel light>Transparent Pricing</SectionLabel>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', fontWeight: 900, lineHeight: 1.08, color: '#fff', letterSpacing: '-0.03em' }}>Simple, honest pricing.<br className="hidden sm:block" /> No surprises.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(1rem,2vw,1.5rem)', alignItems: 'stretch' }}>
            {PRICING.map((plan, i) => (
              <Reveal key={i} direction="up" delay={0.10 + i * 0.15} style={{ height: '100%' }}>
                <motion.div
                  style={{
                    padding: 'clamp(2rem,3vw,2.6rem)', borderRadius: 28,
                    background: plan.highlight ? 'linear-gradient(135deg,rgba(98,63,222,0.46),rgba(139,119,255,0.28))' : 'rgba(255,255,255,0.04)',
                    border: plan.highlight ? '1.5px solid rgba(139,119,255,0.65)' : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: plan.highlight ? '0 0 60px rgba(98,63,222,0.40)' : 'none',
                    position: 'relative',
                    height: '100%', display: 'flex', flexDirection: 'column'
                  }}
                  initial={plan.highlight ? { y: -8 } : { y: 0 }}
                  whileHover={{
                    y: plan.highlight ? -16 : -8,
                    boxShadow: plan.highlight ? '0 20px 80px rgba(98,63,222,0.50)' : '0 15px 40px rgba(0,0,0,0.25)',
                    background: plan.highlight ? 'linear-gradient(135deg,rgba(98,63,222,0.52),rgba(139,119,255,0.34))' : 'rgba(255,255,255,0.07)',
                  }}
                  transition={{ duration: 0.3, ease: EQ }}
                >
                  {plan.highlight && <div style={{ position: 'absolute', top: 18, right: 18, padding: '5px 14px', borderRadius: 999, fontSize: 10, fontWeight: 900, background: 'linear-gradient(135deg,#7c3aed,#c4b5fd)', color: '#fff' }}>⭐ Popular</div>}
                  <div style={{ fontSize: 11, fontWeight: 800, color: plan.highlight ? '#c4b5fd' : 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: 10 }}>{plan.name}</div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(2.2rem,4vw,3rem)', fontWeight: 900, color: '#fff', marginBottom: 12 }}>{plan.price}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.68, color: 'rgba(255,255,255,0.68)', marginBottom: 20 }}>{plan.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28, flexGrow: 1 }}>
                    {plan.features.map((f, fi) => (
                      <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.92)' }}>
                        <CheckCircle style={{ width: 16, height: 16, color: plan.highlight ? '#c4b5fd' : 'rgba(255,255,255,0.40)' }} strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} website package.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px',
                      borderRadius: 14, background: plan.highlight ? 'linear-gradient(135deg,#5b21b6,#8b77ff)' : 'rgba(255,255,255,0.08)',
                      color: '#fff', fontWeight: 800, textDecoration: 'none'
                    }}
                    whileHover={{ scale: 1.02, background: plan.highlight ? 'linear-gradient(135deg,#6d28d9,#9b7dff)' : 'rgba(255,255,255,0.12)' }}
                  >
                    {plan.cta} <ArrowRight style={{ width: 15, height: 15 }} />
                  </motion.a>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={0.28} style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>All plans include hosting setup assistance and post-launch support.</p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: '#faf8ff', position: 'relative', zIndex: 5, padding: 'clamp(3rem,7vw,5.5rem) clamp(1.25rem,5vw,3rem)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal direction="up" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <SectionLabel>What You Get</SectionLabel>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', fontWeight: 900, lineHeight: 1.08, color: '#0d1b3e' }}>Everything included.<br className="hidden sm:block" /> Nothing extra.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 'clamp(1rem,2vw,1.4rem)' }}>
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={i} direction="up" delay={i * 0.09}>
                  <motion.div
                    style={{
                      padding: 'clamp(1.5rem,2.5vw,2rem)', borderRadius: 24, background: '#ffffff',
                      border: '1px solid rgba(98,63,222,0.07)', boxShadow: '0 4px 20px rgba(98,63,222,0.04)',
                      height: '100%'
                    }}
                    whileHover={{ y: -5, boxShadow: '0 12px 28px rgba(98,63,222,0.08)', borderColor: 'rgba(98,63,222,0.15)' }}
                    transition={{ duration: 0.25, ease: EQ }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 13, marginBottom: 16, background: 'rgba(98,63,222,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon style={{ width: 20, height: 20, color: '#623fde' }} strokeWidth={2.2} /></div>
                    <h3 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: '1.05rem', fontWeight: 800, color: '#0d1b3e', marginBottom: 8 }}>{b.title}</h3>
                    <p style={{ fontSize: 13, lineHeight: 1.70, color: 'rgba(33,49,86,0.56)', fontWeight: 500 }}>{b.desc}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#0d1b3e', position: 'relative', zIndex: 4, padding: 'clamp(3rem,7vw,5.5rem) clamp(1.25rem,5vw,3rem)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <Reveal direction="up" style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
            <SectionLabel light>Client Stories</SectionLabel>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', fontWeight: 900, lineHeight: 1.08, color: '#fff' }}>Real businesses,<br className="hidden sm:block" /> real results.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(1rem,2vw,1.5rem)' }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} direction="up" delay={i * 0.14}>
                <motion.div
                  style={{
                    padding: 'clamp(1.8rem,2.8vw,2.4rem)', borderRadius: 26, height: '100%',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)'
                  }}
                  whileHover={{ y: -6, background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.15)' }}
                  transition={{ duration: 0.3, ease: EQ }}
                >
                  <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                    {Array.from({ length: t.rating }).map((_, si) => <Star key={si} style={{ width: 14, height: 14, color: '#f59e0b', fill: '#f59e0b' }} />)}
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.72, color: 'rgba(255,255,255,0.72)', fontWeight: 500, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(98,63,222,0.40),rgba(139,119,255,0.24))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 900, color: '#c4b5fd' }}>{t.name.charAt(0)}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>{t.business}</div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: '#f4f0ff', padding: 'clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,3rem)', position: 'relative', zIndex: 5 }}>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EQ }}>
          <div style={{ position: 'relative', borderRadius: 40, overflow: 'hidden', background: 'linear-gradient(135deg,#3b22b0 0%,#5b3cca 45%,#006880 100%)', padding: 'clamp(3rem,7vw,5.5rem)', textAlign: 'center', boxShadow: '0 32px 80px rgba(98,63,222,0.28)' }}>
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' }}>
              <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.48)', marginBottom: 20 }}>Ready to grow online?</p>
              <h2 style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(2rem,5.5vw,4rem)', fontWeight: 900, lineHeight: 1.06, color: '#fff', marginBottom: 'clamp(0.8rem,2vw,1.4rem)' }}>Get Your Website Today.<br /> Let's Build Something Great.</h2>
              <p style={{ fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', color: 'rgba(255,255,255,0.62)', lineHeight: 1.74, fontWeight: 500, maxWidth: 520, margin: '0 auto clamp(2rem,3.5vw,2.8rem)' }}>Starting at just ₹9,999 — delivered in 3–5 days. Call or WhatsApp us now and get a <strong style={{ color: '#c4b5fd' }}>free consultation</strong>.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
                <motion.a
                  href={`tel:${PHONE_NUMBER}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 38px',
                    borderRadius: 999, background: '#fff', color: '#3b22b0', fontWeight: 900,
                    textDecoration: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={{
                    rest: { scale: 1, y: 0, background: '#fff' },
                    hover: { scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.2)', background: '#f8f6ff' }
                  }}
                  transition={{ duration: 0.2, ease: EQ }}
                >
                  <motion.div variants={{ rest: { scale: 1, x: 0 }, hover: { scale: 1.1, x: -2 } }} transition={{ duration: 0.2 }}>
                    <Phone style={{ width: 17, height: 17 }} strokeWidth={2.5} />
                  </motion.div>
                  Call Now
                </motion.a>
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 38px',
                    borderRadius: 999, background: 'linear-gradient(135deg,#128c7e,#25d366)',
                    color: '#fff', fontWeight: 900, textDecoration: 'none',
                    boxShadow: '0 10px 30px rgba(37,211,102,0.2)'
                  }}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={{
                    rest: { scale: 1, y: 0 },
                    hover: { scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(37,211,102,0.4)' }
                  }}
                  transition={{ duration: 0.2, ease: EQ }}
                >
                  <motion.div variants={{ rest: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: 8 } }} transition={{ duration: 0.2 }}>
                    <MessageCircle style={{ width: 17, height: 17 }} strokeWidth={2.5} />
                  </motion.div>
                  WhatsApp Us
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#f2f3ff', padding: 'clamp(2rem,4vw,3rem) clamp(1.25rem,5vw,3rem)', textAlign: 'center', borderTop: '1px solid rgba(33,49,86,0.08)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontWeight: 900, fontSize: '1.2rem', color: '#623fde', marginBottom: 10 }}>StackMinds Web Solutions</div>
          <p style={{ fontSize: 13, color: 'rgba(33,49,86,0.55)', fontWeight: 500, lineHeight: 1.9 }}>
            Professional website development for local businesses in Vasai-Virar.<br />
            📞 <motion.a href={`tel:${PHONE_NUMBER}`} style={{ color: '#623fde', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }} whileHover={{ scale: 1.05, color: '#4a2fc0' }}>{PHONE_NUMBER}</motion.a> · Or email us at <motion.a href="mailto:info@stackminds.in" style={{ color: '#623fde', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }} whileHover={{ scale: 1.05, color: '#4a2fc0' }}>info@stackminds.in</motion.a>
          </p>
          <p style={{ fontSize: 12, color: 'rgba(33,49,86,0.38)', marginTop: 16 }}>© {new Date().getFullYear()} StackMinds Web Solutions. All rights reserved.</p>
        </div>
      </footer>

      <StickyMobileBar />
    </div>
  );
}
