import React from 'react';

export default function Contact() {
  return (
    <section 
      id="contact"
      className="py-24 text-cream-bg relative overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/contact-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark Cinematic Overlay - Less opacity and no blur so the background is clearly visible */}
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-champagne-gold/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Form */}
          <div className="reveal order-2 lg:order-1 bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
            <h2 className="font-display-md text-headline-sm text-champagne-gold mb-2">Get In Touch</h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-16 bg-champagne-gold/60 rounded-full"></div>
              <span 
                className="material-symbols-outlined text-champagne-gold text-2xl drop-shadow-sm"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
              >
                spa
              </span>
              <div className="h-[2px] w-16 bg-champagne-gold/60 rounded-full"></div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border-b border-white/20 focus:border-champagne-gold focus:outline-none text-white py-3 px-2 transition-colors placeholder:text-white/40"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-white/20 focus:border-champagne-gold focus:outline-none text-white py-3 px-2 transition-colors placeholder:text-white/40"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  placeholder="Contact Number" 
                  className="w-full bg-transparent border-b border-white/20 focus:border-champagne-gold focus:outline-none text-white py-3 px-2 transition-colors placeholder:text-white/40"
                />
                <div className="relative">
                  <select 
                    className="w-full bg-transparent border-b border-white/20 focus:border-champagne-gold focus:outline-none text-white py-3 px-2 transition-colors appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-black/50">Select Service</option>
                    <option value="makeup" className="text-black">Make Up</option>
                    <option value="hair" className="text-black">Hair Service</option>
                    <option value="skin" className="text-black">Skin Services</option>
                    <option value="body" className="text-black">Body Services</option>
                    <option value="pedicure" className="text-black">Pedicure Manicure</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                    expand_more
                  </span>
                </div>
              </div>
              <textarea 
                placeholder="Write message" 
                rows="4"
                className="w-full bg-transparent border-b border-white/20 focus:border-champagne-gold focus:outline-none text-white py-3 px-2 transition-colors placeholder:text-white/40 resize-none"
              ></textarea>
              <button 
                type="button" 
                className="mt-4 flex items-center justify-center gap-2 bg-champagne-gold text-dark-bg font-label-caps uppercase tracking-widest text-sm px-8 py-4 rounded-full btn-hover-fill fill-white hover:scale-105 w-full md:w-auto"
              >
                <span>Submit</span>
                <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
              </button>
            </form>
          </div>

          {/* Right Column: Text */}
          <div className="reveal order-1 lg:order-2">
            <h2 className="font-display-lg text-headline-md text-white mb-4">
              Euphoria Glam Makeup Studio
            </h2>
            <div className="flex items-center justify-start gap-4 mb-8">
              <div className="h-[2px] w-20 md:w-24 bg-champagne-gold/60 rounded-full"></div>
              <span 
                className="material-symbols-outlined text-champagne-gold text-3xl drop-shadow-sm"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
              >
                spa
              </span>
              <div className="h-[2px] w-20 md:w-24 bg-champagne-gold/60 rounded-full"></div>
            </div>
            <p className="font-label-caps text-sm text-champagne-gold uppercase tracking-[0.15em] mb-8 leading-relaxed">
              Need to look best for a special day? Why not let us help. Schedule your appointment today with Euphoria Glam Makeup Studio.
            </p>
            <div className="space-y-6 font-body-lg text-white/80 leading-relaxed">
              <p>
                Euphoria Glam Makeup Studio is a professional makeup studio. We specialize in bridal makeup. We offer you the best makeup services, transforming your look and making sure that you are looking stunningly pretty on your wedding day and throughout the nuptial ceremonies.
              </p>
              <p>
                Euphoria Glam Makeup Studio Artists understand your demands and provide you with the makeup that goes along well with your wedding ensemble, making sure that you look overall like a beautiful princess.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
