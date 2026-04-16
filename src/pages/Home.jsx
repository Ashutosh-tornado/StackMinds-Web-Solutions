import { Link } from 'react-router-dom';
import { useRef, useEffect, useState, useCallback } from 'react';
import {
  motion, useMotionValue, useSpring, useTransform,
  useScroll, useInView, AnimatePresence,
} from 'framer-motion';
import {
  ArrowRight, CheckCircle, Headset, Lightbulb, ShieldCheck,
  MessageSquare, Terminal, Layout, ShoppingCart, Share2,
  MousePointerClick, Search, PenTool, Palette, ArrowUpRight,
} from 'lucide-react';

/* ─── Easing presets ──────────────────────────────────────────────────────── */
const E  = [0.16, 1, 0.30, 1];   // expo out
const EQ = [0.25, 1, 0.50, 1];   // quart out
const EC = [0.00, 0.55, 0.45, 1]; // circ out

/* ─── Data ────────────────────────────────────────────────────────────────── */
const TICKER = [
  'Web Development','·','SEO & Growth','·','Digital Strategy','·',
  'Social Media','·','Google Ads','·','Creative Design','·',
  'Ecommerce','·','Content Creation','·',
];
const WORDS   = ['Dominant.','Unstoppable.','Legendary.','Inevitable.'];
const PROCESS = [
  { n:'01', title:'Discover',   body:'We immerse ourselves in your business — goals, audience, and competitive landscape.' },
  { n:'02', title:'Strategise', body:'Every deliverable starts with a data-informed plan, not templates or guesswork.' },
  { n:'03', title:'Create',     body:'Our craft team designs and engineers at the intersection of beauty and performance.' },
  { n:'04', title:'Scale',      body:'We stay with you post-launch, optimising results and compounding your growth.' },
];
const SERVICES = [
  { title:'Website Development', desc:'Custom coded, high-performance websites built for absolute speed.',           icon:Terminal,        link:'/services/web-development',        span:'col',  accent:'#623fde' },
  { title:'WordPress Websites',  desc:'Dynamic, manageable, SEO-friendly WordPress platforms.',                      icon:Layout,          link:'/services/wordpress',              span:'col',  accent:'#7c5ce8' },
  { title:'Ecommerce',           desc:'High-converting stores that turn visitors into loyal customers.',             icon:ShoppingCart,    link:'/services/ecommerce',              span:'wide', accent:'#006880', featured:true },
  { title:'Social Media',        desc:'Strategic presence that sparks genuine engagement.',                          icon:Share2,          link:'/services/social-media-marketing', span:'col',  accent:'#623fde' },
  { title:'Google Ads / PPC',    desc:'Intent-driven campaigns that deliver measurable, compounding results.',       icon:MousePointerClick, link:'/services/google-ads',           span:'col',  accent:'#7c5ce8' },
  { title:'SEO',                 desc:'Own your market with long-term organic visibility.',                          icon:Search,          link:'/services/seo',                    span:'col',  accent:'#623fde' },
  { title:'Content Writing',     desc:'Persuasive copy crafted for your audience, not search bots.',                icon:PenTool,         link:'/services/content-writing',        span:'col',  accent:'#7c5ce8' },
  { title:'Creative Design',     desc:'Visual identities built to make industry leaders recognisable.',              icon:Palette,         link:'/services/creative-designing',     span:'wide', accent:'#006880', featured:true },
];
const VALUES = [
  { n:'01', icon:Headset,       title:'Client-First',  body:'Every decision we make starts and ends with your goals.' },
  { n:'02', icon:Lightbulb,     title:'Innovation',    body:'We build modern, future-ready solutions that push boundaries.' },
  { n:'03', icon:ShieldCheck,   title:'Excellence',    body:'High-quality execution and performance in everything we ship.' },
  { n:'04', icon:MessageSquare, title:'Transparency',  body:'Clear, consistent communication — no surprises, ever.' },
];

/* ════════════════════════════════════════════════════════════════════════════
   REUSABLE: scroll-reveal with directional blur entry
   ════════════════════════════════════════════════════════════════════════════ */
