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
        className="inline-flex h-8 sm:h-9 items-center gap-1.5 rounded-full border border-teal-primary/20 bg-white/90 px-2.5 sm:px-3 text-xs font-semibold text-ink shadow-xs backdrop-blur-md transition-all hover:bg-white hover:border-teal-primary/40 focus:outline-none focus:ring-2 focus:ring-teal-primary"
      >
        <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
        <span>{activeLang.short}</span>
        <ChevronDown
          className={`h-3 w-3 text-ink-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-40 rounded-xl bg-white border border-primary/15 shadow-soft-lg p-1.5 z-50 focus:outline-none"
          >
            <div className="py-1">
              {languages.map((lang) => {
                const isCurrent = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    onClick={(e) => handleSelectLanguage(lang.code, e)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                      isCurrent
                        ? 'bg-primary-tint text-primary'
                        : 'text-ink hover:bg-sand-warm:bg-white/5'
                    }`}
                  >
                    <span>{lang.native}</span>
                    {isCurrent && <Check className="h-3.5 w-3.5 text-primary" />}
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
