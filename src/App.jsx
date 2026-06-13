import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BrushScrollEffect from './components/BrushScrollEffect'
import OurWorksReels from './components/OurWorksReels'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import AcademyCTA from './components/AcademyCTA'
import Footer from './components/Footer'
import AcademyPage from './components/AcademyPage'
import AboutPage from './components/AboutPage'

function App() {
  const path = window.location.pathname;

  useEffect(() => {
    // Reveal on scroll
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }

    // Parallax effect
    function parallax() {
      const parallaxBg = document.querySelector('.parallax-bg');
      let scrollPosition = window.scrollY;
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px) scale(1.1)`;
      }
    }

    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll", parallax);

    // Initial check
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", parallax);
    };
  }, []);

  // Simple routing
  if (path === '/academy') {
    return <AcademyPage />;
  }

  if (path === '/about') {
    return <AboutPage />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrushScrollEffect />
        <OurWorksReels />
        <WhyChooseUs />
        <Contact />
        <FAQ />
        <AcademyCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
