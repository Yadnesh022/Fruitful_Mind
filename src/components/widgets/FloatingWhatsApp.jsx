import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import LiquidGlass from '../common/LiquidGlass';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const waUrl = 'https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20counselling%20sessions%20with%20Fruitful%20Mind.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        className="hidden sm:block pointer-events-none rounded-full bg-brand-plum-900/90 text-white px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md shadow-lg"
      >
        Chat directly with Simran
      </motion.div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Simran Mistry on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-400/50 rounded-full"
      >
        {/* Ambient pulse */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-md animate-pulse" />

        <LiquidGlass
          variant="pill"
          interactive={true}
          className="h-14 w-14 p-0 flex items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-xl shadow-emerald-900/30 border border-white/50"
        >
          <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
        </LiquidGlass>
      </a>
    </div>
  );
}
