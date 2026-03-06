'use client';

import { useId, memo } from 'react';

interface LogoProps {
  /** Icon size in px (height = width) */
  size?: number;
  /** Whether to render the wordmark next to the icon */
  showWordmark?: boolean;
  /** Append "Space" → "TM Digital Space" */
  showSpace?: boolean;
  /**
   * auto  – dark text in light mode, white text in dark mode (default)
   * light – white text (use over dark/transparent backgrounds)
   * dark  – slate-900 text (use over light backgrounds)
   */
  variant?: 'auto' | 'light' | 'dark';
  className?: string;
}

/**
 * TM Digital Space brand logo.
 *
 * Icon: rounded-square gradient mark with geometric TM glyphs.
 * Wordmark: "TM Digital[ Space]" with brand gradient accent.
 */
const Logo = memo(function Logo({
  size = 36,
  showWordmark = true,
  showSpace = false,
  variant = 'auto',
  className = '',
}: LogoProps) {
  // useId gives a stable, SSR-safe unique string; strip `:` chars so it's a
  // valid SVG id (e.g.  "tmds-r0" rather than "tmds-:r0:")
  const uid = useId().replace(/:/g, '');
  const gradId = `tmds-${uid}`;

  const wordmarkCls =
    variant === 'light'
      ? 'text-white'
      : variant === 'dark'
      ? 'text-slate-900'
      : 'text-slate-900 dark:text-white';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* ── Icon mark ─────────────────────────────────────────────── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#006eff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="48" height="48" rx="12" fill={`url(#${gradId})`} />

        {/*
         * T glyph  (x 5–21, y 9–39)
         * Crossbar: 16 px wide × 4 px tall
         * Stem:      4 px wide × 26 px tall, centred at x = 13
         */}
        <path d="M5 9H21V13H15V39H11V13H5Z" fill="white" />

        {/*
         * M glyph  (x 23–43, y 9–39)
         * Two outer legs (4 px each) + downward V-notch peak:
         *   left peak (27,9) → valley (33,22) → right peak (39,9)
         * Below the valley the full width is solid (condensed slab M).
         */}
        <path d="M23 9H27L33 22L39 9H43V39H23Z" fill="white" />
      </svg>

      {/* ── Wordmark ───────────────────────────────────────────────── */}
      {showWordmark && (
        <span
          className={`text-base font-extrabold tracking-tight transition-colors duration-300 ${wordmarkCls}`}
        >
          TM
          <span className="bg-gradient-to-r from-[#006eff] to-[#00d4ff] bg-clip-text text-transparent">
            {' '}Digital{showSpace ? ' Space' : ''}
          </span>
        </span>
      )}
    </div>
  );
});

export default Logo;
