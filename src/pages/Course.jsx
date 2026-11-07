import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  Users,
  Award,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Heart
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import { useLanguage } from '../context/LanguageContext';

export default function Course({ onOpenBooking }) {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  const modules = t('coursePage.modules') || [];
  const courseFaqs = t('coursePage.faqs') || [];
  const audienceList = t('coursePage.audienceList') || [];
  const highlights = t('coursePage.highlights') || [];

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO
        title="Emotional Wellbeing Course | Masterclass by Simran Mistry"
        description="The 4-Week Emotional Wellbeing Masterclass by Psychologist Simran Mistry. Transform overthinking, conquer procrastination, and cultivate grounded self-compassion."
        canonical="https://fruitfulmind.in/course"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-96 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-plum-700 text-white px-4 py-1.5 text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles className="h-4 w-4 text-brand-peach-300" />
            <span>{t('coursePage.badge')}</span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-plum-950 dark:text-white leading-tight">
            {t('coursePage.title')}
          </h1>

          <p className="text-base sm:text-lg text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
            {t('coursePage.subtitle')}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking(t('coursePage.title'))}
              className="w-full sm:w-auto rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-4 px-8 text-sm shadow-lg transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('coursePage.waitlistBtn')}</span>
            </button>
            <a
              href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20the%20Emotional%20Wellbeing%20Course."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-7 text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t('coursePage.askWhatsapp')}</span>
            </a>
          </div>
        </div>

        {/* Course Overview Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {highlights.map((hl, i) => {
            const icons = [Clock, Users, BookOpen, Award];
            const Icon = icons[i % icons.length];
            const colors = [
              'text-brand-peach-500',
              'text-brand-sage-600',
              'text-brand-plum-600 dark:text-brand-peach-300',
              'text-brand-peach-500'
            ];
            return (
              <LiquidGlass
                key={i}
                variant="card"
                tint="default"
                interactive={false}
                className="p-5 text-center rounded-2xl border-white/70 dark:border-white/10 shadow-sm"
              >
                <Icon className={`h-6 w-6 ${colors[i % colors.length]} mx-auto mb-2`} />
                <span className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white block">
                  {hl.title}
                </span>
                <span className="text-xs text-brand-plum-600 dark:text-brand-plum-300">
                  {hl.sub}
                </span>
              </LiquidGlass>
            );
          })}
        </div>

        {/* Who this is for */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300">
              {t('coursePage.audienceBadge')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('coursePage.audienceTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
              {t('coursePage.audienceSubtitle')}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audienceList.map((audience, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/70 bg-white/70 dark:bg-brand-canvas-darkCard/70 p-5 shadow-sm dark:border-white/10 space-y-1.5"
              >
                <h4 className="font-heading text-base font-bold text-brand-plum-950 dark:text-white">
                  {audience.title}
                </h4>
                <p className="text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Curriculum Modules */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-plum-600 dark:text-brand-peach-300">
              {t('coursePage.syllabusBadge')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('coursePage.syllabusTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
              {t('coursePage.syllabusSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod, i) => (
              <LiquidGlass
                key={i}
                variant="card"
                tint={i % 2 === 0 ? 'peach' : 'sage'}
                interactive={false}
                className="p-8 rounded-3xl border-white/80 dark:border-white/10 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-full bg-brand-plum-700 text-white px-3 py-1 text-xs font-bold mb-3">
                    {mod.num}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white mb-4">
                    {mod.title}
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-brand-plum-800 dark:text-brand-plum-200">
                    {Array.isArray(mod.outcomes) && mod.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-brand-sage-600 dark:text-brand-sage-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* Course FAQs Accordion */}
        <div className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('coursePage.faqsTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
              {t('coursePage.faqsSubtitle')}
            </p>
          </div>

          <div className="space-y-3">
            {courseFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <LiquidGlass
                  key={i}
                  variant="card"
                  tint="default"
                  interactive={false}
                  className="rounded-2xl border-white/70 dark:border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-brand-plum-950 dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-brand-peach-600 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 border-t border-brand-plum-100/60 dark:border-white/5 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </LiquidGlass>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <LiquidGlass
          variant="hero"
          tint="peach"
          className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/15 text-center shadow-2xl"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
            {t('coursePage.bottom.title')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-brand-plum-800 dark:text-brand-plum-200 max-w-lg mx-auto leading-relaxed">
            {t('coursePage.bottom.subtitle')}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking(t('coursePage.title'))}
              className="w-full sm:w-auto rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-8 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('coursePage.bottom.waitlistBtn')}</span>
            </button>
            <a
              href="https://wa.me/919769512475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-7 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t('coursePage.bottom.whatsappBtn')}</span>
            </a>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}
