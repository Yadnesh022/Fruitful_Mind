import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ShieldCheck,
  Brain,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  MapPin,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.png';

export default function About({ onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <div className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO
        title="About Simran Mistry | Psychologist & Counsellor Pune | Fruitful Mind"
        description="Learn about Simran Mistry, Psychologist (Master's in Counselling Psychology, 3+ years experience). Explore her eclectic, compassionate approach to emotional wellbeing."
        canonical="https://fruitfulmind.in/about"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-80 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
            <Heart className="h-4 w-4 text-brand-peach-600 dark:text-brand-peach-300" />
            <span>{t('aboutPage.badge')}</span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-plum-950 dark:text-white leading-tight">
            {t('aboutPage.heroTitle')}
          </h1>

          <p className="text-base sm:text-lg text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
            {t('aboutPage.heroSubtitle')}
          </p>
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5">
            <LiquidGlass
              variant="card"
              tint="peach"
              interactive={false}
              className="p-8 rounded-3xl border-white/80 dark:border-white/10 shadow-2xl"
            >
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-brand-peach-200 via-brand-plum-200 to-brand-sage-200 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                <div className="h-32 w-32 rounded-full overflow-hidden bg-white/90 p-2 shadow-xl mb-6">
                  <img src={logoImg} alt="Simran Mistry" className="h-full w-full object-contain" />
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950">
                  Simran Mistry
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-plum-800 mt-1">
                  {t('common.bySimran')}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1 text-xs font-semibold text-brand-plum-900">
                  <GraduationCap className="h-4 w-4 text-brand-plum-700" />
                  <span>Master's in Counselling Psychology</span>
                </div>
                <p className="mt-4 text-xs text-brand-plum-700 max-w-xs">
                  {t('hero.stats.exp')} {t('hero.stats.expLabel')} • {t('common.puneOnline')}
                </p>
              </div>

              {/* Direct Booking action */}
              <div className="pt-6 mt-6 border-t border-brand-plum-100 dark:border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
                  className="w-full rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('common.freeDiscovery')}</span>
                </button>
                <a
                  href="https://wa.me/919769512475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-white/80 hover:bg-white text-brand-plum-900 font-semibold py-2.5 text-xs text-center border border-white/60 dark:bg-white/10 dark:text-white"
                >
                  WhatsApp: +91 9769512475
                </a>
              </div>
            </LiquidGlass>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('aboutPage.journeyTitle')}
            </h2>

            <p className="text-sm sm:text-base text-brand-plum-800 dark:text-brand-plum-100 leading-relaxed">
              {t('aboutPage.journeyP1')}
            </p>

            <p className="text-sm sm:text-base text-brand-plum-800 dark:text-brand-plum-100 leading-relaxed">
              {t('aboutPage.journeyP2')}
            </p>

            <p className="text-sm sm:text-base text-brand-plum-800 dark:text-brand-plum-100 leading-relaxed">
              {t('aboutPage.journeyP3')}
            </p>

            {/* Direct Introduction Card */}
            <div className="rounded-2xl border-l-4 border-brand-peach-500 bg-brand-peach-50/70 p-5 dark:border-brand-peach-400 dark:bg-white/5 space-y-2 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-peach-700 dark:text-brand-peach-300 block">
                {t('welcomeBio.badge')}
              </span>
              <blockquote className="text-xs sm:text-sm text-brand-plum-900 dark:text-brand-plum-100 italic leading-relaxed">
                {t('welcomeBio.quote')}
              </blockquote>
            </div>

            {/* Qualifications Card */}
            <div className="rounded-2xl border border-brand-plum-200/60 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5 space-y-3">
              <h3 className="font-heading text-base font-bold text-brand-plum-950 dark:text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-sage-600 dark:text-brand-sage-400" />
                <span>{t('aboutPage.qualTitle')}</span>
              </h3>
              <ul className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-peach-500 mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-peach-500 mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-peach-500 mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-peach-500 mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: The Eclectic Approach Explained in Simple Words */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-plum-100 px-3.5 py-1 text-xs font-bold text-brand-plum-800 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
              <Brain className="h-3.5 w-3.5 text-brand-plum-600 dark:text-brand-peach-300" />
              <span>{t('aboutPage.eclecticBadge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('aboutPage.eclecticTitle')}
            </h2>
            <p className="text-sm sm:text-base text-brand-plum-700 dark:text-brand-plum-200">
              {t('aboutPage.eclecticSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LiquidGlass
              variant="card"
              tint="peach"
              className="p-6 rounded-2xl border-white/70 dark:border-white/10"
            >
              <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                {t('aboutPage.cbtTitle')}
              </h3>
              <p className="text-xs font-bold text-brand-peach-600 dark:text-brand-peach-300 mt-1">
                {t('aboutPage.cbtSub')}
              </p>
              <p className="mt-3 text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                {t('aboutPage.cbtDesc')}
              </p>
            </LiquidGlass>

            <LiquidGlass
              variant="card"
              tint="sage"
              className="p-6 rounded-2xl border-white/70 dark:border-white/10"
            >
              <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                {t('aboutPage.humanisticTitle')}
              </h3>
              <p className="text-xs font-bold text-brand-sage-600 dark:text-brand-sage-400 mt-1">
                {t('aboutPage.humanisticSub')}
              </p>
              <p className="mt-3 text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                {t('aboutPage.humanisticDesc')}
              </p>
            </LiquidGlass>

            <LiquidGlass
              variant="card"
              tint="default"
              className="p-6 rounded-2xl border-white/70 dark:border-white/10"
            >
              <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                {t('aboutPage.cftTitle')}
              </h3>
              <p className="text-xs font-bold text-brand-plum-600 dark:text-brand-peach-300 mt-1">
                {t('aboutPage.cftSub')}
              </p>
              <p className="mt-3 text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                {t('aboutPage.cftDesc')}
              </p>
            </LiquidGlass>

            <LiquidGlass
              variant="card"
              tint="peach"
              className="p-6 rounded-2xl border-white/70 dark:border-white/10"
            >
              <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                {t('aboutPage.somaticTitle')}
              </h3>
              <p className="text-xs font-bold text-brand-peach-600 dark:text-brand-peach-300 mt-1">
                {t('aboutPage.somaticSub')}
              </p>
              <p className="mt-3 text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                {t('aboutPage.somaticDesc')}
              </p>
            </LiquidGlass>
          </div>
        </div>

        {/* Section 3: Core Values of Fruitful Mind */}
        <div className="mb-20">
          <LiquidGlass
            variant="hero"
            tint="default"
            className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/10"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white text-center mb-10">
              {t('aboutPage.valuesTitle')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-peach-100 text-brand-peach-600 dark:bg-brand-peach-900/40 dark:text-brand-peach-300 mb-2">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                  {t('aboutPage.val1Title')}
                </h3>
                <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {t('aboutPage.val1Desc')}
                </p>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage-100 text-brand-sage-600 dark:bg-brand-sage-900/40 dark:text-brand-sage-300 mb-2">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                  {t('aboutPage.val2Title')}
                </h3>
                <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {t('aboutPage.val2Desc')}
                </p>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-plum-100 text-brand-plum-700 dark:bg-brand-plum-900/40 dark:text-brand-peach-300 mb-2">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                  {t('aboutPage.val3Title')}
                </h3>
                <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {t('aboutPage.val3Desc')}
                </p>
              </div>
            </div>
          </LiquidGlass>
        </div>

        {/* CTA Bottom Banner */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
              className="rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold px-7 py-3.5 text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('common.freeDiscovery')}</span>
            </button>
            <a
              href="https://wa.me/919769512475"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp: +91 9769512475</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
