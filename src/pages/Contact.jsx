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
  Calendar,
  Lock,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowRight
} from 'lucide-react';

import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import {
  ThoughtCloudDoodle,
  CompassDoodle,
  BrainBulbDoodle,
  FloatingShape
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
      setErrorMessage(err.message || 'Something went wrong. Please connect with Simran directly via WhatsApp or phone call.');
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
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sand-warm text-ink">
      <SEO
        title="Contact Simran Mistry | Psychologist Kothrud Pune | Fruitful Mind"
        description="Connect with Simran Mistry, Psychologist in Kothrud, Pune. Book in-person or online counselling for anxiety, overthinking, career clarity, and psychology tuition."
        canonical="https://fruitfulmind.in/contact"
      />

      {/* Floating Abstract Mind-Themed Shapes */}
      <div className="hidden lg:block pointer-events-none select-none">
        <FloatingShape className="absolute top-36 left-10 z-0" duration={8} delay={0.2} yOffset={16}>
          <ThoughtCloudDoodle className="w-16 h-12 text-teal-primary/30" />
        </FloatingShape>
        <FloatingShape className="absolute top-48 right-12 z-0" duration={9} delay={0.6} yOffset={20}>
          <CompassDoodle className="w-14 h-14 text-lavender/40" />
        </FloatingShape>
        <FloatingShape className="absolute top-[850px] left-6 z-0" duration={7.5} delay={1.2} yOffset={14}>
          <BrainBulbDoodle className="w-12 h-12 text-yellow-accent/50" />
        </FloatingShape>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ========================================================= */}
        {/* HEADER HERO                                               */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-primary/20 bg-teal-tint px-4 py-1.5 text-xs sm:text-sm font-semibold text-teal-deep"
          >
            <MessageCircle className="h-4 w-4 text-teal-primary" />
            <span>{t('contactPage.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-deep leading-[1.15]"
          >
            {t('contactPage.title')}{' '}
            <span className="relative inline-block">
              <span>Simran Mistry</span>
              <span className="absolute left-0 -bottom-1.5 w-full h-2.5 bg-yellow-accent/50 -z-10 rounded-sm"></span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base sm:text-lg text-ink/80 leading-relaxed max-w-2xl mx-auto"
          >
            {t('contactPage.subtitle')}
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* CONTACT GRID: INFO & FORM                                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24">
          {/* ========================================================= */}
          {/* LEFT COLUMN: DIRECT CLINICAL CONTACT DETAILS             */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-teal-primary/15 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-primary block mb-1">
                  Direct Practice Channels
                </span>
                <h2 className="font-heading text-2xl font-bold text-teal-deep">
                  {t('contactPage.infoTitle')}
                </h2>
                <p className="text-xs text-muted mt-1">
                  Confidential appointments in Kothrud, Pune or online across India.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone / Call */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-sand-warm/60 border border-teal-primary/10 hover:border-teal-primary/25 transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-tint text-teal-deep flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-muted block">
                      {t('contactPage.phoneTitle')}
                    </span>
                    <a
                      href="tel:+919769512475"
                      className="font-bold text-sm sm:text-base text-teal-deep hover:text-teal-primary transition-colors block"
                    >
                      +91 9769512475
                    </a>
                    <p className="text-[11px] text-muted mt-0.5">
                      {t('contactPage.phoneHours')}
                    </p>
                  </div>
                </div>

                {/* WhatsApp Priority */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/70 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white flex-shrink-0 shadow-sm shadow-emerald-700/20">
                    <WhatsAppIcon className="h-5 w-5 fill-white text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-emerald-900 block">
                      {t('contactPage.whatsappTitle')} (Fastest Response)
                    </span>
                    <a
                      href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20a%20psychology%20session%20with%20Fruitful%20Mind."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-base text-emerald-800 hover:text-emerald-950 hover:underline flex items-center gap-1.5"
                    >
                      <span>wa.me/919769512475</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <p className="text-[11px] text-emerald-700/80 mt-0.5">
                      {t('contactPage.whatsappNote')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-sand-warm/60 border border-teal-primary/10 hover:border-teal-primary/25 transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-tint text-lavender flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-muted block">
                      {t('contactPage.emailTitle')}
                    </span>
                    <a
                      href="mailto:simran.thefruitfulmind@gmail.com"
                      className="font-bold text-sm sm:text-base text-teal-deep hover:text-teal-primary transition-colors break-all block"
                    >
                      simran.thefruitfulmind@gmail.com
                    </a>
                  </div>
                </div>

                {/* Practice Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-sand-warm/60 border border-teal-primary/10 hover:border-teal-primary/25 transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-tint text-teal-deep flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-semibold text-muted block">
                      {t('contactPage.locationTitle')}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-teal-deep block">
                      {t('contactPage.locationVal')}
                    </span>
                    <p className="text-[11px] text-muted mt-0.5">
                      {t('contactPage.locationNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-teal-primary/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-3">
                  {t('footer.socialTitle')}
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href="https://instagram.com/thefruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-sand-warm text-ink border border-teal-primary/15 hover:bg-teal-tint hover:text-teal-deep hover:border-teal-primary transition-all duration-200"
                    title="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>

                  <a
                    href="https://linkedin.com/in/simran-mistry"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-sand-warm text-ink border border-teal-primary/15 hover:bg-teal-tint hover:text-teal-deep hover:border-teal-primary transition-all duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  <a
                    href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20with%20Fruitful%20Mind."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-[#25D366] border border-emerald-300/60 hover:bg-[#25D366] hover:text-white transition-all duration-200"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>

                  <a
                    href="https://youtube.com/@thefruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-sand-warm text-ink border border-teal-primary/15 hover:bg-teal-tint hover:text-teal-deep hover:border-teal-primary transition-all duration-200"
                    title="YouTube"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>

                  <a
                    href="https://twitter.com/fruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-sand-warm text-ink border border-teal-primary/15 hover:bg-teal-tint hover:text-teal-deep hover:border-teal-primary transition-all duration-200"
                    title="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Confidentiality Guarantee */}
              <div className="rounded-xl bg-teal-tint/40 p-4 border border-teal-primary/15 flex items-start gap-3">
                <Lock className="h-5 w-5 text-teal-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-ink/80 leading-relaxed">
                  <strong className="text-teal-deep">{t('contactPage.privacyGuaranteeTitle')} </strong>
                  {t('contactPage.privacyGuaranteeDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CONSULTATION INTAKE FORM                    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-11 rounded-2xl bg-white border border-teal-primary/15 shadow-sm">
              <div className="mb-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-primary block mb-1">
                  Confidential Form
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-teal-deep mb-2">
                  {t('contactPage.formTitle')}
                </h2>
                <p className="text-xs sm:text-sm text-muted">
                  {t('contactPage.formSubtitle')}
                </p>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-tint text-teal-deep shadow-sm">
                    <CheckCircle2 className="h-10 w-10 text-teal-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-teal-deep">
                    {t('contactPage.successTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                    {t('contactPage.successDesc')}
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20have%20just%20submitted%20the%20contact%20form%20on%20your%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold py-3 px-6 text-xs transition-colors shadow-sm"
                    >
                      <WhatsAppIcon className="h-4 w-4 fill-white text-white" />
                      <span>Follow Up on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="rounded-full bg-sand-warm text-ink font-semibold py-3 px-6 text-xs hover:bg-sand-warm/80 transition-colors border border-teal-primary/20"
                    >
                      {t('contactPage.sendAnother')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="rounded-xl bg-red-50 p-4 text-xs text-red-800 flex items-center gap-2 border border-red-200">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-ink mb-1.5">
                        {t('contactPage.nameLabel')} <span className="text-teal-primary">*</span>
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
                        className="w-full rounded-xl border border-teal-primary/20 bg-sand-warm/40 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-teal-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-ink mb-1.5">
                        {t('contactPage.phoneLabel')} <span className="text-teal-primary">*</span>
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
                        className="w-full rounded-xl border border-teal-primary/20 bg-sand-warm/40 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-teal-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-ink mb-1.5">
                        {t('contactPage.emailLabel')} <span className="text-teal-primary">*</span>
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
                        className="w-full rounded-xl border border-teal-primary/20 bg-sand-warm/40 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-teal-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-ink mb-1.5">
                        {t('contactPage.serviceLabel')}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-teal-primary/20 bg-sand-warm/40 px-4 py-3 text-sm text-ink focus:border-teal-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all cursor-pointer"
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
                    <label htmlFor="contact-message" className="block text-xs font-bold text-ink mb-1.5">
                      {t('contactPage.messageLabel')} <span className="text-teal-primary">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contactPage.messagePlaceholder')}
                      className="w-full rounded-xl border border-teal-primary/20 bg-sand-warm/40 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-teal-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-primary/20 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full rounded-xl bg-yellow-accent hover:bg-amber-400 text-ink font-bold py-4 px-6 text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
                    >
                      <Send className="h-4 w-4 text-teal-deep" />
                      <span>{status === 'loading' ? t('contactPage.submitting') : t('contactPage.submitBtn')}</span>
                    </button>
                    <p className="mt-3 text-center text-[11px] text-muted">
                      {t('contactPage.noSpamNote')}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* EMBEDDED CLINIC MAP OF KOTHRUD, PUNE                      */}
        {/* ========================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-teal-tint text-teal-deep">
              <MapPin className="h-3.5 w-3.5 text-teal-primary" />
              <span>{t('contactPage.mapBadge')}</span>
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-teal-deep">
              {t('contactPage.mapTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              {t('contactPage.mapSubtitle')}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-teal-primary/20 aspect-[16/9] sm:aspect-[21/9] w-full relative bg-sand-warm">
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
        <div className="rounded-2xl border border-teal-primary/20 bg-white p-7 sm:p-10 text-xs sm:text-sm text-ink space-y-4 shadow-sm">
          <div className="flex items-center gap-2.5 font-heading text-base sm:text-lg font-bold text-teal-deep">
            <AlertCircle className="h-5 w-5 text-teal-primary" />
            <span>{t('contactPage.emergencyTitle')}</span>
          </div>
          <p className="leading-relaxed text-muted">
            {t('contactPage.emergencyNotice')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-semibold">
            <div className="rounded-xl bg-sand-warm/60 p-4 border border-teal-primary/10">
              <span className="block text-xs text-teal-deep font-bold">Tele-MANAS (Govt of India):</span>
              <a href="tel:14416" className="text-base font-bold text-teal-deep hover:text-teal-primary hover:underline mt-1 block">
                14416 / 1800-891-4416
              </a>
            </div>
            <div className="rounded-xl bg-sand-warm/60 p-4 border border-teal-primary/10">
              <span className="block text-xs text-teal-deep font-bold">KIRAN Mental Health:</span>
              <a href="tel:18005990019" className="text-base font-bold text-teal-deep hover:text-teal-primary hover:underline mt-1 block">
                1800-599-0019
              </a>
            </div>
            <div className="rounded-xl bg-sand-warm/60 p-4 border border-teal-primary/10">
              <span className="block text-xs text-teal-deep font-bold">National Emergency Services:</span>
              <a href="tel:112" className="text-base font-bold text-teal-deep hover:text-teal-primary hover:underline mt-1 block">
                112
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
