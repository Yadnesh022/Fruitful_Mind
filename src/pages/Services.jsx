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
  ArrowRight,
  ShieldCheck,
  Check,
  Smile,
  Target,
  Sparkle,
  BookOpen
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import OrganicWaveDivider from '../components/illustrations/OrganicWaveDivider';
import {
  PapayaDoodle,
  MangoDoodle,
  LeafDoodle,
  TeaCupDoodle,
  FloatingElement
} from '../components/illustrations/BrandDoodles';
import { useLanguage } from '../context/LanguageContext';

export default function Services({ onOpenBooking }) {
  const { t, language } = useLanguage();

  const servicesData = [
    {
      id: 'emotional-wellbeing',
      name: t('servicesPage.service1.name'),
      tagline: t('servicesPage.service1.tagline'),
      icon: Heart,
      tint: 'papaya',
      coverImage: '/assets/images/service-emotional-wellbeing.jpg',
      badgeText: '1-on-1 Sanctuary',
      badgeColor: 'bg-tint-peach text-papaya-deep dark:bg-papaya/20 dark:text-mango',
      accentColor: 'text-papaya-deep dark:text-mango',
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
      tint: 'leaf',
      coverImage: '/assets/images/service-career-counselling.jpg',
      badgeText: 'Purpose & Transitions',
      badgeColor: 'bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light',
      accentColor: 'text-leaf-deep dark:text-leaf-light',
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
      tint: 'grape',
      coverImage: '/assets/images/service-psychology-tuition.jpg',
      badgeText: 'Academic Mentorship',
      badgeColor: 'bg-tint-lavender text-grape dark:bg-grape/20 dark:text-grape-light',
      accentColor: 'text-grape dark:text-grape-light',
      whoItsFor: t('servicesPage.service3.whoItsFor') || [],
      whatWeWorkOn: t('servicesPage.service3.whatWeWorkOn') || [],
      format: t('servicesPage.service3.format'),
      ctaText: t('servicesPage.service3.ctaText')
    }
  ];

  const journeySteps = t('servicesPage.steps') || [];

  return (
    <div className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="Services | Emotional Wellbeing, Career Counselling, Psychology Tuition | Fruitful Mind"
        description="Comprehensive psychological services by Simran Mistry in Kothrud, Pune and Online: Emotional Wellbeing (Anxiety, Stress, Overthinking), Career Guidance, and Psychology Tuition (Grade 11, 12, Graduate)."
        canonical="https://fruitfulmind.in/services"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-96 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-leaf absolute top-[1600px] -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-grape absolute top-[2600px] -right-20 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Elements */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-12 z-10" duration={7} delay={0.3} yOffset={16}>
          <PapayaDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-44 right-14 z-10" duration={8} delay={0.9} yOffset={18}>
          <MangoDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-[800px] right-8 z-10" duration={6.5} delay={1.4} yOffset={14}>
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
            <Sparkles className="h-4 w-4 text-papaya" />
            <span>{t('servicesPage.headerBadge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink dark:text-white leading-[1.15]"
          >
            {t('servicesPage.headerTitle')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya-deep via-papaya to-mango">
              Guided with Care
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 dark:text-zinc-200 leading-relaxed"
          >
            {t('servicesPage.headerSubtitle')}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 3 DETAILED SERVICE CARDS WITH BIG IMAGERY                 */}
        {/* ========================================================= */}
        <div className="space-y-16 mb-28">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <LiquidGlass
                key={service.id}
                variant="card"
                tint="default"
                interactive={false}
                className="p-0 overflow-hidden rounded-3xl border-white/80 dark:border-white/15 shadow-2xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left Column: Visual Cover & Meta Header */}
                  <div className={`lg:col-span-5 relative flex flex-col justify-between ${isReversed ? 'lg:order-2' : ''}`}>
                    {/* Cover Photography */}
                    <div className="relative aspect-[16/11] lg:h-full lg:aspect-auto overflow-hidden min-h-[260px]">
                      <img
                        src={service.coverImage}
                        alt={service.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-md ${service.badgeColor}`}>
                          <Icon className="h-3.5 w-3.5" />
                          <span>{service.badgeText}</span>
                        </span>
                      </div>

                      {/* Bottom Info Overlay inside Image */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 dark:bg-ink/90 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-lg">
                        <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-ink dark:text-white leading-tight">
                          {service.name}
                        </h2>
                        <p className={`mt-1 text-xs font-bold ${service.accentColor}`}>
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Breakdown & Action */}
                  <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    {/* Format & Location Pills */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tint-peach/60 dark:bg-white/5 border border-papaya/20 text-xs font-semibold text-ink dark:text-white">
                        <Clock className="h-3.5 w-3.5 text-papaya-deep dark:text-mango" />
                        <span>{service.format}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tint-mint/60 dark:bg-white/5 border border-leaf/20 text-xs font-semibold text-ink dark:text-white">
                        <MapPin className="h-3.5 w-3.5 text-leaf-deep dark:text-leaf" />
                        <span>{t('servicesPage.locationPuneOnline')}</span>
                      </div>
                    </div>

                    {/* Split Content: Who it's for & What we work on */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Who it's for */}
                      <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-3">
                        <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-papaya-deep dark:text-mango flex items-center gap-1.5">
                          <Target className="h-4 w-4" />
                          <span>{t('servicesPage.whoTitle')}</span>
                        </h3>
                        <ul className="space-y-2 text-xs text-ink/80 dark:text-zinc-200">
                          {Array.isArray(service.whoItsFor) && service.whoItsFor.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-papaya font-bold">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What we work on */}
                      <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-3">
                        <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-leaf-deep dark:text-leaf-light flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{t('servicesPage.outcomesTitle')}</span>
                        </h3>
                        <ul className="space-y-2 text-xs text-ink/80 dark:text-zinc-200">
                          {Array.isArray(service.whatWeWorkOn) && service.whatWeWorkOn.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-leaf font-bold">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Booking Action Strip */}
                    <div className="pt-4 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => onOpenBooking(service.name)}
                        className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep to-papaya hover:from-papaya hover:to-mango text-white font-bold py-3.5 px-8 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                      >
                        <Calendar className="h-4 w-4" />
                        <span>{service.ctaText}</span>
                      </button>

                      <a
                        href="https://wa.me/919769512475"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto rounded-full bg-white/80 hover:bg-white text-ink font-semibold py-3 px-6 text-xs text-center border border-white/60 dark:bg-white/10 dark:text-white transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="h-4 w-4 text-emerald-600" />
                        <span>WhatsApp Enquiry</span>
                      </a>
                    </div>
                  </div>
                </div>
              </LiquidGlass>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* ROADMAP: WHAT TO EXPECT ACROSS SESSIONS                   */}
        {/* ========================================================= */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-tint-peach text-papaya-deep dark:bg-white/10 dark:text-mango">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t('servicesPage.journeyBadge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              {t('servicesPage.journeyTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
              {t('servicesPage.journeySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((st, i) => {
              const stepColors = [
                'bg-tint-peach/50 border-papaya/30',
                'bg-tint-butter/50 border-mango/30',
                'bg-tint-mint/50 border-leaf/30',
                'bg-tint-lavender/50 border-grape/30',
              ];
              const stepColor = stepColors[i % stepColors.length];

              return (
                <LiquidGlass
                  key={i}
                  variant="card"
                  tint="default"
                  interactive={true}
                  className={`p-6 rounded-3xl border shadow-lg hover:-translate-y-1.5 transition-transform duration-300 ${stepColor}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl font-black text-papaya-deep dark:text-mango">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 dark:bg-white/10 text-ink dark:text-white">
                      Phase {i + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-ink dark:text-white mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-muted dark:text-zinc-300 leading-relaxed">
                    {st.desc}
                  </p>
                </LiquidGlass>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM BOOKING HERO STRIP                                 */}
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
            <span>{t('common.bookNow')}</span>
          </span>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white max-w-xl mx-auto">
            {t('servicesPage.bottom.title')}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-ink/80 dark:text-zinc-200 max-w-lg mx-auto leading-relaxed">
            {t('servicesPage.bottom.subtitle')}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking(t('common.freeDiscovery'))}
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep via-papaya to-mango hover:from-papaya hover:to-mango text-white font-bold py-4 px-9 text-xs sm:text-sm shadow-xl shadow-papaya/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('servicesPage.bottom.ctaPrimary')}</span>
            </button>
            <a
              href="https://wa.me/919769512475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
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
