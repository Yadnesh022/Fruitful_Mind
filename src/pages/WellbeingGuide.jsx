import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Download,
  CheckCircle2,
  HeartHandshake,
  Wind,
  Shield,
  Compass,
  ArrowRight,
  Check,
  Activity,
  CheckCheck,
  MessageCircle,
  Calendar,
  Layers,
  FileText,
  CheckSquare,
  Sparkle
} from 'lucide-react';

import SEO from '../components/common/SEO';
import BreathingWidget from '../components/widgets/BreathingWidget';
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

export default function WellbeingGuide({ onOpenBooking }) {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [downloadState, setDownloadState] = useState('idle'); // 'idle' | 'success'

  const handleDownload = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setDownloadState('success');
  };

  const fallbackChapters = [
    {
      number: "01",
      title: "Down-Regulating the Nervous System",
      focus: "Somatic Grounding & Polyvagal Tools",
      description: "When the brain perceives chronic distress, reasoning offline. Learn physical somatic techniques—including the physiological sigh, bilateral tapping, and grounding anchors—to signal safety to your body in real time.",
      actionItem: "Daily 2-Minute Practice: 3 rounds of the double-inhale physiological sigh whenever you notice shoulder tension or shallow breathing.",
      checklist: [
        "Recognize physical pre-anxiety markers (jaw clench, chest tightness)",
        "Engage 4-4-4-4 box breathing to stimulate the vagus nerve",
        "5-4-3-2-1 Sensory grounding in your physical space"
      ]
    },
    {
      number: "02",
      title: "The CBT Cognitive Reframing Protocol",
      focus: "Thought Loops & Cognitive Distortions",
      description: "Our thoughts are mental events, not objective facts. Learn to identify catastrophizing, mind-reading, and all-or-nothing cognitive distortions, gently separating reality from catastrophic mental simulations.",
      actionItem: "Thought Audit: Write down the distressing thought, identify the distortion, and draft a neutral, evidence-grounded alternative.",
      checklist: [
        "Notice the emotional spike and catch the automatic thought",
        "Label the distortion (e.g. Fortune Telling, Black-and-White thinking)",
        "Generate a balanced reframe anchored in factual evidence"
      ]
    },
    {
      number: "03",
      title: "Guilt-Free Boundary Scripts",
      focus: "Relational Energy & Assertive Clarity",
      description: "Boundaries are not walls; they are the clear conditions under which you can love and connect with others without losing yourself. Master clear, compassionate verbal scripts that protect your energy without unnecessary apologies.",
      actionItem: "Script Template: 'I appreciate you thinking of me. Right now my capacity is full, so I cannot take this on.'",
      checklist: [
        "Audit where you feel resentment—it is a map of crossed boundaries",
        "Pause before automatic compliance ('Let me check my calendar and get back to you')",
        "Deliver the boundary clearly without over-explaining or defensiveness"
      ]
    },
    {
      number: "04",
      title: "Dissolving Task Paralysis & Procrastination",
      focus: "Emotional Friction & Activation Energy",
      description: "Procrastination is an emotional regulation problem, not a character deficit or laziness. Learn how to lower the emotional stakes, dismantle perfectionist standards, and establish micro-entry points into tasks.",
      actionItem: "The 5-Minute Micro-Agreement: Commit to opening the document or task for just 300 seconds with zero obligation to continue.",
      checklist: [
        "Identify the underlying fear (fear of failure, judgment, or imperfection)",
        "Shrink the first step down until it feels laughably easy to initiate",
        "Celebrate the initiation rather than waiting for outcome perfection"
      ]
    },
    {
      number: "05",
      title: "Cultivating Unconditional Self-Esteem",
      focus: "Core Worth & Softening the Inner Critic",
      description: "Moving away from fragile, performance-based self-worth toward unconditional human dignity. Discover how to relate to your struggles with warm, curious self-compassion instead of self-punishment.",
      actionItem: "Inner Mentor Reframing: Ask yourself: 'What would a deeply caring, objective mentor say to me about this situation right now?'",
      checklist: [
        "Distinguish between your behavior (what happened) and your identity (who you are)",
        "Practice mindful self-compassion during moments of error or regret",
        "Anchor your identity in core values rather than external metrics"
      ]
    }
  ];

  const rawChapters = t('wellbeingGuidePage.chapters');
  const chapters = Array.isArray(rawChapters) && rawChapters.length > 0 ? rawChapters : fallbackChapters;

  const chapterIcons = [
    Wind,
    BrainBulbDoodle,
    Shield,
    PacingClockDoodle,
    LadderDoodle
  ];

  return (
    <div className="relative pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sand-warm text-ink transition-colors duration-300">
      <SEO
        title="Emotional Health & Wellbeing Guide | Free Self-Guided Toolkit | Fruitful Mind"
        description="A practical, evidence-based self-guided psychological toolkit for managing anxiety, overthinking, healthy boundaries, and emotional regulation by Psychologist Simran Mistry."
        canonical="https://fruitfulmind.in/wellbeing-guide"
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
            <BookOpen className="h-4 w-4 text-primary" />
            <span>{t('wellbeingGuidePage.badge') || 'Free Practical Toolkit'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15]"
          >
            Emotional Health &{' '}
            <span className="marker-highlight text-primary-deep">
              Wellbeing Guide
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-ink-muted leading-relaxed"
          >
            {t('wellbeingGuidePage.subtitle') || 'A comprehensive, evidence-grounded toolkit created by Psychologist Simran Mistry to help you navigate anxiety, overthinking, boundaries, and emotional self-regulation.'}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* DOWNLOAD GUIDE BANNER CARD                                */}
        {/* ========================================================= */}
        <div className="mb-20">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-primary/20 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary text-white px-3.5 py-1 text-xs font-semibold shadow-sm">
                  <Download className="h-3.5 w-3.5 text-accent" />
                  <span>{t('wellbeingGuidePage.pdfBadge') || 'Self-Guided PDF Toolkit'}</span>
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                  {t('wellbeingGuidePage.pdfTitle') || 'Download the Complete Psychological Toolkit'}
                </h2>
                <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl">
                  {t('wellbeingGuidePage.pdfSubtitle') || 'Receive all 5 chapters, printable daily reflection logs, boundary script cheat sheets, and somatic grounding cards directly in your inbox.'}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-ink-muted pt-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Instant Digital PDF</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>100% Free Educational Resource</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Zero Spam • Strictly Confidential</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                {downloadState === 'success' ? (
                  <div className="rounded-xl bg-primary-tint/80 p-7 text-primary text-center space-y-3 border border-primary/20">
                    <CheckCheck className="h-10 w-10 text-primary mx-auto" />
                    <h4 className="font-heading text-lg font-bold">Toolkit Dispatched!</h4>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      We have sent your comprehensive toolkit to <strong>{email}</strong>. Please check your inbox (and promotions/updates folder).
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
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-primary/20 bg-sand-warm px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-3.5 px-6 text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <Download className="h-4 w-4" />
                      <span>{t('wellbeingGuidePage.downloadBtn') || 'Download Free Toolkit'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SOMATIC PRACTICE CALLOUT                                  */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary">
              <Activity className="h-3.5 w-3.5" />
              <span>Somatic Reset</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
              Ground Your Physiology First
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Cognitive reframing works best when your autonomic nervous system is calm. Take 60 seconds with this breathing cycle before reading the chapters.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <BreathingWidget />
          </div>
        </div>

        {/* ========================================================= */}
        {/* THE 5 CHAPTERS WITH CLINICAL FOCUS & ACTIONABLE CHECKLISTS*/}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-tint text-primary">
              <Layers className="h-3.5 w-3.5" />
              <span>Structured Chapters</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              The 5 Pillars of Emotional agency
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Step-by-step frameworks bridging clinical psychology theory with everyday action.
            </p>
          </div>

          <div className="space-y-8">
            {chapters.map((ch, idx) => {
              const IconComponent = chapterIcons[idx % chapterIcons.length];

              return (
                <div
                  key={idx}
                  className="p-6 sm:p-9 rounded-2xl bg-white border border-primary/15 shadow-soft transition-all duration-200 hover:shadow-soft-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Chapter Number */}
                    <div className="md:col-span-1 flex items-center justify-center md:justify-start">
                      <span className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                        {ch.number || `0${idx + 1}`}
                      </span>
                    </div>

                    {/* Chapter Content */}
                    <div className="md:col-span-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                          {ch.focus}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                        {ch.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {ch.description}
                      </p>

                      {ch.checklist && Array.isArray(ch.checklist) && (
                        <div className="pt-2 space-y-1.5">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block">
                            Key Steps:
                          </span>
                          {ch.checklist.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-center gap-2 text-xs text-ink">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Item Box */}
                    <div className="md:col-span-5 rounded-xl bg-sand-warm p-5 border border-primary/15 space-y-2">
                      <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <Sparkle className="h-3.5 w-3.5" />
                        <span>Actionable Micro-Practice</span>
                      </span>
                      <p className="text-xs text-ink leading-relaxed">
                        {ch.actionItem}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CTA: PERSONALIZED CONSULTATION                     */}
        {/* ========================================================= */}
        <div className="p-8 sm:p-12 rounded-2xl bg-primary-tint/60 border border-primary/20 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-primary shadow-sm">
            <HeartHandshake className="h-3.5 w-3.5 text-primary" />
            <span>Ready for Personalized Guidance?</span>
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
            Self-Help is a Start. Therapy is a Catalyst.
          </h2>

          <p className="text-xs sm:text-sm text-ink-muted max-w-lg mx-auto leading-relaxed">
            While toolkits provide valuable perspective, unravelling deeply ingrained emotional patterns often requires a trained, non-judgmental professional mirror.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking && onOpenBooking('Wellbeing Guide Consultation')}
              className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-3 px-8 text-xs sm:text-sm shadow-sm transition-all inline-flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Book a Consultation</span>
            </button>
            <a
              href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20have%20been%20reading%20the%20Wellbeing%20Guide%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-white hover:bg-sand-warm text-ink font-semibold py-3 px-6 text-xs text-center border border-primary/20 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>WhatsApp Simran</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
