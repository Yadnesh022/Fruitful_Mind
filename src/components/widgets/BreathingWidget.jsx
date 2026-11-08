import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Play, Pause, RotateCcw, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function BreathingWidget({ className = '' }) {
  const { t } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('Inhale'); // 'Inhale' | 'Hold' | 'Exhale' | 'Rest'
  const [counter, setCounter] = useState(4);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  // Box Breathing cycle: Inhale (4s) -> Hold (4s) -> Exhale (4s) -> Rest (4s)
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) {
            setPhase((curr) => {
              if (curr === 'Inhale') return 'Hold';
              if (curr === 'Hold') return 'Exhale';
              if (curr === 'Exhale') return 'Rest';
              setCyclesCompleted((c) => c + 1);
              return 'Inhale';
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const resetExercise = () => {
    setIsActive(false);
    setPhase('Inhale');
    setCounter(4);
    setCyclesCompleted(0);
  };

  const getPhaseInstruction = () => {
    switch (phase) {
      case 'Inhale':
        return t('breathingWidget.inhale') || 'Inhale slowly through your nose... expanding your chest';
      case 'Hold':
        return t('breathingWidget.hold') || 'Gently hold your breath... resting in stillness';
      case 'Exhale':
        return t('breathingWidget.exhale') || 'Exhale gently and completely through your mouth';
      case 'Rest':
      default:
        return t('breathingWidget.rest') || 'Pause naturally before the next breath begins';
    }
  };

  const getOrbScale = () => {
    if (!isActive) return 1;
    switch (phase) {
      case 'Inhale':
        return 1.3;
      case 'Hold':
        return 1.3;
      case 'Exhale':
        return 0.85;
      case 'Rest':
      default:
        return 0.85;
    }
  };

  return (
    <div
      className={`relative p-8 rounded-2xl bg-white border border-primary/15 text-center shadow-soft ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
          <Wind className="h-3.5 w-3.5 text-primary" />
          <span>{t('breathingWidget.badge') || '1-Minute Pause'}</span>
        </span>

        <span className="text-xs font-medium text-ink-muted">
          {cyclesCompleted} {t('breathingWidget.cycles') || 'cycles complete'}
        </span>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink">
          {t('breathingWidget.title') || 'Take a 1-Minute Grounding Pause'}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-ink-muted">
          {t('breathingWidget.subtitle') || 'Box breathing down-regulates nervous system arousal and eases racing thoughts.'}
        </p>
      </div>

      {/* Animated Breathing Circle */}
      <div className="relative my-8 flex items-center justify-center">
        {/* Soft background aura */}
        <motion.div
          animate={{
            scale: getOrbScale() * 1.15,
            opacity: isActive ? 0.35 : 0.15,
          }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="absolute h-40 w-40 rounded-full bg-primary-tint blur-xl"
        />

        {/* Central Physical Sphere */}
        <motion.div
          animate={{ scale: getOrbScale() }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-primary-600 shadow-soft-lg border-2 border-white/80"
        >
          <div className="text-center text-white select-none">
            <span className="block font-heading text-3xl font-bold">
              {isActive ? counter : '4'}
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-accent">
              {isActive ? phase : t('breathingWidget.ready') || 'Ready'}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Phase Guidance */}
      <div className="h-9 mb-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={phase + isActive}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm font-medium text-primary-deep"
          >
            {isActive ? getPhaseInstruction() : 'Click start to begin gentle 4-4-4-4 box breathing.'}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className="inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-2.5 px-6 text-sm shadow-sm transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
          <span>{isActive ? (t('breathingWidget.pause') || 'Pause') : (t('breathingWidget.start') || 'Start')}</span>
        </button>

        {isActive && (
          <button
            onClick={resetExercise}
            title={t('breathingWidget.reset') || 'Reset'}
            className="rounded-full bg-sand-warm p-2.5 text-ink hover:bg-sand-white:bg-white/20 shadow-sm transition-colors active:scale-95"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
