import React from 'react';

/**
 * Organic Wave Divider for gentle, aesthetic section transitions
 */
export default function OrganicWaveDivider({
  fill = '#FFF7EE',
  className = '',
  flip = false,
  variant = 'smooth', // 'smooth' | 'gentle' | 'crest'
}) {
  const paths = {
    smooth: 'M0,48 C150,96 350,0 500,48 C650,96 900,12 1200,64 L1200,120 L0,120 Z',
    gentle: 'M0,32 C220,72 440,12 720,52 C980,88 1120,24 1200,40 L1200,100 L0,100 Z',
    crest: 'M0,64 C240,110 480,20 720,70 C960,115 1100,30 1200,55 L1200,120 L0,120 Z',
  };

  const selectedPath = paths[variant] || paths.smooth;
  const transform = flip ? 'rotate(180deg) scaleX(-1)' : 'none';

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}
      style={{ transform }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-10 sm:h-16 lg:h-20"
        fill={fill}
      >
        <path d={selectedPath} />
      </svg>
    </div>
  );
}
