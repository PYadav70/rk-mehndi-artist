import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C5A059] via-[#ECCF8A] to-[#C5A059] origin-left z-[100] pointer-events-none shadow-[0_0_8px_rgba(236,207,138,0.5)]"
    />
  );
};
