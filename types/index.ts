import type { ComponentType } from 'react';

// ─────────────────────────────────────────────────────────────
// TM Digital Space — shared TypeScript interfaces
// ─────────────────────────────────────────────────────────────

// ── Portfolio ────────────────────────────────────────────────

export type ProjectCategory =
  | 'all'
  | 'website'
  | 'ecommerce'
  | 'branding'
  | 'corporate'
  | 'services';

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  industry: string;
  image: string;
  liveUrl: string;
  beforeMetrics: Record<string, string>;
  afterMetrics: Record<string, string>;
  testimonial: string;
  client: string;
  tags: string[];
}

// ── Services ─────────────────────────────────────────────────

export interface Service {
  icon: ComponentType;
  title: string;
  description: string;
  features: string[];
  color: string;
  link: string;
  popular: boolean;
  cta: string;
}

export interface AdditionalService {
  icon: ComponentType;
  title: string;
  description: string;
}

// ── Testimonials ─────────────────────────────────────────────

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  results: string;
}

// ── Process ──────────────────────────────────────────────────

export interface ProcessStep {
  icon: ComponentType;
  number: string;
  title: string;
  description: string;
  details: string[];
  accent: string;
  tag: string;
}

// ── Why Choose ───────────────────────────────────────────────

export interface Feature {
  icon: ComponentType;
  title: string;
  description: string;
}

export interface Stat {
  end: number;
  suffix: string;
  label: string;
  duration: number;
}

// ── Contact ──────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type ContactTab = 'call' | 'message';

export interface ContactMethod {
  icon: ComponentType;
  label: string;
  value: string;
  sub: string;
  link: string;
}
