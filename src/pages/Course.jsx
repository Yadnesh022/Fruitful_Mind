import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
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
  ShieldCheck,
  Sparkle
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

export default function Course({ onOpenBooking }) {
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState(0);

  const fallbackModules = [
    {
      num: "Module 01",
      title: "The Neuroscience of Overthinking & Nervous System",
      outcomes: [
        "Demystifying why the brain defaults to chronic rumination under stress",
        "Polyvagal theory in practice: shifting from sympathetic fight-or-flight to safety",
        "The 3-minute somatic reset protocol for real-time anxiety de-escalation"
      ]
    },
    {
      num: "Module 02",
      title: "Dismantling Task Paralysis & Perfectionism",
      outcomes: [
        "Uncoupling productivity from character: why procrastination is emotional friction",
        "Overcoming the 'impossibly high standard' trap that prevents task initiation",
        "Designing frictionless micro-agreements to build daily forward momentum"
      ]
    },
    {
      num: "Module 03",
      title: "Unconditional Self-Esteem & Boundary Scripts",
      outcomes: [
        "Decoupling your core human worth from external achievement and praise",
        "Neutralizing the vicious inner critic using compassion-focused cognitive reframing",
        "Verbal boundary scripts for saying 'No' firmly without defensive guilt"
      ]
    },
    {
      num: "Module 04",
      title: "Lifelong Psychological Agency & Integration",
      outcomes: [
        "Constructing your personalized cognitive toolkit for ongoing emotional regulation",
        "Navigating relationship ruptures and relational blueprints with calm clarity",
        "Long-term relapse prevention plan: maintaining grounded equilibrium"
      ]
    }
  ];

  const rawModules = t('coursePage.modules');
  const modules = Array.isArray(rawModules) && rawModules.length > 0 ? rawModules : fallbackModules;

  const fallbackFaqs = [
    {
      q: "What is the format of the 4-week masterclass?",
      a: "The masterclass consists of 4 weekly live interactive online sessions (75 minutes each) on secure Google Meet, accompanied by printable exercise workbooks, weekly guided somatic audios, and dedicated Q&A support with Simran."
    },
    {
      q: "How large are the cohorts?",
      a: "Cohorts are strictly capped at 8 to 12 participants to ensure an intimate, safe, and deeply personalized group environment where everyone receives attentive guidance."
    },
    {
      q: "Do I have to share deeply personal details in the group?",
      a: "Not at all. You share only what feels comfortable. The cohort is structured around practical psychological learning and experiential exercises rather than forced group disclosures."
    },
    {
      q: "What if I miss a live session?",
      a: "All conceptual lecture portions and grounding exercises are recorded and shared privately with cohort members for review throughout the course duration."
    }
  ];

  const rawFaqs = t('coursePage.faqs');
  const courseFaqs = Array.isArray(rawFaqs) && rawFaqs.length > 0 ? rawFaqs : fallbackFaqs;

  const highlights = [
    { title: "4 Weeks", sub: "Live Weekly Cohort" },
    { title: "Intimate Group", sub: "Capped at 12 Participants" },
    { title: "Workbook Included", sub: "Printable CBT Exercises" },
    { title: "Simran Mistry", sub: "Direct Clinical Mentorship" }
  ];

  return (
    <div className="relative pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sand-warm text-ink transition-colors duration-300">
      <SEO
        title="Emotional Wellbeing Course | 4-Week Masterclass by Simran Mistry"
        description="The 4-Week Emotional Wellbeing Masterclass by Psychologist Simran Mistry. Transform overthinking, conquer procrastination, and cultivate grounded self-compassion."
        canonical="https://fruitfulmind.in/course"
      />

      {/* Floating subtle background shapes */}
      <FloatingShape shape="ring" className="absolute top-36 left-12 w-16 h-16 hidden lg:block" color="#12766E" delay={0.2} />
      <FloatingShape shape="dots" className="absolute top-48 right-14 w-14 h-14 hidden lg:block" color="#8C7AE6" delay={0.8} />

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
            <Sparkle className="h-4 w-4 text-primary" />
            <span>{t('coursePage.badge') || 'Guided 4-Week Cohort'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15]"
          >
            The Emotional Wellbeing{' '}
            <span className="marker-highlight text-primary-deep">
              Masterclass
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-ink-muted leading-relaxed"
          >
            {t('coursePage.subtitle') || 'A structured 4-week guided journey designed by Psychologist Simran Mistry to help you dissolve overthinking, overcome task paralysis, and build sustainable self-compassion.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onOpenBooking && onOpenBooking('Course Waitlist - Emotional Wellbeing')}
              className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-3.5 px-8 text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Join Next Cohort Waitlist</span>
            </button>
            <a
              href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20the%20Emotional%20Wellbeing%20Course."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-white hover:bg-sand-warm text-ink font-semibold py-3.5 px-7 text-sm shadow-sm border border-primary/20 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>Ask on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Featured Big Cover Banner */}
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-soft border border-primary/15">
          <img
            src="/assets/images/course-mindfulness.jpg"
            alt="Emotional Wellbeing Masterclass Workshop"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                Small Intimate Cohorts
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
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
            const IconComponent = icons[i % icons.length];
            return (
              <div
                key={i}
                className="p-6 text-center rounded-2xl bg-white border border-primary/15 shadow-soft"
              >
                <div className="h-10 w-10 rounded-xl mx-auto mb-3 flex items-center justify-center bg-primary-tint text-primary">
                  <IconComponent className="h-5 w-5" />
                </div>
                <span className="font-heading text-lg font-bold text-ink block">
                  {hl.title}
                </span>
                <span className="text-xs text-ink-muted mt-0.5 block">
                  {hl.sub}
                </span>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 4 CURRICULUM MODULES                                      */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Syllabus Breakdown</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              4 Weeks of Grounded Transformation
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Each module combines clinical psychological education, experiential practice, and personalized Q&A.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white border border-primary/15 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block rounded-full bg-primary-tint text-primary px-3 py-1 text-xs font-bold">
                      {mod.num || `Week 0${i + 1}`}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      75-Min Live Session
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-bold text-ink mb-3">
                    {mod.title}
                  </h3>

                  <ul className="space-y-2.5 text-xs text-ink-muted">
                    {Array.isArray(mod.outcomes) && mod.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* COURSE FAQS ACCORDION                                     */}
        {/* ========================================================= */}
        <div className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Course Details</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {courseFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-primary/15 overflow-hidden shadow-soft"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-ink cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-primary transition-transform duration-300 flex-shrink-0 ${
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
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ink-muted border-t border-primary/10 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CTA CARD                                           */}
        {/* ========================================================= */}
        <div className="p-8 sm:p-12 rounded-2xl bg-primary-deep text-white text-center shadow-soft max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-accent shadow-sm">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            <span>Cohort Registration</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white max-w-xl mx-auto">
            Reserve Your Place in the Next Masterclass
          </h2>

          <p className="text-xs sm:text-sm text-[#D9F0EC] max-w-lg mx-auto leading-relaxed">
            Spaces are limited to preserve small group intimacy. Sign up to receive upcoming dates, curriculum details, and early enrollment access.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking && onOpenBooking('Course Waitlist')}
              className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-3 px-8 text-xs sm:text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Join Next Cohort Waitlist</span>
            </button>
            <a
              href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20ask%20about%20the%20Emotional%20Wellbeing%20Course."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 text-xs text-center border border-white/20 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              <span>Ask a Question on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
