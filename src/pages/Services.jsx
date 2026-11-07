import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Compass,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import { useLanguage } from '../context/LanguageContext';

export default function Services({ onOpenBooking }) {
  const { t } = useLanguage();

  const servicesData = [
    {
      id: 'emotional-wellbeing',
      name: t('servicesPage.service1.name'),
      tagline: t('servicesPage.service1.tagline'),
      icon: Heart,
      tint: 'peach',
      whoItsFor: t('servicesPage.service1.whoItsFor') || [],
      whatWeWorkOn: t('servicesPage.service1.whatWeWorkOn') || [],
      format: t('servicesPage.service1.format'),
      ctaText: t('servicesPage.service1.ctaText')
    },
    {
      id: 'career-counselling',
      name: t('servicesPage.service2.name'),
      tagline: t('servicesPage.service2.tagline'),
      icon: Compass,
      tint: 'sage',
      whoItsFor: t('servicesPage.service2.whoItsFor') || [],
      whatWeWorkOn: t('servicesPage.service2.whatWeWorkOn') || [],
      format: t('servicesPage.service2.format'),
      ctaText: t('servicesPage.service2.ctaText')
    },
    {
      id: 'psychology-tuition',
      name: t('servicesPage.service3.name'),
      tagline: t('servicesPage.service3.tagline'),
      icon: GraduationCap,
      tint: 'default',
      whoItsFor: t('servicesPage.service3.whoItsFor') || [],
      whatWeWorkOn: t('servicesPage.service3.whatWeWorkOn') || [],
      format: t('servicesPage.service3.format'),
      ctaText: t('servicesPage.service3.ctaText')
    }
  ];

  const journeySteps = t('servicesPage.steps') || [];

  return (
    <div className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO
        title="Services | Emotional Wellbeing, Career Counselling, Psychology Tuition | Fruitful Mind"
        description="Comprehensive psychological services by Simran Mistry in Kothrud, Pune and Online: Emotional Wellbeing (Anxiety, Stress, Overthinking), Career Guidance, and Psychology Tuition (Grade 11, 12, Graduate)."
        canonical="https://fruitfulmind.in/services"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-96 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
            <Sparkles className="h-4 w-4 text-brand-peach-600 dark:text-brand-peach-300" />
            <span>{t('servicesPage.headerBadge')}</span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-plum-950 dark:text-white leading-tight">
            {t('servicesPage.headerTitle')}
          </h1>

          <p className="text-base sm:text-lg text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
            {t('servicesPage.headerSubtitle')}
          </p>
        </div>

        {/* 3 Detailed Service Cards */}
        <div className="space-y-12 mb-24">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <LiquidGlass
                key={service.id}
                variant="card"
                tint={service.tint}
                interactive={false}
                className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/10 shadow-xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 dark:bg-white/10 text-brand-plum-700 dark:text-brand-peach-300 shadow-md">
                      <Icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
                        {service.name}
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm font-bold text-brand-peach-600 dark:text-brand-peach-300">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/70 dark:bg-white/5 p-4 border border-white/60 dark:border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200">
                        <Clock className="h-4 w-4 text-brand-peach-500" />
                        <span>{service.format}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200">
                        <MapPin className="h-4 w-4 text-brand-sage-600" />
                        <span>{t('servicesPage.locationPuneOnline')}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenBooking(service.name)}
                        className="w-full sm:w-auto rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-7 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
                      >
                        <Calendar className="h-4 w-4" />
                        <span>{service.ctaText}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Deep Breakdown */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Who it's for */}
                    <div className="rounded-2xl bg-white/80 dark:bg-brand-canvas-darkCard/80 p-6 border border-white/60 dark:border-white/10 shadow-sm space-y-3">
                      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-plum-900 dark:text-brand-peach-200 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-brand-peach-500" />
                        <span>{t('servicesPage.whoTitle')}</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs text-brand-plum-700 dark:text-brand-plum-200">
                        {Array.isArray(service.whoItsFor) && service.whoItsFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-peach-500 font-bold">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What we work on */}
                    <div className="rounded-2xl bg-white/80 dark:bg-brand-canvas-darkCard/80 p-6 border border-white/60 dark:border-white/10 shadow-sm space-y-3">
                      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-plum-900 dark:text-brand-peach-200 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-sage-600" />
                        <span>{t('servicesPage.outcomesTitle')}</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs text-brand-plum-700 dark:text-brand-plum-200">
                        {Array.isArray(service.whatWeWorkOn) && service.whatWeWorkOn.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-sage-600 font-bold">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </LiquidGlass>
            );
          })}
        </div>

        {/* Roadmap: What to Expect across our sessions */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300">
              {t('servicesPage.journeyBadge')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('servicesPage.journeyTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
              {t('servicesPage.journeySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((st, i) => (
              <LiquidGlass
                key={i}
                variant="card"
                tint="default"
                interactive={false}
                className="p-6 rounded-2xl border-white/70 dark:border-white/10"
              >
                <span className="font-heading text-3xl font-black text-brand-peach-500 dark:text-brand-peach-300 block mb-2">
                  {st.step}
                </span>
                <h3 className="font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {st.desc}
                </p>
              </LiquidGlass>
            ))}
          </div>
        </div>

        {/* Bottom Booking Strip */}
        <LiquidGlass
          variant="hero"
          tint="peach"
          className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/15 text-center shadow-2xl"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
            {t('servicesPage.bottom.title')}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-brand-plum-800 dark:text-brand-plum-200 max-w-lg mx-auto leading-relaxed">
            {t('servicesPage.bottom.subtitle')}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking(t('common.freeDiscovery'))}
              className="w-full sm:w-auto rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-8 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('servicesPage.bottom.ctaPrimary')}</span>
            </button>
            <a
              href="https://wa.me/919769512475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-7 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t('servicesPage.bottom.ctaSecondary')}</span>
            </a>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}
