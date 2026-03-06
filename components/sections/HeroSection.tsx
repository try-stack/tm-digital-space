'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Globe, Palette, Mail, Search, Star, ChevronDown, MapPin } from 'lucide-react';
import Button from '../ui/Button';

// ── Animated cycling word ───────────────────────────────────────────────────
const WORDS = ['Websites', 'Branding', 'Visibility', 'Identity', 'Growth'];

const CyclingWord = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block overflow-hidden align-bottom min-w-[13ch]">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          className="gradient-text inline-block"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// ── Floating service tag ────────────────────────────────────────────────────
interface TagProps {
  icon: React.ReactNode;
  label: string;
  delay: number;
  x: string;
  y: string;
  color: string;
}
const FloatingTag = ({ icon, label, delay, x, y, color }: TagProps) => (
  <motion.div
    className="absolute flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-md text-xs font-semibold shadow-xl whitespace-nowrap"
    style={{
      left: x,
      top: y,
      background: 'rgba(255,255,255,0.06)',
      borderColor: `${color}40`,
      color,
      boxShadow: `0 4px 24px ${color}20`,
    }}
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: ['0px', '-10px', '0px'],
    }}
    transition={{
      opacity: { delay, duration: 0.5 },
      scale: { delay, duration: 0.5 },
      y: { delay: delay + 0.5, duration: 3 + delay * 0.5, repeat: Infinity, ease: 'easeInOut' },
    }}
  >
    {icon}
    {label}
  </motion.div>
);

// ── Magnetic CTA wrapper ────────────────────────────────────────────────────
const MagneticWrap = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </motion.div>
  );
};

const GridMesh = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,110,255,0.07)" strokeWidth="1" />
      </pattern>
      <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="100%" stopColor="var(--brand-dark)" stopOpacity="0.6" />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <rect width="100%" height="100%" fill="url(#vignette)" />
  </svg>
);

