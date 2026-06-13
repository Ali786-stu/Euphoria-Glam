import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const reels = Array.from({ length: 10 }, (_, i) => `/Reels/${i + 1}.mp4`);
const galleryImages = Array.from({ length: 20 }, (_, i) => `/Gallery/${i + 1}.png`);

function ReelVideo({ src }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Force load if not ready
      if (videoRef.current.readyState === 0) {
        videoRef.current.load();
      }
      videoRef.current.play().catch(e => console.error("Video play error:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="flex-shrink-0 w-[240px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl relative cursor-pointer mx-4 group bg-black border border-white/10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        src={src}
        preload="auto"
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Play Icon Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 flex items-center justify-center pointer-events-none">
        <span className="material-symbols-outlined text-white text-5xl opacity-80 group-hover:opacity-0 transition-opacity duration-300 drop-shadow-md">
          play_circle
        </span>
      </div>
    </div>
  );
}

export default function OurWorksReels() {
  const [activeTab, setActiveTab] = useState('reels');
  // Duplicate reels to create a seamless infinite scroll loop
  const duplicatedReels = [...reels, ...reels];

  return (
    <section className="pt-16 pb-8 overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter mb-8 text-center reveal">
        <h2 className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-[0.2em] mb-2">
          Portfolio
        </h2>
        <h3 className="font-display-lg text-headline-md text-charcoal mb-4">
          Our Works
        </h3>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mt-2 mb-10">
          <div className="h-[2px] w-20 md:w-28 bg-champagne-gold/60 rounded-full"></div>
          <span 
            className="material-symbols-outlined text-champagne-gold text-3xl md:text-4xl drop-shadow-sm"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
          >
            spa
          </span>
          <div className="h-[2px] w-20 md:w-28 bg-champagne-gold/60 rounded-full"></div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <button 
            onClick={() => setActiveTab('reels')}
            className={`font-label-caps text-label-caps uppercase tracking-[0.15em] pb-2 border-b-2 transition-all duration-300 ${
              activeTab === 'reels' 
                ? 'border-champagne-gold text-charcoal' 
                : 'border-transparent text-charcoal/50 hover:text-charcoal'
            }`}
          >
            Reels
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`font-label-caps text-label-caps uppercase tracking-[0.15em] pb-2 border-b-2 transition-all duration-300 ${
              activeTab === 'gallery' 
                ? 'border-champagne-gold text-charcoal' 
                : 'border-transparent text-charcoal/50 hover:text-charcoal'
            }`}
          >
            Gallery
          </button>
        </div>
      </div>

      <div className="relative w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'reels' ? (
            <motion.div 
              key="reels"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative w-full overflow-hidden flex py-10"
            >
              <div className="flex w-max animate-marquee">
                {duplicatedReels.map((src, idx) => (
                  <ReelVideo key={idx} src={src} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-container-max mx-auto px-gutter py-10"
            >
              {/* Premium Masonry Grid */}
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 pb-16">
                {galleryImages.map((src, idx) => (
                  <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
                    <img 
                      src={src} 
                      alt={`Gallery Portrait ${idx + 1}`} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-champagne-gold/20 mix-blend-overlay transition-all duration-500 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
