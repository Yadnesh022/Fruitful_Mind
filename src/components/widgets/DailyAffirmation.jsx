import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, RefreshCw, Share2, Check } from 'lucide-react';
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
    navigator.clipboard.writeText(`"${current.quote}" — Simran Mistry, Fruitful Mind`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const thoughtLabel = language === 'mr' ? 'आजचा विचार' : language === 'hi' ? 'आज का विचार' : 'Psychologist Reflection';
  const promptLabel = language === 'mr' ? 'चिंतन प्रश्न: ' : language === 'hi' ? 'आत्म-चिंतन प्रश्न: ' : 'Reflection Prompt: ';

  return (
    <div
      className={`relative p-6 sm:p-8 rounded-2xl bg-white border border-primary/15 shadow-soft ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
          <Lightbulb className="h-3.5 w-3.5 text-primary" />
          <span>{thoughtLabel} • {current.theme}</span>
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={handleCopy}
            title="Copy reflection"
            className="rounded-full p-2 text-ink-muted hover:bg-sand-warm:bg-white/10 transition-colors focus:outline-none"
          >
            {copied ? <Check className="h-4 w-4 text-primary" /> : <Share2 className="h-4 w-4" />}
          </button>
          <button
            onClick={handleNext}
            title="Next reflection"
            className="rounded-full p-2 text-ink-muted hover:bg-sand-warm:bg-white/10 transition-colors focus:outline-none"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <blockquote className="font-heading text-lg sm:text-xl font-medium text-ink leading-relaxed italic">
            "{current.quote}"
          </blockquote>

          <div className="rounded-xl bg-sand-warm p-3.5 border border-primary/10">
            <p className="text-xs text-ink-muted">
              <strong className="text-primary">{promptLabel}</strong>
              {current.prompt}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
