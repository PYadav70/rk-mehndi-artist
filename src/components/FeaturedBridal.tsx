import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroSlides } from '../data/images';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { MagneticButton } from './MagneticButton';
import { fadeUpVariant } from '../utils/animations';

export const FeaturedBridal: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#0B160E] text-[#FCFBF7] overflow-hidden flex items-center justify-center">
      {/* Large Immersive Background Bridal Image with Local Image System */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSlides[1]?.image || '/images/hero/hero-2.jpg'}
          alt="Intricate Bridal Henna Work"
          fill
          className="object-cover object-center scale-105"
        />
        {/* Layered dark forest green & espresso overlays */}
        <div className="absolute inset-0 bg-[#0B160E]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B160E] via-[#102115]/75 to-[#0B160E] pointer-events-none" />
      </div>

      <div className="absolute inset-0 mehndi-grid-bg opacity-20 pointer-events-none z-1" />

      {/* Center Editorial Box with Framer Motion Reveal */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        <div className="p-8 sm:p-14 border border-[#C5A059]/40 bg-[#0E1E12]/80 backdrop-blur-md relative shadow-2xl">
          
          <div className="inline-flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ECCF8A]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#ECCF8A]">
              THE BRIDAL PROMISE
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#ECCF8A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-semibold text-[#FCFBF7] tracking-tight mt-2 mb-3 leading-tight">
            Intricate Details.
            <span className="block italic text-[#ECCF8A] font-serif font-normal mt-1">
              Beautiful Memories.
            </span>
          </h2>

          <OrnamentalDivider light className="my-4" />

          <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-[#D8CFBF] font-light leading-relaxed mb-8">
            Because the smallest details often become the most memorable part of your wedding day.
          </p>

          <div>
            <MagneticButton
              href="#booking"
              onClick={scrollToBooking}
            >
              <span className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold bg-[#C5A059] text-[#0E1E12] hover:bg-[#D4AF37] hover:shadow-2xl transition-all duration-300 border border-[#ECCF8A]">
                <Calendar className="w-4 h-4" />
                <span>BOOK BRIDAL MEHNDI</span>
              </span>
            </MagneticButton>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
