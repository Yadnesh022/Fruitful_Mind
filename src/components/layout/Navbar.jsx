import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, MapPin } from 'lucide-react';
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

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
          ? 'bg-sand-warm/95 backdrop-blur-md shadow-sm border-b border-teal-primary/10 py-2.5 sm:py-3.5'
          : 'bg-sand-warm/90 backdrop-blur-sm border-b border-teal-primary/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Brand Identity with True Aspect-Ratio Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary rounded-xl flex-shrink-0"
            aria-label="Fruitful Mind Home"
          >
            <div className="relative h-9 sm:h-11 w-auto flex items-center justify-center">
              <img
                src={logoImg}
                alt="Fruitful Mind Logo"
                className="h-full w-auto max-w-[100px] sm:max-w-[125px] object-contain transition-transform duration-200 group-hover:scale-102"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-xl tracking-tight text-teal-deep leading-tight">
                Fruitful Mind
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-muted tracking-wide leading-none hidden xs:block">
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
                  className={`relative px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-medium transition-colors duration-150 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary ${
                    isActive
                      ? 'text-teal-primary font-semibold'
                      : 'text-muted hover:text-teal-deep'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveLine"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-teal-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Controls & Sunshine Yellow CTA & High-Visibility Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageToggle />

            {/* Primary CTA (Desktop): Sunshine Yellow with Dark Ink text */}
            <button
              onClick={() => onOpenBooking && onOpenBooking('Navbar Booking')}
              className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-yellow-accent hover:bg-amber-400 text-ink shadow-xs transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-primary flex-shrink-0"
            >
              <Calendar className="h-4 w-4 text-ink" />
              <span>{t('nav.bookSession') || 'Book a Session'}</span>
            </button>

            {/* High-Contrast, Explicit 3-Lines Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-teal-primary active:scale-95 flex-shrink-0 cursor-pointer ${
                mobileMenuOpen
                  ? 'bg-teal-primary text-white border-teal-primary shadow-sm'
                  : 'bg-white text-teal-deep border-teal-primary/30 shadow-xs hover:bg-teal-tint hover:border-teal-primary/50'
              }`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {/* Pure CSS 3-Bar Hamburger with Smooth Morphing to 'X' */}
              <div className="w-5 h-4 flex flex-col justify-between items-center pointer-events-none">
                <span
                  className={`h-[2.5px] w-5 rounded-full transition-all duration-300 transform origin-left ${
                    mobileMenuOpen ? 'rotate-45 translate-x-0.5 bg-white' : 'bg-teal-deep'
                  }`}
                />
                <span
                  className={`h-[2.5px] w-5 rounded-full transition-all duration-200 ${
                    mobileMenuOpen ? 'opacity-0 bg-white' : 'bg-teal-deep'
                  }`}
                />
                <span
                  className={`h-[2.5px] w-5 rounded-full transition-all duration-300 transform origin-left ${
                    mobileMenuOpen ? '-rotate-45 translate-x-0.5 bg-white' : 'bg-teal-deep'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer with Full Backdrop and Safe Touch Area */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimmer to close on tap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-black/25 backdrop-blur-[2px] z-40"
              aria-hidden="true"
            />

            {/* Slide Down Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="lg:hidden relative z-50 border-t border-teal-primary/15 bg-sand-warm shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-4">
                <nav className="grid grid-cols-1 gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-teal-tint text-teal-deep border border-teal-primary/20 shadow-xs'
                            : 'text-ink hover:bg-white active:bg-white/80'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="h-4 w-4 text-teal-primary opacity-60" />
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-3 border-t border-teal-primary/15 space-y-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenBooking) onOpenBooking('Mobile Drawer');
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold bg-yellow-accent hover:bg-amber-400 text-ink shadow-xs transition-all active:scale-98"
                  >
                    <Calendar className="h-4 w-4 text-ink" />
                    <span>{t('nav.bookSession') || 'Book a Session'}</span>
                  </button>

                  <a
                    href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20sessions%20with%20Fruitful%20Mind."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#25D366]/30 bg-emerald-50 hover:bg-emerald-100/70 text-emerald-800 text-sm font-semibold transition-all active:scale-98"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    <span>WhatsApp Directly (+91 9769512475)</span>
                  </a>
                </div>

                <div className="pt-1 text-center text-xs text-muted flex items-center justify-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-teal-primary" />
                  <span>Kothrud, Pune & Online Worldwide</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
