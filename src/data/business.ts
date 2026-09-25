/**
 * Central Business Configuration for RK MEHNDI ARTIST
 * 
 * Update this single file to change business details, contact information,
 * photography assets, services, video items, testimonials, and FAQ content.
 */

// Core Business & Brand Information
export const BUSINESS = {
  name: 'RK Mehndi Artist',
  category: 'Bridal Mehndi Artist',
  tagline: 'Bridal Mehndi Artistry • Noida • Delhi NCR',
  heroHeading: 'Mehndi That Tells Your Story',
  heroSubline: 'Exquisite bridal mehndi artistry crafted with tradition, precision and love.',
  heroDescription: 'Bridal and traditional mehndi artistry across Noida, Delhi NCR and selected travel destinations.',
  experienceYears: '10+',
  experienceLabel: '10+ YEARS OF EXPERIENCE',
  speciality: 'Bridal Mehndi Specialist',
  
  phone: '+919311920110',
  phoneDisplay: '+91 93119 20110',
  email: 'rkmehandinoida@gmail.com', // Replaceable email placeholder
  emailDisplay: 'rkmehandinoida@gmail.com',
  
  address: {
    line1: 'Sector 25, Jalvayu Vihar',
    city: 'Noida',
    state: 'Uttar Pradesh',
    pincode: '201301',
    full: 'Sector 25, Jalvayu Vihar, Noida, Uttar Pradesh 201301',
    landmark: 'Near Jalvayu Vihar Market, Sector 25',
  },
  
  serviceAreas: ['Noida', 'Greater Noida', 'Delhi', 'Delhi NCR', 'Travel Bookings Available'],
  serviceAreasString: 'Noida • Greater Noida • Delhi • Delhi NCR • Travel Available',
  
  instagramHandle: '@rkmehandinoida',
  instagramUrl: 'https://www.instagram.com/rkmehandinoida/',
  facebookUrl: 'https://www.facebook.com/rkmehandinoida', // Replaceable
  
  whatsappNumber: '919311920110',
  defaultWhatsappMessage: 'Hi RK Mehndi Artist, I would like to enquire about your mehndi services.',

  // Embeddable Google Maps URL for Sector 25, Jalvayu Vihar, Noida
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Sector%2025%2C%20Jalvayu%20Vihar%2C%20Noida%2C%20Uttar%20Pradesh%20201301&t=&z=14&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Sector+25+Jalvayu+Vihar+Noida+Uttar+Pradesh+201301',
};

// Social Links Configuration
export const SOCIAL_LINKS = [
  { name: 'Instagram', handle: '@rkmehandinoida', url: BUSINESS.instagramUrl },
  { name: 'WhatsApp', handle: '+91 93119 20110', url: `https://wa.me/${BUSINESS.whatsappNumber}` },
  { name: 'Facebook', handle: 'RK Mehndi Artist', url: BUSINESS.facebookUrl },
];

// Reusable & Replaceable Visual Asset Variables
export const bridalHeroImage = 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1920&q=85';
export const bridalAboutImage = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85';
export const bridalExperienceImage = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1400&q=85';
export const bridalFeatureImage = 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1920&q=85';
export const finalCtaImage = 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=1920&q=85';

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtext: string;
}

// Hero Carousel Images (Auto-rotates every 2 seconds)
export const HERO_CAROUSEL_IMAGES: HeroSlide[] = [
  {
    id: 'hero-1',
    image: bridalHeroImage,
    title: 'Exquisite Bridal Henna',
    subtext: 'Intricate full-hand & forearm royal jaal',
  },
  {
    id: 'hero-2',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85',
    title: 'Heritage Backhand Filigree',
    subtext: 'Delicate wrist cuffs and haathphool patterns',
  },
  {
    id: 'hero-3',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=85',
    title: 'Dulhan Wedding Chooda & Mandalas',
    subtext: 'Deep, rich natural stain and symmetric motifs',
  },
  {
    id: 'hero-4',
    image: bridalFeatureImage,
    title: 'Live Cone Precision Artistry',
    subtext: 'Handcrafted natural henna and micro-detail jaal',
  },
  {
    id: 'hero-5',
    image: finalCtaImage,
    title: 'Traditional Feet & Anklet Art',
    subtext: 'Graceful Rajasthani & Marwari bridal designs',
  },
  {
    id: 'hero-6',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1920&q=85',
    title: 'Cinematic Bridal Portraits',
    subtext: 'Mehndi that tells your love story',
  },
];

