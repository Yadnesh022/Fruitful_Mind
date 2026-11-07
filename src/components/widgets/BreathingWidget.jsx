import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Play, Pause, RotateCcw, Heart } from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';
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
            // Transition phase
            setPhase((curr) => {
              if (curr === 'Inhale') return 'Hold';
              if (curr === 'Hold') return 'Exhale';
              if (curr === 'Exhale') return 'Rest';
              // Completed 1 cycle
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
        return t('breathingWidget.inhale');
      case 'Hold':
        return t('breathingWidget.hold');
      case 'Exhale':
        return t('breathingWidget.exhale');
      case 'Rest':
      default:
        return t('breathingWidget.rest');
    }
  };

  const getOrbScale = () => {
    if (!isActive) return 1;
    switch (phase) {
      case 'Inhale':
        return 1.35;
      case 'Hold':
        return 1.35;
      case 'Exhale':
        return 0.85;
      case 'Rest':
      default:
        return 0.85;
    }
  };

  return (
    <LiquidGlass
      variant="card"
      tint="peach"
      interactive={false}
      className={`relative p-8 rounded-3xl border-white/80 dark:border-white/10 text-center overflow-hidden shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/50 px-3 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
          <Wind className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
          <span>{t('breathingWidget.badge')}</span>
        </span>

        <span className="text-xs font-bold text-brand-plum-600 dark:text-brand-plum-300">
          {cyclesCompleted} {t('breathingWidget.cycles')}
        </span>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white">
          {t('breathingWidget.title')}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
          {t('breathingWidget.subtitle')}
        </p>
      </div>

      {/* Animated Breathing Orb */}
      <div className="relative my-8 flex items-center justify-center">
        {/* Soft background aura */}
        <motion.div
          animate={{
            scale: getOrbScale() * 1.15,
            opacity: isActive ? 0.45 : 0.25,
          }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="absolute h-44 w-44 rounded-full bg-gradient-to-tr from-brand-peach-300 to-brand-plum-400 blur-2xl"
        />

        {/* Central Physical Sphere */}
        <motion.div
          animate={{ scale: getOrbScale() }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-brand-peach-400 via-brand-peach-200 to-brand-plum-600 shadow-2xl border-2 border-white/60 dark:border-white/20"
        >
          <div className="text-center text-white select-none">
            <span className="block font-heading text-3xl font-extrabold drop-shadow">
              {isActive ? counter : '4'}
            </span>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-white/90 drop-shadow">
              {isActive ? phase : t('breathingWidget.ready')}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Phase Guidance */}
      <div className="h-8 mb-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={phase + isActive}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-sm font-semibold text-brand-plum-800 dark:text-brand-peach-200"
          >
            {isActive ? getPhaseInstruction() : t('breathingWidget.subtitle')}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className="inline-flex items-center gap-2 rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3 px-6 text-xs sm:text-sm shadow-md transition-all active:scale-95"
        >
          {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
          <span>{isActive ? t('breathingWidget.pause') : t('breathingWidget.start')}</span>
        </button>

        {isActive && (
          <button
            onClick={resetExercise}
            title={t('breathingWidget.reset')}
            className="rounded-full bg-white/70 p-3 text-brand-plum-700 hover:bg-white dark:bg-white/10 dark:text-brand-plum-200 dark:hover:bg-white/20 shadow-sm transition-colors active:scale-95"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        )}
      </div>
    </LiquidGlass>
  );
}
