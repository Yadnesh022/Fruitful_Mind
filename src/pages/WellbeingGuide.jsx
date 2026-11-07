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
  Check
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import BreathingWidget from '../components/widgets/BreathingWidget';
import { useLanguage } from '../context/LanguageContext';

export default function WellbeingGuide({ onOpenBooking }) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [downloadState, setDownloadState] = useState('idle'); // 'idle' | 'success'

  const handleDownload = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setDownloadState('success');
  };

  const chapters = t('wellbeingGuidePage.chapters') || [];

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO
        title="Emotional Health & Wellbeing Guide | Free Toolkit by Simran Mistry"
        description="A comprehensive, practical self-guided toolkit for managing anxiety, overthinking, boundaries, and emotional regulation by Psychologist Simran Mistry."
        canonical="https://fruitfulmind.in/wellbeing-guide"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-96 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
            <BookOpen className="h-4 w-4 text-brand-peach-600 dark:text-brand-peach-300" />
            <span>{t('wellbeingGuidePage.badge')}</span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-plum-950 dark:text-white leading-tight">
            {t('wellbeingGuidePage.title')}
          </h1>

          <p className="text-base sm:text-lg text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
            {t('wellbeingGuidePage.subtitle')}
          </p>
        </div>

        {/* Download Guide Banner Card */}
        <div className="mb-20">
          <LiquidGlass
            variant="hero"
            tint="peach"
            className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-plum-700 text-white px-3.5 py-1 text-xs font-bold">
                  <Download className="h-3.5 w-3.5 text-brand-peach-300" />
                  <span>{t('wellbeingGuidePage.pdfBadge')}</span>
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
                  {t('wellbeingGuidePage.pdfTitle')}
                </h2>
                <p className="text-sm sm:text-base text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed max-w-xl">
                  {t('wellbeingGuidePage.pdfSubtitle')}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-plum-700 dark:text-brand-plum-300">
                  <span>✓ {t('wellbeingGuidePage.instantDownload')}</span>
                  <span>✓ {t('wellbeingGuidePage.freeEdu')}</span>
                  <span>✓ {t('wellbeingGuidePage.zeroSpam')}</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                {downloadState === 'success' ? (
                  <div className="rounded-2xl bg-brand-sage-100 p-6 text-brand-sage-900 dark:bg-brand-sage-900/40 dark:text-brand-sage-200 text-center space-y-2">
                    <CheckCircle2 className="h-8 w-8 text-brand-sage-600 dark:text-brand-sage-400 mx-auto" />
                    <h4 className="font-heading text-lg font-bold">{t('wellbeingGuidePage.toolkitDispatched')}</h4>
                    <p className="text-xs">
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
                      className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-3.5 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-6 text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
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

        {/* Somatic Practice Callout */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300">
              {t('wellbeingGuidePage.practiceBadge')}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('wellbeingGuidePage.practiceTitle')}
            </h2>
          </div>
          <BreathingWidget />
        </div>

        {/* The 5 Chapters Breakdown */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-plum-600 dark:text-brand-peach-300">
              {t('wellbeingGuidePage.chaptersBadge')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('wellbeingGuidePage.chaptersTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
              {t('wellbeingGuidePage.chaptersSubtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {chapters.map((ch, idx) => (
              <LiquidGlass
                key={idx}
                variant="card"
                tint={idx % 2 === 0 ? 'default' : 'peach'}
                interactive={false}
                className="p-6 sm:p-8 rounded-3xl border-white/70 dark:border-white/10 shadow-md"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-1">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-brand-peach-400 dark:text-brand-peach-300 block">
                      {ch.number}
                    </span>
                  </div>

                  <div className="md:col-span-6 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-plum-500 dark:text-brand-peach-300">
                      {ch.focus}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white">
                      {ch.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                      {ch.description}
                    </p>
                  </div>

                  <div className="md:col-span-5 rounded-2xl bg-white/70 dark:bg-white/5 p-5 border border-white/60 dark:border-white/5 space-y-2">
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-sage-700 dark:text-brand-sage-300 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{t('wellbeingGuidePage.actionItemLabel')}</span>
                    </span>
                    <p className="text-xs text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
                      {ch.actionItem}
                    </p>
                  </div>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Schedule a Session */}
        <LiquidGlass
          variant="card"
          tint="sage"
          className="p-8 sm:p-10 rounded-3xl border-white/80 dark:border-white/10 text-center shadow-lg"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
            {t('wellbeingGuidePage.bottom.title')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-brand-plum-800 dark:text-brand-plum-200 max-w-lg mx-auto">
            {t('wellbeingGuidePage.bottom.subtitle')}
          </p>
          <div className="mt-6">
            <button
              onClick={() => onOpenBooking(t('wellbeingGuidePage.title'))}
              className="rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-8 text-xs sm:text-sm shadow-md transition-colors inline-flex items-center gap-2 active:scale-95"
            >
              <span>{t('wellbeingGuidePage.bottom.cta')}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}
