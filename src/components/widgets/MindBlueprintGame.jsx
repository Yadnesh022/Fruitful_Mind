import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Sparkles,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageCircle,
  HelpCircle,
  Compass,
  Activity,
  Layers,
  ChevronRight,
  Lightbulb,
  Sparkle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Mind Blueprint Explorer (Psychological Q&A Assessment Game)
 * An interactive, gamified psychological assessment where clients discover
 * their cognitive patterns, autonomic response mechanisms, and personalized counselling fit.
 */
export default function MindBlueprintGame({ onOpenBooking, className = '' }) {
  const { t, language } = useLanguage();

  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1 = Q1, 2 = Q2, 3 = Q3, 4 = Result
  const [selectedAnswers, setSelectedAnswers] = useState({
    trigger: null,
    coping: null,
    need: null,
  });

  // Stage 1: The Primary Cognitive / Emotional Stressor
  const triggerOptions = [
    {
      id: 'rumination',
      title: 'Night-Time Thought Spirals',
      subtitle: 'Lying awake replaying conversations, catastrophizing tomorrow, mental loops that won’t turn off.',
      icon: '🌀',
      tag: 'Cognitive Rumination',
    },
    {
      id: 'overdrive',
      title: 'High-Alert Restlessness',
      subtitle: 'Shallow breathing, chest tightness, constant feeling that something is about to go wrong.',
      icon: '⚡',
      tag: 'Nervous System Alert',
    },
    {
      id: 'inner_critic',
      title: 'The Relentless Inner Judge',
      subtitle: 'Persistent imposter feelings, harsh self-criticism, and conditional worth based on achievement.',
      icon: '🪞',
      tag: 'Conditional Self-Worth',
    },
    {
      id: 'paralysis',
      title: 'Task Paralysis & Delay',
      subtitle: 'Freezing before starting important tasks, avoidance scrolling, followed by heavy shame.',
      icon: '⏳',
      tag: 'Emotional Task Avoidance',
    },
    {
      id: 'crossroads',
      title: 'Career & Identity Fog',
      subtitle: 'Paralyzed by vocational choices, feeling misaligned with current work or academic direction.',
      icon: '🧭',
      tag: 'Vocational Crossroads',
    },
    {
      id: 'boundary_burnout',
      title: 'Over-Accommodation & Guilt',
      subtitle: 'Saying yes when you want to say no, feeling emotionally depleted from carrying others’ emotions.',
      icon: '🛑',
      tag: 'Diffused Boundaries',
    },
  ];

  // Stage 2: The Subconscious Defense / Coping Mechanism
  const copingOptions = [
    {
      id: 'intellectualize',
      title: 'Hyper-Analysis',
      subtitle: 'I try to out-think the feeling by researching and analyzing everything until exhausted.',
      type: 'Cognitive Shielding',
    },
    {
      id: 'overwork',
      title: 'Over-Functioning',
      subtitle: 'I stay extremely busy to avoid the underlying discomfort and silence.',
      type: 'Performance Coping',
    },
    {
      id: 'withdraw',
      title: 'Emotional Withdrawal',
      subtitle: 'I retreat into isolation, hiding how deeply I am struggling from friends and family.',
      type: 'Self-Protective Isolation',
    },
    {
      id: 'numbing',
      title: 'Dopamine Distraction',
      subtitle: 'I turn to phone scrolling, food, or binge-watching to numb the restless mental tension.',
      type: 'Avoidance Mechanism',
    },
  ];

  // Stage 3: The Desired Clinical Transformation
  const needOptions = [
    {
      id: 'safe_catharsis',
      title: 'A Safe, Non-Judgmental Mirror',
      subtitle: 'An objective space where no thought is "crazy" and I can unpack without burdening anyone.',
    },
    {
      id: 'practical_cbt',
      title: 'Concrete Psychological Tools',
      subtitle: 'Evidence-backed CBT thought-restructuring and somatic breathing techniques for anxiety.',
    },
    {
      id: 'career_clarity',
      title: 'Vocational Direction & Strength Alignment',
      subtitle: 'Clarity on my psychological strengths, values, and tangible career next steps.',
    },
    {
      id: 'academic_tuition',
      title: 'Psychology Academic Mentorship',
      subtitle: 'Deep conceptual mastery of psychology for Grade 11, 12, or degree examinations.',
    },
  ];

  const handleSelectAnswer = (stageKey, value) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [stageKey]: value,
    }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({ trigger: null, coping: null, need: null });
  };

  // Profile generator based on selections
  const getProfileResult = () => {
    const { trigger, coping, need } = selectedAnswers;

    let profileName = 'The Analytical Over-Thinker';
    let psychologicalAnalysis =
      'Your nervous system has learned that vigilance is safety. When stressors emerge, your brain ramps up mental simulations to prevent vulnerability, which paradoxically sustains anxiety and physical fatigue.';
    let rootMechanism =
      'Hyperactive Default Mode Network (DMN) combined with prefrontal cognitive overload.';
    let tailoredActionPlan = [
      'Down-regulate autonomic arousal using the physiological sigh and 4-4-4-4 box breathing before cognitive work.',
      'Separate automatic thoughts from verifiable facts using structured CBT thought records.',
      'Establish a 15-minute "worry containment" container instead of 24/7 rumination.',
    ];
    let recommendedService = 'Emotional Wellbeing Counselling';

    if (trigger === 'overdrive') {
      profileName = 'The High-Alert Protector';
      psychologicalAnalysis =
        'Your nervous system remains locked in a sympathetic fight-or-flight response. Even in tranquil environments, the body prepares for sudden disruption, making true relaxation feel physically uncomfortable.';
      rootMechanism = 'Sympathetic nervous system sensitization and vagal tone imbalance.';
      tailoredActionPlan = [
        'Vagus nerve reset through somatic grounding and bilateral tactile anchoring.',
        'Gradual desensitization to somatic anxiety sensations.',
        'Creating non-negotiable mental pauses throughout high-stress days.',
      ];
      recommendedService = 'Emotional Wellbeing Counselling';
    } else if (trigger === 'inner_critic' || coping === 'overwork') {
      profileName = 'The Performance-Driven Achiever';
      psychologicalAnalysis =
        'Your sense of worth is heavily tied to external output and competence. You hold extraordinarily demanding standards for yourself that you would never demand of a friend, creating an invisible baseline of self-doubt.';
      rootMechanism = 'Conditional self-regard and internalized perfectionistic schemas.';
      tailoredActionPlan = [
        'Softening the harsh internal critic through mindful self-compassion protocols.',
        'Decoupling your core human dignity from productivity and praise.',
        'Permission to inhabit non-optimized, joyful rest without guilt.',
      ];
      recommendedService = 'Emotional Wellbeing Counselling';
    } else if (trigger === 'paralysis' || coping === 'numbing') {
      profileName = 'The Protective Procrastinator';
      psychologicalAnalysis =
        'Your task paralysis is an emotional defense against perceived inadequacy or overwhelm. The brain registers the task as an emotional threat, triggering avoidance behaviors to secure immediate relief.';
      rootMechanism = 'Short-term mood repair prioritizing immediate anxiety reduction over long-term goals.';
      tailoredActionPlan = [
        'Lowering activation energy through 3-minute micro-commitments.',
        'Dismantling all-or-nothing perfectionist thresholds.',
        'Neutralizing task shame and cultivating momentum through structured initiation.',
      ];
      recommendedService = 'Emotional Wellbeing Counselling';
    } else if (trigger === 'crossroads' || need === 'career_clarity') {
      profileName = 'The Purpose Seeker at Crossroads';
      psychologicalAnalysis =
        'You are caught in decision paralysis where too many potential trajectories create existential anxiety. You need an objective psychological framework to reconcile internal values with market realities.';
      rootMechanism = 'Analysis paralysis driven by fear of irreversible suboptimal choice.';
      tailoredActionPlan = [
        'Psychometric vocational assessment to map genuine inclinations.',
        'Values clarification exercise to eliminate societal expectations.',
        'Iterative micro-experiments to test career pathways with low risk.',
      ];
      recommendedService = 'Career Counselling & Clarity';
    } else if (trigger === 'boundary_burnout') {
      profileName = 'The Empathetic Over-Giver';
      psychologicalAnalysis =
        'You have highly tuned empathy, but thin relational filters. You feel responsible for others’ comfort, making simple boundary assertion trigger irrational feelings of guilt and selfishness.';
      rootMechanism = 'Anxious boundary permeability and fawn stress response.';
      tailoredActionPlan = [
        'Mastering assertive boundary scripts that require zero over-apologizing.',
        'Tracking energetic drain points across personal and professional relationships.',
        'Reframing boundaries as preservation of connection rather than rejection.',
      ];
      recommendedService = 'Emotional Wellbeing Counselling';
    }

    if (need === 'academic_tuition') {
      recommendedService = 'Psychology Tuition & Mentorship';
    }

    return {
      profileName,
      psychologicalAnalysis,
      rootMechanism,
      tailoredActionPlan,
      recommendedService,
    };
  };

  const result = currentStep >= 4 ? getProfileResult() : null;

  return (
    <div
      className={`rounded-2xl bg-white border border-primary/20 shadow-soft overflow-hidden ${className}`}
    >
      {/* Top Header Bar */}
      <div className="bg-primary px-6 sm:px-8 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent block">
              Interactive Self-Discovery
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
              Mind Blueprint Assessment
            </h3>
          </div>
        </div>

        {/* Step Progression Indicators */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep >= step ? 'w-8 bg-accent' : 'w-2.5 bg-white/20'
              }`}
            />
          ))}
          {currentStep >= 4 && (
            <span className="ml-2 text-xs font-semibold text-accent flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Complete
            </span>
          )}
        </div>
      </div>

      {/* Main Game Surface */}
      <div className="p-6 sm:p-10">
        <AnimatePresence mode="wait">
          {/* STEP 0: Introduction */}
          {currentStep === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-center max-w-xl mx-auto space-y-5 py-4"
            >
              <div className="h-16 w-16 mx-auto rounded-full bg-primary-tint text-primary flex items-center justify-center shadow-sm">
                <Compass className="h-8 w-8" />
              </div>

              <div>
                <h4 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
                  Map What is Happening Inside Your Mind
                </h4>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  Answer 3 quick psychological scenario questions to decode your underlying mental patterns, understand your stress reflex, and see the exact clinical framework Simran would use with you.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-ink-muted pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Takes 60 Seconds
                </span>
                <span className="flex items-center gap-1.5">
                  <Brain className="h-4 w-4 text-primary" />
                  Evidence-Informed CBT Framework
                </span>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold text-sm shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto"
                >
                  <span>Begin Mind Exploration</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 1: Question 1 (The Trigger) */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Stage 1 of 3 • The Primary Stress Point
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                  Which mental state has felt most disruptive to your peace lately?
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted">
                  Choose the scenario that feels closest to your lived reality:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {triggerOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('trigger', opt.id)}
                    className="p-4 rounded-xl border border-primary/15 bg-sand-warm/60 hover:bg-sand-warm hover:border-primary/40 text-left transition-all duration-200 group flex items-start gap-3.5 active:scale-[0.99] focus:outline-none"
                  >
                    <span className="text-2xl select-none flex-shrink-0 mt-0.5">
                      {opt.icon}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-sm font-bold text-ink group-hover:text-primary transition-colors">
                          {opt.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-tint text-primary font-semibold hidden sm:inline-block">
                          {opt.tag}
                        </span>
                      </div>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Question 2 (The Coping Reflex) */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Stage 2 of 3 • The Subconscious Defense
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                  When emotional tension rises, what is your default reaction?
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted">
                  How does your brain naturally attempt to protect you from the discomfort?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {copingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('coping', opt.id)}
                    className="p-4 rounded-xl border border-secondary/20 bg-sand-warm/60 hover:bg-sand-warm hover:border-secondary text-left transition-all duration-200 group flex flex-col justify-between gap-3 active:scale-[0.99] focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block">
                        {opt.type}
                      </span>
                      <h5 className="font-heading text-sm font-bold text-ink group-hover:text-secondary-700 transition-colors">
                        {opt.title}
                      </h5>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-secondary font-semibold">
                      <span>Select Pattern</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Question 3 (The Core Need) */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-accent-coral uppercase tracking-wider">
                  Stage 3 of 3 • Your Desired Clinical Anchor
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                  What kind of support would feel most therapeutic right now?
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted">
                  What outcome would bring genuine relief to your daily life?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {needOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('need', opt.id)}
                    className="p-4 rounded-xl border border-primary/20 bg-sand-warm/60 hover:bg-sand-warm hover:border-primary text-left transition-all duration-200 group flex flex-col justify-between gap-3 active:scale-[0.99] focus:outline-none"
                  >
                    <div className="space-y-1">
                      <h5 className="font-heading text-sm font-bold text-ink group-hover:text-primary transition-colors">
                        {opt.title}
                      </h5>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {opt.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary font-semibold">
                      <span>Generate My Blueprint</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: RESULT BLUEPRINT */}
          {currentStep >= 4 && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Profile Badge & Headline */}
              <div className="p-6 rounded-xl bg-primary-tint/70 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white">
                    <Sparkle className="h-3 w-3 text-accent" />
                    Cognitive Profile Decoded
                  </span>
                  <h4 className="font-heading text-2xl font-bold text-ink">
                    {result.profileName}
                  </h4>
                  <p className="text-xs text-ink-muted">
                    Root Mechanism: <strong className="text-primary-deep">{result.rootMechanism}</strong>
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-deep px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-white transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>

              {/* Psychological Analysis */}
              <div className="space-y-2">
                <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
                  Psychological Pattern Analysis
                </h5>
                <p className="text-sm text-ink-muted leading-relaxed p-4 rounded-xl bg-sand-warm border border-primary/10">
                  {result.psychologicalAnalysis}
                </p>
              </div>

              {/* 3 Actionable Coping Anchors */}
              <div className="space-y-2">
                <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
                  Recommended Cognitive Interventions
                </h5>
                <div className="space-y-2">
                  {result.tailoredActionPlan.map((action, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-white border border-primary/15 flex items-start gap-2.5 text-xs text-ink"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Step / Bridge to Simran */}
              <div className="p-5 rounded-xl bg-sand-warm border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Tailored Approach with Simran Mistry:
                  </span>
                  <h5 className="font-heading text-base font-bold text-ink">
                    {result.recommendedService}
                  </h5>
                  <p className="text-xs text-ink-muted">
                    Confidential 1-on-1 sessions in Kothrud, Pune & Online Worldwide.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const msg = `Hello Simran! I just completed the Mind Blueprint assessment on Fruitful Mind. My profile came out as "${result.profileName}". I would like to schedule a 15-minute discovery consultation.`;
                      const waUrl = `https://wa.me/919769512475?text=${encodeURIComponent(msg)}`;
                      window.open(waUrl, '_blank');
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Simran My Blueprint</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking && onOpenBooking(`${result.profileName} - Consultation`)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-primary hover:bg-primary-deep text-white font-semibold text-xs sm:text-sm transition-all text-center"
                  >
                    Book Session
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-center text-ink-muted">
                Educational self-discovery tool based on Cognitive Behavioural Therapy frameworks • Not a substitute for formal psychiatric diagnosis
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
