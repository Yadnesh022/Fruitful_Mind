import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-brand-peach-400 via-brand-plum-500 to-brand-sage-500 shadow-sm"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
