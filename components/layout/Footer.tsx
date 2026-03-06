'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const ENCOURAGEMENTS = [
  { text: '"For I know the plans I have for you — plans to prosper you and not to harm you."', ref: 'Jeremiah 29:11' },
  { text: '"Commit to the Lord whatever you do, and he will establish your plans."', ref: 'Proverbs 16:3' },
  { text: '"She is clothed with strength and dignity; she can laugh at the days to come."', ref: 'Proverbs 31:25' },
  { text: '"Whatever you do, work at it with all your heart, as working for the Lord."', ref: 'Colossians 3:23' },
  { text: '"The Lord will guide you always; he will satisfy your needs."', ref: 'Isaiah 58:11' },
];

/* ── Inline dove / light-ray SVG symbol ── */
const DoveSymbol = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 opacity-30"
    aria-hidden="true"
  >
    {/* Light rays emanating from centre */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <line
        key={i}
        x1="40" y1="40"
        x2={40 + 28 * Math.cos((deg * Math.PI) / 180)}
        y2={40 + 28 * Math.sin((deg * Math.PI) / 180)}
        stroke="url(#rayGrad)"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity={i % 2 === 0 ? 1 : 0.5}
      />
    ))}
    {/* Dove body */}
    <path
      d="M40 38 C36 33 28 30 24 34 C20 38 24 44 30 43 C32 43 34 42 36 41 L40 46 L44 41 C46 42 48 43 50 43 C56 44 60 38 56 34 C52 30 44 33 40 38Z"
      stroke="url(#rayGrad)"
      strokeWidth="1"
      fill="none"
      strokeLinejoin="round"
    />
    {/* Wing sweep */}
    <path
      d="M30 38 C27 35 24 33 22 35"
      stroke="url(#rayGrad)"
      strokeWidth="0.8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M50 38 C53 35 56 33 58 35"
      stroke="url(#rayGrad)"
      strokeWidth="0.8"
      fill="none"
      strokeLinecap="round"
    />
    {/* Olive branch */}
    <path
      d="M38 46 C37 50 35 53 33 55"
      stroke="url(#rayGrad)"
      strokeWidth="0.8"
      fill="none"
      strokeLinecap="round"
    />
    <ellipse cx="35" cy="51" rx="2" ry="1.2" transform="rotate(-30 35 51)" stroke="url(#rayGrad)" strokeWidth="0.7" fill="none" />
    <ellipse cx="33.5" cy="54" rx="1.8" ry="1" transform="rotate(-10 33.5 54)" stroke="url(#rayGrad)" strokeWidth="0.7" fill="none" />
    {/* Centre glow dot */}
    <circle cx="40" cy="38" r="2" fill="url(#rayGrad)" opacity="0.6" />
    <defs>
      <linearGradient id="rayGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#006eff" />
        <stop offset="100%" stopColor="#00d4ff" />
      </linearGradient>
    </defs>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setQuoteIdx(i => (i + 1) % ENCOURAGEMENTS.length);
        setVisible(true);
      }, 600);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const quote = ENCOURAGEMENTS[quoteIdx];

  return (
    <footer className="bg-[#06091a] text-white border-t border-white/[0.06]">

      {/* ── Main body ── */}
      <div className="container-custom py-14">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* ── LEFT: Dove / light-ray symbol + brand ── */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <DoveSymbol />
            <span className="text-lg font-extrabold gradient-text tracking-tight">TM Digital Space</span>
            <p className="text-xs text-slate-500 text-center md:text-left leading-relaxed max-w-[200px]">
              Cape Town · South Africa
            </p>
          </div>

          {/* ── CENTRE: Motto ── */}
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#00d4ff]/60">Our Guiding Principle</p>
            <div className="space-y-1">
              {['Clarity.', 'Creativity.', 'Connection.'].map((word, i) => (
                <motion.div
                  key={word}
                  className="text-2xl md:text-3xl font-black tracking-tight leading-snug"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  style={{
                    background: 'linear-gradient(135deg,#e2e8f0 30%,#94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
            <div className="flex gap-1.5 mt-1">
              {ENCOURAGEMENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setQuoteIdx(i); setVisible(true); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === quoteIdx ? 'bg-[#006eff] w-4' : 'bg-white/20'}`}
                  aria-label={`Quote ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Contact + CTA ── */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="space-y-2.5">
              <a
                href="tel:+2762529952"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#006eff] group-hover:text-[#00d4ff] transition-colors" />
                +27 62 529 952
              </a>
              <a
                href="mailto:admin@tm-digital.co.za"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#006eff] group-hover:text-[#00d4ff] transition-colors" />
                admin@tm-digital.co.za
              </a>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg,#006eff,#00d4ff)', boxShadow: '0 4px 20px rgba(0,110,255,0.35)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 6px 28px rgba(0,110,255,0.55)' }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </motion.a>

            <div className="flex gap-3 mt-1">
              {[
                { href: 'https://www.facebook.com/tmdigitalspace', label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { href: 'https://www.instagram.com/tmdigitalspace', label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M6.5 2h11A4.5 4.5 0 0 1 22 6.5v11a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 17.5v-11A4.5 4.5 0 0 1 6.5 2z' },
                { href: 'https://www.linkedin.com/company/tmdigitalspace', label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              ].map(({ href, label, path }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#006eff]/20 border border-white/10 hover:border-[#006eff]/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d={path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/[0.06]" />

      {/* ── Rotating scripture strip ── */}
      <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {visible && (
              <motion.blockquote
                key={quoteIdx}
                className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs text-slate-400 italic leading-relaxed">{quote.text}</span>
                <span className="text-[10px] font-bold text-[#006eff]/70 whitespace-nowrap flex-shrink-0">— {quote.ref}</span>
              </motion.blockquote>
            )}
          </AnimatePresence>
        </div>
        <p className="text-[11px] text-slate-600 whitespace-nowrap flex-shrink-0">
          © {currentYear} TM Digital Space ·{' '}
          <a href="/privacy" className="hover:text-slate-400 transition-colors">Privacy</a>
          {' · '}
          <a href="/terms" className="hover:text-slate-400 transition-colors">Terms</a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
