import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const TopBar: React.FC = () => {
  return (
    <aside aria-label="Quick contact and social links" className="bg-[#0B160E] text-[#D8CFBF] text-[11px] border-b border-[#C5A059]/20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#ECCF8A] transition-colors"
              aria-label="Instagram @rkmehandinoida"
            >
              <Instagram className="w-3 h-3 text-[#C5A059]" />
              <span className="tracking-wider">@rkmehandinoida</span>
            </a>
            <span className="text-[#C5A059]/40">·</span>
            <a
              href={BUSINESS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#ECCF8A] transition-colors"
              aria-label="Facebook page"
            >
              <Facebook className="w-3 h-3 text-[#C5A059]" />
              <span className="tracking-wider">Facebook</span>
            </a>
          </div>

          {/* Center/Left: Phone & Email */}
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-1.5 hover:text-[#ECCF8A] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span className="font-medium tracking-wide">{BUSINESS.phoneDisplay}</span>
            </a>
            <span className="text-[#C5A059]/40">·</span>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-1.5 hover:text-[#ECCF8A] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#C5A059]" />
              <span className="tracking-wider">{BUSINESS.emailDisplay}</span>
            </a>
          </div>

          {/* Right: Location Indicator */}
          <div className="flex items-center gap-1.5 text-[#ECCF8A] tracking-wider uppercase text-[10px] font-medium">
            <MapPin className="w-3 h-3 text-[#C5A059]" />
            <span>Noida, Delhi NCR</span>
          </div>
        </div>

        {/* Mobile Layout (Keeps only Call & WhatsApp as requested) */}
        <div className="flex md:hidden items-center justify-between">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-1.5 text-[#FAF5EE] hover:text-[#ECCF8A] font-medium transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C5A059]" />
            <span>{BUSINESS.phoneDisplay}</span>
          </a>

          <div className="flex items-center space-x-4">
            <a
              href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-white font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
            <span className="text-[#C5A059]/40">·</span>
            <span className="text-[10px] text-[#C5A059] uppercase tracking-wider">Sector 25 Noida</span>
          </div>
        </div>

      </div>
    </aside>
  );
};
