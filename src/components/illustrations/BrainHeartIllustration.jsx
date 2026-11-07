import React from 'react';

export default function BrainHeartIllustration({ className = 'w-full h-auto max-w-sm' }) {
  return (
    <svg
      viewBox="0 0 400 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustration representing psychology and compassion (brain and heart in balance)"
    >
      <defs>
        <linearGradient id="bhPapaya" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A59" />
          <stop offset="100%" stopColor="#D9442B" />
        </linearGradient>

        <linearGradient id="bhMango" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB627" />
          <stop offset="100%" stopColor="#FF7A59" />
        </linearGradient>

        <linearGradient id="bhLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1FA886" />
          <stop offset="100%" stopColor="#0F7A62" />
        </linearGradient>

        <linearGradient id="bhGrape" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#5029CA" />
        </linearGradient>
      </defs>

      {/* Background Soft Glow Rings */}
      <circle cx="200" cy="180" r="140" fill="#FFF1CC" opacity="0.35" />
      <circle cx="200" cy="180" r="105" fill="#FFE6DA" opacity="0.5" />

      {/* Intertwined Ribbon of Thought to Emotion */}
      <path
        d="M 120 180 C 120 120 180 100 200 160 C 220 220 280 200 280 140"
        fill="none"
        stroke="url(#bhMango)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="4 8"
      />

      {/* Left Hemisphere: Creative Botanical Brain */}
      <g transform="translate(70, 70)">
        {/* Brain lobe curves */}
        <path
          d="M 110 50 C 95 30 65 35 55 55 C 35 55 25 80 35 100 C 15 115 20 145 40 155 C 30 175 55 195 80 185 C 95 195 120 185 125 170 C 130 130 130 80 110 50 Z"
          fill="url(#bhGrape)"
          opacity="0.9"
        />

        {/* Brain sulci / thought patterns */}
        <path
          d="M 60 70 Q 85 85 75 110 Q 95 120 85 150"
          stroke="#ECE6FF"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 95 70 Q 110 95 100 130"
          stroke="#ECE6FF"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sprouting leaf of growth */}
        <path
          d="M 50 40 C 40 20 60 10 70 25 C 80 40 60 50 50 40 Z"
          fill="url(#bhLeaf)"
        />
        <circle cx="70" cy="20" r="3" fill="#FFB627" />
      </g>

      {/* Right Hemisphere: Blooming Warm Heart */}
      <g transform="translate(190, 70)">
        {/* Heart lobe curve */}
        <path
          d="M 15 170 C 20 185 45 195 60 185 C 85 195 110 175 100 155 C 120 145 125 115 105 100 C 115 80 105 55 85 55 C 75 35 45 30 30 50 C 10 80 10 130 15 170 Z"
          fill="url(#bhPapaya)"
        />

        {/* Inner radiant heart core */}
        <path
          d="M 30 120 C 45 100 75 100 80 125 C 85 150 40 170 30 180"
          stroke="#FFE6DA"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Flourishing Flower */}
        <g transform="translate(75, 30)">
          <circle cx="15" cy="15" r="7" fill="#FFB627" />
          <path d="M 15 8 Q 11 0 15 -5 Q 19 0 15 8" fill="#1FA886" />
          <path d="M 22 15 Q 30 11 35 15 Q 30 19 22 15" fill="#1FA886" />
        </g>
      </g>

      {/* Central Sparkle Star of Discovery & Insight */}
      <g transform="translate(200, 160)">
        <path
          d="M 0 -16 Q 0 0 16 0 Q 0 0 0 16 Q 0 0 -16 0 Q 0 0 0 -16 Z"
          fill="#FFB627"
        />
        <circle cx="0" cy="0" r="3" fill="#FFF7EE" />
      </g>

      {/* Floating Sparkles & Compass Points */}
      <path
        d="M 90 270 Q 90 280 100 280 Q 90 280 90 290 Q 90 280 80 280 Q 90 280 90 270 Z"
        fill="#1FA886"
      />
      <path
        d="M 310 260 Q 310 270 320 270 Q 310 270 310 280 Q 310 270 300 270 Q 310 270 310 260 Z"
        fill="#FF7A59"
      />
      <circle cx="200" cy="300" r="4" fill="#7C5CFF" opacity="0.6" />
    </svg>
  );
}
