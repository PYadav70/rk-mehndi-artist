import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides, HeroSlide } from '../data/images';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { MagneticButton } from './MagneticButton';
import { LUXURY_EASE } from '../utils/animations';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-move image every 2 seconds (2000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlide: HeroSlide = heroSlides[currentSlide];

  return (
    <section
      id="hero"
      aria-label="Hero Bridal Showcase"
      className="relative h-[100dvh] min-h-[100dvh] flex items-center justify-center bg-[#0B160E] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Auto-Moving Carousel with Framer Motion & Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: LUXURY_EASE }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.title}
              fill
              priority={currentSlide === 0}
              className="object-cover object-center w-full h-full"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle luxury gradient for text legibility (left: 0.50, center: 0.18, right: 0.32) preserving natural mehndi & warm skin tones */}
        <div
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background: 'linear-gradient(to right, rgba(8, 18, 12, 0.50) 0%, rgba(24, 16, 10, 0.18) 50%, rgba(8, 18, 12, 0.32) 100%)',
          }}
        />

        {/* Very subtle bottom gradient blending smoothly into next section without blacking out the lower image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 pointer-events-none z-1"
          style={{
            background: 'linear-gradient(to top, rgba(11, 22, 14, 0.35) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Decorative Gold Frame Corner Accents */}
      <div className="hidden md:block absolute top-12 left-10 w-20 h-20 border-t border-l border-[#C5A059]/40 pointer-events-none z-10" />
      <div className="hidden md:block absolute top-12 right-10 w-20 h-20 border-t border-r border-[#C5A059]/40 pointer-events-none z-10" />
      <div className="hidden md:block absolute bottom-16 left-10 w-20 h-20 border-b border-l border-[#C5A059]/40 pointer-events-none z-10" />
      <div className="hidden md:block absolute bottom-16 right-10 w-20 h-20 border-b border-r border-[#C5A059]/40 pointer-events-none z-10" />

      {/* Carousel Prev / Next Arrow Controls */}
      <motion.button
        type="button"
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(22, 43, 29, 0.9)' }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/40 text-[#D8CFBF] hover:text-[#ECCF8A] border border-[#C5A059]/30 hover:border-[#ECCF8A] transition-all backdrop-blur-xs cursor-pointer group shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </motion.button>

      <motion.button
        type="button"
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(22, 43, 29, 0.9)' }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/40 text-[#D8CFBF] hover:text-[#ECCF8A] border border-[#C5A059]/30 hover:border-[#ECCF8A] transition-all backdrop-blur-xs cursor-pointer group shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Hero Content Container with Framer Motion Staggered Reveal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 md:py-28 text-center flex flex-col items-center justify-center">
        
        {/* Animated Eyebrow / Slide Counter Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 border border-[#C5A059]/40 rounded-full mb-2 sm:mb-3 backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-[#ECCF8A] animate-ping" />
          <span className="w-2 h-2 rounded-full bg-[#ECCF8A] -ml-4" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-[#FAF5EE]">
            {activeSlide.eyebrow}
          </span>
          <span className="text-[#C5A059]/60">·</span>
          <span className="text-[10px] text-[#ECCF8A] font-serif italic">
            0{currentSlide + 1} / 0{heroSlides.length}
          </span>
        </div>

        {/* Small Label: 10+ YEARS OF EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: LUXURY_EASE }}
          className="inline-flex items-center gap-2 mb-1 sm:mb-2"
        >
          <span className="w-4 sm:w-6 h-px bg-[#ECCF8A]" />
          <span className="text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-[#ECCF8A]">
            10+ YEARS OF EXPERIENCE
          </span>
          <span className="w-4 sm:w-6 h-px bg-[#ECCF8A]" />
        </motion.div>

        {/* Ornamental Divider */}
        <OrnamentalDivider light className="my-1 sm:my-1.5" />

        {/* Dynamic Heading with Slide Text Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: LUXURY_EASE }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-[26px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FCFBF7] tracking-tight leading-[1.15] max-w-4xl mt-1.5 sm:mt-2 mb-2 sm:mb-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              {activeSlide.title.includes('.') ? (
                <>
                  {activeSlide.title.split('.')[0]}.
                  <span className="block italic font-normal text-[#ECCF8A] mt-1 font-serif">
                    {activeSlide.title.split('.')[1]}
                  </span>
                </>
              ) : activeSlide.title.toLowerCase().includes('story') ? (
                <>
                  Mehndi That Tells
                  <span className="block italic font-normal text-[#ECCF8A] mt-1 font-serif">
                    Your Story
                  </span>
                </>
              ) : (
                activeSlide.title
              )}
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-xs sm:text-base text-[#F5EFE6] font-light leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] px-2">
              {activeSlide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons with Magnetic Effect & Micro-Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: LUXURY_EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-xs sm:max-w-none mb-6 sm:mb-10"
        >
          {/* Major Desktop CTA: Magnetic Button */}
          <MagneticButton
            href="#booking"
            onClick={(e) => scrollToSection(e, '#booking')}
            className="w-full sm:w-auto"
          >
            <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold bg-[#C5A059] text-[#0E1E12] hover:bg-[#D4AF37] hover:shadow-2xl transition-all duration-300 border border-[#ECCF8A] min-h-[46px]">
              <Calendar className="w-4 h-4 text-[#0E1E12]" />
              <span>BOOK YOUR DATE</span>
            </span>
          </MagneticButton>

          <motion.a
            href="#gallery"
            onClick={(e) => scrollToSection(e, '#gallery')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium text-[#FAF5EE] hover:text-[#ECCF8A] bg-black/40 hover:bg-black/60 border border-[#C5A059]/50 hover:border-[#ECCF8A] transition-all duration-300 backdrop-blur-sm cursor-pointer min-h-[46px]"
          >
            <span>VIEW OUR WORK</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#ECCF8A]" />
          </motion.a>
        </motion.div>

        {/* Bottom Trust Line */}
        <div className="pt-5 border-t border-[#C5A059]/25 max-w-xl mx-auto w-full mb-4">
          <p className="text-xs sm:text-sm text-[#D4C8B5] tracking-wider font-light flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
            <span className="font-medium text-[#ECCF8A]">Bridal Specialist</span>
            <span className="text-[#C5A059]">·</span>
            <span>Home Service</span>
            <span className="text-[#C5A059]">·</span>
            <span>Delhi NCR</span>
            <span className="text-[#C5A059]">·</span>
            <span>Travel Available</span>
          </p>
        </div>

        {/* Carousel Slide Indicators with 2-second Progress Visualizer */}
        <div className="flex items-center gap-2.5 mt-2">
          {heroSlides.map((_, idx: number) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`relative h-2 rounded-full transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive 
                    ? 'w-10 bg-[#ECCF8A] shadow-md shadow-[#C5A059]/50' 
                    : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
              >
                {isActive && !isPaused && (
                  <span className="absolute inset-0 bg-[#FFF] opacity-60 animate-[pulse_1s_ease-in-out_infinite]" />
                )}
              </button>
            );
          })}

          {/* Pause / Play toggle */}
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="ml-2 p-1 text-[#C5A059]/70 hover:text-[#ECCF8A] transition-colors rounded-full cursor-pointer"
            aria-label={isPaused ? 'Resume auto slide' : 'Pause auto slide'}
            title={isPaused ? 'Resume 2s auto-slide' : 'Pause auto-slide'}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>

      </div>

      {/* Smooth Scroll Down Indicator */}
      <a
        href="#intro-strip"
        onClick={(e) => scrollToSection(e, '#intro-strip')}
        className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-10 text-[#C5A059]/70 hover:text-[#ECCF8A] transition-colors p-2 flex flex-col items-center cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
