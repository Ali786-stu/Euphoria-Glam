import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const courses = [
  {
    title: "Self Grooming Course",
    durationStr: "15 Days",
    details: "Extra fee applies if you want to include the self hair styling module."
  },
  {
    title: "Professional Beauty Course",
    durationStr: "40 Days",
    details: "Comprehensive training covering all essential beauty treatments and professional practices."
  },
  {
    title: "Professional Nail Course",
    durationStr: "20 Days",
    details: "Learn advanced nail art, extensions, and professional nail care techniques."
  },
  {
    title: "Professional Diploma Course",
    durationStr: "4 Months",
    details: "An extensive diploma covering in-depth theoretical and practical knowledge of makeup and beauty."
  },
  {
    title: "Professional Makeup Course & Hairstyling",
    durationStr: "90 Days",
    details: "Master the art of bridal, fashion, and editorial makeup along with advanced hairstyling."
  },
  {
    title: "Professional Hairstyling Course",
    durationStr: "15 Days",
    details: "Focus purely on professional hair styling, updos, and modern hair styling techniques."
  }
];

export default function AcademyCourses() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleCourse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-gutter">
        
        {/* Section Heading */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-display-lg text-4xl md:text-5xl text-charcoal mb-4">
            Our Courses
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="h-[2px] w-16 md:w-20 bg-champagne-gold/60 rounded-full"></div>
            <span 
              className="material-symbols-outlined text-champagne-gold text-3xl drop-shadow-sm"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
            >
              spa
            </span>
            <div className="h-[2px] w-16 md:w-20 bg-champagne-gold/60 rounded-full"></div>
          </div>
        </div>

        {/* Courses Accordion */}
        <div className="space-y-4">
          {courses.map((course, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="reveal shadow-sm rounded-xl overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => toggleCourse(index)}
                  className={`w-full flex items-center justify-between p-4 md:p-5 transition-colors duration-300 relative z-10 ${
                    isOpen ? 'bg-charcoal' : 'bg-charcoal/90 hover:bg-charcoal'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* The circle with + or x (Requested Gold) */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors duration-300 ${
                      isOpen ? 'bg-champagne-gold' : 'bg-champagne-gold/70'
                    }`}>
                      <span className="material-symbols-outlined text-xl transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                        {isOpen ? 'close' : 'add'}
                      </span>
                    </div>
                    <span className="font-display-md text-lg md:text-xl text-white text-left">
                      {course.title}
                    </span>
                  </div>
                  
                  {/* Price and Duration (Price blank as requested) */}
                  <span className="font-label-caps text-sm md:text-base text-white/90 tracking-widest text-right whitespace-nowrap ml-4">
                    ₹ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / {course.durationStr}
                  </span>
                </button>
                
                {/* Expanded Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {/* Inner content wrapper with gold background */}
                      <div className="bg-champagne-gold/10 p-5 md:p-6 border-x border-b border-champagne-gold/20 text-charcoal font-body-md text-base md:text-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-3 gap-2">
                          <p><strong className="font-bold">Duration:-</strong> {course.durationStr}</p>
                          <p><strong className="font-bold">Fee:</strong> ₹ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /-</p>
                        </div>
                        <p className="text-on-surface-variant opacity-90">{course.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
