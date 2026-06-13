import { motion } from "motion/react";

export default function SignatureService() {
  return (
    <section className="py-section-padding bg-cream-bg overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="w-4/5 md:w-3/4 mx-auto h-auto"></div>
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 border border-champagne-gold/30 -z-10 hidden md:block"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 reveal delay-100">
            <h2 className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-[0.2em] mb-4 text-left">
              Signature Service
            </h2>
            <h3 className="font-display-lg text-headline-md mb-6">
              Editorial Makeup <br />
              Artistry
            </h3>
            <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">
              At Elite Studio, we perceive makeup not as a mask, but as a
              precise instrument of self-expression. Our signature editorial
              approach blends high-fashion techniques with wearable
              sophistication, creating looks that resonate with timeless
              elegance and modern flair.
            </p>
            <a
              className="inline-flex items-center text-charcoal font-label-caps text-label-caps uppercase tracking-[0.15em] border-b border-champagne-gold pb-1 hover:text-gold-leaf transition-all duration-300"
              href="#"
            >
              The Makeup Gallery{" "}
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
