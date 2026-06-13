import { useState, useEffect } from "react";
import { motion, useTransform } from "motion/react";

export default function ArtisanalHair({ scrollProgress, isContainerInView }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop values
  const deskY = useTransform(
    scrollProgress || { get: () => 1 },
    [0, 0.6, 1],
    ["-100vh", "0vh", "0vh"],
  );
  const deskX = useTransform(
    scrollProgress || { get: () => 1 },
    [0, 0.6, 1],
    ["-50vw", "0vw", "0vw"],
  );
  const deskScale = useTransform(
    scrollProgress || { get: () => 1 },
    [0, 0.6, 1],
    [2.5, 1, 1],
  );

  // Mobile values: Needs to go higher to clear the stacked text, and centered horizontally
  const mobY = useTransform(
    scrollProgress || { get: () => 1 },
    [0, 0.6, 1],
    ["-140svh", "0svh", "0svh"],
  );
  const mobX = useTransform(
    scrollProgress || { get: () => 1 },
    [0, 0.6, 1],
    ["-20vw", "0vw", "0vw"],
  );
  const mobScale = useTransform(
    scrollProgress || { get: () => 1 },
    [0, 0.6, 1],
    [1.8, 1, 1],
  );

  const y = isMobile ? mobY : deskY;
  const x = isMobile ? mobX : deskX;
  const scale = isMobile ? mobScale : deskScale;

  const rotate = useTransform(
    scrollProgress || { get: () => 1 },
    [0, 0.3, 0.6, 1],
    [-10, 25, -95, -105],
  );

  return (
    <section className="py-section-padding bg-soft-blush/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="reveal absolute top-4 left-4 w-[90%] h-[90%] border border-champagne-gold/50 z-0"></div>
              <img
                alt="Luxury Hair Styling Tools"
                className="reveal relative w-full h-auto object-contain drop-shadow-2xl z-10"
                src="/box.png"
              />
              {/* The Brush anchored to the sponge */}
              {scrollProgress && (
                <motion.div
                  initial={{ x: "-100vw", opacity: 0 }}
                  animate={
                    isContainerInView
                      ? { x: 0, opacity: 1 }
                      : { x: "-100vw", opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    delay: 0.1,
                  }}
                  className="absolute inset-0 z-20 pointer-events-none"
                >
                  <motion.img
                    src="/brush.png"
                    className="absolute object-contain drop-shadow-2xl pointer-events-none"
                    style={{
                      width: "23%",
                      bottom: "15%",
                      right: "18%",
                      y,
                      x,
                      scale,
                      rotate,
                    }}
                  />
                </motion.div>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 reveal delay-100">
            <h2 className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-[0.2em] mb-4 text-left">
              The Studio
            </h2>
            <h3 className="font-display-lg text-headline-md mb-6">
              Artisanal Hair <br />
              Sculpting
            </h3>
            <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">
              From red-carpet waves to avant-garde structures, our hair division
              focuses on the architectural integrity of every strand. We utilize
              elite-tier tools and professional-grade botanical formulas to
              ensure your transformation is as healthy as it is visually
              stunning.
            </p>
            <a
              className="inline-flex items-center text-charcoal font-label-caps text-label-caps uppercase tracking-[0.15em] border-b border-champagne-gold pb-1 hover:text-gold-leaf transition-all duration-300"
              href="#"
            >
              Hair Collection{" "}
              <span className="material-symbols-outlined ml-2 text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
