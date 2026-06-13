import React from 'react';

export default function AcademyCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-charcoal text-white text-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[url('/contact-bg.png')] bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-champagne-gold/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-3xl mx-auto px-gutter relative z-10 reveal">
        <h2 className="font-label-caps text-sm text-champagne-gold uppercase tracking-[0.2em] mb-4">
          Master Your Craft
        </h2>
        
        <h3 className="font-display-lg text-5xl md:text-6xl mb-6">
          Join Our Academy
        </h3>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mt-2 mb-8">
          <div className="h-[2px] w-16 md:w-20 bg-champagne-gold/60 rounded-full"></div>
          <span 
            className="material-symbols-outlined text-champagne-gold text-3xl drop-shadow-sm"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
          >
            spa
          </span>
          <div className="h-[2px] w-16 md:w-20 bg-champagne-gold/60 rounded-full"></div>
        </div>

        <p className="font-body-lg text-white/80 leading-relaxed mb-10 text-lg md:text-xl max-w-2xl mx-auto">
          Unlock your potential as a professional artist. We will teach you everything from the basics to advanced makeup techniques.
        </p>
        
        <a 
          href="/academy"
          className="inline-flex items-center justify-center gap-2 bg-champagne-gold text-charcoal font-label-caps uppercase tracking-widest text-sm px-10 py-5 rounded-full btn-hover-fill fill-white hover:scale-105"
        >
          <span>Explore Academy</span>
          <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
        </a>
      </div>
    </section>
  );
}
