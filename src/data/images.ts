/**
 * Central Image Configuration for RK MEHNDI ARTIST
 * 
 * LOCAL IMAGE SYSTEM:
 * All production images are stored locally inside the project's /public/images/ folder.
 * Paths start with "/images/". No external stock URLs are used.
 */

export interface HeroSlide {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero/hero-1.jpg",
    eyebrow: "10+ YEARS OF EXPERIENCE",
    title: "Mehndi That Tells Your Story",
    description:
      "Exquisite bridal mehndi artistry crafted with tradition, precision and love.",
  },
  {
    id: 2,
    image: "/images/hero/hero-2.jpg",
    eyebrow: "BRIDAL MEHNDI",
    title: "Intricate Details. Beautiful Memories.",
    description:
      "Detailed bridal artistry created especially for your special day.",
  },
  {
    id: 3,
    image: "/images/hero/hero-3.jpg",
    eyebrow: "TRADITIONAL & MODERN",
    title: "Tradition With A Modern Touch",
    description:
      "Elegant mehndi styles created for every celebration.",
  },
  {
    id: 4,
    image: "/images/hero/hero-4.jpg",
    eyebrow: "NOIDA • DELHI NCR",
    title: "Beautiful Mehndi, Wherever You Celebrate",
    description:
      "Home service and selected travel bookings available.",
  },
  {
    id: 5,
    image: "/images/hero/hero-5.jpg",
    eyebrow: "YOUR SPECIAL DAY",
    title: "Make Every Detail Memorable",
    description:
      "Let's create mehndi that becomes part of your wedding story.",
  },
];

export interface GalleryImage {
  id: number;
  image: string;
  category: "Bridal" | "Traditional" | "Arabic" | "Modern";
  categoryLabel: string;
  title: string;
  aspect: "tall" | "square" | "wide";
  description: string;
  tags: string[];
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: "/images/gallery/bridal-1.jpg",
    category: "Bridal",
    categoryLabel: "Bridal Hands",
    title: "Royal Dulhan Forearms & Palms",
    aspect: "tall",
    description: "Full-length traditional bridal composition with custom peacock motifs, lotus domes, and dense royal jaal.",
    tags: ["Peacock Motif", "Lotus Domes", "Dulhan Palms", "Full Forearms"],
  },
  {
    id: 2,
    image: "/images/gallery/bridal-2.jpg",
    category: "Bridal",
    categoryLabel: "Bridal Hands",
    title: "Dual Bridal Palms with Wedding Chooda",
    aspect: "square",
    description: "Auspicious full-palm bridal mehndi featuring symmetric mandalas, coordinated with wedding chooda and gold rings.",
    tags: ["Wedding Chooda", "Gold Rings", "Symmetric Mandalas", "Dark Henna"],
  },
  {
    id: 3,
    image: "/images/gallery/bridal-3.jpg",
    category: "Bridal",
    categoryLabel: "Bridal Hands",
    title: "Detailed Bridal Backhand Elegance",
    aspect: "tall",
    description: "Symmetric backhand bridal detailing highlighting rings and bridal wristwear with Mughal archways.",
    tags: ["Haathphool Jaal", "Finger Rings", "Bridal Bangles", "Mughal Arch"],
  },
  {
    id: 4,
    image: "/images/gallery/bridal-4.jpg",
    category: "Bridal",
    categoryLabel: "Bridal Hands",
    title: "Dulhan Shyness & Henna Veil Frame",
    aspect: "tall",
    description: "Classic Indian bridal pose with henna hands framing the face behind sheer golden zari dupatta.",
    tags: ["Bridal Portrait", "Zari Veil", "Storytelling", "Wedding Elegance"],
  },
  {
    id: 5,
    image: "/images/gallery/bridal-5.jpg",
    category: "Bridal",
    categoryLabel: "Bridal Hands",
    title: "Artist Cone Needlework on Forearm",
    aspect: "square",
    description: "Macro detail showing freehand henna cone precision, micro-dots, and concentric shaded borders on the arm.",
    tags: ["Live Application", "Henna Cone", "Needlework Jaal", "Micro Detailing"],
  },
  {
    id: 6,
    image: "/images/gallery/traditional-1.jpg",
    category: "Traditional",
    categoryLabel: "Traditional Motifs",
    title: "Heritage Rajasthani Motifs",
    aspect: "tall",
    description: "Classic Indian motifs, intricate paisleys, kalash symbols, and dense shaded fills.",
    tags: ["Rajasthani", "Paisley Jaal", "Heritage Art", "Deep Stain"],
  },
  {
    id: 7,
    image: "/images/gallery/traditional-2.jpg",
    category: "Traditional",
    categoryLabel: "Traditional Motifs",
    title: "Festive Pre-Wedding Jaal",
    aspect: "square",
    description: "Dense traditional ankle cuffs and celebratory sangeet hand henna for family celebrations.",
    tags: ["Celebration", "Sangeet Night", "Family Henna", "Festive Art"],
  },
  {
    id: 8,
    image: "/images/gallery/arabic-1.jpg",
    category: "Arabic",
    categoryLabel: "Arabic Floral",
    title: "Flowing Arabic Floral Trail",
    aspect: "tall",
    description: "Graceful diagonal Arabic flow with bold shaded flower petals and elegant negative space balance.",
    tags: ["Diagonal Flow", "Shaded Rose", "Negative Space", "Botanical Trail"],
  },
  {
    id: 9,
    image: "/images/gallery/arabic-2.jpg",
    category: "Arabic",
    categoryLabel: "Arabic Floral",
    title: "Modern Arabic Wrist Cuff & Shaded Leaves",
    aspect: "square",
    description: "Fluid rose blooms and botanical shading trailing seamlessly across palm and forearm.",
    tags: ["Arabic Floral", "Botanical Shading", "Fluid Trail", "Modern Bride"],
  },
];

