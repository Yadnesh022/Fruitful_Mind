import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileStickyCTA({ onOpenBooking }) {
  const { t } = useLanguage();
  const waUrl = 'https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20counselling%20sessions%20with%20Fruitful%20Mind.';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden p-3 bg-gradient-to-t from-brand-canvas-light via-brand-canvas-light/95 to-transparent dark:from-brand-canvas-dark dark:via-brand-canvas-dark/95">
      <LiquidGlass
        variant="card"
        tint="default"
        interactive={false}
        className="p-2.5 rounded-2xl border-white/60 dark:border-white/10 shadow-2xl bg-white/90 dark:bg-brand-canvas-darkCard/90 flex items-center gap-2"
      >
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-papaya-deep via-papaya to-mango py-2.5 text-xs font-bold text-white shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="h-4 w-4" />
          <span>{t('nav.bookSession')}</span>
        </button>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </LiquidGlass>
    </div>
  );
}
