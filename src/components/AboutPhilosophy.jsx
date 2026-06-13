import React, { useEffect, useRef } from 'react';

const pillars = [
  {
    title: "Unmatched Artistry",
    description: "Every stroke of the brush is driven by years of experience and an eye for perfection. We view makeup not as a routine, but as an art form tailored specifically to your unique features.",
    icon: "palette"
  },
  {
    title: "Premium Products",
    description: "We use only the highest quality, luxury products to ensure a flawless finish that not only looks stunning in person and on camera, but lasts throughout your entire event.",
    icon: "diamond"
  },
  {
    title: "Personalized Care",
    description: "Your vision is our priority. We take the time to understand your personal style, skin type, and event requirements to deliver a bespoke look that feels authentically you.",
    icon: "favorite"
  }
];

export default function AboutPhilosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('glass-active');
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.glass-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-charcoal text-white relative overflow-hidden">
      {/* Dynamic Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-champagne-gold/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="text-center mb-24 glass-reveal translate-y-10 opacity-0 transition-all duration-1000 ease-out">
          <p className="font-label-caps text-champagne-gold tracking-[0.3em] uppercase text-xs mb-6">Our Philosophy</p>
          <h2 className="font-display-lg text-5xl md:text-6xl lg:text-7xl text-white">
            The Pillars of <span className="text-champagne-gold italic font-light">Euphoria</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="glass-reveal translate-y-16 opacity-0 transition-all duration-1000 ease-out relative group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5 group-hover:border-champagne-gold/30 transition-colors duration-500"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-champagne-gold/0 to-champagne-gold/0 group-hover:from-champagne-gold/5 group-hover:to-transparent rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative p-10 md:p-12 text-center z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-charcoal border border-champagne-gold/50 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 group-hover:scale-110">
                  <span 
                    className="material-symbols-outlined text-2xl text-champagne-gold"
                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48" }}
                  >
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="font-display-md text-2xl mb-4 text-white group-hover:text-champagne-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass-active {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
