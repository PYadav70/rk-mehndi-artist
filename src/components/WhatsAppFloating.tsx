import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const WhatsAppFloating: React.FC = () => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappMessage)}`;

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end transition-all duration-300 ${
          showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-[#18110D] hover:bg-[#25D366] text-[#FAF5EE] hover:text-white p-3.5 rounded-full border border-[#C5A059] shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Enquire on WhatsApp"
        >
          {/* Tooltip on hover */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-medium tracking-wide pr-1">
            Chat with Bridal Desk
          </span>

          {/* Glowing pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#C5A059]/30 animate-ping pointer-events-none" />

          {/* WhatsApp Icon */}
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#160E0A]/95 backdrop-blur-md border-t border-[#C5A059]/40 p-2.5 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-3 px-3 bg-[#241610] text-[#ECCF8A] border border-[#C5A059]/40 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold active:bg-[#C5A059] active:text-[#160E0A] transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] py-3 px-4 bg-[#25D366] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow-lg active:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </>
  );
};
