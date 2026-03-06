'use client';

import { motion } from 'framer-motion';
import { Search, Layout, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We deep-dive into your goals, audience, and market to shape a winning digital strategy.',
    details: ['Business goals analysis', 'Competitor research', 'Audience profiling', 'Strategy workshop'],
    accent: '#006eff',
    tag: 'Day 1–2',
  },
  {
    icon: Layout,
    number: '02',
    title: 'Wireframe & Design',
    description: 'Strategy becomes stunning visuals — custom-designed to reflect your brand and maximise conversions.',
    details: ['Wireframing & prototyping', 'UI/UX design', 'Brand integration', 'Feedback & iteration'],
    accent: '#7c3aed',
    tag: 'Day 3–5',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Development & Optimisation',
    description: 'Clean code, modern tech, and performance tuning built for speed, SEO, and scale.',
    details: ['Frontend development', 'Backend integration', 'Performance optimisation', 'QA testing'],
    accent: '#f97316',
    tag: 'Day 6–11',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Ongoing Support',
    description: 'Seamless deployment with training, docs, and dedicated support so you keep growing.',
    details: ['Staging & testing', 'Production deployment', 'Training & documentation', 'Maintenance & support'],
    accent: '#10b981',
    tag: 'Day 12–14',
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      aria-label="Our Process"
      className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #006eff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#006eff] mb-3">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A proven 4-step methodology — from first conversation to launch and beyond.
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="relative">

          {/* Vertical connector line — desktop */}
          <div className="hidden md:block absolute left-[2.6rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#006eff]/20 via-[#7c3aed]/20 via-[#f97316]/20 to-[#10b981]/20" />

          <div className="space-y-6 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <motion.div
                  key={index}
                  className="relative flex gap-6 md:gap-10"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  {/* Left: icon node + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* Icon circle */}
                    <motion.div
                      className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${step.accent}22, ${step.accent}44)`, border: `1.5px solid ${step.accent}55` }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.accent }} strokeWidth={2} />
                      {/* Step number chip */}
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-black text-white flex items-center justify-center shadow"
                        style={{ background: step.accent }}
                      >
                        {index + 1}
                      </div>
                    </motion.div>

                    {/* Connector line segment */}
                    {!isLast && (
                      <motion.div
                        className="hidden md:block flex-1 w-px mt-3"
                        style={{ background: `linear-gradient(to bottom, ${step.accent}40, transparent)` }}
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
                      />
                    )}
                  </div>

                  {/* Right: card */}
                  <div className={`flex-1 pb-10 md:pb-14 ${isLast ? 'pb-0 md:pb-0' : ''}`}>
                    <motion.div
                      className="group relative bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-6 md:p-8 hover:border-transparent transition-all duration-300 hover:shadow-xl"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Hover glow border */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ boxShadow: `0 0 0 1.5px ${step.accent}55, 0 8px 32px ${step.accent}18` }}
                      />

                      {/* Card header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <span
                          className="text-[11px] font-bold px-3 py-1 rounded-full flex-shrink-0"
                          style={{ background: `${step.accent}18`, color: step.accent }}
                        >
                          {step.tag}
                        </span>
                      </div>

                      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Detail pills */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-300"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-[#006eff] to-[#7c3aed] shadow-2xl shadow-blue-500/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg">Ready to kick off your project?</p>
            <p className="text-blue-100 text-sm mt-0.5">Most projects go live within 2 weeks.</p>
          </div>
          <motion.a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white font-bold text-[#006eff] text-sm shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;