function Reveal({ children, direction='up', delay=0, className='', style={} }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-72px' });
  const map    = {
    up:    { opacity:0, y:56,  filter:'blur(5px)' },
    left:  { opacity:0, x:-56, filter:'blur(5px)' },
    right: { opacity:0, x: 56, filter:'blur(5px)' },
    none:  { opacity:0,        filter:'blur(5px)' },
  };
  return (
    <motion.div
      ref={ref}
      initial={map[direction]}
      animate={inView ? { opacity:1, y:0, x:0, filter:'blur(0px)' } : map[direction]}
      transition={{ duration:0.82, ease:E, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   REUSABLE: SVG Wave Divider — creates organic curve between sections
   flip: reverses the wave direction
   ════════════════════════════════════════════════════════════════════════════ */
function WaveDivider({ topColor='#faf8ff', bottomColor='#0d1b3e', flip=false, height=80 }) {
  return (
    <div style={{
      position:'relative', zIndex:5, marginTop:-2, marginBottom:-2,
      lineHeight:0, overflow:'hidden',
      transform: flip ? 'scaleY(-1)' : 'none',
    }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display:'block', width:'100%', height }} >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
        <rect x="0" y="0" width="1440" height="41" fill={topColor} />
      </svg>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   REUSABLE: Gradient Fade Divider — blends two sections with a colour wash
   ════════════════════════════════════════════════════════════════════════════ */
function FadeDivider({ from, to, height=80 }) {
  return (
    <div style={{
      height, background:`linear-gradient(to bottom, ${from}, ${to})`,
      position:'relative', zIndex:5, marginTop:-1, marginBottom:-1,
    }} />
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   REUSABLE: Orbit Ring — hero signature element
   mobile=true → simpler, higher-contrast version for small screens
   ════════════════════════════════════════════════════════════════════════════ */
function OrbitRing({ size=420, className='', mobile=false }) {
  const ringOpacity  = mobile ? 0.45 : 0.22;   // increased from 0.38/0.18
  const ring2Opacity = mobile ? 0.35 : 0.18;   // increased from 0.28/0.14
  const ring3Opacity = mobile ? 0.00 : 0.10;   // increased from 0.08
  const glowBlur     = mobile ? 0    : 14;      // reduced blur from 18
  const glowAlpha    = mobile ? 0.22 : 0.26;   // increased from 0.18/0.22
  const dot1Size     = mobile ? 9    : 8;
  const dot1Glow     = mobile ? 'rgba(139,119,255,0.85)' : 'rgba(139,119,255,0.90)';
  const dot2Size     = mobile ? 7    : 6;
  const dot2Glow     = mobile ? 'rgba(0,180,200,0.85)' : 'rgba(0,180,200,0.90)';
  return (
    <div className={className} style={{ position:'relative', width:size, height:size, pointerEvents:'none' }}>
      {/* Core glow */}
      <div style={{
        position:'absolute', inset:'30%', borderRadius:'50%',
        background:`radial-gradient(circle,rgba(98,63,222,${glowAlpha}) 0%,rgba(139,119,255,0.08) 60%,transparent 100%)`,
        filter: glowBlur > 0 ? `blur(${glowBlur}px)` : 'none',
      }} />
      {/* Ring 1 — slow clockwise */}
      <motion.div
        animate={{ rotate:360 }}
        transition={{ duration:28, repeat:Infinity, ease:'linear' }}
        style={{ position:'absolute', inset:0, borderRadius:'50%',
          border:`1.5px solid rgba(98,63,222,${ringOpacity})`,
          boxShadow: mobile ? 'none' : '0 0 28px rgba(98,63,222,0.08) inset',
        }}
      >
        <div style={{
          position:'absolute', top:-Math.ceil(dot1Size/2), left:'50%', transform:'translateX(-50%)',
          width:dot1Size, height:dot1Size, borderRadius:'50%',
          background:dot1Glow,
          boxShadow:`0 0 ${mobile?16:12}px ${mobile?6:4}px rgba(139,119,255,${mobile?0.70:0.50})`,
        }} />
      </motion.div>
      {/* Ring 2 — faster counter-clockwise */}
      <motion.div
        animate={{ rotate:-360 }}
        transition={{ duration:18, repeat:Infinity, ease:'linear' }}
        style={{ position:'absolute', inset:'14%', borderRadius:'50%',
          border:`1.5px solid rgba(0,104,128,${ring2Opacity})`,
        }}
      >
        <div style={{
          position:'absolute', bottom:-Math.ceil(dot2Size/2), right:'18%',
          width:dot2Size, height:dot2Size, borderRadius:'50%',
          background:dot2Glow,
          boxShadow:`0 0 ${mobile?14:10}px ${mobile?5:3}px rgba(0,180,200,${mobile?0.65:0.45})`,
        }} />
      </motion.div>
      {/* Ring 3 — large, very slow (desktop only) */}
      {!mobile && (
        <motion.div
          animate={{ rotate:360 }}
          transition={{ duration:48, repeat:Infinity, ease:'linear' }}
          style={{ position:'absolute', inset:'-12%', borderRadius:'50%',
            border:`1px dashed rgba(98,63,222,${ring3Opacity})`,
          }}
        />
      )}
      {/* Pulse ping */}
      <motion.div
        animate={{ scale:[1,1.6], opacity:[mobile?0.45:0.30, 0] }}
        transition={{ duration:mobile?2.0:2.4, repeat:Infinity, ease:'easeOut' }}
        style={{ position:'absolute', inset:'38%', borderRadius:'50%',
          border:`${mobile?2:1.5}px solid rgba(98,63,222,${mobile?0.55:0.45})`,
        }}
      />
      {/* Second slower pulse (mobile only for extra presence) */}
      {mobile && (
        <motion.div
          animate={{ scale:[1,1.9], opacity:[0.25, 0] }}
          transition={{ duration:3.2, repeat:Infinity, ease:'easeOut', delay:1.0 }}
          style={{ position:'absolute', inset:'38%', borderRadius:'50%',
            border:'1px solid rgba(98,63,222,0.35)',
          }}
        />
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef    = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  /* ── Mouse spotlight ── */
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const spMX   = useSpring(mouseX, { stiffness:55, damping:20 });
  const spMY   = useSpring(mouseY, { stiffness:55, damping:20 });

  /* ── Hero parallax layers ── */
  const bgY1  = useTransform(scrollYProgress, [0,1], ['0%','28%']);
  const bgY2  = useTransform(scrollYProgress, [0,1], ['0%','52%']);
  const bgY3  = useTransform(scrollYProgress, [0,1], ['0%','78%']);
  const hOp   = useTransform(scrollYProgress, [0,0.70], [1, 0]);
  const hSc   = useTransform(scrollYProgress, [0,0.70], [1, 0.92]);
  const hY    = useTransform(scrollYProgress, [0,0.70], [0, -50]);
  const orbitY = useTransform(scrollYProgress, [0,1], ['0%','-20%']);
  const ghostL = useTransform(scrollYProgress, [0,1], ['0%','-18%']);
  const ghostR = useTransform(scrollYProgress, [0,1], ['0%', '18%']);

  /* ── Rotating word ── */
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i+1) % WORDS.length), 2700);
    return () => clearInterval(t);
  }, []);

  /* ── Mouse ── */
  const onMouseMove  = useCallback(e => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  }, [mouseX, mouseY]);
  const onMouseLeave = useCallback(() => { mouseX.set(-9999); mouseY.set(-9999); }, [mouseX, mouseY]);

  /* ── Stagger variants ── */
  const container = { hidden:{}, show:{ transition:{ staggerChildren:0.12, delayChildren:0.20 } } };
  const fromC = { hidden:{ opacity:0, scale:0.90, filter:'blur(6px)' }, show:{ opacity:1, scale:1, filter:'blur(0px)', transition:{ duration:0.88, ease:EQ } } };
  const fromL = { hidden:{ opacity:0, x:-48, filter:'blur(4px)' }, show:{ opacity:1, x:0, filter:'blur(0px)', transition:{ duration:0.78, ease:E } } };
  const fromR = { hidden:{ opacity:0, x: 48, filter:'blur(4px)' }, show:{ opacity:1, x:0, filter:'blur(0px)', transition:{ duration:0.78, ease:E } } };
  const fromB = { hidden:{ opacity:0, y: 40, filter:'blur(3px)' }, show:{ opacity:1, y:0, filter:'blur(0px)', transition:{ duration:0.70, ease:E } } };

  return (
    <div style={{ overflowX:'hidden' }}>

      {/* ════════════════════════════════════════════════════════════════════
           ACT I — HERO
          ════════════════════════════════════════════════════════════════════ */}
      <motion.section
        ref={sectionRef}
        style={{ opacity:hOp, scale:hSc, y:hY, willChange:'transform,opacity', position:'relative', overflow:'hidden' }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div
          ref={heroRef}
          className="flex flex-col relative"
          style={{
            minHeight:'auto',
            paddingTop:'clamp(5rem,12vw,9rem)',
            paddingBottom:'clamp(3rem,8vw,7rem)',
            background:'linear-gradient(160deg,#f4f0ff 0%,#e8f4f8 40%,#f0eeff 80%,#faf8ff 100%)',
          }}
        >
          {/* ── Ambient drifting light beams ── */}
          <motion.div style={{ position:'absolute',inset:0,zIndex:0,pointerEvents:'none',y:bgY1 }}>
            <motion.div
              animate={{ x:[0,30,0], y:[0,-20,0], opacity:[0.65,0.90,0.65] }}
              transition={{ duration:14, repeat:Infinity, ease:'easeInOut' }}
              style={{ position:'absolute',top:'-10%',right:'0%',
                width:'min(620px,70vw)',height:'min(620px,70vw)', borderRadius:'50%',
                background:'radial-gradient(ellipse at 40% 35%,rgba(98,63,222,0.15) 0%,rgba(139,119,255,0.08) 50%,transparent 70%)',
                filter:'blur(2px)', willChange:'transform,opacity' }}
            />
            <motion.div
              animate={{ x:[0,-20,0], y:[0,25,0], opacity:[0.50,0.75,0.50] }}
              transition={{ duration:20, repeat:Infinity, ease:'easeInOut', delay:5 }}
              style={{ position:'absolute',bottom:'-15%',left:'-5%',
                width:'min(520px,60vw)',height:'min(520px,60vw)', borderRadius:'50%',
                background:'radial-gradient(ellipse at 60% 65%,rgba(0,104,128,0.12) 0%,rgba(0,180,200,0.08) 50%,transparent 70%)',
                filter:'blur(2px)', willChange:'transform,opacity' }}
            />
            {/* Drifting light beam 1 */}
            <motion.div
              animate={{ opacity:[0,0.12,0], x:['-15%','15%','-15%'] }}
              transition={{ duration:12, repeat:Infinity, ease:'easeInOut', delay:2 }}
              style={{ position:'absolute',top:'10%',left:'20%',
                width:'2px',height:'60%',
                background:'linear-gradient(to bottom,transparent,rgba(98,63,222,0.6),transparent)',
                filter:'blur(1px)', willChange:'transform,opacity' }}
            />
            <motion.div
              animate={{ opacity:[0,0.10,0], x:['5%','-10%','5%'] }}
              transition={{ duration:16, repeat:Infinity, ease:'easeInOut', delay:7 }}
              style={{ position:'absolute',top:'20%',right:'30%',
                width:'1px',height:'45%',
                background:'linear-gradient(to bottom,transparent,rgba(0,180,200,0.6),transparent)',
                filter:'blur(1px)', willChange:'transform,opacity' }}
            />
          </motion.div>

          {/* ── Orbit ring — MOBILE: ambient background layer, below all content ── */}
          <div
            className="lg:hidden"
            style={{
              position:'absolute',
              top:'58%',          /* slightly below headline, above CTA area */
              left:'50%',
              transform:'translate(-50%, -50%)',
              zIndex:1,           /* behind everything: text, cards, beams */
              pointerEvents:'none',
              opacity:0.32,       /* increased from 0.22 */
              filter:'blur(1.5px)', /* reduced blur for better mobile definition */
              width:'min(260px, 68vw)',
              height:'min(260px, 68vw)',
              willChange:'transform',
            }}
          >
            <OrbitRing size={260} mobile={true} />
          </div>

          {/* ── Orbit ring — DESKTOP: positioned right, full detail ── */}
          <motion.div
            className="hidden lg:block"
            style={{ position:'absolute', top:'50%', right:'clamp(4%,8vw,12%)',
              transform:'translateY(-50%)', zIndex:2, y:orbitY, willChange:'transform' }}
          >
            <OrbitRing size={460} />
          </motion.div>

          {/* ── Layer 1 desktop glass cards ── */}
          <motion.div style={{ position:'absolute',inset:0,y:bgY2,zIndex:3,pointerEvents:'none',willChange:'transform' }}>
            <div className="hidden lg:block" style={{ position:'absolute',inset:0,pointerEvents:'none' }}>
              {/* Revenue card */}
              <motion.div
                initial={{ opacity:0,x:60 }} animate={{ opacity:1,x:0 }}
                transition={{ delay:1.2,duration:1.0,ease:E }}
                style={{ position:'absolute',top:'18%',right:'4.5%',
                  width:200,background:'rgba(255,255,255,0.52)',
                  backdropFilter:'blur(24px)',WebkitBackdropFilter:'blur(24px)',
                  borderRadius:20,border:'1px solid rgba(255,255,255,0.72)',
                  boxShadow:'0 16px 48px rgba(98,63,222,0.10)',
                  padding:'16px 20px' }}
              >
                <div style={{ fontSize:9,fontWeight:800,letterSpacing:'.14em',color:'#4f5e86',textTransform:'uppercase',marginBottom:5 }}>Avg. Client Growth</div>
                <div style={{ fontSize:26,fontWeight:900,color:'#213156',letterSpacing:'-1px',lineHeight:1 }}>Compounding</div>
                <motion.div style={{ height:2,borderRadius:4,marginTop:8,background:'linear-gradient(90deg,#623fde,#8b77ff)',width:0 }}
                  animate={{ width:'100%' }} transition={{ delay:1.7,duration:1.1,ease:EC }} />
              </motion.div>
              {/* Strategy card */}
              <motion.div
                initial={{ opacity:0,x:-60 }} animate={{ opacity:1,x:0 }}
                transition={{ delay:1.4,duration:1.0,ease:E }}
                style={{ position:'absolute',bottom:'20%',left:'3%',
                  width:185,background:'rgba(255,255,255,0.45)',
                  backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',
                  borderRadius:18,border:'1px solid rgba(255,255,255,0.65)',
                  boxShadow:'0 12px 40px rgba(0,104,128,0.08)',
                  padding:'14px 18px' }}
              >
                <div style={{ fontSize:9,fontWeight:800,letterSpacing:'.14em',color:'#4f5e86',textTransform:'uppercase',marginBottom:5 }}>Approach</div>
                <div style={{ fontSize:16,fontWeight:900,color:'#006880',letterSpacing:'-0.4px',lineHeight:1.2 }}>Strategy First,<br/>Always</div>
              </motion.div>
              {/* Floating orbs */}
              <motion.div animate={{ y:[0,-16,0],opacity:[0.35,0.60,0.35] }} transition={{ duration:6,repeat:Infinity,ease:'easeInOut',delay:2 }}
                style={{ position:'absolute',top:'42%',left:'8%',width:56,height:56,borderRadius:'50%',
                  background:'linear-gradient(135deg,rgba(139,119,255,0.40),rgba(98,63,222,0.18))',
                  boxShadow:'0 0 28px rgba(98,63,222,0.22)' }} />
              <motion.div animate={{ y:[0,12,0],opacity:[0.25,0.48,0.25] }} transition={{ duration:8,repeat:Infinity,ease:'easeInOut',delay:1 }}
                style={{ position:'absolute',bottom:'30%',right:'9%',width:36,height:36,borderRadius:'50%',
                  background:'linear-gradient(135deg,rgba(0,200,180,0.32),rgba(0,104,128,0.18))',
                  boxShadow:'0 0 18px rgba(0,104,128,0.20)' }} />
            </div>
          </motion.div>

          {/* ── Mouse spotlight ── */}
          <motion.div style={{
            position:'absolute',inset:0,zIndex:4,pointerEvents:'none',
            background: useTransform([spMX,spMY],([x,y]) =>
              `radial-gradient(500px circle at ${x}px ${y}px, rgba(98,63,222,0.05) 0%, transparent 65%)`),
            willChange:'background',
          }} />

          {/* ── Ghost type desktop only ── */}
          <div className="hidden lg:block">
            <motion.div style={{ position:'absolute',inset:0,zIndex:2,pointerEvents:'none',y:bgY3,willChange:'transform' }}>
              <motion.div style={{ x:ghostL }} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.6,duration:1 }}>
                <span style={{ position:'absolute',top:'20%',left:'-3%',fontFamily:'"Plus Jakarta Sans",sans-serif',
                  fontWeight:900,fontSize:'clamp(4rem,10vw,11rem)',color:'transparent',letterSpacing:'-0.06em',
                  WebkitTextStroke:'1px rgba(98,63,222,0.06)',userSelect:'none',whiteSpace:'nowrap' }}>DIGITAL</span>
              </motion.div>
              <motion.div style={{ x:ghostR }} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.9,duration:1 }}>
                <span style={{ position:'absolute',bottom:'16%',right:'-3%',fontFamily:'"Plus Jakarta Sans",sans-serif',
                  fontWeight:900,fontSize:'clamp(4rem,10vw,11rem)',color:'transparent',letterSpacing:'-0.06em',
                  WebkitTextStroke:'1px rgba(0,104,128,0.06)',userSelect:'none',whiteSpace:'nowrap' }}>GROWTH</span>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Hero copy ── */}
          <div style={{ position:'relative',zIndex:10,flex:1,display:'flex',flexDirection:'column',justifyContent:'center' }}>
            <motion.div
              variants={container} initial="hidden" animate="show"
              style={{ textAlign:'center',padding:'0 clamp(1.2rem,5vw,4rem)' }}
            >
              {/* Badge */}
              <motion.div variants={fromC} style={{ marginBottom:'clamp(1rem,2.8vw,2rem)' }}>
                <span style={{ display:'inline-flex',alignItems:'center',gap:9,padding:'7px 18px',borderRadius:999,
                  background:'rgba(98,63,222,0.07)',border:'1px solid rgba(98,63,222,0.15)',
                  backdropFilter:'blur(12px)',fontSize:10,fontWeight:800,
                  letterSpacing:'.14em',textTransform:'uppercase',color:'#5b3cca' }}>
                  <motion.span animate={{ scale:[1,1.4,1],opacity:[0.6,1,0.6] }} transition={{ duration:2,repeat:Infinity }}
                    style={{ width:6,height:6,borderRadius:'50%',background:'#623fde',display:'block' }} />
                  StackMinds Web Solutions
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fromC} style={{ marginBottom:'clamp(1rem,2.5vw,2rem)' }}>
                <h1 className="font-headline font-extrabold tracking-tighter"
                  style={{ fontSize:'clamp(2.5rem,8.5vw,8rem)',lineHeight:1.06,color:'#0d1b3e',letterSpacing:'-0.04em' }}>
                  We make brands<br />
                  <span style={{ background:'linear-gradient(135deg,#623fde 0%,#9b7dff 40%,#006880 100%)',
                    WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',
                    display:'inline-block',minHeight:'1.06em',overflow:'visible',verticalAlign:'bottom' }}>
                    <AnimatePresence mode="wait">
                      <motion.span key={wordIdx}
                        initial={{ opacity:0,y:28,filter:'blur(8px)' }}
                        animate={{ opacity:1,y:0,filter:'blur(0px)' }}
                        exit={{ opacity:0,y:-28,filter:'blur(8px)' }}
                        transition={{ duration:0.52,ease:EQ }}
                        style={{ display:'inline-block' }}>
                        {WORDS[wordIdx]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h1>
              </motion.div>

              {/* Sub-row */}
              <div className="flex flex-col items-center gap-5 sm:gap-6 md:flex-row md:flex-wrap md:items-start md:justify-center">
                <motion.p variants={fromL}
                  className="text-center md:text-left"
                  style={{ maxWidth:340,fontSize:'clamp(0.93rem,1.5vw,1.04rem)',
                    lineHeight:1.76,color:'rgba(33,49,86,0.58)',fontWeight:500,flex:'1 1 260px' }}>
                  We engineer high-performance digital ecosystems that compound growth — fusing creative strategy with ruthless execution.
                </motion.p>

                <motion.div variants={fromB}
                  style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:12,flex:'0 0 auto' }}>
                  <Link to="/contact" className="group"
                    style={{ display:'inline-flex',alignItems:'center',gap:10,padding:'14px 34px',
                      borderRadius:999,background:'linear-gradient(135deg,#4a2fc0,#7c5ce8)',color:'#fff',
                      fontFamily:'"Plus Jakarta Sans",sans-serif',fontWeight:800,fontSize:'1rem',
                      boxShadow:'0 10px 36px rgba(98,63,222,0.34)',
                      transition:'transform 0.22s ease,box-shadow 0.22s ease',
                      position:'relative',overflow:'hidden',willChange:'transform',textDecoration:'none' }}
                    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px) scale(1.03)';e.currentTarget.style.boxShadow='0 18px 48px rgba(98,63,222,0.48)';}}
                    onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 10px 36px rgba(98,63,222,0.34)';}}>
                    <span style={{ position:'absolute',inset:0,background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)',
                      transform:'translateX(-115%) skewX(-14deg)',transition:'transform 620ms ease' }}
                      className="group-hover:[transform:translateX(115%)_skewX(-14deg)]" />
                    Start Your Project
                    <ArrowRight style={{ width:17,height:17 }} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                  <Link to="/portfolio"
                    style={{ fontSize:'0.84rem',fontWeight:700,letterSpacing:'0.04em',color:'rgba(98,63,222,0.60)',
                      textDecoration:'none',borderBottom:'1px solid rgba(98,63,222,0.20)',paddingBottom:2,
                      transition:'color 0.2s ease,border-color 0.2s ease' }}
                    onMouseEnter={e=>{e.currentTarget.style.color='#623fde';e.currentTarget.style.borderColor='rgba(98,63,222,0.7)';}}
                    onMouseLeave={e=>{e.currentTarget.style.color='rgba(98,63,222,0.60)';e.currentTarget.style.borderColor='rgba(98,63,222,0.20)';}}>
                    View case studies
                  </Link>
                </motion.div>

                <motion.div variants={fromR}
                  className="hidden md:flex"
                  style={{ maxWidth:240,textAlign:'right',flex:'1 1 200px',
                    flexDirection:'column',alignItems:'flex-end',gap:14 }}>
                  {[
                    { n:'Strategy',    l:'Before every pixel' },
                    { n:'Performance', l:'Engineered, not assumed' },
                  ].map((s,i) => (
                    <motion.div key={i}
                      initial={{ opacity:0,x:28 }} animate={{ opacity:1,x:0 }}
                      transition={{ delay:1.1+i*0.18,duration:0.7,ease:E }}
                      style={{ textAlign:'right' }}>
                      <div style={{ fontSize:'clamp(1rem,2vw,1.35rem)',fontWeight:900,color:'#0d1b3e',
                        lineHeight:1,letterSpacing:'-0.02em',fontFamily:'"Plus Jakarta Sans",sans-serif' }}>{s.n}</div>
                      <div style={{ fontSize:9,fontWeight:700,color:'rgba(33,49,86,0.40)',letterSpacing:'.09em',
                        textTransform:'uppercase',marginTop:3 }}>{s.l}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── Marquee ticker ── */}
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:2.1,duration:0.8,ease:E }}
            style={{ position:'relative',zIndex:11,marginTop:'clamp(2.5rem,5vw,4.5rem)',
              borderTop:'1px solid rgba(98,63,222,0.12)',overflow:'hidden',paddingTop:16 }}>
            <motion.div animate={{ x:['0%','-50%'] }} transition={{ duration:26,repeat:Infinity,ease:'linear' }}
              style={{ display:'flex',gap:'clamp(2rem,3.5vw,3rem)',whiteSpace:'nowrap',willChange:'transform' }}>
              {[...TICKER,...TICKER].map((item,i) => (
                <span key={i} style={{ fontSize:10,fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',
                  color:item==='·'?'rgba(98,63,222,0.45)':'rgba(33,49,86,0.48)' }}>{item}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Transition A: Hero → Process (wave on gradient) ── */}
        <div style={{ position:'relative',zIndex:20,marginTop:-2,lineHeight:0,overflow:'hidden' }}>
          {/* Gradient fade to light */}
          <div style={{ height:60,background:'linear-gradient(to bottom,rgba(240,238,255,0),#faf8ff)',marginBottom:-2 }} />
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display:'block',width:'100%',height:60,marginTop:-2 }}>
            <path d="M0,20 C360,60 720,0 1080,30 C1260,45 1380,10 1440,20 L1440,60 L0,60 Z" fill="#faf8ff" />
          </svg>
        </div>
      </motion.section>


      {/* ════════════════════════════════════════════════════════════════════
           ACT II — PROCESS
           Overlaps hero bottom slightly. Staggered horizontal timeline.
          ════════════════════════════════════════════════════════════════════ */}
      <section style={{ background:'#faf8ff', paddingBottom:'clamp(4rem,8vw,7rem)', marginTop:-4, position:'relative', zIndex:10 }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8" style={{ paddingTop:'clamp(3rem,6vw,5rem)' }}>

          <Reveal direction="up" style={{ marginBottom:'clamp(2.5rem,5vw,4rem)' }}>
            <div style={{ display:'flex',alignItems:'flex-end',justifyContent:'space-between',flexWrap:'wrap',gap:16 }}>
              <div>
                <p style={{ fontSize:10,fontWeight:800,letterSpacing:'.15em',textTransform:'uppercase',color:'#623fde',marginBottom:12 }}>How We Work</p>
                <h2 className="font-headline font-extrabold tracking-tighter"
                  style={{ fontSize:'clamp(2rem,4.8vw,3.8rem)',color:'#0d1b3e',lineHeight:1.06,letterSpacing:'-0.03em' }}>
                  A process built<br className="hidden sm:block" /> for results.
                </h2>
              </div>
              <Reveal direction="right" delay={0.2}>
                <Link to="/contact"
                  style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:12,fontWeight:800,
                    color:'#623fde',letterSpacing:'0.02em',textDecoration:'none',
                    borderBottom:'1.5px solid rgba(98,63,222,0.28)',paddingBottom:2,
                    transition:'border-color 0.2s ease' }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='#623fde'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(98,63,222,0.28)'}>
                  Work with us <ArrowRight style={{ width:14,height:14 }} />
                </Link>
              </Reveal>
            </div>
          </Reveal>

          {/* Timeline horizontal desktop / vertical mobile */}
          <div style={{ position:'relative' }}>
            {/* Connector line (desktop) */}
            <div className="hidden md:block" style={{ position:'absolute',top:36,left:'12.5%',right:'12.5%',
              height:1,background:'linear-gradient(90deg,transparent,rgba(98,63,222,0.12) 15%,rgba(98,63,222,0.20) 50%,rgba(98,63,222,0.12) 85%,transparent)' }} />

            <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'clamp(1.5rem,3vw,2rem)' }}>
              {PROCESS.map((step,i) => (
                <Reveal key={i} direction={i%2===0?'up':'up'} delay={i*0.11}>
                  <div className="group"
                    style={{ padding:'clamp(1.6rem,2.8vw,2.4rem)',borderRadius:28,
                      background:'rgba(255,255,255,0.88)',
                      border:'1px solid rgba(98,63,222,0.07)',
                      boxShadow:'0 6px 28px rgba(98,63,222,0.05)',
                      transition:'transform 0.26s ease,box-shadow 0.26s ease',
                      cursor:'default',willChange:'transform',height:'100%',position:'relative' }}
                    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='0 18px 44px rgba(98,63,222,0.10)';}}
                    onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 6px 28px rgba(98,63,222,0.05)';}}>
                    {/* Step number circle */}
                    <div style={{ width:36,height:36,borderRadius:'50%',marginBottom:20,
                      background:'linear-gradient(135deg,rgba(98,63,222,0.10),rgba(98,63,222,0.05))',
                      display:'flex',alignItems:'center',justifyContent:'center',
                      border:'1px solid rgba(98,63,222,0.12)' }}>
                      <span style={{ fontSize:10,fontWeight:900,letterSpacing:'.1em',color:'rgba(98,63,222,0.60)',textTransform:'uppercase' }}>{step.n}</span>
                    </div>
                    <h3 className="font-headline font-extrabold"
                      style={{ fontSize:'clamp(1.4rem,2.2vw,1.8rem)',color:'#0d1b3e',letterSpacing:'-0.02em',marginBottom:10 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize:13,lineHeight:1.72,color:'rgba(33,49,86,0.56)',fontWeight:500 }}>{step.body}</p>
                    <motion.div style={{ height:2,borderRadius:4,marginTop:22,
                      background:'linear-gradient(90deg,#623fde,#8b77ff)',originX:0,scaleX:0 }}
                      whileInView={{ scaleX:1 }} viewport={{ once:true,margin:'-40px' }}
                      transition={{ duration:0.8,delay:0.28+i*0.10,ease:EC }} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── Transition B: Process → Services (organic dark wave) ── */}
        <div style={{ position:'relative',zIndex:5,marginTop:'clamp(3rem,6vw,5.5rem)',lineHeight:0,overflow:'hidden' }}>
          <svg viewBox="0 0 1440 88" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display:'block',width:'100%',height:88 }}>
            <path d="M0,0 L1440,0 L1440,88 L0,88 Z" fill="#faf8ff" />
            <path d="M0,44 C200,88 400,8 600,44 C800,80 1100,12 1440,48 L1440,88 L0,88 Z" fill="#0d1b3e" />
          </svg>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
           ACT III — SERVICES
           Dark navy. Bento-style asymmetric grid.
          ════════════════════════════════════════════════════════════════════ */}
      <section style={{ background:'#0d1b3e',position:'relative',zIndex:8,overflow:'hidden',
        paddingBottom:'clamp(4rem,8vw,7rem)' }}>
        {/* Bg ambient */}
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden' }}>
          <div style={{ position:'absolute',top:'-20%',right:'-12%',width:'55vw',height:'55vw',borderRadius:'50%',
            background:'radial-gradient(ellipse,rgba(98,63,222,0.14) 0%,transparent 68%)' }} />
          <div style={{ position:'absolute',bottom:'-25%',left:'-10%',width:'45vw',height:'45vw',borderRadius:'50%',
            background:'radial-gradient(ellipse,rgba(0,104,128,0.10) 0%,transparent 68%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8" style={{ position:'relative',zIndex:2,
          paddingTop:'clamp(1rem,4vw,3rem)' }}>
          <Reveal direction="up" style={{ marginBottom:'clamp(2rem,4vw,3.5rem)',textAlign:'center' }}>
            <p style={{ fontSize:10,fontWeight:800,letterSpacing:'.15em',textTransform:'uppercase',
              color:'rgba(139,119,255,0.70)',marginBottom:12 }}>What We Build</p>
            <h2 className="font-headline font-extrabold tracking-tighter"
              style={{ fontSize:'clamp(2rem,5vw,3.8rem)',color:'#fff',lineHeight:1.06,letterSpacing:'-0.03em' }}>
              Every service, engineered<br className="hidden sm:block" /> for your market.
            </h2>
          </Reveal>

          {/* Service chips */}
          <Reveal direction="up" delay={0.08}
            style={{ display:'flex',flexWrap:'wrap',justifyContent:'center',gap:9,marginBottom:'clamp(2rem,4vw,3.5rem)' }}>
            {['Web Dev','WordPress','Ecommerce','Social Media','Google Ads','SEO','Content','Design'].map((l,i) => (
              <span key={i} style={{ padding:'6px 16px',borderRadius:999,fontSize:11,fontWeight:700,
                letterSpacing:'.04em',textTransform:'uppercase',
                background:'rgba(255,255,255,0.06)',color:'rgba(255,255,255,0.52)',
                border:'1px solid rgba(255,255,255,0.09)',cursor:'default' }}>{l}</span>
            ))}
          </Reveal>

          {/* Bento grid — wide cards span 2 cols */}
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'clamp(1rem,2vw,1.5rem)' }}>
            {SERVICES.map((svc,i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={i} direction="up" delay={i*0.06}
                  className={svc.span==='wide' ? 'md:col-span-2' : ''}>
                  <Link to={svc.link} style={{ textDecoration:'none',display:'block',height:'100%' }}>
                    <div className="group"
                      style={{ padding:'clamp(1.5rem,2.5vw,2.2rem)',borderRadius:26,height:'100%',
                        background:svc.featured
                          ? 'linear-gradient(135deg,rgba(98,63,222,0.26),rgba(139,119,255,0.16))'
                          : 'rgba(255,255,255,0.04)',
                        border:svc.featured?'1px solid rgba(139,119,255,0.32)':'1px solid rgba(255,255,255,0.07)',
                        boxShadow:svc.featured?'0 0 44px rgba(98,63,222,0.18)':'none',
                        transition:'transform 0.24s ease,background 0.24s ease,box-shadow 0.24s ease',
                        display:'flex',flexDirection:'column',gap:16,willChange:'transform',
                        position:'relative',overflow:'hidden' }}
                      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.background=svc.featured?'rgba(98,63,222,0.36)':'rgba(255,255,255,0.09)';e.currentTarget.style.boxShadow=`0 18px 44px ${svc.accent}28`;}}
                      onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.background=svc.featured?'linear-gradient(135deg,rgba(98,63,222,0.26),rgba(139,119,255,0.16))':'rgba(255,255,255,0.04)';e.currentTarget.style.boxShadow=svc.featured?'0 0 44px rgba(98,63,222,0.18)':'none';}}>
                      {/* Subtle card-level glow on hover */}
                      <div style={{ position:'absolute',top:0,left:0,right:0,height:1,
                        background:`linear-gradient(90deg,transparent,${svc.accent}44,transparent)`,opacity:0.6 }} />
                      <div style={{ width:40,height:40,borderRadius:12,
                        background:svc.featured?'rgba(255,255,255,0.14)':'rgba(255,255,255,0.07)',
                        display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <Icon style={{ width:17,height:17,color:svc.featured?'#c4b5fd':'rgba(255,255,255,0.62)' }} />
                      </div>
                      <div style={{ flex:1 }}>
                        <h3 style={{ fontSize:15,fontWeight:800,color:svc.featured?'#fff':'rgba(255,255,255,0.88)',
                          letterSpacing:'-0.01em',marginBottom:7 }}>{svc.title}</h3>
                        <p style={{ fontSize:12.5,lineHeight:1.68,color:svc.featured?'rgba(255,255,255,0.70)':'rgba(255,255,255,0.42)',fontWeight:500 }}>{svc.desc}</p>
                      </div>
                      <div style={{ display:'flex',alignItems:'center',gap:5,fontSize:11,fontWeight:700,
                        color:svc.featured?'#c4b5fd':'rgba(255,255,255,0.34)',textTransform:'uppercase',letterSpacing:'.08em' }}>
                        Explore <ArrowUpRight style={{ width:12,height:12 }} />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" delay={0.28} style={{ display:'flex',justifyContent:'center',marginTop:'clamp(2rem,4vw,3.5rem)' }}>
            <Link to="/services"
              style={{ display:'inline-flex',alignItems:'center',gap:10,padding:'13px 32px',borderRadius:999,
                background:'linear-gradient(135deg,#623fde,#8b77ff)',color:'#fff',
                fontFamily:'"Plus Jakarta Sans",sans-serif',fontWeight:800,fontSize:'0.94rem',
                boxShadow:'0 8px 28px rgba(98,63,222,0.42)',
                transition:'transform 0.2s ease,box-shadow 0.2s ease',textDecoration:'none' }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 14px 40px rgba(98,63,222,0.52)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 8px 28px rgba(98,63,222,0.42)';}}>
              See All Services <ArrowRight style={{ width:15,height:15 }} />
            </Link>
          </Reveal>
        </div>

        {/* ── Transition C: Services → About (scallop reveal) ── */}
        <div style={{ position:'relative',zIndex:5,marginTop:'clamp(3rem,6vw,5rem)',lineHeight:0,overflow:'hidden' }}>
          <svg viewBox="0 0 1440 96" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display:'block',width:'100%',height:96 }}>
            <rect x="0" y="0" width="1440" height="96" fill="#0d1b3e" />
            <path d="M0,60 C180,96 360,24 540,60 C720,96 900,24 1080,60 C1260,96 1380,36 1440,60 L1440,96 L0,96 Z" fill="#faf8ff" />
          </svg>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
           ACT IV — ABOUT
           Asymmetric split. Text scrolls in from left, image from right.
          ════════════════════════════════════════════════════════════════════ */}
      <section style={{ background:'#faf8ff',position:'relative',zIndex:7,overflow:'hidden',
        paddingBottom:'clamp(4rem,8vw,7rem)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8" style={{ paddingTop:'clamp(1rem,4vw,3rem)' }}>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
            gap:'clamp(3rem,6vw,6rem)',alignItems:'center' }}>

            {/* Text block */}
            <div style={{ order:1 }}>
              <Reveal direction="left">
                <p style={{ fontSize:10,fontWeight:800,letterSpacing:'.15em',textTransform:'uppercase',color:'#623fde',marginBottom:16 }}>About StackMinds</p>
                <h2 className="font-headline font-extrabold tracking-tighter"
                  style={{ fontSize:'clamp(2rem,4.5vw,3.6rem)',color:'#0d1b3e',lineHeight:1.06,letterSpacing:'-0.03em',marginBottom:'clamp(1rem,2vw,1.8rem)' }}>
                  We're not just an agency.<br />We're your growth partners.
                </h2>
              </Reveal>
              <Reveal direction="left" delay={0.10}>
                <p style={{ fontSize:'clamp(0.96rem,1.5vw,1.06rem)',lineHeight:1.78,color:'rgba(33,49,86,0.58)',fontWeight:500,marginBottom:'clamp(1.4rem,2.5vw,2rem)' }}>
                  StackMinds blends creativity and strategy to deliver impactful digital solutions for modern businesses. We architect digital products that are not just beautiful — they are built for massive scale and seamless performance.
                </p>
              </Reveal>
              <Reveal direction="left" delay={0.18}>
                <ul style={{ display:'flex',flexDirection:'column',gap:12 }}>
                  {[
                    'Strategy-first approach to every project',
                    'Built with modern, high-performance tech stacks',
                    'Continuous support and data-driven optimisation',
                  ].map((item,i) => (
                    <li key={i} style={{ display:'flex',alignItems:'center',gap:12,
                      fontSize:13,fontWeight:600,color:'#213156' }}>
                      <div style={{ width:20,height:20,borderRadius:'50%',flexShrink:0,
                        background:'linear-gradient(135deg,rgba(98,63,222,0.12),rgba(98,63,222,0.06))',
                        display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <CheckCircle style={{ width:11,height:11,color:'#623fde' }} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Image block with floating badge */}
            <Reveal direction="right" style={{ order:2 }}>
              <div style={{ position:'relative' }}>
                <div style={{ borderRadius:36,overflow:'hidden',
                  boxShadow:'0 28px 70px rgba(98,63,222,0.13)',
                  background:'linear-gradient(135deg,rgba(98,63,222,0.12),rgba(0,104,128,0.10))' }}
                  className="group">
                  <img
                    alt="Team Collaboration"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ display:'block',aspectRatio:'1/1',mixBlendMode:'overlay',opacity:0.86 }}
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIYQsCXApx04WzhToItm_ER0-6AkGpP0WILWyI2SccHbsfKJbpDUwblwnVTNIOptH8_2qQHTVyd1ON5gl2GpelbJOa89XFUFD7DD43GF3ScrbTgWKMzHISkiYq029xiKT5Edvs8IyOnvvwBz4eFbz2T3hk7YoF3nj7sf2DKX2lIekIxGSxUTUDweIDjX-QaDS2TLZlDarM4NYhlrXiPWQ_YXcsgBXMb2H1QFVJS9FTAjmv8ZnfnOfNbPyNGS7lcWgB_IpamYSrqg"
                  />
                  <div style={{ position:'absolute',inset:0,background:'linear-gradient(to top,rgba(98,63,222,0.28),transparent)' }} />
                </div>
                {/* Floating commitment badge */}
                <motion.div
                  animate={{ y:[0,-8,0] }} transition={{ duration:4,repeat:Infinity,ease:'easeInOut' }}
                  style={{ position:'absolute',bottom:-20,left:-20,
                    background:'rgba(255,255,255,0.94)',backdropFilter:'blur(18px)',
                    borderRadius:18,padding:'14px 20px',
                    boxShadow:'0 12px 40px rgba(98,63,222,0.14)',
                    border:'1px solid rgba(255,255,255,0.82)',willChange:'transform' }}>
                  <div style={{ fontSize:9,fontWeight:800,letterSpacing:'.12em',color:'#4f5e86',textTransform:'uppercase',marginBottom:4 }}>Our Commitment</div>
                  <div style={{ fontSize:15,fontWeight:900,color:'#0d1b3e',letterSpacing:'-0.3px' }}>Results-Driven</div>
                </motion.div>
                {/* Decorative orbit mini element */}
                <div className="hidden lg:block" style={{ position:'absolute',top:-32,right:-28 }}>
                  <OrbitRing size={100} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Transition D: About → Values (subtle gradient overlap) ── */}
        <FadeDivider from="#faf8ff" to="#ffffff" height={72} />
      </section>


      {/* ════════════════════════════════════════════════════════════════════
           ACT V — CORE VALUES
           Numbered principle cards with staggered reveal.
          ════════════════════════════════════════════════════════════════════ */}
      <section style={{ background:'#ffffff',position:'relative',zIndex:6,overflow:'hidden',
        paddingBottom:'clamp(4rem,8vw,7rem)' }}>
        {/* Subtle ambient right glow */}
        <div style={{ position:'absolute',top:'20%',right:'-10%',width:'40vw',height:'40vw',
          borderRadius:'50%',pointerEvents:'none',
          background:'radial-gradient(ellipse,rgba(98,63,222,0.05) 0%,transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8" style={{ paddingTop:'clamp(3rem,6vw,5rem)' }}>
          <Reveal direction="up" style={{ textAlign:'center',marginBottom:'clamp(2.5rem,5vw,4.5rem)' }}>
            <p style={{ fontSize:10,fontWeight:800,letterSpacing:'.15em',textTransform:'uppercase',color:'#623fde',marginBottom:12 }}>Our Philosophy</p>
            <h2 className="font-headline font-extrabold tracking-tighter"
              style={{ fontSize:'clamp(2rem,4.8vw,3.6rem)',color:'#0d1b3e',lineHeight:1.06,letterSpacing:'-0.03em' }}>
              Principles that drive<br className="hidden sm:block" /> everything we do.
            </h2>
          </Reveal>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'clamp(1rem,2.5vw,1.8rem)' }}>
            {VALUES.map((v,i) => {
              const Icon = v.icon;
              return (
                <Reveal key={i} direction="up" delay={i*0.10}>
                  <div className="group"
                    style={{ padding:'clamp(1.6rem,2.8vw,2.4rem)',borderRadius:28,
                      background:'#f8f6ff',border:'1px solid rgba(98,63,222,0.06)',
                      boxShadow:'0 4px 20px rgba(98,63,222,0.04)',
                      transition:'transform 0.24s ease,box-shadow 0.24s ease',
                      height:'100%',willChange:'transform',position:'relative',overflow:'hidden' }}
                    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(98,63,222,0.10)';}}
                    onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 4px 20px rgba(98,63,222,0.04)';}}>
                    {/* Top gradient line */}
                    <div style={{ position:'absolute',top:0,left:0,right:0,height:2,
                      background:'linear-gradient(90deg,rgba(98,63,222,0),rgba(98,63,222,0.22),rgba(98,63,222,0))',opacity:0,
                      transition:'opacity 0.24s ease' }}
                      className="group-hover:opacity-100" />
                    <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20 }}>
                      <span style={{ fontSize:9,fontWeight:900,letterSpacing:'.18em',color:'rgba(98,63,222,0.35)',textTransform:'uppercase' }}>{v.n}</span>
                      <div style={{ width:38,height:38,borderRadius:11,
                        background:'linear-gradient(135deg,rgba(98,63,222,0.09),rgba(98,63,222,0.04))',
                        display:'flex',alignItems:'center',justifyContent:'center',
                        transition:'background 0.24s ease' }}
                        className="group-hover:bg-[rgba(98,63,222,0.14)]">
                        <Icon style={{ width:16,height:16,color:'#623fde' }} />
                      </div>
                    </div>
                    <h3 className="font-headline font-extrabold"
                      style={{ fontSize:'1.22rem',color:'#0d1b3e',letterSpacing:'-0.02em',marginBottom:10 }}>{v.title}</h3>
                    <p style={{ fontSize:12.5,lineHeight:1.72,color:'rgba(33,49,86,0.54)',fontWeight:500 }}>{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ── Transition E: Values → CTA (dark curve) ── */}
        <div style={{ position:'relative',zIndex:5,marginTop:'clamp(3.5rem,6vw,6rem)',lineHeight:0,overflow:'hidden' }}>
          <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display:'block',width:'100%',height:72 }}>
            <rect x="0" y="0" width="1440" height="72" fill="#ffffff" />
            <path d="M0,36 C360,72 720,0 1080,36 C1260,54 1380,18 1440,36 L1440,72 L0,72 Z" fill="#f4f0ff" />
          </svg>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
           ACT VI — CTA
           Full-bleed gradient finale. Light beams. Breathing orbs.
          ════════════════════════════════════════════════════════════════════ */}
      <section style={{ background:'#f4f0ff',position:'relative',zIndex:5,
        padding:'0 clamp(1.5rem,5vw,4rem) clamp(4rem,8vw,6rem)' }}>
        <Reveal direction="up">
          <div style={{ position:'relative',borderRadius:40,overflow:'hidden',
            background:'linear-gradient(135deg,#3b22b0 0%,#5b3cca 45%,#006880 100%)',
            padding:'clamp(3rem,7vw,5.5rem) clamp(2rem,6vw,5rem)',textAlign:'center',
            boxShadow:'0 32px 80px rgba(98,63,222,0.28)' }}>

            {/* CTA bg orbs */}
            <motion.div animate={{ scale:[1,1.14,1],opacity:[0.38,0.62,0.38] }} transition={{ duration:8,repeat:Infinity,ease:'easeInOut' }}
              style={{ position:'absolute',top:'-40%',right:'-15%',width:'55%',paddingBottom:'55%',borderRadius:'50%',
                background:'radial-gradient(circle,rgba(255,255,255,0.10),transparent 65%)',pointerEvents:'none' }} />
            <motion.div animate={{ scale:[1,1.18,1],opacity:[0.28,0.52,0.28] }} transition={{ duration:11,repeat:Infinity,ease:'easeInOut',delay:3 }}
              style={{ position:'absolute',bottom:'-50%',left:'-20%',width:'60%',paddingBottom:'60%',borderRadius:'50%',
                background:'radial-gradient(circle,rgba(255,255,255,0.08),transparent 65%)',pointerEvents:'none' }} />
            {/* Light beam streaks */}
            <motion.div animate={{ opacity:[0,0.08,0],x:['-20%','20%','-20%'] }} transition={{ duration:9,repeat:Infinity,ease:'easeInOut',delay:1 }}
              style={{ position:'absolute',top:'10%',left:'25%',width:1,height:'80%',
                background:'linear-gradient(to bottom,transparent,rgba(255,255,255,0.8),transparent)',
                filter:'blur(1px)',pointerEvents:'none' }} />
            <motion.div animate={{ opacity:[0,0.06,0],x:['10%','-15%','10%'] }} transition={{ duration:12,repeat:Infinity,ease:'easeInOut',delay:5 }}
              style={{ position:'absolute',top:'5%',right:'30%',width:1,height:'90%',
                background:'linear-gradient(to bottom,transparent,rgba(255,255,255,0.6),transparent)',
                filter:'blur(1px)',pointerEvents:'none' }} />

            {/* Orbit ring in CTA */}
            <div className="hidden lg:block" style={{ position:'absolute',top:'50%',left:'6%',transform:'translateY(-50%)',opacity:0.18 }}>
              <OrbitRing size={180} />
            </div>
            <div className="hidden lg:block" style={{ position:'absolute',top:'50%',right:'5%',transform:'translateY(-50%)',opacity:0.14 }}>
              <OrbitRing size={140} />
            </div>

            <div style={{ position:'relative',zIndex:1,maxWidth:640,margin:'0 auto' }}>
              <p style={{ fontSize:10,fontWeight:800,letterSpacing:'.15em',textTransform:'uppercase',
                color:'rgba(255,255,255,0.48)',marginBottom:20 }}>Ready to begin?</p>
              <h2 className="font-headline font-extrabold tracking-tighter"
                style={{ fontSize:'clamp(2.2rem,5.5vw,4.5rem)',color:'#fff',lineHeight:1.04,letterSpacing:'-0.03em',
                  marginBottom:'clamp(1rem,2.5vw,2rem)' }}>
                Let's build something<br className="hidden sm:block" /> extraordinary together.
              </h2>
              <p style={{ fontSize:'clamp(0.96rem,1.5vw,1.06rem)',color:'rgba(255,255,255,0.62)',fontWeight:500,
                lineHeight:1.74,marginBottom:'clamp(2rem,3.5vw,2.8rem)',maxWidth:500,margin:'0 auto clamp(2rem,3.5vw,2.8rem)' }}>
                Every great digital brand starts with a single conversation. Tell us about your vision — we'll show you how we make it real.
              </p>
              <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center',gap:14 }}>
                <Link to="/contact"
                  style={{ display:'inline-flex',alignItems:'center',gap:10,padding:'15px 38px',borderRadius:999,
                    background:'#fff',color:'#3b22b0',fontFamily:'"Plus Jakarta Sans",sans-serif',
                    fontWeight:900,fontSize:'1rem',letterSpacing:'-0.01em',
                    boxShadow:'0 8px 28px rgba(0,0,0,0.16)',
                    transition:'transform 0.2s ease,box-shadow 0.2s ease',textDecoration:'none' }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,0.22)';}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 8px 28px rgba(0,0,0,0.16)';}}>
                  Start Your Project <ArrowRight style={{ width:17,height:17 }} />
                </Link>
                <Link to="/portfolio"
                  style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'15px 28px',borderRadius:999,
                    background:'rgba(255,255,255,0.12)',color:'rgba(255,255,255,0.88)',
                    fontFamily:'"Plus Jakarta Sans",sans-serif',fontWeight:700,fontSize:'0.94rem',
                    border:'1px solid rgba(255,255,255,0.22)',
                    transition:'background 0.2s ease',textDecoration:'none' }}
                  onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.20)'}
                  onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.12)'}>
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
