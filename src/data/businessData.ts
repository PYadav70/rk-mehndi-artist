/**
 * Central Configuration for RK MEHNDI ARTIST
 * 
 * Edit this file to update contact details, images, services,
 * testimonials, and FAQ items without touching component code.
 */

// Core Business Information
export const BUSINESS_INFO = {
  name: 'RK Mehndi Artist',
  tagline: 'Bridal Mehndi Artistry, Crafted With Tradition & Detail',
  shortBio: '10+ years of experience creating intricate bridal and traditional mehndi designs across Noida, Delhi NCR and beyond.',
  experienceYears: '10+',
  experienceLabel: '10+ Years Experience',
  speciality: 'Bridal Mehndi Specialist',
  phone: '+919311920110',
  phoneDisplay: '+91 93119 20110',
  address: {
    line1: 'Sector 25, Jalvayu Vihar',
    city: 'Noida',
    state: 'Uttar Pradesh',
    pincode: '201301',
    full: 'Sector 25, Jalvayu Vihar, Noida, Uttar Pradesh 201301',
  },
  serviceAreas: 'Noida, Greater Noida, Delhi NCR & Travel Bookings',
  serviceAreasList: ['Noida', 'Greater Noida', 'Delhi NCR', 'Destination Weddings & Travel'],
  instagramHandle: '@rkmehandinoida',
  instagramUrl: 'https://www.instagram.com/rkmehandinoida/',
  whatsappNumber: '919311920110',
  defaultWhatsappMessage: 'Hi RK Mehndi Artist, I would like to enquire about your mehndi services.',
  // Verified Google Maps embed search query URL (safe, keyless embed)
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Sector%2025%2C%20Jalvayu%20Vihar%2C%20Noida%2C%20Uttar%20Pradesh%20201301&t=&z=14&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Sector+25+Jalvayu+Vihar+Noida+Uttar+Pradesh+201301',
};

// Replaceable Image Assets Configuration
// Easily replace any URL here with the client's actual photography
export const bridalImage1 = 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85';
export const bridalImage2 = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85';
export const bridalImage3 = 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85';
export const traditionalImage1 = 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=85';
export const traditionalImage2 = 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=1200&q=85';
export const arabicImage1 = 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85';
export const modernImage1 = 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85';
export const closeupImage1 = 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=85';
export const galleryImage1 = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85';
export const galleryImage2 = 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=85';

export const SITE_IMAGES = {
  heroBg: bridalImage1,
  aboutImage: bridalImage2,
  bridalExperience: bridalImage3,
  finalCtaBg: traditionalImage1,
};

// Trust Stats
export const STATS_DATA = [
  {
    value: '10+',
    label: 'Years Experience',
    sub: 'Proven artistry in NCR',
  },
  {
    value: 'Bridal',
    label: 'Mehndi Specialist',
    sub: 'Exquisite custom patterns',
  },
  {
    value: 'NCR',
    label: 'Service Area',
    sub: 'Noida, Greater Noida & Delhi',
  },
  {
    value: 'Travel',
    label: 'Available',
    sub: 'For destination weddings',
  },
];

// Services Data (8 Services specified in client brief)
export interface MehndiService {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: 'crown' | 'sparkles' | 'sun' | 'flower' | 'users' | 'palette' | 'home' | 'plane';
}

export const SERVICES_DATA: MehndiService[] = [
  {
    id: 'bridal-mehndi',
    number: '01',
    title: 'Bridal Mehndi',
    description: 'Intricate bridal designs crafted specially for your wedding day.',
    features: ['Full hand & forearm coverage', 'Custom bride & groom motifs', 'Intricate lotus & peacocks', 'Deep, long-lasting color blend'],
    icon: 'crown',
  },
  {
    id: 'engagement-mehndi',
    number: '02',
    title: 'Engagement Mehndi',
    description: 'Elegant designs for your engagement and pre-wedding celebrations.',
    features: ['Balanced modern elegance', 'Wrist to palm highlights', 'Complements rings & jewelry', 'Fast application time'],
    icon: 'sparkles',
  },
  {
    id: 'traditional-mehndi',
    number: '03',
    title: 'Traditional Mehndi',
    description: 'Classic Indian motifs and timeless traditional patterns.',
    features: ['Authentic Rajasthani motifs', 'Paisley, dhol & kalash figures', 'Dense shaded fills', 'Timeless cultural heritage'],
    icon: 'sun',
  },
  {
    id: 'arabic-mehndi',
    number: '04',
    title: 'Arabic Mehndi',
    description: 'Elegant floral patterns with a modern Arabic touch.',
    features: ['Fluid botanical vines', 'Bold outlines with delicate shading', 'Striking negative space', 'Graceful diagonal flow'],
    icon: 'flower',
  },
  {
    id: 'party-guest-mehndi',
    number: '05',
    title: 'Party & Guest Mehndi',
    description: 'Beautiful mehndi experiences for bridesmaids, family and guests.',
    features: ['Tailored speed & detailing', 'Coordinated artist team', 'Palm & backhand options', 'Festive wedding vibe'],
    icon: 'users',
  },
  {
    id: 'custom-designs',
    number: '06',
    title: 'Custom Designs',
    description: 'Personalized designs created around your story, preferences and occasion.',
    features: ['Storytelling portraits & dates', 'Hashtags & initials woven in', 'Personal wedding emblems', 'Collaborative design sketch'],
    icon: 'palette',
  },
  {
    id: 'home-service',
    number: '07',
    title: 'Home Service',
    description: 'Enjoy professional mehndi artistry from the comfort of your home.',
    features: ['Punctual artist setup', 'Clean, hygienic work kit', 'Zero travel stress for bride', 'Available across Noida & NCR'],
    icon: 'home',
  },
  {
    id: 'travel-bookings',
    number: '08',
    title: 'Travel Bookings',
    description: 'Available for selected destinations and events outside Noida.',
    features: ['Destination wedding bookings', 'Outstation multi-day events', 'Dedicated bridal availability', 'Advance schedule reserve'],
    icon: 'plane',
  },
];

