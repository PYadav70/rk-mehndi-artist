import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS } from '../data/business';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'VIDEOS', href: '#videos' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#booking' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B160E]/98 backdrop-blur-md shadow-2xl py-3 border-b border-[#C5A059]/30'
            : 'bg-[#0B160E]/90 backdrop-blur-md shadow-md py-4 sm:py-4.5 border-b border-[#C5A059]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Elegant Text-Based Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex flex-col focus:outline-none"
              aria-label="RK Mehndi Artist Home"
            >
              <span className="font-serif tracking-[0.24em] text-lg sm:text-xl font-bold uppercase text-[#FCFBF7] group-hover:text-[#ECCF8A] transition-colors leading-tight">
                RK
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C5A059] uppercase font-medium">
                MEHNDI ARTIST
              </span>
            </a>

            {/* Desktop Navigation Links with Underline Animation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Primary Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-medium tracking-[0.16em] uppercase text-[#FAF5EE] hover:text-[#ECCF8A] transition-colors relative py-1 focus:outline-none group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Side: Direct Call & Animated "BOOK APPOINTMENT" CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-1.5 text-xs text-[#FAF5EE] hover:text-[#ECCF8A] transition-colors tracking-wider"
                title="Call RK Mehndi Artist"
              >
                <Phone className="w-3.5 h-3.5 text-[#ECCF8A]" />
                <span className="font-medium">{BUSINESS.phoneDisplay}</span>
              </a>

              <motion.a
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold bg-[#C5A059] text-[#0E1E12] hover:bg-[#D4AF37] hover:shadow-lg transition-all duration-200 border border-[#ECCF8A] cursor-pointer"
              >
                BOOK APPOINTMENT
              </motion.a>
            </div>

            {/* Mobile Actions: WhatsApp Quick Link & Hamburger Menu */}
            <div className="flex items-center space-x-3 lg:hidden">
              <motion.a
                href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.92 }}
                className="p-1.5 text-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp quick enquiry"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </motion.a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FCFBF7] hover:text-[#ECCF8A] focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen/Sliding Navigation Drawer with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0E1E12] border-l border-[#C5A059]/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#C5A059]/20">
                  <div>
                    <span className="font-serif tracking-widest text-lg font-bold uppercase text-[#FCFBF7] block">
                      RK
                    </span>
                    <span className="text-[10px] tracking-widest text-[#C5A059] uppercase block font-medium">
                      MEHNDI ARTIST
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-[#E8DFD1] hover:text-[#ECCF8A] hover:bg-white/5 rounded-full transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="py-5 flex flex-col space-y-1" aria-label="Mobile Navigation">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-xs font-semibold tracking-[0.16em] uppercase text-[#E8DFD1] hover:text-[#ECCF8A] transition-colors py-3 px-1 border-b border-white/5 flex items-center justify-between group min-h-[44px]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]/50 group-hover:text-[#ECCF8A] group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-[#C5A059]/20 space-y-3.5">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-3 text-xs text-[#FCFBF7] hover:text-[#ECCF8A] p-2 hover:bg-white/5 rounded-sm transition-colors min-h-[44px]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#ECCF8A] border border-[#C5A059]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#C5A059]">Call Directly</div>
                    <div className="font-medium">{BUSINESS.phoneDisplay}</div>
                  </div>
                </a>

                <motion.a
                  href="#booking"
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => handleNavClick(e, '#booking')}
                  className="flex items-center justify-center w-full text-center py-3.5 text-xs uppercase tracking-widest font-semibold bg-[#C5A059] text-[#0E1E12] hover:bg-[#D4AF37] transition-all shadow-md cursor-pointer min-h-[46px]"
                >
                  BOOK APPOINTMENT
                </motion.a>

                <p className="text-center text-[10px] text-[#A89886] tracking-wider">
                  Sector 25, Jalvayu Vihar, Noida, UP
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
