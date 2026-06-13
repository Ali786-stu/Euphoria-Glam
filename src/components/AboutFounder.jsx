import React, { useEffect, useRef } from 'react';

export default function AboutFounder() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Advanced reveal logic specifically for this component
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('premium-active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.premium-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-cream-bg text-charcoal relative overflow-hidden">
      
      {/* Huge Background Watermark */}
      <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.02] z-0 overflow-hidden w-full h-full flex justify-end">
        <h2 className="font-display-lg text-[25vw] leading-none whitespace-nowrap rotate-90 origin-top-right translate-x-1/4 mt-32">
          ARTISTRY
        </h2>
      </div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        
        {/* Row 1: Intro Text & First Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32 md:mb-48">
          <div className="lg:col-span-5 premium-reveal translate-y-16 opacity-0 transition-all duration-1000 ease-out">
            <h3 className="font-display-md text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8 leading-tight">
              Crafting <span className="text-champagne-gold italic font-light">Confidence</span> <br/>
              Through Artistry
            </h3>
            <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg">
              "Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are from the inside."
            </p>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 premium-reveal translate-y-24 opacity-0 transition-all duration-[1200ms] ease-out delay-200">
            <div className="relative w-full aspect-[4/5] bg-charcoal group overflow-hidden">
              <img src="/Gallery/10.png" alt="Farhana Styling" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/10 transition-colors duration-500 group-hover:bg-transparent"></div>
            </div>
            <div className="mt-6 flex justify-end">
              <p className="font-label-caps text-xs tracking-[0.2em] uppercase text-charcoal/50">— The Studio, 2024</p>
            </div>
          </div>
        </div>

        {/* Row 2: Overlapping Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Floating Image */}
          <div className="lg:col-span-5 premium-reveal -translate-x-16 opacity-0 transition-all duration-1000 ease-out z-20">
            <div className="relative w-[80%] md:w-[70%] ml-auto aspect-[3/4] shadow-2xl -rotate-3 group hover:rotate-0 transition-all duration-700">
              <div className="absolute inset-0 border border-champagne-gold/30 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <img src="/Gallery/5.png" alt="Farhana Working" className="w-full h-full object-cover relative z-10" />
            </div>
          </div>
          
          {/* Right: Bio & Secondary Image */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-8 font-body-lg text-on-surface-variant leading-relaxed mb-16 premium-reveal translate-y-16 opacity-0 transition-all duration-1000 ease-out delay-200">
              <p>
                As the Founder and Creative Director of Euphoria Glam Makeup Studio, Farhana has spent years mastering the fine art of high-end editorial and bridal makeup. Her passion lies in enhancing natural features rather than concealing them, ensuring every client walks out feeling like the most confident version of themselves.
              </p>
              <p>
                From intimate bridal ceremonies to grand editorial shoots, her meticulous attention to detail, deep understanding of skin tones, and mastery of color theory have made her a sought-after name in the industry.
              </p>
            </div>
            
            {/* Third Image (Small detail shot) */}
            <div className="relative w-full aspect-[16/9] premium-reveal translate-y-16 opacity-0 transition-all duration-1000 ease-out delay-400 group overflow-hidden">
               <img src="/Gallery/12.png" alt="Detail Shot" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        .premium-active {
          transform: translate(0, 0) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
