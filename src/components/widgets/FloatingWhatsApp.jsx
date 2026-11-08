import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '../common/WhatsAppIcon';

export { WhatsAppIcon };

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const waUrl = 'https://wa.me/919769512475?text=Hello%20Simran%2C%20I%20would%20like%20to%20enquire%20about%20counselling%20sessions%20with%20Fruitful%20Mind.';

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10, scale: isHovered ? 1 : 0.95 }}
        transition={{ duration: 0.2 }}
        className="hidden sm:block pointer-events-none rounded-full bg-teal-deep text-white px-4 py-1.5 text-xs font-semibold shadow-lg border border-white/20 whitespace-nowrap"
      >
        Chat with Simran on WhatsApp
      </motion.div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Psychologist Simran Mistry on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-950/25 hover:shadow-xl hover:shadow-emerald-900/40 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Soft pulse glow ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-sm animate-pulse pointer-events-none" />

        {/* Real Official WhatsApp Vector Icon */}
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white relative z-10 drop-shadow-sm transition-transform duration-300 group-hover:rotate-6" />

        {/* Online Status Green Pip */}
        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
