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
  Instagram,
  Smile,
  Quote,
  Activity,
  Mail,
  Send
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import BreathingWidget from '../components/widgets/BreathingWidget';
import MoodCheckin from '../components/widgets/MoodCheckin';
import DailyAffirmation from '../components/widgets/DailyAffirmation';
import CounsellingQuiz from '../components/widgets/CounsellingQuiz';
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
  const [openFaq, setOpenFaq] = useState(null);

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
  const marqueeConcerns = t('marquee') || [];

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="Fruitful Mind | Discover The Curious You | Simran Mistry - Psychologist Pune"
        description="Compassionate, eclectic psychological counselling for anxiety, overthinking, career decisions, and psychology tuition in Kothrud, Pune by Simran Mistry."
      />

      {/* Floating Ambient Blobs for Glass Depth */}
      <div className="ambient-blob-plum absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-60 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-sage absolute top-[1200px] left-10 h-[450px] w-[450px] rounded-full pointer-events-none" />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-peach-300/60 bg-brand-peach-100/70 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-plum-900 backdrop-blur-md dark:border-white/10 dark:bg-brand-plum-900/60 dark:text-brand-peach-200"
              >
                <Sparkles className="h-4 w-4 text-brand-peach-600 dark:text-brand-peach-300" />
                <span>{t('hero.badge')}</span>
              </motion.div>

              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-widest text-brand-plum-700 dark:text-brand-peach-300"
                >
                  "{t('hero.tagline')}"
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-plum-950 dark:text-white leading-[1.15]"
                >
                  {t('hero.headline')}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-plum-700 via-brand-peach-500 to-brand-sage-600 dark:from-brand-peach-300 dark:via-brand-peach-200 dark:to-brand-sage-300">
                    {t('hero.headlineHighlight')}
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-base sm:text-lg text-brand-plum-800/90 dark:text-brand-plum-100 max-w-2xl leading-relaxed"
              >
                {t('hero.subheading')}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
              >
                <button
                  type="button"
                  onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
                  className="rounded-full bg-gradient-to-r from-brand-plum-700 via-brand-plum-600 to-brand-peach-500 hover:from-brand-plum-800 hover:to-brand-peach-600 text-white font-bold px-7 py-4 text-sm sm:text-base shadow-lg shadow-brand-plum-800/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('hero.ctaPrimary')}</span>
                </button>

                <Link
                  to="/services"
                  className="rounded-full border border-brand-plum-300/80 bg-white/70 hover:bg-white text-brand-plum-900 font-bold px-6 py-4 text-sm sm:text-base shadow-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                >
                  <span>{t('hero.ctaSecondary')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Quick Trust Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-sage-600 dark:text-brand-sage-300" />
                  <span>{t('common.confidential')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-peach-600 dark:text-brand-peach-300" />
                  <span>{t('common.puneOnline')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smile className="h-4 w-4 text-brand-plum-600 dark:text-brand-plum-300" />
                  <span>{t('common.stigmaFree')}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <LiquidGlass
                variant="hero"
                tint="peach"
                className="rounded-3xl border-white/80 dark:border-white/15 shadow-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-brand-plum-100 dark:border-white/10">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden bg-white/90 p-1.5 shadow-md border border-white/60 flex items-center justify-center flex-shrink-0">
                    <img src={logoImg} alt="Fruitful Mind" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-brand-plum-950 dark:text-white">
                      Fruitful Mind
                    </h3>
                    <p className="text-xs font-semibold text-brand-plum-600 dark:text-brand-peach-300">
                      {t('common.bySimran')}
                    </p>
                    <p className="text-[11px] text-brand-plum-500 dark:text-brand-plum-300">
                      Master's in Counselling Psychology
                    </p>
                  </div>
                </div>

                <div className="py-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-plum-600 dark:text-brand-peach-200">
                    {t('hero.pillarsTitle')}
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/80 dark:bg-white/10 p-3 shadow-sm border border-white/60 dark:border-white/5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-peach-100 text-brand-peach-600 dark:bg-brand-peach-900/40 dark:text-brand-peach-300">
                        <Heart className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-brand-plum-900 dark:text-white">
                          {t('hero.pillar1Title')}
                        </h4>
                        <p className="text-[11px] text-brand-plum-600 dark:text-brand-plum-300">
                          {t('hero.pillar1Desc')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/80 dark:bg-white/10 p-3 shadow-sm border border-white/60 dark:border-white/5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-sage-100 text-brand-sage-600 dark:bg-brand-sage-900/40 dark:text-brand-sage-300">
                        <Compass className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-brand-plum-900 dark:text-white">
                          {t('hero.pillar2Title')}
                        </h4>
                        <p className="text-[11px] text-brand-plum-600 dark:text-brand-plum-300">
                          {t('hero.pillar2Desc')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/80 dark:bg-white/10 p-3 shadow-sm border border-white/60 dark:border-white/5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-plum-100 text-brand-plum-700 dark:bg-brand-plum-900/40 dark:text-brand-peach-300">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-brand-plum-900 dark:text-white">
                          {t('hero.pillar3Title')}
                        </h4>
                        <p className="text-[11px] text-brand-plum-600 dark:text-brand-plum-300">
                          {t('hero.pillar3Desc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs">
                  <a
                    href="https://wa.me/919769512475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{t('common.whatsapp')}</span>
                  </a>
                  <span className="text-brand-plum-500 dark:text-brand-plum-300">
                    {t('common.puneOnline')}
                  </span>
                </div>
              </LiquidGlass>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STATS & MARQUEE STRIP                                  */}
      {/* ========================================================= */}
      <section className="relative py-8 bg-brand-plum-900 text-white overflow-hidden shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-peach-300">
                {t('hero.stats.exp')}
              </span>
              <p className="text-xs text-brand-plum-200">{t('hero.stats.expLabel')}</p>
            </div>
            <div className="space-y-1">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-peach-300">
                Master's
              </span>
              <p className="text-xs text-brand-plum-200">Counselling Psychology</p>
            </div>
            <div className="space-y-1">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-peach-300">
                {t('hero.stats.approach')}
              </span>
              <p className="text-xs text-brand-plum-200">{t('hero.stats.approachLabel')}</p>
            </div>
            <div className="space-y-1">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-peach-300">
                {t('hero.stats.confidential')}
              </span>
              <p className="text-xs text-brand-plum-200">{t('hero.stats.confidentialLabel')}</p>
            </div>
          </div>
        </div>

        {/* Infinite Marquee */}
        <div className="relative flex overflow-x-hidden border-t border-brand-plum-800/80 pt-4">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-peach-200/90">
            {marqueeConcerns.concat(marqueeConcerns).map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-brand-peach-400">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MEET SIMRAN & THE PHILOSOPHY                           */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <LiquidGlass
                variant="card"
                tint="sage"
                interactive={false}
                className="p-8 rounded-3xl border-white/80 dark:border-white/10 shadow-xl"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-peach-200 via-brand-plum-200 to-brand-sage-200 flex flex-col items-center justify-center p-6 text-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden bg-white/90 p-2 shadow-lg mb-4">
                    <img src={logoImg} alt="Simran Mistry" className="h-full w-full object-contain" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-plum-950">
                    Simran Mistry
                  </h3>
                  <p className="text-xs font-bold text-brand-plum-700 mt-1">
                    {t('common.bySimran')}
                  </p>
                  <p className="text-xs text-brand-plum-600 mt-1 max-w-xs">
                    Master's in Counselling Psychology • {t('common.puneOnline')}
                  </p>
                  <div className="mt-6 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-plum-800 shadow-sm">
                    Eclectic • Trauma-Informed • Compassionate
                  </div>
                </div>
              </LiquidGlass>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-plum-100 px-3.5 py-1 text-xs font-bold text-brand-plum-800 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
                <Brain className="h-3.5 w-3.5 text-brand-plum-600 dark:text-brand-peach-300" />
                <span>{t('aboutSection.badge')}</span>
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-plum-950 dark:text-white leading-tight">
                {t('aboutSection.headline')}
              </h2>

              <p className="text-base sm:text-lg text-brand-plum-800/90 dark:text-brand-plum-100 leading-relaxed">
                {t('aboutSection.p1')}
              </p>

              <p className="text-sm sm:text-base text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                {t('aboutSection.p2')}
              </p>

              {/* Client's Authentic Voice from Requirements Form */}
              <div className="rounded-2xl border-l-4 border-brand-peach-500 bg-brand-peach-50/70 p-5 dark:border-brand-peach-400 dark:bg-white/5 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-peach-700 dark:text-brand-peach-300">
                  <Heart className="h-3.5 w-3.5" />
                  <span>{t('welcomeBio.badge')}</span>
                </div>
                <blockquote className="text-xs sm:text-sm text-brand-plum-900 dark:text-brand-plum-100 italic leading-relaxed">
                  {t('welcomeBio.quote')}
                </blockquote>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-brand-plum-600 dark:text-brand-plum-300 border-t border-brand-plum-100 dark:border-white/10">
                  <span className="font-bold text-brand-plum-900 dark:text-white">
                    — {t('welcomeBio.author')} ({t('welcomeBio.credentials')})
                  </span>
                  <span>📍 {t('welcomeBio.location')}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold px-6 py-3.5 text-sm shadow-md transition-colors"
                >
                  <span>{t('aboutSection.readStory')}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-plum-300 bg-white/70 hover:bg-white text-brand-plum-900 font-bold px-6 py-3.5 text-sm shadow-sm transition-colors dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('common.freeDiscovery')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. THE 3 AREAS OF WORK (SERVICES)                         */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-brand-peach-50/40 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-3.5 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
              <Sparkles className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
              <span>{t('servicesPage.badge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('servicesPage.title')}
            </h2>
            <p className="text-sm sm:text-base text-brand-plum-700 dark:text-brand-plum-200">
              {t('servicesPage.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <LiquidGlass
              variant="card"
              tint="peach"
              className="flex flex-col justify-between p-8 rounded-3xl border-white/80 dark:border-white/15"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-peach-100 text-brand-peach-600 dark:bg-brand-peach-900/50 dark:text-brand-peach-300 mb-6 shadow-sm">
                  <Heart className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white">
                  {t('servicesPage.service1Name')}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {t('servicesPage.service1Tagline')}
                </p>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Emotional Wellbeing Counselling')}
                  className="w-full rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3 px-4 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('servicesPage.service1Cta')}</span>
                </button>
              </div>
            </LiquidGlass>

            {/* Service 2 */}
            <LiquidGlass
              variant="card"
              tint="sage"
              className="flex flex-col justify-between p-8 rounded-3xl border-white/80 dark:border-white/15"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-sage-100 text-brand-sage-600 dark:bg-brand-sage-900/50 dark:text-brand-sage-300 mb-6 shadow-sm">
                  <Compass className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white">
                  {t('servicesPage.service2Name')}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {t('servicesPage.service2Tagline')}
                </p>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Career Counselling')}
                  className="w-full rounded-full bg-brand-sage-600 hover:bg-brand-sage-700 text-white font-bold py-3 px-4 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('servicesPage.service2Cta')}</span>
                </button>
              </div>
            </LiquidGlass>

            {/* Service 3 */}
            <LiquidGlass
              variant="card"
              tint="default"
              className="flex flex-col justify-between p-8 rounded-3xl border-white/80 dark:border-white/15"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-plum-100 text-brand-plum-700 dark:bg-brand-plum-900/50 dark:text-brand-peach-300 mb-6 shadow-sm">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-plum-950 dark:text-white">
                  {t('servicesPage.service3Name')}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {t('servicesPage.service3Tagline')}
                </p>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Psychology Tuition (Grade 11/12)')}
                  className="w-full rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3 px-4 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('servicesPage.service3Cta')}</span>
                </button>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE WELLNESS LAB (Breathing + Mood + Affirm)    */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-100 px-3 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
              <Activity className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
              <span>{t('breathingWidget.badge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('common.takePause')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
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
      {/* 6. "IS COUNSELLING RIGHT FOR ME?" QUIZ                    */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-brand-peach-100/30 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('quizWidget.title')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 max-w-lg mx-auto">
              {t('quizWidget.subtitle')}
            </p>
          </div>

          <CounsellingQuiz onOpenBooking={onOpenBooking} />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. PSYCHOLOGY CONCEPTS TEASER                             */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-plum-100 px-3 py-1 text-xs font-bold text-brand-plum-800 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
                <Brain className="h-3.5 w-3.5 text-brand-plum-600 dark:text-brand-peach-300" />
                <span>{t('conceptsPage.badge')}</span>
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
                {t('conceptsPage.title')}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
                {t('conceptsPage.subtitle')}
              </p>
            </div>

            <Link
              to="/psychology-concepts"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-plum-800 hover:text-brand-plum-950 dark:text-brand-peach-300 dark:hover:text-white group"
            >
              <span>{t('common.viewAll')}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((concept) => (
              <LiquidGlass
                key={concept.id}
                variant="card"
                tint="default"
                interactive={true}
                className="flex flex-col justify-between p-6 rounded-2xl border-white/70 dark:border-white/10"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300">
                    {concept.category}
                  </span>
                  <h3 className="mt-1.5 font-heading text-lg font-bold text-brand-plum-950 dark:text-white">
                    {concept.title}
                  </h3>
                  <p className="mt-2 text-xs text-brand-plum-700 dark:text-brand-plum-200 line-clamp-3">
                    {concept.shortDefinition}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-plum-100 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-brand-plum-500 dark:text-brand-plum-300">
                    {concept.difficulty}
                  </span>
                  <Link
                    to="/psychology-concepts"
                    className="font-bold text-brand-plum-800 hover:text-brand-plum-950 dark:text-brand-peach-300 inline-flex items-center gap-1"
                  >
                    <span>{t('common.readArticle')}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. COURSE TEASER                                          */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <LiquidGlass
            variant="hero"
            tint="peach"
            className="rounded-3xl border-white/80 dark:border-white/15 p-8 sm:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-plum-700 text-white px-3.5 py-1 text-xs font-bold">
                  <Sparkles className="h-3.5 w-3.5 text-brand-peach-300" />
                  <span>{t('coursePage.badge')}</span>
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
                  {t('coursePage.title')}
                </h2>
                <p className="text-sm sm:text-base text-brand-plum-800 dark:text-brand-plum-100 leading-relaxed max-w-2xl">
                  {t('coursePage.subtitle')}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-plum-700 dark:text-brand-plum-200 pt-2">
                  <span>• {t('coursePage.duration')}</span>
                  <span>• {t('coursePage.cohortSize')}</span>
                  <span>• {t('coursePage.kit')}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  to="/course"
                  className="rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-4 px-6 text-sm text-center shadow-md transition-colors"
                >
                  {t('common.learnMore')}
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenBooking('Course Waitlist Enquiry')}
                  className="rounded-full bg-white/80 hover:bg-white text-brand-plum-900 font-bold py-3.5 px-6 text-sm text-center border border-white/60 shadow-sm dark:bg-white/10 dark:text-white transition-colors"
                >
                  {t('coursePage.waitlistBtn')}
                </button>
              </div>
            </div>
          </LiquidGlass>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. FEATURED BLOGS                                         */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-3 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
                <Heart className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
                <span>{t('nav.blogs')}</span>
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
                {language === 'mr' ? 'सिमरन यांनी लिहिलेले निवडक लेख' : language === 'hi' ? 'सिमरन द्वारा लिखित चुनिंदा लेख' : 'Featured Readings by Simran'}
              </h2>
            </div>

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-plum-800 hover:text-brand-plum-950 dark:text-brand-peach-300 dark:hover:text-white group"
            >
              <span>{t('common.viewAll')}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <LiquidGlass
                key={blog.slug}
                variant="card"
                tint="default"
                interactive={true}
                className="flex flex-col justify-between p-0 overflow-hidden rounded-3xl border-white/70 dark:border-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 dark:bg-brand-plum-950/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-brand-plum-900 dark:text-brand-peach-200">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-brand-plum-600 dark:text-brand-plum-300 mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{blog.readTime}</span>
                      </span>
                      <span>•</span>
                      <span>{new Date(blog.date).toLocaleDateString(language === 'mr' || language === 'hi' ? 'mr-IN' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-brand-plum-950 dark:text-white line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-brand-plum-100 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-plum-600 dark:text-brand-peach-300">
                      {t('common.bySimran')}
                    </span>
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-plum-900 hover:text-brand-peach-600 dark:text-white group"
                    >
                      <span>{t('common.readArticle')}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </LiquidGlass>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FAQ ACCORDION                                         */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-plum-100 px-3.5 py-1 text-xs font-bold text-brand-plum-800 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
              <Sparkles className="h-3.5 w-3.5 text-brand-plum-600 dark:text-brand-peach-300" />
              <span>{t('faqSection.badge')}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('faqSection.title')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
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
                  className="p-5 sm:p-6 rounded-2xl border-white/70 dark:border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-brand-plum-950 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-brand-plum-600 dark:text-brand-peach-300 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed border-t border-brand-plum-100 dark:border-white/10 mt-4"
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
      {/* 11. DEDICATED NEWSLETTER SECTION ON HOME                  */}
      {/* ========================================================= */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <LiquidGlass
            variant="card"
            tint="peach"
            className="rounded-3xl border-white/80 dark:border-white/15 p-8 sm:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-3.5 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
                  <Heart className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
                  <span>{t('homeNewsletter.badge')}</span>
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-plum-950 dark:text-white">
                  {t('homeNewsletter.title')}
                </h2>
                <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  {t('homeNewsletter.subtitle')}
                </p>
                <p className="text-[11px] text-brand-plum-500 dark:text-brand-plum-400">
                  {t('homeNewsletter.guarantee')}
                </p>
              </div>

              <div className="lg:col-span-6">
                {homeNewsletterStatus === 'success' ? (
                  <div className="rounded-2xl bg-brand-sage-100 p-6 text-brand-sage-900 dark:bg-brand-sage-900/40 dark:text-brand-sage-200 text-center space-y-2">
                    <CheckCircle2 className="h-8 w-8 text-brand-sage-600 dark:text-brand-sage-400 mx-auto" />
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
                      className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-3 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={homeNewsletterEmail}
                      onChange={(e) => setHomeNewsletterEmail(e.target.value)}
                      placeholder={t('homeNewsletter.emailPlaceholder')}
                      className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-3 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                    />
                    <button
                      type="submit"
                      disabled={homeNewsletterStatus === 'loading'}
                      className="w-full rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-6 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
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
      {/* 12. FINAL CONTACT & DISCOVERY STRIP                       */}
      {/* ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <LiquidGlass
            variant="hero"
            tint="peach"
            className="rounded-3xl border-white/80 dark:border-white/15 p-8 sm:p-12 text-center shadow-2xl"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/70 px-4 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
              <Calendar className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
              <span>{t('common.bookNow')}</span>
            </span>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-plum-950 dark:text-white max-w-2xl mx-auto">
              {language === 'mr' ? 'स्वतःतील शांत व जिज्ञासू मनाला भेटण्यास तयार आहात?' : language === 'hi' ? 'अपने भीतर के शांत एवं जिज्ञासु मन से मिलने के लिए तैयार हैं?' : 'Ready to meet the curious, grounded you?'}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-brand-plum-800 dark:text-brand-plum-200 max-w-xl mx-auto leading-relaxed">
              {language === 'mr' ? 'समुपदेशनाचा पहिला टप्पा नेहमीच विश्वासाचा असतो. पहिल्या दिवसापासून आपण एका संवेदनशील आणि सुरक्षित वातावरणात सुरुवात करतो.' : language === 'hi' ? 'काउंसलिंग की ओर पहला कदम हमेशा विश्वास का होता है। पहले दिन से ही हम एक सुरक्षित और संवेदनशील माहौल में आगे बढ़ते हैं।' : 'Taking the first step into counselling requires courage. We ensure a warm, respectful, and confidential space from day one.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking('Free 15-Min Discovery Call')}
                className="w-full sm:w-auto rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold px-8 py-4 text-sm sm:text-base shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                <span>{t('common.freeDiscovery')}</span>
              </button>

              <a
                href="https://wa.me/919769512475"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-4 text-sm sm:text-base shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +91 9769512475</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-brand-plum-600 dark:text-brand-plum-300">
              {t('common.puneOnline')}
            </p>
          </LiquidGlass>
        </div>
      </section>
    </div>
  );
}
