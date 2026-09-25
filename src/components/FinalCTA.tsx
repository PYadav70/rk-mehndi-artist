import React from 'react';
import { Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS } from '../data/business';
import { heroSlides } from '../data/images';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { MagneticButton } from './MagneticButton';
import { fadeUpVariant } from '../utils/animations';

export const FinalCTA: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bgImage = heroSlides[4]?.image || '/images/hero/hero-5.jpg';

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B160E] text-[#FCFBF7] overflow-hidden">
      {/* Background Bridal Mehndi Image with Dark Vignette & Local Image System */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Luxury Bridal Mehndi Backdrop"
          fill
          className="object-cover object-center scale-105"
        />
        {/* Deep forest green & dark espresso overlays */}
        <div className="absolute inset-0 bg-[#0B160E]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B160E] via-[#102115]/80 to-[#0B160E] pointer-events-none" />
      </div>

      <div className="absolute inset-0 mehndi-grid-bg opacity-20 pointer-events-none z-1" />

      {/* Center Framing Container with Scroll Reveal */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <div className="p-8 sm:p-14 md:p-16 border border-[#C5A059]/40 bg-[#0E1E12]/80 backdrop-blur-md relative shadow-2xl">
          
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ECCF8A]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#ECCF8A]">
              RESERVE YOUR CELEBRATION
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#ECCF8A]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FCFBF7] tracking-tight mt-2 mb-3 leading-tight">
            Your Story.
            <span className="block text-[#ECCF8A] font-serif">
              Your Mehndi.
            </span>
            <span className="block italic text-white font-serif font-normal">
              Your Moment.
            </span>
          </h2>

          <OrnamentalDivider light className="my-4" />

          {/* Text */}
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#D4C8B5] font-light leading-relaxed mb-10">
            Let&apos;s create something beautiful for your special day.
          </p>

          {/* Action Buttons: BOOK YOUR DATE (Magnetic), WHATSAPP US */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <MagneticButton
              href="#booking"
              onClick={scrollToBooking}
              className="w-full sm:w-auto"
            >
              <span className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold bg-[#C5A059] text-[#0E1E12] hover:bg-[#D4AF37] hover:shadow-2xl transition-all duration-300 border border-[#ECCF8A]">
                <Calendar className="w-4 h-4" />
                <span>BOOK YOUR DATE</span>
              </span>
            </MagneticButton>

            <motion.a
              href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(BUSINESS.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#FCFBF7] hover:text-[#ECCF8A] bg-black/50 hover:bg-black/70 border border-[#C5A059]/60 hover:border-[#ECCF8A] transition-all duration-300 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#ECCF8A]" />
              <span>WHATSAPP US</span>
            </motion.a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#C5A059]/20 text-xs text-[#A8B5A9] font-light">
            {BUSINESS.serviceAreasString}
          </div>

        </div>
      </motion.div>
    </section>
  );
};
