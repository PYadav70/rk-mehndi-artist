import React from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';

export const IntroStatement: React.FC = () => {
  return (
    <section id="intro-strip" className="relative z-20 bg-[#0E1E12] border-y border-[#C5A059]/25 py-14 sm:py-20 text-[#FCFBF7] text-center overflow-hidden">
      {/* Subtle henna floral texture */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <OrnamentalDivider light className="mb-4" />
        
        {/* Large Statement */}
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.2] text-[#FCFBF7] mb-5">
          Every Bride Deserves Mehndi
          <span className="block italic text-[#ECCF8A] font-normal mt-1 font-serif">
            As Unique As Her Story.
          </span>
        </h2>

        {/* Small Text */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C8B5] font-light leading-relaxed">
          From intricate bridal details to elegant traditional patterns, every design is created to make your celebration unforgettable.
        </p>

        <OrnamentalDivider light className="mt-6" />
      </div>
    </section>
  );
};
