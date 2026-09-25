import React, { useState } from 'react';
import { Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS, createWhatsAppBookingUrl } from '../data/business';
import { OrnamentalDivider } from './OrnamentalDivider';

interface BookingFormProps {
  preselectedService?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    eventDate: '',
    eventType: 'Bridal Wedding',
    eventLocation: '',
    numberOfPeople: 'Bride Only',
    serviceRequired: preselectedService || 'Bridal Mehndi',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync if parent passes a preselected service
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = createWhatsAppBookingUrl(formData);
    setFormSubmitted(true);

    // Safely trigger WhatsApp in a new window/tab
    const a = document.createElement('a');
    a.href = whatsappUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-[#0E1E12] text-[#FCFBF7] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#ECCF8A] block">
            RESERVE YOUR APPOINTMENT
          </span>
          <OrnamentalDivider scriptText="Contact Us" light className="my-2" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FCFBF7] tracking-tight mt-1 mb-3">
            Let&apos;s Create Your Perfect Mehndi
          </h2>
          <p className="text-sm sm:text-base text-[#D4C8B5] font-light leading-relaxed">
            Fill in your wedding or celebration details below to send your booking inquiry directly to our official WhatsApp.
          </p>
        </div>

        {/* Premium Dark Green + Cream Form Container */}
        <div className="bg-[#162B1D] border border-[#C5A059]/35 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-sm">
          
