import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Compass,
  GraduationCap,
  CheckCircle2,
  Calendar,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkle,
  Layers,
  HeartHandshake
} from 'lucide-react';

import SEO from '../components/common/SEO';
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

export default function Services({ onOpenBooking }) {
  const { t, language } = useLanguage();

  const servicesData = [
    {
      id: 'emotional-wellbeing',
      name: t('servicesPage.service1.name') || 'Emotional Wellbeing Counselling',
      tagline: t('servicesPage.service1.tagline') || 'Anxiety • Rumination • Burnout • Self-Esteem',
      icon: Heart,
      coverImage: '/assets/images/service-emotional-wellbeing.jpg',
      badgeText: 'Individual Therapy',
      badgeColor: 'bg-primary-tint text-primary',
      accentColor: 'text-primary',
      whoItsFor: t('servicesPage.service1.whoItsFor') || [
        'Individuals experiencing recurring anxiety, panic, or racing thoughts',
        'Those caught in chronic overthinking loops that disrupt sleep and peace',
        'People struggling with people-pleasing, guilt, or boundary exhaustion',
        'Anyone navigating low self-worth, imposter feelings, or life transitions'
      ],
      whatWeWorkOn: t('servicesPage.service1.whatWeWorkOn') || [
        'CBT thought restructuring to challenge catastrophic assumptions',
        'Polyvagal & somatic grounding techniques to regulate physical anxiety',
        'Practical boundary communication scripts for relationships and work',
        'Cultivating unconditional self-compassion and emotional resilience'
      ],
      format: '50-Minute Clinical Session',
      ctaText: 'Book Wellbeing Consultation'
    },
    {
      id: 'career-counselling',
      name: t('servicesPage.service2.name') || 'Career Counselling & Vocational Clarity',
      tagline: t('servicesPage.service2.tagline') || 'Strengths Alignment • Career Crossroads • Pivot Guidance',
      icon: Compass,
      coverImage: '/assets/images/service-career-counselling.jpg',
      badgeText: 'Vocational Clarity',
      badgeColor: 'bg-secondary-tint text-secondary',
      accentColor: 'text-secondary',
      whoItsFor: t('servicesPage.service2.whoItsFor') || [
        'Students and young graduates feeling overwhelmed by career options',
        'Working professionals experiencing burnout or deep vocational misalignment',
        'Individuals standing at a career crossroad seeking objective psychological clarity',
        'Those seeking to understand their core personality strengths and work values'
      ],
      whatWeWorkOn: t('servicesPage.service2.whatWeWorkOn') || [
        'Mapping psychological inclinations, innate strengths, and core interests',
        'Overcoming task paralysis and fear of making the "wrong" career decision',
        'Formulating realistic, stepwise transitional strategies without burnout',
        'Aligning career ambition with emotional well-being and personal values'
      ],
      format: '50-Minute Guidance Session',
      ctaText: 'Book Career Consultation'
    },
    {
      id: 'psychology-tuition',
      name: t('servicesPage.service3.name') || 'Psychology Tuition & Academic Mentorship',
      tagline: t('servicesPage.service3.tagline') || 'CBSE/ISC Grade 11 & 12 • Undergraduate Degree Support',
      icon: GraduationCap,
      coverImage: '/assets/images/service-psychology-tuition.jpg',
      badgeText: 'Academic Mentorship',
      badgeColor: 'bg-accent-tint text-ink',
      accentColor: 'text-primary-deep',
      whoItsFor: t('servicesPage.service3.whoItsFor') || [
        'Grade 11 and 12 psychology students preparing for CBSE or ISC board exams',
        'Undergraduate students enrolled in B.A. or B.Sc. Psychology degree programs',
        'Students struggling with complex theoretical concepts, research methods, or statistics',
        'Learners seeking mentorship on psychological case conceptualization and exams'
      ],
      whatWeWorkOn: t('servicesPage.service3.whatWeWorkOn') || [
        'Simplifying dense textbook models into intuitive, memorable mental frameworks',
        'Exam answering frameworks: structuring high-scoring psychological arguments',
        'Practical case studies, research methodologies, and biological basis of behavior',
        'Managing academic performance anxiety and building exam self-confidence'
      ],
      format: '60-Minute Mentorship Session',
      ctaText: 'Enquire for Tuition'
    }
  ];

  const journeySteps = t('servicesPage.steps') || [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "A calm 15-minute discovery call to share your challenges and map mutual fit."
    },
    {
      step: "02",
      title: "Deep Exploration",
      desc: "Unpacking underlying triggers, cognitive patterns, and nervous system responses."
    },
    {
      step: "03",
      title: "Actionable Tools",
      desc: "Learning customized CBT reframing, somatic grounding, and boundary protocols."
    },
    {
      step: "04",
      title: "Sustainable Autonomy",
      desc: "Integrating self-regulation habits so you feel grounded long after therapy."
    }
  ];

  return (
    <div className="relative pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sand-warm text-ink transition-colors duration-300">
      <SEO
        title="Services | Emotional Wellbeing, Career Counselling, Psychology Tuition | Fruitful Mind"
        description="Comprehensive psychological services by Simran Mistry in Kothrud, Pune and Online: Emotional Wellbeing (Anxiety, Stress, Overthinking), Career Guidance, and Psychology Tuition (Grade 11, 12, Graduate)."
        canonical="https://fruitfulmind.in/services"
      />

      {/* Floating subtle background shapes */}
      <FloatingShape shape="ring" className="absolute top-36 left-12 w-16 h-16 hidden lg:block" color="#12766E" delay={0.3} />
      <FloatingShape shape="dots" className="absolute top-44 right-14 w-14 h-14 hidden lg:block" color="#8C7AE6" delay={0.9} />

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
            <Layers className="h-4 w-4 text-primary" />
            <span>{t('servicesPage.headerBadge') || 'Pillars of Psychological Care'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15]"
          >
            {t('servicesPage.headerTitle') || 'Clinical Services'}{' '}
            <span className="marker-highlight text-primary-deep">
              Tailored to You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-ink-muted leading-relaxed"
          >
            {t('servicesPage.headerSubtitle') || 'Whether untangling emotional anxiety, navigating career crossroads, or mastering academic psychology, each service offers dedicated, confidential guidance.'}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 3 DETAILED SERVICE CARDS WITH BIG IMAGERY                 */}
        {/* ========================================================= */}
        <div className="space-y-12 mb-24">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                className="overflow-hidden rounded-2xl bg-white border border-primary/20 shadow-soft"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left Column: Visual Cover & Meta Header */}
                  <div className={`lg:col-span-5 relative flex flex-col justify-between ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[16/11] lg:h-full lg:aspect-auto overflow-hidden min-h-[280px]">
                      <img
                        src={service.coverImage}
                        alt={service.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent pointer-events-none" />

                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${service.badgeColor}`}>
                          <Icon className="h-3.5 w-3.5" />
                          <span>{service.badgeText}</span>
                        </span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-soft">
                        <h2 className="font-heading text-lg sm:text-xl font-bold text-ink leading-tight">
                          {service.name}
                        </h2>
                        <p className={`mt-0.5 text-xs font-semibold ${service.accentColor}`}>
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Breakdown & Action */}
                  <div className={`lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    {/* Format & Location Pills */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand-warm border border-primary/20 text-xs font-semibold text-ink">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        <span>{service.format}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand-warm border border-primary/20 text-xs font-semibold text-ink">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        <span>Kothrud, Pune Practice & Online (Google Meet)</span>
                      </div>
                    </div>

                    {/* Split Content: Who it's for & What we work on */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Who it's for */}
                      <div className="p-4 rounded-xl bg-sand-warm border border-primary/10 space-y-2.5">
                        <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                          <Target className="h-4 w-4" />
                          <span>Who This Is For</span>
                        </h3>
                        <ul className="space-y-1.5 text-xs text-ink-muted">
                          {Array.isArray(service.whoItsFor) && service.whoItsFor.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary font-bold">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What we work on */}
                      <div className="p-4 rounded-xl bg-sand-warm border border-primary/10 space-y-2.5">
                        <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Focus & Outcomes</span>
                        </h3>
                        <ul className="space-y-1.5 text-xs text-ink-muted">
                          {Array.isArray(service.whatWeWorkOn) && service.whatWeWorkOn.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-secondary font-bold">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Booking Action Strip */}
                    <div className="pt-4 border-t border-primary/10 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => onOpenBooking && onOpenBooking(service.name)}
                        className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-3 px-7 text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                      >
                        <Calendar className="h-4 w-4" />
                        <span>{service.ctaText}</span>
                      </button>

                      <a
                        href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto rounded-full bg-white hover:bg-sand-warm text-ink font-semibold py-2.5 px-5 text-xs text-center border border-primary/20 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span>WhatsApp Enquiry</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* ROADMAP: WHAT TO EXPECT ACROSS SESSIONS                   */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary">
              <Sparkle className="h-3.5 w-3.5" />
              <span>Session Progression</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              The Therapeutic Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              What to expect from your initial intake through to lasting emotional autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-primary/15 shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-bold text-primary">
                    {st.step || `0${i + 1}`}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sand-warm text-ink">
                    Phase {i + 1}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-ink mb-2">
                  {st.title}
                </h3>

                <p className="text-xs text-ink-muted leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM BOOKING HERO STRIP                                 */}
        {/* ========================================================= */}
        <div className="p-8 sm:p-12 rounded-2xl bg-primary-deep text-white text-center shadow-soft max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-accent shadow-sm">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            <span>{t('common.bookNow') || 'Take the First Step'}</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white max-w-xl mx-auto">
            Ready to Begin with a Quiet, Grounded Conversation?
          </h2>

          <p className="text-xs sm:text-sm text-[#D9F0EC] max-w-lg mx-auto leading-relaxed">
            Schedule a confidential 15-minute discovery call to discuss what is on your mind and see which psychological pathway best aligns with your needs.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking && onOpenBooking('Free Discovery Call')}
              className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-3 px-8 text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule Free Discovery Call</span>
            </button>
            <a
              href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20regarding%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 text-xs text-center border border-white/20 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
