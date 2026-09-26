import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroStatement } from './components/IntroStatement';
import { Services } from './components/Services';
import { About } from './components/About';
import { BridalExperience } from './components/BridalExperience';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { FeaturedBridal } from './components/FeaturedBridal';
import { Videos } from './components/Videos';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Bridal Mehndi');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-[#1E1510] font-sans selection:bg-[#C5A059]/30 selection:text-[#0E1E12] pb-16 sm:pb-0">
      {/* Subtle Top Gold Scroll Progress */}
      <ScrollProgress />

      {/* Top Utility Information Bar */}
      <TopBar />

      {/* Sticky Transparent/Transforming Navbar */}
      <Navbar />

      <main>
        {/* Full-Screen Visual Cinematic Hero */}
        <Hero />

        {/* Premium Editorial Intro Strip */}
        <IntroStatement />

        {/* 8 Dedicated Mehndi Services Cards with Hover Effects */}
        <Services onSelectService={handleSelectService} />

        {/* Editorial Split About Section with Verified Stats */}
        <About />

        {/* Dark Green Bridal Experience Section & 3 Steps */}
        <BridalExperience />

        {/* Four Feature Blocks & Commitments */}
        <WhyChooseUs />

        {/* Filterable Masonry Bridal Gallery & Fullscreen Lightbox */}
        <Gallery />

        {/* Visually Immersive Bridal Feature */}
        <FeaturedBridal />

        {/* Video Reel Showcase & Modal Lightbox Player */}
        <Videos />

        {/* Luxury Client Testimonials Carousel */}
        <Testimonials />

        {/* WhatsApp-Integrated Booking Section */}
        <BookingForm preselectedService={selectedService} />

        {/* Serving Noida & Delhi NCR with Responsive Maps Embed */}
        <LocationSection />

        {/* Instagram Bridal Diaries Grid */}
        <InstagramSection />

        {/* Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* Cinematic Final Call-To-Action */}
        <FinalCTA />
      </main>

      {/* Premium Dark Brand Footer */}
      <Footer />

      {/* Floating WhatsApp and Mobile Sticky "BOOK ON WHATSAPP" Bar */}
      <WhatsAppButton />
    </div>
  );
}
