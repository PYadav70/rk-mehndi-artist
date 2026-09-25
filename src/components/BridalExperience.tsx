import React from 'react';
import { Calendar, Palette, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRIDAL_EXPERIENCE_STEPS, BUSINESS } from '../data/business';
import { aboutImages } from '../data/images';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { fadeUpVariant, LUXURY_EASE } from '../utils/animations';

export const BridalExperience: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Calendar className="w-5 h-5 text-[#ECCF8A]" />;
      case 1:
        return <Palette className="w-5 h-5 text-[#ECCF8A]" />;
      case 2:
        return <CheckCircle className="w-5 h-5 text-[#ECCF8A]" />;
      default:
        return <Calendar className="w-5 h-5 text-[#ECCF8A]" />;
    }
  };

  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#booking');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bridal" className="py-20 md:py-28 bg-[#0E1E12] text-[#FCFBF7] relative overflow-hidden">
      {/* Subtle Henna Floral Grid */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#ECCF8A] block">
            BRIDAL JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FCFBF7] tracking-tight mt-2 mb-2 leading-tight">
            Your Wedding Day,
            <span className="block italic text-[#ECCF8A] font-normal font-serif">
              Made More Beautiful.
            </span>
          </h2>
          <OrnamentalDivider light className="my-3" />
        </motion.div>

        {/* Large Bridal Visual Banner & Experience Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Large Bridal Image Column with scale 1.08 -> 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: LUXURY_EASE }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden border border-[#C5A059]/40 shadow-2xl bg-[#0B160E] aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src={aboutImages.about2}
                alt="Detailed Indian Bridal Mehndi Composition by RK Mehndi Artist"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-[#FCFBF7] z-10">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#ECCF8A] font-semibold block mb-1">
                  Bridal Specialist Craft
                </span>
                <p className="font-serif text-base sm:text-lg font-medium text-white">
                  Intricate Palms, Forearms, Feet &amp; Custom Couple Motifs
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3 Steps Column: text opacity 0 -> 1, x: -20 -> 0, sequential stagger */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            {BRIDAL_EXPERIENCE_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: LUXURY_EASE }
                  }
                }}
                whileHover={{ x: 4 }}
                className="relative bg-[#162B1D] border border-[#C5A059]/25 p-6 hover:border-[#ECCF8A] transition-all duration-300 flex items-start gap-5 shadow-lg group cursor-pointer"
              >
                {/* Step Number & Icon Node */}
                <div className="w-12 h-12 rounded-none bg-[#102115] border border-[#C5A059]/40 flex flex-col items-center justify-center shrink-0 group-hover:border-[#ECCF8A] transition-colors">
                  <span className="font-serif text-sm font-bold text-[#ECCF8A]">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#FCFBF7] group-hover:text-[#ECCF8A] transition-colors mb-1 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4C8B5] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* CTA Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8 border-t border-[#C5A059]/20"
        >
          <motion.a
            href="#booking"
            onClick={scrollToBooking}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold bg-[#C5A059] text-[#0E1E12] hover:bg-[#D4AF37] transition-all shadow-xl cursor-pointer"
          >
            <span>RESERVE YOUR BRIDAL DATE</span>
            <ArrowRight className="w-4 h-4 text-[#0E1E12]" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
