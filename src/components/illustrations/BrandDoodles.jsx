import React from 'react';
import { motion } from 'framer-motion';

/**
 * Psychology SVGs & Abstract Mind-Themed Shapes
 * Minimal, geometric, and brand-aligned (Teal #12766E, Sunshine Yellow #FFC845, Lavender #8C7AE6)
 * Replaces all fruit/salon decorations with psychology-grounded visual metaphors.
 */

/**
 * Tangled-to-Straight Line: Overthinking untangling into clarity
 */
export function TangledLineDoodle({ className = 'w-16 h-8' }) {
  return (
    <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Tangled knot start */}
      <path
        d="M 10 25 C 20 5, 25 45, 35 20 C 45 -5, 50 50, 60 15 C 68 -2, 72 40, 85 25 C 95 12, 105 32, 115 25 L 155 25"
        stroke="#12766E"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Yellow insight dot at the straight end */}
      <circle cx="155" cy="25" r="4" fill="#FFC845" />
    </svg>
  );
}

/**
 * Thought Cloud / Thought Bubble: Gentle, rounded geometric mind cloud
 */
export function ThoughtCloudDoodle({ className = 'w-12 h-12', color = '#12766E' }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M 18 36 H 42 C 48 36, 52 31, 52 26 C 52 21, 47 17, 43 17 C 42 11, 36 6, 29 6 C 23 6, 17 10, 16 16 C 10 17, 7 21, 7 26 C 7 31, 12 36, 18 36 Z"
        fill="currentColor"
        className="opacity-15 text-primary"
      />
      <path
        d="M 18 36 H 42 C 48 36, 52 31, 52 26 C 52 21, 47 17, 43 17 C 42 11, 36 6, 29 6 C 23 6, 17 10, 16 16 C 10 17, 7 21, 7 26 C 7 31, 12 36, 18 36 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
      {/* Trailing dots */}
      <circle cx="14" cy="42" r="2.5" fill="currentColor" className="text-secondary" />
      <circle cx="10" cy="46" r="1.5" fill="currentColor" className="text-accent" />
    </svg>
  );
}

/**
 * Battery: Emotional energy & stress regulation
 */
export function BatteryDoodle({ className = 'w-10 h-10', level = 'balanced' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="12" y="18" width="38" height="28" rx="6" stroke="#12766E" strokeWidth="2.8" />
      <path d="M 54 27 V 37" stroke="#12766E" strokeWidth="3" strokeLinecap="round" />
      {/* Bars */}
      <rect x="18" y="24" width="7" height="16" rx="2" fill="#12766E" />
      <rect x="28" y="24" width="7" height="16" rx="2" fill="#12766E" />
      <rect x="38" y="24" width="7" height="16" rx="2" fill="#FFC845" />
    </svg>
  );
}

/**
 * Ladder: Self-esteem and steady, incremental growth
 */
export function LadderDoodle({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Rails */}
      <line x1="20" y1="8" x2="16" y2="52" stroke="#12766E" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="40" y1="8" x2="44" y2="52" stroke="#12766E" strokeWidth="2.8" strokeLinecap="round" />
      {/* Rungs */}
      <line x1="19" y1="18" x2="41" y2="18" stroke="#FFC845" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="18" y1="28" x2="42" y2="28" stroke="#12766E" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="17" y1="38" x2="43" y2="38" stroke="#12766E" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="16" y1="48" x2="44" y2="48" stroke="#12766E" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Clock / Gentle Pacing: Procrastination & mindful timing
 */
export function PacingClockDoodle({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="30" cy="30" r="22" stroke="#12766E" strokeWidth="2.8" />
      <path d="M 30 18 V 30 L 38 34" stroke="#FFC845" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="30" cy="30" r="3" fill="#12766E" />
    </svg>
  );
}

/**
 * Compass: Career direction, clarity and values navigation
 */
export function CompassDoodle({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="30" cy="30" r="23" stroke="#12766E" strokeWidth="2.8" />
      {/* North / South pointers */}
      <polygon points="30,12 34,28 30,26 26,28" fill="#FFC845" />
      <polygon points="30,48 34,32 30,34 26,32" fill="#8C7AE6" />
      <circle cx="30" cy="30" r="2.5" fill="#12766E" />
    </svg>
  );
}

/**
 * Brain & Lightbulb: Psychological concepts & cognitive aha moments
 */
export function BrainBulbDoodle({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M 22 28 C 17 25 16 19 20 14 C 23 10 29 10 32 13 C 35 10 41 10 44 14 C 48 19 47 25 42 28 C 40 31 39 34 38 37 H 26 C 25 34 24 31 22 28 Z"
        stroke="#12766E"
        strokeWidth="2.6"
        fill="#D9F0EC"
        fillOpacity="0.4"
      />
      <line x1="27" y1="42" x2="37" y2="42" stroke="#12766E" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="29" y1="46" x2="35" y2="46" stroke="#12766E" strokeWidth="2.2" strokeLinecap="round" />
      {/* Light rays */}
      <line x1="32" y1="4" x2="32" y2="7" stroke="#FFC845" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="10" x2="18" y2="13" stroke="#FFC845" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="10" x2="46" y2="13" stroke="#FFC845" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Floating decorative mind shapes (circles / soft rings)
 */
export function FloatingShape({ shape = 'ring', className = 'w-8 h-8', color = '#12766E', delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {shape === 'ring' && (
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <circle cx="20" cy="20" r="16" stroke={color} strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
        </svg>
      )}
      {shape === 'dots' && (
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <circle cx="10" cy="10" r="2.5" fill={color} opacity="0.5" />
          <circle cx="25" cy="12" r="3" fill="#FFC845" opacity="0.6" />
          <circle cx="18" cy="26" r="2.5" fill="#8C7AE6" opacity="0.5" />
        </svg>
      )}
      {shape === 'circle' && (
        <div
          className="w-full h-full rounded-full opacity-20"
          style={{ backgroundColor: color }}
        />
      )}
    </motion.div>
  );
}

/**
 * Backwards compatibility aliases for previous fruit/salon doodles
 */
export const PapayaDoodle = TangledLineDoodle;
export const MangoDoodle = ThoughtCloudDoodle;
export const LeafDoodle = BrainBulbDoodle;
export const TeaCupDoodle = PacingClockDoodle;
export const UntangleDoodle = TangledLineDoodle;
export const FloatingElement = FloatingShape;
