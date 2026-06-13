import React from 'react';
import Header from './Header';
import Footer from './Footer';

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

export default function AboutPage() {
  return (
    <div className="bg-charcoal text-white font-body-md overflow-x-hidden">
      <Header />

      <main>
        {/* 1. Founder 1: Farhana (Hero style from Step 1: Text Left, Image Right) */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden border-b border-champagne-gold/10">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-champagne-gold/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-5 reveal order-2 lg:order-1">
                <p className="font-label-caps text-champagne-gold tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-champagne-gold"></span>
                  Behind The Brush
                </p>
                <h1 className="font-display-lg text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
                  The Vision <br className="hidden lg:block"/>
                  <span className="text-champagne-gold italic font-light">Behind The</span> <br/>
                  Glamour.
                </h1>
                <p className="font-body-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                  Farhana has spent years mastering the fine art of high-end editorial and bridal makeup. Her passion lies in enhancing natural features rather than concealing them, ensuring every client walks out feeling like the most confident version of themselves.
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full border border-champagne-gold/30 flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-full bg-champagne-gold flex items-center justify-center">
                      <span className="material-symbols-outlined text-charcoal">brush</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display-md text-xl text-white">Farhana</h4>
                    <p className="font-label-caps text-champagne-gold text-xs tracking-widest uppercase mt-1">Founder & Creative Director</p>
                  </div>
                </div>
              </div>
              {/* Right Content: Hero Image */}
              <div className="lg:col-span-6 lg:col-start-7 reveal order-1 lg:order-2" style={{ transitionDelay: '200ms' }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-champagne-gold translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 rounded-sm"></div>
                  <div className="relative z-10 overflow-hidden bg-cream-bg rounded-sm border border-white/10 shadow-2xl">
                    <div className="aspect-[4/5] md:aspect-[3/4] w-full relative">
                      <img src="/Gallery/2.png" alt="Farhana" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-60"></div>
                    </div>
                  </div>
                  {/* Decorative Stamp */}
                  <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 z-20 w-32 h-32 md:w-40 md:h-40 bg-charcoal rounded-full border border-champagne-gold/20 flex items-center justify-center p-2 animate-[spin_20s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-champagne-gold">
                      <path id="curve1" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                      <text className="text-[14px] uppercase tracking-[0.2em] font-label-caps font-bold">
                        <textPath href="#curve1">EUPHORIA GLAM • FOUNDER • ARTISTRY • </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Co-Founder (Zig-Zag: Image Left, Text Right) */}
        <section className="py-24 md:py-32 bg-cream-bg text-charcoal">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Content: Image */}
              <div className="lg:col-span-6 reveal">
                <div className="relative group">
                  <div className="absolute inset-0 border border-champagne-gold -translate-x-4 -translate-y-4 md:-translate-x-6 md:-translate-y-6 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-sm pointer-events-none"></div>
                  <div className="relative z-10 overflow-hidden bg-charcoal rounded-sm shadow-2xl">
                    <div className="aspect-[4/5] md:aspect-[3/4] w-full relative">
                      <img src="/Gallery/founder2.jpeg" alt="Co-Founder" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Content: Text */}
              <div className="lg:col-span-5 lg:col-start-8 reveal" style={{ transitionDelay: '200ms' }}>
                <p className="font-label-caps text-on-surface-variant tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4">
                  The Creative Partner
                  <span className="w-12 h-[1px] bg-charcoal/30"></span>
                </p>
                <h2 className="font-display-lg text-5xl md:text-6xl text-charcoal leading-tight mb-8">
                  Elevating <br />
                  <span className="text-champagne-gold italic font-light">Standards</span>
                </h2>
                <p className="font-body-lg text-on-surface-variant leading-relaxed mb-8">
                  Bringing a unique flair and exceptional expertise, our Co-Founder has been the driving force alongside Farhana. Together, they have built a studio that prides itself on luxury, perfection, and a personalized experience for every single client that walks through our doors.
                </p>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  Her keen eye for aesthetics and deep understanding of modern beauty trends ensure that Euphoria Glam remains at the forefront of the industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Collage & Philosophy (Step 1 Collage Design) */}
        <section className="py-24 md:py-32 bg-charcoal text-white overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
              {/* Left Content: Image Collage */}
              <div className="relative h-[600px] md:h-[700px] w-full reveal">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-champagne-gold/10 rounded-full blur-3xl"></div>
                {/* Main Center Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[50%] aspect-[3/4] z-20 shadow-2xl">
                  <img src="/Gallery/10.png" alt="Styling" className="w-full h-full object-cover border-4 border-white rounded-sm" />
                </div>
                {/* Top Left Image */}
                <div className="absolute top-[5%] left-[5%] w-[45%] md:w-[40%] aspect-square z-10 shadow-xl -rotate-6 transition-transform duration-500 hover:rotate-0 hover:z-30">
                  <img src="/Gallery/5.png" alt="Working" className="w-full h-full object-cover border-4 border-white rounded-sm" />
                </div>
                {/* Bottom Right Image */}
                <div className="absolute bottom-[5%] right-[5%] w-[45%] md:w-[40%] aspect-[4/5] z-30 shadow-xl rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
                  <img src="/Gallery/12.png" alt="Details" className="w-full h-full object-cover border-4 border-white rounded-sm" />
                </div>
              </div>

              {/* Right Content: Craft Text */}
              <div className="reveal" style={{ transitionDelay: '200ms' }}>
                <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                  Crafting <span className="text-champagne-gold italic font-light">Confidence</span> <br/>
                  Through Artistry
                </h2>
                <div className="space-y-6 font-body-lg text-white/70 leading-relaxed">
                  <p className="text-lg md:text-xl text-champagne-gold font-medium">
                    "Makeup is not a mask that covers up your beauty; it’s a weapon that helps you express who you are from the inside."
                  </p>
                  <div className="h-[1px] w-full bg-champagne-gold/30 my-8"></div>
                  <p>
                    Beyond creating stunning looks, we are dedicated to sharing our knowledge through the Academy, empowering the next generation of artists with the skills and confidence to carve their own paths in the beauty world.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1 Philosophy Pillars */}
            <div className="text-center mb-20 reveal">
              <p className="font-label-caps text-champagne-gold tracking-[0.2em] uppercase text-sm mb-4">Our Philosophy</p>
              <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white">
                The Pillars of <span className="text-champagne-gold italic font-light">Euphoria</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {pillars.map((pillar, index) => (
                <div key={index} className="reveal text-center group" style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="w-20 h-20 mx-auto rounded-full border border-champagne-gold/30 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-champagne-gold/10">
                    <span className="material-symbols-outlined text-3xl text-champagne-gold" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48" }}>{pillar.icon}</span>
                  </div>
                  <h3 className="font-display-md text-2xl mb-4 text-white group-hover:text-champagne-gold transition-colors duration-300">{pillar.title}</h3>
                  <p className="font-body-md text-white/70 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
