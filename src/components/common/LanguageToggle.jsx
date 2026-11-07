import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function LanguageToggle({ className = '' }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', short: 'EN', native: 'English' },
    { code: 'mr', label: 'Marathi', short: 'मराठी', native: 'मराठी' },
    { code: 'hi', label: 'Hindi', short: 'हिंदी', native: 'हिंदी' },
  ];

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const activeLang = languages.find((l) => l.code === language) || languages[0];

  const handleSelectLanguage = (code, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Change language / भाषा बदला"
        className="inline-flex h-8 sm:h-9 items-center gap-1.5 rounded-full border border-white/60 bg-white/70 px-2.5 sm:px-3 text-[11px] sm:text-xs font-bold text-brand-plum-900 shadow-sm backdrop-blur-xl transition-all hover:bg-white hover:border-brand-peach-300 focus:outline-none focus:ring-2 focus:ring-brand-peach-400 dark:border-white/15 dark:bg-white/10 dark:text-brand-plum-100 dark:hover:bg-white/20"
      >
        <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-plum-700 dark:text-brand-peach-300" />
        <span>{activeLang.short}</span>
        <ChevronDown
          className={`h-3 w-3 text-brand-plum-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 w-36 origin-top-right rounded-2xl border border-white/80 bg-white/95 p-1.5 shadow-2xl backdrop-blur-2xl focus:outline-none dark:border-white/15 dark:bg-brand-canvas-darkCard/95 z-[100]"
          >
            <div className="py-0.5 space-y-1" role="menu">
              {languages.map((item) => {
                const isSelected = item.code === language;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={(e) => handleSelectLanguage(item.code, e)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-brand-plum-700 text-white font-bold shadow-sm dark:bg-brand-peach-400 dark:text-brand-plum-950'
                        : 'text-brand-plum-900 hover:bg-black/5 dark:text-brand-plum-100 dark:hover:bg-white/10'
                    }`}
                    role="menuitem"
                  >
                    <span>{item.native}</span>
                    {isSelected && <Check className="h-3.5 w-3.5 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
