'use client';

import { useLayoutEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    // Initialize theme from storage on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    // Apply theme to DOM
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update state in a separate task to avoid synchronous setState in effect
    Promise.resolve().then(() => {
      setIsDark(shouldBeDark);
      setMounted(true);
    });
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      className="fixed top-24 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-slate-700" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
