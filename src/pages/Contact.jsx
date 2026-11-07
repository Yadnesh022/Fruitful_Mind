import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  Sparkle,
  Calendar,
  Lock
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import {
  PapayaDoodle,
  MangoDoodle,
  LeafDoodle,
  TeaCupDoodle,
  FloatingElement
} from '../components/illustrations/BrandDoodles';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Emotional Wellbeing Counselling',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    try {
      if (endpoint && endpoint.startsWith('http')) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', service: 'Emotional Wellbeing Counselling', message: '' });
        } else {
          throw new Error('Form submission failed. Please reach out directly on WhatsApp.');
        }
      } else {
        // Simulated submission for static preview
        setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', service: 'Emotional Wellbeing Counselling', message: '' });
        }, 800);
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please connect with Simran via WhatsApp or direct phone call.');
    }
  };

  const serviceOptions = t('contactPage.serviceOptions') || [
    { value: "Emotional Wellbeing Counselling", label: "Emotional Wellbeing Counselling" },
    { value: "Career Counselling", label: "Career Counselling" },
    { value: "Psychology Tuition (Grade 11/12)", label: "Psychology Tuition (Grade 11/12)" },
    { value: "Psychology Tuition (Graduate)", label: "Psychology Tuition (Graduate Level)" },
    { value: "Course Waitlist Enquiry", label: "Emotional Wellbeing Course" },
    { value: "General Question", label: "General Question" }
  ];

  return (
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="Contact Simran Mistry | Psychologist Kothrud Pune | Fruitful Mind"
        description="Connect with Simran Mistry, Psychologist in Kothrud, Pune. Book in-person or online counselling for anxiety, overthinking, career clarity, and psychology tuition."
        canonical="https://fruitfulmind.in/contact"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-96 -right-20 h-[550px] w-[550px] rounded-full pointer-events-none" />
      <div className="ambient-blob-leaf absolute top-[1400px] -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Elements */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-12 z-10" duration={7} delay={0.2} yOffset={16}>
          <PapayaDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-48 right-14 z-10" duration={8} delay={0.8} yOffset={18}>
          <MangoDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-[850px] left-8 z-10" duration={6.5} delay={1.4} yOffset={14}>
          <TeaCupDoodle className="w-10 h-10 drop-shadow-sm" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ========================================================= */}
        {/* HEADER HERO                                               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-papaya/30 bg-tint-peach/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-papaya-deep backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-mango shadow-sm"
          >
            <MessageCircle className="h-4 w-4 text-papaya" />
            <span>{t('contactPage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink dark:text-white leading-[1.15]"
          >
            {t('contactPage.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-papaya-deep via-papaya to-mango">
              Simran Mistry
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 dark:text-zinc-200 leading-relaxed"
          >
            {t('contactPage.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-28">
          {/* ========================================================= */}
          {/* LEFT COLUMN: DIRECT CONTACT INFO & ACCESSIBLE CHANNELS    */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <LiquidGlass
              variant="card"
              tint="default"
              interactive={false}
              className="p-8 sm:p-10 rounded-3xl border-white/80 dark:border-white/15 shadow-2xl space-y-6"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-papaya-deep dark:text-mango block mb-1">
                  Connect Directly
                </span>
                <h2 className="font-heading text-2xl font-extrabold text-ink dark:text-white">
                  {t('contactPage.infoTitle')}
                </h2>
              </div>

              <div className="space-y-5">
                {/* Phone / Call */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-transform hover:scale-[1.01]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tint-peach text-papaya-deep dark:bg-papaya/20 dark:text-mango flex-shrink-0 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-muted dark:text-zinc-300 block">
                      {t('contactPage.phoneTitle')}
                    </span>
                    <a
                      href="tel:+919769512475"
                      className="font-bold text-sm sm:text-base text-ink dark:text-white hover:text-papaya transition-colors"
                    >
                      +91 9769512475
                    </a>
                    <p className="text-[11px] text-muted dark:text-zinc-400">
                      {t('contactPage.phoneHours')}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/20 transition-transform hover:scale-[1.01]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 flex-shrink-0 shadow-sm">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 block">
                      {t('contactPage.whatsappTitle')}
                    </span>
                    <a
                      href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20sessions%20with%20Fruitful%20Mind."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-base text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      wa.me/919769512475
                    </a>
                    <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80">
                      {t('contactPage.whatsappNote')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-transform hover:scale-[1.01]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tint-lavender text-grape dark:bg-grape/20 dark:text-grape-light flex-shrink-0 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-muted dark:text-zinc-300 block">
                      {t('contactPage.emailTitle')}
                    </span>
                    <a
                      href="mailto:simran.thefruitfulmind@gmail.com"
                      className="font-bold text-sm sm:text-base text-ink dark:text-white hover:text-papaya transition-colors break-all"
                    >
                      simran.thefruitfulmind@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-transform hover:scale-[1.01]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light flex-shrink-0 shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-muted dark:text-zinc-300 block">
                      {t('contactPage.locationTitle')}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-ink dark:text-white block">
                      {t('contactPage.locationVal')}
                    </span>
                    <p className="text-[11px] text-muted dark:text-zinc-400">
                      {t('contactPage.locationNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-black/5 dark:border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted dark:text-zinc-300 block mb-3">
                  {t('footer.socialTitle')}
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href="https://instagram.com/thefruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-ink shadow-sm border border-white/60 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-zinc-200"
                    title="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  <a
                    href="https://linkedin.com/in/simran-mistry"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-ink shadow-sm border border-white/60 hover:bg-[#0077b5] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-zinc-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  <a
                    href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20with%20Fruitful%20Mind."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-ink shadow-sm border border-white/60 hover:bg-emerald-600 hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-zinc-200"
                    title="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>

                  <a
                    href="https://youtube.com/@thefruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-ink shadow-sm border border-white/60 hover:bg-[#ff0000] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-zinc-200"
                    title="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>

                  <a
                    href="https://twitter.com/fruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-ink shadow-sm border border-white/60 hover:bg-slate-900 hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-zinc-200"
                    title="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Confidentiality Reminder */}
              <div className="rounded-2xl bg-tint-mint/50 dark:bg-white/5 p-4 border border-leaf/20 flex items-start gap-3 shadow-sm">
                <Lock className="h-5 w-5 text-leaf-deep dark:text-leaf flex-shrink-0 mt-0.5" />
                <p className="text-xs text-ink/80 dark:text-zinc-200 leading-relaxed">
                  <strong>{t('contactPage.privacyGuaranteeTitle')} </strong>
                  {t('contactPage.privacyGuaranteeDesc')}
                </p>
              </div>
            </LiquidGlass>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CONTACT FORM WITH LIQUID GLASS              */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <LiquidGlass
              variant="card"
              tint="papaya"
              interactive={false}
              className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/15 shadow-2xl"
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white mb-2">
                {t('contactPage.formTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 mb-8">
                {t('contactPage.formSubtitle')}
              </p>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light shadow-md">
                    <CheckCircle2 className="h-10 w-10 text-leaf" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-ink dark:text-white">
                    {t('contactPage.successTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                    {t('contactPage.successDesc')}
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="rounded-full bg-gradient-to-r from-papaya-deep to-papaya text-white font-bold py-3 px-7 text-xs active:scale-95 transition-transform cursor-pointer shadow-md"
                    >
                      {t('contactPage.sendAnother')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="rounded-2xl bg-red-100/90 p-4 text-xs text-red-800 dark:bg-red-900/30 dark:text-red-200 flex items-center gap-2 border border-red-200">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-ink/80 dark:text-zinc-200 mb-1.5">
                        {t('contactPage.nameLabel')}
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contactPage.namePlaceholder')}
                        className="w-full rounded-2xl border border-papaya/20 bg-white/95 px-4 py-3 text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-ink/80 dark:text-zinc-200 mb-1.5">
                        {t('contactPage.phoneLabel')}
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contactPage.phonePlaceholder')}
                        className="w-full rounded-2xl border border-papaya/20 bg-white/95 px-4 py-3 text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-ink/80 dark:text-zinc-200 mb-1.5">
                        {t('contactPage.emailLabel')}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contactPage.emailPlaceholder')}
                        className="w-full rounded-2xl border border-papaya/20 bg-white/95 px-4 py-3 text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-ink/80 dark:text-zinc-200 mb-1.5">
                        {t('contactPage.serviceLabel')}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-papaya/20 bg-white/95 px-4 py-3 text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-ink/80 dark:text-zinc-200 mb-1.5">
                      {t('contactPage.messageLabel')}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contactPage.messagePlaceholder')}
                      className="w-full rounded-2xl border border-papaya/20 bg-white/95 px-4 py-3 text-sm text-ink shadow-sm focus:border-papaya focus:outline-none focus:ring-2 focus:ring-papaya/20 dark:border-white/15 dark:bg-dark-bg dark:text-white resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full rounded-full bg-gradient-to-r from-papaya-deep via-papaya to-mango hover:from-papaya hover:to-mango text-white font-bold py-4 px-6 text-sm shadow-xl shadow-papaya/30 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>{status === 'loading' ? t('contactPage.submitting') : t('contactPage.submitBtn')}</span>
                    </button>
                    <p className="mt-3 text-center text-[11px] text-muted dark:text-zinc-400">
                      {t('contactPage.noSpamNote')}
                    </p>
                  </div>
                </form>
              )}
            </LiquidGlass>
          </div>
        </div>

        {/* ========================================================= */}
        {/* EMBEDDED GOOGLE MAP OF KOTHRUD, PUNE                      */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
              <MapPin className="h-3.5 w-3.5" />
              <span>{t('contactPage.mapBadge')}</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
              {t('contactPage.mapTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-muted dark:text-zinc-300">
              {t('contactPage.mapSubtitle')}
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/80 dark:border-white/15 aspect-[16/9] sm:aspect-[21/9] w-full relative">
            <iframe
              title="Fruitful Mind Location - Kothrud, Pune"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30271.742398572427!2d73.7937402!3d18.5074211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfa0521e14ab%3A0x8e8749c953a99e8b!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* EMERGENCY HELPLINES NOTICE (CRITICAL ETHICS GUARDRAIL)    */}
        {/* ========================================================= */}
        <div className="rounded-3xl border border-papaya/30 bg-tint-peach/40 p-6 sm:p-10 text-xs sm:text-sm text-ink dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 space-y-4 shadow-md">
          <div className="flex items-center gap-2.5 font-heading text-base sm:text-lg font-bold text-papaya-deep dark:text-mango">
            <AlertCircle className="h-5 w-5" />
            <span>{t('contactPage.emergencyTitle')}</span>
          </div>
          <p className="leading-relaxed text-muted dark:text-zinc-300">
            {t('contactPage.emergencyNotice')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-semibold">
            <div className="rounded-2xl bg-white/90 p-4 shadow-sm dark:bg-dark-card/90 border border-white/60 dark:border-white/10">
              <span className="block text-xs text-papaya-deep dark:text-mango font-bold">Tele-MANAS (Govt of India):</span>
              <a href="tel:14416" className="text-base font-extrabold text-ink dark:text-white hover:underline mt-1 block">
                14416 / 1800-891-4416
              </a>
            </div>
            <div className="rounded-2xl bg-white/90 p-4 shadow-sm dark:bg-dark-card/90 border border-white/60 dark:border-white/10">
              <span className="block text-xs text-papaya-deep dark:text-mango font-bold">KIRAN Mental Health:</span>
              <a href="tel:18005990019" className="text-base font-extrabold text-ink dark:text-white hover:underline mt-1 block">
                1800-599-0019
              </a>
            </div>
            <div className="rounded-2xl bg-white/90 p-4 shadow-sm dark:bg-dark-card/90 border border-white/60 dark:border-white/10">
              <span className="block text-xs text-papaya-deep dark:text-mango font-bold">National Emergency Services:</span>
              <a href="tel:112" className="text-base font-extrabold text-ink dark:text-white hover:underline mt-1 block">
                112
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
