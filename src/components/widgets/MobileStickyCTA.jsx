import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileStickyCTA({ onOpenBooking }) {
  const { t } = useLanguage();
  const waUrl = 'https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20counselling%20sessions%20with%20Fruitful%20Mind.';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden p-3 bg-gradient-to-t from-sand-warm via-sand-warm/95 to-transparent">
      <div className="p-2 rounded-xl border border-primary/15 bg-white/95 backdrop-blur-md shadow-soft flex items-center gap-2">
        <button
          onClick={() => onOpenBooking && onOpenBooking('Mobile Quick Booking')}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-accent hover:bg-accent-hover py-2.5 text-xs font-semibold text-ink shadow-sm active:scale-95 transition-transform"
        >
          <Calendar className="h-4 w-4 text-ink" />
          <span>{t('nav.bookSession') || 'Book a Session'}</span>
        </button>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2.5 px-4 text-xs font-semibold text-white shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
