import React, { useState } from 'react';
import { Plus, MessageCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS, BUSINESS } from '../data/business';
import { OrnamentalDivider } from './OrnamentalDivider';
import { fadeUpVariant, LUXURY_EASE } from '../utils/animations';

export const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'faq-1': true });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FCFBF7] text-[#1E1510] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mehndi-grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#8C6A24] block">
            COMMON INQUIRIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0E1E12] tracking-tight mt-2 mb-2">
            Frequently Asked Questions
          </h2>
          <OrnamentalDivider className="my-3" />
          <p className="text-sm sm:text-base text-[#5C4A3F] font-light leading-relaxed">
            Everything you need to know about our bridal bookings, home services, custom designs, and scheduling.
          </p>
        </motion.div>

        {/* Accordion List with Framer Motion AnimatePresence */}
        <div className="space-y-4">
          {FAQS.map((item) => {
            const isOpen = Boolean(openItems[item.id]);
            return (
              <div
                key={item.id}
                className="bg-white border border-[#C5A059]/30 transition-colors shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F7F4EC] cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#0E1E12]">
                    {item.question}
                  </span>
                  
                  {/* Plus Icon that Rotates ~45 degrees on Open */}
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: LUXURY_EASE }}
                    className={`w-7 h-7 rounded-full bg-[#F7F4EC] border border-[#C5A059]/40 flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#C5A059]/20 text-[#8C6A24]' : 'text-[#8C6A24]'}`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C4A3F] font-light leading-relaxed border-t border-[#C5A059]/15">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          className="mt-12 text-center bg-white border border-[#C5A059]/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#F7F4EC] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#8C6A24]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-serif font-semibold text-[#0E1E12]">
                Have a customized question about your event?
              </p>
              <p className="text-xs text-[#7A6A5E]">
                We are glad to assist with timings, guest count packages, and special requests.
              </p>
            </div>
          </div>

          <motion.a
            href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent('Hi RK Mehndi Artist, I have a question regarding booking.')}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E1E12] text-[#FCFBF7] hover:bg-[#8C6A24] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#ECCF8A]" />
            <span>Chat on WhatsApp</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
