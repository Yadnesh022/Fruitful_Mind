import React from 'react';

export default function CounsellingSanctuaryIllustration({ className = 'w-full h-auto max-w-md' }) {
  return (
    <svg
      viewBox="0 0 460 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustration of a cozy, welcoming counselling sanctuary"
    >
      <defs>
        <linearGradient id="sanctuaryLamp" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFF1CC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFF7EE" stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="chairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A59" />
          <stop offset="100%" stopColor="#D9442B" />
        </linearGradient>

        <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB627" />
          <stop offset="100%" stopColor="#FF7A59" />
        </linearGradient>

        <linearGradient id="plantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1FA886" />
          <stop offset="100%" stopColor="#0F7A62" />
        </linearGradient>
      </defs>

      {/* Wall Arch Frame */}
      <path
        d="M 60 340 L 60 160 C 60 70 140 30 230 30 C 320 30 400 70 400 160 L 400 340 Z"
        fill="#FFE6DA"
        opacity="0.45"
      />

      {/* Lamp Light Cone */}
      <polygon points="105,70 30,340 180,340" fill="url(#sanctuaryLamp)" />

      {/* Floor Lamp */}
      <path d="M 105 70 L 105 340" stroke="#231F2E" strokeWidth="3" strokeLinecap="round" />
      <path d="M 85 340 L 125 340" stroke="#231F2E" strokeWidth="4" strokeLinecap="round" />
      {/* Lamp Shade */}
      <path d="M 90 70 L 120 70 L 130 95 L 80 95 Z" fill="#FFB627" />

      {/* Cozy Therapy Armchair */}
      <g transform="translate(180, 160)">
        {/* Chair Back Cushion */}
        <rect x="25" y="0" width="110" height="130" rx="28" fill="url(#chairGradient)" />
        {/* Soft Throw Blanket draped */}
        <path
          d="M 100 20 C 105 50 100 90 105 130 C 115 130 125 125 125 100 L 120 20 Z"
          fill="#FFF1CC"
          opacity="0.9"
        />

        {/* Chair Seat */}
        <rect x="15" y="90" width="130" height="40" rx="18" fill="#FF8E75" />

        {/* Left Armrest */}
        <rect x="5" y="60" width="25" height="70" rx="12" fill="#D9442B" />
        {/* Right Armrest */}
        <rect x="130" y="60" width="25" height="70" rx="12" fill="#D9442B" />

        {/* Wooden Legs */}
        <path d="M 28 130 L 18 170" stroke="#231F2E" strokeWidth="5" strokeLinecap="round" />
        <path d="M 132 130 L 142 170" stroke="#231F2E" strokeWidth="5" strokeLinecap="round" />

        {/* Cozy Lumbar Pillow */}
        <ellipse cx="80" cy="95" rx="32" ry="18" fill="#ECE6FF" />
        <path d="M 65 95 Q 80 88 95 95" stroke="#7C5CFF" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Side Table with Hot Tea & Open Journal */}
      <g transform="translate(115, 230)">
        <ellipse cx="35" cy="40" rx="35" ry="10" fill="#FFF7EE" stroke="#231F2E" strokeWidth="2" />
        <path d="M 35 50 L 35 100" stroke="#231F2E" strokeWidth="4" strokeLinecap="round" />
        <path d="M 20 100 L 50 100" stroke="#231F2E" strokeWidth="4" strokeLinecap="round" />

        {/* Ceramic Mug */}
        <rect x="20" y="22" width="14" height="16" rx="4" fill="#FF7A59" />
        <path d="M 34 26 Q 40 26 40 30 Q 40 34 34 34" stroke="#FF7A59" strokeWidth="2" fill="none" />
        {/* Steam */}
        <path d="M 24 16 Q 22 10 25 6" stroke="#D9442B" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Open Journal */}
        <path d="M 35 34 L 50 30 L 55 38 L 40 42 Z" fill="#DDF5EC" stroke="#0F7A62" strokeWidth="1" />
      </g>

      {/* Lush Indoor Monstera Plant in Pot */}
      <g transform="translate(340, 190)">
        {/* Terracotta Plant Pot */}
        <path d="M 15 100 L 65 100 L 55 145 L 25 145 Z" fill="url(#potGrad)" />
        <rect x="10" y="94" width="60" height="10" rx="3" fill="#D9442B" />

        {/* Plant Stems & Monstera Leaves */}
        <path d="M 40 94 Q 20 50 -10 30" stroke="#0F7A62" strokeWidth="3" fill="none" />
        <path
          d="M -10 30 C -40 20 -20 -10 10 10 C 20 30 -5 40 -10 30 Z"
          fill="url(#plantGrad)"
        />

        <path d="M 40 94 Q 50 40 70 10" stroke="#0F7A62" strokeWidth="3" fill="none" />
        <path
          d="M 70 10 C 100 -5 90 35 65 40 C 45 40 55 20 70 10 Z"
          fill="url(#plantGrad)"
        />

        <path d="M 40 94 Q 30 70 0 65" stroke="#0F7A62" strokeWidth="2.5" fill="none" />
        <path
          d="M 0 65 C -20 55 -15 80 5 80 C 15 80 10 70 0 65 Z"
          fill="url(#plantGrad)"
        />
      </g>

      {/* Floating Sparkles of Safety and Warmth */}
      <path
        d="M 160 120 Q 160 128 168 128 Q 160 128 160 136 Q 160 128 152 128 Q 160 128 160 120 Z"
        fill="#FFB627"
      />
      <circle cx="280" cy="80" r="3" fill="#1FA886" />
      <circle cx="370" cy="130" r="4" fill="#FF7A59" opacity="0.7" />
    </svg>
  );
}
