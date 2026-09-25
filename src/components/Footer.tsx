import React from 'react';
import { Phone, MapPin, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Videos', href: '#videos' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#booking' },
  ];

  const serviceLinks = [
    'Bridal Mehndi',
    'Engagement',
    'Traditional',
    'Arabic',
    'Party Mehndi',
    'Home Service',
  ];

  return (
    <footer className="bg-[#0B160E] text-[#FAF5EE] border-t border-[#C5A059]/30 relative z-20 pb-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid with 4 specific columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Logo & Tagline Column */}
          <div className="lg:col-span-4">
            <span className="font-serif tracking-[0.24em] text-xl font-bold uppercase text-[#FCFBF7] block">
              RK MEHNDI ARTIST
            </span>
            <span className="text-xs tracking-[0.22em] text-[#C5A059] uppercase block mt-1.5 font-medium">
              Bridal Mehndi Artistry • Noida • Delhi NCR
            </span>

            <p className="text-xs sm:text-sm text-[#D4C8B5] font-light leading-relaxed mt-4 max-w-sm">
              With 10+ years of dedicated experience, creating timeless bridal and traditional henna designs for wedding celebrations across Delhi NCR and beyond.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 mt-6">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#162B1D] border border-[#C5A059]/40 hover:border-[#ECCF8A] hover:text-[#ECCF8A] flex items-center justify-center text-[#D4C8B5] transition-colors"
                aria-label="Instagram profile @rkmehandinoida"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#162B1D] border border-[#C5A059]/40 hover:border-[#ECCF8A] hover:text-[#ECCF8A] flex items-center justify-center text-[#D4C8B5] transition-colors"
                aria-label="WhatsApp enquiry"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="w-9 h-9 bg-[#162B1D] border border-[#C5A059]/40 hover:border-[#ECCF8A] hover:text-[#ECCF8A] flex items-center justify-center text-[#D4C8B5] transition-colors"
                aria-label="Phone call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS Column */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-semibold text-[#ECCF8A] mb-4">
              QUICK LINKS
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#D4C8B5] hover:text-[#ECCF8A] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A059]/40" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES Column */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-semibold text-[#ECCF8A] mb-4">
              SERVICES
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-xs text-[#D4C8B5] hover:text-[#ECCF8A] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A059]/40" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & SOCIAL Column */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-semibold text-[#ECCF8A] mb-4">
              CONTACT
            </h3>
            
            <div className="space-y-4 text-xs text-[#D4C8B5]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="font-medium text-[#FCFBF7] hover:text-[#ECCF8A] transition-colors text-sm"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-[#A8B5A9]">Calls &amp; WhatsApp inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FCFBF7]">
                    {BUSINESS.address.line1}
                  </p>
                  <p>{BUSINESS.address.city}, {BUSINESS.address.state}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#C5A059]/20">
                <span className="font-serif text-xs uppercase tracking-wider text-[#ECCF8A] font-semibold block mb-2">
                  SOCIAL
                </span>
                <div className="flex items-center space-x-4">
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D4C8B5] hover:text-[#ECCF8A] transition-colors flex items-center gap-1"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Instagram</span>
                  </a>
                  <span className="text-[#C5A059]/40">·</span>
                  <a
                    href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.defaultWhatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D4C8B5] hover:text-[#ECCF8A] transition-colors flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B5A9]">
          <p>© 2026 RK Mehndi Artist. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[11px]">
              Sector 25, Jalvayu Vihar, Noida, Uttar Pradesh 201301
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 bg-[#162B1D] text-[#ECCF8A] hover:text-[#FCFBF7] border border-[#C5A059]/30 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
