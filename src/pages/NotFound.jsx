import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Wind } from 'lucide-react';
import SEO from '../components/common/SEO';
import LiquidGlass from '../components/common/LiquidGlass';
import BreathingWidget from '../components/widgets/BreathingWidget';

export default function NotFound() {
  return (
    <div className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center justify-center overflow-hidden">
      <SEO
        title="Page Not Found | Fruitful Mind"
        description="The page you were looking for could not be found. Take a gentle pause or return to the Fruitful Mind home."
      />

      {/* Ambient background glows */}
      <div className="ambient-blob-plum absolute top-20 -left-20 h-96 w-96 rounded-full pointer-events-none" />
      <div className="ambient-blob-peach absolute top-80 -right-20 h-96 w-96 rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <LiquidGlass
          variant="hero"
          tint="peach"
          className="p-8 sm:p-12 rounded-3xl border-white/80 dark:border-white/10 shadow-2xl"
        >
          <span className="font-heading text-6xl sm:text-7xl font-black text-brand-peach-400 dark:text-brand-peach-300">
            404
          </span>

          <h1 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-brand-plum-950 dark:text-white">
            Sometimes our paths meander unexpectedly.
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed max-w-md mx-auto">
            The page you are looking for has moved, expired, or drifted away. While you are here, take a calm breath, or let us guide you back home.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto rounded-full bg-brand-plum-700 hover:bg-brand-plum-800 text-white font-bold py-3.5 px-7 text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Home className="h-4 w-4" />
              <span>Return to Home</span>
            </Link>

            <Link
              to="/wellbeing-guide"
              className="w-full sm:w-auto rounded-full bg-white/80 hover:bg-white text-brand-plum-900 border border-white/60 py-3.5 px-6 text-xs sm:text-sm font-semibold dark:bg-white/10 dark:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Compass className="h-4 w-4" />
              <span>Explore Wellbeing Guide</span>
            </Link>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}
