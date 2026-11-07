import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-canvas-light dark:bg-brand-canvas-dark px-4"
        >
          {/* Ambient glow behind logo */}
          <div className="absolute h-64 w-64 rounded-full bg-brand-peach-200/40 blur-3xl dark:bg-brand-plum-700/30 animate-pulse-subtle" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-3xl p-2">
              <img
                src={logoImg}
                alt="Fruitful Mind Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <motion.h2
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-4 font-heading text-2xl font-bold tracking-tight text-brand-plum-900 dark:text-brand-plum-100 sm:text-3xl"
            >
              Fruitful Mind
            </motion.h2>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-1.5 text-sm font-medium tracking-wide text-brand-plum-600 dark:text-brand-peach-200"
            >
              "Discover The Curious You"
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeInOut' }}
              className="mt-6 h-1 rounded-full bg-gradient-to-r from-brand-peach-400 via-brand-plum-600 to-brand-sage-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
