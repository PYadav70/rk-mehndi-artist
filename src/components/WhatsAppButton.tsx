import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS.defaultWhatsappMessage
  )}`;

  return (
    <>
      {/* Floating Official Green WhatsApp Button - Elevated above bottom bar on mobile */}
      <aside
        aria-label="WhatsApp Quick Contact"
        className="fixed bottom-20 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3"
      >
        {/* Animated Tooltip on Desktop */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:flex items-center gap-2 bg-[#0B160E] text-[#FCFBF7] px-3.5 py-2 rounded-full border border-[#C5A059]/40 shadow-xl pointer-events-none whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs font-medium tracking-wide">
                Chat with RK Bridal Desk
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Floating Green WhatsApp Circle */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 transition-colors"
          aria-label="Chat on WhatsApp with RK Mehndi Artist"
          title="Chat on WhatsApp"
        >
          {/* Subtle Outer Pulsing Wave */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

          {/* Official WhatsApp SVG Vector Icon */}
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10 transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.8.74 5.5 2.14 7.92L.5 31.5l7.78-2.04A15.42 15.42 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28.38c-2.45 0-4.83-.66-6.92-1.91l-.5-.3-5.14 1.35 1.37-5.01-.32-.52A12.83 12.83 0 0 1 3.12 16C3.12 8.9 8.9 3.12 16 3.12S28.88 8.9 28.88 16 23.1 28.88 16 28.88zm7.06-9.66c-.39-.2-2.3-1.13-2.65-1.26-.35-.13-.61-.2-.87.2s-1 1.26-1.22 1.52-.44.29-.83.1c-.39-.2-1.65-.61-3.14-1.94-1.16-1.03-1.94-2.31-2.17-2.7-.23-.39-.02-.6.17-.8.17-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.87-2.1-.87-2.1-.33-.8-.67-.69-.92-.7h-.79c-.27 0-.71.1-1.08.5-.37.4-1.42 1.39-1.42 3.39s1.45 3.93 1.65 4.2c.2.26 2.85 4.35 6.9 6.1 4.05 1.75 4.05 1.17 4.78 1.1.73-.07 2.3-1 2.62-1.97.32-.97.32-1.8.23-1.97-.1-.17-.36-.27-.75-.47z" />
          </svg>
        </motion.a>
      </aside>

      {/* Mobile Bottom Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B160E]/95 backdrop-blur-md border-t border-[#C5A059]/40 p-2 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex-1 py-2.5 px-3 bg-[#162B1D] text-[#ECCF8A] border border-[#C5A059]/40 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold active:bg-[#C5A059] active:text-[#0E1E12] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.6] py-2.5 px-4 bg-[#25D366] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow-lg transition-transform active:scale-95"
        >
          <svg viewBox="0 0 32 32" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.8.74 5.5 2.14 7.92L.5 31.5l7.78-2.04A15.42 15.42 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28.38c-2.45 0-4.83-.66-6.92-1.91l-.5-.3-5.14 1.35 1.37-5.01-.32-.52A12.83 12.83 0 0 1 3.12 16C3.12 8.9 8.9 3.12 16 3.12S28.88 8.9 28.88 16 23.1 28.88 16 28.88zm7.06-9.66c-.39-.2-2.3-1.13-2.65-1.26-.35-.13-.61-.2-.87.2s-1 1.26-1.22 1.52-.44.29-.83.1c-.39-.2-1.65-.61-3.14-1.94-1.16-1.03-1.94-2.31-2.17-2.7-.23-.39-.02-.6.17-.8.17-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.87-2.1-.87-2.1-.33-.8-.67-.69-.92-.7h-.79c-.27 0-.71.1-1.08.5-.37.4-1.42 1.39-1.42 3.39s1.45 3.93 1.65 4.2c.2.26 2.85 4.35 6.9 6.1 4.05 1.75 4.05 1.17 4.78 1.1.73-.07 2.3-1 2.62-1.97.32-.97.32-1.8.23-1.97-.1-.17-.36-.27-.75-.47z" />
          </svg>
          <span>BOOK ON WHATSAPP</span>
        </a>
      </div>
    </>
  );
};
