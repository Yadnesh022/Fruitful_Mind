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
  Facebook
} from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

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
    <div className="relative pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <SEO
        title="Contact Simran Mistry | Psychologist Kothrud Pune | Fruitful Mind"
        description="Connect with Simran Mistry, Psychologist in Kothrud, Pune. Book in-person or online counselling for anxiety, overthinking, career clarity, and psychology tuition."
        canonical="https://fruitfulmind.in/contact"
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-96 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-peach-200/60 px-4 py-1.5 text-xs sm:text-sm font-bold text-brand-plum-900 dark:bg-brand-plum-900/60 dark:text-brand-peach-200">
            <MessageCircle className="h-4 w-4 text-brand-peach-600 dark:text-brand-peach-300" />
            <span>{t('contactPage.badge')}</span>
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-plum-950 dark:text-white leading-tight">
            {t('contactPage.title')}
          </h1>

          <p className="text-base sm:text-lg text-brand-plum-800 dark:text-brand-plum-200 leading-relaxed">
            {t('contactPage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <LiquidGlass
              variant="card"
              tint="default"
              interactive={false}
              className="p-8 rounded-3xl border-white/80 dark:border-white/10 shadow-xl space-y-6"
            >
              <h2 className="font-heading text-2xl font-bold text-brand-plum-950 dark:text-white">
                {t('contactPage.infoTitle')}
              </h2>

              <div className="space-y-4">
                {/* Phone / Call */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-peach-100 text-brand-peach-700 dark:bg-brand-peach-900/40 dark:text-brand-peach-300 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-plum-500 dark:text-brand-plum-400 block">
                      {t('contactPage.phoneTitle')}
                    </span>
                    <a
                      href="tel:+919769512475"
                      className="font-bold text-sm sm:text-base text-brand-plum-900 dark:text-white hover:text-brand-peach-600 transition-colors"
                    >
                      +91 9769512475
                    </a>
                    <p className="text-[11px] text-brand-plum-500 dark:text-brand-plum-400">
                      {t('contactPage.phoneHours')}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 flex-shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-plum-500 dark:text-brand-plum-400 block">
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
                    <p className="text-[11px] text-brand-plum-500 dark:text-brand-plum-400">
                      {t('contactPage.whatsappNote')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-plum-100 text-brand-plum-700 dark:bg-brand-plum-900/40 dark:text-brand-peach-300 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-plum-500 dark:text-brand-plum-400 block">
                      {t('contactPage.emailTitle')}
                    </span>
                    <a
                      href="mailto:simran.thefruitfulmind@gmail.com"
                      className="font-bold text-sm sm:text-base text-brand-plum-900 dark:text-white hover:text-brand-peach-600 transition-colors break-all"
                    >
                      simran.thefruitfulmind@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-sage-100 text-brand-sage-700 dark:bg-brand-sage-900/40 dark:text-brand-sage-300 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-plum-500 dark:text-brand-plum-400 block">
                      {t('contactPage.locationTitle')}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-brand-plum-900 dark:text-white block">
                      {t('contactPage.locationVal')}
                    </span>
                    <p className="text-[11px] text-brand-plum-600 dark:text-brand-plum-300">
                      {t('contactPage.locationNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-brand-plum-100 dark:border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-plum-600 dark:text-brand-peach-300 block mb-3">
                  {t('footer.socialTitle')}
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href="https://instagram.com/thefruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                    title="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  <a
                    href="https://linkedin.com/in/simran-mistry"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-[#0077b5] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  <a
                    href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20connect%20with%20Fruitful%20Mind."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-emerald-600 hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                    title="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>

                  <a
                    href="https://youtube.com/@thefruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-[#ff0000] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                    title="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>

                  <a
                    href="https://twitter.com/fruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-slate-900 hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                    title="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>

                  <a
                    href="https://facebook.com/thefruitfulmind"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-brand-plum-700 shadow-sm border border-white/60 hover:bg-[#1877f2] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 dark:bg-white/10 dark:text-brand-plum-200 dark:border-white/10 dark:hover:text-white"
                    title="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Confidentiality Reminder */}
              <div className="rounded-2xl bg-white/60 dark:bg-white/5 p-4 border border-brand-plum-100 dark:border-white/5 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-sage-600 dark:text-brand-sage-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                  <strong>{t('contactPage.privacyGuaranteeTitle')} </strong>
                  {t('contactPage.privacyGuaranteeDesc')}
                </p>
              </div>
            </LiquidGlass>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <LiquidGlass
              variant="card"
              tint="peach"
              interactive={false}
              className="p-8 sm:p-10 rounded-3xl border-white/80 dark:border-white/10 shadow-2xl"
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white mb-2">
                {t('contactPage.formTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 mb-6">
                {t('contactPage.formSubtitle')}
              </p>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-sage-100 text-brand-sage-600 dark:bg-brand-sage-900/40 dark:text-brand-sage-300">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-plum-900 dark:text-white">
                    {t('contactPage.successTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 max-w-md mx-auto">
                    {t('contactPage.successDesc')}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="rounded-full bg-brand-plum-700 text-white font-semibold py-2.5 px-6 text-xs active:scale-95 transition-transform"
                    >
                      {t('contactPage.sendAnother')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="rounded-2xl bg-red-100/80 p-4 text-xs text-red-800 dark:bg-red-900/30 dark:text-red-200 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
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
                        className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-3 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
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
                        className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-3 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
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
                        className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-3 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
                        {t('contactPage.serviceLabel')}
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-3 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
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
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
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
                      className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-3 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-4 px-6 text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="h-4 w-4" />
                      <span>{status === 'loading' ? t('contactPage.submitting') : t('contactPage.submitBtn')}</span>
                    </button>
                    <p className="mt-2 text-center text-[11px] text-brand-plum-500 dark:text-brand-plum-400">
                      {t('contactPage.noSpamNote')}
                    </p>
                  </div>
                </form>
              )}
            </LiquidGlass>
          </div>
        </div>

        {/* Embedded Google Map of Kothrud, Pune */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300">
              {t('contactPage.mapBadge')}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
              {t('contactPage.mapTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
              {t('contactPage.mapSubtitle')}
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-white/80 dark:border-white/10 aspect-[16/9] sm:aspect-[21/9] w-full relative">
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

        {/* Emergency Helplines Notice (Critical Ethics Guardrail) */}
        <div className="rounded-3xl border border-brand-peach-300/80 bg-brand-peach-100/50 p-6 sm:p-8 text-xs sm:text-sm text-brand-plum-900 dark:border-white/15 dark:bg-white/5 dark:text-brand-plum-100 space-y-3">
          <div className="flex items-center gap-2 font-heading text-base font-bold text-brand-plum-950 dark:text-white">
            <AlertCircle className="h-5 w-5 text-brand-peach-600 dark:text-brand-peach-400" />
            <span>{t('contactPage.emergencyTitle')}</span>
          </div>
          <p className="leading-relaxed">
            {t('contactPage.emergencyNotice')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-semibold">
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm dark:bg-brand-canvas-darkCard/80">
              <span className="block text-brand-peach-600 dark:text-brand-peach-300">Tele-MANAS (Govt of India):</span>
              <a href="tel:14416" className="text-base font-black text-brand-plum-900 dark:text-white hover:underline">
                14416 / 1800-891-4416
              </a>
            </div>
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm dark:bg-brand-canvas-darkCard/80">
              <span className="block text-brand-peach-600 dark:text-brand-peach-300">KIRAN Mental Health:</span>
              <a href="tel:18005990019" className="text-base font-black text-brand-plum-900 dark:text-white hover:underline">
                1800-599-0019
              </a>
            </div>
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm dark:bg-brand-canvas-darkCard/80">
              <span className="block text-brand-peach-600 dark:text-brand-peach-300">National Emergency Services:</span>
              <a href="tel:112" className="text-base font-black text-brand-plum-900 dark:text-white hover:underline">
                112
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
