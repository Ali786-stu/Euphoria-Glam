export default function Newsletter() {
  return (
    <section className="py-section-padding bg-soft-blush/20 border-y border-champagne-gold/10">
      <div className="max-w-2xl mx-auto px-gutter text-center reveal">
        <h3 className="font-display-lg text-headline-md mb-6">Stay Informed</h3>
        <p className="font-body-md text-on-surface-variant mb-8">Join our inner circle for exclusive updates on masterclasses, seasonal trends, and studio residency openings.</p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            className="flex-grow bg-transparent border-b border-charcoal/30 focus:border-champagne-gold transition-colors py-4 font-label-caps text-[10px] outline-none" 
            placeholder="EMAIL ADDRESS" 
            type="email" 
          />
          <button 
            className="bg-charcoal text-white px-8 py-4 font-label-caps text-label-caps uppercase tracking-[0.15em] hover:bg-champagne-gold transition-all duration-300" 
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
