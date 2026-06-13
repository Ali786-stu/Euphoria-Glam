export default function Portfolio() {
  return (
    <section className="py-section-padding bg-cream-bg">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-20 reveal">
          <h2 className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-[0.3em] mb-4">Our Gallery</h2>
          <h3 className="font-display-lg text-display-lg">The Lookbook</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          {/* Column 1 */}
          <div className="space-y-12 reveal" style={{ transitionDelay: '100ms' }}>
            <div className="group relative overflow-hidden">
              <img 
                alt="Elite Studio Lookbook 1" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLvGROIIeV79yg715vsJSvtmMesFgLDQx_nEy1nJY0QjvpPJrP7Ocy0hjoblHxYq_GdYwXwq-R4emCFiKR1ZpeOIw6fMtQwOJK6e9fJY3n5KM5uMnZFQaneoZ5z6-nxDhoFhkKlkkGvNj-83AQEho7oUeEQgnvDaBBicoKJowdKHkzjMzo6b6GHDadGhQ0rAhTPssy4tmX2At0792J0tvNuoJxZ6TbN8dFdu2WxhOWqYNnSnStW5Y0v5HSmQ"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <p className="text-white italic font-display-lg text-headline-sm text-center">Midnight Radiance</p>
              </div>
            </div>
            <div className="pl-8 border-l border-champagne-gold/30">
              <p className="font-body-md text-on-surface-variant italic leading-relaxed">
                "Beauty is about enhancing what you have. Let yourself shine through."
              </p>
            </div>
          </div>
          {/* Column 2 (Center, Higher) */}
          <div className="space-y-12 reveal pb-24" style={{ transitionDelay: '300ms' }}>
            <div className="group relative overflow-hidden shadow-2xl">
              <img 
                alt="Elite Studio Lookbook 2" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLsJthK_9RJ-x0WMz19rqHxe8oxCMVgDckCejgjc2H8Kczakmq2N0z9pqlHAumf225mjTxC6GYUQ-RQZSAMAJGnfwp6soRGpnsB7tie6FOUUqcFI4T0LCzNRgXxttPlThWJweYGedNF6xMX3oZTw1_Vj1f3RgBW0WEbR-TtT5Xyf3E9P2rVnj-SibnsSlpwyqk_UuaMlwZt9No72BFj0aX4eQ41ovV4flGfd1Xe4kSNKQmfj34-x_LPuC9DS"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <p className="text-white italic font-display-lg text-headline-sm text-center">Bridal Opulence</p>
              </div>
            </div>
            <div className="text-center">
              <span className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-widest">Featured Series</span>
            </div>
          </div>
          {/* Column 3 */}
          <div className="space-y-12 reveal" style={{ transitionDelay: '500ms' }}>
            <div className="group relative overflow-hidden">
              <img 
                alt="Elite Studio Lookbook 3" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida/AP1WRLu_CLyF0fbrZVTY_z2zerhVxxINoZrZngHHQ4_pf3U6BsfSKmzzLYZ2Wr2W6jVJkzEKyFlkzY5C8mL1wYq_n06EgL_6xGc09rYyT5I_o1ZsJal-MLhpqFLjvJhx14iS8Tvd0m_t1ysU_8xsigFTAUfp3Fa5EIDuenffEYGx0n_BUyUFdFpl-VrDdM7aaOuwvXJ400mSIM8HIOdvJoR5AvbuYOaMxLwrDyNYIYvw-fscN1TojRb14gJzJLpZ"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <p className="text-white italic font-display-lg text-headline-sm text-center">Avant-Garde Luxe</p>
              </div>
            </div>
            <div className="pr-8 text-right border-r border-champagne-gold/30">
              <p className="font-body-md text-on-surface-variant italic leading-relaxed">
                Curating moments of unparalleled sophistication.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center reveal">
          <button className="bg-charcoal text-white px-12 py-5 font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-champagne-gold transition-all duration-300">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
