import { Cover } from "./ui/cover";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 parallax-bg scale-110">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/IMG_2419%20(1).MP4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60"></div>
      </div>
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-32 xl:px-40">
        <div className="max-w-3xl text-left text-white">
          <p className="font-label-caps text-label-caps uppercase tracking-[0.3em] mb-6 reveal">Bespoke Beauty Experiences</p>
          <h1 className="font-display-lg text-[11vw] sm:text-[9vw] md:text-7xl lg:text-[100px] leading-[1.1] mb-8 reveal">The Art of <br/><Cover className="italic font-normal">Transformation</Cover></h1>
          <div className="reveal delay-200 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <button className="border border-white/40 bg-white/10 backdrop-blur-sm text-white px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] btn-hover-fill fill-white shrink-0">
              Explore Our Craft
            </button>
            
            <div className="flex flex-row items-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-3 items-center">
                <img className="w-10 h-10 md:w-11 md:h-11 shrink-0 border-2 border-charcoal/80 object-cover" style={{ borderRadius: '50%', objectPosition: 'center top' }} src="/Gallery/1.png" alt="Client" />
                <img className="w-10 h-10 md:w-11 md:h-11 shrink-0 border-2 border-charcoal/80 object-cover" style={{ borderRadius: '50%', objectPosition: 'center top' }} src="/Gallery/2.png" alt="Client" />
                <img className="w-10 h-10 md:w-11 md:h-11 shrink-0 border-2 border-charcoal/80 object-cover" style={{ borderRadius: '50%', objectPosition: 'center top' }} src="/Gallery/12.png" alt="Client" />
                <img className="w-10 h-10 md:w-11 md:h-11 shrink-0 border-2 border-charcoal/80 object-cover" style={{ borderRadius: '50%', objectPosition: 'center top' }} src="/Gallery/4.png" alt="Client" />
              </div>
              
              {/* Vertical line divider */}
              <div className="w-px h-10 bg-white/20"></div>

              {/* Rating and Text */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white/90 font-body-md text-sm font-semibold ml-1 tracking-wide">5.0</span>
                </div>
                <p className="text-white/70 font-body-sm text-xs tracking-wide">Trusted by <span className="text-[#3b82f6]">10,000+</span> brides</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] mb-4 text-white/70">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
