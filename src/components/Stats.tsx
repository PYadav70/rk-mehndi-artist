import React from 'react';
import { STATS_DATA } from '../data/businessData';

export const Stats: React.FC = () => {
  return (
    <section className="relative z-20 bg-[#160E0A] border-y border-[#C5A059]/25 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/20">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center ${
                idx > 0 && idx % 2 === 0 ? 'pt-6 md:pt-0' : idx === 1 ? 'pt-0' : idx > 1 ? 'pt-6 md:pt-0' : ''
              } md:px-6`}
            >
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#ECCF8A] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#FAF5EE]">
                {stat.label}
              </span>
              <span className="mt-1 text-[11px] sm:text-xs text-[#A89886] font-light tracking-wide">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
