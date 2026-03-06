'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Zap, X, ArrowRight, Star } from 'lucide-react';

const SLOTS_LEFT = 3; // Update monthly
const MONTH = 'March';
const REVIEW_COUNT = 40;

const StickyCtaBar = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (ratio > 0.3) setVisible(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 8000);
    return () => clearInterval(id);
  }, [visible]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        >
          {/* Subtle top border glow */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#006eff] to-transparent opacity-60" />

          <div className="bg-[#0a0e27]/95 backdrop-blur-xl border-t border-white/5 px-4 py-3 sm:py-3.5">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">

              {/* Urgency signal */}
              <div className="flex items-center gap-3 min-w-0 flex-shrink">
                {/* Pulsing availability dot */}
                <div className="relative flex-shrink-0">
                  <span className="absolute inset-0 rounded-full bg-[#ff3d71] animate-ping opacity-40" />
                  <span className="relative w-3 h-3 rounded-full bg-[#ff3d71] block" />
                </div>

                <div className="flex items-center gap-2 text-sm text-white font-medium truncate">
                  <Clock className="w-4 h-4 text-[#00d4ff] flex-shrink-0" />
                  <span className="text-[#ff3d71] font-bold">{SLOTS_LEFT} spots left</span>
                  <span className="hidden sm:inline text-slate-300">for {MONTH} onboarding</span>
                </div>

                <div className="hidden md:flex items-center gap-1 text-xs text-slate-400 border-l border-white/10 pl-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-1">5.0 · {REVIEW_COUNT} reviews</span>
                </div>
              </div>

              {/* Value proposition */}
              <div className="hidden lg:flex items-center gap-2 text-sm text-slate-300">
                <Zap className="w-4 h-4 text-[#00d4ff]" />
                Free strategy call · No lock-in · Cape Town–based team
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
                <motion.a
                  href="#contact"
                  className={[
                    'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white',
                    'bg-gradient-to-br from-[#006eff] to-[#00d4ff] transition-shadow duration-300',
                    pulse
                      ? 'shadow-[0_0_24px_rgba(0,110,255,0.7)]'
                      : 'shadow-[0_4px_16px_rgba(0,110,255,0.35)]',
                  ].join(' ')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDismissed(true)}
                >
                  Claim Your Spot
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <button
                  onClick={() => setDismissed(true)}
                  className="text-slate-600 hover:text-slate-400 transition-colors p-1 flex-shrink-0"
                  aria-label="Dismiss bar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCtaBar;
