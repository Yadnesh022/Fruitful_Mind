import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop and if reduced-motion is not preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReducedMotion || isTouch) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-brand-plum-700 dark:bg-brand-peach-200"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 1.8 : 1,
          opacity: 0.8,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
        style={{ width: 8, height: 8 }}
      />
      {/* Outer subtle ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-brand-peach-400/50 dark:border-brand-peach-300/40"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isPointer ? 1.4 : 1,
          opacity: isPointer ? 0.9 : 0.4,
          borderColor: isPointer ? 'rgba(247, 184, 125, 0.9)' : 'rgba(89, 45, 108, 0.3)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.2 }}
        style={{ width: 36, height: 36 }}
      />
    </>
  );
}
