import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Sparkles } from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import {
  PapayaDoodle,
  MangoDoodle,
  FloatingElement
} from '../components/illustrations/BrandDoodles';

export default function NotFound() {
  return (
    <div className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center justify-center overflow-hidden bg-cream dark:bg-dark-bg text-ink dark:text-white transition-colors duration-300">
      <SEO
        title="Page Not Found | Fruitful Mind"
        description="The page you were looking for could not be found. Take a gentle pause or return to the Fruitful Mind home."
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-papaya absolute top-20 -left-20 h-[500px] w-[500px] rounded-full pointer-events-none" />
      <div className="ambient-blob-mango absolute top-80 -right-20 h-[500px] w-[500px] rounded-full pointer-events-none" />

      {/* Floating Decorative Elements */}
      <div className="hidden lg:block">
        <FloatingElement className="absolute top-36 left-16 z-10" duration={7} delay={0.2} yOffset={16}>
          <PapayaDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
        <FloatingElement className="absolute top-48 right-16 z-10" duration={8} delay={0.8} yOffset={18}>
          <MangoDoodle className="w-12 h-12 drop-shadow-md" />
        </FloatingElement>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <LiquidGlass
          variant="hero"
          tint="papaya"
          className="p-8 sm:p-14 rounded-3xl border-white/80 dark:border-white/15 shadow-2xl relative overflow-hidden"
        >
          <span className="font-heading text-6xl sm:text-7xl font-black text-papaya-deep dark:text-mango">
            404
          </span>

          <h1 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-ink dark:text-white">
            Sometimes our paths meander unexpectedly.
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-muted dark:text-zinc-300 leading-relaxed max-w-md mx-auto">
            The page you are looking for has moved, expired, or drifted away. While you are here, take a calm breath, or let us guide you back home.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-papaya-deep to-papaya hover:from-papaya hover:to-mango text-white font-bold py-3.5 px-8 text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Home className="h-4 w-4" />
              <span>Return to Home</span>
            </Link>

            <Link
              to="/wellbeing-guide"
              className="w-full sm:w-auto rounded-full bg-white/80 hover:bg-white text-ink border border-white/60 py-3.5 px-7 text-xs sm:text-sm font-semibold dark:bg-white/10 dark:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Compass className="h-4 w-4 text-leaf" />
              <span>Explore Wellbeing Guide</span>
            </Link>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}
