import React from 'react';
import { Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS } from '../data/business';
import { instagramImages } from '../data/images';
import { Image } from './Image';
import { OrnamentalDivider } from './OrnamentalDivider';
import { fadeUpVariant } from '../utils/animations';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#102115] text-[#FAF5EE] relative overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-2 text-[#ECCF8A]">
            <Instagram className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold">
              BRIDAL DIARIES
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FCFBF7] tracking-tight mt-1 mb-2">
            Follow Our Latest Work
          </h2>
          <OrnamentalDivider light className="my-3" />
          
          <p className="text-base text-[#ECCF8A] font-serif tracking-wider mb-2">
            {BUSINESS.instagramHandle}
          </p>

          <p className="text-xs sm:text-sm text-[#D4C8B5] font-light max-w-xl mx-auto mb-6">
            Explore daily wedding updates, fresh bridal stains, behind-the-scenes cone work, and client stories.
          </p>

          <div>
            <motion.a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white hover:opacity-95 text-xs uppercase tracking-widest font-semibold transition-opacity shadow-lg cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* 6-Image Instagram-Style Grid with Local Image System & Framer Motion Hover */}
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {instagramImages.map((post) => (
            <motion.a
              key={post.id}
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUpVariant}
              whileHover={{ y: -3 }}
              className="group relative aspect-square overflow-hidden bg-[#0B160E] border border-[#C5A059]/30 hover:border-[#ECCF8A] transition-all block cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center z-10">
                <Instagram className="w-5 h-5 text-[#ECCF8A] mb-1.5" />
                <p className="text-[10px] text-[#FAF5EE] font-light line-clamp-3 leading-snug">
                  {post.caption}
                </p>
                <span className="text-[9px] text-[#ECCF8A] uppercase tracking-widest mt-2 flex items-center gap-1">
                  <Heart className="w-2.5 h-2.5 fill-[#ECCF8A]" />
                  <span>View Post</span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