export const serviceImageBridal = 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80';
export const serviceImageEngagement = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80';
export const serviceImageTraditional = 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80';
export const serviceImageArabic = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80';
export const serviceImageParty = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80';
export const serviceImageCustom = 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80';
export const serviceImageHome = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80';
export const serviceImageTravel = 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80';

// Services Configuration (8 Dedicated Offerings)
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'bridal',
    number: '01',
    title: 'BRIDAL MEHNDI',
    description: 'Intricate full-hand and bridal designs crafted specially for your wedding day.',
    image: serviceImageBridal,
    features: ['Full hand & forearm coverage', 'Custom bride & groom motifs', 'Intricate lotus & peacocks', 'Deep, long-lasting natural stain'],
  },
  {
    id: 'engagement',
    number: '02',
    title: 'ENGAGEMENT MEHNDI',
    description: 'Elegant mehndi for your engagement and pre-wedding celebrations.',
    image: serviceImageEngagement,
    features: ['Balanced modern elegance', 'Highlighting rings & jewelry', 'Intricate palm mandalas', 'Delicate wrist cuffs'],
  },
  {
    id: 'traditional',
    number: '03',
    title: 'TRADITIONAL MEHNDI',
    description: 'Timeless Indian patterns inspired by traditional artistry.',
    image: serviceImageTraditional,
    features: ['Authentic Rajasthani motifs', 'Paisleys, dhol & kalash figures', 'Dense shaded fills', 'Timeless cultural heritage'],
  },
  {
    id: 'arabic',
    number: '04',
    title: 'ARABIC MEHNDI',
    description: 'Flowing floral patterns with an elegant contemporary feel.',
    image: serviceImageArabic,
    features: ['Fluid botanical vines', 'Bold outlines with delicate shading', 'Striking negative space', 'Graceful diagonal flow'],
  },
  {
    id: 'party',
    number: '05',
    title: 'PARTY & GUEST MEHNDI',
    description: 'Beautiful designs for bridesmaids, family and wedding guests.',
    image: serviceImageParty,
    features: ['Tailored speed & detailing', 'Coordinated artist team', 'Palm & backhand options', 'Festive wedding vibe'],
  },
  {
    id: 'custom',
    number: '06',
    title: 'CUSTOM DESIGNS',
    description: 'Personalized mehndi created around your story, style and preferences.',
    image: serviceImageCustom,
    features: ['Storytelling portraits & dates', 'Hashtags & initials woven in', 'Personal wedding emblems', 'Collaborative design sketch'],
  },
  {
    id: 'home-service',
    number: '07',
    title: 'HOME SERVICE',
    description: 'Professional mehndi artistry at the comfort of your home.',
    image: serviceImageHome,
    features: ['Punctual artist setup', 'Clean, hygienic work kit', 'Zero travel stress for bride', 'Available across Noida & NCR'],
  },
  {
    id: 'travel',
    number: '08',
    title: 'TRAVEL BOOKINGS',
    description: 'Available for selected events and destinations outside Noida.',
    image: serviceImageTravel,
    features: ['Destination wedding bookings', 'Outstation multi-day events', 'Dedicated bridal availability', 'Advance schedule reserve'],
  },
];

// Featured Bridal & Traditional Gallery Portfolio
export type GalleryCategory = 'all' | 'bridal' | 'backhand' | 'feet' | 'arabic' | 'minimal';

export interface GalleryImageItem {
  id: string;
  src: string;
  fallbackSrc?: string;
  category: 'bridal' | 'backhand' | 'feet' | 'arabic' | 'minimal';
  categoryLabel: string;
  title: string;
  aspect: 'tall' | 'square' | 'wide';
  description: string;
  tags: string[];
}