export const aboutImages = {
  about1: "/images/about/about-1.jpg",
  about2: "/images/about/about-2.jpg",
};

export const serviceImages = {
  bridal: "/images/services/bridal.jpg",
  engagement: "/images/services/engagement.jpg",
  traditional: "/images/services/traditional.jpg",
  arabic: "/images/services/arabic.jpg",
  modern: "/images/services/modern.jpg",
  party: "/images/services/party.jpg",
  home: "/images/services/home-service.jpg",
  travel: "/images/services/travel.jpg",
};

export const instagramImages = [
  { id: 1, image: "/images/instagram/instagram-1.jpg", caption: "Intricate bridal henna palms for our beautiful weekend bride ✨ #RKMehndiArtist" },
  { id: 2, image: "/images/instagram/instagram-2.jpg", caption: "Delicate floral jaal detailing and wrist cuffs in progress 🌿 #NoidaMehndi" },
  { id: 3, image: "/images/instagram/instagram-3.jpg", caption: "Classic Indian motifs crafted with love and patience 🌸 #BridalMehndiNoida" },
  { id: 4, image: "/images/instagram/instagram-4.jpg", caption: "Modern Arabic flow for an elegant engagement ceremony 💫 #DelhiNCRMehndi" },
  { id: 5, image: "/images/instagram/instagram-5.jpg", caption: "Pure henna artistry in every stroke. Booking open for wedding season 🤎" },
  { id: 6, image: "/images/instagram/instagram-6.jpg", caption: "Royal backhand bridal symmetry that stays rich and dark 🪷 #BridalArtist" },
];

export const videoImages = [
  { id: 1, image: "/images/videos/video-1.jpg", title: "Bridal Mehndi Application Process", duration: "3:45" },
  { id: 2, image: "/images/videos/video-2.jpg", title: "Fine Jaal & Peacock Detailing", duration: "2:15" },
  { id: 3, image: "/images/videos/video-3.jpg", title: "Arabic Floral Trail Live Demo", duration: "1:50" },
];
