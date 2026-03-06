'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Mbeki',
      role: 'CEO, TechStart Solutions',
      company: 'Technology',
      image: '/images/testimonials/john.jpg',
      rating: 5,
      text: 'TM Digital Space transformed our online presence completely. Our website traffic increased by 900% in just three months, and the design is absolutely stunning. Their team is professional, responsive, and truly understands business needs.',
      results: 'Traffic +900%, Leads +350%'
    },
    {
      name: 'Sarah Thompson',
      role: 'Owner, Urban Fashion Store',
      company: 'E-commerce',
      image: '/images/testimonials/sarah.jpg',
      rating: 5,
      text: 'Working with TM Digital Space was the best decision we made for our business. Our online sales increased by 400% in just 3 months! The team delivered a beautiful, fast e-commerce site that our customers love.',
      results: 'Sales +400%, Conversion +280%'
    },
    {
      name: 'Michael van der Berg',
      role: 'Director, Elite Consulting',
      company: 'Consulting',
      image: '/images/testimonials/michael.jpg',
      rating: 5,
      text: 'Professional, modern, and exactly what we needed. The website positions us as the premium consulting firm we are. Lead generation has increased dramatically, and client feedback has been outstanding.',
      results: 'Leads +650%, Brand Authority up'
    },
  ];

  return (
    <section id="testimonials" aria-label="Client Testimonials" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from businesses we&apos;ve helped grow
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-[#006eff]" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Results Badge */}
                <div className="mb-6 inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                    {testimonial.results}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center border-t border-gray-200 dark:border-gray-700 pt-6">
                  {/* Avatar */}
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 ring-2 ring-[#006eff]/20">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white font-bold text-sm">
                      {testimonial.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ── Marquee trust strip ──────────────────────────────────── */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-8">
            Trusted by businesses across South Africa
          </p>

          {/* Outer mask */}
          <div
            className="relative overflow-hidden marquee-fade-mask"
          >
            {/* Row 1 — left scroll */}
            <div className="flex gap-6 mb-4 select-none marquee-row-left">
              {[...Array(2)].flatMap(() => [
                '\uD83D\uDCBB Web Design', '\uD83C\uDFA8 Branding', '\uD83D\uDCE7 Business Email',
                '\uD83D\uDCCD Google Maps', '\uD83D\uDECD\uFE0F E-commerce', '\uD83D\uDCCA SEO Optimization',
                '\uD83C\uDFE5 Healthcare', '\uD83C\uDFE8 Hospitality', '\uD83D\uDCBC Consulting', '\uD83D\uDECD\uFE0F Retail'
              ]).map((item, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Row 2 — right scroll */}
            <div className="flex gap-6 select-none marquee-row-right">
              {[...Array(2)].flatMap(() => [
                '\uD83C\uDF93 Education', '\uD83C\uDFD7\uFE0F Construction', '\uD83D\uDE97 Automotive', '\uD83D\uDC88 Beauty & Wellness',
                '\uD83C\uDFC6 Award-winning Design', '\uD83D\uDE80 Fast Delivery', '\u2B50 5-Star Rated', '\uD83C\uDDF8\uD83C\uDDE6 South Africa'
              ]).map((item, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold text-[#006eff] bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mini CTA ───────────────────────────────────────── */}
        <motion.div
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-[#006eff]/20 bg-gradient-to-r from-blue-50/60 to-cyan-50/60 dark:from-blue-950/30 dark:to-cyan-950/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left: social proof micro-row */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {['JM', 'ST', 'MB', 'LN', 'TM'].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                20+ businesses are already growing with us
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <motion.a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white"
            style={{ background: 'linear-gradient(135deg,#006eff,#00d4ff)', boxShadow: '0 4px 20px rgba(0,110,255,0.35)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
