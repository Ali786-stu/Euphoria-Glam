import React, { useState } from 'react';

export default function Header() {
  const path = window.location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-cream-bg/90 backdrop-blur-md border-b border-champagne-gold/20">
      <nav className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <div className="flex-shrink-0">
          <a href="/">
            <img src="/logo.png" alt="Euphoria Glam Makeup Studio Logo" className="h-12 md:h-16 w-auto drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]" />
          </a>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a className={`font-label-caps text-label-caps uppercase tracking-[0.15em] hover:text-gold-leaf transition-colors duration-300 ${path === '/' ? 'text-primary border-b-2 border-champagne-gold pb-1' : 'text-on-surface-variant'}`} href="/">Portfolio</a>
          <div className="relative group">
            <a className={`font-label-caps text-label-caps uppercase tracking-[0.15em] hover:text-gold-leaf transition-colors duration-300 pb-1 cursor-pointer ${path === '/services' ? 'text-primary border-b-2 border-champagne-gold' : 'text-on-surface-variant'}`} href="/services">
              Services
            </a>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-6 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white shadow-xl border-t-2 border-champagne-gold rounded-b-md overflow-hidden">
                <ul className="flex flex-col text-charcoal font-body-md font-semibold text-[15px]">
                  <li><a href="#" className="block px-5 py-3 hover:bg-cream-bg hover:text-champagne-gold transition-colors border-b border-gray-100">Make Up</a></li>
                  <li><a href="#" className="block px-5 py-3 hover:bg-cream-bg hover:text-champagne-gold transition-colors border-b border-gray-100">Hair Service</a></li>
                  <li><a href="#" className="block px-5 py-3 hover:bg-cream-bg hover:text-champagne-gold transition-colors border-b border-gray-100">Skin Services</a></li>
                  <li><a href="#" className="block px-5 py-3 hover:bg-cream-bg hover:text-champagne-gold transition-colors border-b border-gray-100">Body Services</a></li>
                  <li><a href="#" className="block px-5 py-3 hover:bg-cream-bg hover:text-champagne-gold transition-colors">Pedicure Manicure</a></li>
                </ul>
              </div>
            </div>
          </div>
          <a className={`font-label-caps text-label-caps uppercase tracking-[0.15em] hover:text-gold-leaf transition-colors duration-300 ${path === '/academy' ? 'text-primary border-b-2 border-champagne-gold pb-1' : 'text-on-surface-variant'}`} href="/academy">Academy</a>
          <a className={`font-label-caps text-label-caps uppercase tracking-[0.15em] hover:text-gold-leaf transition-colors duration-300 ${path === '/about' ? 'text-primary border-b-2 border-champagne-gold pb-1' : 'text-on-surface-variant'}`} href="/about">About</a>
          <a className={`font-label-caps text-label-caps uppercase tracking-[0.15em] hover:text-gold-leaf transition-colors duration-300 text-on-surface-variant`} href="/#contact">Contact</a>
        </div>

        {/* Right Actions: Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="/#contact" className="bg-charcoal text-white px-4 py-2 md:px-8 md:py-3 font-label-caps text-[10px] md:text-xs uppercase tracking-[0.15em] rounded-none btn-hover-fill fill-gold whitespace-nowrap">
            Book Now
          </a>
          
          <button 
            className="md:hidden text-charcoal p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-cream-bg border-b border-champagne-gold/20 shadow-2xl z-40">
          <ul className="flex flex-col py-4 font-label-caps uppercase tracking-[0.15em] text-sm text-charcoal">
            <li><a href="/" className="block px-6 py-4 border-b border-champagne-gold/10">Portfolio</a></li>
            <li><a href="/services" className="block px-6 py-4 border-b border-champagne-gold/10">Services</a></li>
            <li><a href="/academy" className="block px-6 py-4 border-b border-champagne-gold/10">Academy</a></li>
            <li><a href="/about" className="block px-6 py-4 border-b border-champagne-gold/10">About</a></li>
            <li><a href="/#contact" className="block px-6 py-4">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
