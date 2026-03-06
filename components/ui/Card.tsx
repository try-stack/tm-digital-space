'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  delay?: number;
}

const Card = ({ 
  children, 
  className = '', 
  hoverable = true,
  delay = 0 
}: CardProps) => {
  return (
    <motion.div
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 ${
        hoverable ? 'hover:shadow-2xl hover:scale-105 cursor-pointer' : ''
      } transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverable ? { y: -10 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;
