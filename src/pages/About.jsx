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
  ArrowRight,
  Activity,
  Award,
  Coffee,
  Check,
  Compass,
  Sparkle,
  Smile,
  Home as HomeIcon
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import PhotoPlaceholder from '../components/illustrations/PhotoPlaceholder';
import BrainHeartIllustration from '../components/illustrations/BrainHeartIllustration';
import CounsellingSanctuaryIllustration from '../components/illustrations/CounsellingSanctuaryIllustration';
import OrganicWaveDivider from '../components/illustrations/OrganicWaveDivider';
import {
  PapayaDoodle,
  MangoDoodle,
  LeafDoodle,
  TeaCupDoodle,
  FloatingElement
} from '../components/illustrations/BrandDoodles';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.png';

export default function About({ onOpenBooking }) {
  const { t, language } = useLanguage();

  return (
    <div className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="About Simran Mistry | Psychologist & Counsellor Pune | Fruitful Mind"
        description="Learn about Simran Mistry, Psychologist (Master's in Counselling Psychology, 4+ years experience). Explore her eclectic, compassionate approach to emotional wellbeing in Kothrud, Pune."
        canonical="https://fruitfulmind.in/about"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-80 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-leaf absolute top-[1400px] -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-grape absolute top-[2200px] -right-20 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Brand Elements */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-10 z-10" duration={7} delay={0.2} yOffset={16}>
          <PapayaDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-48 right-12 z-10" duration={8} delay={0.8} yOffset={20}>
          <MangoDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-[650px] left-6 z-10" duration={6.5} delay={1.2} yOffset={14}>
          <LeafDoodle className="w-10 h-10 drop-shadow-sm" color="#1FA886" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ========================================================= */}
        {/* HEADER HERO (SPLIT TEXT & MOTION)                         */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-papaya/30 bg-tint-peach/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-papaya-deep backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-mango shadow-sm"
          >
            <Heart className="h-4 w-4 text-papaya" />
            <span>{t('aboutPage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink dark:text-white leading-[1.15]"
          >
            {t('aboutPage.heroTitle')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya-deep via-papaya to-mango">
              Fruitful Mind
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 dark:text-zinc-200 leading-relaxed"
          >
            {t('aboutPage.heroSubtitle')}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: PROFILE CARD & JOURNEY TIMELINE GRID           */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Clearly Marked Photo Placeholder for Simran */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <LiquidGlass
              variant="card"
              tint="papaya"
              interactive={false}
              className="p-6 sm:p-8 rounded-3xl border-white/80 dark:border-white/10 shadow-2xl"
            >
              {/* Photo Placeholder Card */}
              <PhotoPlaceholder
                src="/assets/images/simran-placeholder.jpg"
                alt="Simran Mistry - Psychologist Pune"
                type="simran"
                label="Client Photo Placeholder"
                sublabel="Simran Mistry, Psychologist"
                aspectRatio="aspect-[4/5]"
              />

              {/* Bio Meta Pills */}
              <div className="pt-6 text-center space-y-3">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
                  Simran Mistry
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-papaya-deep dark:text-mango">
                  {t('common.bySimran')}
                </p>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-tint-mint px-3.5 py-1 text-xs font-bold text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light border border-leaf/20">
                  <GraduationCap className="h-4 w-4" />
                  <span>Master's in Counselling Psychology</span>
                </div>

                <p className="text-xs text-muted dark:text-zinc-300">
                  {t('hero.stats.exp')} {t('hero.stats.expLabel')} • {t('common.puneOnline')}
                </p>
              </div>

              {/* Direct Booking action */}
              <div className="pt-6 mt-6 border-t border-papaya/15 dark:border-white/10 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
                  className="w-full rounded-full bg-gradient-to-r from-papaya-deep to-papaya hover:from-papaya hover:to-mango text-white font-bold py-3.5 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('common.freeDiscovery')}</span>
                </button>
                <a
                  href="https://wa.me/919769512475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-white/80 hover:bg-white text-ink font-semibold py-3 text-xs text-center border border-white/60 dark:bg-white/10 dark:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp: +91 9769512475</span>
                </a>
              </div>
            </LiquidGlass>
          </motion.div>

          {/* Right Column: Narrative Journey & Interactive Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Background & Evolution</span>
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink dark:text-white leading-tight">
                {t('aboutPage.journeyTitle')}
              </h2>
            </div>

            {/* Chunked Paragraph Cards with Subtle Left Accent */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-papaya/15 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-papaya-deep dark:text-mango">
                  <Brain className="h-4 w-4" />
                  <span>Academic Inception</span>
                </div>
                <p className="text-sm sm:text-base text-ink/85 dark:text-zinc-200 leading-relaxed">
                  {t('aboutPage.journeyP1')}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-leaf/15 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-leaf-deep dark:text-leaf">
                  <Compass className="h-4 w-4" />
                  <span>Eclectic Transformation</span>
                </div>
                <p className="text-sm sm:text-base text-ink/85 dark:text-zinc-200 leading-relaxed">
                  {t('aboutPage.journeyP2')}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-grape/15 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-grape dark:text-grape-light">
                  <Heart className="h-4 w-4" />
                  <span>The Fruitful Mind Vision</span>
                </div>
                <p className="text-sm sm:text-base text-ink/85 dark:text-zinc-200 leading-relaxed">
                  {t('aboutPage.journeyP3')}
                </p>
              </div>
            </div>

            {/* Direct Introduction Authentic Voice Card */}
            <div className="rounded-2xl border-l-4 border-papaya bg-tint-peach/70 p-5 dark:border-papaya dark:bg-white/5 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-papaya-deep dark:text-mango">
                <Coffee className="h-3.5 w-3.5" />
                <span>{t('welcomeBio.badge')}</span>
              </div>
              <blockquote className="text-xs sm:text-sm text-ink dark:text-zinc-100 italic leading-relaxed">
                "{t('welcomeBio.quote')}"
              </blockquote>
              <p className="text-[11px] text-muted dark:text-zinc-300 pt-1 font-semibold">
                — {t('welcomeBio.author')} ({t('welcomeBio.credentials')})
              </p>
            </div>

            {/* Qualifications Card with Lucide Icons */}
            <div className="rounded-2xl border border-papaya/20 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5 space-y-4 shadow-sm">
              <h3 className="font-heading text-base font-bold text-ink dark:text-white flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-leaf-deep dark:text-leaf" />
                <span>{t('aboutPage.qualTitle')}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink/85 dark:text-zinc-200">
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-tint-peach/40 dark:bg-white/5">
                  <CheckCircle2 className="h-4 w-4 text-papaya mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual1')}</span>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-tint-mint/40 dark:bg-white/5">
                  <CheckCircle2 className="h-4 w-4 text-leaf mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual2')}</span>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-tint-butter/40 dark:bg-white/5">
                  <CheckCircle2 className="h-4 w-4 text-mango mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual3')}</span>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-xl bg-tint-lavender/40 dark:bg-white/5">
                  <CheckCircle2 className="h-4 w-4 text-grape mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual4')}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: CLINIC & THERAPY SANCTUARY ENVIRONMENT        */}
        {/* ========================================================= */}
        <div className="mb-24">
          <LiquidGlass
            variant="card"
            tint="default"
            className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/15 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Clearly Marked Photo Placeholder for Clinic */}
              <div className="lg:col-span-5 space-y-3">
                <PhotoPlaceholder
                  src="/assets/images/clinic-placeholder.jpg"
                  alt="Fruitful Mind Therapy Clinic - Kothrud Pune"
                  type="clinic"
                  label="Client Photo Placeholder"
                  sublabel="Clinic & Counselling Space, Kothrud Pune"
                  aspectRatio="aspect-[4/3]"
                />
                <p className="text-center text-[11px] text-muted dark:text-zinc-400">
                  * Replace with photos of Simran's actual consultation room in Kothrud, Pune.
                </p>
              </div>

              {/* Right Column: Sanctuary Illustration & Key Attributes */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
                    <HomeIcon className="h-3.5 w-3.5" />
                    <span>The Physical & Emotional Space</span>
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
                    {language === 'mr' ? 'कोथरूड, पुणे येथील समुपदेशन कक्ष' : language === 'hi' ? 'कोथरूड, पुणे में सुरक्षित काउंसलिंग कक्ष' : 'A Calm Sanctuary for Your Mind in Kothrud'}
                  </h3>
                  <p className="text-sm text-muted dark:text-zinc-300 leading-relaxed">
                    {language === 'mr'
                      ? 'क्लिनिकमध्ये आल्यावर तुम्हाला कोणत्याही दवाखान्यासारखा दबाव वाटत नाही. नैसर्गिक प्रकाश, शांत वनस्पती आणि आरामदायक बैठक व्यवस्थेने तयार केलेले एक सुरक्षित ठिकाण.'
                      : language === 'hi'
                      ? 'क्लिनिक में आपको किसी अस्पताल जैसी औपचारिकता महसूस नहीं होगी। प्राकृतिक रोशनी, शांत पौधे और आरामदायक वातावरण के साथ एक सुरक्षित स्थान।'
                      : 'Step into a room intentionally designed to calm an overstimulated nervous system. Free from medical stiffness, enriched with warm lighting, cozy seating, and complete privacy.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-tint-peach/40 dark:bg-white/5 border border-papaya/20 text-center space-y-1">
                    <ShieldCheck className="h-5 w-5 text-papaya-deep dark:text-mango mx-auto" />
                    <h4 className="text-xs font-bold text-ink dark:text-white">100% Confidential</h4>
                    <p className="text-[10px] text-muted dark:text-zinc-300">Strict psychological ethics</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-tint-mint/40 dark:bg-white/5 border border-leaf/20 text-center space-y-1">
                    <MapPin className="h-5 w-5 text-leaf-deep dark:text-leaf mx-auto" />
                    <h4 className="text-xs font-bold text-ink dark:text-white">Kothrud, Pune</h4>
                    <p className="text-[10px] text-muted dark:text-zinc-300">Convenient, quiet locality</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-tint-lavender/40 dark:bg-white/5 border border-grape/20 text-center space-y-1">
                    <MessageCircle className="h-5 w-5 text-grape dark:text-grape-light mx-auto" />
                    <h4 className="text-xs font-bold text-ink dark:text-white">Online Globally</h4>
                    <p className="text-[10px] text-muted dark:text-zinc-300">Encrypted Google Meet</p>
                  </div>
                </div>
              </div>
            </div>
          </LiquidGlass>
        </div>

        {/* ========================================================= */}
        {/* SECTION 3: THE ECLECTIC APPROACH EXPLAINED VISUALLY       */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-peach px-3.5 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
              <Brain className="h-3.5 w-3.5 text-papaya" />
              <span>{t('aboutPage.eclecticBadge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              {t('aboutPage.eclecticTitle')}
            </h2>
            <p className="text-sm sm:text-base text-muted dark:text-zinc-300">
              {t('aboutPage.eclecticSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: CBT */}
            <LiquidGlass
              variant="card"
              tint="papaya"
              interactive={true}
              className="p-6 rounded-3xl border-white/70 dark:border-white/10 shadow-md hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-tint-peach text-papaya-deep dark:bg-papaya/20 dark:text-mango flex items-center justify-center mb-4 shadow-sm">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                {t('aboutPage.cbtTitle')}
              </h3>
              <p className="text-xs font-bold text-papaya-deep dark:text-mango mt-1">
                {t('aboutPage.cbtSub')}
              </p>
              <p className="mt-3 text-xs text-muted dark:text-zinc-300 leading-relaxed">
                {t('aboutPage.cbtDesc')}
              </p>
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[10px] font-bold text-papaya-deep dark:text-mango">
                <Check className="h-3 w-3" />
                <span>Restructuring Loops</span>
              </div>
            </LiquidGlass>

            {/* Card 2: Humanistic */}
            <LiquidGlass
              variant="card"
              tint="leaf"
              interactive={true}
              className="p-6 rounded-3xl border-white/70 dark:border-white/10 shadow-md hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light flex items-center justify-center mb-4 shadow-sm">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                {t('aboutPage.humanisticTitle')}
              </h3>
              <p className="text-xs font-bold text-leaf-deep dark:text-leaf-light mt-1">
                {t('aboutPage.humanisticSub')}
              </p>
              <p className="mt-3 text-xs text-muted dark:text-zinc-300 leading-relaxed">
                {t('aboutPage.humanisticDesc')}
              </p>
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[10px] font-bold text-leaf-deep dark:text-leaf-light">
                <Check className="h-3 w-3" />
                <span>Zero Judgment</span>
              </div>
            </LiquidGlass>

            {/* Card 3: CFT */}
            <LiquidGlass
              variant="card"
              tint="grape"
              interactive={true}
              className="p-6 rounded-3xl border-white/70 dark:border-white/10 shadow-md hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-tint-lavender text-grape dark:bg-grape/20 dark:text-grape-light flex items-center justify-center mb-4 shadow-sm">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                {t('aboutPage.cftTitle')}
              </h3>
              <p className="text-xs font-bold text-grape dark:text-grape-light mt-1">
                {t('aboutPage.cftSub')}
              </p>
              <p className="mt-3 text-xs text-muted dark:text-zinc-300 leading-relaxed">
                {t('aboutPage.cftDesc')}
              </p>
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[10px] font-bold text-grape dark:text-grape-light">
                <Check className="h-3 w-3" />
                <span>Inner Critic Relief</span>
              </div>
            </LiquidGlass>

            {/* Card 4: Somatic */}
            <LiquidGlass
              variant="card"
              tint="mango"
              interactive={true}
              className="p-6 rounded-3xl border-white/70 dark:border-white/10 shadow-md hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="h-12 w-12 rounded-2xl bg-tint-butter text-mango-600 dark:bg-mango/20 dark:text-mango flex items-center justify-center mb-4 shadow-sm">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                {t('aboutPage.somaticTitle')}
              </h3>
              <p className="text-xs font-bold text-mango-600 dark:text-mango mt-1">
                {t('aboutPage.somaticSub')}
              </p>
              <p className="mt-3 text-xs text-muted dark:text-zinc-300 leading-relaxed">
                {t('aboutPage.somaticDesc')}
              </p>
              <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[10px] font-bold text-mango-600 dark:text-mango">
                <Check className="h-3 w-3" />
                <span>Nervous System Regulation</span>
              </div>
            </LiquidGlass>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 4: CORE VALUES OF FRUITFUL MIND                   */}
        {/* ========================================================= */}
        <div className="mb-24">
          <LiquidGlass
            variant="hero"
            tint="papaya"
            className="p-8 sm:p-14 rounded-3xl border-white/80 dark:border-white/15 shadow-2xl relative overflow-hidden"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white text-center mb-12">
              {t('aboutPage.valuesTitle')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="space-y-3 text-center sm:text-left p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-papaya/20 shadow-sm transition-transform hover:-translate-y-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-tint-peach text-papaya-deep dark:bg-papaya/20 dark:text-mango mb-2">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                  {t('aboutPage.val1Title')}
                </h3>
                <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                  {t('aboutPage.val1Desc')}
                </p>
              </div>

              {/* Value 2 */}
              <div className="space-y-3 text-center sm:text-left p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-leaf/20 shadow-sm transition-transform hover:-translate-y-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light mb-2">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                  {t('aboutPage.val2Title')}
                </h3>
                <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                  {t('aboutPage.val2Desc')}
                </p>
              </div>

              {/* Value 3 */}
              <div className="space-y-3 text-center sm:text-left p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-grape/20 shadow-sm transition-transform hover:-translate-y-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-tint-lavender text-grape dark:bg-grape/20 dark:text-grape-light mb-2">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ink dark:text-white">
                  {t('aboutPage.val3Title')}
                </h3>
                <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                  {t('aboutPage.val3Desc')}
                </p>
              </div>
            </div>
          </LiquidGlass>
        </div>

        {/* ========================================================= */}
        {/* SECTION 5: CTA BOTTOM BANNER                              */}
        {/* ========================================================= */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-peach px-3.5 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
            <Calendar className="h-3.5 w-3.5 text-papaya" />
            <span>{t('common.bookNow')}</span>
          </span>

          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
            {language === 'mr' ? 'चर्चा सुरू करण्यास तयार आहात?' : language === 'hi' ? 'बातचीत शुरू करने के लिए तैयार हैं?' : 'Begin Your Journey with Curiosity & Care'}
          </h3>

          <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
            {t('common.puneOnline')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep via-papaya to-mango hover:from-papaya hover:to-mango text-white font-bold px-8 py-4 text-xs sm:text-sm shadow-xl shadow-papaya/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('common.freeDiscovery')}</span>
            </button>
            <a
              href="https://wa.me/919769512475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
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
