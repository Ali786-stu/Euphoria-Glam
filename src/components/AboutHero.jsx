import React, { useEffect, useState } from 'react';

export default function AboutHero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-charcoal">
      {/* Full Screen Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full scale-105"
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      >
        <img 
          src="/Gallery/2.png" 
          alt="Farhana - Founder" 
          className="w-full h-full object-cover object-[center_30%]"
        />
        {/* Deep Cinematic Overlay / Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-black/60"></div>
        <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-container-max mx-auto px-gutter flex flex-col justify-end pb-32">
        <div className="max-w-4xl reveal">
          <p className="font-label-caps text-champagne-gold tracking-[0.3em] uppercase text-sm mb-6 flex items-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            <span className="w-16 h-[1px] bg-champagne-gold"></span>
            Meet The Visionary
          </p>
          
          <h1 className="font-display-lg text-6xl md:text-8xl lg:text-[100px] text-white leading-[0.9] tracking-tight mb-8">
            <span className="block opacity-0 animate-[slideUp_1s_ease-out_0.8s_forwards]">Farhana.</span>
            <span className="block text-champagne-gold italic font-light opacity-0 animate-[slideUp_1s_ease-out_1.1s_forwards]">The Vision</span>
            <span className="block opacity-0 animate-[slideUp_1s_ease-out_1.4s_forwards]">Behind The Glamour.</span>
          </h1>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
        <span className="font-label-caps text-xs tracking-[0.2em] text-white/50 uppercase">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-champagne-gold to-transparent animate-pulse"></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
