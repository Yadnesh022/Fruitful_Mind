import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../../assets/logo.png';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sand-warm px-4"
        >
          {/* Subtle calm aura */}
          <div className="absolute h-64 w-64 rounded-full bg-primary-tint/60 blur-3xl" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full p-2 bg-white shadow-soft border border-primary/10">
              <img
                src={logoImg}
                alt="Fruitful Mind Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <motion.h2
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-4 font-heading text-2xl font-bold tracking-tight text-ink"
            >
              Fruitful Mind
            </motion.h2>

            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-1 text-xs sm:text-sm font-medium tracking-wide text-primary"
            >
              "Discover The Curious You"
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.25, duration: 0.6, ease: 'easeInOut' }}
              className="mt-5 h-1 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