// Bridal Experience 3 Steps
export const BRIDAL_STEPS = [
  {
    step: '01',
    title: 'Share Your Date',
    description: 'Reach out on WhatsApp or call with your wedding date, venue, and bridal preferences so we can confirm availability.',
  },
  {
    step: '02',
    title: 'Choose Your Style',
    description: 'Consult on bespoke designs — from full traditional Indian artwork to Arabic florals or custom couple portraits.',
  },
  {
    step: '03',
    title: 'Reserve Your Appointment',
    description: 'Lock in your bridal slot with ease, receive pre-care tips, and enjoy relaxed artistry on your special day.',
  },
];

// Gallery Items with Filter Tags
export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Traditional' | 'Arabic' | 'Modern' | 'Close-up';
  imageUrl: string;
  aspect: 'tall' | 'square' | 'wide';
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Bridal Forearms & Palms',
    category: 'Bridal',
    imageUrl: bridalImage1,
    aspect: 'tall',
    caption: 'Full-length traditional bridal composition with custom motifs and dense peacock detailing.',
  },
  {
    id: 'gal-2',
    title: 'Intricate Floral Lattice & Wrist Cuffs',
    category: 'Traditional',
    imageUrl: bridalImage2,
    aspect: 'square',
    caption: 'Classic Indian jaal lattice paired with symmetric mandalas and finger filigree.',
  },
  {
    id: 'gal-3',
    title: 'Detailed Bridal Backhand Elegance',
    category: 'Bridal',
    imageUrl: bridalImage3,
    aspect: 'tall',
    caption: 'Symmetric backhand bridal detailing highlighting rings and bridal wristwear.',
  },
  {
    id: 'gal-4',
    title: 'Fine Heritage Mandala Composition',
    category: 'Close-up',
    imageUrl: traditionalImage1,
    aspect: 'tall',
    caption: 'Ultra-fine lines, micro-dots, and concentric shaded borders on palms.',
  },
  {
    id: 'gal-5',
    title: 'Fluid Arabic Trail & Shaded Blooms',
    category: 'Arabic',
    imageUrl: arabicImage1,
    aspect: 'tall',
    caption: 'Graceful diagonal Arabic flow with bold floral borders and negative space.',
  },
  {
    id: 'gal-6',
    title: 'Modern Minimalist Henna Cuffs',
    category: 'Modern',
    imageUrl: modernImage1,
    aspect: 'square',
    caption: 'Contemporary geometric and botanical elements for modern bridesmaids and receptions.',
  },
  {
    id: 'gal-7',
    title: 'Cone Precision & Fresh Application',
    category: 'Close-up',
    imageUrl: closeupImage1,
    aspect: 'square',
    caption: 'Handcrafted henna cone application demonstrating patience and line stability.',
  },
  {
    id: 'gal-8',
    title: 'Festive Family & Pre-Wedding Art',
    category: 'Traditional',
    imageUrl: traditionalImage2,
    aspect: 'tall',
    caption: 'Festive celebratory henna for sangeet, engagement, and family gatherings.',
  },
];

