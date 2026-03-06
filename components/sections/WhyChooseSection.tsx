'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Layers, Smartphone, Headphones, Award, TrendingUp } from 'lucide-react';

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const features = [
    {
      icon: Zap,
      title: 'Performance-Driven Builds',
      description: 'Lightning-fast websites optimized for speed and conversions'
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, from startup to enterprise'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive designs that look perfect on every device'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimized',
      description: 'Built for visibility and search engine success'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Clean, modern UI/UX that impresses and converts'
    },
    {
      icon: Headphones,
      title: 'Long-Term Support',
      description: 'Ongoing maintenance and dedicated support when you need it'
    }
  ];

  const stats = [
    { end: 30, suffix: '+', label: 'Projects Completed', duration: 2000 },
    { end: 20, suffix: '+', label: 'Businesses Served', duration: 2200 },
    { end: 3, suffix: '+', label: 'Years Experience', duration: 1800 },
    { end: 99, suffix: '%', label: 'Client Satisfaction', duration: 2500 }
  ];

  return (
    <section id="why-choose" aria-label="Why Choose TM Digital Space" ref={sectionRef} className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">TM Digital Space?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just build websites — we build digital foundations for success
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              duration={stat.duration}
              isInView={isInView}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#006eff] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#006eff] to-[#00d4ff] flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Join dozens of businesses that have transformed their digital presence with us
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Animated Counter Component
interface AnimatedCounterProps {
  end: number;
  suffix: string;
  label: string;
  duration: number;
  isInView: boolean;
  delay: number;
}

const AnimatedCounter = ({
  end,
  suffix,
  label,
  duration,
  isInView,
  delay
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, end, duration, delay]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </motion.div>
  );
};

export default WhyChooseSection;
