'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services',  href: '#services',   id: 'services'   },
  { label: 'Portfolio', href: '#portfolio',  id: 'portfolio'  },
  { label: 'Why Us',    href: '#why-choose', id: 'why-choose' },
  { label: 'Process',   href: '#process',    id: 'process'    },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const y = window.scrollY + 120;
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id); return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const linkCls = (id: string) => [
    'relative px-3 py-1.5 rounded-lg text-sm font-bold transition-all duration-200',
    active === id
      ? scrolled
        ? 'text-[#006eff] dark:text-[#00d4ff] bg-[#006eff]/10 dark:bg-[#00d4ff]/10'
        : 'text-white bg-white/15'
      : scrolled
        ? 'text-slate-600 dark:text-slate-300 hover:text-[#006eff] dark:hover:text-white hover:bg-[#006eff]/8 dark:hover:bg-white/[0.07]'
        : 'text-white/70 hover:text-white hover:bg-white/12',
  ].join(' ');

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 pointer-events-none"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={[
          'mx-auto mt-4 px-4 transition-all duration-500 pointer-events-auto',
          scrolled ? 'max-w-4xl' : 'max-w-6xl',
        ].join(' ')}>
          <div className={[
            'flex items-center justify-between gap-6 px-5 py-3 rounded-2xl transition-all duration-500',
            scrolled
              ? 'bg-white/90 dark:bg-[#0b0f28]/92 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.45)] border border-black/[0.06] dark:border-white/[0.08]'
              : 'bg-transparent',
          ].join(' ')}>

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#006eff] to-[#00d4ff] flex items-center justify-center text-white text-xs font-black shadow-[0_4px_14px_rgba(0,110,255,0.4)] group-hover:shadow-[0_4px_20px_rgba(0,110,255,0.6)] transition-shadow">
                TM
              </div>
              <span className={[
                'text-base font-extrabold tracking-tight transition-colors duration-300',
                scrolled ? 'text-slate-900 dark:text-white' : 'text-white',
              ].join(' ')}>
                TM<span className="gradient-text"> Digital</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className={linkCls(link.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#006eff] to-[#00d4ff]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a
                href="tel:+2762529952"
                className={[
                  'flex items-center gap-1.5 text-sm font-bold transition-colors',
                  scrolled
                    ? 'text-slate-500 dark:text-slate-400 hover:text-[#006eff] dark:hover:text-[#00d4ff]'
                    : 'text-white/60 hover:text-white',
                ].join(' ')}
              >
                <Phone size={13} />
                +27 62 529 952
              </a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#006eff] text-white text-sm font-bold transition-all shadow-[0_4px_16px_rgba(0,110,255,0.35)]"
                whileHover={{ scale: 1.04, y: -1, boxShadow: '0 8px_28px_rgba(0,110,255,0.55)' }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.18 }}
              >
                Free Strategy Call
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={[
                'lg:hidden p-2 rounded-lg transition-colors',
                scrolled
                  ? 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  : 'text-white hover:bg-white/10',
              ].join(' ')}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }} style={{ display: 'block' }}
                  ><X size={20} /></motion.span>
                ) : (
                  <motion.span key="m"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }} style={{ display: 'block' }}
                  ><Menu size={20} /></motion.span>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>
      </motion.header>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-[#0b0f28] shadow-2xl lg:hidden flex flex-col"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.06] dark:border-white/[0.07]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#006eff] to-[#00d4ff] flex items-center justify-center text-white text-[11px] font-black">TM</div>
                <span className="font-extrabold text-sm text-slate-900 dark:text-white">TM Digital Space</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-[#006eff]/8 dark:hover:bg-[#006eff]/[0.12] hover:text-[#006eff] dark:hover:text-[#00d4ff] hover:translate-x-1 transition-all duration-200"
              >
                Home
              </a>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className={[
                    'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200',
                    active === link.id
                      ? 'bg-[#006eff]/10 dark:bg-[#006eff]/[0.12] text-[#006eff] dark:text-[#00d4ff] translate-x-1'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-[#006eff]/8 dark:hover:bg-[#006eff]/[0.12] hover:text-[#006eff] dark:hover:text-[#00d4ff] hover:translate-x-1',
                  ].join(' ')}
                  initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.06 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  {active === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006eff] dark:bg-[#00d4ff]" />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Drawer footer */}
            <div className="px-4 py-5 border-t border-black/[0.06] dark:border-white/[0.07] space-y-2.5">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#006eff] hover:bg-[#0058cc] text-white text-sm font-bold transition-colors shadow-[0_4px_16px_rgba(0,110,255,0.3)]"
              >
                Free Strategy Call
              </a>
              <a
                href="tel:+2762529952"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 dark:border-white/[0.08] text-sm text-slate-600 dark:text-slate-400 hover:text-[#006eff] dark:hover:text-[#00d4ff] hover:border-[#006eff]/40 dark:hover:border-[#006eff]/40 hover:bg-[#006eff]/5 transition-all duration-200"
              >
                <Phone size={13} />
                +27 62 529 952
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
