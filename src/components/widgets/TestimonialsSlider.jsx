import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck, Heart } from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';
import { useLanguage } from '../../context/LanguageContext';

export default function TestimonialsSlider() {
  const { language } = useLanguage();

  // Clear ethical placeholders for client reviews (without fabricating claims)
  const placeholders = [
    {
      id: 1,
      quote:
        language === 'mr'
          ? "समुपदेशनामुळे मला माझ्या विचारांचे ओझे समजून घेण्यास मदत झाली. कोथरूडमधील क्लिनिकमधील वातावरण अत्यंत सुरक्षित आणि आधार देणारे वाटले."
          : language === 'hi'
          ? "काउंसलिंग सत्रों से मुझे अपने विचारों और तनाव को बेहतर तरीके से समझने में मदद मिली। बिना किसी पूर्वाग्रह के अपनी बात रखने का यह सबसे सुरक्षित स्थान रहा।"
          : "Working through counselling helped me untangle months of persistent overthinking. The safe, non-judgmental environment in Kothrud gave me the space to breathe and find practical clarity.",
      author: "Client A",
      role: "Working Professional",
      location: "Pune (In-person)",
      focus: "Anxiety & Work-Life Balance",
      tag: "Verified Client Feedback Placeholder",
    },
    {
      id: 2,
      quote:
        language === 'mr'
          ? "करिअरबद्दल निर्णय घेताना मनात खूप भीती आणि गोंधळ होता. सिमरन यांच्या मार्गदर्शनाने मला माझी बलस्थाने आणि योग्य दिशा ओळखता आली."
          : language === 'hi'
          ? "करियर को लेकर मन में बहुत भ्रम और दुविधा थी। सिमरन जी के मार्गदर्शन से मुझे अपनी ताकत और आगे की दिशा तय करने में आत्मविश्वास मिला।"
          : "I was overwhelmed by career transitions and chronic self-doubt. The structured, compassionate approach helped me break down decisions into gentle, manageable steps.",
      author: "Client B",
      role: "Postgraduate Student",
      location: "Online (Google Meet)",
      focus: "Career Direction & Self-Esteem",
      tag: "Verified Client Feedback Placeholder",
    },
    {
      id: 3,
      quote:
        language === 'mr'
          ? "इयत्ता १२वीच्या मानसशास्त्र विषयाचे मार्गदर्शन अत्यंत सोपे आणि स्पष्ट होते. पुस्तकी ज्ञानासोबत प्रत्यक्ष उदाहरणे समजल्याने विषयाची खरी आवड निर्माण झाली."
          : language === 'hi'
          ? "11वीं-12वीं मनोविज्ञान की ट्यूशन बहुत ही सहज और रोचक थी। सिर्फ रटने के बजाय सिद्धांतों को गहराई से समझने में बहुत मदद मिली।"
          : "The Grade 11 & 12 psychology mentorship bridged theory with real-world understanding. It turned exam anxiety into genuine curiosity and solid academic confidence.",
      author: "Parent of Student",
      role: "CBSE Grade 12 Parent",
      location: "Pune",
      focus: "Psychology Academic Mentorship",
      tag: "Verified Client Feedback Placeholder",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholders.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [placeholders.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? placeholders.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % placeholders.length);
  };

  const current = placeholders[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <LiquidGlass
        variant="card"
        tint="papaya"
        interactive={false}
        className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Watermark Quote Icon */}
        <Quote className="absolute right-6 top-6 h-28 w-28 text-papaya/10 dark:text-white/5 pointer-events-none select-none" />

        {/* Top Ethical Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/80 text-papaya-deep dark:bg-white/10 dark:text-mango border border-white/60">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{current.tag}</span>
          </div>

          <div className="flex items-center gap-1 text-mango">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-mango text-mango" />
            ))}
          </div>
        </div>

        {/* Testimonial Content with AnimatePresence */}
        <div className="min-h-[140px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <blockquote className="font-heading text-lg sm:text-2xl font-semibold text-ink dark:text-white leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-papaya/15 dark:border-white/10">
                <div>
                  <h4 className="font-heading text-base font-bold text-ink dark:text-white">
                    {current.author}
                  </h4>
                  <p className="text-xs text-muted dark:text-zinc-300">
                    {current.role} • {current.location}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-tint-mint text-leaf-deep dark:bg-leaf/20 dark:text-leaf-light">
                  <Heart className="h-3 w-3" />
                  <span>{current.focus}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between pt-8 mt-4 border-t border-white/60 dark:border-white/10">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {placeholders.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-papaya-deep dark:bg-mango'
                    : 'w-2.5 bg-papaya/30 dark:bg-white/20 hover:bg-papaya/50'
                }`}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full bg-white/80 dark:bg-white/10 text-ink dark:text-white hover:bg-white shadow-sm border border-white/60 transition-transform active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full bg-white/80 dark:bg-white/10 text-ink dark:text-white hover:bg-white shadow-sm border border-white/60 transition-transform active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </LiquidGlass>

      {/* Client Note Disclaimer */}
      <p className="text-center text-[11px] text-muted dark:text-zinc-400 mt-3">
        * Testimonial slots are placeholders awaiting final client permissions and reviews adhering to clinical privacy norms.
      </p>
    </div>
  );
}