const BrowserMockup = () => (
  <motion.div
    className="relative w-full max-w-md mx-auto hero-browser-perspective"
    initial={{ opacity: 0, y: 40, rotateY: -15 }}
    animate={{ opacity: 1, y: 0, rotateY: 0 }}
    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Outer glow */}
    <div
      className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 pointer-events-none hero-browser-glow"
    />

    {/* Glass card */}
    <div
      className="relative rounded-2xl overflow-hidden border hero-browser-glass"
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b hero-browser-chrome"
      >
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <div
          className="ml-3 flex-1 rounded-full px-3 py-1 text-xs text-slate-400 hero-browser-address-bar"
        >
          tmdigitalspace.co.za
        </div>
      </div>

      {/* Fake webpage content */}
      <div className="p-5 space-y-3">
        {/* Hero strip */}
        <div className="h-24 rounded-xl overflow-hidden relative hero-browser-hero-strip">
          <div className="absolute inset-0 flex items-center px-5 gap-3">
            <div className="space-y-2 flex-1">
              <div className="h-3 w-3/4 rounded-full bg-white/20" />
              <div className="h-2 w-1/2 rounded-full bg-white/10" />
            </div>
            <div
              className="h-8 w-20 rounded-lg text-xs text-white font-bold flex items-center justify-center hero-browser-cta-btn"
            >
              Get Started
            </div>
          </div>
        </div>

        {/* Content blocks */}
        {(['h-2 w-full', 'h-1.5 w-4/5', 'h-1.5 w-[90%]'] as const).map((cls, i) => (
          <motion.div
            key={i}
            className={`rounded-full bg-white/10 ${cls}`}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}

        {/* Card row */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {(['bg-[#006eff33]', 'bg-[#00d4ff22]', 'bg-[#ff3d7122]'] as const).map((bgCls, i) => (
            <div key={i} className={`h-16 rounded-xl ${bgCls}`}>
              <div className="h-full flex flex-col justify-end p-2 gap-1">
                <div className="h-1.5 w-full rounded-full bg-white/15" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Metric chips */}
        <div className="flex gap-2 pt-1">
          {[
            { label: 'SEO Score', val: '98', cls: 'bg-[#00d4ff15] border border-[#00d4ff30] text-[#00d4ff]' },
            { label: 'Speed', val: '100', cls: 'bg-[#10b98115] border border-[#10b98130] text-[#10b981]' },
          ].map((m) => (
            <div
              key={m.label}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs ${m.cls}`}
            >
              <span className="font-bold">{m.val}</span>
              <span className="opacity-70">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Floating service tags */}
    <FloatingTag icon={<Globe className="w-3 h-3" />} label="Web Design" delay={1.0} x="-18%" y="10%" color="#006eff" />
    <FloatingTag icon={<Palette className="w-3 h-3" />} label="Branding" delay={1.2} x="88%" y="20%" color="#00d4ff" />
    <FloatingTag icon={<Search className="w-3 h-3" />} label="SEO" delay={1.4} x="-14%" y="72%" color="#ff3d71" />
    <FloatingTag icon={<Mail className="w-3 h-3" />} label="Business Email" delay={1.6} x="75%" y="82%" color="#10b981" />
  </motion.div>
);

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '30+', label: 'Projects' },
    { value: '20+', label: 'Happy Clients' },
    { value: '3+', label: 'Years' },
    { value: '99%', label: 'Satisfaction' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background video — loops continuously */}
      <div className="absolute inset-0 z-0 bg-[#0a0e27]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Multi-layer overlay: preserves text legibility while keeping the video clear */}
        <div className="absolute inset-0 bg-[#0a0e27]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e27]/30 via-[#0a0e27]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/20 via-transparent to-[#0a0e27]/10" />
      </div>

      <GridMesh />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full blur-[120px] hero-orb-primary"
          animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full blur-[100px] hero-orb-secondary"
          animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full blur-[80px] hero-orb-accent"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] hero-noise-texture"
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-[calc(100vh-5rem)] py-10">

          {/* Left column */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 self-start mb-6 px-4 py-2 rounded-full text-sm font-medium hero-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <MapPin className="w-4 h-4" />
              Cape Town Digital Agency
              <motion.span
                className="w-2 h-2 rounded-full bg-[#00d4ff]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-black leading-[1.08] tracking-tight mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We Build{' '}
              <br className="hidden sm:block" />
              <CyclingWord />
              <br />
              <span className="text-slate-400 font-bold text-3xl sm:text-4xl lg:text-5xl">
                That Convert &amp; Scale.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-base sm:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Stunning websites. Memorable branding. Google visibility.
              Everything your Cape Town business needs to stand out and win online.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <MagneticWrap>
                <Button variant="primary" size="lg" icon href="#contact">
                  Get a Free Strategy Call
                </Button>
              </MagneticWrap>
              <MagneticWrap>
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-lg text-base font-semibold border text-slate-300 transition-colors hover:text-white hero-view-work-btn"
                  whileHover={{ borderColor: 'rgba(0,110,255,0.5)', background: 'rgba(0,110,255,0.08)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Our Work
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </MagneticWrap>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="h-px mb-8 w-full hero-divider"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            />

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.08 }}
                >
                  <span className="text-2xl sm:text-3xl font-black gradient-text leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              className="mt-10 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex -space-x-2">
                {([
                  { initials: 'JD', cls: 'bg-[#006eff]', z: 'z-[4]' },
                  { initials: 'SK', cls: 'bg-[#00d4ff]', z: 'z-[3]' },
                  { initials: 'LM', cls: 'bg-[#ff3d71]', z: 'z-[2]' },
                  { initials: 'PN', cls: 'bg-[#10b981]', z: 'z-[1]' },
                ] as const).map((a) => (
                  <div
                    key={a.initials}
                    className={`w-8 h-8 rounded-full border-2 border-[#0a0e27] flex items-center justify-center text-white text-[10px] font-bold ${a.cls} ${a.z}`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Trusted by 20+ Cape Town businesses</p>
              </div>
            </motion.div>
          </div>

          {/* Right column — browser mockup */}
          <div className="relative hidden md:flex items-center justify-center">
            <BrowserMockup />
          </div>
        </div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
        onClick={scrollToContent}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to services"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
};

export default HeroSection;
