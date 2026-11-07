import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, HeartHandshake } from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';
import { useLanguage } from '../../context/LanguageContext';

export default function CounsellingQuiz({ onOpenBooking, className = '' }) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = t('quizWidget.questions') || [
    {
      id: 1,
      question: 'When a wave of stress or heavy emotion hits, what is your most frequent reaction?',
      options: [
        { label: 'I replay conversations and scenarios in my head over and over', tag: 'overthinking' },
        { label: 'I distract myself or scroll on my phone, only to feel drained later', tag: 'avoidance' },
        { label: 'I talk with friends, but I hesitate to burden them with my true depths', tag: 'isolation' },
        { label: 'I try to power through, but feel a quiet tension lingering inside', tag: 'tension' },
      ],
    },
    {
      id: 2,
      question: 'How would you describe your day-to-day relationship with your thoughts?',
      options: [
        { label: 'My inner critic is loud and often questions my worth or decisions', tag: 'inner_critic' },
        { label: 'I know what I should do, but procrastination keeps freezing me', tag: 'procrastination' },
        { label: 'I am standing at a career or life crossroads feeling paralyzed by options', tag: 'crossroads' },
        { label: 'I am curious to deeply understand psychological patterns and grow', tag: 'curiosity' },
      ],
    },
    {
      id: 3,
      question: 'What kind of support would feel most comforting to you right now?',
      options: [
        { label: 'A safe, 100% confidential space where no thought is judged as "too much"', tag: 'safe_space' },
        { label: 'Concrete, science-backed tools for anxiety and cognitive reframing', tag: 'practical_tools' },
        { label: 'Clarifying my natural inclinations, vocational strengths, and career path', tag: 'career_clarity' },
        { label: 'Mastering psychology concepts and building deep emotional intelligence', tag: 'education' },
      ],
    },
  ];

  const handleSelectOption = (option) => {
    const nextAnswers = [...answers, option];
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const currentQ = questions[currentStep] || questions[0];

  return (
    <LiquidGlass
      variant="card"
      tint="sage"
      interactive={false}
      className={`relative p-6 sm:p-10 rounded-3xl border-white/80 dark:border-white/10 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-sage-100 dark:bg-brand-sage-900/40 px-3 py-1 text-xs font-bold text-brand-sage-800 dark:text-brand-sage-200">
          <HelpCircle className="h-3.5 w-3.5 text-brand-sage-600 dark:text-brand-sage-300" />
          <span>{t('quizWidget.badge')}</span>
        </span>

        {!showResult && (
          <span className="text-xs font-bold text-brand-plum-600 dark:text-brand-plum-300">
            {t('quizWidget.qPrefix')} {currentStep + 1} {t('quizWidget.of')} {questions.length}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white leading-snug">
                {currentQ.question}
              </h3>
              <p className="mt-1 text-xs text-brand-plum-600 dark:text-brand-plum-300">
                {t('quizWidget.subtitle')}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  className="w-full text-left p-4 rounded-2xl border border-white/70 bg-white/70 hover:bg-white hover:border-brand-peach-400 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/15 shadow-sm transition-all text-xs sm:text-sm font-semibold text-brand-plum-900 dark:text-brand-plum-100 flex items-center justify-between gap-3 group active:scale-[0.99]"
                >
                  <span className="leading-relaxed">{option.label}</span>
                  <ArrowRight className="h-4 w-4 text-brand-plum-400 group-hover:text-brand-peach-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage-100 text-brand-sage-700 dark:bg-brand-sage-900/40 dark:text-brand-sage-300 flex-shrink-0">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white">
                  {t('quizWidget.resultTitle')}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
              {t('quizWidget.resultDesc')}
            </p>

            <div className="rounded-2xl bg-white/80 dark:bg-brand-canvas-darkCard/80 p-4 border border-brand-sage-200 dark:border-white/10 text-xs text-brand-plum-800 dark:text-brand-plum-200 space-y-1">
              <p className="font-bold text-brand-sage-700 dark:text-brand-sage-300">
                {t('quizWidget.suggestedAction')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking(t('common.freeDiscovery'))}
                className="w-full sm:w-auto rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-7 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
              >
                <span>{t('quizWidget.bookDiscovery')}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-plum-600 hover:text-brand-plum-900 dark:text-brand-plum-300 dark:hover:text-white py-2 px-4 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{t('quizWidget.retake')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LiquidGlass>
  );
}
