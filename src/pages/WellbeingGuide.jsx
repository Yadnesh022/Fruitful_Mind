import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Download,
  CheckCircle2,
  Sparkles,
  Heart,
  Wind,
  Shield,
  Moon,
  Compass,
  ArrowRight,
  Check,
  Activity,
  Award,
  Sparkle,
  Coffee,
  CheckCheck
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import BreathingWidget from '../components/widgets/BreathingWidget';
import {
  PapayaDoodle,
  MangoDoodle,
  LeafDoodle,
  TeaCupDoodle,
  FloatingElement
} from '../components/illustrations/BrandDoodles';
import { useLanguage } from '../context/LanguageContext';

export default function WellbeingGuide({ onOpenBooking }) {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [downloadState, setDownloadState] = useState('idle'); // 'idle' | 'success'

  const handleDownload = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setDownloadState('success');
  };

  const chapters = t('wellbeingGuidePage.chapters') || [];

  const chapterIcons = [
    Wind,
    Heart,
    Shield,
    Activity,
    Compass
  ];

  const chapterTints = [
    'border-papaya/30 bg-tint-peach/40',
    'border-mango/30 bg-tint-butter/40',
    'border-leaf/30 bg-tint-mint/40',
    'border-grape/30 bg-tint-lavender/40',
    'border-papaya/30 bg-tint-peach/40'
  ];

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="Emotional Health & Wellbeing Guide | Free Toolkit by Simran Mistry"
        description="A comprehensive, practical self-guided toolkit for managing anxiety, overthinking, boundaries, and emotional regulation by Psychologist Simran Mistry."
        canonical="https://fruitfulmind.in/wellbeing-guide"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-96 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-leaf absolute top-[1400px] -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Brand Elements */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-12 z-10" duration={7} delay={0.2} yOffset={16}>
          <PapayaDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-48 right-14 z-10" duration={8} delay={0.8} yOffset={18}>
          <MangoDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-[750px] left-8 z-10" duration={6.5} delay={1.4} yOffset={14}>
          <LeafDoodle className="w-10 h-10 drop-shadow-sm" color="#1FA886" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ========================================================= */}
        {/* HEADER HERO                                               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-papaya/30 bg-tint-peach/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-papaya-deep backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-mango shadow-sm"
          >
            <BookOpen className="h-4 w-4 text-papaya" />
            <span>{t('wellbeingGuidePage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink dark:text-white leading-[1.15]"
          >
            {t('wellbeingGuidePage.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya-deep via-papaya to-mango">
              & Self-Care Toolkit
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 dark:text-zinc-200 leading-relaxed"
          >
            {t('wellbeingGuidePage.subtitle')}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* DOWNLOAD GUIDE BANNER CARD                                */}
        {/* ========================================================= */}
        <div className="mb-24">
          <LiquidGlass
            variant="hero"
            tint="papaya"
            className="p-8 sm:p-14 rounded-3xl border-white/80 dark:border-white/15 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-papaya-deep to-papaya text-white px-3.5 py-1 text-xs font-bold shadow-sm">
                  <Download className="h-3.5 w-3.5 text-mango" />
                  <span>{t('wellbeingGuidePage.pdfBadge')}</span>
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink dark:text-white leading-tight">
                  {t('wellbeingGuidePage.pdfTitle')}
                </h2>
                <p className="text-sm sm:text-base text-ink/85 dark:text-zinc-200 leading-relaxed max-w-xl">
                  {t('wellbeingGuidePage.pdfSubtitle')}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted dark:text-zinc-300 pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-leaf" />
                    <span>{t('wellbeingGuidePage.instantDownload')}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-leaf" />
                    <span>{t('wellbeingGuidePage.freeEdu')}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-leaf" />
                    <span>{t('wellbeingGuidePage.zeroSpam')}</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                {downloadState === 'success' ? (
                  <div className="rounded-2xl bg-tint-mint p-8 text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light text-center space-y-3 shadow-md border border-leaf/20">
                    <CheckCheck className="h-10 w-10 text-leaf mx-auto" />
                    <h4 className="font-heading text-xl font-bold">{t('wellbeingGuidePage.toolkitDispatched')}</h4>
                    <p className="text-xs leading-relaxed">
                      {t('wellbeingGuidePage.toolkitSentTo')} <strong>{email}</strong>. {t('wellbeingGuidePage.enjoyJourney')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDownload} className="space-y-3">
                    <input
                      id="guide-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('wellbeingGuidePage.emailPlaceholder')}
                      className="w-full rounded-2xl border border-papaya/20 bg-white/95 px-5 py-3.5 text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-papaya-deep to-papaya hover:from-papaya hover:to-mango text-white font-bold py-4 px-6 text-sm shadow-xl shadow-papaya/30 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <Download className="h-4 w-4" />
                      <span>{t('wellbeingGuidePage.downloadBtn')}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </LiquidGlass>
        </div>

        {/* ========================================================= */}
        {/* SOMATIC PRACTICE CALLOUT                                  */}
        {/* ========================================================= */}
        <div className="mb-28">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
              <Activity className="h-3.5 w-3.5" />
              <span>{t('wellbeingGuidePage.practiceBadge')}</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
              {t('wellbeingGuidePage.practiceTitle')}
            </h2>
          </div>
          <BreathingWidget />
        </div>

        {/* ========================================================= */}
        {/* THE 5 CHAPTERS BREAKDOWN WITH VISUAL COVERS & CARDS       */}
        {/* ========================================================= */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-tint-peach text-papaya-deep dark:bg-white/10 dark:text-mango">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{t('wellbeingGuidePage.chaptersBadge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              {t('wellbeingGuidePage.chaptersTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
              {t('wellbeingGuidePage.chaptersSubtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {chapters.map((ch, idx) => {
              const Icon = chapterIcons[idx % chapterIcons.length];
              const tintStyle = chapterTints[idx % chapterTints.length];

              return (
                <LiquidGlass
                  key={idx}
                  variant="card"
                  tint="default"
                  interactive={true}
                  className={`p-6 sm:p-10 rounded-3xl border shadow-lg hover:-translate-y-1.5 transition-transform duration-300 ${tintStyle}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-1 flex items-center justify-center md:justify-start">
                      <span className="font-heading text-4xl sm:text-5xl font-black text-papaya-deep dark:text-mango">
                        {ch.number}
                      </span>
                    </div>

                    <div className="md:col-span-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-papaya-deep dark:text-mango shadow-sm">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted dark:text-zinc-300">
                          {ch.focus}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink dark:text-white">
                        {ch.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                        {ch.description}
                      </p>
                    </div>

                    <div className="md:col-span-5 rounded-2xl bg-white/85 dark:bg-white/5 p-6 border border-white/60 dark:border-white/10 space-y-2.5 shadow-sm">
                      <span className="font-heading text-xs font-bold uppercase tracking-wider text-leaf-deep dark:text-leaf-light flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-leaf" />
                        <span>{t('wellbeingGuidePage.actionItemLabel')}</span>
                      </span>
                      <p className="text-xs text-ink/85 dark:text-zinc-200 leading-relaxed">
                        {ch.actionItem}
                      </p>
                    </div>
                  </div>
                </LiquidGlass>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CTA: SCHEDULE A COMPASSIONATE SESSION              */}
        {/* ========================================================= */}
        <LiquidGlass
          variant="card"
          tint="leaf"
          className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/15 text-center shadow-xl max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/80 text-leaf-deep dark:bg-white/10 dark:text-leaf-light mb-3">
            <Heart className="h-3.5 w-3.5 text-leaf" />
            <span>Personalized Care</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
            {t('wellbeingGuidePage.bottom.title')}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-ink/80 dark:text-zinc-200 max-w-lg mx-auto leading-relaxed">
            {t('wellbeingGuidePage.bottom.subtitle')}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking(t('wellbeingGuidePage.title'))}
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep to-papaya hover:from-papaya hover:to-mango text-white font-bold py-3.5 px-8 text-xs sm:text-sm shadow-md transition-all inline-flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>{t('wellbeingGuidePage.bottom.cta')}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="https://wa.me/919769512475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-white/80 hover:bg-white text-ink font-semibold py-3 px-6 text-xs text-center border border-white/60 dark:bg-white/10 dark:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}
