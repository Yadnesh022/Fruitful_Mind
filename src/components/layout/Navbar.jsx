import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, MessageCircle, ArrowRight, Phone, MapPin } from 'lucide-react';
import LanguageToggle from '../common/LanguageToggle';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { useLanguage } from '../../context/LanguageContext';
import logoImg from '../../assets/logo.png';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/about', label: t('nav.about') || 'About' },
    { to: '/services', label: t('nav.services') || 'Services' },
    { to: '/blogs', label: t('nav.blogs') || 'Articles' },
    { to: '/wellbeing-guide', label: t('nav.wellbeingGuide') || 'Guide' },
    { to: '/psychology-concepts', label: t('nav.concepts') || 'Concepts' },
    { to: '/course', label: t('nav.course') || 'Course' },
    { to: '/contact', label: t('nav.contact') || 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF8F1]/95 backdrop-blur-md shadow-sm border-b border-primary/10 py-3 sm:py-3.5'
          : 'bg-[#FBF8F1]/85 backdrop-blur-sm border-b border-primary/5 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand Identity with True Aspect-Ratio Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl flex-shrink-0"
            aria-label="Fruitful Mind Home"
          >
            <div className="relative h-10 sm:h-11 w-auto flex items-center justify-center">
              <img
                src={logoImg}
                alt="Fruitful Mind Logo"
                className="h-full w-auto max-w-[120px] object-contain transition-transform duration-200 group-hover:scale-102"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-ink leading-tight">
                Fruitful Mind
              </span>
              <span className="text-[11px] font-medium text-ink-muted tracking-wide leading-none hidden sm:block">
                Simran Mistry • Psychologist
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Editorial Line Indicator */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-150 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-ink-muted hover:text-ink:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Controls & Sunshine Yellow CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />

            {/* Primary CTA: Sunshine Yellow with Dark Ink text */}
            <button
              onClick={() => onOpenBooking && onOpenBooking('Navbar Booking')}
              className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-accent hover:bg-accent-hover text-ink shadow-sm hover:shadow-soft transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary flex-shrink-0"
            >
              <Calendar className="h-4 w-4 text-ink" />
              <span>{t('nav.bookSession') || 'Book a Session'}</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-ink hover:bg-black/5:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-primary/10 bg-[#FBF8F1] shadow-soft-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-4">
              <nav className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-tint text-primary font-semibold'
                          : 'text-ink hover:bg-sand-white:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-4 w-4 opacity-40" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2 border-t border-primary/10 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenBooking) onOpenBooking('Mobile Drawer');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold bg-accent hover:bg-accent-hover text-ink shadow-sm transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t('nav.bookSession') || 'Book a Session'}</span>
                </button>

                <a
                  href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20sessions%20with%20Fruitful%20Mind."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#25D366]/30 bg-emerald-50 text-emerald-800 text-sm font-semibold transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Directly (+91 9769512475)</span>
                </a>
              </div>

              <div className="pt-1 text-center text-xs text-ink-muted flex items-center justify-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span>Kothrud, Pune & Online Worldwide</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
