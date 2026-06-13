export default function Footer() {
  return (
    <footer className="bg-charcoal text-champagne-gold relative overflow-hidden">
      {/* Huge Background Marquee */}
      <div className="absolute bottom-32 md:bottom-20 left-0 w-full overflow-hidden pointer-events-none select-none z-0 flex items-end">
        <div className="animate-marquee whitespace-nowrap opacity-10">
          <span className="font-display-lg text-[18vw] md:text-[14vw] xl:text-[220px] leading-none text-white uppercase pr-16">
            Euphoria Glam Makeup Studio •
          </span>
          <span className="font-display-lg text-[18vw] md:text-[14vw] xl:text-[220px] leading-none text-white uppercase pr-16">
            Euphoria Glam Makeup Studio •
          </span>
          <span className="font-display-lg text-[18vw] md:text-[14vw] xl:text-[220px] leading-none text-white uppercase pr-16">
            Euphoria Glam Makeup Studio •
          </span>
          <span className="font-display-lg text-[18vw] md:text-[14vw] xl:text-[220px] leading-none text-white uppercase pr-16">
            Euphoria Glam Makeup Studio •
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-gutter py-section-padding border-t border-champagne-gold/10 flex flex-col md:flex-row justify-between">
        <div className="mb-12 md:mb-0">
          <div className="mb-6">
            <img src="/logo.png" alt="Euphoria Glam Makeup Studio Logo" className="h-16 md:h-20 w-auto drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]" />
          </div>
          <p className="font-body-md text-surface-variant/70 max-w-xs leading-loose">
            Defining the standard for high-end editorial makeup and advanced artistry education.
          </p>
          <div className="flex space-x-6 mt-8">
            <a className="text-champagne-gold hover:text-[#1877F2] transition-colors duration-300" href="#" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a className="text-champagne-gold hover:text-[#E4405F] transition-colors duration-300" href="#" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a className="text-champagne-gold hover:text-[#25D366] transition-colors duration-300" href="#" aria-label="WhatsApp">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path fillRule="evenodd" d="M12.031 2c-5.523 0-10 4.477-10 10 0 1.765.457 3.428 1.264 4.887L2 22l5.244-1.258A9.957 9.957 0 0012.031 22c5.522 0 10-4.477 10-10s-4.478-10-10-10zm.014 18.236c-1.507 0-2.946-.388-4.22-1.104l-.302-.17-3.13.751.83-3.007-.186-.305a8.214 8.214 0 01-1.218-4.321c0-4.542 3.696-8.237 8.24-8.237s8.24 3.695 8.24 8.237-3.696 8.238-8.24 8.238zm4.516-6.177c-.247-.124-1.464-.722-1.691-.805-.228-.083-.393-.124-.56.124-.165.248-.64 .805-.783.97-.145.166-.289.186-.536.062-.248-.124-1.045-.385-1.99-1.23-.736-.656-1.232-1.467-1.377-1.715-.144-.248-.015-.382.109-.505.112-.112.247-.289.371-.433.124-.145.165-.248.248-.413.083-.166.041-.31-.02-.434-.063-.124-.56-1.343-.768-1.838-.201-.482-.406-.417-.56-.425-.145-.007-.31-.007-.476-.007-.165 0-.433.062-.66.31-.227.248-.866.846-.866 2.064 0 1.218.887 2.394 1.01 2.56.124.166 1.748 2.665 4.234 3.738 2.486 1.073 2.486.722 2.94.68.454-.041 1.464-.598 1.67-1.176.207-.578.207-1.073.145-1.176-.062-.103-.227-.165-.474-.289z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:gap-x-24">
          <div>
            <h4 className="font-label-caps text-label-caps uppercase tracking-widest text-white mb-6">The Studio</h4>
            <ul className="space-y-4">
              <li><a className="text-surface-variant/70 font-body-md hover:text-white transition-colors duration-200 block py-1" href="/services">Services</a></li>
              <li><a className="text-surface-variant/70 font-body-md hover:text-white transition-colors duration-200 block py-1" href="/">Portfolio</a></li>
              <li><a className="text-surface-variant/70 font-body-md hover:text-white transition-colors duration-200 block py-1" href="/services">Bridal</a></li>
              <li><a className="text-surface-variant/70 font-body-md hover:text-white transition-colors duration-200 block py-1" href="/#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps uppercase tracking-widest text-white mb-6">The Academy</h4>
            <ul className="space-y-4">
              <li><a className="text-surface-variant/70 font-body-md hover:text-white transition-colors duration-200 block py-1" href="/academy">Masterclasses</a></li>
              <li><a className="text-surface-variant/70 font-body-md hover:text-white transition-colors duration-200 block py-1" href="/academy">Private 1-on-1</a></li>
              <li><a className="text-surface-variant/70 font-body-md hover:text-white transition-colors duration-200 block py-1" href="#">Privacy Policy</a></li>
              <li><a className="text-surface-variant/70 font-body-md hover:text-white transition-colors duration-200 block py-1" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-gutter pb-12 border-t border-white/5 pt-8 text-center md:text-left">
        <p className="font-body-md text-[10px] tracking-[0.2em] text-surface-variant/40 uppercase">© 2024 EUPHORIA GLAM MAKEUP STUDIO. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
