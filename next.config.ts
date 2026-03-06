import type { NextConfig } from "next";
import path from "path";

const SITE_URL = "https://www.tmdigitalspace.co.za";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Compress responses
  compress: true,

  // Canonical trailing slash behaviour
  trailingSlash: false,

  // Powered-by header removed (minor security + cleanliness)
  poweredByHeader: false,

  // Image optimisation (Core Web Vitals — LCP)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // HTTP Security Headers (trust signals for Google)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // HSTS — tells Google the site is HTTPS-only
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Prevent MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Clickjacking protection
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // XSS protection
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Referrer policy (useful for analytics accuracy)
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects: www → non-www canonicalisation (update to match your DNS)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "tmdigitalspace.co.za" }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

