import React from 'react';
import { Calendar } from 'lucide-react';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileStickyCTA({ onOpenBooking }) {
  const { t } = useLanguage();
  const waUrl = 'https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20counselling%20sessions%20with%20Fruitful%20Mind.';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden p-3 bg-gradient-to-t from-sand-warm via-sand-warm/95 to-transparent">
      <div className="p-2 rounded-xl border border-teal-primary/15 bg-white/95 backdrop-blur-md shadow-md flex items-center gap-2">
        <button
          onClick={() => onOpenBooking && onOpenBooking('Mobile Quick Booking')}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-yellow-accent hover:bg-amber-400 py-2.5 text-xs font-bold text-ink shadow-sm active:scale-95 transition-all"
        >
          <Calendar className="h-4 w-4 text-ink" />
          <span>{t('nav.bookSession') || 'Book a Session'}</span>
        </button>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] py-2.5 px-4 text-xs font-semibold text-white shadow-sm active:scale-95 transition-all"
        >
          <WhatsAppIcon className="h-4 w-4 text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
