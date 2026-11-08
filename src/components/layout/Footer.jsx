import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import WhatsAppIcon from '../common/WhatsAppIcon';
import logoImg from '../../assets/logo.png';

export default function Footer({ onOpenBooking }) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 700);
  };

  const areasList = [
    'Anxiety & Panic Management',
    'Quiet Overthinking Loops',
    'Stress Regulation & Burnout',
    'Healthy Self-Esteem & Boundaries',
    'Procrastination & Pacing',
    'Career Clarity & Navigation',
    'Grade 11 & 12 Psychology Tuition',
    'Undergraduate Psychology Support'
  ];

  return (
    <footer className="relative mt-24 bg-primary-deep text-[#FBF8F1] pt-16 pb-12 overflow-hidden border-t border-primary-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-primary-600/40">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="h-11 w-11 rounded-full overflow-hidden bg-white p-1 border border-white/60 shadow-sm flex items-center justify-center">
                <img src={logoImg} alt="Fruitful Mind Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white tracking-tight">
                  Fruitful Mind
                </span>
                <p className="text-xs font-medium text-accent">
                  "Discover The Curious You"
                </p>
              </div>
            </Link>

            <p className="text-sm text-[#D9F0EC] max-w-sm leading-relaxed">
              Psychological practice founded by Simran Mistry (Master's in Counselling Psychology, 3+ years experience). Grounded, empathetic counselling for emotional wellbeing, career clarity, and academic psychology tuition in Kothrud, Pune and online worldwide.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-white/90 pt-1">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>100% Confidential • Warm & Stigma-Free Space</span>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B2E0D8] block mb-2.5">
                {t('footer.socialTitle') || 'Connect & Read'}
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="https://instagram.com/thefruitfulmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fruitful Mind on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/40 hover:bg-accent hover:text-ink text-white border border-primary-400/30 transition-all duration-200"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com/in/simran-mistry"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Simran Mistry on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/40 hover:bg-accent hover:text-ink text-white border border-primary-400/30 transition-all duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20with%20Fruitful%20Mind."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white border border-[#25D366]/40 transition-all duration-200"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>

                <a
                  href="https://youtube.com/@thefruitfulmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fruitful Mind on YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/40 hover:bg-accent hover:text-ink text-white border border-primary-400/30 transition-all duration-200"
                  title="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>

                <a
                  href="https://twitter.com/fruitfulmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fruitful Mind on X (Twitter)"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/40 hover:bg-accent hover:text-ink text-white border border-primary-400/30 transition-all duration-200"
                  title="X (Twitter)"
                >
                  <Twitter className="h-4 w-4" />
                </a>

                <a
                  href="https://facebook.com/thefruitfulmind"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fruitful Mind on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/40 hover:bg-accent hover:text-ink text-white border border-primary-400/30 transition-all duration-200"
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-accent mb-4">
              {t('footer.exploreTitle') || 'Explore Practice'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-[#D9F0EC] hover:text-white transition-colors">
                  {t('nav.home') || 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#D9F0EC] hover:text-white transition-colors">
                  {t('nav.about') || 'About Simran'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#D9F0EC] hover:text-white transition-colors">
                  {t('nav.services') || 'Services & Fees'}
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-[#D9F0EC] hover:text-white transition-colors">
                  {t('nav.blogs') || 'Articles & Insights'}
                </Link>
              </li>
              <li>
                <Link to="/wellbeing-guide" className="text-[#D9F0EC] hover:text-white transition-colors">
                  {t('nav.wellbeingGuide') || 'Wellbeing Toolkit'}
                </Link>
              </li>
              <li>
                <Link to="/psychology-concepts" className="text-[#D9F0EC] hover:text-white transition-colors">
                  {t('nav.concepts') || 'Concepts Simplified'}
                </Link>
              </li>
              <li>
                <Link to="/course" className="text-[#D9F0EC] hover:text-white transition-colors">
                  {t('nav.course') || 'Emotional Wellbeing Course'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Areas */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-accent mb-4">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D9F0EC]">
              {areasList.map((area, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider uppercase text-accent mb-4">
              {t('footer.contactTitle') || 'Kothrud Practice'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20sessions%20with%20Fruitful%20Mind."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D9F0EC] hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>+91 9769512475</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:simran.thefruitfulmind@gmail.com"
                  className="inline-flex items-center gap-2 text-[#D9F0EC] hover:text-white transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>simran.thefruitfulmind@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#D9F0EC]">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Kothrud, Pune, Maharashtra 411038 & Online via Google Meet / Zoom</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenBooking && onOpenBooking('General Enquiry')}
                  className="w-full text-center rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold py-2.5 px-4 text-xs shadow-sm transition-all duration-200 active:scale-95"
                >
                  Book Discovery Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#B2E0D8] gap-4">
          <p>
            © {new Date().getFullYear()} Fruitful Mind by Simran Mistry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:underline hover:text-white">
              Confidentiality Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:underline hover:text-white">
              Kothrud, Pune Practice
            </Link>
            <span>•</span>
            <Link to="/about" className="hover:underline hover:text-white">
              Eclectic Approach
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
