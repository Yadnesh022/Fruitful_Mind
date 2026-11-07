import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Static motion components map to avoid recreating components during render
const staticMotionMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  button: motion.button,
  span: motion.span,
  header: motion.header,
  footer: motion.footer,
};

/**
 * LiquidGlass Component (Apple-Style Refractive Frosted Glass)
 * Provides specular edge highlights, pointer-tracking sheen, inner rim lighting,
 * and robust focus retention for inner inputs and forms.
 */
export default function LiquidGlass({
  children,
  className = '',
  variant = 'card', // 'card' | 'pill' | 'button' | 'hero' | 'panel'
  interactive = true,
  onClick,
  as = 'div',
  tint = 'default', // 'default' | 'peach' | 'plum' | 'sage' | 'none'
  overflow = 'hidden', // 'hidden' | 'visible'
  style = {},
  ...props
}) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [supportsDisplacement, setSupportsDisplacement] = useState(false);

  useEffect(() => {
    // Detect Chromium for displacement filter support
    const isChromium =
      typeof window !== 'undefined' &&
      !!window.chrome &&
      (!!window.chrome.webstore || !!window.chrome.runtime || navigator.userAgent.indexOf('Chrome') > -1);
    setSupportsDisplacement(isChromium);
  }, []);

  const handleMouseMove = (e) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Variant base styles
  const variantStyles = {
    card: 'rounded-2xl p-6 sm:p-8',
    pill: 'rounded-full px-4 sm:px-6 py-2.5',
    button: 'rounded-full px-6 py-3 font-medium text-sm sm:text-base inline-flex items-center justify-center cursor-pointer',
    hero: 'rounded-3xl p-8 sm:p-12',
    panel: 'rounded-2xl p-6',
  };

  // Color tint overlays to maintain high contrast (WCAG AA)
  const tintStyles = {
    default: 'bg-white/65 dark:bg-brand-canvas-darkCard/75 text-brand-plum-950 dark:text-brand-plum-50',
    peach: 'bg-gradient-to-br from-brand-peach-100/50 via-white/55 to-brand-peach-50/40 dark:from-brand-peach-900/20 dark:via-brand-canvas-darkCard/70 dark:to-brand-plum-950/40 text-brand-plum-950 dark:text-white',
    plum: 'bg-brand-plum-700/90 text-white shadow-brand-plum-800/30',
    sage: 'bg-gradient-to-br from-brand-sage-100/60 via-white/55 to-brand-sage-50/30 dark:from-brand-sage-900/20 dark:via-brand-canvas-darkCard/70 dark:to-brand-canvas-dark/40 text-brand-plum-950 dark:text-white',
    none: 'bg-white/35 dark:bg-brand-canvas-darkCard/40',
  };

  // Statically pick component from map so React never unmounts children
  const ComponentTag = staticMotionMap[as] || motion.div;

  const isOverflowVisible = overflow === 'visible' || className.includes('overflow-visible');
  const overflowClass = isOverflowVisible ? 'overflow-visible' : 'overflow-hidden';

  return (
    <ComponentTag
      ref={containerRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseEnter={interactive ? () => setIsHovered(true) : undefined}
      onMouseLeave={
        interactive
          ? () => {
              setIsHovered(false);
              setMousePos({ x: 50, y: 50 });
            }
          : undefined
      }
      onClick={onClick}
      whileHover={interactive ? { scale: 1.012, y: -1 } : undefined}
      whileTap={interactive ? { scale: 0.988 } : undefined}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      style={{
        ...style,
        backdropFilter: supportsDisplacement
          ? 'blur(16px) saturate(170%) url(#liquid-glass-subtle)'
          : 'blur(16px) saturate(160%)',
        WebkitBackdropFilter: 'blur(16px) saturate(160%)',
      }}
      className={`
        relative ${overflowClass}
        border border-white/50 dark:border-white/10
        shadow-[0_8px_30px_rgb(89,45,108,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)]
        transition-all duration-300
        ${variantStyles[variant] || ''}
        ${tintStyles[tint] || tintStyles.default}
        ${className}
      `}
      {...props}
    >
      {/* Specular Highlight along top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent"
        aria-hidden="true"
      />

      {/* Pointer-Follow Light Sweep (radial sheen) */}
      {interactive && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.4), transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Inner Chromatic Rim Light */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-1px_1px_rgba(89,45,108,0.08)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.4)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </ComponentTag>
  );
}
