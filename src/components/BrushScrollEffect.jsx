import React, { useRef } from "react";
import { useScroll, useSpring, useInView } from "motion/react";
import SignatureService from "./SignatureService";
import ArtisanalHair from "./ArtisanalHair";

export default function BrushScrollEffect() {
  const containerRef = useRef(null);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full">
      <SignatureService />
      <ArtisanalHair scrollProgress={smoothProgress} isContainerInView={isInView} />
    </div>
  );
}