          {formSubmitted && (
            <div className="mb-8 p-4 bg-[#25D366]/20 border border-[#25D366] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#FCFBF7]">
                  Opening WhatsApp with your booking details...
                </p>
                <p className="text-[11px] text-[#D4C8B5] mt-1">
                  If WhatsApp did not open automatically,{' '}
                  <a
                    href={createWhatsAppBookingUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#25D366] font-bold hover:text-white"
                  >
                    click here to send on WhatsApp now
                  </a>.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase tracking-[0.16em] text-[#ECCF8A] font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  className="w-full bg-[#0E1E12] border border-[#C5A059]/35 px-4 py-3 text-sm text-[#FCFBF7] placeholder-[#738276] focus:outline-none focus:border-[#ECCF8A] transition-colors"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsappNumber" className="block text-xs uppercase tracking-[0.16em] text-[#ECCF8A] font-medium mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  required
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-[#0E1E12] border border-[#C5A059]/35 px-4 py-3 text-sm text-[#FCFBF7] placeholder-[#738276] focus:outline-none focus:border-[#ECCF8A] transition-colors"
                />
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="eventDate" className="block text-xs uppercase tracking-[0.16em] text-[#ECCF8A] font-medium mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full bg-[#0E1E12] border border-[#C5A059]/35 px-4 py-3 text-sm text-[#FCFBF7] focus:outline-none focus:border-[#ECCF8A] transition-colors [color-scheme:dark]"
                />
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="eventType" className="block text-xs uppercase tracking-[0.16em] text-[#ECCF8A] font-medium mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-[#0E1E12] border border-[#C5A059]/35 px-4 py-3 text-sm text-[#FCFBF7] focus:outline-none focus:border-[#ECCF8A] transition-colors"
                >
                  <option value="Bridal Wedding">Bridal Wedding</option>
                  <option value="Engagement Ceremony">Engagement Ceremony</option>
                  <option value="Sangeet & Mehendi Night">Sangeet &amp; Mehendi Night</option>
                  <option value="Karwa Chauth / Festival">Karwa Chauth / Festival</option>
                  <option value="Private Celebration / Other">Private Celebration / Other</option>
                </select>
              </div>

              {/* Event Location */}
              <div>
                <label htmlFor="eventLocation" className="block text-xs uppercase tracking-[0.16em] text-[#ECCF8A] font-medium mb-2">
                  Event Location *
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  required
                  value={formData.eventLocation}
                  onChange={handleChange}
                  placeholder="e.g. Sector 50 Noida / Hotel / Home"
                  className="w-full bg-[#0E1E12] border border-[#C5A059]/35 px-4 py-3 text-sm text-[#FCFBF7] placeholder-[#738276] focus:outline-none focus:border-[#ECCF8A] transition-colors"
                />
              </div>

              {/* Number of People */}
              <div>
                <label htmlFor="numberOfPeople" className="block text-xs uppercase tracking-[0.16em] text-[#ECCF8A] font-medium mb-2">
                  Number of People *
                </label>
                <select
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="w-full bg-[#0E1E12] border border-[#C5A059]/35 px-4 py-3 text-sm text-[#FCFBF7] focus:outline-none focus:border-[#ECCF8A] transition-colors"
                >
                  <option value="Bride Only">Bride Only</option>
                  <option value="Bride + 2 to 5 Guests">Bride + 2 to 5 Guests</option>
                  <option value="6 to 15 Guests">6 to 15 Guests</option>
                  <option value="16 to 30 Guests">16 to 30 Guests</option>
                  <option value="Large Wedding Party (30+ Guests)">Large Wedding Party (30+ Guests)</option>
                </select>
              </div>

            </div>

            {/* Service Required */}
            <div>
              <label htmlFor="serviceRequired" className="block text-xs uppercase tracking-[0.16em] text-[#ECCF8A] font-medium mb-2">
                Service Required *
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full bg-[#0E1E12] border border-[#C5A059]/35 px-4 py-3 text-sm text-[#FCFBF7] focus:outline-none focus:border-[#ECCF8A] transition-colors"
              >
                <option value="Bridal Mehndi">Bridal Mehndi (Intricate hands, forearms & feet)</option>
                <option value="Engagement Mehndi">Engagement Mehndi</option>
                <option value="Traditional Mehndi">Traditional Mehndi</option>
                <option value="Arabic Mehndi">Arabic Mehndi</option>
                <option value="Party & Guest Mehndi">Party &amp; Guest Mehndi</option>
                <option value="Custom Mehndi Designs">Custom Mehndi Designs</option>
                <option value="Home Service">Home Service</option>
                <option value="Travel / Destination Bookings">Travel / Destination Bookings</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.16em] text-[#ECCF8A] font-medium mb-2">
                Message / Custom Design Preferences
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share any special requests, custom couple motifs, or questions..."
                className="w-full bg-[#0E1E12] border border-[#C5A059]/35 px-4 py-3 text-sm text-[#FCFBF7] placeholder-[#738276] focus:outline-none focus:border-[#ECCF8A] transition-colors resize-none"
              />
            </div>

            {/* Submit Button: REQUEST ON WHATSAPP */}
            <div className="pt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-200 shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                {/* WhatsApp Phone In Bubble Icon */}
                <svg
                  className="w-5 h-5 fill-current text-white shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.54 1.767.828 2.792.828h.001c3.182 0 5.768-2.587 5.769-5.767.001-3.181-2.586-5.767-5.77-5.767zm7.643 5.768c-.002 4.225-3.441 7.662-7.668 7.662-1.299 0-2.571-.34-3.693-.984l-4.103 1.076 1.096-4c-.705-1.164-1.077-2.498-1.078-3.864.002-4.225 3.44-7.662 7.667-7.662 4.226.001 7.666 3.44 7.668 7.663zm-3.057 2.115c-.172-.086-1.018-.503-1.176-.56-.157-.058-.272-.086-.387.086s-.444.56-.545.676c-.1.115-.201.129-.373.043-.172-.086-.726-.268-1.382-.853-.51-.455-.855-1.017-.955-1.189-.101-.172-.011-.265.075-.351.078-.077.172-.201.258-.302.086-.101.115-.172.172-.287.057-.115.029-.215-.014-.302-.043-.086-.387-.933-.531-1.278-.14-.336-.282-.29-.387-.295-.1-.005-.215-.006-.33-.006-.115 0-.301.043-.459.215-.157.172-.602.589-.602 1.436s.617 1.666.703 1.781c.086.115 1.214 1.854 2.941 2.6 1.727.746 1.727.498 2.043.469.315-.029 1.018-.416 1.161-.818.144-.402.144-.746.1-.818-.043-.072-.158-.115-.33-.201z" />
                </svg>
                <span>REQUEST ON WHATSAPP</span>
              </motion.button>
            </div>

          </form>

          {/* Direct Call Now Alternative */}
          <div className="mt-8 pt-6 border-t border-[#C5A059]/20 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-xs text-[#D4C8B5] font-light">Prefer to call directly?</span>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#ECCF8A] hover:text-[#FCFBF7] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>CALL NOW: {BUSINESS.phoneDisplay}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
