import React, { createContext, useContext, useState, useEffect } from 'react';
import translationsData from '../content/translations.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('fruitful-lang') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('fruitful-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  /**
   * Helper function to retrieve nested string
   * e.g. t('hero.headline')
   */
  const t = (path) => {
    const keys = path.split('.');
    let current = translationsData[language];

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English
        let fallback = translationsData['en'];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