export const GALLERY_IMAGES: GalleryImageItem[] = [
  {
    id: 'gal-1',
    src: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: bridalHeroImage,
    category: 'bridal',
    categoryLabel: 'Bridal Hands',
    title: 'Royal Dulhan Forearms & Palms',
    aspect: 'tall',
    description: 'Full-length traditional bridal composition with custom peacock motifs, lotus domes, and dense royal jaal.',
    tags: ['Peacock Motif', 'Lotus Domes', 'Dulhan Palms', 'Full Forearms'],
  },
  {
    id: 'gal-2',
    src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: bridalExperienceImage,
    category: 'bridal',
    categoryLabel: 'Bridal Hands',
    title: 'Dual Bridal Palms with Wedding Chooda',
    aspect: 'square',
    description: 'Auspicious full-palm bridal mehndi featuring symmetric mandalas, coordinated with wedding chooda and gold rings.',
    tags: ['Wedding Chooda', 'Gold Rings', 'Symmetric Mandalas', 'Dark Henna'],
  },
  {
    id: 'gal-3',
    src: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: finalCtaImage,
    category: 'feet',
    categoryLabel: 'Feet & Ankles',
    title: 'Bridal Feet Henna with Fresh Rose Petals',
    aspect: 'tall',
    description: 'Intricate bridal feet and ankle mehendi composition resting gracefully on ceremonial fresh red rose petals.',
    tags: ['Payal Anklet', 'Fresh Rose Petals', 'Toe Rings', 'Lotus Feet'],
  },
  {
    id: 'gal-4',
    src: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: serviceImageTraditional,
    category: 'bridal',
    categoryLabel: 'Bridal Hands',
    title: 'Artist Cone Needlework on Forearm',
    aspect: 'tall',
    description: 'Macro detail showing freehand henna cone precision, micro-dots, and concentric shaded borders on the arm.',
    tags: ['Live Application', 'Henna Cone', 'Needlework Jaal', 'Micro Detailing'],
  },
  {
    id: 'gal-5',
    src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: serviceImageArabic,
    category: 'arabic',
    categoryLabel: 'Arabic Floral',
    title: 'Flowing Arabic Floral Trail & Shaded Leaves',
    aspect: 'tall',
    description: 'Graceful diagonal Arabic flow with bold shaded flower petals and elegant negative space balance.',
    tags: ['Diagonal Flow', 'Shaded Rose', 'Negative Space', 'Botanical Trail'],
  },
  {
    id: 'gal-6',
    src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: bridalAboutImage,
    category: 'backhand',
    categoryLabel: 'Backhand & Cuffs',
    title: 'Intricate Backhand Haathphool Jaal',
    aspect: 'square',
    description: 'Heritage bridal arm and backhand pattern featuring Mughal archways, jaal netting, and delicate finger filigree.',
    tags: ['Haathphool Jaal', 'Finger Rings', 'Bridal Bangles', 'Mughal Arch'],
  },
  {
    id: 'gal-7',
    src: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: serviceImageCustom,
    category: 'backhand',
    categoryLabel: 'Backhand & Cuffs',
    title: 'Detailed Wrist Cuff & Finger Filigree',
    aspect: 'square',
    description: 'Handcrafted natural henna cone application demonstrating patience, clean line stability, and symmetry.',
    tags: ['Wrist Bracelet', 'Delicate Rings', 'Geometric Symmetry', 'Natural Henna'],
  },
  {
    id: 'gal-8',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: serviceImageParty,
    category: 'minimal',
    categoryLabel: 'Minimal & Engagement',
    title: 'Festive Engagement Mandala on Palm',
    aspect: 'tall',
    description: 'Clean circular floral mandala with accented fingertips, ideal for pre-wedding ring ceremonies.',
    tags: ['Engagement Mandala', 'Fingertip Caps', 'Minimalist Elegance', 'Pre-Wedding'],
  },
  {
    id: 'gal-9',
    src: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: bridalHeroImage,
    category: 'bridal',
    categoryLabel: 'Bridal Hands',
    title: 'Dulhan Shyness & Henna Veil Frame',
    aspect: 'tall',
    description: 'Classic Indian bridal pose with henna hands framing the face behind sheer golden zari dupatta.',
    tags: ['Bridal Portrait', 'Zari Veil', 'Storytelling', 'Wedding Elegance'],
  },
  {
    id: 'gal-10',
    src: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: serviceImageTraditional,
    category: 'feet',
    categoryLabel: 'Feet & Ankles',
    title: 'Rajasthani Bridal Payal Jaal on Feet',
    aspect: 'square',
    description: 'Dense traditional payal ankle cuffs with shaded lotus pods and toe-ring patterns for the bride.',
    tags: ['Traditional Payal', 'Lotus Feet', 'Heritage Motifs', 'Deep Stain'],
  },
  {
    id: 'gal-11',
    src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: serviceImageArabic,
    category: 'arabic',
    categoryLabel: 'Arabic Floral',
    title: 'Cascading Arabic Vines on Forearm',
    aspect: 'square',
    description: 'Fluid rose blooms and botanical shading trailing seamlessly across palm and forearm.',
    tags: ['Arabic Floral', 'Botanical Shading', 'Fluid Trail', 'Modern Bride'],
  },
  {
    id: 'gal-12',
    src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    fallbackSrc: bridalExperienceImage,
    category: 'minimal',
    categoryLabel: 'Minimal & Engagement',
    title: 'Sangeet Party & Bridesmaid Hand Henna',
    aspect: 'tall',
    description: 'Speedy yet exquisite hand compositions curated for bridesmaid groups and festive wedding guests.',
    tags: ['Bridesmaids', 'Sangeet Night', 'Festive Henna', 'Group Celebrations'],
  },
];

