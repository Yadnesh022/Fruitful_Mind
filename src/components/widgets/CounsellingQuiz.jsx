import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CounsellingQuiz({ onOpenBooking, className = '' }) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'When an unexpected wave of stress or heavy emotion hits, what is your most frequent reaction?',
      options: [
        { label: 'I replay conversations and scenarios in my head over and over', tag: 'overthinking' },
        { label: 'I distract myself or scroll on my phone, only to feel drained later', tag: 'avoidance' },
        { label: 'I talk with friends, but I hesitate to burden them with my true depths', tag: 'isolation' },
        { label: 'I try to power through, but feel a persistent tight tension lingering inside', tag: 'tension' },
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
      question: 'What kind of support would feel most comforting and constructive to you right now?',
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
    <div
      className={`relative p-6 sm:p-10 rounded-2xl bg-white border border-primary/15 shadow-soft ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
          <HelpCircle className="h-3.5 w-3.5 text-primary" />
          <span>{t('quizWidget.badge') || 'Self-Reflection Tool'}</span>
        </span>

        {!showResult && (
          <span className="text-xs font-medium text-ink-muted">
            Question {currentStep + 1} of {questions.length}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink leading-snug">
                {currentQ.question}
              </h3>
              <p className="mt-1 text-xs text-ink-muted">
                {t('quizWidget.subtitle') || 'Select the option that resonates closest to your lived reality.'}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option)}
                  className="w-full text-left p-4 rounded-xl border border-primary/10 bg-sand-warm/60 hover:bg-sand-warm hover:border-primary/30:bg-white/10 shadow-sm transition-all text-xs sm:text-sm font-medium text-ink flex items-center justify-between gap-3 group active:scale-[0.99]"
                >
                  <span className="leading-relaxed">{option.label}</span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-ink-muted flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Educational self-assessment only • Not a medical diagnosis</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-tint text-primary flex-shrink-0">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                  {t('quizWidget.resultTitle') || 'Counselling Could Be a Powerful Catalyst'}
                </h3>
                <p className="text-xs text-ink-muted">
                  Your responses indicate thoughtful self-awareness ready for structured guidance.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ink leading-relaxed">
              {t('quizWidget.resultDesc') || 'You do not have to be in acute crisis to benefit from therapy. Having a structured, confidential space with an objective psychologist helps dismantle repetitive thought loops, rebuild self-compassion, and gain tangible momentum.'}
            </p>

            <div className="rounded-xl bg-sand-warm p-4 border border-primary/15 text-xs text-ink space-y-1">
              <p className="font-semibold text-primary">
                Suggested Next Step:
              </p>
              <p className="text-ink-muted">
                Schedule a 15-minute introductory conversation to discuss what is on your mind and see how Simran's eclectic approach can support your goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking && onOpenBooking('Free 15-Min Discovery Call')}
                className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-3 px-6 text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Schedule Free 15-Min Discovery Call</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink:text-white py-2 px-4 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
