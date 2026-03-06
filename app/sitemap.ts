import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.tmdigitalspace.co.za';

// Section anchors treated as logical "pages" for sitemap priority weighting
const sections = [
  { path: '/',            priority: 1.0,  changeFrequency: 'weekly'  as const },
  { path: '/#services',   priority: 0.9,  changeFrequency: 'monthly' as const },
  { path: '/#portfolio',  priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/#process',    priority: 0.75, changeFrequency: 'yearly'  as const },
  { path: '/#about',      priority: 0.75, changeFrequency: 'yearly'  as const },
  { path: '/#contact',    priority: 0.95, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return sections.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        'en-ZA': `${SITE_URL}${path}`,
      },
    },
  }));
}
