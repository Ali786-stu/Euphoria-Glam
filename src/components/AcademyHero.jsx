import React from 'react';

export default function AcademyHero() {
  return (
    <section className="relative bg-[#fcfbf9] overflow-hidden py-20 md:py-32">
      {/* Subtle Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0A30 30 0 0 1 0 30A30 30 0 0 1 30 60A30 30 0 0 1 60 30A30 30 0 0 1 30 0ZM30 58A28 28 0 0 0 2 30A28 28 0 0 0 30 2A28 28 0 0 0 58 30A28 28 0 0 0 30 58Z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "120px 120px"
        }}
      ></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 reveal">
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            Euphoria Glam Academy
          </h1>
          
          <div className="flex items-center gap-3 mb-8">
            <span 
              className="material-symbols-outlined text-champagne-gold text-2xl drop-shadow-sm"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
            >
              spa
            </span>
            <div className="h-[2px] w-16 bg-champagne-gold/60"></div>
          </div>

          <h3 className="font-bold text-lg md:text-xl text-charcoal mb-4 font-display-md">
            for Learning professional Makeup:
          </h3>
          
          <p className="font-body-lg text-on-surface-variant leading-relaxed text-base md:text-lg mb-10 max-w-lg">
            Euphoria Glam academy offers to learn professional Makeup and hair style with best techniques in affordable fee structure.
          </p>
          
          {/* Signature Font text */}
          <div className="font-display-lg italic text-5xl md:text-6xl text-champagne-gold opacity-90" style={{ fontFamily: "'Playfair Display', serif" }}>
            Euphoria Glam
          </div>
        </div>

        {/* Right Side: Image with offset border */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end reveal" style={{ transitionDelay: '200ms' }}>
          <div className="relative mt-8 md:mt-0">
            {/* The offset gold box (Requested Gold instead of pink) */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-full h-full bg-champagne-gold z-0 shadow-lg"></div>
            
            {/* Image container with white border */}
            <div className="relative z-10 bg-white p-2 md:p-3 shadow-2xl">
              <img 
                src="/Gallery/2.png" 
                alt="Academy Instructor" 
                className="w-[300px] h-[350px] md:w-[400px] md:h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
