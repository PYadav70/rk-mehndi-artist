import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { OrnamentalDivider } from './OrnamentalDivider';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-[#FCFBF7] text-[#1E1510] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#8C6A24] block">
            LOCATION &amp; COVERAGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0E1E12] tracking-tight mt-2 mb-2">
            Serving Noida &amp; Delhi NCR
          </h2>
          <OrnamentalDivider className="my-3" />
          <p className="text-sm sm:text-base text-[#5C4A3F] font-light leading-relaxed">
            Conveniently situated in Noida with dedicated doorstep home service and travel availability across the National Capital Region.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column */}
          <div className="lg:col-span-5 bg-white border border-[#C5A059]/30 p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6A24] mb-3">
                <MapPin className="w-4 h-4 text-[#8C6A24]" />
                <span>Base Location</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#0E1E12] mb-2">
                Sector 25, Jalvayu Vihar
              </h3>
              <p className="text-sm text-[#5C4A3F] leading-relaxed mb-6 font-light">
                {BUSINESS.address.full}
              </p>

              {/* Service Areas */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider text-[#8C6A24] font-semibold block">
                  Core Service Territories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS.serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#F7F4EC] border border-[#C5A059]/30 text-xs text-[#0E1E12] font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-[#C5A059]/20 space-y-3 text-xs text-[#5C4A3F]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#8C6A24]" />
                  <span>Direct Line: <a href={`tel:${BUSINESS.phone}`} className="font-semibold text-[#0E1E12] hover:underline">{BUSINESS.phoneDisplay}</a></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#8C6A24]" />
                  <span>Doorstep Home Service Available 7 Days a Week</span>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="mt-8 pt-6 border-t border-[#C5A059]/20">
              <a
                href={BUSINESS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#0E1E12] text-[#FCFBF7] hover:bg-[#8C6A24] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Map Column (Keyless, Safe Responsive Embed) */}
          <div className="lg:col-span-7 bg-[#102115] border border-[#C5A059]/30 shadow-lg min-h-[380px] lg:min-h-[460px] relative overflow-hidden flex flex-col">
            <iframe
              title="RK Mehndi Artist Location Map - Sector 25, Jalvayu Vihar, Noida"
              src={BUSINESS.googleMapsEmbedUrl}
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map caption */}
            <div className="p-3 bg-[#0E1E12] border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#D8CFBF]">
              <span>Sector 25, Jalvayu Vihar, Noida • PIN 201301</span>
              <a
                href={BUSINESS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ECCF8A] hover:underline font-medium"
              >
                View Larger Map
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
