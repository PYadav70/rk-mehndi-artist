import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  MessageCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, GalleryImage } from '../data/images';
import { BUSINESS, createDesignEnquiryUrl } from '../data/business';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { fadeUpVariant, LUXURY_EASE } from '../utils/animations';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'ALL DESIGNS' },
    { key: 'Bridal', label: 'BRIDAL HANDS' },
    { key: 'Traditional', label: 'TRADITIONAL' },
    { key: 'Arabic', label: 'ARABIC FLORAL' },
  ];

  const filteredItems = galleryImages.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem: GalleryImage | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#102115] text-[#FAF5EE] relative overflow-hidden">
      {/* Background Subtle Henna Texture */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#ECCF8A] block">
            BRIDAL PORTFOLIO
          </span>
          <OrnamentalDivider scriptText="Artistry" light className="my-2" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FCFBF7] tracking-tight mt-1 mb-3">
            Intricate Details In Every Stroke
          </h2>
          <p className="text-sm sm:text-base text-[#D4C8B5] font-light leading-relaxed">
            Curated photography of bespoke bridal hands, delicate backhand jaals, royal feet henna, and authentic wedding artistry.
          </p>
        </motion.div>

        {/* Category Filtering Tabs */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10" 
          role="tablist" 
          aria-label="Gallery Categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeTab === cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 border cursor-pointer ${
                activeTab === cat.key
                  ? 'bg-[#C5A059] text-[#0E1E12] border-[#ECCF8A] shadow-lg font-semibold'
                  : 'bg-[#162B1D] text-[#D8CFBF] border-[#C5A059]/25 hover:border-[#ECCF8A] hover:text-[#FCFBF7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry / Editorial Grid with Framer Motion Stagger */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item: GalleryImage, idx: number) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className="group relative overflow-hidden bg-[#0B160E] cursor-pointer border border-[#C5A059]/30 hover:border-[#ECCF8A] transition-all duration-500 shadow-xl aspect-[4/5]"
              >
                {/* Local Image with zoom */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Category Pill */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/75 backdrop-blur-xs text-[10px] text-[#ECCF8A] tracking-wider uppercase border border-[#C5A059]/40">
                  {item.categoryLabel}
                </div>

                {/* Hover Overlay with "VIEW DESIGN" Arrow Reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B160E]/95 via-[#0B160E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#ECCF8A] font-semibold">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#ECCF8A] border border-[#C5A059]/50">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#FCFBF7] leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-[#D4C8B5] font-light mt-1 line-clamp-2">
                    {item.description}
                  </p>

                  {/* View Design Action on Hover */}
                  <div className="mt-4 pt-3 border-t border-[#C5A059]/25 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#ECCF8A] flex items-center gap-1.5 group-hover:text-white transition-colors">
                      <span>VIEW DESIGN</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] text-[#A8B5A9]">Tap for fullscreen</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-[#A8B5A9] tracking-wider font-light">
          <span>Click any design to view full details in high resolution • Custom designs available</span>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-pointer"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close Button */}
            <motion.button
              type="button"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#FAF5EE] hover:text-[#ECCF8A] p-2 bg-[#162B1D] border border-[#C5A059]/50 rounded-full z-50 transition-colors cursor-pointer shadow-xl"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Navigation - Previous */}
            <motion.button
              type="button"
              onClick={prevLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-[#FAF5EE] hover:text-[#ECCF8A] p-2.5 sm:p-3 bg-[#162B1D] border border-[#C5A059]/50 rounded-full z-50 transition-colors cursor-pointer shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Navigation - Next */}
            <motion.button
              type="button"
              onClick={nextLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-[#FAF5EE] hover:text-[#ECCF8A] p-2.5 sm:p-3 bg-[#162B1D] border border-[#C5A059]/50 rounded-full z-50 transition-colors cursor-pointer shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Lightbox Content Container with Scale Animation */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              className="max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center relative cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[65vh] w-full max-w-lg aspect-[4/5] overflow-hidden border border-[#C5A059]/50 shadow-2xl bg-[#0B160E] mx-auto">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Caption & Actions */}
              <div className="mt-4 text-center max-w-2xl px-4 w-full">
                <div className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest text-[#ECCF8A] font-medium mb-1">
                  <span>{currentItem.categoryLabel}</span>
                  <span>•</span>
                  <span>{lightboxIndex! + 1} of {filteredItems.length}</span>
                </div>
                
                <h3 className="font-serif text-lg sm:text-2xl font-semibold text-[#FCFBF7]">
                  {currentItem.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#D4C8B5] font-light mt-1 max-w-xl mx-auto">
                  {currentItem.description}
                </p>

                {/* Direct Action: Inquire on WhatsApp */}
                <div className="mt-4 flex items-center justify-center">
                  <motion.a
                    href={createDesignEnquiryUrl(currentItem.title, currentItem.categoryLabel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire This Design on WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
