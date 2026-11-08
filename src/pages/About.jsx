import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ShieldCheck,
  Brain,
  GraduationCap,
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
  Home as HomeIcon,
  HeartHandshake
} from 'lucide-react';

import SEO from '../components/common/SEO';
import PhotoPlaceholder from '../components/illustrations/PhotoPlaceholder';
import {
  TangledLineDoodle,
  ThoughtCloudDoodle,
  BatteryDoodle,
  LadderDoodle,
  PacingClockDoodle,
  CompassDoodle,
  BrainBulbDoodle,
  FloatingShape
} from '../components/illustrations/BrandDoodles';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/logo.png';

export default function About({ onOpenBooking }) {
  const { t, language } = useLanguage();

  return (
    <div className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sand-warm text-ink transition-colors duration-300">
      <SEO
        title="About Simran Mistry | Psychologist & Counsellor Pune | Fruitful Mind"
        description="Learn about Simran Mistry, Psychologist (Master's in Counselling Psychology, 3+ years experience). Explore her eclectic, compassionate approach to emotional wellbeing in Kothrud, Pune."
        canonical="https://fruitfulmind.in/about"
      />

      {/* Floating Decorative Brand Elements */}
      <FloatingShape shape="ring" className="absolute top-36 left-10 w-16 h-16 hidden lg:block" color="#12766E" delay={0.2} />
      <FloatingShape shape="dots" className="absolute top-48 right-12 w-14 h-14 hidden lg:block" color="#8C7AE6" delay={0.8} />

      <div className="max-w-7xl mx-auto">
        {/* ========================================================= */}
        {/* HEADER HERO                                               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-tint px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary shadow-sm"
          >
            <HeartHandshake className="h-4 w-4 text-primary" />
            <span>{t('aboutPage.badge') || 'About the Practice'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15]"
          >
            {t('aboutPage.heroTitle') || 'The Clinical Philosophy Behind'}{' '}
            <span className="marker-highlight text-primary-deep">
              Fruitful Mind
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-ink-muted leading-relaxed"
          >
            {t('aboutPage.heroSubtitle') || 'Founded by Psychologist Simran Mistry to provide grounded, intellectually curious, and non-judgmental mental healthcare.'}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: PROFILE CARD & JOURNEY TIMELINE GRID           */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Clearly Marked Photo Placeholder for Simran */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-primary/20 shadow-soft">
              {/* Photo Placeholder Card */}
              <PhotoPlaceholder
                src="/assets/images/simran-placeholder.jpg"
                alt="Simran Mistry - Psychologist Pune"
                type="simran"
                label="Simran Mistry, Psychologist"
                sublabel="Founder, Fruitful Mind"
                aspectRatio="aspect-[4/5]"
                className="shadow-soft"
              />

              {/* Bio Meta Pills */}
              <div className="pt-6 text-center space-y-3">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
                  Simran Mistry
                </h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {t('common.bySimran') || 'Psychologist & Counsellor'}
                </p>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3.5 py-1 text-xs font-semibold text-primary border border-primary/20">
                  <GraduationCap className="h-4 w-4" />
                  <span>Master's in Counselling Psychology</span>
                </div>

                <p className="text-xs text-ink-muted">
                  3+ Years Clinical Practice • Kothrud, Pune & Online
                </p>
              </div>

              {/* Direct Booking action */}
              <div className="pt-6 mt-6 border-t border-primary/10 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking('Free 15-Min Discovery Call')}
                  className="w-full rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-3 text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('common.freeDiscovery') || 'Book 15-Min Discovery Call'}</span>
                </button>
                <a
                  href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20with%20Fruitful%20Mind."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-white hover:bg-sand-warm text-ink font-semibold py-3 text-xs text-center border border-primary/20 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>WhatsApp: +91 9769512475</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Journey & Interactive Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary">
                <Sparkle className="h-3.5 w-3.5" />
                <span>Background & Journey</span>
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                {t('aboutPage.journeyTitle') || 'A Compassionate Space Born Out of Curiosity'}
              </h2>
            </div>

            {/* Chunked Paragraph Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white border border-primary/15 shadow-soft space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <Brain className="h-4 w-4" />
                  <span>Academic Foundations</span>
                </div>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  {t('aboutPage.journeyP1') || 'With a Master’s degree in Counselling Psychology and rigorous clinical training, I established Fruitful Mind to bridge the gap between academic theory and real-world emotional suffering.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-primary/15 shadow-soft space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                  <Compass className="h-4 w-4" />
                  <span>The Eclectic Framework</span>
                </div>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  {t('aboutPage.journeyP2') || 'Human beings do not fit neatly into one single clinical manual. That is why I practice an eclectic methodology—drawing from Cognitive Behavioural Therapy (CBT), Client-Centered humanistic empathy, and somatic nervous system grounding.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-primary/15 shadow-soft space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-primary-deep">
                  <Heart className="h-4 w-4" />
                  <span>The "Curious You" Vision</span>
                </div>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  {t('aboutPage.journeyP3') || 'Our core tagline, "Discover The Curious You", reflects my belief that when we meet our anxiety and self-doubt with curiosity instead of self-judgment, sustainable healing begins.'}
                </p>
              </div>
            </div>

            {/* Direct Authentic Quote Card */}
            <div className="rounded-xl border-l-4 border-accent bg-accent-tint p-5 space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                <Coffee className="h-3.5 w-3.5 text-primary" />
                <span>Personal Note from Simran</span>
              </div>
              <blockquote className="text-xs sm:text-sm text-ink italic leading-relaxed">
                "{t('welcomeBio.quote') || 'Therapy is not about fixing something that is broken. It is a shared exploration of your inner world, untangling loops that once protected you but now hold you back.'}"
              </blockquote>
              <p className="text-[11px] text-ink-muted pt-1 font-semibold">
                — Simran Mistry (M.A. Counselling Psychology)
              </p>
            </div>

            {/* Qualifications Card */}
            <div className="rounded-xl border border-primary/15 bg-white p-6 space-y-4 shadow-soft">
              <h3 className="font-heading text-base font-bold text-ink flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>{t('aboutPage.qualTitle') || 'Professional Credentials & Ethics'}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-ink font-medium">
                <li className="flex items-start gap-2.5 p-2 rounded-lg bg-sand-warm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual1') || 'Master’s in Counselling Psychology'}</span>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-lg bg-sand-warm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual2') || '3+ Years Clinical & Academic Experience'}</span>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-lg bg-sand-warm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual3') || 'CBT & Humanistic Therapy Integration'}</span>
                </li>
                <li className="flex items-start gap-2.5 p-2 rounded-lg bg-sand-warm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t('aboutPage.qual4') || 'Strict Adherence to APA & Clinical Ethics'}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: CLINIC & THERAPY ENVIRONMENT                  */}
        {/* ========================================================= */}
        <div className="mb-24 p-8 sm:p-12 rounded-2xl bg-white border border-primary/15 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Photo Placeholder for Clinic */}
            <div className="lg:col-span-5 space-y-3">
              <PhotoPlaceholder
                src="/assets/images/clinic-placeholder.jpg"
                alt="Fruitful Mind Therapy Practice - Kothrud Pune"
                type="clinic"
                label="Practice Consultation Room"
                sublabel="Kothrud, Pune Practice Space"
                aspectRatio="aspect-[4/3]"
              />
              <p className="text-center text-[11px] text-ink-muted">
                * Safe, confidential consultation environment in Kothrud, Pune.
              </p>
            </div>

            {/* Right Column: Key Attributes */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary">
                  <HomeIcon className="h-3.5 w-3.5" />
                  <span>The Therapy Space</span>
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
                  A Quiet, Grounded Consultation Space in Kothrud
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Stepping into counselling should never feel sterile or intimidating. Our Kothrud practice is designed with soft natural lighting, peaceful quiet, and absolute confidentiality to ease an overactive nervous system.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-sand-warm border border-primary/15 text-center space-y-1">
                  <ShieldCheck className="h-5 w-5 text-primary mx-auto" />
                  <h4 className="text-xs font-bold text-ink">100% Confidential</h4>
                  <p className="text-[10px] text-ink-muted">Strict psychological ethics</p>
                </div>

                <div className="p-3.5 rounded-xl bg-sand-warm border border-primary/15 text-center space-y-1">
                  <MapPin className="h-5 w-5 text-primary mx-auto" />
                  <h4 className="text-xs font-bold text-ink">Kothrud, Pune</h4>
                  <p className="text-[10px] text-ink-muted">Convenient, quiet locality</p>
                </div>

                <div className="p-3.5 rounded-xl bg-sand-warm border border-primary/15 text-center space-y-1">
                  <MessageCircle className="h-5 w-5 text-secondary mx-auto" />
                  <h4 className="text-xs font-bold text-ink">Online Globally</h4>
                  <p className="text-[10px] text-ink-muted">Secure Google Meet video</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 3: THE ECLECTIC APPROACH EXPLAINED VISUALLY       */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3.5 py-1 text-xs font-semibold text-primary">
              <Brain className="h-3.5 w-3.5 text-primary" />
              <span>{t('aboutPage.eclecticBadge') || 'Clinical Modalities'}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              {t('aboutPage.eclecticTitle') || 'The Eclectic Therapy Approach'}
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              {t('aboutPage.eclecticSubtitle') || 'Tailoring evidence-grounded modalities to match your psychological constitution.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: CBT */}
            <div className="p-6 rounded-2xl bg-white border border-primary/15 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="h-11 w-11 rounded-xl bg-primary-tint text-primary flex items-center justify-center mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">
                {t('aboutPage.cbtTitle') || 'Cognitive Behavioural (CBT)'}
              </h3>
              <p className="text-xs font-semibold text-primary mt-1">
                Restructuring Thought Spirals
              </p>
              <p className="mt-2.5 text-xs text-ink-muted leading-relaxed">
                {t('aboutPage.cbtDesc') || 'Identifying automatic unhelpful cognitive distortions, testing underlying assumptions, and developing balanced reappraisals.'}
              </p>
            </div>

            {/* Card 2: Humanistic */}
            <div className="p-6 rounded-2xl bg-white border border-primary/15 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="h-11 w-11 rounded-xl bg-secondary-tint text-secondary flex items-center justify-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">
                {t('aboutPage.humanisticTitle') || 'Person-Centered Therapy'}
              </h3>
              <p className="text-xs font-semibold text-secondary mt-1">
                Unconditional Regard
              </p>
              <p className="mt-2.5 text-xs text-ink-muted leading-relaxed">
                {t('aboutPage.humanisticDesc') || 'A deeply respectful, collaborative relationship where you lead the pace and find your own intrinsic wisdom.'}
              </p>
            </div>

            {/* Card 3: CFT */}
            <div className="p-6 rounded-2xl bg-white border border-primary/15 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="h-11 w-11 rounded-xl bg-primary-tint text-primary flex items-center justify-center mb-4">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">
                {t('aboutPage.cftTitle') || 'Compassion-Focused Tools'}
              </h3>
              <p className="text-xs font-semibold text-primary mt-1">
                Softening the Inner Critic
              </p>
              <p className="mt-2.5 text-xs text-ink-muted leading-relaxed">
                {t('aboutPage.cftDesc') || 'Dismantling shame, guilt, and imposter feelings by activating the neural soothing-affiliative system.'}
              </p>
            </div>

            {/* Card 4: Somatic */}
            <div className="p-6 rounded-2xl bg-white border border-primary/15 shadow-soft hover:shadow-soft-lg transition-all">
              <div className="h-11 w-11 rounded-xl bg-accent-tint text-ink flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">
                {t('aboutPage.somaticTitle') || 'Somatic & Mindfulness'}
              </h3>
              <p className="text-xs font-semibold text-primary mt-1">
                Nervous System Grounding
              </p>
              <p className="mt-2.5 text-xs text-ink-muted leading-relaxed">
                {t('aboutPage.somaticDesc') || 'Polyvagal breathing and physical grounding anchors to calm bodily agitation before cognitive processing.'}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 4: CORE VALUES                                    */}
        {/* ========================================================= */}
        <div className="mb-24 p-8 sm:p-12 rounded-2xl bg-white border border-primary/15 shadow-soft">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink text-center mb-10">
            {t('aboutPage.valuesTitle') || 'Core Practice Values'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-5 rounded-xl bg-sand-warm border border-primary/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-tint text-primary mb-1">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">
                {t('aboutPage.val1Title') || 'Absolute Confidentiality'}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {t('aboutPage.val1Desc') || 'Your discussions, personal history, and records are protected under clinical ethical mandates.'}
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-sand-warm border border-primary/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary-tint text-secondary mb-1">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">
                {t('aboutPage.val2Title') || 'Stigma-Free Exploration'}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {t('aboutPage.val2Desc') || 'Mental health is treated with the same normalcy as physical health—zero shame, zero judgment.'}
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-sand-warm border border-primary/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-tint text-primary mb-1">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink">
                {t('aboutPage.val3Title') || 'Client Autonomy & Agency'}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {t('aboutPage.val3Desc') || 'You remain the expert on your life; I serve as your objective guide and psychological toolkit provider.'}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 5: CTA BOTTOM BANNER                              */}
        {/* ========================================================= */}
        <div className="text-center space-y-4 max-w-2xl mx-auto p-8 rounded-2xl bg-primary-tint/60 border border-primary/20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-primary shadow-sm">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            <span>Schedule with Simran</span>
          </span>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
            Begin Your Conversation with Curiosity & Care
          </h3>

          <p className="text-xs sm:text-sm text-ink-muted">
            Kothrud, Pune Practice & Online Consultations Worldwide
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenBooking && onOpenBooking('Free 15-Min Discovery Call')}
              className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold px-8 py-3.5 text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>Book 15-Min Discovery Call</span>
            </button>
            <a
              href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20with%20Fruitful%20Mind."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-white hover:bg-sand-warm text-ink font-semibold px-8 py-3.5 text-xs sm:text-sm border border-primary/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>WhatsApp: +91 9769512475</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
