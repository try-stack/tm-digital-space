'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button = ({
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false,
  onClick,
  href,
  className = ''
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#006eff] to-[#00d4ff] text-white hover:shadow-2xl hover:shadow-blue-500/50',
    secondary: 'bg-[#ff3d71] text-white hover:shadow-2xl hover:shadow-pink-500/50',
    outline: 'border-2 border-[#006eff] text-[#006eff] hover:bg-[#006eff] hover:text-white',
    ghost: 'text-[#006eff] hover:bg-[#006eff]/10'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
