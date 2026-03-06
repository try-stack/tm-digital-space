'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoExpandTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const phoneNumber = '2762529952';
  const message = 'Hi! I would like to discuss a project with TM Digital Space.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show button after 2.5s OR on scroll past 300px
  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 2500);
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-expand the popup 6s after the button appears
  useEffect(() => {
    if (isVisible && !isExpanded) {
      autoExpandTimeoutRef.current = setTimeout(() => setIsExpanded(true), 6000);
    }
    return () => {
      if (autoExpandTimeoutRef.current) clearTimeout(autoExpandTimeoutRef.current);
    };
  }, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };
    if (isExpanded) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExpanded]);

  const handleButtonClick = () => {
    if (autoExpandTimeoutRef.current) clearTimeout(autoExpandTimeoutRef.current);
    setIsExpanded((prev) => !prev);
    setShowBadge(false);
  };

  const handleChatOpen = () => {
    setIsExpanded(false);
    setShowBadge(false);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        >
          {/* ── Chat Popup ─────────────────────────────────────────── */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="w-72 rounded-2xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/50"
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 12 }}
                transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                style={{ transformOrigin: 'bottom right' }}
              >
                {/* Header */}
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#006eff] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      TM
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm leading-tight truncate">TM Digital Space</p>
                    <p className="text-green-300 text-xs mt-0.5">● Online — replies instantly</p>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-white/70 hover:text-white transition-colors flex-shrink-0 p-1 rounded-full hover:bg-white/10"
                    aria-label="Close chat preview"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Chat body */}
                <div className="relative bg-[#ECE5DD] dark:bg-slate-800 px-4 py-4 space-y-3">
                  {/* Agent message bubble */}
                  <div className="flex justify-start">
                    <div className="relative max-w-[85%] bg-white dark:bg-slate-700 rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm">
                      <span className="absolute -left-2 top-3 w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-white dark:border-r-slate-700 border-b-[6px] border-b-transparent" />
                      <p className="text-slate-800 dark:text-slate-100 text-sm leading-relaxed">
                        👋 Hi! How can we help you today?
                      </p>
                      <p className="text-slate-400 dark:text-slate-500 text-[10px] text-right mt-1">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        &nbsp;✓✓
                      </p>
                    </div>
                  </div>

                  {/* Pre-filled reply preview */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] bg-[#D9FDD3] dark:bg-green-900/50 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm">
                      <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed italic opacity-70">
                        I&apos;d like to discuss a project…
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Footer */}
                <div className="bg-white dark:bg-slate-900 px-4 py-3">
                  <button
                    onClick={handleChatOpen}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl font-semibold text-sm text-white transition-all duration-200 active:scale-95 whatsapp-btn-gradient"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Continue on WhatsApp
                    <Send className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                  <p className="text-center text-[10px] text-slate-400 dark:text-slate-600 mt-2">
                    Powered by WhatsApp · End-to-end encrypted
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Tooltip ─────────────────────────────────────────────── */}
          <AnimatePresence>
            {showTooltip && !isExpanded && (
              <motion.div
                className="absolute right-[72px] bottom-3 bg-slate-900 dark:bg-slate-700 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg pointer-events-none"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.15 }}
              >
                Chat with us
                <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-l-[6px] border-l-slate-900 dark:border-l-slate-700 border-b-[5px] border-b-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── FAB Button ──────────────────────────────────────────── */}
          <div className="relative">
            {/* Dual ping rings when idle */}
            {!isExpanded && (
              <>
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                <span
                  className="absolute inset-0 rounded-full bg-[#25D366] opacity-10 animate-ping-delayed"
                />
              </>
            )}

            <motion.button
              className={`relative w-16 h-16 rounded-full text-white flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400/50 whatsapp-fab-gradient ${isExpanded ? 'whatsapp-fab-expanded' : 'whatsapp-fab-idle'}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleButtonClick}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              aria-label={isExpanded ? 'Close chat' : 'Open WhatsApp chat'}
              aria-expanded={isExpanded}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {isExpanded ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                )}
              </motion.div>
            </motion.button>

            {/* Notification badge */}
            <AnimatePresence>
              {showBadge && (
                <motion.div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-md border-2 border-white dark:border-slate-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.3, 1] }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.4, times: [0, 0.6, 1] }}
                >
                  1
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
