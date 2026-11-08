import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Brain,
  Compass,
  GraduationCap,
  HeartHandshake,
  ChevronDown,
  Calendar,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
  Smile,
  Send,
  Check,
  HelpCircle,
  Lightbulb,
  BookOpen,
  Award,
  Phone,
  Layers,
  Sparkles,
  ArrowUpRight,
  Sparkle
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import BreathingWidget from '../components/widgets/BreathingWidget';
import MoodCheckin from '../components/widgets/MoodCheckin';
import DailyAffirmation from '../components/widgets/DailyAffirmation';
import CounsellingQuiz from '../components/widgets/CounsellingQuiz';
import MindBlueprintGame from '../components/widgets/MindBlueprintGame';
import CBTTriangle from '../components/illustrations/CBTTriangle';
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
import { getAllBlogs, getAllConcepts } from '../utils/contentLoader';
import logoImg from '../assets/logo.png';

export default function Home({ onOpenBooking }) {
  const { t, language } = useLanguage();
  const rawBlogs = getAllBlogs().slice(0, 3);
  const rawConcepts = getAllConcepts().slice(0, 4);

  const concepts = useMemo(() => {
    return rawConcepts.map((c) => {
      const loc = t(`conceptsData.${c.id}`);
      if (loc && typeof loc === 'object') {
        return {
          ...c,
          title: loc.title || c.title,
          category: loc.category || c.category,
          shortDefinition: loc.shortDefinition || c.shortDefinition,
        };
      }
      return c;
    });
  }, [rawConcepts, language, t]);

  const blogs = useMemo(() => {
    return rawBlogs.map((b) => {
      const loc = t(`blogsData.${b.slug}`);
      if (loc && typeof loc === 'object') {
        return {
          ...b,
          title: loc.title || b.title,
          category: loc.category || b.category,
          excerpt: loc.excerpt || b.excerpt,
        };
      }
      return b;
    });
  }, [rawBlogs, language, t]);

  // Section 3: "What's on your mind?" interactive chips state
  const [selectedConcern, setSelectedConcern] = useState('overthinking');

  const concernsList = [
    {
      id: 'anxiety',
      label: 'Anxiety',
      icon: BatteryDoodle,
      tag: 'Nervous System',
      headline: 'Uncoupling physical tension from impending catastrophe',
      summary: 'Anxiety often tricks our nervous system into believing a future event is an immediate emergency. Together, we learn somatic grounding and cognitive reappraisal to bring the body back to baseline safety.',
      link: '/psychology-concepts',
      linkText: 'Explore CBT & Emotional Regulation',
    },
    {
      id: 'stress',
      label: 'Stress & Burnout',
      icon: BatteryDoodle,
      tag: 'Emotional Capacity',
      headline: 'Restoring capacity before exhaustion becomes collapse',
      summary: 'Chronic stress is not a personal failure—it is an energetic deficit. We audit your emotional battery, identify invisible energy drains, and construct compassionate, non-negotiable personal boundaries.',
      link: '/wellbeing-guide',
      linkText: 'View Emotional Health Guide',
    },
    {
      id: 'overthinking',
      label: 'Overthinking',
      icon: TangledLineDoodle,
      tag: 'Cognitive Patterns',
      headline: 'Untangling the 3 AM repetitive thought loop',
      summary: 'Overthinking gives the illusion of problem-solving while actually compounding worry. Through evidence-based Cognitive Behavioural tools, we learn to gently observe the spiral without becoming ensnared in it.',
      link: '/blogs/unraveling-overthinking',
      linkText: 'Read Overthinking Article',
    },
    {
      id: 'self-esteem',
      label: 'Self-Esteem',
      icon: LadderDoodle,
      tag: 'Inner Dialogue',
      headline: 'Moving from conditional achievement to unconditional dignity',
      summary: 'When self-worth hinges solely on external validation or productivity, confidence remains brittle. We work to soften the relentless internal critic and anchor self-esteem in steady human worth.',
      link: '/blogs/rebuilding-fragile-self-esteem',
      linkText: 'Read Self-Esteem Reflection',
    },
    {
      id: 'procrastination',
      label: 'Procrastination',
      icon: PacingClockDoodle,
      tag: 'Task Paralysis',
      headline: 'Solving the emotional friction behind starting',
      summary: 'Procrastination is rarely about time management or laziness; it is an emotional regulation response to fear of failure, perfectionism, or overwhelm. We design gentle micro-steps to dissolve task friction.',
      link: '/blogs/real-truth-procrastination',
      linkText: 'Read Procrastination Insights',
    },
    {
      id: 'career',
      label: 'Career Confusion',
      icon: CompassDoodle,
      tag: 'Vocational Clarity',
      headline: 'Navigating career crossroads with psychological alignment',
      summary: 'Standing at a vocational crossroads can feel paralyzing. Career counselling blends psychometric understanding, intrinsic strengths discovery, and psychological values to chart your authentic next step.',
      link: '/services',
      linkText: 'Learn About Career Counselling',
    },
    {
      id: 'exam-pressure',
      label: 'Exam Pressure',
      icon: BrainBulbDoodle,
      tag: 'Academic Mastery',
      headline: 'Cognitive mastery and exam anxiety management',
      summary: 'For Grade 11, 12, and psychology degree students, exam apprehension often obscures genuine conceptual brilliance. We pair personalized academic psychology tuition with anxiety-management techniques.',
      link: '/services',
      linkText: 'Explore Psychology Tuition',
    },
  ];

  const currentConcern = concernsList.find((c) => c.id === selectedConcern) || concernsList[0];

  // Section 7: Psychology Concepts Flip-Cards State
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Section 12: FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const getFaqs = () => {
    if (language === 'mr') {
      return [
        {
          q: "पहिल्या समुपदेशन सत्रात नेमके काय होते?",
          a: "पहिले सत्र हे प्राथमिक परिचय आणि समजून घेण्यासाठी असते. आपण लगेच कोणत्याही खोल प्रश्नांवर दबाव आणत नाही. सध्या तुम्हाला काय सतावत आहे, तुमच्या अपेक्षा काय आहेत ते समजून घेतो. तुम्ही जेवढे सहज सांगू शकता तेवढेच बोलू शकता."
        },
        {
          q: "तुम्ही कोथरूड, पुणे येथे प्रत्यक्ष की ऑनलाईन सत्रे घेता?",
          a: "दोन्ही उपलब्ध आहेत! भारत आणि परदेशातील व्यक्तींसाठी सुरक्षित Google Meet द्वारे ऑनलाईन सत्रे होतात. आणि पुण्यातील रहिवाशांसाठी कोथरूड, पुणे येथील क्लिनिकमध्ये प्रत्यक्ष समुपदेशन सत्रे घेतली जातात."
        },
        {
          q: "माझी माहिती आणि सत्रातील चर्चा किती गोपनीय ठेवली जाते?",
          a: "गोपनीयता ही मानसशास्त्र आचारसंहितेचा मुख्य पाया आहे. आपल्या सत्रात बोलली जाणारी प्रत्येक गोष्ट पूर्णतः खाजगी ठेवली जाते (केवळ स्वतःला किंवा इतरांना गंभीर इजा होण्याच्या संभाव्य धोक्याची कायदेशीर मर्यादा वगळता)."
        },
        {
          q: "\"समग्र दृष्टीकोन\" (Eclectic Approach) म्हणजे काय?",
          a: "याचा अर्थ असा की तुम्हाला एकाच ठोकळेबाज थेरपीत न बांधता, CBT, ह्यूमॅनिस्टिक आणि श्वासाच्या सरावासारख्या प्रभावी मानसशास्त्रीय पद्धती तुमच्या गरजेनुसार एकत्र वापरल्या जातात."
        },
        {
          q: "सत्रांचे शुल्क आणि पैसे देण्याचे माध्यम काय आहे?",
          a: "सत्राचे शुल्क वेळ निश्चित करण्यापूर्वी पारदर्शकपणे सांगितले जाते. आपण UPI, बँक ट्रान्सफर किंवा नेट बँकिंगद्वारे शुल्क भरू शकता."
        }
      ];
    } else if (language === 'hi') {
      return [
        {
          q: "पहले काउंसलिंग सत्र में क्या होता है?",
          a: "पहला सत्र एक सुरक्षित परिचय और समझने की बैठक होती है। हम तुरंत किसी गहरे दबाव वाले विषय में नहीं जाते। वर्तमान में आपको क्या परेशान कर रहा है और आपकी क्या उम्मीदें हैं, इसे बिना किसी तनाव के समझते हैं।"
        },
        {
          q: "क्या सत्र ऑनलाइन होते हैं या कोथरूड, पुणे में प्रत्यक्ष?",
          a: "दोनों सुविधाएं उपलब्ध हैं! दुनिया भर के लोगों के लिए सुरक्षित Google Meet पर ऑनलाइन सत्र होते हैं। पुणे के निवासियों के लिए कोथरूड क्लिनिक में प्रत्यक्ष सत्र आयोजित किए जाते हैं।"
        },
        {
          q: "मेरी गोपनीयता कितनी सुरक्षित रहती है?",
          a: "गोपनीयता क्लिनिकल मनोविज्ञान का सबसे महत्वपूर्ण नियम है। सत्र में साझा की गई हर बात 100% निजी रहती है।"
        },
        {
          q: "\"एक्लेक्टिक पद्धति\" (Eclectic Approach) का क्या मतलब है?",
          a: "इसका मतलब है कि किसी एक तयशुदा नियम में बांधने के बजाय, हम CBT, ह्यूमनिस्टिक और श्वास तकनीकों को मिलाकर आपकी व्यक्तिगत जरूरत के अनुसार कार्य करते हैं।"
        },
        {
          q: "सत्र का शुल्क और भुगतान का तरीका क्या है?",
          a: "शुल्क की पूरी जानकारी सत्र तय करने से पहले पारदर्शी तरीके से दी जाती है। भुगतान UPI, बैंक ट्रांसफर आदि से आसानी से किया जा सकता है।"
        }
      ];
    } else {
      return [
        {
          q: "What happens during our very first consultation?",
          a: "Our first session is an intake and collaborative exploration. We do not jump into intense problem-solving right away. We gently map out what brought you here, your current stressors, and what you hope to discover or achieve. It is completely pressure-free—you share only what feels comfortable."
        },
        {
          q: "Do you offer online sessions or in-person in Kothrud, Pune?",
          a: "Both! I conduct online video sessions via secure Google Meet for clients across India and internationally. For clients residing in Pune, I offer confidential in-person sessions at my practice in Kothrud, Pune."
        },
        {
          q: "How strictly is my personal confidentiality protected?",
          a: "Confidentiality is the fundamental cornerstone of professional psychology ethics. Everything discussed in our sessions remains strictly private between us, adhering to standard clinical guidelines."
        },
        {
          q: "What does an 'eclectic approach' mean in simple terms?",
          a: "It means I do not force you into a one-size-fits-all rigid model. Instead, I blend proven elements from Cognitive Behavioural Therapy (CBT), Humanistic / Client-Centered therapy, Compassion-Focused tools, and somatic grounding depending on your individual mind and pace."
        },
        {
          q: "What are the session fees and payment methods?",
          a: "Session fees are transparent and communicated prior to confirming your slot. Payments can be completed conveniently via UPI, Bank Transfer, or standard Indian payment gateways."
        }
      ];
    }
  };

  const faqs = getFaqs();

  // Newsletter State
  const [homeNewsletterName, setHomeNewsletterName] = useState('');
  const [homeNewsletterEmail, setHomeNewsletterEmail] = useState('');
  const [homeNewsletterStatus, setHomeNewsletterStatus] = useState('idle');

  const handleHomeNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!homeNewsletterEmail || !homeNewsletterEmail.includes('@')) return;
    setHomeNewsletterStatus('loading');
    setTimeout(() => {
      setHomeNewsletterStatus('success');
      setHomeNewsletterName('');
      setHomeNewsletterEmail('');
    }, 800);
  };

  // Section 5: "How sessions work" steps
  const sessionSteps = [
    {
      num: "01",
      title: "Reach Out",
      desc: "Send a message via WhatsApp or request a call. A pressure-free first point of contact to check availability and share brief context.",
      time: "Initial step"
    },
    {
      num: "02",
      title: "First Conversation",
      desc: "A calm 15-minute discovery call or intake session. We discuss what brings you to counselling and ensure we are a good mutual fit.",
      time: "15-50 mins"
    },
    {
      num: "03",
      title: "Understand Together",
      desc: "We gently map your recurring thoughts, emotional triggers, and behavioural patterns without judgment or premature conclusions.",
      time: "Sessions 2-4"
    },
    {
      num: "04",
      title: "Build Your Plan",
      desc: "Co-creating practical, eclectic tools—CBT cognitive reframing, boundary scripts, and somatic grounding tailored to your daily life.",
      time: "Ongoing"
    },
    {
      num: "05",
      title: "Sustainable Growth",
      desc: "Deepening psychological flexibility, self-compassion, and emotional autonomy so you feel grounded long after sessions conclude.",
      time: "Long-term resilience"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-sand-warm text-ink transition-colors duration-300">
      <SEO
        title="Fruitful Mind | Discover The Curious You | Simran Mistry - Psychologist Pune"
        description="Psychological practice by Simran Mistry (Master's in Counselling Psychology, 3+ years experience). Safe, evidence-based therapy for emotional wellbeing, career clarity, and psychology tuition in Kothrud, Pune and online."
      />

      {/* Mind-Themed Abstract Floating SVGs in background */}
      <FloatingShape shape="ring" className="absolute top-28 left-8 w-16 h-16 hidden lg:block" color="#12766E" delay={0.2} />
      <FloatingShape shape="dots" className="absolute top-44 right-12 w-14 h-14 hidden lg:block" color="#8C7AE6" delay={0.8} />
      <FloatingShape shape="ring" className="absolute top-[800px] left-12 w-20 h-20 hidden lg:block" color="#12766E" delay={1.4} />

      {/* ========================================================= */}
      {/* 1. HERO SECTION (Outcome-led headline, yellow marker, Simran photo & glass badge) */}
      {/* ========================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-tint/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary-deep shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Psychologist • Kothrud, Pune & Online Worldwide</span>
              </motion.div>

              {/* Tagline & Main Outcome-Led Headline */}
              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="font-heading font-semibold text-sm sm:text-base uppercase tracking-wider text-primary flex items-center gap-2"
                >
                  <span>"{t('hero.tagline') || 'Discover The Curious You'}"</span>
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15]"
                >
                  A calm, intelligent space to{' '}
                  <span className="marker-highlight text-primary-deep">
                    untangle your mind.
                  </span>
                </motion.h1>
              </div>

              {/* Psychology Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed"
              >
                Whether you are navigating anxiety loops, career crossroads, or seeking dedicated psychology tuition, you do not have to carry it in isolation. Grounded, empathetic therapy tailored to your unique psychological blueprint.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                {/* Primary CTA: Sunshine Yellow with Dark Ink text */}
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking('Free 15-Min Discovery Call')}
                  className="rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold px-8 py-4 text-sm sm:text-base shadow-sm hover:shadow-soft transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95"
                >
                  <Calendar className="h-4 w-4 text-ink" />
                  <span>Book a Session</span>
                </button>

                {/* Secondary CTA: WhatsApp Me */}
                <a
                  href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20sessions%20with%20Fruitful%20Mind."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary/20 bg-white/80 hover:bg-white text-ink font-semibold px-7 py-4 text-sm sm:text-base shadow-sm backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2:bg-white/10 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>WhatsApp Me</span>
                </a>
              </motion.div>

              {/* Quick Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="pt-4 flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm text-ink-muted border-t border-primary/15"
              >
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>100% Confidential & Non-Judgmental</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Kothrud, Pune & Online</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Smile className="h-4 w-4 text-secondary" />
                  <span>Eclectic, Client-Centered Approach</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual with Simran's Photo & Floating Glass Credential Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md">
                {/* Simran's Professional Photo Placeholder */}
                <PhotoPlaceholder
                  type="simran"
                  label="Simran Mistry, Psychologist"
                  sublabel="Simran Mistry • Master's in Counselling Psychology"
                  aspectRatio="aspect-[4/5]"
                  className="shadow-soft-lg"
                />

                {/* Floating Glass Credential Card (LiquidGlass component) */}
                <LiquidGlass
                  variant="card"
                  tint="default"
                  className="absolute -bottom-6 -left-4 sm:-left-8 right-4 sm:right-auto p-4 sm:p-5 rounded-2xl shadow-soft border-white/80 max-w-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-ink leading-snug">
                        Master's in Counselling Psychology
                      </h4>
                      <p className="text-[11px] text-ink-muted">
                        3+ years clinical experience • Kothrud, Pune
                      </p>
                    </div>
                  </div>
                </LiquidGlass>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. TRUST STRIP (Credentials, areas of work, factual only) */}
      {/* ========================================================= */}
      <section className="relative py-8 bg-sand-white border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                3+ Years
              </span>
              <p className="text-xs sm:text-sm text-ink-muted">
                Counselling & Academic Practice
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                Master's Degree
              </span>
              <p className="text-xs sm:text-sm text-ink-muted">
                In Counselling Psychology
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                Eclectic Care
              </span>
              <p className="text-xs sm:text-sm text-ink-muted">
                CBT, Humanistic, Mindfulness
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                100% Private
              </span>
              <p className="text-xs sm:text-sm text-ink-muted">
                Confidential & Non-Judgmental
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. "WHAT'S ON YOUR MIND?" INTERACTIVE CHIPS & EXPANSION   */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-sand-warm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
              <Brain className="h-3.5 w-3.5 text-primary" />
              <span>Explore Common Mental Spaces</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              What is on your mind today?
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
              Click any topic to explore how psychological guidance untangles the underlying emotional knots.
            </p>
          </div>

          {/* Interactive Chips Bar */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
            {concernsList.map((concern) => {
              const isSelected = selectedConcern === concern.id;
              return (
                <button
                  key={concern.id}
                  onClick={() => setSelectedConcern(concern.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 focus:outline-none ${
                    isSelected
                      ? 'bg-primary text-white shadow-soft ring-2 ring-primary/20'
                      : 'bg-white text-ink border border-primary/15 hover:border-primary/40'
                  }`}
                >
                  {concern.label}
                </button>
              );
            })}
          </div>

          {/* Expanded Concern Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentConcern.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-primary/20 shadow-soft"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary-tint text-primary flex items-center justify-center flex-shrink-0">
                    <currentConcern.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                      {currentConcern.tag}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-ink">
                      {currentConcern.headline}
                    </h3>
                  </div>
                </div>

                <Link
                  to={currentConcern.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-deep:underline"
                >
                  <span>{currentConcern.linkText}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="pt-4 space-y-4">
                <p className="text-sm text-ink-muted leading-relaxed">
                  {currentConcern.summary}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Evidence-informed strategies
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Gentle, collaborative pacing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Available online or in Kothrud, Pune
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3.5 INTERACTIVE MIND BLUEPRINT ASSESSMENT GAME            */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-sand-white border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
              <Brain className="h-3.5 w-3.5 text-primary" />
              <span>Interactive Psychological Assessment Game</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              Decode Your Psychological Blueprint
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
              Not sure how to articulate what you are feeling? Answer 3 interactive psychological questions to decode your stress response and see your personalized path with Simran.
            </p>
          </div>

          <MindBlueprintGame onOpenBooking={onOpenBooking} />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SERVICES: 3 LARGE CARDS WITH PSYCHOLOGY PHOTOGRAPHY     */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-white border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
              <Layers className="h-3.5 w-3.5 text-primary" />
              <span>Core Areas of Work</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink">
              Structured Psychological Guidance
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto">
              Three focused pillars designed to support mental clarity, academic depth, and lifelong emotional agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Emotional Wellbeing Counselling */}
            <div className="group rounded-2xl bg-sand-warm border border-primary/15 overflow-hidden shadow-soft flex flex-col justify-between transition-all duration-300 hover:shadow-soft-lg">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/images/service-emotional-wellbeing.jpg"
                    alt="Emotional Wellbeing Counselling"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-primary shadow-sm backdrop-blur-sm">
                    Therapy
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-heading text-xl font-bold text-ink">
                    Emotional Wellbeing Counselling
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Personalized therapy addressing anxiety, chronic overthinking, emotional burnout, grief, and self-esteem dilemmas. We uncover root triggers using CBT and humanistic frameworks.
                  </p>
                  <ul className="space-y-1.5 pt-2 text-xs text-ink font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Anxiety & Panic Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Overthinking & Rumination Loops
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Self-Esteem & Boundary Setting
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Emotional Wellbeing Counselling')}
                  className="w-full py-2.5 rounded-full bg-primary hover:bg-primary-deep text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Career Counselling */}
            <div className="group rounded-2xl bg-sand-warm border border-primary/15 overflow-hidden shadow-soft flex flex-col justify-between transition-all duration-300 hover:shadow-soft-lg">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/images/service-career-counselling.jpg"
                    alt="Career Counselling and Guidance"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-secondary shadow-sm backdrop-blur-sm">
                    Clarity
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-heading text-xl font-bold text-ink">
                    Career Counselling & Clarity
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Designed for students, young professionals, and career transitioners feeling overwhelmed by vocational choices. Discover alignment between personality, strengths, and market realities.
                  </p>
                  <ul className="space-y-1.5 pt-2 text-xs text-ink font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Vocational Alignment & Strengths
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Overcoming Career Paralysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Mid-Career Pivots & Identity
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Career Counselling')}
                  className="w-full py-2.5 rounded-full bg-primary hover:bg-primary-deep text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Career Session</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Psychology Tuition */}
            <div className="group rounded-2xl bg-sand-warm border border-primary/15 overflow-hidden shadow-soft flex flex-col justify-between transition-all duration-300 hover:shadow-soft-lg">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/images/service-psychology-tuition.jpg"
                    alt="Psychology Tuition for Grade 11, 12 and Degree"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-accent text-ink shadow-sm backdrop-blur-sm">
                    Tuition
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-heading text-xl font-bold text-ink">
                    Psychology Tuition & Mentorship
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Rigorous, engaging mentorship for CBSE/ISC Grade 11, Grade 12, and undergraduate psychology students. We transform dense textbooks into crystal-clear conceptual frameworks.
                  </p>
                  <ul className="space-y-1.5 pt-2 text-xs text-ink font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Grade 11 & 12 Board Curriculum
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Undergraduate Core Psychology
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Case Studies & Research Methods
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Psychology Tuition')}
                  className="w-full py-2.5 rounded-full bg-primary hover:bg-primary-deep text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>Enquire Tuition</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. "HOW SESSIONS WORK" (5 CLEAR STEPS + CONNECTING LINE)  */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>Step-by-Step Pathway</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              How Sessions Work
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
              From your initial inquiry to sustainable long-term resilience: a transparent, pressure-free journey.
            </p>
          </div>

          {/* 5 Steps Grid with Connecting Line */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Horizontal Line on Desktop */}
            <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-primary/20 -z-0" />

            {sessionSteps.map((step, idx) => (
              <div
                key={step.num}
                className="relative z-10 p-6 rounded-2xl bg-white border border-primary/15 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="h-8 w-8 rounded-full bg-primary-tint text-primary font-bold text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-semibold text-ink-muted">
                      {step.time}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-ink mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-ink-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. ABOUT SIMRAN TEASER & ECLECTIC APPROACH EXPLAINED      */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-white border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Simran Portrait */}
            <div className="lg:col-span-5">
              <PhotoPlaceholder
                type="simran"
                label="Simran Mistry, Psychologist"
                sublabel="Founder, Fruitful Mind • Kothrud, Pune"
                aspectRatio="aspect-[4/5]"
                className="shadow-soft-lg"
              />
            </div>

            {/* Simran Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
                <HeartHandshake className="h-3.5 w-3.5 text-primary" />
                <span>Meet Your Psychologist</span>
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Simran Mistry,{' '}
                <span className="font-sans font-normal text-2xl sm:text-3xl text-ink-muted block mt-1">
                  M.A. Counselling Psychology
                </span>
              </h2>

              <p className="text-base text-ink-muted leading-relaxed">
                "I believe mental health support should be grounded in warmth, intellectual curiosity, and zero judgment. You do not need to fit into a clinical diagnosis or label to deserve a quiet, attentive space to unpack your mind."
              </p>

              {/* Eclectic Approach Breakdown */}
              <div className="p-6 rounded-2xl bg-sand-warm border border-primary/15 space-y-3">
                <h3 className="font-heading text-base font-bold text-ink flex items-center gap-2">
                  <BrainBulbDoodle className="w-5 h-5 text-primary" />
                  What does an Eclectic Approach mean for you?
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Instead of forcing everyone through one rigid manual, an eclectic framework weaves the most relevant tools for your specific temperament:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-ink font-medium">
                  <div className="p-2.5 rounded-xl bg-white border border-primary/10">
                    <strong className="text-primary block">Cognitive Behavioural (CBT)</strong>
                    Identifying & reframing automatic unhelpful thought loops.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-primary/10">
                    <strong className="text-secondary block">Humanistic & Client-Centered</strong>
                    Deep unconditional positive regard and non-judgmental pacing.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-primary/10">
                    <strong className="text-primary-deep block">Mindfulness & Somatic</strong>
                    Nervous system regulation and breath-anchored presence.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-primary/10">
                    <strong className="text-ink block">Psychodynamic Insights</strong>
                    Understanding how earlier blueprints shape adult reactions.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-deep text-white font-semibold text-xs sm:text-sm transition-colors"
                >
                  <span>Read Full Story & Credentials</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <button
                  onClick={() => onOpenBooking && onOpenBooking('Discovery Call with Simran')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold text-xs sm:text-sm transition-colors"
                >
                  <span>Schedule Discovery Call</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive CBT Cognitive Triangle */}
          <div className="mt-16 pt-12 border-t border-primary/10">
            <CBTTriangle className="max-w-4xl mx-auto" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. PSYCHOLOGY CONCEPTS SIMPLIFIED PREVIEW (FLIP CARDS)    */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-warm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
                <BrainBulbDoodle className="w-4 h-4 text-primary" />
                <span>Demystifying the Human Mind</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
                Psychology Concepts Simplified
              </h2>
              <p className="text-sm sm:text-base text-ink-muted max-w-xl">
                Click any card to flip and discover the plain-language definition and everyday example behind each idea.
              </p>
            </div>

            <Link
              to="/psychology-concepts"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep"
            >
              <span>View All 8 Core Concepts</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((concept) => {
              const isFlipped = !!flippedCards[concept.id];
              return (
                <div
                  key={concept.id}
                  onClick={() => toggleFlip(concept.id)}
                  className="cursor-pointer h-72 rounded-2xl perspective-1000 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`relative w-full h-full rounded-2xl transition-transform duration-500 transform-style-3d ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front Face */}
                    <div className="absolute inset-0 p-6 rounded-2xl bg-white border border-primary/15 shadow-soft backface-hidden flex flex-col justify-between">
                      <div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary-tint text-primary">
                          {concept.category}
                        </span>
                        <h3 className="mt-4 font-heading text-lg font-bold text-ink">
                          {concept.title}
                        </h3>
                        <p className="mt-2 text-xs text-ink-muted line-clamp-3 leading-relaxed">
                          {concept.shortDefinition}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-primary/10 flex items-center justify-between text-xs text-primary font-semibold">
                        <span>Click to flip definition</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 p-6 rounded-2xl bg-primary-deep text-white shadow-soft rotate-y-180 backface-hidden flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                          Everyday Example
                        </span>
                        <h4 className="mt-1 font-heading text-base font-bold text-white">
                          {concept.title}
                        </h4>
                        <p className="mt-2 text-xs text-[#D9F0EC] leading-relaxed">
                          {concept.example || concept.detailedExplanation || concept.shortDefinition}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px] text-accent font-semibold">
                        <span>Click to return</span>
                        <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. LATEST BLOGS (3 EDITORIAL CARDS WITH COVER IMAGES)    */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-white border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
                <BookOpen className="h-3.5 w-3.5 text-primary" />
                <span>Reflections & Articles</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
                Compassionate Mental Health Writing
              </h2>
              <p className="text-sm sm:text-base text-ink-muted max-w-xl">
                Essays by Psychologist Simran Mistry exploring overthinking, self-worth, and emotional regulation.
              </p>
            </div>

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="group rounded-2xl bg-sand-warm border border-primary/15 overflow-hidden shadow-soft flex flex-col justify-between transition-all duration-300 hover:shadow-soft-lg"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={blog.coverImage || `/assets/images/blog-${blog.slug}.jpg`}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-primary shadow-sm backdrop-blur-sm">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-ink-muted">
                      <span>{blog.readTime || '5 min read'}</span>
                      <span>•</span>
                      <span>By Simran Mistry</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                      <Link to={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-muted line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-deep"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. EMOTIONAL WELLBEING COURSE TEASER (DARK TEAL BAND)     */}
      {/* ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary-deep text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-700/60 border border-primary-400/30 px-3 py-1 text-xs font-semibold text-accent">
                <Sparkle className="h-3.5 w-3.5 text-accent" />
                <span>Structured 4-Week Masterclass</span>
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Emotional Wellbeing Course
              </h2>

              <p className="text-sm sm:text-base text-[#D9F0EC] max-w-xl leading-relaxed">
                A transformative 4-week guided cohort exploring the neuroscience of anxiety, dismantling task paralysis, and building unwavering self-compassion.
              </p>

              {/* 4 Modules Outline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-primary-800/60 border border-primary-600/40">
                  <span className="font-bold text-accent">Module 1:</span>
                  <p className="text-[#D9F0EC] mt-0.5">Neuroscience of Overthinking & Nervous System</p>
                </div>
                <div className="p-3 rounded-xl bg-primary-800/60 border border-primary-600/40">
                  <span className="font-bold text-accent">Module 2:</span>
                  <p className="text-[#D9F0EC] mt-0.5">Dismantling Perfectionism & Procrastination</p>
                </div>
                <div className="p-3 rounded-xl bg-primary-800/60 border border-primary-600/40">
                  <span className="font-bold text-accent">Module 3:</span>
                  <p className="text-[#D9F0EC] mt-0.5">Unconditional Self-Esteem & Boundary Scripts</p>
                </div>
                <div className="p-3 rounded-xl bg-primary-800/60 border border-primary-600/40">
                  <span className="font-bold text-accent">Module 4:</span>
                  <p className="text-[#D9F0EC] mt-0.5">Somatic Grounding & Lifelong Psychological Resilience</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <Link
                  to="/course"
                  className="px-7 py-3 rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold text-sm transition-colors text-center"
                >
                  Explore Course Curriculum
                </Link>
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Course Waitlist')}
                  className="px-7 py-3 rounded-full border border-primary-400/40 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors text-center"
                >
                  Join Next Cohort Waitlist
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-primary-400/30 shadow-2xl">
                <img
                  src="/assets/images/course-mindfulness.jpg"
                  alt="Emotional Wellbeing Course Overview"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. INTERACTIVE SELF-REFLECTION TOOLKIT                   */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>Interactive Mental Health Lab</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              Grounding Tools for This Exact Moment
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
              Engage with practical micro-interventions for breath regulation, mood check-ins, and guided self-reflection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BreathingWidget />
            <MoodCheckin />
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DailyAffirmation />
            <CounsellingQuiz onOpenBooking={onOpenBooking} />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. NEWSLETTER SIGNUP (BRIGHT LAVENDER BAND)              */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary-tint border-y border-secondary/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-secondary-700 shadow-sm">
            <Send className="h-3.5 w-3.5 text-secondary" />
            <span>Curious Minds Newsletter</span>
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
            Gentle Psychological Insights, Direct to Your Inbox
          </h2>

          <p className="text-sm sm:text-base text-ink-muted max-w-lg mx-auto">
            Bi-weekly reflections on dismantling overthinking, setting boundaries without guilt, and cultivating calm self-esteem. Zero spam.
          </p>

          {homeNewsletterStatus === 'success' ? (
            <div className="p-4 rounded-xl bg-white max-w-md mx-auto flex items-center justify-center gap-2 text-primary font-semibold text-sm shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Thank you! You are subscribed to Curious Minds.</span>
            </div>
          ) : (
            <form
              onSubmit={handleHomeNewsletterSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="text"
                placeholder="Your name"
                value={homeNewsletterName}
                onChange={(e) => setHomeNewsletterName(e.target.value)}
                className="w-full sm:w-1/3 px-4 py-3 rounded-full border border-secondary/30 bg-white text-ink text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                value={homeNewsletterEmail}
                onChange={(e) => setHomeNewsletterEmail(e.target.value)}
                className="w-full sm:w-2/3 px-4 py-3 rounded-full border border-secondary/30 bg-white text-ink text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                disabled={homeNewsletterStatus === 'loading'}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-secondary hover:bg-secondary-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors flex-shrink-0"
              >
                {homeNewsletterStatus === 'loading' ? 'Joining...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-[11px] text-ink-muted">
            Unsubscribe anytime with 1 click. Strictly confidential.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FAQ ACCORDION (TRANSPARENT REASSURANCE)              */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-warm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
              <HelpCircle className="h-3.5 w-3.5 text-primary" />
              <span>Questions & Reassurance</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              Clear answers regarding our sessions, formats, confidentiality, and fees.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-primary/15 overflow-hidden shadow-soft transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-ink"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ${
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-primary/10 pt-3">
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
      </section>

      {/* ========================================================= */}
      {/* 13. CONTACT STRIP & KOTHRUD PRACTICE LOCATION             */}
      {/* ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-sand-white border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-primary-tint/60 p-8 sm:p-12 border border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>Kothrud, Pune Practice & Online Consultations</span>
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink">
                  Ready to Take the First Gentle Step?
                </h2>
                <p className="text-sm sm:text-base text-ink-muted max-w-xl leading-relaxed">
                  Book a confidential 15-minute discovery call to discuss what is on your mind and see how Simran's eclectic psychological framework can assist you.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-ink">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                    +91 9769512475
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    Kothrud, Pune 411038
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={() => onOpenBooking && onOpenBooking('Home Contact Strip')}
                  className="w-full py-3.5 px-6 rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold text-sm shadow-sm transition-all text-center"
                >
                  Schedule Discovery Call
                </button>
                <a
                  href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20with%20Fruitful%20Mind."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full border border-primary/20 bg-white hover:bg-sand-warm text-ink font-semibold text-sm shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
