import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function MoodCheckin({ className = '' }) {
  const { t } = useLanguage();
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    {
      id: 'overwhelmed',
      label: 'Overwhelmed',
      emoji: '🌊',
      feeling: 'Thoughts racing in all directions',
      recommendation: {
        title: 'Unraveling Overthinking: Break the 3 AM Thought Spiral',
        type: 'Article',
        link: '/blogs/unraveling-overthinking',
        summary: 'Explore why the brain loops endlessly when tired, and 3 gentle cognitive reframing anchors to ground your awareness.',
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
        summary: 'Learn the foundational connection between automatic thoughts, bodily sensations, and behaviour.',
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
        summary: 'Procrastination is an emotional regulation strategy, not a character flaw. Here is how to dissolve task paralysis.',
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
        summary: 'Learn how to soften the ruthless internal judge and anchor your sense of worth in unconditional human dignity.',
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
        summary: 'Discover how early attachment bonds shape adult communication patterns, vulnerability, and relational boundaries.',
      },
    },
  ];

  const activeMoodData = moods.find((m) => m.id === selectedMood);

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl bg-white border border-primary/15 shadow-soft ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
          <Compass className="h-3.5 w-3.5 text-primary" />
          <span>{t('moodWidget.badge') || 'Inner State Check-In'}</span>
        </span>
      </div>

      <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink">
        {t('moodWidget.title') || 'What is your inner state right now?'}
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-ink-muted">
        {t('moodWidget.subtitle') || 'Select how you feel in this moment. We will guide you to a clinically grounded perspective or reflection.'}
      </p>

      {/* Mood Selector Buttons */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
        {moods.map((m) => {
          const isSelected = selectedMood === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedMood(isSelected ? null : m.id)}
              className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all ${
                isSelected
                  ? 'border-primary bg-primary-tint/60 shadow-sm scale-102 ring-2 ring-primary/20'
                  : 'border-sand-warm bg-sand-warm/60 hover:bg-sand-warm hover:border-primary/20:bg-white/10'
              }`}
            >
              <span className="text-2xl mb-1.5 select-none">{m.emoji}</span>
              <span className="font-heading text-xs font-semibold text-ink leading-tight">
                {m.label}
              </span>
              <span className="mt-1 text-[11px] text-ink-muted leading-tight hidden sm:block">
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
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 pt-5 border-t border-primary/10 overflow-hidden"
          >
            <div className="rounded-xl bg-sand-warm/80 p-5 border border-primary/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="inline-block rounded-full bg-primary-tint px-2.5 py-0.5 text-[10px] font-bold text-primary">
                  Recommended Resource • {activeMoodData.recommendation.type}
                </span>
                <h4 className="font-heading text-base font-bold text-ink">
                  {activeMoodData.recommendation.title}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed max-w-xl">
                  {activeMoodData.recommendation.summary}
                </p>
              </div>

              <Link
                to={activeMoodData.recommendation.link}
                className="rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-2.5 px-5 text-xs shadow-sm transition-all flex items-center gap-1.5 flex-shrink-0 active:scale-95"
              >
                <span>Read Reflection</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
