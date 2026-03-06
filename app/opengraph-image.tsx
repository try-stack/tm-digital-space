// Next.js ImageResponse requires inline styles — CSS classes are not supported in this context.
import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';
export const alt = 'TM Digital Space — Web Design, Branding & SEO South Africa';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0a0e27',
          display: 'flex',
          flexDirection: 'column',
                                                                                                                                                                                          position: 'relative',
                                                                                                                                                                                          overflow: 'hidden',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,110,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,110,255,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Blue glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,110,255,0.3) 0%, transparent 70%)',
          }}
        />

        {/* Cyan glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 450,
            height: 450,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Content wrapper */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '64px 72px',
          }}
        >
          {/* Top bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Logo mark */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #006eff 0%, #00d4ff 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: '-1px',
              }}
            >
              TM
            </div>

            {/* Brand name */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#fff', fontSize: 22, fontWeight: 700, letterSpacing: '-0.3px' }}>
                TM Digital Space
              </span>
              <span style={{ color: '#64748b', fontSize: 13, marginTop: 1 }}>
                tmdigitalspace.co.za
              </span>
            </div>

            {/* Badge */}
            <div
              style={{
                marginLeft: 'auto',
                padding: '8px 20px',
                borderRadius: 100,
                background: 'rgba(0,110,255,0.15)',
                border: '1px solid rgba(0,110,255,0.35)',
                color: '#00d4ff',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              🇿🇦 South Africa
            </div>
          </div>

          {/* Main headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div
              style={{
                fontSize: 64,
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '-2px',
              }}
            >
              Web Design, Branding
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #006eff 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                &amp; SEO Experts.
              </span>
            </div>

            <p
              style={{
                fontSize: 22,
                color: '#94a3b8',
                margin: 0,
                lineHeight: 1.4,
                maxWidth: 680,
              }}
            >
              Conversion-focused websites, professional branding &amp; Google visibility
              for South African businesses.
            </p>
          </div>

          {/* Bottom stats row */}
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
            {[
              { value: '50+', label: 'Projects' },
              { value: '40+', label: 'Happy Clients' },
              { value: '5★', label: 'Rating' },
              { value: '99%', label: 'Satisfaction' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span
                  style={{
                    fontSize: 36,
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #006eff 0%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    letterSpacing: '-1px',
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: 14, color: '#64748b' }}>{s.label}</span>
              </div>
            ))}

            {/* CTA pill */}
            <div
              style={{
                marginLeft: 'auto',
                padding: '14px 32px',
                borderRadius: 100,
                background: 'linear-gradient(135deg, #006eff 0%, #00d4ff 100%)',
                color: '#fff',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '-0.3px',
              }}
            >
              Free Strategy Call →
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
