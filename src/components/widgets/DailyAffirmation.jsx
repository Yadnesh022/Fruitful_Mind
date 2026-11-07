import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Share2, Check } from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';
import { useLanguage } from '../../context/LanguageContext';
import defaultAffirmations from '../../content/affirmations.json';

export default function DailyAffirmation({ className = '' }) {
  const { t, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const affirmations = useMemo(() => {
    const localized = t('affirmationsList');
    if (Array.isArray(localized) && localized.length > 0) {
      return localized;
    }
    return defaultAffirmations;
  }, [language, t]);

  const current = affirmations[index % affirmations.length] || affirmations[0];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % affirmations.length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${current.quote}" — Fruitful Mind, Simran Mistry`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const thoughtLabel = language === 'mr' ? 'आजचा विचार' : language === 'hi' ? 'आज का विचार' : 'Thought of the Day';
  const promptLabel = language === 'mr' ? 'चिंतन प्रश्न: ' : language === 'hi' ? 'आत्म-चिंतन प्रश्न: ' : 'Reflection Prompt: ';

  return (
    <LiquidGlass
      variant="card"
      tint="peach"
      interactive={false}
      className={`relative p-6 sm:p-8 rounded-3xl border-white/70 dark:border-white/10 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/50 px-3 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
          <Sparkles className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
          <span>{thoughtLabel} • {current.theme}</span>
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={handleCopy}
            title="Share quote"
            className="rounded-full p-2 text-brand-plum-600 hover:bg-white/50 dark:text-brand-plum-200 dark:hover:bg-white/10 transition-colors"
          >
            {copied ? <Check className="h-4 w-4 text-brand-sage-600" /> : <Share2 className="h-4 w-4" />}
          </button>
          <button
            onClick={handleNext}
            title="Next thought"
            className="rounded-full p-2 text-brand-plum-600 hover:bg-white/50 dark:text-brand-plum-200 dark:hover:bg-white/10 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id || index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <blockquote className="font-heading text-lg sm:text-xl font-bold leading-relaxed text-brand-plum-900 dark:text-white">
            "{current.quote}"
          </blockquote>

          <div className="mt-4 rounded-xl border border-white/60 bg-white/50 p-3 text-xs text-brand-plum-700 dark:border-white/10 dark:bg-brand-canvas-darkCard/60 dark:text-brand-plum-200">
            <span className="font-bold text-brand-peach-600 dark:text-brand-peach-300">{promptLabel}</span>
            {current.prompt}
          </div>
        </motion.div>
      </AnimatePresence>
    </LiquidGlass>
  );
}
