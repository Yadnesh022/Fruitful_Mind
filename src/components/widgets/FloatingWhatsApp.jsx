import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function WhatsAppIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

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
