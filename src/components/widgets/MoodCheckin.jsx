import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, Compass } from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';
import { useLanguage } from '../../context/LanguageContext';

export default function MoodCheckin({ className = '' }) {
  const { t } = useLanguage();
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = t('moodWidget.moods') || [
    {
      id: 'overwhelmed',
      label: 'Overwhelmed',
      emoji: '🌊',
      feeling: 'Thoughts racing in all directions',
      recommendation: {
        title: 'Unraveling Overthinking: Break the 3 AM Thought Spiral',
        type: 'Article',
        link: '/blogs/unraveling-overthinking',
        summary: 'Explore why the brain loops endlessly when tired, and 3 gentle cognitive reframing anchors.',
      },
    },
    {
      id: 'anxious',
      label: 'Anxious / On Edge',
      emoji: '⚡',
      feeling: 'Restless chest, physical tension',
      recommendation: {
        title: 'Cognitive Behavioural Therapy (CBT) Basics',
        type: 'Psychology Concept',
        link: '/psychology-concepts',
        summary: 'Learn the foundational connection between thoughts, physical sensations, and actions.',
      },
    },
    {
      id: 'stuck',
      label: 'Stuck / Delaying',
      emoji: '⏳',
      feeling: 'Putting off tasks despite wanting to start',
      recommendation: {
        title: 'The Real Truth Behind Procrastination (It Is Not Laziness)',
        type: 'Article',
        link: '/blogs/real-truth-procrastination',
        summary: 'Procrastination is an emotional regulation strategy, not a character flaw. Here is how to dissolve it.',
      },
    },
    {
      id: 'critical',
      label: 'Self-Critical',
      emoji: '🪞',
      feeling: 'Harsh inner dialogue and self-judgment',
      recommendation: {
        title: 'Rebuilding Self-Esteem: Moving Beyond Conditional Worth',
        type: 'Article',
        link: '/blogs/rebuilding-fragile-self-esteem',
        summary: 'Learn how to soften the ruthless internal judge and anchor worth in your inherent humanity.',
      },
    },
    {
      id: 'curious',
      label: 'Curious & Reflective',
      emoji: '🌱',
      feeling: 'Seeking personal growth and clarity',
      recommendation: {
        title: 'Attachment Styles & Relational Blueprints',
        type: 'Psychology Concept',
        link: '/psychology-concepts',
        summary: 'Discover how early attachment bonds shape adult communication, trust, and intimacy.',
      },
    },
  ];

  const activeMoodData = moods.find((m) => m.id === selectedMood);

  return (
    <LiquidGlass
      variant="card"
      tint="default"
      interactive={false}
      className={`p-6 sm:p-8 rounded-3xl border-white/70 dark:border-white/10 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/50 px-3 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
          <Sparkles className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
          <span>{t('moodWidget.badge')}</span>
        </span>
      </div>

      <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white">
        {t('moodWidget.title')}
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
        {t('moodWidget.subtitle')}
      </p>

      {/* Mood Selector Buttons */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
        {moods.map((m) => {
          const isSelected = selectedMood === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedMood(isSelected ? null : m.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                isSelected
                  ? 'border-brand-peach-500 bg-brand-peach-100/80 shadow-md scale-105 dark:border-brand-peach-400 dark:bg-brand-peach-950/40'
                  : 'border-white/60 bg-white/60 hover:bg-white hover:border-brand-peach-300 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10'
              }`}
            >
              <span className="text-2xl mb-1 select-none">{m.emoji}</span>
              <span className="font-heading text-xs font-bold text-brand-plum-900 dark:text-white leading-tight">
                {m.label}
              </span>
              <span className="mt-1 text-[10px] text-brand-plum-500 dark:text-brand-plum-300 leading-tight hidden sm:block">
                {m.feeling}
              </span>
            </button>
          );
        })}
      </div>

      {/* Recommended Resource Panel */}
      <AnimatePresence mode="wait">
        {activeMoodData && (
          <motion.div
            key={activeMoodData.id}
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-5 border-t border-brand-plum-100/80 dark:border-white/10 overflow-hidden"
          >
            <div className="rounded-2xl bg-white/80 dark:bg-brand-canvas-darkCard/80 p-5 border border-brand-peach-200/60 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="inline-block rounded-full bg-brand-peach-200/60 dark:bg-brand-plum-900/60 px-2.5 py-0.5 text-[10px] font-bold text-brand-plum-800 dark:text-brand-peach-200">
                  {t('moodWidget.recommended')} • {activeMoodData.recommendation.type}
                </span>
                <h4 className="font-heading text-base font-bold text-brand-plum-950 dark:text-white">
                  {activeMoodData.recommendation.title}
                </h4>
                <p className="text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed max-w-xl">
                  {activeMoodData.recommendation.summary}
                </p>
              </div>

              <Link
                to={activeMoodData.recommendation.link}
                className="rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-2.5 px-5 text-xs shadow transition-colors flex items-center gap-1.5 flex-shrink-0 active:scale-95"
              >
                <span>{t('moodWidget.readReflection')}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LiquidGlass>
  );
}
