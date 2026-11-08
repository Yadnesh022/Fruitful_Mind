import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-primary/15 bg-white/80 text-ink shadow-sm backdrop-blur-md transition-all hover:bg-white hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary:bg-white/20 ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      >
        {isDark ? <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" /> : <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-ink" />}
      </motion.div>
    </button>
  );
}
