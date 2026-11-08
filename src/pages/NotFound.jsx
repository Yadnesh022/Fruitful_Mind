import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import SEO from '../components/common/SEO';
import {
  ThoughtCloudDoodle,
  TangledLineDoodle,
  FloatingShape
} from '../components/illustrations/BrandDoodles';

export default function NotFound() {
  return (
    <div className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 min-h-[85vh] flex items-center justify-center overflow-hidden bg-sand-warm text-ink">
      <SEO
        title="Page Not Found | Fruitful Mind - Simran Mistry"
        description="The page you were looking for could not be found. Take a gentle pause or return to the Fruitful Mind home."
      />

      {/* Floating subtle shapes */}
      <div className="hidden lg:block pointer-events-none select-none">
        <FloatingShape className="absolute top-36 left-16 z-0" duration={8} delay={0.2} yOffset={16}>
          <ThoughtCloudDoodle className="w-16 h-12 text-teal-primary/30" />
        </FloatingShape>
        <FloatingShape className="absolute top-48 right-16 z-0" duration={9} delay={0.8} yOffset={18}>
          <TangledLineDoodle className="w-20 h-12 text-teal-primary/25" />
        </FloatingShape>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
        <div className="p-8 sm:p-14 rounded-2xl bg-white border border-teal-primary/15 shadow-sm relative overflow-hidden">
          <span className="font-heading text-6xl sm:text-7xl font-bold text-teal-deep block">
            404
          </span>

          <h1 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-teal-deep">
            Sometimes our paths meander unexpectedly.
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed max-w-md mx-auto">
            The page you are looking for has moved, expired, or drifted away. While you are here, take a calm breath, or let us guide you back home.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto rounded-xl bg-yellow-accent hover:bg-amber-400 text-ink font-bold py-3.5 px-8 text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2 active:scale-98"
            >
              <Home className="h-4 w-4 text-teal-deep" />
              <span>Return to Home</span>
            </Link>

            <Link
              to="/wellbeing-guide"
              className="w-full sm:w-auto rounded-xl bg-sand-warm/70 hover:bg-teal-tint text-teal-deep border border-teal-primary/20 py-3.5 px-7 text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Compass className="h-4 w-4 text-teal-primary" />
              <span>Explore Wellbeing Guide</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
