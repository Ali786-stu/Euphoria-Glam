import React from 'react';

const features = [
  {
    title: "Personalized Approach",
    description: "Every bride is unique. We understand your style, preferences, and wedding theme to create a look that complements your personality perfectly.",
    icon: "/icon1.png"
  },
  {
    title: "Customized Bridal Services",
    description: "From pre-wedding trials to on-location bridal makeup, our services are tailored to meet your individual needs.",
    icon: "/icon2.png"
  },
  {
    title: "Classic, Elegant, or Bold Looks",
    description: "Whether natural, glam, or bold, we craft bridal looks that enhance your natural beauty.",
    icon: "/icon3.png"
  },
  {
    title: "Make Your Day Unforgettable",
    description: "Timeless, picture-perfect makeup to keep you confident and radiant throughout your wedding day.",
    icon: "/icon4.png"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 pb-24 bg-cream-bg">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-display-lg text-headline-md text-charcoal mb-4">
            Why Choose Us?
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-2">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20 max-w-5xl mx-auto mt-12 md:mt-16">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="reveal relative pt-14 md:pt-16 pb-8 px-8 rounded-2xl bg-white/40 hover:bg-white/80 border border-champagne-gold/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group cursor-default flex flex-col items-center text-center" 
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div 
                className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 bg-white shadow-lg z-10 flex items-center justify-center overflow-hidden group-hover:-translate-y-2 transition-transform duration-500"
                style={{ borderRadius: '50%', border: '4px solid rgba(212, 175, 55, 0.6)' }}
              >
                <div style={{ transform: 'scale(1.65)', width: '100%', height: '100%' }}>
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="font-display-md text-headline-sm text-charcoal mb-3 mt-2 md:mt-4">
                {feature.title}
              </h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed opacity-85">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
