import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, MapPin, X, Clock, ShieldCheck } from 'lucide-react';
import LanguageToggle from '../common/LanguageToggle';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { useLanguage } from '../../context/LanguageContext';
import logoImg from '../../assets/logo.png';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
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

  // Lock body scroll when mobile menu is open
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
    { to: '/about', label: t('nav.about') || 'About Simran', num: '01' },
    { to: '/services', label: t('nav.services') || 'Services & Fees', num: '02' },
    { to: '/blogs', label: t('nav.blogs') || 'Articles & Insights', num: '03' },
    { to: '/wellbeing-guide', label: t('nav.wellbeingGuide') || 'Wellbeing Toolkit', num: '04' },
    { to: '/psychology-concepts', label: t('nav.concepts') || 'Concepts Simplified', num: '05' },
    { to: '/course', label: t('nav.course') || 'Emotional Course', num: '06' },
    { to: '/contact', label: t('nav.contact') || 'Contact & Clinic', num: '07' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF8F1]/95 backdrop-blur-md shadow-sm border-b border-[#12766E]/15 py-2.5 sm:py-3.5'
          : 'bg-[#FBF8F1]/90 backdrop-blur-sm border-b border-[#12766E]/10 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Brand Identity with True Aspect-Ratio Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12766E] rounded-xl flex-shrink-0"
            aria-label="Fruitful Mind Home"
          >
            <div className="relative h-9 sm:h-11 w-auto flex items-center justify-center">
              <img
                src={logoImg}
                alt="Fruitful Mind Logo"
                className="h-full w-auto max-w-[105px] sm:max-w-[130px] object-contain transition-transform duration-200 group-hover:scale-102"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-xl tracking-tight text-[#0B4F4A] leading-tight">
                Fruitful Mind
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#5B6B6E] tracking-wide leading-none hidden xs:block">
                Simran Mistry • Psychologist
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Animated Gliding Underline on Click & Hover */}
          <nav
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              const isHovered = hoveredPath === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setHoveredPath(link.to)}
                  className={`relative px-3 py-2 text-xs xl:text-sm transition-colors duration-150 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12766E] ${
                    isActive
                      ? 'text-[#12766E] font-bold'
                      : 'text-[#5B6B6E] hover:text-[#0B4F4A] font-medium'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Underline beneath the active or hovered nav item */}
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="navActiveLine"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute bottom-0 left-2 right-2 h-[3px] bg-[#12766E] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Controls & Sunshine Yellow CTA & 3-Lines Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageToggle />

            {/* Primary CTA (Sunshine Yellow with Dark Ink text) */}
            <button
              onClick={() => onOpenBooking && onOpenBooking('Navbar Booking')}
              className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#FFC845] hover:bg-[#F5B82E] text-[#1D2B2E] shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12766E] border border-amber-300 flex-shrink-0 cursor-pointer"
            >
              <Calendar className="h-4 w-4 text-[#1D2B2E]" />
              <span>{t('nav.bookSession') || 'Book a Session'}</span>
            </button>

            {/* 3-Lines Mobile Menu Button (Explicit Dark Teal Lines, 100% Visible) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white border-2 border-[#0B4F4A]/30 shadow-xs hover:border-[#0B4F4A] hover:bg-[#D9F0EC]/50 active:scale-95 transition-all flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#12766E]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#0B4F4A] stroke-[2.5]" />
              ) : (
                <div className="w-5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                  <span className="block h-[2.5px] w-5 rounded-full bg-[#0B4F4A]" />
                  <span className="block h-[2.5px] w-5 rounded-full bg-[#0B4F4A]" />
                  <span className="block h-[2.5px] w-5 rounded-full bg-[#0B4F4A]" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer with Dividing Lines & Structured Cards */}
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
              className="lg:hidden fixed inset-0 top-[58px] sm:top-[68px] bg-black/40 backdrop-blur-[2px] z-40"
              aria-hidden="true"
            />

            {/* Slide Down Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="lg:hidden relative z-50 border-t-2 border-[#12766E]/20 bg-[#FBF8F1] shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
                {/* Practice Header Strip with Line Border */}
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-[#12766E]/15 text-xs text-[#5B6B6E] shadow-2xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#0B4F4A]">
                    <ShieldCheck className="h-4 w-4 text-[#12766E]" />
                    <span>Psychologist Simran Mistry</span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#D9F0EC] text-[#0B4F4A] border border-[#12766E]/20">
                    Kothrud, Pune
                  </span>
                </div>

                {/* Structured Navigation Box with Clear Horizontal Lines */}
                <div className="rounded-2xl border border-[#12766E]/20 bg-white shadow-xs overflow-hidden divide-y divide-[#12766E]/10">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 text-sm transition-all ${
                          isActive
                            ? 'bg-[#D9F0EC]/60 text-[#0B4F4A] font-bold border-l-4 border-[#12766E]'
                            : 'text-[#1D2B2E] hover:bg-[#FBF8F1] active:bg-[#D9F0EC]/30'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono font-bold text-[#12766E]/70 w-5">
                            {link.num}
                          </span>
                          <span className={isActive ? 'font-bold text-[#0B4F4A]' : 'font-medium'}>
                            {link.label}
                          </span>
                        </div>
                        <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? 'text-[#12766E] translate-x-1' : 'text-[#5B6B6E]/40'}`} />
                      </Link>
                    );
                  })}
                </div>

                {/* Quick Action Buttons (Yellow Book a Session & Green WhatsApp) */}
                <div className="pt-2 border-t border-[#12766E]/15 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B6E] block px-1">
                    Direct Appointments
                  </span>

                  {/* Yellow Book a Session Button in Mobile */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenBooking) onOpenBooking('Mobile Drawer');
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-[#FFC845] hover:bg-[#F5B82E] text-[#1D2B2E] shadow-sm transition-all active:scale-98 border border-amber-300 cursor-pointer"
                  >
                    <Calendar className="h-4 w-4 text-[#1D2B2E]" />
                    <span>{t('nav.bookSession') || 'Book a Session'}</span>
                  </button>

                  {/* Green WhatsApp Button in Mobile */}
                  <a
                    href="https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20sessions%20with%20Fruitful%20Mind."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#25D366]/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-sm font-semibold transition-all active:scale-98 shadow-xs"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    <span>WhatsApp Directly (+91 9769512475)</span>
                  </a>
                </div>

                {/* Clinic Footer Info Strip with Divider */}
                <div className="pt-2 border-t border-[#12766E]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5B6B6E] gap-1.5 px-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#12766E] flex-shrink-0" />
                    <span>Kothrud, Pune & Online Pan-India</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#12766E] flex-shrink-0" />
                    <span>Mon - Sat: 10:00 AM - 7:30 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