// Why Brides Choose RK
export const WHY_CHOOSE_ITEMS = [
  {
    title: '10+ Years of Experience',
    desc: 'A decade of seasoned craft ensuring steady hands, fast work, and zero bridal stress.',
  },
  {
    title: 'Bridal Mehndi Specialist',
    desc: 'Specialized focus on high-detail bridal compositions that photograph impeccably.',
  },
  {
    title: 'Intricate & Detailed Designs',
    desc: 'Micro-fine line work, symmetric jaals, portraits, and dark, rich natural stain results.',
  },
  {
    title: 'Traditional & Modern Styles',
    desc: 'Expertise across Marwari, Rajasthani, Arabic, Indo-Western, and contemporary designs.',
  },
  {
    title: 'Home Service Available',
    desc: 'Comfortable, punctual at-home service so the bride can relax in her own space.',
  },
  {
    title: 'Noida & Delhi NCR',
    desc: 'Extensive on-time coverage across Noida, Greater Noida, Ghaziabad, and Delhi.',
  },
  {
    title: 'Travel Bookings Available',
    desc: 'Available for luxury destination weddings and pre-wedding functions across India.',
  },
  {
    title: 'Personalized Designs',
    desc: 'Every bridal design is custom tailored to weave your wedding date, memories, and style.',
  },
];

// 5 Process Steps
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Send Your Event Details',
    desc: 'Share your event date, venue, city, and number of people via our WhatsApp booking form.',
  },
  {
    step: '02',
    title: 'Discuss Your Requirements',
    desc: 'We discuss your preferred coverage (elbow, forearm, feet), design styles, and timing.',
  },
  {
    step: '03',
    title: 'Choose Your Design Style',
    desc: 'Select from our bridal catalog or collaborate on custom motifs, couple names, and themes.',
  },
  {
    step: '04',
    title: 'Confirm Your Booking',
    desc: 'Lock your date and slot with confirmation, so you have complete peace of mind.',
  },
  {
    step: '05',
    title: 'Relax & Enjoy Your Mehndi Day',
    desc: 'Our artist arrives promptly at your location to create mesmerizing bridal art.',
  },
];

// Testimonials (Editable placeholders for real client reviews as requested)
export const TESTIMONIALS_DATA = [
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

// Instagram Grid Items
export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    imageUrl: bridalImage1,
    caption: 'Intricate bridal henna palms for our beautiful weekend bride ✨ #RKMehndiArtist',
  },
  {
    id: 'insta-2',
    imageUrl: bridalImage2,
    caption: 'Delicate floral jaal detailing and wrist cuffs in progress 🌿 #NoidaMehndi',
  },
  {
    id: 'insta-3',
    imageUrl: traditionalImage1,
    caption: 'Classic Indian motifs crafted with love and patience 🌸 #BridalMehndiNoida',
  },
  {
    id: 'insta-4',
    imageUrl: arabicImage1,
    caption: 'Modern Arabic flow for an elegant engagement ceremony 💫 #DelhiNCRMehndi',
  },
  {
    id: 'insta-5',
    imageUrl: closeupImage1,
    caption: 'Pure henna artistry in every stroke. Booking open for wedding season 🤎',
  },
  {
    id: 'insta-6',
    imageUrl: bridalImage3,
    caption: 'Royal backhand bridal symmetry that stays rich and dark 🪷 #BridalArtist',
  },
];

// FAQ Items (8 specified questions)
export const FAQ_DATA = [
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
    question: 'Can I request a custom bridal design?',
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
    question: 'How can I book an appointment?',
    answer: 'Simply fill out the booking form on this website or message us directly on WhatsApp at +91 93119 20110. Once we confirm date availability and discuss your design preferences, your booking will be confirmed.',
  },
];

// Helper to construct WhatsApp booking URL with accurate encoding
export function createWhatsAppBookingUrl(formData: {
  fullName: string;
  whatsappNumber: string;
  eventDate: string;
  eventType: string;
  eventLocation: string;
  numberOfPeople: string;
  mehndiService: string;
  additionalMessage: string;
}): string {
  const messageLines = [
    'Hello RK Mehndi Artist,',
    'I would like to enquire about booking.',
    '',
    `Name: ${formData.fullName.trim() || 'Not specified'}`,
    `Phone: ${formData.whatsappNumber.trim() || 'Not specified'}`,
    `Event Date: ${formData.eventDate.trim() || 'Not specified'}`,
    `Event Type: ${formData.eventType.trim() || 'Not specified'}`,
    `Location: ${formData.eventLocation.trim() || 'Not specified'}`,
    `Number of People: ${formData.numberOfPeople.trim() || 'Not specified'}`,
    `Service: ${formData.mehndiService.trim() || 'Not specified'}`,
    `Message: ${formData.additionalMessage.trim() || 'None'}`,
  ];

  const fullText = messageLines.join('\n');
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}

// Quick WhatsApp URL for service enquiry
export function createServiceEnquiryUrl(serviceTitle: string): string {
  const text = `Hello RK Mehndi Artist, I would like to enquire about your "${serviceTitle}" service. Please share details and availability.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
