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
  Heart,
  Target,
  ArrowRight,
  Check,
  Smile,
  ShieldCheck
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import {
  PapayaDoodle,
  MangoDoodle,
  LeafDoodle,
  FloatingElement
} from '../components/illustrations/BrandDoodles';
import { useLanguage } from '../context/LanguageContext';

export default function Course({ onOpenBooking }) {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState(0);

  const modules = t('coursePage.modules') || [];
  const courseFaqs = t('coursePage.faqs') || [];
  const audienceList = t('coursePage.audienceList') || [];
  const highlights = t('coursePage.highlights') || [];

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="Emotional Wellbeing Course | Masterclass by Simran Mistry"
        description="The 4-Week Emotional Wellbeing Masterclass by Psychologist Simran Mistry. Transform overthinking, conquer procrastination, and cultivate grounded self-compassion."
        canonical="https://fruitfulmind.in/course"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-96 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-grape absolute top-[1500px] -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Elements */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-12 z-10" duration={7} delay={0.2} yOffset={16}>
          <PapayaDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-48 right-14 z-10" duration={8} delay={0.8} yOffset={18}>
          <MangoDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-[800px] right-10 z-10" duration={6.5} delay={1.4} yOffset={14}>
          <LeafDoodle className="w-10 h-10 drop-shadow-sm" color="#1FA886" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ========================================================= */}
        {/* HEADER HERO                                               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-papaya/30 bg-tint-peach/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-papaya-deep backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-mango shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-papaya" />
            <span>{t('coursePage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink dark:text-white leading-[1.15]"
          >
            {t('coursePage.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya-deep via-papaya to-mango">
              Masterclass
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 dark:text-zinc-200 leading-relaxed"
          >
            {t('coursePage.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onOpenBooking(t('coursePage.title'))}
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep via-papaya to-mango hover:from-papaya hover:to-mango text-white font-bold py-4 px-9 text-sm shadow-xl shadow-papaya/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('coursePage.waitlistBtn')}</span>
            </button>
            <a
              href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20the%20Emotional%20Wellbeing%20Course."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 text-sm shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t('coursePage.askWhatsapp')}</span>
            </a>
          </motion.div>
        </div>

        {/* Featured Big Cover Banner */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-20 shadow-2xl border border-white/80 dark:border-white/15">
          <img
            src="/assets/images/course-mindfulness.jpg"
            alt="Emotional Wellbeing Masterclass Workshop"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-mango block mb-1">
                Small Intimate Cohorts
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold">
                Interactive Guided Psychology Workshop
              </h3>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold border border-white/30">
              Live Mentorship by Simran Mistry
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* COURSE OVERVIEW HIGHLIGHTS STRIP                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24">
          {highlights.map((hl, i) => {
            const icons = [Clock, Users, BookOpen, Award];
            const Icon = icons[i % icons.length];
            const colors = [
              'text-papaya-deep dark:text-mango bg-tint-peach',
              'text-leaf-deep dark:text-leaf-light bg-tint-mint',
              'text-grape dark:text-grape-light bg-tint-lavender',
              'text-mango-600 dark:text-mango bg-tint-butter'
            ];
            return (
              <LiquidGlass
                key={i}
                variant="card"
                tint="default"
                interactive={true}
                className="p-6 text-center rounded-3xl border-white/80 dark:border-white/10 shadow-md hover:-translate-y-1 transition-transform"
              >
                <div className={`h-12 w-12 rounded-2xl mx-auto mb-3 flex items-center justify-center ${colors[i % colors.length]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-heading text-lg font-bold text-ink dark:text-white block">
                  {hl.title}
                </span>
                <span className="text-xs text-muted dark:text-zinc-300 mt-1 block">
                  {hl.sub}
                </span>
              </LiquidGlass>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* WHO THIS IS FOR                                           */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-28">
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
              <Target className="h-3.5 w-3.5" />
              <span>{t('coursePage.audienceBadge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white leading-tight">
              {t('coursePage.audienceTitle')}
            </h2>
            <p className="text-sm text-muted dark:text-zinc-300 leading-relaxed">
              {t('coursePage.audienceSubtitle')}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audienceList.map((audience, i) => (
              <div
                key={i}
                className="rounded-3xl border border-papaya/15 bg-white/80 dark:bg-dark-card/80 p-6 shadow-sm dark:border-white/10 space-y-2 hover:-translate-y-1 transition-transform"
              >
                <div className="h-8 w-8 rounded-xl bg-tint-peach text-papaya-deep dark:bg-white/10 dark:text-mango flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <h4 className="font-heading text-base font-bold text-ink dark:text-white">
                  {audience.title}
                </h4>
                <p className="text-xs text-muted dark:text-zinc-300 leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4 CURRICULUM MODULES                                      */}
        {/* ========================================================= */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-tint-peach text-papaya-deep dark:bg-white/10 dark:text-mango">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{t('coursePage.syllabusBadge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              {t('coursePage.syllabusTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
              {t('coursePage.syllabusSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((mod, i) => {
              const tints = ['papaya', 'leaf', 'grape', 'mango'];
              const currentTint = tints[i % tints.length];

              return (
                <LiquidGlass
                  key={i}
                  variant="card"
                  tint={currentTint}
                  interactive={true}
                  className="p-8 rounded-3xl border-white/80 dark:border-white/10 shadow-xl flex flex-col justify-between hover:-translate-y-1.5 transition-transform"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block rounded-full bg-gradient-to-r from-papaya-deep to-papaya text-white px-3.5 py-1 text-xs font-bold shadow-sm">
                        {mod.num}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted dark:text-zinc-300">
                        Week {i + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink dark:text-white mb-4">
                      {mod.title}
                    </h3>

                    <ul className="space-y-3 text-xs sm:text-sm text-ink/85 dark:text-zinc-200">
                      {Array.isArray(mod.outcomes) && mod.outcomes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-leaf mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </LiquidGlass>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* COURSE FAQS ACCORDION                                     */}
        {/* ========================================================= */}
        <div className="mb-28 max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
              {t('coursePage.faqsTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
              {t('coursePage.faqsSubtitle')}
            </p>
          </div>

          <div className="space-y-3.5">
            {courseFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <LiquidGlass
                  key={i}
                  variant="card"
                  tint="default"
                  interactive={false}
                  className="rounded-3xl border-white/80 dark:border-white/10 overflow-hidden shadow-sm p-0"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-ink dark:text-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-papaya-deep dark:text-mango transition-transform duration-300 flex-shrink-0 ${
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
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted dark:text-zinc-300 border-t border-black/5 dark:border-white/5 leading-relaxed">
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

        {/* ========================================================= */}
        {/* BOTTOM CTA CARD                                           */}
        {/* ========================================================= */}
        <LiquidGlass
          variant="hero"
          tint="papaya"
          className="p-8 sm:p-14 rounded-3xl border-white/80 dark:border-white/15 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Background Warm Aura */}
          <div className="ambient-blob-papaya absolute -top-20 left-1/3 h-64 w-64 rounded-full pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango shadow-sm">
            <Calendar className="h-3.5 w-3.5 text-papaya" />
            <span>Join Next Cohort</span>
          </span>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white max-w-xl mx-auto">
            {t('coursePage.bottom.title')}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-ink/80 dark:text-zinc-200 max-w-lg mx-auto leading-relaxed">
            {t('coursePage.bottom.subtitle')}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking(t('coursePage.title'))}
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep via-papaya to-mango hover:from-papaya hover:to-mango text-white font-bold py-4 px-9 text-xs sm:text-sm shadow-xl shadow-papaya/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('coursePage.bottom.waitlistBtn')}</span>
            </button>
            <a
              href="https://wa.me/919769512475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
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
