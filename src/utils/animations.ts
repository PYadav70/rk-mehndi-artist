import { Variants } from 'framer-motion';

// Luxury easing curve specified in brief
export const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Staggered Container
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Standard Section Scroll Reveal
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    },
  },
};

// Subtle Image Scale & Reveal
export const imageRevealVariant: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

// Hero Content Transition
export const heroTextVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// CTA Button Hover/Tap
export const buttonInteraction = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  tap: {
    scale: 0.97,
    transition: { duration: 0.1 },
  },
};

// Card Hover
export const cardHoverVariant = {
  initial: { y: 0 },
  hover: {
    y: -5,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};
