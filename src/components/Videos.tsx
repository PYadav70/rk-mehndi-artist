import React, { useState } from 'react';
import { Play, X, Film, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { VIDEOS, VideoItem, BUSINESS } from '../data/business';
import { videoImages } from '../data/images';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { fadeUpVariant, LUXURY_EASE } from '../utils/animations';

export const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const getVideoThumbnail = (idx: number) => {
    if (idx < videoImages.length) {
      return videoImages[idx].image;
    }
    return videoImages[0].image;
  };

  return (
    <section id="videos" className="py-20 md:py-28 bg-[#FCFBF7] text-[#1E1510] relative overflow-hidden">
      {/* Background Subtle Henna Texture */}
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
          <div className="inline-flex items-center gap-2 mb-1 text-[#8C6A24]">
            <Film className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold">
              IN MOTION &amp; DETAIL
            </span>
          </div>

          <OrnamentalDivider scriptText="Videos" className="my-2" />

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0E1E12] tracking-tight mt-1 mb-3">
            Watch The Art Come To Life
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3F] font-light leading-relaxed">
            Experience the steady rhythm, fine needlework, and graceful freehand precision behind our signature bridal henna.
          </p>
        </motion.div>

        {/* Video Cards Grid with Local Image System & Framer Motion Stagger */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VIDEOS.map((video: VideoItem, idx: number) => {
            const thumbnailSrc = getVideoThumbnail(idx);
            return (
              <motion.div
                key={video.id}
                variants={fadeUpVariant}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={() => openVideo(video)}
                className="group bg-white border border-[#C5A059]/30 hover:border-[#8C6A24] overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail Container with Play Overlay & Local Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1E12]">
                    <Image
                      src={thumbnailSrc}
                      alt={video.title}
                      fill
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors z-10" />

                    {/* Play Button Icon */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-12 h-12 rounded-full bg-[#C5A059] group-hover:bg-[#D4AF37] text-[#0E1E12] flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300 pl-0.5">
                        <Play className="w-5 h-5 fill-current" />
                      </div>
                    </div>

                    {/* Video Duration Tag */}
                    <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] px-2 py-0.5 font-mono font-medium rounded-xs z-20">
                      {video.duration}
                    </span>

                    {/* Category Tag */}
                    <span className="absolute top-2.5 left-2.5 bg-[#0E1E12]/80 border border-[#C5A059]/40 text-[#ECCF8A] text-[10px] tracking-wider uppercase px-2 py-0.5 font-medium z-20">
                      {video.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-base font-semibold text-[#0E1E12] group-hover:text-[#8C6A24] transition-colors mb-2 leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs text-[#5C4A3F] font-light leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="px-5 pb-5 pt-2 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#8C6A24] font-medium tracking-wider uppercase">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Watch Video</span>
                  </span>
                  <span className="text-[#0E1E12] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Video Modal Player with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-pointer"
            onClick={closeVideo}
            role="dialog"
            aria-modal="true"
            aria-label="Video Player"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              className="relative w-full max-w-4xl bg-[#0E1E12] border border-[#C5A059]/40 shadow-2xl overflow-hidden cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#C5A059]/20">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#ECCF8A] font-medium block">
                    {selectedVideo.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#FCFBF7]">
                    {selectedVideo.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeVideo}
                  className="p-1.5 rounded-full text-[#E8DFD1] hover:text-[#ECCF8A] hover:bg-[#162B1D] transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube / Video Container */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={selectedVideo.youtubeUrl}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="p-6 bg-[#0E1E12] text-xs text-[#D4C8B5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="max-w-xl font-light">
                  {selectedVideo.description}
                </p>

                <a
                  href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(`Hi RK Mehndi Artist, I watched your video "${selectedVideo.title}" and would like to inquire about booking.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#C5A059] text-[#0E1E12] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-colors shrink-0"
                >
                  Book This Design
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
