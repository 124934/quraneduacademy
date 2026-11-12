import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { IslamicPattern } from './IslamicPattern';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    'As-salamu alaykum! I would like to inquire about online Quran classes and book a 3-Day Free Trial at Quran Education.'
  );

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-end flex-col gap-2.5 whatsapp-widget-container no-trans"
      data-no-trans="true"
    >
      {isOpen && (
        <div
          className="bg-[#FAF9F5] rounded-2xl shadow-2xl p-4 sm:p-5 border border-emerald-900/15 max-w-[280px] sm:max-w-xs text-left relative overflow-hidden"
        >
          <IslamicPattern variant="light" opacity={0.35} className="rounded-2xl" />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-700 p-1 rounded-full cursor-pointer"
            aria-label="Close message"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <p className="text-[11px] font-bold text-[#0A3826] uppercase tracking-wider">
              Academic Advisor Online
            </p>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Have questions? Chat directly on WhatsApp for instant course counseling, fee discount & 3-Day Free Trial booking!
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <p className="text-[11px] font-mono text-emerald-800 font-bold">
              💬 {ACADEMY_CONFIG.whatsapp}
            </p>
            <a
              href={`${ACADEMY_CONFIG.whatsappUrl}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#25D366] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Start Chat →
            </a>
          </div>
        </div>
      )}

      <a
        href={`${ACADEMY_CONFIG.whatsappUrl}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          // If popup is closed, open on first tap on mobile, otherwise navigate
          if (!isOpen && window.innerWidth < 768) {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        onMouseEnter={() => setIsOpen(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-emerald-900/25 cursor-pointer"
        aria-label="Chat on WhatsApp with Quran Education"
      >
        <svg
          className="w-7 h-7 fill-white stroke-none"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
        </svg>
      </a>
    </div>
  );
};
