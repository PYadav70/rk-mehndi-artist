import React from 'react';
import { PROCESS_STEPS } from '../data/businessData';
import { OrnamentalDivider } from './OrnamentalDivider';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#18110D] text-[#FAF5EE] relative overflow-hidden">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#ECCF8A]">
            Effortless Coordination
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FAF5EE] tracking-tight mt-2 mb-2">
            From First Message to Your Big Day
          </h2>
          <OrnamentalDivider light className="my-3" />
          <p className="text-sm sm:text-base text-[#D4C7B5] font-light leading-relaxed">
            A seamless, stress-free journey ensuring your bridal and wedding mehndi unfolds with complete artistry and peace of mind.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mb-12">
          {/* Continuous Gold Connecting Line */}
          <div className="absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent -z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Step Circle Node */}
                <div className="w-24 h-24 rounded-full bg-[#18110D] border-2 border-[#C5A059]/40 group-hover:border-[#ECCF8A] flex flex-col items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-105 mb-6">
                  <span className="text-[10px] tracking-widest text-[#C5A059] uppercase font-mono">
                    Step
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#ECCF8A]">
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-base font-semibold text-[#FAF5EE] group-hover:text-[#ECCF8A] transition-colors mb-2 px-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#C9BEAF] font-light leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative space-y-8 pl-8 sm:pl-10 border-l border-[#C5A059]/40 ml-4 sm:ml-6 my-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[45px] sm:-left-[49px] top-0 w-8 h-8 rounded-full bg-[#18110D] border-2 border-[#C5A059] flex items-center justify-center shadow-md">
                <span className="text-xs font-serif font-bold text-[#ECCF8A]">
                  {step.step}
                </span>
              </div>

              {/* Content Card */}
              <div className="bg-[#201611]/80 border border-[#C5A059]/20 p-5 rounded-none">
                <h3 className="font-serif text-lg font-semibold text-[#FAF5EE] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#C9BEAF] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Bottom CTA Link */}
        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#C5A059] text-[#160E0A] hover:bg-[#D4AF37] transition-all shadow-md"
          >
            <span>Begin Step 1: Send Details</span>
          </a>
        </div>

      </div>
    </section>
  );
};
