import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Brain,
  Compass,
  GraduationCap,
  Heart,
  ChevronDown,
  Calendar,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
  Smile,
  Quote,
  Activity,
  Send,
  Check,
  HelpCircle,
  Lightbulb,
  BookOpen,
  Users,
  Award,
  Coffee,
  Sparkle
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import BreathingWidget from '../components/widgets/BreathingWidget';
import MoodCheckin from '../components/widgets/MoodCheckin';
import DailyAffirmation from '../components/widgets/DailyAffirmation';
import CounsellingQuiz from '../components/widgets/CounsellingQuiz';
import TestimonialsSlider from '../components/widgets/TestimonialsSlider';
import CountUpNumber from '../components/common/CountUpNumber';
import PhotoPlaceholder from '../components/illustrations/PhotoPlaceholder';
import CalmPersonIllustration from '../components/illustrations/CalmPersonIllustration';
import BrainHeartIllustration from '../components/illustrations/BrainHeartIllustration';
import CounsellingSanctuaryIllustration from '../components/illustrations/CounsellingSanctuaryIllustration';
import OrganicWaveDivider from '../components/illustrations/OrganicWaveDivider';
import {
  PapayaDoodle,
  MangoDoodle,
  LeafDoodle,
  TeaCupDoodle,
  UntangleDoodle,
  FloatingElement
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

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Home Newsletter State
  const [homeNewsletterName, setHomeNewsletterName] = useState('');
  const [homeNewsletterEmail, setHomeNewsletterEmail] = useState('');
  const [homeNewsletterStatus, setHomeNewsletterStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleHomeNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!homeNewsletterEmail || !homeNewsletterEmail.includes('@')) return;
    setHomeNewsletterStatus('loading');
    setTimeout(() => {
      setHomeNewsletterStatus('success');
      setHomeNewsletterName('');
      setHomeNewsletterEmail('');
    }, 700);
  };

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
          q: "What happens during our very first session?",
          a: "Our first session is an intake and collaborative exploration. We do not jump into intense problem-solving right away. We gently map out what brought you here, your current stressors, and what you hope to discover or achieve. It is completely pressure-free—you share only what feels comfortable."
        },
        {
          q: "Do you offer online sessions or in-person in Kothrud, Pune?",
          a: "Both! I conduct online video sessions via secure Google Meet for clients across India and internationally. For clients residing in Pune, I offer confidential in-person sessions at my practice in Kothrud, Pune."
        },
        {
          q: "How strictly is my confidentiality protected?",
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
  const marqueeConcerns = t('marquee') || [
    "Anxiety & Panic",
    "Overthinking Loops",
    "Stress & Burnout",
    "Self-Esteem & Inner Critic",
    "Procrastination & Inertia",
    "Career Crossroads",
    "Grade 11 & 12 Psychology Tuition"
  ];

  // Storytelling steps for "How Counselling Works"
  const counsellingSteps = [
    {
      num: "01",
      title: language === 'mr' ? "सुरक्षित प्राथमिक संवाद (Intake)" : language === 'hi' ? "पहला सुरक्षित संवाद (Intake)" : "Initial Safe Connection",
      desc: language === 'mr' ? "कोणत्याही पूर्वग्रहाविना तुमचे विचार आणि वर्तमान ताणतणाव मोकळेपणाने मांडण्यासाठी शांत जागा." : language === 'hi' ? "बिना किसी निर्णय या दबाव के अपने मन की बात रखने के लिए एक शांत और सुरक्षित शुरुआत।" : "A pressure-free, confidential space to share what brings you here and map your current mental landscape.",
      icon: Heart,
      tag: "Session 1",
      color: "border-papaya/30 bg-tint-peach/40 dark:bg-white/5",
    },
    {
      num: "02",
      title: language === 'mr' ? "विचार आणि भावनांची उकल" : language === 'hi' ? "विचारों और भावनाओं को समझना" : "Unraveling Core Patterns",
      desc: language === 'mr' ? "वारंवार होणारे ओव्हरथिंकिंग, नकारात्मक विचारांचे चक्र आणि भावनिक मुळे हळुवारपणे समजून घेणे." : language === 'hi' ? "लगातार चलने वाले विचारों के चक्र, तनाव के कारणों और भावनाओं की तह तक पहुंचना।" : "Gently discovering the triggers, internal dialogues, and emotional cycles that cause chronic anxiety or stuckness.",
      icon: UntangleDoodle,
      isCustomIcon: true,
      tag: "Exploration",
      color: "border-mango/30 bg-tint-butter/40 dark:bg-white/5",
    },
    {
      num: "03",
      title: language === 'mr' ? "वैयक्तिक मानसशास्त्रीय तंत्रे" : language === 'hi' ? "व्यक्तिगत मनोवैज्ञानिक टूल्स" : "Tailored Eclectic Tools",
      desc: language === 'mr' ? "CBT विचार-बदल तंत्रे, श्वासाचे व्यायाम आणि स्वतःप्रती दयाळू दृष्टिकोन विकसित करणे." : language === 'hi' ? "CBT तकनीकें, ब्रीदिंग टूल्स और स्वयं के प्रति दयालु नजरिया जो आपके जीवन में आसानी से फिट हो सके।" : "Equipping you with practical CBT coping strategies, somatic grounding, and self-compassion tools built for you.",
      icon: Compass,
      tag: "Practices",
      color: "border-leaf/30 bg-tint-mint/40 dark:bg-white/5",
    },
    {
      num: "04",
      title: language === 'mr' ? "शाश्वत आत्मविश्वास व जिज्ञासा" : language === 'hi' ? "स्थायी आत्मविश्वास और स्पष्टता" : "Sustainable Clarity & Curiosity",
      desc: language === 'mr' ? "आयुष्यातील आव्हानांना नव्या ताकदीने आणि जिज्ञासू वृत्तीने सामोरे जाण्याची क्षमता." : language === 'hi' ? "जीवन की चुनौतियों का सामना आत्मविश्वास और शांत जिज्ञासु मन से करने की स्थायी क्षमता।" : "Walking forward with calm emotional regulation, healthier boundaries, and an unshakeable curious mindset.",
      icon: Sparkles,
      tag: "Growth",
      color: "border-grape/30 bg-tint-lavender/40 dark:bg-white/5",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="Fruitful Mind | Discover The Curious You | Simran Mistry - Psychologist Pune"
        description="Compassionate, eclectic psychological counselling for anxiety, overthinking, career decisions, and psychology tuition in Kothrud, Pune by Simran Mistry."
      />

      {/* Floating Animated Ambient Blobs for Glass Depth */}
      <div className="ambient-blob-papaya absolute -top-24 -left-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-72 -right-24 h-[600px] w-[600px] rounded-full pointer-events-none" />
      <div className="ambient-blob-leaf absolute top-[1300px] -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-grape absolute top-[2400px] -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-papaya absolute top-[3800px] left-10 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Brand Elements across hero viewport */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-12 z-10" duration={7} delay={0.2} yOffset={18}>
          <PapayaDoodle className="w-14 h-14 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-44 right-16 z-10" duration={8} delay={1} yOffset={22}>
          <MangoDoodle className="w-14 h-14 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-[520px] left-8 z-10" duration={6.5} delay={0.5} yOffset={14}>
          <LeafDoodle className="w-12 h-12 drop-shadow-sm" color="#1FA886" />
        </FloatingElement>
        <FloatingElement className="absolute top-[680px] right-12 z-10" duration={7.5} delay={1.5} yOffset={16}>
          <TeaCupDoodle className="w-12 h-12 drop-shadow-sm" />
        </FloatingElement>
      </div>

      {/* ========================================================= */}
      {/* 1. HERO SECTION (VISUAL-FIRST WITH SPLIT TEXT & MOTION)  */}
      {/* ========================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Split-text and Emotionally Grounding Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge Pill with Sparkle */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-papaya/30 bg-tint-peach/80 px-4 py-2 text-xs sm:text-sm font-bold text-papaya-deep backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-mango shadow-sm"
              >
                <Sparkles className="h-4 w-4 text-papaya animate-spin" style={{ animationDuration: '6s' }} />
                <span>{t('hero.badge')}</span>
              </motion.div>

              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-widest text-leaf-deep dark:text-mango flex items-center gap-2"
                >
                  <Sparkle className="h-4 w-4 text-mango" />
                  <span>"{t('hero.tagline')}"</span>
                </motion.p>

                {/* Headline with Papaya to Mango Gradient highlight */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink dark:text-white leading-[1.14]"
                >
                  {t('hero.headline')}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya-deep via-papaya to-mango">
                    {t('hero.headlineHighlight')}
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base sm:text-lg text-ink/85 dark:text-zinc-200 max-w-2xl leading-relaxed"
              >
                {t('hero.subheading')}
              </motion.p>

              {/* Action Buttons: Papaya to Mango Gradient CTA & Liquid Glass */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  type="button"
                  onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
                  className="rounded-full bg-gradient-to-r from-papaya-deep via-papaya to-mango hover:from-papaya hover:to-mango text-white font-bold px-8 py-4 text-sm sm:text-base shadow-xl shadow-papaya/30 transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-1 active:translate-y-0"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('hero.ctaPrimary')}</span>
                </button>

                <Link
                  to="/services"
                  className="rounded-full border border-papaya/30 bg-white/80 hover:bg-white text-ink font-bold px-7 py-4 text-sm sm:text-base shadow-md backdrop-blur-md transition-all flex items-center justify-center gap-2 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transform hover:-translate-y-0.5"
                >
                  <span>{t('hero.ctaSecondary')}</span>
                  <ArrowRight className="h-4 w-4 text-papaya-deep dark:text-mango" />
                </Link>
              </motion.div>

              {/* Quick Trust Strip with Lucide Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="pt-4 flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm text-ink/80 dark:text-zinc-300 border-t border-papaya/15 dark:border-white/10"
              >
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="h-4 w-4 text-leaf-deep dark:text-leaf" />
                  <span>{t('common.confidential')}</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <MapPin className="h-4 w-4 text-papaya-deep dark:text-mango" />
                  <span>{t('common.puneOnline')}</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Smile className="h-4 w-4 text-grape dark:text-grape-light" />
                  <span>{t('common.stigmaFree')}</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual Center Piece (Layered Card with Calm Person SVG + Photo + Liquid Glass) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <LiquidGlass
                variant="hero"
                tint="papaya"
                className="rounded-3xl border-white/80 dark:border-white/15 shadow-2xl p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Visual Header Strip with Logo & Verified Psychologist Tag */}
                <div className="flex items-center justify-between pb-5 border-b border-papaya/15 dark:border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="h-14 w-14 rounded-2xl overflow-hidden bg-white p-1.5 shadow-md border border-white/60 flex items-center justify-center flex-shrink-0">
                      <img src={logoImg} alt="Fruitful Mind" className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-ink dark:text-white leading-tight">
                        Fruitful Mind
                      </h3>
                      <p className="text-xs font-bold text-papaya-deep dark:text-mango">
                        {t('common.bySimran')}
                      </p>
                      <p className="text-[11px] text-muted dark:text-zinc-300">
                        Master's in Counselling Psychology
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light border border-leaf/20">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Hero Main Graphic: Calm Person Mindful SVG Illustration */}
                <div className="py-4 relative flex items-center justify-center">
                  <div className="w-full max-w-[320px] aspect-square flex items-center justify-center">
                    <CalmPersonIllustration className="w-full h-full drop-shadow-md" />
                  </div>

                  {/* Floating Speech Prompt Pill */}
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-2 left-2 rounded-full bg-white/95 dark:bg-ink/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-ink dark:text-white shadow-lg border border-papaya/20 flex items-center gap-1.5"
                  >
                    <Heart className="h-3.5 w-3.5 text-papaya fill-papaya" />
                    <span>"You are safe here"</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-2 right-2 rounded-full bg-tint-mint/95 dark:bg-leaf-deep/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-leaf-deep dark:text-white shadow-md border border-leaf/20 flex items-center gap-1"
                  >
                    <Compass className="h-3 w-3" />
                    <span>Eclectic & Grounded</span>
                  </motion.div>
                </div>

                {/* 3 Pillars Visual Mini-Cards */}
                <div className="pt-4 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted dark:text-zinc-300">
                    {t('hero.pillarsTitle')}
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/80 dark:bg-white/10 p-2.5 shadow-sm border border-white/60 dark:border-white/5 transition-transform hover:scale-[1.01]">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-tint-peach text-papaya-deep dark:bg-papaya/20 dark:text-mango">
                        <Heart className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-ink dark:text-white truncate">
                          {t('hero.pillar1Title')}
                        </h4>
                        <p className="text-[11px] text-muted dark:text-zinc-300 truncate">
                          {t('hero.pillar1Desc')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/80 dark:bg-white/10 p-2.5 shadow-sm border border-white/60 dark:border-white/5 transition-transform hover:scale-[1.01]">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
                        <Compass className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-ink dark:text-white truncate">
                          {t('hero.pillar2Title')}
                        </h4>
                        <p className="text-[11px] text-muted dark:text-zinc-300 truncate">
                          {t('hero.pillar2Desc')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/80 dark:bg-white/10 p-2.5 shadow-sm border border-white/60 dark:border-white/5 transition-transform hover:scale-[1.01]">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-tint-lavender text-grape dark:bg-grape/20 dark:text-grape-light">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-ink dark:text-white truncate">
                          {t('hero.pillar3Title')}
                        </h4>
                        <p className="text-[11px] text-muted dark:text-zinc-300 truncate">
                          {t('hero.pillar3Desc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Ribbon */}
                <div className="pt-4 mt-2 border-t border-papaya/15 dark:border-white/10 flex items-center justify-between text-xs">
                  <a
                    href="https://wa.me/919769512475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{t('common.whatsapp')}</span>
                  </a>
                  <span className="text-muted dark:text-zinc-300 font-medium">
                    {t('common.puneOnline')}
                  </span>
                </div>
              </LiquidGlass>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STATS WITH COUNT-UP & INFINITE MARQUEE STRIP           */}
      {/* ========================================================= */}
      <section className="relative py-10 bg-gradient-to-r from-ink via-[#2D2836] to-ink text-white overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Stat 1 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <div className="inline-flex p-2 rounded-xl bg-papaya/20 text-papaya mb-1">
                <Heart className="h-5 w-5" />
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-mango">
                <CountUpNumber end="4" suffix="+ Years" />
              </div>
              <p className="text-xs text-zinc-300">{t('hero.stats.expLabel')}</p>
            </div>

            {/* Stat 2 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <div className="inline-flex p-2 rounded-xl bg-mango/20 text-mango mb-1">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-mango">
                Master's
              </div>
              <p className="text-xs text-zinc-300">Counselling Psychology</p>
            </div>

            {/* Stat 3 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <div className="inline-flex p-2 rounded-xl bg-leaf/20 text-leaf mb-1">
                <Compass className="h-5 w-5" />
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-mango">
                {t('hero.stats.approach')}
              </div>
              <p className="text-xs text-zinc-300">{t('hero.stats.approachLabel')}</p>
            </div>

            {/* Stat 4 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
              <div className="inline-flex p-2 rounded-xl bg-grape/20 text-grape-light mb-1">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-mango">
                100%
              </div>
              <p className="text-xs text-zinc-300">{t('hero.stats.confidentialLabel')}</p>
            </div>
          </div>
        </div>

        {/* Infinite Marquee of Psychological Concerns */}
        <div className="relative flex overflow-x-hidden border-t border-white/10 pt-4">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-200">
            {marqueeConcerns.concat(marqueeConcerns).map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-mango">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gentle Wave Divider */}
      <OrganicWaveDivider fill="#FFF7EE" className="dark:hidden" />

      {/* ========================================================= */}
      {/* 3. MEET SIMRAN & PRACTICE PHILOSOPHY (VISUAL & AUTHENTIC) */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Clearly Marked Photo Placeholder for Simran Mistry */}
            <div className="lg:col-span-5 relative space-y-4">
              <PhotoPlaceholder
                src="/assets/images/simran-placeholder.jpg"
                alt="Simran Mistry - Psychologist Pune"
                type="simran"
                label="Client Photo Placeholder"
                sublabel="Simran Mistry, Psychologist"
                aspectRatio="aspect-[4/5]"
              />

              {/* Floating verified badge */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-md border border-papaya/20 shadow-md text-xs">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-papaya-deep dark:text-mango" />
                  <span className="font-bold text-ink dark:text-white">Master's in Counselling Psychology</span>
                </div>
                <span className="text-[11px] text-muted dark:text-zinc-300">Kothrud, Pune</span>
              </div>
            </div>

            {/* Right Column: Visual Breakdown of Philosophy & Authentic Voice */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-peach px-3.5 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
                <Brain className="h-3.5 w-3.5 text-papaya" />
                <span>{t('aboutSection.badge')}</span>
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink dark:text-white leading-tight">
                {t('aboutSection.headline')}
              </h2>

              <p className="text-base sm:text-lg text-ink/85 dark:text-zinc-200 leading-relaxed">
                {t('aboutSection.p1')}
              </p>

              {/* Converted into visually rich chunk boxes (Key Takeaway & Philosophy) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-tint-mint/60 dark:bg-white/5 border border-leaf/20 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-leaf-deep dark:text-leaf">
                    <Heart className="h-4 w-4" />
                    <span>Non-Judgmental Warmth</span>
                  </div>
                  <p className="text-xs text-ink/80 dark:text-zinc-300 leading-relaxed">
                    A safe container where you don't have to worry about pleasing anyone or defending your feelings.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-tint-butter/60 dark:bg-white/5 border border-mango/30 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-mango-600 dark:text-mango">
                    <Compass className="h-4 w-4" />
                    <span>Eclectic & Science-Backed</span>
                  </div>
                  <p className="text-xs text-ink/80 dark:text-zinc-300 leading-relaxed">
                    Integrating CBT, humanistic listening, and nervous system regulation adapted to your personality.
                  </p>
                </div>
              </div>

              {/* Client's Authentic Voice from Requirements Form */}
              <div className="rounded-2xl border-l-4 border-papaya bg-tint-peach/70 p-5 dark:border-papaya dark:bg-white/5 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-papaya-deep dark:text-mango">
                  <Coffee className="h-3.5 w-3.5" />
                  <span>{t('welcomeBio.badge')}</span>
                </div>
                <blockquote className="text-xs sm:text-sm text-ink dark:text-zinc-100 italic leading-relaxed">
                  "{t('welcomeBio.quote')}"
                </blockquote>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-muted dark:text-zinc-300 border-t border-papaya/15 dark:border-white/10">
                  <span className="font-bold text-ink dark:text-white">
                    — {t('welcomeBio.author')} ({t('welcomeBio.credentials')})
                  </span>
                  <span>📍 {t('welcomeBio.location')}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-papaya-deep to-papaya text-white font-bold px-7 py-3.5 text-sm shadow-md transition-all hover:shadow-lg active:scale-95"
                >
                  <span>{t('aboutSection.readStory')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-papaya/30 bg-white/80 hover:bg-white text-ink font-bold px-6 py-3.5 text-sm shadow-sm transition-colors dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  <Calendar className="h-4 w-4 text-papaya" />
                  <span>{t('common.freeDiscovery')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. STORYTELLING: HOW COUNSELLING WORKS (STEPS TIMELINE)   */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-tint-peach/30 via-cream to-tint-mint/30 dark:from-white/[0.02] dark:to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-mint px-3.5 py-1 text-xs font-bold text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
              <Lightbulb className="h-3.5 w-3.5" />
              <span>{language === 'mr' ? 'प्रक्रिया' : language === 'hi' ? 'प्रक्रिया' : 'The Roadmap'}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink dark:text-white">
              {language === 'mr' ? 'समुपदेशन कसे कार्य करते?' : language === 'hi' ? 'काउंसलिंग कैसे काम करती है?' : 'How Counselling Works'}
            </h2>
            <p className="text-sm sm:text-base text-muted dark:text-zinc-300">
              {language === 'mr'
                ? 'पहिल्या संवादापासून ते शाश्वत मानसिक संतुलनापर्यंतचा एक सुरक्षित व संवेदनशील प्रवास.'
                : language === 'hi'
                ? 'पहली बातचीत से लेकर स्थायी शांति और स्पष्टता तक का एक कोमल, सुरक्षित सफर।'
                : 'A safe, collaborative 4-step journey tailored to your rhythm—no pressure, no judgments.'}
            </p>
          </div>

          {/* 4-Step Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {counsellingSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <LiquidGlass
                  key={idx}
                  variant="card"
                  tint="default"
                  interactive={true}
                  className={`flex flex-col justify-between p-6 rounded-3xl border ${step.color} shadow-lg relative overflow-hidden`}
                >
                  <div>
                    {/* Step Top Banner */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-3xl font-extrabold text-papaya-deep dark:text-mango">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 dark:bg-white/10 text-ink dark:text-white border border-white/60">
                        {step.tag}
                      </span>
                    </div>

                    <div className="h-12 w-12 rounded-2xl bg-white dark:bg-white/10 p-2 shadow-sm flex items-center justify-center text-papaya-deep dark:text-mango mb-4">
                      {step.isCustomIcon ? (
                        <StepIcon className="w-10 h-6" />
                      ) : (
                        <StepIcon className="h-6 w-6" />
                      )}
                    </div>

                    <h3 className="font-heading text-lg font-bold text-ink dark:text-white mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-black/5 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-papaya-deep dark:text-mango">
                    <Check className="h-3.5 w-3.5" />
                    <span>Gentle & Collaborative</span>
                  </div>
                </LiquidGlass>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. THE 3 AREAS OF WORK (SERVICES WITH RICH COVER PHOTOS)   */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-peach px-3.5 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
              <Sparkles className="h-3.5 w-3.5 text-papaya" />
              <span>{t('servicesPage.badge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink dark:text-white">
              {t('servicesPage.title')}
            </h2>
            <p className="text-sm sm:text-base text-muted dark:text-zinc-300">
              {t('servicesPage.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Emotional Wellbeing */}
            <LiquidGlass
              variant="card"
              tint="default"
              interactive={true}
              className="flex flex-col justify-between p-0 overflow-hidden rounded-3xl border-white/80 dark:border-white/15 shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Cover Photo */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/images/service-emotional-wellbeing.jpg"
                  alt="Emotional Wellbeing Counselling"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 dark:bg-ink/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-papaya-deep dark:text-mango shadow-sm">
                  1-on-1 Sessions
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tint-peach text-papaya-deep dark:bg-papaya/20 dark:text-mango mb-4 shadow-sm">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink dark:text-white">
                    {t('servicesPage.service1Name')}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                    {t('servicesPage.service1Tagline')}
                  </p>

                  {/* Key Takeaways Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      Anxiety & Worry
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      Overthinking
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      Self-Criticism
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('Emotional Wellbeing Counselling')}
                    className="w-full rounded-full bg-gradient-to-r from-papaya-deep to-papaya hover:from-papaya hover:to-mango text-white font-bold py-3 px-4 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{t('servicesPage.service1Cta')}</span>
                  </button>
                </div>
              </div>
            </LiquidGlass>

            {/* Service 2: Career Counselling */}
            <LiquidGlass
              variant="card"
              tint="default"
              interactive={true}
              className="flex flex-col justify-between p-0 overflow-hidden rounded-3xl border-white/80 dark:border-white/15 shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Cover Photo */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/images/service-career-counselling.jpg"
                  alt="Career Counselling & Exploration"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 dark:bg-ink/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-leaf-deep dark:text-leaf-light shadow-sm">
                  Clarity & Purpose
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light mb-4 shadow-sm">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink dark:text-white">
                    {t('servicesPage.service2Name')}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                    {t('servicesPage.service2Tagline')}
                  </p>

                  {/* Key Takeaways Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      Career Crossroad
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      Imposter Feelings
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      Work Burnout
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('Career Counselling')}
                    className="w-full rounded-full bg-leaf-deep hover:bg-leaf text-white font-bold py-3 px-4 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{t('servicesPage.service2Cta')}</span>
                  </button>
                </div>
              </div>
            </LiquidGlass>

            {/* Service 3: Psychology Tuition */}
            <LiquidGlass
              variant="card"
              tint="default"
              interactive={true}
              className="flex flex-col justify-between p-0 overflow-hidden rounded-3xl border-white/80 dark:border-white/15 shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Cover Photo */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/assets/images/service-psychology-tuition.jpg"
                  alt="Psychology Tuition Grade 11 & 12"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 dark:bg-ink/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-grape dark:text-grape-light shadow-sm">
                  Grades 11 & 12
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tint-lavender text-grape dark:bg-grape/20 dark:text-grape-light mb-4 shadow-sm">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink dark:text-white">
                    {t('servicesPage.service3Name')}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                    {t('servicesPage.service3Tagline')}
                  </p>

                  {/* Key Takeaways Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      CBSE & ISC Curricula
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      Concept Mastery
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-cream dark:bg-white/10 text-ink dark:text-white">
                      Exam Confidence
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('Psychology Tuition (Grade 11/12)')}
                    className="w-full rounded-full bg-grape hover:bg-grape-dark text-white font-bold py-3 px-4 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>{t('servicesPage.service3Cta')}</span>
                  </button>
                </div>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. INTERACTIVE WELLNESS LAB (BREATHING + MOOD + AFFIRM)   */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-tint-butter/30 via-cream to-tint-peach/30 dark:from-white/[0.02] dark:to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-peach px-3 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
              <Activity className="h-3.5 w-3.5 text-papaya" />
              <span>{t('breathingWidget.badge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              {t('common.takePause')}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
              {t('breathingWidget.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <BreathingWidget />
            </div>

            <div className="lg:col-span-6 space-y-8">
              <MoodCheckin />
              <DailyAffirmation />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. "IS COUNSELLING RIGHT FOR ME?" QUIZ WIDGET             */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-mint px-3.5 py-1 text-xs font-bold text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Self-Reflection</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink dark:text-white">
              {t('quizWidget.title')}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 max-w-lg mx-auto">
              {t('quizWidget.subtitle')}
            </p>
          </div>

          <CounsellingQuiz onOpenBooking={onOpenBooking} />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. TESTIMONIALS SLIDER (PLACEHOLDERS ONLY AS REQUIRED)    */}
      {/* ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-tint-peach/20 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-peach px-3 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
              <Heart className="h-3.5 w-3.5 text-papaya" />
              <span>Real Experiences</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              {language === 'mr' ? 'अनुभव आणि विश्वास' : language === 'hi' ? 'अनुभव एवं विश्वास' : 'Stories of Clarity & Growth'}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
              {language === 'mr'
                ? 'गोपनीयता आणि सन्मान जपत समुपदेशनाचा अनुभव घेतलेल्या व्यक्तींचे अनुभव.'
                : language === 'hi'
                ? 'गोपनीयता और सम्मान के साथ काउंसलिंग की यात्रा तय करने वालों के विचार।'
                : 'What clients experience in our safe, confidential psychological space.'}
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. PSYCHOLOGY CONCEPTS TEASER (WITH VISUAL COVERS)        */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-mint px-3 py-1 text-xs font-bold text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
                <Brain className="h-3.5 w-3.5 text-leaf" />
                <span>{t('conceptsPage.badge')}</span>
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
                {t('conceptsPage.title')}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted dark:text-zinc-300">
                {t('conceptsPage.subtitle')}
              </p>
            </div>

            <Link
              to="/psychology-concepts"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-papaya-deep hover:text-papaya dark:text-mango group"
            >
              <span>{t('common.viewAll')}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((concept, idx) => {
              // Visual cover matching each concept
              const conceptImages = [
                "/assets/images/concept-cbt.jpg",
                "/assets/images/concept-attachment.jpg",
                "/assets/images/concept-boundaries.jpg",
                "/assets/images/concept-emotion-reg.jpg"
              ];
              const coverImg = conceptImages[idx % conceptImages.length];

              return (
                <LiquidGlass
                  key={concept.id}
                  variant="card"
                  tint="default"
                  interactive={true}
                  className="flex flex-col justify-between p-0 overflow-hidden rounded-2xl border-white/70 dark:border-white/10 shadow-md hover:-translate-y-1.5 transition-transform duration-300"
                >
                  {/* Cover Graphic */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={coverImg}
                      alt={concept.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-full bg-white/90 dark:bg-ink/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-papaya-deep dark:text-mango uppercase tracking-wider">
                      {concept.category}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-heading text-base font-bold text-ink dark:text-white line-clamp-1">
                        {concept.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted dark:text-zinc-300 line-clamp-3 leading-relaxed">
                        {concept.shortDefinition}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium text-muted dark:text-zinc-400">
                        {concept.difficulty}
                      </span>
                      <Link
                        to="/psychology-concepts"
                        className="font-bold text-papaya-deep hover:text-papaya dark:text-mango inline-flex items-center gap-1"
                      >
                        <span>{t('common.readArticle')}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </LiquidGlass>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. COURSE TEASER (ILLUSTRATED HERO BANNER)               */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <LiquidGlass
            variant="hero"
            tint="papaya"
            className="rounded-3xl border-white/80 dark:border-white/15 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-papaya-deep to-papaya text-white px-3.5 py-1 text-xs font-bold shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-mango" />
                  <span>{t('coursePage.badge')}</span>
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
                  {t('coursePage.title')}
                </h2>
                <p className="text-sm sm:text-base text-ink/85 dark:text-zinc-200 leading-relaxed max-w-2xl">
                  {t('coursePage.subtitle')}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted dark:text-zinc-300 pt-2">
                  <span className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-white/60">
                    • {t('coursePage.duration')}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-white/60">
                    • {t('coursePage.cohortSize')}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-white/60">
                    • {t('coursePage.kit')}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/course"
                  className="rounded-full bg-gradient-to-r from-papaya-deep to-papaya text-white font-bold py-4 px-6 text-sm text-center shadow-lg hover:shadow-xl transition-all"
                >
                  {t('common.learnMore')}
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenBooking('Course Waitlist Enquiry')}
                  className="rounded-full bg-white/80 hover:bg-white text-ink font-bold py-3.5 px-6 text-sm text-center border border-white/60 shadow-sm dark:bg-white/10 dark:text-white transition-colors"
                >
                  {t('coursePage.waitlistBtn')}
                </button>
              </div>
            </div>
          </LiquidGlass>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. FEATURED READINGS (BLOGS WITH VISUAL COVERS)          */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-peach px-3 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
                <Heart className="h-3.5 w-3.5 text-papaya" />
                <span>{t('nav.blogs')}</span>
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
                {language === 'mr' ? 'सिमरन यांनी लिहिलेले निवडक लेख' : language === 'hi' ? 'सिमरन द्वारा लिखित चुनिंदा लेख' : 'Featured Readings by Simran'}
              </h2>
            </div>

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-papaya-deep hover:text-papaya dark:text-mango group"
            >
              <span>{t('common.viewAll')}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => {
              // Ensure royalty-free cover images for blog cards
              const blogImages = [
                "/assets/images/blog-overthinking.jpg",
                "/assets/images/blog-procrastination.jpg",
                "/assets/images/blog-self-esteem.jpg"
              ];
              const blogCover = blog.coverImage || blogImages[idx % blogImages.length];

              return (
                <LiquidGlass
                  key={blog.slug}
                  variant="card"
                  tint="default"
                  interactive={true}
                  className="flex flex-col justify-between p-0 overflow-hidden rounded-3xl border-white/70 dark:border-white/10 shadow-xl hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={blogCover}
                      alt={blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-white/90 dark:bg-ink/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-papaya-deep dark:text-mango shadow-sm">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-muted dark:text-zinc-300 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{blog.readTime}</span>
                        </span>
                        <span>•</span>
                        <span>{new Date(blog.date).toLocaleDateString(language === 'mr' || language === 'hi' ? 'mr-IN' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-ink dark:text-white line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-muted dark:text-zinc-300 line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                      <span className="text-xs font-semibold text-papaya-deep dark:text-mango">
                        {t('common.bySimran')}
                      </span>
                      <Link
                        to={`/blogs/${blog.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-ink hover:text-papaya dark:text-white group"
                      >
                        <span>{t('common.readArticle')}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </LiquidGlass>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. FAQ ACCORDION (SMOOTH ANIMATED LUCIDE ACCORDION)      */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-tint-peach/15 dark:bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-peach px-3.5 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
              <Sparkles className="h-3.5 w-3.5 text-papaya" />
              <span>{t('faqSection.badge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink dark:text-white">
              {t('faqSection.title')}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
              {t('faqSection.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <LiquidGlass
                  key={index}
                  variant="card"
                  tint="default"
                  interactive={false}
                  className="p-5 sm:p-6 rounded-2xl border-white/80 dark:border-white/10 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-ink dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-papaya-deep dark:text-mango transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed border-t border-black/5 dark:border-white/10 mt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </LiquidGlass>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 13. DEDICATED NEWSLETTER SECTION ON HOME                  */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <LiquidGlass
            variant="card"
            tint="papaya"
            className="rounded-3xl border-white/80 dark:border-white/15 p-8 sm:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3.5 py-1 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango">
                  <Heart className="h-3.5 w-3.5 text-papaya" />
                  <span>{t('homeNewsletter.badge')}</span>
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink dark:text-white">
                  {t('homeNewsletter.title')}
                </h2>
                <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed">
                  {t('homeNewsletter.subtitle')}
                </p>
                <p className="text-[11px] text-muted/80 dark:text-zinc-400">
                  {t('homeNewsletter.guarantee')}
                </p>
              </div>

              <div className="lg:col-span-6">
                {homeNewsletterStatus === 'success' ? (
                  <div className="rounded-2xl bg-tint-mint p-6 text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light text-center space-y-2">
                    <CheckCircle2 className="h-8 w-8 text-leaf mx-auto" />
                    <h4 className="font-heading text-lg font-bold">
                      {t('homeNewsletter.success')}
                    </h4>
                  </div>
                ) : (
                  <form onSubmit={handleHomeNewsletterSubmit} className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      required
                      value={homeNewsletterName}
                      onChange={(e) => setHomeNewsletterName(e.target.value)}
                      placeholder={t('homeNewsletter.namePlaceholder')}
                      className="w-full rounded-2xl border border-papaya/20 bg-white/90 px-4 py-3 text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={homeNewsletterEmail}
                      onChange={(e) => setHomeNewsletterEmail(e.target.value)}
                      placeholder={t('homeNewsletter.emailPlaceholder')}
                      className="w-full rounded-2xl border border-papaya/20 bg-white/90 px-4 py-3 text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white"
                    />
                    <button
                      type="submit"
                      disabled={homeNewsletterStatus === 'loading'}
                      className="w-full rounded-full bg-gradient-to-r from-papaya-deep to-papaya hover:from-papaya hover:to-mango text-white font-bold py-3.5 px-6 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="h-4 w-4" />
                      <span>
                        {homeNewsletterStatus === 'loading'
                          ? t('homeNewsletter.subscribing')
                          : t('homeNewsletter.subscribeBtn')}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </LiquidGlass>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 14. FINAL DISCOVERY & CONSULTATION CALL STRIP             */}
      {/* ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <LiquidGlass
            variant="hero"
            tint="papaya"
            className="rounded-3xl border-white/80 dark:border-white/15 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Background Warm Aura */}
            <div className="ambient-blob-papaya absolute -top-20 left-1/3 h-64 w-64 rounded-full pointer-events-none" />

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold text-papaya-deep dark:bg-white/10 dark:text-mango shadow-sm">
              <Calendar className="h-3.5 w-3.5 text-papaya" />
              <span>{t('common.bookNow')}</span>
            </span>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink dark:text-white max-w-2xl mx-auto">
              {language === 'mr' ? 'स्वतःतील शांत व जिज्ञासू मनाला भेटण्यास तयार आहात?' : language === 'hi' ? 'अपने भीतर के शांत एवं जिज्ञासु मन से मिलने के लिए तैयार हैं?' : 'Ready to meet the curious, grounded you?'}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-ink/80 dark:text-zinc-200 max-w-xl mx-auto leading-relaxed">
              {language === 'mr' ? 'समुपदेशनाचा पहिला टप्पा नेहमीच विश्वासाचा असतो. पहिल्या दिवसापासून आपण एका संवेदनशील आणि सुरक्षित वातावरणात सुरुवात करतो.' : language === 'hi' ? 'काउंसलिंग की ओर पहला कदम हमेशा विश्वास का होता है। पहले दिन से ही हम एक सुरक्षित और संवेदनशील माहौल में आगे बढ़ते हैं।' : 'Taking the first step into counselling requires courage. We ensure a warm, respectful, and confidential space from day one.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep via-papaya to-mango hover:from-papaya hover:to-mango text-white font-bold px-9 py-4 text-sm sm:text-base shadow-xl shadow-papaya/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="h-4 w-4" />
                <span>{t('common.freeDiscovery')}</span>
              </button>

              <a
                href="https://wa.me/919769512475"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +91 9769512475</span>
              </a>
            </div>

            <p className="mt-5 text-xs text-muted dark:text-zinc-300">
              {t('common.puneOnline')}
            </p>
          </LiquidGlass>
        </div>
      </section>
    </div>
  );
}
