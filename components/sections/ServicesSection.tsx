'use client';

import { motion } from 'framer-motion';
import { Globe, Palette, Mail, MapPin, Code, Zap, Shield, TrendingUp, ArrowRight, Flame } from 'lucide-react';
import Card from '../ui/Card';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Blazing-fast, mobile-first websites built to rank on Google and turn visitors into paying clients.',
      features: [
        'Custom responsive design',
        'SEO-ready structure',
        'Performance optimization',
        'E-commerce capability',
        'Advanced UI/UX animation'
      ],
      color: 'from-blue-500 to-cyan-500',
      link: '#contact',
      popular: true,
      cta: 'Start Your Website',
      priceFrom: 'From R2,500',
    },
    {
      icon: Palette,
      title: 'Logo & Brand Identity',
      description: 'A brand that commands attention — custom logo, colour system, and guidelines your business owns forever.',
      features: [
        'Custom logo design',
        'Brand color systems',
        'Typography guide',
        'Social media brand kit'
      ],
      color: 'from-purple-500 to-pink-500',
      link: '#contact',
      popular: false,
      cta: 'Build My Brand',
      priceFrom: 'From R1,999',
    },
    {
      icon: Mail,
      title: 'Business Email Setup',
      description: 'Look the part. Domain email (you@yourbusiness.co.za) on Microsoft 365 or Google Workspace, fully set up.',
      features: [
        'Domain-based email',
        'Microsoft 365 / Google Workspace',
        'Email configuration support',
        'Migration assistance'
      ],
      color: 'from-orange-500 to-red-500',
      link: '#contact',
      popular: false,
      cta: 'Set Up Email',
      priceFrom: 'From R499',
    },
    {
      icon: MapPin,
      title: 'Google Business Profile',
      description: 'Get discovered by Cape Town customers searching right now — we set up, verify, and optimise your listing.',
      features: [
        'Setup & verification',
        'SEO optimization',
        'Review strategy',
        'Ongoing profile management'
      ],
      color: 'from-green-500 to-emerald-500',
      link: '#contact',
      popular: false,
      cta: 'Get Found on Google',
      priceFrom: 'From R999',
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions for unique business needs'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites that convert'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Ongoing protection and updates'
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description: 'Data-driven growth planning'
    }
  ];

  return (
    <section id="services" aria-label="Our Services" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We <span className="gradient-text">Do Best</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything a Cape Town business needs to look professional, rank on Google, and grow.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Most Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3.5 left-6 z-10">
                    <motion.div
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg,#ff3d71,#ff8c42)' }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Flame className="w-3.5 h-3.5" />
                      Most Popular
                    </motion.div>
                  </div>
                )}

                <Card
                  className={`h-full group ${
                    service.popular
                      ? 'ring-2 ring-[#006eff]/60 shadow-[0_0_32px_rgba(0,110,255,0.15)]'
                      : ''
                  }`}
                  hoverable
                >
                  <div className="flex flex-col h-full">
                    {/* Icon + price row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {service.priceFrom}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-5 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <motion.div
                            className="flex items-start text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
                          >
                            <span className="text-[#006eff] mr-2 font-bold">✓</span>
                            <span>{feature}</span>
                          </motion.div>
                        </li>
                      ))}
                    </ul>

                    {/* Service CTA button */}
                    <motion.a
                      href={service.link}
                      className={`inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-bold text-sm transition-all duration-200 ${
                        service.popular
                          ? 'bg-gradient-to-r from-[#006eff] to-[#00d4ff] text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'
                          : 'border-2 border-[#006eff]/30 text-[#006eff] hover:bg-[#006eff] hover:text-white dark:border-[#006eff]/40 dark:hover:bg-[#006eff]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-center mb-5">
            Additional <span className="gradient-text">Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-[#006eff]" />
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Bottom conversion CTA ───────────────────────────────── */}
        <motion.div
          className="mt-10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative p-6 md:p-8 text-center services-cta-gradient"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#006eff]/10 via-[#00d4ff]/5 to-[#006eff]/10 pointer-events-none" />

          <p className="text-[#00d4ff] text-sm font-bold tracking-widest uppercase mb-3">Not sure where to start?</p>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Get a Free Digital Audit — We&apos;ll Map Out Exactly What You Need
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              30-minute call, zero pressure. We assess your current digital footprint and recommend the highest-ROI next steps for your Cape Town business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white"
                style={{ background: 'linear-gradient(135deg,#006eff,#00d4ff)', boxShadow: '0 6px 24px rgba(0,110,255,0.4)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,110,255,0.6)' }}
                whileTap={{ scale: 0.97 }}
              >
                Book Free Audit
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/2762529952"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
