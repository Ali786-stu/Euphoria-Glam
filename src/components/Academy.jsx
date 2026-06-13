export default function Academy() {
  return (
    <section className="relative bg-charcoal py-section-padding overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 grayscale mix-blend-overlay">
        <img 
          alt="Woman in studio" 
          className="w-full h-full object-cover object-top" 
          src="https://lh3.googleusercontent.com/aida/AP1WRLv4mpeM7a9ZX3oNDFl8XsoUUnEwAyNcsdELyK8urp01XsR79S-2abDFtaLdQx5bQohycIeBwu4nZ8ZygwnZgmatCNWrb3mxetLw_ae0_5JFdvnfUQ8NgX-jJpCFQEmS6HHl-vBGztoDxhwWF-KfP2dtS1I2HvVULWKLy_wXReLPPcD3GHzwDI-g8gxE1VjEG5L2qkfOniHPPi5k3tp90fcIyFaRcxcpkMNGegCfry19jdXdXDm8kWXXi6Wn"
        />
      </div>
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="max-w-2xl reveal">
          <h2 className="font-label-caps text-label-caps text-champagne-gold uppercase tracking-[0.25em] mb-6">Educational Excellence</h2>
          <h3 className="font-display-lg text-display-lg text-white mb-8">The Elite Academy</h3>
          <p className="font-body-lg text-surface-variant mb-10 leading-relaxed">
            Elevate your professional trajectory with our masterclass series. Led by industry veterans, our academy offers immersive training for aspiring artists who demand rigor, technical mastery, and creative vision.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-champagne-gold text-charcoal px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-white transition-all duration-300">
              View Masterclasses
            </button>
            <button className="border border-champagne-gold/50 text-champagne-gold px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-champagne-gold/10 transition-all duration-300">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
