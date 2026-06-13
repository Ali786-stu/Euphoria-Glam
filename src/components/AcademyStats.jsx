import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 50, suffix: "+", label: "Trained\nProfessionals" },
  { value: 500, suffix: "+", label: "Students\nPlaced" },
  { value: 30, suffix: "+", label: "Courses\nAvailable" },
  { value: 12, suffix: "+", label: "Winning\nAwards" }
];

function Counter({ targetValue, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = targetValue;
          const duration = 2500; // 2.5 seconds
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // easeOutExpo for a nice fast start and slow finish
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end); // Ensure it ends exactly on the target
            }
          };
          window.requestAnimationFrame(step);
          
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AcademyStats() {
  return (
    <section className="relative py-24 bg-[#fcfbf9] overflow-hidden">
      {/* Subtle Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0A30 30 0 0 1 0 30A30 30 0 0 1 30 60A30 30 0 0 1 60 30A30 30 0 0 1 30 0ZM30 58A28 28 0 0 0 2 30A28 28 0 0 0 30 2A28 28 0 0 0 58 30A28 28 0 0 0 30 58Z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: "120px 120px"
        }}
      ></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content: Text */}
          <div className="w-full lg:w-5/12 reveal">
            <h2 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
              We Have It's a Bold Mission & We are already on it
            </h2>
            
            {/* Decorative Divider */}
            <div className="flex items-center gap-4 mt-4">
              <span 
                className="material-symbols-outlined text-champagne-gold text-3xl drop-shadow-sm"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48" }}
              >
                spa
              </span>
              <div className="h-[2px] w-24 bg-champagne-gold/60 rounded-full"></div>
            </div>
          </div>

          {/* Right Content: Stats Grid */}
          <div className="w-full lg:w-1/2 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-champagne-gold rounded-xl p-8 md:p-10 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center min-h-[220px]"
                >
                  <h3 className="font-display-lg text-5xl md:text-6xl text-white mb-4 drop-shadow-sm">
                    <Counter targetValue={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="font-body-md font-bold text-base md:text-lg text-white whitespace-pre-line leading-relaxed drop-shadow-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
