import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Back to top"
          title="Scroll to top"
          className="fixed bottom-36 sm:bottom-24 right-4 sm:right-6 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-teal-primary/30 bg-white/95 text-teal-deep shadow-md hover:bg-teal-primary hover:text-white hover:border-teal-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-primary active:scale-95 cursor-pointer backdrop-blur-sm"
        >
          <ArrowUp className="h-5 w-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
