'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, TrendingUp, Star } from 'lucide-react';
import Card from '../ui/Card';
import type { Project, ProjectCategory } from '@/types';

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const categories: ProjectCategory[] = ['all', 'website', 'ecommerce', 'branding', 'corporate', 'services'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'On Time Pool Service',
      category: 'services',
      industry: 'Pool & Maintenance',
      image: '/images/portfolio/ontimepoolservice.jpg',
      liveUrl: 'https://www.ontimepoolservice.co.za',
      beforeMetrics: { enquiries: '8/month', visibility: 'Low' },
      afterMetrics: { enquiries: '60/month', visibility: 'High' },
      testimonial: 'TM Digital Space built us a site that truly represents our brand. Enquiries have skyrocketed.',
      client: 'On Time Pool Service, Owner',
      tags: ['Website', 'SEO', 'Google Business', 'Responsive']
    },
    {
      id: 2,
      title: 'Swift & Shine Cleaners',
      category: 'services',
      industry: 'Cleaning Services',
      image: '/images/portfolio/swiftandshinecleaners.jpg',
      liveUrl: 'https://www.swiftandshinecleaners.co.za',
      beforeMetrics: { bookings: '12/month', reach: 'Local only' },
      afterMetrics: { bookings: '75/month', reach: 'Regional' },
      testimonial: 'Professional, fast, and delivered exactly what we needed. Our bookings are up massively.',
      client: 'Swift & Shine Cleaners, Owner',
      tags: ['Website', 'Branding', 'SEO', 'WhatsApp Integration']
    },
    {
      id: 3,
      title: 'TechStart Solutions',
      category: 'website',
      industry: 'Technology',
      image: '/images/portfolio/project1.jpg',
      liveUrl: '',
      beforeMetrics: { traffic: '500', engagement: '2%' },
      afterMetrics: { traffic: '5000', engagement: '15%' },
      testimonial: 'TM Digital Space transformed our online presence completely.',
      client: 'John Mbeki, CEO',
      tags: ['Next.js', 'Tailwind', 'SEO']
    },
    {
      id: 4,
      title: 'Urban Fashion Store',
      category: 'ecommerce',
      industry: 'Retail',
      image: '/images/portfolio/project2.jpg',
      liveUrl: '',
      beforeMetrics: { sales: '10k', conversion: '1.5%' },
      afterMetrics: { sales: '50k', conversion: '4.2%' },
      testimonial: 'Our online sales increased by 400% in just 3 months!',
      client: 'Sarah Thompson, Owner',
      tags: ['E-commerce', 'Payment Integration', 'Responsive']
    },
    {
      id: 5,
      title: 'Elite Consulting Group',
      category: 'corporate',
      industry: 'Consulting',
      image: '/images/portfolio/project3.jpg',
      liveUrl: '',
      beforeMetrics: { leads: '20/month', credibility: 'Low' },
      afterMetrics: { leads: '150/month', credibility: 'High' },
      testimonial: 'Professional, modern, and exactly what we needed.',
      client: 'Michael van der Berg, Director',
      tags: ['Corporate', 'CMS', 'Analytics']
    },
    {
      id: 6,
      title: 'Nova Brand Agency',
      category: 'branding',
      industry: 'Marketing',
      image: '/images/portfolio/project5.jpg',
      liveUrl: '',
      beforeMetrics: { recognition: 'Low', consistency: 'Poor' },
      afterMetrics: { recognition: 'High', consistency: 'Excellent' },
      testimonial: 'The rebrand elevated our entire business image.',
      client: 'Thabo Molefe, Creative Director',
      tags: ['Logo Design', 'Brand Guide', 'Digital Assets']
    },
    {
      id: 7,
      title: 'HealthPlus Clinic',
      category: 'website',
      industry: 'Healthcare',
      image: '/images/portfolio/project6.jpg',
      liveUrl: '',
      beforeMetrics: { appointments: '50/month', trust: 'Low' },
      afterMetrics: { appointments: '200/month', trust: 'High' },
      testimonial: 'Patient engagement has never been better.',
      client: 'Dr. Zanele Khumalo, Director',
      tags: ['Healthcare', 'Secure', 'Appointment System']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results from real businesses we&apos;ve helped grow
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-[#006eff] to-[#00d4ff] text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  {/* Project Image / Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 mb-4 rounded-lg overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-50">
                      {project.title.split(' ')[0]}
                    </div>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2"
                        aria-label={`Visit ${project.title} live website`}
                      >
                        <ExternalLink className="w-10 h-10 text-white" />
                        <span className="text-white text-sm font-semibold">Visit Live Site</span>
                      </a>
                    ) : (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ExternalLink className="w-12 h-12 text-white" />
                      </div>
                    )}
                    {project.liveUrl && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse inline-block" />
                        LIVE
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                        {project.industry}
                      </span>
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#006eff] hover:underline mb-3"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {project.liveUrl.replace('https://', '')}
                      </a>
                    )}

                    {/* Before vs After */}
                    <div className="grid grid-cols-2 gap-4 my-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Before</div>
                        {Object.entries(project.beforeMetrics).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <span className="font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">After</div>
                        {Object.entries(project.afterMetrics).map(([key, value]) => (
                          <div key={key} className="text-sm text-green-600 dark:text-green-400">
                            <span className="font-semibold">{value}</span>
                            <TrendingUp className="inline w-4 h-4 ml-1" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mb-4">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                        &ldquo;{project.testimonial}&rdquo;
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        — {project.client}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Want to see similar results for your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#006eff] to-[#00d4ff] text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
