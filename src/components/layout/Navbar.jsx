import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import LanguageToggle from '../common/LanguageToggle';
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
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/blogs', label: t('nav.blogs') },
    { to: '/wellbeing-guide', label: t('nav.wellbeingGuide') },
    { to: '/psychology-concepts', label: t('nav.concepts') },
    { to: '/course', label: t('nav.course') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="relative pointer-events-auto w-full max-w-6xl">
        {/* Nova Glow Halo (Ambient Aura Behind the Pill) */}
        <div
          className={`absolute -inset-[2px] rounded-full bg-gradient-to-r from-papaya/50 via-mango/40 to-leaf/40 blur-md transition-opacity duration-500 pointer-events-none ${
            scrolled ? 'opacity-85' : 'opacity-60'
          }`}
          aria-hidden="true"
        />

        {/* Floating Nova Glass Pill Container */}
        <div
          className={`relative flex items-center justify-between h-14 sm:h-16 px-3 sm:px-5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/85 dark:bg-[#1F1A2B]/90 shadow-[0_12px_40px_-10px_rgba(35,31,46,0.18)] dark:shadow-[0_16px_50px_-10px_rgba(0,0,0,0.7)] border border-white/80 dark:border-white/15'
              : 'bg-white/75 dark:bg-[#1F1A2B]/80 shadow-[0_10px_35px_-10px_rgba(35,31,46,0.12)] dark:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.55)] border border-white/70 dark:border-white/10'
          } backdrop-blur-2xl`}
        >
          {/* Top Specular Edge Highlight */}
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 dark:via-white/35 to-transparent z-20"
            aria-hidden="true"
          />

          {/* Left: Brand Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-peach-400 rounded-full flex-shrink-0"
            aria-label="Fruitful Mind Home"
          >
            <div className="relative flex items-center justify-center">
              {/* Subtle radiant glow behind logo icon */}
              <div className="absolute -inset-1 rounded-full bg-brand-peach-300/40 blur-sm group-hover:bg-brand-peach-400/60 transition-colors" />
              <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border border-white/80 shadow-sm bg-white/90 p-0.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={logoImg}
                  alt="Fruitful Mind"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-brand-plum-950 dark:text-white leading-tight">
                Fruitful Mind
              </span>
              <span className="text-[10px] font-semibold text-brand-plum-600 dark:text-brand-peach-200 tracking-wider hidden sm:block">
                Psychologist • Pune
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Nova Hover/Active Pill */}
          <nav
            onMouseLeave={() => setHoveredPath(null)}
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-2"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              const isHovered = hoveredPath === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setHoveredPath(link.to)}
                  className={`relative px-3 py-1.5 text-xs xl:text-[13px] font-semibold rounded-full transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-brand-plum-950 dark:text-white font-bold'
                      : 'text-brand-plum-800/80 hover:text-brand-plum-950 dark:text-brand-plum-100/75 dark:hover:text-white'
                  }`}
                >
                  {/* Sliding Hover Pill */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hoverHighlight"
                      className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10 -z-10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
                    />
                  )}

                  {/* Active Route Pill with Soft Glow */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-brand-peach-200/50 dark:bg-brand-plum-800/60 border border-brand-peach-300/40 dark:border-white/15 -z-10 shadow-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Controls & Nova Glow CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Language Selector (EN / मराठी / हिंदी) */}
            <LanguageToggle />

            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Nova Glow CTA Button ("Book a Session") */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="relative hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 sm:px-5 py-2 text-xs font-bold text-white shadow-[0_4px_16px_rgba(217,68,43,0.35)] hover:shadow-[0_6px_22px_rgba(217,68,43,0.5)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-papaya overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #D9442B 0%, #FF7A59 60%, #FFB627 100%)',
              }}
            >
              {/* Inner animated light sweep */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"
                aria-hidden="true"
              />

              <Calendar className="h-3.5 w-3.5 text-white relative z-10" />
              <span className="relative z-10">{t('nav.bookSession')}</span>
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/60 bg-white/70 text-brand-plum-900 shadow-sm backdrop-blur-xl transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-peach-400 dark:border-white/15 dark:bg-white/10 dark:text-white"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Floating Drawer (Smooth Glass Dropdown directly below pill) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="lg:hidden mt-2.5 w-full rounded-3xl bg-white/95 dark:bg-brand-canvas-darkCard/95 border border-white/80 dark:border-white/15 shadow-2xl backdrop-blur-2xl p-5 overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-peach-400/50 to-transparent"
                aria-hidden="true"
              />

              <div className="flex flex-col space-y-1">
                {/* Home link */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                    location.pathname === '/'
                      ? 'bg-brand-peach-100 text-brand-plum-950 font-bold dark:bg-brand-plum-900/60 dark:text-brand-peach-200'
                      : 'text-brand-plum-800 hover:bg-black/5 dark:text-brand-plum-100 dark:hover:bg-white/10'
                  }`}
                >
                  <span>{t('nav.home')}</span>
                  {location.pathname === '/' ? (
                    <span className="h-2 w-2 rounded-full bg-brand-peach-500" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-brand-plum-400" />
                  )}
                </Link>

                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-brand-peach-100 text-brand-plum-950 font-bold dark:bg-brand-plum-900/60 dark:text-brand-peach-200'
                          : 'text-brand-plum-800 hover:bg-black/5 dark:text-brand-plum-100 dark:hover:bg-white/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <span className="h-2 w-2 rounded-full bg-brand-peach-500" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-brand-plum-400" />
                      )}
                    </Link>
                  );
                })}

                {/* Mobile Book CTA */}
                <div className="pt-3 border-t border-brand-plum-100 dark:border-white/10 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold text-white shadow-lg shadow-papaya/30"
                    style={{
                      background: 'linear-gradient(135deg, #D9442B 0%, #FF7A59 60%, #FFB627 100%)',
                    }}
                  >
                    <Calendar className="h-4 w-4 text-white" />
                    <span>{t('nav.bookSession')}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
