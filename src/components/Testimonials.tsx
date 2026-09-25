import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Edit3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS, TestimonialItem } from '../data/business';
import { OrnamentalDivider } from './OrnamentalDivider';
import { fadeUpVariant, LUXURY_EASE } from '../utils/animations';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current: TestimonialItem = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#102115] text-[#FAF5EE] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#ECCF8A] block">
            CLIENT EXPERIENCES
          </span>
          <OrnamentalDivider scriptText="Testimonials" light className="my-2" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FCFBF7] tracking-tight mt-1 mb-3">
            What Our Brides Say
          </h2>
          <p className="text-sm sm:text-base text-[#D4C8B5] font-light leading-relaxed">
            Honest reflections on our artistry, punctuality, and the serene warmth brought to wedding celebrations.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="relative bg-[#162B1D] border border-[#C5A059]/30 p-8 sm:p-14 shadow-2xl"
        >
          
          {/* Subtle Top Quote Icon */}
          <div className="w-12 h-12 rounded-full bg-[#102115] border border-[#C5A059]/40 flex items-center justify-center text-[#ECCF8A] mb-8 mx-auto">
            <Quote className="w-5 h-5 fill-[#C5A059]/30 text-[#ECCF8A]" />
          </div>

          {/* Testimonial Quote with Framer Motion AnimatePresence crossfade */}
          <div className="text-center min-h-[140px] flex flex-col items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: LUXURY_EASE }}
                className="w-full flex flex-col items-center"
              >
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#FCFBF7] font-normal leading-relaxed italic max-w-2xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Client Location & Category */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#ECCF8A] font-medium tracking-wider uppercase">
                  <span>{current.clientType}</span>
                  <span>•</span>
                  <span>{current.location}</span>
                  <span>•</span>
                  <span>{current.event}</span>
                </div>

                {/* Developer/Client Replacement Helper Tag */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#102115] border border-dashed border-[#C5A059]/50 text-[11px] text-[#A8B5A9]">
                  <Edit3 className="w-3 h-3 text-[#ECCF8A]" />
                  <span>{current.note}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#C5A059]/20">
            <motion.button
              type="button"
              onClick={prev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 text-[#FCFBF7] hover:text-[#ECCF8A] hover:bg-[#102115] border border-[#C5A059]/30 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Carousel Dots */}
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-[#ECCF8A]' : 'w-1.5 bg-[#C5A059]/30 hover:bg-[#C5A059]'
                  }`}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 text-[#FCFBF7] hover:text-[#ECCF8A] hover:bg-[#102115] border border-[#C5A059]/30 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