// Videos Section Configuration (Easily replaceable video configuration array)
export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  description: string;
  // Easily replace with real client video URL or YouTube embed code
  youtubeUrl: string;
}

export const VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Bridal Mehndi Application Process',
    category: 'Bridal Mehndi',
    thumbnail: bridalHeroImage,
    duration: '3:45',
    description: 'Step-by-step timelapse of an intricate royal bridal composition from palm outline to wrist cuff.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1', // Client placeholder
  },
  {
    id: 'vid-2',
    title: 'Fine Jaal & Peacock Detailing',
    category: 'Design Process',
    thumbnail: bridalAboutImage,
    duration: '2:15',
    description: 'Close-up camera angle showing steady cone control, micro-dots, and traditional shaded fills.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    id: 'vid-3',
    title: 'Arabic Floral Trail Live Demo',
    category: 'Arabic Mehndi',
    thumbnail: serviceImageArabic,
    duration: '1:50',
    description: 'Graceful freehand botanical vines and bold rose petals created for an engagement ceremony.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
  {
    id: 'vid-4',
    title: 'Henna Aftercare & Deep Stain Secrets',
    category: 'Behind The Scenes',
    thumbnail: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=1200&q=85',
    duration: '2:40',
    description: 'Pro-tips on clove steam, natural balm application, and avoiding water to achieve a dark, royal mahogany stain.',
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  },
];

// Testimonials Configuration (Editable Placeholders for Real Client Reviews)
export interface TestimonialItem {
  id: string;
  quote: string;
  note: string;
  clientType: string;
  location: string;
  event: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Add verified bridal testimonial here.',
    note: 'Replace with verified bride review from Noida wedding booking.',
    clientType: 'Bridal Client',
    location: 'Sector 50, Noida',
    event: 'Wedding Mehndi',
  },
  {
    id: 'test-2',
    quote: 'Add verified client review here.',
    note: 'Replace with verified client review from Delhi NCR wedding celebration.',
    clientType: 'Engagement Client',
    location: 'Greater Noida',
    event: 'Engagement Ceremony',
  },
  {
    id: 'test-3',
    quote: 'Add verified bridal testimonial here.',
    note: 'Replace with verified family / guest mehndi package feedback.',
    clientType: 'Family Wedding Client',
    location: 'Delhi NCR',
    event: 'Sangeet & Bridal Mehndi',
  },
];

// Why Choose Us Feature Points
export const WHY_CHOOSE_US = {
  primary: [
    {
      number: '01',
      title: '10+ Years Experience',
      desc: 'Years of dedicated mehndi artistry across hundreds of wedding celebrations.',
    },
    {
      number: '02',
      title: 'Bridal Expertise',
      desc: 'Specialized attention to detailed bridal designs that photograph gorgeously.',
    },
    {
      number: '03',
      title: 'Home Service',
      desc: 'Professional mehndi artistry at your doorstep for complete bridal comfort.',
    },
    {
      number: '04',
      title: 'Travel Available',
      desc: 'Open to selected bookings outside Noida and destination weddings across India.',
    },
  ],
  additional: [
    'Traditional & Modern Styles',
    'Detailed & Intricate Line Work',
    'Personalized Couple Motifs',
    'Extensive Delhi NCR Coverage',
    'Pure Natural Chemical-Free Henna',
    'Punctual & Reliable Scheduling',
  ],
};

// 3-Step Bridal Experience
export const BRIDAL_EXPERIENCE_STEPS = [
  {
    step: '01',
    title: 'SHARE YOUR DATE',
    description: 'Tell us about your wedding or event date, venue location, and bridal requirements.',
  },
  {
    step: '02',
    title: 'CHOOSE YOUR STYLE',
    description: 'Discuss your preferred mehndi style and design — from royal Rajasthani to modern Arabic.',
  },
  {
    step: '03',
    title: 'RESERVE YOUR DATE',
    description: 'Confirm your booking and get ready for your special day with our peaceful home service.',
  },
];

