import React from 'react';
import { Camera, ShieldCheck, MapPin, UserCheck } from 'lucide-react';

/**
 * Clearly marked Photo Placeholder with professional psychologist visual styling,
 * fallback support, and clean trust badges.
 */
export default function PhotoPlaceholder({
  src,
  alt = 'Photo Placeholder',
  type = 'simran', // 'simran' | 'clinic' | 'custom'
  label,
  sublabel,
  className = '',
  aspectRatio = 'aspect-[4/5]',
}) {
  const typeConfig = {
    simran: {
      defaultLabel: 'Professional Portrait Slot',
      defaultSublabel: 'Simran Mistry, Psychologist',
      icon: ShieldCheck,
      fallbackSrc: '/assets/images/simran-placeholder.jpg',
      badgeColor: 'bg-primary text-white',
    },
    clinic: {
      defaultLabel: 'Practice Space Slot',
      defaultSublabel: 'Consultation Room, Kothrud, Pune',
      icon: MapPin,
      fallbackSrc: '/assets/images/clinic-placeholder.jpg',
      badgeColor: 'bg-primary-deep text-white',
    },
    custom: {
      defaultLabel: 'Photo Placeholder',
      defaultSublabel: 'Replace with high-res image',
      icon: UserCheck,
      fallbackSrc: '/assets/images/hero-calm-mind.jpg',
      badgeColor: 'bg-ink text-white',
    },
  };

  const currentConfig = typeConfig[type] || typeConfig.custom;
  const imageSrc = src || currentConfig.fallbackSrc;
  const displayLabel = label || currentConfig.defaultLabel;
  const displaySublabel = sublabel || currentConfig.defaultSublabel;
  const IconComponent = currentConfig.icon;

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl border border-primary/20 shadow-soft bg-sand-warm ${aspectRatio} ${className}`}
    >
      {/* Photo / fallback */}
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
      />

      {/* Subtle bottom gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent pointer-events-none" />

      {/* Top Banner Tag: Professional Placeholder tag */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium shadow-sm bg-white/95 text-ink backdrop-blur-md border border-white/60">
          <Camera className="h-3.5 w-3.5 text-primary" />
          <span>{displayLabel}</span>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-accent text-ink shadow-sm">
          Client Photo
        </span>
      </div>

      {/* Bottom Info Ribbon */}
      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/70 shadow-soft pointer-events-none">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
            <IconComponent className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <h4 className="font-heading text-sm font-semibold text-ink truncate">
              {displaySublabel}
            </h4>
            <p className="text-[11px] text-ink-muted truncate">
              Master's in Counselling Psychology • Pune
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
