import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  MessageCircle
} from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';
import { useLanguage } from '../../context/LanguageContext';
import logoImg from '../../assets/logo.png';

export default function Footer({ onOpenBooking }) {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  const areasList = t('marquee') || [
    "Anxiety & Panic",
    "Overthinking Loops",
    "Stress & Burnout",
    "Self-Esteem & Inner Critic",
    "Procrastination & Inertia",
    "Career Crossroads",
    "Grade 11 & 12 Psychology Tuition"
  ];

  return (
    <footer className="relative mt-24 border-t border-brand-plum-200/50 bg-gradient-to-b from-brand-canvas-light via-brand-peach-50/30 to-brand-peach-100/40 dark:border-white/10 dark:from-brand-canvas-dark dark:via-brand-canvas-dark dark:to-brand-canvas-darkCard/80 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-blob-plum absolute -bottom-24 left-1/4 h-96 w-96 rounded-full pointer-events-none opacity-40" />
      <div className="ambient-blob-peach absolute top-0 right-10 h-80 w-80 rounded-full pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter Card */}
        <div className="mb-16">
          <LiquidGlass
            variant="card"
            tint="peach"
            className="p-8 sm:p-10 rounded-3xl border-white/80 dark:border-white/15"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-3 py-1 text-xs font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
                  <Heart className="h-3.5 w-3.5 text-brand-peach-600 dark:text-brand-peach-300" />
                  <span>{t('footer.newsletterBadge')}</span>
                </span>
                <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-brand-plum-900 dark:text-white">
                  {t('footer.newsletterTitle')}
                </h3>
                <p className="mt-2 text-sm text-brand-plum-700 dark:text-brand-plum-200 max-w-xl">
                  {t('footer.newsletterSubtitle')}
                </p>
              </div>

              <div className="lg:col-span-5">
                {status === 'success' ? (
                  <div className="flex items-center gap-2 rounded-2xl bg-brand-sage-100/80 p-4 text-brand-sage-800 dark:bg-brand-sage-900/40 dark:text-brand-sage-200">
                    <CheckCircle2 className="h-5 w-5 text-brand-sage-600 dark:text-brand-sage-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold">
                      {t('footer.subscribed')}
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-full border border-brand-plum-200/80 bg-white/90 px-5 py-3 text-sm text-brand-plum-900 shadow-sm placeholder:text-brand-plum-400 focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 px-6 py-3 text-sm font-bold text-white shadow-md transition-all sm:w-auto flex-shrink-0 active:scale-95"
                    >
                      <span>{status === 'loading' ? t('footer.subscribing') : t('footer.subscribeBtn')}</span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                )}
                <p className="mt-2 text-[11px] text-brand-plum-500 dark:text-brand-plum-400">
                  {t('footer.unsubNote')}
                </p>
              </div>
            </div>
          </LiquidGlass>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-brand-plum-200/50 dark:border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-white/70 p-1 border border-white/60 shadow-sm">
                <img src={logoImg} alt="Fruitful Mind" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="font-heading text-xl font-black text-brand-plum-900 dark:text-white">
                  Fruitful Mind
                </span>
                <p className="text-xs font-semibold text-brand-plum-600 dark:text-brand-peach-300">
                  "{t('hero.tagline')}"
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-brand-plum-700/90 dark:text-brand-plum-200 max-w-sm leading-relaxed">
              {t('footer.tagline')}
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-brand-plum-600 dark:text-brand-peach-300 pt-1">
              <ShieldCheck className="h-4 w-4 text-brand-sage-600 dark:text-brand-sage-400" />
              <span>{t('common.confidential')} & {t('common.stigmaFree')}</span>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-plum-600 dark:text-brand-peach-300 block mb-3">
                {t('footer.socialTitle')}
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href="https://instagram.com/thefruitfulmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fruitful Mind on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="https://linkedin.com/in/simran-mistry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Simran Mistry on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-[#0077b5] hover:text-white hover:border-transparent hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20with%20Fruitful%20Mind."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-emerald-600 hover:text-white hover:border-transparent hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                  title="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>

                <a
                  href="https://youtube.com/@thefruitfulmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fruitful Mind on YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-[#ff0000] hover:text-white hover:border-transparent hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                  title="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>

                <a
                  href="https://twitter.com/fruitfulmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fruitful Mind on X (Twitter)"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-slate-900 hover:text-white hover:border-transparent hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                  title="X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>

                <a
                  href="https://facebook.com/thefruitfulmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fruitful Mind on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-[#1877f2] hover:text-white hover:border-transparent hover:shadow-md hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-brand-plum-900 dark:text-brand-peach-200 mb-4">
              {t('footer.exploreTitle')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white transition-colors">
                  {t('nav.blogs')}
                </Link>
              </li>
              <li>
                <Link to="/wellbeing-guide" className="text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white transition-colors">
                  {t('nav.wellbeingGuide')}
                </Link>
              </li>
              <li>
                <Link to="/psychology-concepts" className="text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white transition-colors">
                  {t('nav.concepts')}
                </Link>
              </li>
              <li>
                <Link to="/course" className="text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white transition-colors">
                  {t('nav.course')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-brand-plum-900 dark:text-brand-peach-200 mb-4">
              {t('footer.areasTitle')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
              {areasList.slice(0, 7).map((area, i) => (
                <li key={i}>• {area}</li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-brand-plum-900 dark:text-brand-peach-200 mb-4">
              {t('footer.contactTitle')}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20sessions%20with%20Fruitful%20Mind."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white"
                >
                  <Phone className="h-4 w-4 text-brand-peach-600 dark:text-brand-peach-300" />
                  <span>+91 9769512475</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:simran.thefruitfulmind@gmail.com"
                  className="inline-flex items-center gap-2 text-brand-plum-700 hover:text-brand-plum-950 dark:text-brand-plum-200 dark:hover:text-white break-all"
                >
                  <Mail className="h-4 w-4 text-brand-plum-600 dark:text-brand-peach-300 flex-shrink-0" />
                  <span>simran.thefruitfulmind@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-plum-700 dark:text-brand-plum-200">
                <MapPin className="h-4 w-4 text-brand-sage-600 dark:text-brand-sage-300 flex-shrink-0 mt-0.5" />
                <span>{t('contactPage.locationVal')}</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenBooking(t('common.bookNow'))}
                  className="w-full text-center rounded-full bg-brand-peach-500 hover:bg-brand-peach-600 text-white font-bold py-2.5 px-4 text-xs shadow-md transition-colors active:scale-95"
                >
                  {t('nav.bookSession')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical Crisis Disclaimer (Guardrail requirement) */}
        <div className="my-8 rounded-2xl border border-brand-peach-200/60 bg-white/40 p-4 sm:p-5 text-xs text-brand-plum-800 dark:border-white/10 dark:bg-white/5 dark:text-brand-plum-200 leading-relaxed">
          <p className="font-semibold text-brand-plum-900 dark:text-white mb-1">
            Important Mental Health & Crisis Notice:
          </p>
          <p>
            {t('footer.disclaimer')}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-brand-plum-600 dark:text-brand-plum-300 gap-4">
          <p>
            © {new Date().getFullYear()} Fruitful Mind by Simran Mistry. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:underline">
              Confidentiality & Ethics
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:underline">
              Kothrud Pune Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