// FAQ Configuration (The 8 specific questions requested)
export const FAQS = [
  {
    id: 'faq-1',
    question: 'Do you provide home service?',
    answer: 'Yes, we provide comfortable, doorstep home service across Noida, Greater Noida, and selected areas of Delhi NCR. Our artist comes equipped with all necessary materials so you can relax at home.',
  },
  {
    id: 'faq-2',
    question: 'Do you travel outside Noida?',
    answer: 'Yes! In addition to Noida and Delhi NCR, we accept travel bookings for destination weddings and outstation celebrations across India. Travel details and schedules can be discussed on WhatsApp.',
  },
  {
    id: 'faq-3',
    question: 'How early should I book bridal mehndi?',
    answer: 'Wedding dates fill up quickly during peak wedding and festive seasons. We recommend reserving your bridal slot at least 2 to 4 months in advance to ensure availability on your preferred date.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide mehndi for wedding guests?',
    answer: 'Yes, we offer guest and family mehndi services for sangeet nights, bridesmaids, and wedding guests. Depending on the size of your gathering, we can coordinate artist teams to accommodate everyone comfortably.',
  },
  {
    id: 'faq-5',
    question: 'Can I request a custom design?',
    answer: 'Absolutely. We specialize in bespoke bridal artwork. You can share reference photos, incorporate your wedding hashtag, bride & groom portraits, sacred verses, or personalized motifs into the composition.',
  },
  {
    id: 'faq-6',
    question: 'Do you cover Delhi NCR?',
    answer: 'Yes, our core service area includes Noida, Greater Noida, Ghaziabad, East/South Delhi, and other parts of Delhi NCR. Please specify your exact sector or neighborhood when enquiring.',
  },
  {
    id: 'faq-7',
    question: 'How can I check availability?',
    answer: 'The fastest way to check availability is by clicking our WhatsApp booking button or sending us a message with your event date, location, and service requirement. We respond promptly with available time slots.',
  },
  {
    id: 'faq-8',
    question: 'How can I book?',
    answer: 'Simply fill out the booking form on this website or message us directly on WhatsApp at +91 93119 20110. Once we confirm date availability and discuss your design preferences, your booking will be confirmed.',
  },
];

// Instagram Grid Photos
export const INSTAGRAM_PHOTOS = [
  {
    id: 'insta-1',
    image: bridalHeroImage,
    caption: 'Intricate bridal henna palms for our beautiful weekend bride ✨ #RKMehndiArtist',
  },
  {
    id: 'insta-2',
    image: bridalAboutImage,
    caption: 'Delicate floral jaal detailing and wrist cuffs in progress 🌿 #NoidaMehndi',
  },
  {
    id: 'insta-3',
    image: serviceImageTraditional,
    caption: 'Classic Indian motifs crafted with love and patience 🌸 #BridalMehndiNoida',
  },
  {
    id: 'insta-4',
    image: serviceImageArabic,
    caption: 'Modern Arabic flow for an elegant engagement ceremony 💫 #DelhiNCRMehndi',
  },
  {
    id: 'insta-5',
    image: serviceImageCustom,
    caption: 'Pure henna artistry in every stroke. Booking open for wedding season 🤎',
  },
  {
    id: 'insta-6',
    image: bridalExperienceImage,
    caption: 'Royal backhand bridal symmetry that stays rich and dark 🪷 #BridalArtist',
  },
];

// Helper to construct WhatsApp booking URL with exact fields
export function createWhatsAppBookingUrl(formData: {
  fullName: string;
  whatsappNumber: string;
  eventDate: string;
  eventType: string;
  eventLocation: string;
  numberOfPeople: string;
  serviceRequired: string;
  message: string;
}): string {
  const messageLines = [
    'Hello RK Mehndi Artist,',
    '',
    'I would like to enquire about booking.',
    '',
    `Name: ${formData.fullName.trim() || 'Not specified'}`,
    `Phone: ${formData.whatsappNumber.trim() || 'Not specified'}`,
    `Event Date: ${formData.eventDate.trim() || 'Not specified'}`,
    `Event Type: ${formData.eventType.trim() || 'Not specified'}`,
    `Location: ${formData.eventLocation.trim() || 'Not specified'}`,
    `Number of People: ${formData.numberOfPeople.trim() || 'Not specified'}`,
    `Service: ${formData.serviceRequired.trim() || 'Not specified'}`,
    `Message: ${formData.message.trim() || 'None'}`,
  ];

  const fullText = messageLines.join('\n');
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}

// Quick WhatsApp URL for a service enquiry
export function createServiceEnquiryUrl(serviceTitle: string): string {
  const text = `Hello RK Mehndi Artist, I would like to enquire about your "${serviceTitle}" service. Please share details and availability.`;
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

// Quick WhatsApp URL for an exact design enquiry from the gallery
export function createDesignEnquiryUrl(designTitle: string, designCategory: string): string {
  const text = `Hello RK Mehndi Artist, I love this design from your portfolio: "${designTitle}" (${designCategory}). Could you please share availability and pricing for this design?`;
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

