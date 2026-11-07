import React from 'react';
import { motion } from 'framer-motion';

/**
 * Papaya fruit slice doodle with seed details
 */
export function PapayaDoodle({ className = 'w-12 h-12' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="papayaRind" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1FA886" />
          <stop offset="40%" stopColor="#FFB627" />
          <stop offset="100%" stopColor="#FF7A59" />
        </linearGradient>
        <linearGradient id="papayaFlesh" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB627" />
          <stop offset="60%" stopColor="#FF7A59" />
          <stop offset="100%" stopColor="#D9442B" />
        </linearGradient>
      </defs>
      {/* Outer Rind */}
      <path
        d="M 50 10 C 75 10 90 35 85 65 C 80 88 65 92 50 92 C 35 92 20 88 15 65 C 10 35 25 10 50 10 Z"
        fill="url(#papayaRind)"
      />
      {/* Juicy Flesh */}
      <path
        d="M 50 18 C 70 18 80 38 76 65 C 72 82 60 85 50 85 C 40 85 28 82 24 65 C 20 38 30 18 50 18 Z"
        fill="url(#papayaFlesh)"
      />
      {/* Seed Cavity */}
      <ellipse cx="50" cy="56" rx="14" ry="22" fill="#FFE6DA" opacity="0.9" />
      {/* Shiny Black Seeds */}
      <circle cx="48" cy="45" r="2.5" fill="#231F2E" />
      <circle cx="53" cy="48" r="2.2" fill="#231F2E" />
      <circle cx="47" cy="53" r="2.6" fill="#231F2E" />
      <circle cx="52" cy="56" r="2.4" fill="#231F2E" />
      <circle cx="48" cy="62" r="2.2" fill="#231F2E" />
      <circle cx="53" cy="65" r="2.5" fill="#231F2E" />
      <circle cx="50" cy="70" r="2" fill="#231F2E" />
    </svg>
  );
}

/**
 * Ripe mango doodle
 */
export function MangoDoodle({ className = 'w-12 h-12' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mangoFruitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1FA886" />
          <stop offset="30%" stopColor="#FFB627" />
          <stop offset="85%" stopColor="#FF7A59" />
          <stop offset="100%" stopColor="#D9442B" />
        </linearGradient>
      </defs>
      {/* Mango curved silhouette */}
      <path
        d="M 45 15 C 65 15 85 30 85 55 C 85 80 65 92 48 90 C 25 88 18 68 22 45 C 25 25 35 15 45 15 Z"
        fill="url(#mangoFruitGrad)"
      />
      {/* Stem & Leaf */}
      <path d="M 45 15 Q 43 5 40 2" stroke="#0F7A62" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M 42 8 C 30 6 25 15 30 20 C 38 22 42 14 42 8 Z"
        fill="#1FA886"
      />
    </svg>
  );
}

/**
 * Botanical Leaf Sprig
 */
export function LeafDoodle({ className = 'w-10 h-10', color = '#1FA886' }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M 15 65 Q 40 40 65 15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 65 15 C 45 15 40 35 48 42 C 55 40 65 30 65 15 Z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M 38 42 C 22 38 24 55 32 58 C 38 54 42 46 38 42 Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Warm Tea Cup Doodle
 */
export function TeaCupDoodle({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="20" y="32" width="34" height="32" rx="10" fill="#FFF7EE" stroke="#FF7A59" strokeWidth="2.5" />
      <path d="M 54 40 Q 64 40 64 48 Q 64 56 54 56" stroke="#FF7A59" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="37" cy="64" rx="24" ry="4" fill="#FFE6DA" />
      {/* Steam */}
      <path d="M 30 24 Q 28 16 32 10" stroke="#FFB627" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 40 25 Q 42 17 38 11" stroke="#FF7A59" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/**
 * Tangled Mind to Clarity Doodle
 */
export function UntangleDoodle({ className = 'w-24 h-12' }) {
  return (
    <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Tangled knot on the left */}
      <path
        d="M 15 35 C 10 20 30 15 25 35 C 20 48 40 45 35 25 C 30 10 50 15 45 38 C 40 50 60 40 65 30 C 75 18 90 32 105 30 L 150 30"
        stroke="#FF7A59"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Sparkle of clarity at end */}
      <path
        d="M 150 30 Q 150 24 154 24 Q 150 24 150 18 Q 150 24 146 24 Q 150 24 150 30 Z"
        fill="#FFB627"
      />
    </svg>
  );
}

/**
 * Floating decorative element wrapper with gentle bobbing parallax animation
 */
export function FloatingElement({
  children,
  className = '',
  duration = 6,
  delay = 0,
  yOffset = 15,
  xOffset = 0,
  rotate = 5,
}) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        x: [-xOffset, xOffset, -xOffset],
        rotate: [-rotate, rotate, -rotate],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}
