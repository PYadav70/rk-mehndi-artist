import React, { useEffect, useState } from 'react';
import { Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { aboutImages } from '../data/images';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { LUXURY_EASE, fadeUpVariant, imageRevealVariant } from '../utils/animations';

export const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  // Subtle count-up animation for "10+"
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / 10));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= 10) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  const stats = [
    { value: `${count}+`, label: 'Years Experience' },
    { value: 'Bridal', label: 'Specialist' },
    { value: 'NCR', label: 'Service Area' },
    { value: 'Travel', label: 'Available' },
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className="py-20 md:py-28 bg-[#FCFBF7] text-[#1E1510] relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image Reveal with scale 1.05 -> 1 and subtle stagger */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageRevealVariant}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gold offset frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#C5A059]/40 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 pointer-events-none" />

              {/* Main Bridal Image */}
              <div className="relative overflow-hidden shadow-2xl bg-[#0E1E12] aspect-[4/5]">
                <Image
                  src={aboutImages.about1}
                  alt="Intricate Bridal Mehndi Hand Artistry by RK Mehndi Artist"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 10+ Years of Artistry Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: LUXURY_EASE }}
                className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-[#0E1E12] text-[#FCFBF7] p-4 sm:p-5 shadow-2xl border border-[#C5A059]/60 flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center shrink-0 border border-[#C5A059]">
                  <Award className="w-5 h-5 text-[#ECCF8A]" />
                </div>
                <div>
                  <span className="block font-serif text-lg font-bold text-[#ECCF8A] leading-tight">
                    10+ Years
                  </span>
                  <span className="text-[11px] tracking-wider uppercase text-[#D8CFBF]">
                    of Artistry
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT: Editorial Text Content with Staggered Scroll Reveal */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.1 }
              }
            }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            
            {/* Section Eyebrow */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-2 mb-1">
              <span className="h-px w-8 bg-[#8C6A24]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6A24]">
                ABOUT RK MEHNDI ARTIST
              </span>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <OrnamentalDivider scriptText="About Us" className="justify-start my-2" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              variants={fadeUpVariant}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0E1E12] tracking-tight leading-[1.2] mb-3"
            >
              Where Tradition Meets Detailed Artistry
            </motion.h2>

            {/* Text Paragraph 1 */}
            <motion.p 
              variants={fadeUpVariant}
              className="text-base sm:text-lg text-[#3E3129] font-light leading-relaxed mb-4"
            >
              With over 10 years of experience, RK Mehndi Artist specializes in creating intricate bridal and traditional mehndi designs for weddings, engagements and special celebrations.
            </motion.p>

            {/* Text Paragraph 2 */}
            <motion.p 
              variants={fadeUpVariant}
              className="text-sm sm:text-base text-[#5C4A3F] font-light leading-relaxed mb-8"
            >
              Based in Noida and serving Delhi NCR, our artistry is available for home services and selected travel bookings. Every stroke of our natural henna is applied with patience and precision, ensuring breathtaking stains and lifelong memories.
            </motion.p>

            {/* Elegant Stats Grid with Animated Count-Up */}
            <motion.div 
              variants={fadeUpVariant}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#C5A059]/30 mb-8 bg-[#F7F4EC]/60 px-4"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8C6A24] leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#1E1510] font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div 
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#8C6A24] text-[#FAF5EE] hover:bg-[#72541C] transition-all shadow-md cursor-pointer"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>

              <div className="flex items-center gap-2 text-xs text-[#5C4A3F]">
                <CheckCircle2 className="w-4 h-4 text-[#8C6A24]" />
                <span>Home Service Across Noida &amp; NCR</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
