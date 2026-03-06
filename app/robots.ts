import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.tmdigitalspace.co.za';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers full access
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // API routes
          '/_next/',     // Next.js internals
          '/admin/',     // Future admin panel
        ],
      },
      {
        // Allow Googlebot/Bingbot full access explicitly
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
