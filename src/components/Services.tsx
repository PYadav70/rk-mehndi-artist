import React from 'react';
import { Crown, Sparkles, Sun, Flower2, Users, Palette, Home, Plane, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES, ServiceItem, createServiceEnquiryUrl } from '../data/business';
import { serviceImages } from '../data/images';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { fadeUpVariant } from '../utils/animations';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    const iconClass = 'w-5 h-5 text-[#ECCF8A]';
    switch (id) {
      case 'bridal':
        return <Crown className={iconClass} />;
      case 'engagement':
        return <Sparkles className={iconClass} />;
      case 'traditional':
        return <Sun className={iconClass} />;
      case 'arabic':
        return <Flower2 className={iconClass} />;
      case 'party':
        return <Users className={iconClass} />;
      case 'custom':
        return <Palette className={iconClass} />;
      case 'home-service':
        return <Home className={iconClass} />;
      case 'travel':
        return <Plane className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case 'bridal':
        return serviceImages.bridal;
      case 'engagement':
        return serviceImages.engagement;
      case 'traditional':
        return serviceImages.traditional;
      case 'arabic':
        return serviceImages.arabic;
      case 'party':
        return serviceImages.party;
      case 'custom':
        return serviceImages.modern;
      case 'home-service':
        return serviceImages.home;
      case 'travel':
        return serviceImages.travel;
      default:
        return serviceImages.bridal;
    }
  };

  const handleSelect = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const bookingEl = document.querySelector('#booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#102115] text-[#FAF5EE] relative overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
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
            OUR SERVICES
          </span>
          <OrnamentalDivider scriptText="Services" light className="my-2" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FCFBF7] tracking-tight mt-1 mb-3">
            Beautiful Designs For Every Celebration
          </h2>
          <p className="text-sm sm:text-base text-[#D4C8B5] font-light leading-relaxed">
            From regal bridal compositions to festive guest patterns, explore our complete range of bespoke mehndi services.
          </p>
        </motion.div>

        {/* 8 Premium Service Cards with Framer Motion Stagger & Card Hover */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {SERVICES.map((service: ServiceItem) => {
            const localImageSrc = getServiceImage(service.id);
            return (
              <motion.div
                key={service.id}
                variants={fadeUpVariant}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative bg-[#162B1D] border border-[#C5A059]/25 hover:border-[#ECCF8A] flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Gold Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ECCF8A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                <div>
                  {/* Service Image with Local Image System & Smooth Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0B160E]">
                    <Image
                      src={localImageSrc}
                      alt={service.title}
                      fill
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#162B1D] via-transparent to-black/30 pointer-events-none" />

                    {/* Service Number Tag */}
                    <span className="absolute top-3 left-3 bg-[#0B160E]/80 backdrop-blur-xs border border-[#C5A059]/40 text-[#ECCF8A] font-serif text-xs px-2.5 py-1 tracking-widest font-semibold z-10">
                      {service.number}
                    </span>

                    {/* Icon Badge with Subtle Movement */}
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#102115]/90 border border-[#C5A059]/50 flex items-center justify-center shadow-lg group-hover:border-[#ECCF8A] group-hover:scale-105 transition-all z-10">
                      {getIcon(service.id)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-[#FCFBF7] group-hover:text-[#ECCF8A] transition-colors leading-snug mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#D4C8B5] font-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-1.5 pt-3 border-t border-[#C5A059]/15">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-[11px] text-[#A8B5A9] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions: Book & WhatsApp Enquiry */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#C5A059]/15 mt-2">
                  <button
                    type="button"
                    onClick={() => handleSelect(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#ECCF8A] hover:text-white transition-colors cursor-pointer group/btn"
                  >
                    <span>SELECT &amp; BOOK</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={createServiceEnquiryUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#102115] border border-[#C5A059]/40 hover:border-[#25D366] text-[#A8B5A9] hover:text-[#25D366] flex items-center justify-center transition-colors"
                    title={`Enquire ${service.title} on WhatsApp`}
                    aria-label={`Enquire ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 bg-[#0B160E] border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#FCFBF7] mb-1">
              Need a Custom Mehndi Package for Your Wedding?
            </h4>
            <p className="text-xs sm:text-sm text-[#D4C8B5] font-light">
              We offer combined bridal + guest packages tailored for sangeet nights, destination weddings, and full bridal parties.
            </p>
          </div>

          <motion.a
            href="#booking"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold bg-[#C5A059] text-[#0E1E12] hover:bg-[#D4AF37] transition-all shrink-0 cursor-pointer"
          >
            DISCUSS CUSTOM PACKAGE
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
