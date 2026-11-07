import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageCircle, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';
import { useLanguage } from '../../context/LanguageContext';

export default function BookingModal({ isOpen, onClose, preselectedService = '' }) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Emotional Wellbeing Counselling',
    mode: 'Online (Video)',
    preferredDay: 'Weekdays',
    preferredTime: 'Evening (5 PM - 8 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hello Simran! I would like to book a session with Fruitful Mind.\n\n` +
      `• Name: ${formData.name}\n` +
      `• Service: ${formData.service}\n` +
      `• Mode: ${formData.mode}\n` +
      `• Preferred Time: ${formData.preferredDay}, ${formData.preferredTime}\n` +
      `• Phone/Email: ${formData.phone} / ${formData.email}\n` +
      (formData.message ? `• Note: ${formData.message}` : '')
    );

    // Open WhatsApp after short delay
    setTimeout(() => {
      window.open(`https://wa.me/919769512475?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-plum-950/60 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-xl my-6 z-10"
          >
            <LiquidGlass
              variant="card"
              tint="peach"
              interactive={false}
              className="border-white/80 dark:border-white/15 bg-white/95 dark:bg-brand-canvas-darkCard/95 p-6 sm:p-8 rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking modal"
                className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full p-2 text-brand-plum-500 hover:bg-black/5 hover:text-brand-plum-900 dark:text-brand-plum-300 dark:hover:bg-white/10 dark:hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-sage-100 text-brand-sage-600 dark:bg-brand-sage-900/40 dark:text-brand-sage-300">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-brand-plum-900 dark:text-white">
                    {t('bookingModal.successTitle')}
                  </h3>
                  <p className="mt-2 text-sm text-brand-plum-700 dark:text-brand-plum-200">
                    {t('bookingModal.successDesc')}
                  </p>
                  <p className="mt-4 text-xs text-brand-plum-500 dark:text-brand-plum-300">
                    {t('bookingModal.manualNote')}{' '}
                    <a
                      href="https://wa.me/919769512475"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline text-brand-peach-600 dark:text-brand-peach-300"
                    >
                      +91 9769512475
                    </a>.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="rounded-full bg-brand-plum-700 text-white font-semibold py-2.5 px-6 text-xs shadow-md"
                    >
                      {t('bookingModal.close')}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6 space-y-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-peach-600 dark:text-brand-peach-300">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{t('nav.bookSession')}</span>
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
                      {t('bookingModal.title')}
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200">
                      {t('bookingModal.subtitle')}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="modal-name" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
                          {t('bookingModal.nameLabel')}
                        </label>
                        <input
                          id="modal-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('bookingModal.namePlaceholder')}
                          className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-2.5 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-phone" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
                          {t('bookingModal.phoneLabel')}
                        </label>
                        <input
                          id="modal-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('bookingModal.phonePlaceholder')}
                          className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-2.5 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="modal-email" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
                          {t('bookingModal.emailLabel')}
                        </label>
                        <input
                          id="modal-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('bookingModal.emailPlaceholder')}
                          className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-2.5 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-service" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
                          {t('bookingModal.serviceLabel')}
                        </label>
                        <select
                          id="modal-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-2.5 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                        >
                          <option value="Emotional Wellbeing Counselling">{t('servicesPage.service1.name')}</option>
                          <option value="Career Counselling">{t('servicesPage.service2.name')}</option>
                          <option value="Psychology Tuition">{t('servicesPage.service3.name')}</option>
                          <option value="Emotional Wellbeing Course">{t('coursePage.title')}</option>
                          <option value="Free 15-Min Discovery Call">{t('common.freeDiscovery')}</option>
                        </select>
                      </div>
                    </div>

                    {/* Mode Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1.5">
                        {t('bookingModal.modeLabel')}
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, mode: 'Online (Video)' }))}
                          className={`rounded-2xl border py-2.5 px-4 text-xs font-bold text-center transition-all ${
                            formData.mode.includes('Online')
                              ? 'border-brand-peach-500 bg-brand-peach-100/70 text-brand-plum-900 dark:border-brand-peach-400 dark:bg-brand-peach-950/40 dark:text-brand-peach-200'
                              : 'border-brand-plum-200/70 bg-white/70 text-brand-plum-700 dark:border-white/10 dark:bg-white/5 dark:text-brand-plum-200'
                          }`}
                        >
                          {t('bookingModal.modeOnline')}
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, mode: 'In-Person (Kothrud, Pune)' }))}
                          className={`rounded-2xl border py-2.5 px-4 text-xs font-bold text-center transition-all ${
                            formData.mode.includes('In-Person')
                              ? 'border-brand-peach-500 bg-brand-peach-100/70 text-brand-plum-900 dark:border-brand-peach-400 dark:bg-brand-peach-950/40 dark:text-brand-peach-200'
                              : 'border-brand-plum-200/70 bg-white/70 text-brand-plum-700 dark:border-white/10 dark:bg-white/5 dark:text-brand-plum-200'
                          }`}
                        >
                          {t('bookingModal.modeInPerson')}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="modal-day" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
                          {t('bookingModal.dayLabel')}
                        </label>
                        <select
                          id="modal-day"
                          name="preferredDay"
                          value={formData.preferredDay}
                          onChange={handleChange}
                          className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-2.5 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                        >
                          <option value="Weekdays">{t('bookingModal.dayWeekdays')}</option>
                          <option value="Weekends">{t('bookingModal.dayWeekends')}</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="modal-time" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
                          {t('bookingModal.timeLabel')}
                        </label>
                        <select
                          id="modal-time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-2.5 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white"
                        >
                          <option value="Morning">{t('bookingModal.timeMorning')}</option>
                          <option value="Afternoon">{t('bookingModal.timeAfternoon')}</option>
                          <option value="Evening">{t('bookingModal.timeEvening')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-message" className="block text-xs font-semibold text-brand-plum-800 dark:text-brand-plum-200 mb-1">
                        {t('bookingModal.noteLabel')}
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('bookingModal.notePlaceholder')}
                        className="w-full rounded-2xl border border-brand-plum-200/80 bg-white/90 px-4 py-2.5 text-sm text-brand-plum-900 shadow-sm focus:border-brand-peach-500 focus:outline-none focus:ring-2 focus:ring-brand-peach-200 dark:border-white/15 dark:bg-brand-canvas-dark dark:text-white resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-6 text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>{t('bookingModal.submitBtn')}</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </LiquidGlass>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
