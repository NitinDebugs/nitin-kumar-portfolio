import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ROLES = ["Designer", "Developer", "Creator", "Prompt Engineer"];

interface HeroProps {
  onSeeWorksClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSeeWorksClick }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycling roles
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(roleInterval);
  }, []);

  // GSAP Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.name-reveal', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo('.blur-in', 
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.0, stagger: 0.1 },
        '-=0.8'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative overflow-hidden w-screen h-screen flex flex-col items-center justify-center text-center bg-transparent"
    >
      <div className="absolute inset-0 bg-black/10 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-bg/60 via-bg/30 to-transparent z-[1]" />

      {/* 2. Hero Content */}
      <div className="relative z-[2] max-w-4xl px-6 flex flex-col items-center">
        {/* Eyebrow */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8 font-semibold">
          PORTFOLIO '26
        </p>

        {/* Name */}
        <h1 className="name-reveal text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.95] tracking-tight text-text-primary mb-6 select-none">
          Nitin Kumar
        </h1>

        {/* Dynamic Role */}
        <div className="blur-in text-base sm:text-lg md:text-xl text-muted/90 font-medium mb-5 h-8 select-none flex items-center justify-center">
          <span>A&nbsp;</span>
          <div className="inline-block relative">
            <span
              key={roleIndex}
              className="font-display italic text-text-primary font-bold text-lg sm:text-xl md:text-2xl animate-role-fade-in inline-block text-gradient"
            >
              {ROLES[roleIndex]}
            </span>
          </div>
          <span>&nbsp;based in India.</span>
        </div>

        {/* Description */}
        <p className="blur-in text-xs sm:text-sm md:text-base text-muted max-w-md mb-10 leading-relaxed font-light">
          Crafting eye-catching interfaces where graphic design meets frontend development — powered by AI, driven by creativity.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap gap-4 justify-center items-center">
          {/* Button 1: Solid "See Works" */}
          <button
            onClick={onSeeWorksClick}
            className="relative rounded-full text-xs sm:text-sm font-semibold px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105 cursor-pointer group shadow-lg focus:outline-none"
          >
            {/* Gradient border ring on hover */}
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
            See Works
          </button>

          {/* Button 2: Outlined "View Portfolio" */}
          <a
            href="https://drive.google.com/file/d/1TjYEiMeRBX3DjiCGaP5FR688nuneWyDT/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-full text-xs sm:text-sm font-semibold px-7 py-3.5 border-2 border-stroke bg-bg hover:border-transparent text-text-primary hover:scale-105 transition-all duration-300 group flex items-center gap-1 shadow-lg focus:outline-none"
          >
            {/* Gradient border ring on hover */}
            <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
            View Portfolio <span className="font-sans">↗</span>
          </a>
        </div>
      </div>

      {/* 3. Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2 pointer-events-none select-none">
        <span className="text-[10px] text-muted uppercase tracking-[0.22em] font-medium opacity-80">
          SCROLL
        </span>
        <div className="w-[1.5px] h-10 bg-stroke/60 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#89AACC] to-[#4E85BF] animate-scroll-down rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
