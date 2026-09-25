import React from 'react';
import { Award, Crown, Home, Plane, Sparkles, Check, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/business';
import { OrnamentalDivider } from './OrnamentalDivider';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    const iconClass = 'w-6 h-6 text-[#8C6A24]';
    switch (idx) {
      case 0:
        return <Award className={iconClass} />;
      case 1:
        return <Crown className={iconClass} />;
      case 2:
        return <Home className={iconClass} />;
      case 3:
        return <Plane className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="why-rk" className="py-20 md:py-28 bg-[#FCFBF7] text-[#1E1510] relative overflow-hidden">
      {/* Subtle henna floral texture */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#8C6A24] block">
            DEDICATED EXCELLENCE
          </span>
          <OrnamentalDivider scriptText="Why Us" className="my-2" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0E1E12] tracking-tight mt-1 mb-3">
            WHY RK MEHNDI ARTIST?
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3F] font-light leading-relaxed">
            Craftsmanship, patience, and punctual doorstep service designed to make your wedding memories effortless and radiant.
          </p>
        </div>

        {/* Four Elegant Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {WHY_CHOOSE_US.primary.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C5A059]/30 p-8 hover:border-[#8C6A24] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Number & Line-Art Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#F7F4EC] border border-[#C5A059]/40 flex items-center justify-center group-hover:bg-[#C5A059]/15 transition-colors">
                    {getIcon(idx)}
                  </div>
                  <span className="font-serif text-xs tracking-widest text-[#8C6A24]/60 font-semibold">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-[#0E1E12] mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C4A3F] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Gold bottom accent line */}
              <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#8C6A24] font-medium tracking-wider uppercase">
                <span>Verified Quality</span>
                <span>•</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Points Bar */}
        <div className="bg-[#102115] text-[#FCFBF7] border border-[#C5A059]/30 p-8 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#ECCF8A] font-semibold block mb-1">
                OUR COMMITMENTS TO EVERY BRIDE
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                Purity, Precision &amp; Timeless Cultural Heritage
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {WHY_CHOOSE_US.additional.map((point, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/50 flex items-center justify-center shrink-0 text-[#ECCF8A]">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#E8DFD1] font-light">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
