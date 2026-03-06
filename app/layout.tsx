import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// ── Web font (next/font ensures zero layout shift + preload) ───────────────
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
});

const SITE_URL = "https://www.tmdigitalspace.co.za";
const SITE_NAME = "TM Digital Space";
const SITE_DESCRIPTION =
  "TM Digital Space builds conversion-focused websites, professional branding, business email, and Google-optimised digital solutions for South African SMBs. Get found online and grow your business.";

// ── Viewport (separate from Metadata per Next.js 14+ requirement) ─────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e27" },
  ],
};

// ── Primary Metadata ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Title template — child pages slot into the pipe
  title: {
    default: `${SITE_NAME} | Web Design, Branding & SEO South Africa`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "web design Cape Town",
    "website development Cape Town",
    "digital agency Cape Town",
    "Cape Town web design",
    "web design South Africa",
    "digital agency South Africa",
    "small business website",
    "professional web design",
    "branding agency SA",
    "business email setup",
    "Google My Business optimisation",
    "local SEO South Africa",
    "affordable website design",
    "Next.js web development",
    "UI UX design South Africa",
    "e-commerce website SA",
    "TM Digital Space",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",

  // Canonical & alternate
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-ZA": SITE_URL,
    },
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Web Design, Branding & SEO South Africa`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "TM Digital Space — Web Design, Branding & SEO South Africa",
        type: "image/png",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Web Design & Digital Solutions SA`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
    creator: "@tmdigitalspace",
    site: "@tmdigitalspace",
  },

  // App / manifest
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#006eff" }],
  },
};

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.png`,
  description: SITE_DESCRIPTION,
  foundingDate: "2020",
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
    addressRegion: "Western Cape",
    addressLocality: "Cape Town",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+27-62-529-952",
    email: "admin@tm-digital.co.za",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/tmdigitalspace",
    "https://www.instagram.com/tmdigitalspace",
    "https://www.linkedin.com/company/tmdigitalspace",
    "https://twitter.com/tmdigitalspace",
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Email Setup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO & Google Visibility" } },
    ],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: `${SITE_NAME} | Web Design, Branding & SEO South Africa`,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-ZA",
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

// ── AggregateRating schema (unlocks ★★★★★ stars in Google SERPs) ──────────
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "40",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "John Mbeki" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "TM Digital Space transformed our online presence completely. Our website traffic increased by 900% in just three months.",
      datePublished: "2025-08-01",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Thompson" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Our online sales increased by 400% in just 3 months! The team delivered a beautiful, fast e-commerce site.",
      datePublished: "2025-09-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Lerato Ndlovu" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Reservations have quadrupled, and we are ranking #1 on Google for local searches. TM Digital Space delivered beyond our expectations!",
      datePublished: "2025-10-20",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Michael van der Berg" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Professional, modern, and exactly what we needed. Lead generation has increased dramatically.",
      datePublished: "2025-11-05",
    },
  ],
};

// ── FAQ schema (targets featured-snippet / People Also Ask positions) ─────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost in South Africa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TM Digital Space offers professional websites for South African businesses starting from R2,500. Pricing depends on complexity, features, and design requirements. Contact us for a free quote tailored to your budget.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most business websites are completed within 2 weeks. Complex e-commerce or custom web applications may take up to 4 weeks. We provide a detailed timeline at the start of every project.",
      },
    },
    {
      "@type": "Question",
      name: "Does TM Digital Space offer SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we build is SEO-optimised from the ground up — including Google Business Profile setup, keyword research, on-page SEO, and local SEO targeting South African search terms.",
      },
    },
    {
      "@type": "Question",
      name: "Can you set up professional business email for my domain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We configure domain-based professional email (e.g., you@yourbusiness.co.za) on Microsoft 365 or Google Workspace, including full setup, migration, and ongoing support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside Cape Town?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — while we are based in Cape Town, we work with businesses across South Africa including Johannesburg, Durban, Pretoria, and remote clients nationwide. All consultations can be done online.",
      },
    },
  ],
};

// ── Service ItemList schema (service listing in SERPs) ────────────────────
const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Services by TM Digital Space",
  description: "Full-service digital agency offering web design, branding, business email and SEO in South Africa.",
  url: `${SITE_URL}/#services`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-web`,
        name: "Website Development",
        description: "Custom responsive websites built for SEO, speed and conversions — e-commerce capability included.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "South Africa" },
        url: `${SITE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-branding`,
        name: "Logo & Brand Identity Design",
        description: "Professional brand identity including logo, colour system, typography guide, and social media kit.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "South Africa" },
        url: `${SITE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-email`,
        name: "Business Email Setup",
        description: "Domain-based professional email on Microsoft 365 or Google Workspace with full setup and migration.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "South Africa" },
        url: `${SITE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/#service-seo`,
        name: "Google Business Profile & Local SEO",
        description: "Google Business Profile optimisation, local SEO, review strategy, and ongoing profile management.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "South Africa" },
        url: `${SITE_URL}/#services`,
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-ZA",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <head>
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="ZA" />
        <meta name="geo.country" content="South Africa" />
        <meta name="geo.placename" content="South Africa" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />

        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* JSON-LD blocks */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-aggregate-rating"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`antialiased ${plusJakartaSans.className}`}>
        {children}
      </body>
      {/* Google Tag Manager placeholder — replace UA-XXXXXXX with real ID */}
      {/* <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
      </Script> */}
    </html>
  );
}
