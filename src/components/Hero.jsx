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
          <h1 className="font-display-lg text-display-lg mb-8 reveal">The Art of <br/><Cover className="italic font-normal">Transformation</Cover></h1>
          <div className="reveal delay-200">
            <button className="border border-white/40 bg-white/10 backdrop-blur-sm text-white px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] btn-hover-fill fill-white">
              Explore Our Craft
            </button>
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
