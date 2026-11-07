import React from 'react';
import { Camera, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

/**
 * Clearly marked Photo Placeholder with professional visual styling,
 * fallback support, and explicit client guidance tags.
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
      defaultLabel: 'Client Photo Placeholder',
      defaultSublabel: 'Simran Mistry, Psychologist',
      icon: ShieldCheck,
      fallbackSrc: '/assets/images/simran-placeholder.jpg',
      badgeColor: 'bg-papaya text-white',
    },
    clinic: {
      defaultLabel: 'Client Photo Placeholder',
      defaultSublabel: 'Clinic & Counselling Space, Kothrud Pune',
      icon: MapPin,
      fallbackSrc: '/assets/images/clinic-placeholder.jpg',
      badgeColor: 'bg-leaf-deep text-white',
    },
    custom: {
      defaultLabel: 'Photo Placeholder',
      defaultSublabel: 'Replace with original client photo',
      icon: Camera,
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
      className={`relative group overflow-hidden rounded-3xl border-2 border-dashed border-papaya/40 dark:border-white/20 shadow-xl bg-gradient-to-br from-[#FFE6DA]/40 via-white/60 to-[#FFF7EE]/30 dark:from-white/5 dark:to-transparent ${aspectRatio} ${className}`}
    >
      {/* Actual photo / fallback */}
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Frosted Glass Overlay with Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none" />

      {/* Top Banner Tag: Prominently Marks Placeholder for Client */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold shadow-md bg-white/90 text-ink backdrop-blur-md border border-white/60">
          <Camera className="h-3 w-3 text-papaya" />
          <span>{displayLabel}</span>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-papaya/90 text-white backdrop-blur-md">
          <Sparkles className="h-2.5 w-2.5 text-mango" />
          <span>Photo Slot</span>
        </span>
      </div>

      {/* Bottom Info Ribbon */}
      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/85 dark:bg-ink/85 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-lg pointer-events-none">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-papaya/15 text-papaya-deep dark:bg-white/10 dark:text-mango flex items-center justify-center flex-shrink-0">
            <IconComponent className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-bold text-ink dark:text-white leading-tight">
              {displaySublabel}
            </h4>
            <p className="text-[10px] text-muted dark:text-zinc-300">
              High-res professional portrait / clinic photo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
