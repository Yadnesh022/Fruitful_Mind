import React from 'react';

export default function CalmPersonIllustration({ className = 'w-full h-auto max-w-md' }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustration of a calm person in mindful reflection"
    >
      <defs>
        {/* Soft Background Aura Gradient */}
        <radialGradient id="auraGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB627" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#FF7A59" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1FA886" stopOpacity="0" />
        </radialGradient>

        {/* Papaya to Mango Gradient */}
        <linearGradient id="papayaMangoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A59" />
          <stop offset="100%" stopColor="#FFB627" />
        </linearGradient>

        {/* Leaf Deep Gradient */}
        <linearGradient id="leafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F7A62" />
          <stop offset="100%" stopColor="#1FA886" />
        </linearGradient>

        {/* Grape Accent Gradient */}
        <linearGradient id="grapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#5029CA" />
        </linearGradient>

        {/* Soft Shadow Filter */}
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Ambient Aura */}
      <circle cx="250" cy="250" r="210" fill="url(#auraGradient)" />

      {/* Floating Botanical Leaves (Background) */}
      <g opacity="0.85">
        {/* Top Left Leaf */}
        <path
          d="M 110 130 C 80 100 95 60 140 70 C 170 80 160 130 110 130 Z"
          fill="url(#leafGrad)"
          opacity="0.8"
        />
        <path d="M 105 135 Q 125 105 145 70" stroke="#0F7A62" strokeWidth="2" strokeLinecap="round" />

        {/* Top Right Big Palm Leaf */}
        <path
          d="M 370 110 C 420 90 440 140 400 170 C 360 200 340 150 370 110 Z"
          fill="url(#leafGrad)"
          opacity="0.75"
        />
        <path d="M 360 180 Q 380 150 420 100" stroke="#0F7A62" strokeWidth="2" strokeLinecap="round" />

        {/* Bottom Left Tropical Leaf */}
        <path
          d="M 90 340 C 60 380 110 420 140 390 C 170 360 140 310 90 340 Z"
          fill="#1FA886"
          opacity="0.6"
        />
      </g>

      {/* Mindful Ripple Waves radiating from center */}
      <g stroke="#FFB627" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.45">
        <ellipse cx="250" cy="330" rx="140" ry="25" />
        <ellipse cx="250" cy="330" rx="180" ry="35" />
      </g>

      {/* Sitting Person in Lotus / Mindful Rest */}
      {/* Legs & Torso Cushion */}
      <ellipse cx="250" cy="385" rx="115" ry="32" fill="#FFE6DA" opacity="0.9" />

      {/* Crossed Legs Fold */}
      <path
        d="M 160 380 C 180 345 220 355 250 360 C 280 355 320 345 340 380 C 300 405 200 405 160 380 Z"
        fill="url(#grapeGrad)"
      />

      {/* Cozy Sweater / Torso */}
      <path
        d="M 210 240 C 200 280 195 320 205 355 C 235 362 265 362 295 355 C 305 320 300 280 290 240 C 270 232 230 232 210 240 Z"
        fill="url(#papayaMangoGrad)"
      />

      {/* Arms folded in lap holding a warm ceramic cup */}
      <path
        d="M 210 250 Q 185 300 225 330 Q 250 338 275 330 Q 315 300 290 250"
        fill="none"
        stroke="#D9442B"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Warm Tea / Coffee Cup */}
      <g transform="translate(235, 308)">
        <path d="M 6 12 C 6 24 24 24 24 12 Z" fill="#FFF7EE" stroke="#231F2E" strokeWidth="2" />
        <path d="M 24 15 Q 29 15 29 19 Q 29 23 24 23" fill="none" stroke="#231F2E" strokeWidth="1.5" />
        {/* Steam Wisps */}
        <path d="M 12 8 Q 10 3 13 -1" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
        <path d="M 18 9 Q 20 4 17 0" stroke="#FFB627" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
      </g>

      {/* Neck & Face */}
      <path d="M 242 225 L 242 245 C 242 250 258 250 258 245 L 258 225 Z" fill="#FFD7CD" />
      
      {/* Head */}
      <ellipse cx="250" cy="205" rx="26" ry="32" fill="#FFD7CD" />

      {/* Hair - Soft Bun / Natural Flow */}
      <path
        d="M 224 205 C 220 165 260 155 276 175 C 285 188 280 215 274 218 C 265 195 235 195 224 205 Z"
        fill="#231F2E"
      />
      <circle cx="268" cy="160" r="14" fill="#231F2E" />

      {/* Peaceful Closed Eyes & Gentle Smile */}
      <path d="M 238 206 Q 243 210 248 206" fill="none" stroke="#231F2E" strokeWidth="2" strokeLinecap="round" />
      <path d="M 252 206 Q 257 210 262 206" fill="none" stroke="#231F2E" strokeWidth="2" strokeLinecap="round" />
      <path d="M 247 220 Q 250 223 253 220" fill="none" stroke="#D9442B" strokeWidth="2" strokeLinecap="round" />

      {/* Floating Sparkles & Curious Thought Bubbles */}
      <g>
        {/* Star Sparkle Top Left */}
        <path
          d="M 175 160 Q 185 160 185 150 Q 185 160 195 160 Q 185 160 185 170 Q 185 160 175 160 Z"
          fill="#FFB627"
        />

        {/* Star Sparkle Top Right */}
        <path
          d="M 320 180 Q 330 180 330 170 Q 330 180 340 180 Q 330 180 330 190 Q 330 180 320 180 Z"
          fill="#FF7A59"
        />

        {/* Heart Bubble */}
        <g transform="translate(305, 125)">
          <circle cx="16" cy="16" r="16" fill="#FFF7EE" stroke="#FF7A59" strokeWidth="1.5" />
          <path
            d="M 16 22 C 12 18 9 15 9 13 C 9 11 10.5 9.5 12.5 9.5 C 14 9.5 15.2 10.5 16 11.2 C 16.8 10.5 18 9.5 19.5 9.5 C 21.5 9.5 23 11 23 13 C 23 15 20 18 16 22 Z"
            fill="#FF7A59"
          />
        </g>

        {/* Blooming Leaf from Mind */}
        <g transform="translate(165, 195) rotate(-20)">
          <circle cx="14" cy="14" r="14" fill="#FFF7EE" stroke="#1FA886" strokeWidth="1.5" />
          <path
            d="M 10 18 C 10 13 18 10 18 10 C 18 10 18 18 10 18 Z"
            fill="#1FA886"
          />
        </g>
      </g>
    </svg>
  );
}
