import React from 'react';

const reasons = [
  "Learn from experienced instructors",
  "Up-to-date industry techniques and trends",
  "Hands-on training",
  "Networking opportunities",
  "Access to professional makeup products",
  "Boost your confidence and skills",
  "Prepare for a successful career in the makeup industry",
  "Develop a portfolio of work",
  "Learn about different makeup styles and applications",
  "Join a supportive community of makeup artists"
];

export default function AcademyWhyJoinUs() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-gutter">
        
        {/* Section Heading */}
        <div className="mb-16 reveal">
          <h2 className="font-display-lg text-4xl md:text-5xl text-white mb-4">
            Why Join Us
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center gap-4 mt-2">
            <span 
              className="material-symbols-outlined text-champagne-gold text-3xl drop-shadow-sm"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
            >
              spa
            </span>
            <div className="h-[2px] w-16 md:w-20 bg-champagne-gold/60 rounded-full"></div>
          </div>
        </div>

        {/* 2-Column Grid Flowing Vertically */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-5 md:grid-flow-col gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="relative bg-white shadow-lg rounded-sm flex items-center p-4 md:p-5 pr-12 group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 reveal"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* The Number Circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-champagne-gold flex items-center justify-center mr-4 group-hover:bg-champagne-gold transition-colors duration-300">
                <span className="font-display-md text-champagne-gold group-hover:text-charcoal text-lg font-bold transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}.
                </span>
              </div>
              
              {/* The Text */}
              <p className="font-body-md text-charcoal font-semibold text-sm md:text-base leading-snug">
                {reason}
              </p>

              {/* The Top Right Fold/Triangle */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[35px] border-l-[35px] border-t-champagne-gold border-l-transparent drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
