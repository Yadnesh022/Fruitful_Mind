import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const staticMotionMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  button: motion.button,
  span: motion.span,
  header: motion.header,
  footer: motion.footer,
  nav: motion.nav,
};

/**
 * Reusable LiquidGlass Component
 * Spec:
 * - Backdrop blur + saturate
 * - SVG displacement refraction (with fallback)
 * - Specular edge highlight (inner rim)
 * - Reduced blur on mobile screens
 * - Used strictly on: Floating navbar pill, hero info card, floating WhatsApp, modals
 */
export default function LiquidGlass({
  children,
  className = '',
  variant = 'card', // 'navbar' | 'card' | 'modal' | 'floating' | 'pill'
  interactive = false,
  tint = 'default', // 'default' | 'teal' | 'lavender' | 'sky' | 'yellow' | 'none'
  as = 'div',
  onClick,
  style = {},
  ...props
}) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [supportsDisplacement, setSupportsDisplacement] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check mobile screen for reduced blur performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Detect Chromium for displacement filter support
    const isChromium =
      typeof window !== 'undefined' &&
      !!window.chrome &&
      (!!window.chrome.webstore || !!window.chrome.runtime || navigator.userAgent.indexOf('Chrome') > -1);
    setSupportsDisplacement(isChromium && !isMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  const handleMouseMove = (e) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Variant geometry and padding
  const variantStyles = {
    navbar: 'rounded-full px-5 py-2.5',
    card: 'rounded-2xl p-6 sm:p-7',
    modal: 'rounded-2xl p-6 sm:p-9 shadow-2xl',
    floating: 'rounded-full p-3.5 shadow-lg',
    pill: 'rounded-full px-4 py-1.5 text-xs font-medium',
  };

  // Color tinting adhering to the new psychology practice palette
  const tintStyles = {
    default:
      'bg-white/80 text-ink border-white/80',
    teal:
      'bg-[#D9F0EC]/60 text-ink border-white/70',
    lavender:
      'bg-[#ECE8FB]/65 text-ink border-white/70',
    sky:
      'bg-[#E3F1FA]/65 text-ink border-white/70',
    yellow:
      'bg-[#FFF7DE]/80 text-ink border-white/80',
    none:
      'bg-transparent border-transparent',
  };

  const ComponentTag = staticMotionMap[as] || motion.div;

  return (
    <ComponentTag
      ref={containerRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onClick={onClick}
      whileHover={interactive ? { scale: 1.015, y: -2 } : undefined}
      whileTap={interactive ? { scale: 0.985 } : undefined}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      style={{
        ...style,
        ...(supportsDisplacement
          ? {
              backdropFilter: isMobile
                ? 'blur(6px) saturate(130%)'
                : 'blur(16px) saturate(150%) url(#liquid-glass-subtle)',
              WebkitBackdropFilter: isMobile
                ? 'blur(6px) saturate(130%)'
                : 'blur(16px) saturate(150%)',
            }
          : {
              backdropFilter: isMobile
                ? 'blur(6px) saturate(120%)'
                : 'blur(14px) saturate(140%)',
              WebkitBackdropFilter: isMobile
                ? 'blur(6px) saturate(120%)'
                : 'blur(14px) saturate(140%)',
            }),
      }}
      className={`relative border transition-all duration-300 ${
        isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-md'
      } ${variantStyles[variant] || variantStyles.card} ${
        tintStyles[tint] || tintStyles.default
      } shadow-soft ${className}`}
      {...props}
    >
      {/* Specular Edge Highlight (Inner specular light rim for realistic glass depth) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          boxShadow:
            'inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.85), inset 0 -1px 1px 0 rgba(11, 79, 74, 0.04)',
        }}
        aria-hidden="true"
      />

      {/* Dynamic Sheen highlight on hover if interactive */}
      {interactive && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Content slot */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </ComponentTag>
  );
}
