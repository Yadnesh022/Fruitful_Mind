import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageCircle, Clock, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
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
      `Hello Simran! I would like to schedule a consultation with Fruitful Mind.\n\n` +
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
            className="fixed inset-0 bg-[#0B1517]/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-xl my-6 z-10"
          >
            <div
              className="border border-primary/20 bg-white p-6 sm:p-8 rounded-2xl shadow-soft-lg max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking modal"
                className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full p-2 text-ink-muted hover:bg-sand-warm hover:text-ink:bg-white/10:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-tint text-primary shadow-sm">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
                    Request Initiated
                  </h3>
                  <p className="text-sm text-ink-muted max-w-sm mx-auto">
                    We are connecting you with Simran Mistry on WhatsApp to confirm your preferred time slot.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-ink text-sm font-semibold transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-tint px-3 py-1 text-xs font-semibold text-primary">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      <span>Confidential Consultation</span>
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-ink">
                      Connect with Simran Mistry
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted">
                      Fill out your details to schedule an online video session or in-person consultation in Kothrud, Pune.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl border border-primary/20 bg-sand-warm/60 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-primary/20 bg-sand-warm/60 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-primary/20 bg-sand-warm/60 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          Service
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-primary/20 bg-sand-warm/60 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="Emotional Wellbeing Counselling">Emotional Wellbeing Counselling</option>
                          <option value="Career Counselling & Guidance">Career Counselling & Guidance</option>
                          <option value="Psychology Tuition (Grade 11/12/Degree)">Psychology Tuition (Grade 11/12/Degree)</option>
                          <option value="Free 15-Min Discovery Call">Free 15-Min Discovery Call</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink mb-1">
                          Session Mode
                        </label>
                        <select
                          name="mode"
                          value={formData.mode}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl border border-primary/20 bg-sand-warm/60 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="Online (Video - Google Meet / Zoom)">Online (Video - Google Meet / Zoom)</option>
                          <option value="In-Person (Kothrud, Pune)">In-Person (Kothrud, Pune)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink mb-1">
                        Brief Note / Reason for Connecting (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What is primarily on your mind? (100% confidential)"
                        className="w-full px-4 py-2.5 rounded-xl border border-primary/20 bg-sand-warm/60 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-accent hover:bg-accent-hover text-ink font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-98"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Continue to WhatsApp Confirmation</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-ink-muted pt-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                      <span>Strictly confidential • Ethical psychological care</span>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
