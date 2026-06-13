import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "How far in advance should I book my bridal makeup?",
    answer: "We recommend booking at least 6 to 8 months in advance, especially during the peak wedding season, to ensure our availability for your special day."
  },
  {
    question: "Do you offer pre-wedding makeup trials?",
    answer: "Yes, we highly recommend a pre-wedding trial. It allows us to collaborate, understand your skin type, and perfect the exact look you envision before the big day."
  },
  {
    question: "What premium makeup brands do you use?",
    answer: "We only use high-end, professional-grade products that are photograph-friendly and long-lasting, including MAC, Huda Beauty, Charlotte Tilbury, NARS, and Anastasia Beverly Hills."
  },
  {
    question: "Do you travel to the wedding venue?",
    answer: "Absolutely! We offer on-location services for brides and the bridal party to ensure you can get ready in the comfort of your own space."
  },
  {
    question: "How long does bridal makeup and hair styling take?",
    answer: "Typically, we allocate 2.5 to 3 hours for the bride's hair, makeup, and draping. We always schedule ample time so the process is relaxed and stress-free."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-cream-bg">
      <div className="max-w-4xl mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-[0.2em] mb-2">
            Have Questions?
          </h2>
          <h3 className="font-display-lg text-headline-md text-charcoal mb-4">
            Frequently Asked Questions
          </h3>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-2 mb-10">
            <div className="h-[2px] w-20 md:w-28 bg-champagne-gold/60 rounded-full"></div>
            <span 
              className="material-symbols-outlined text-champagne-gold text-3xl md:text-4xl drop-shadow-sm"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
            >
              spa
            </span>
            <div className="h-[2px] w-20 md:w-28 bg-champagne-gold/60 rounded-full"></div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <button 
              key={index} 
              onClick={() => toggleFaq(index)}
              className="w-full reveal group flex items-start gap-4 md:gap-8 focus:outline-none"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Left Side: Question and Answer */}
              <div className="flex-1 flex flex-col">
                {/* Question and Bottom Border */}
                <div className="pb-4 border-b-2 border-champagne-gold/40 w-full text-left transition-colors duration-300 group-hover:border-champagne-gold">
                  <h4 className={`font-display-md text-lg md:text-xl transition-colors duration-300 ${openIndex === index ? 'text-champagne-gold' : 'text-charcoal group-hover:text-champagne-gold'}`}>
                    {faq.question}
                  </h4>
                </div>
                
                {/* Answer Box (Expands) */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 font-body-lg text-on-surface-variant leading-relaxed text-left text-base md:text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side: Square Icon Box */}
              <div className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center border-2 transition-all duration-300 rounded-md ${openIndex === index ? 'bg-champagne-gold border-champagne-gold' : 'bg-transparent border-champagne-gold/40 group-hover:border-champagne-gold group-hover:bg-champagne-gold/10'}`}>
                <span 
                  className={`material-symbols-outlined text-3xl transition-all duration-300 ${openIndex === index ? 'text-white' : 'text-champagne-gold'}`}
                >
                  {openIndex === index ? 'remove' : 'add'}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
