import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Compass } from 'lucide-react';

const SOCIALS = [
  {
    label: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    url: 'https://www.linkedin.com/in/nitin-kumar-8278ba25b',
  },
  {
    label: 'GitHub',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    url: 'https://github.com/NitinDebugs',
  },
  { label: 'Behance', icon: <Compass className="w-4 h-4" />, url: 'https://behance.net' },
];

export const Contact: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // GSAP Infinite Marquee
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const ctx = gsap.context(() => {
      gsap.to(marquee, {
        xPercent: -50,
        duration: 35,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const marqueeText = Array(10).fill('DESIGNING THE FUTURE • ').join('');

  return (
    <section
      id="contact"
      className="relative w-full pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden bg-bg/60 border-t border-stroke/20 flex flex-col justify-between"
    >
      {/* Extra background overlay to darken the persistent video for readability */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* 2. Loop Marquee Banner */}
      <div className="relative z-20 w-full overflow-hidden border-t border-b border-stroke/40 py-3.5 mb-14 bg-surface/40 backdrop-blur-sm select-none">
        <div className="flex whitespace-nowrap">
          <div ref={marqueeRef} className="flex gap-4">
            <span className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-[0.4em] pr-4">
              {marqueeText}
            </span>
            {/* Repeated for seamless join */}
            <span className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-[0.4em]">
              {marqueeText}
            </span>
          </div>
        </div>
      </div>

      {/* 3. CTA Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-display italic text-text-primary tracking-tight">
            Let's <span className="text-gradient">work</span> together
          </h2>

          <p className="text-xs sm:text-sm text-muted max-w-md mx-auto font-light leading-relaxed">
            Open to freelance, collaborations, and full-time opportunities. Drop me a line!
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            {/* Email Button */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=nitinktr2003@gmail.com&su=Hello Nitin — Let's Work Together&body=Hi Nitin,"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center rounded-full text-xs font-semibold px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105 cursor-pointer group shadow-lg focus:outline-none"
            >
              {/* Gradient border ring on hover */}
              <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300 animate-gradient-shift" />
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </a>

            {/* View Portfolio Drive */}
            <a
              href="https://drive.google.com/file/d/1TjYEiMeRBX3DjiCGaP5FR688nuneWyDT/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center rounded-full text-xs font-semibold px-7 py-3.5 border border-stroke bg-bg/60 hover:border-transparent text-text-primary hover:scale-105 transition-all duration-300 group focus:outline-none cursor-pointer shadow-lg"
            >
              <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
              View Drive <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          {/* Fallback mailto link */}
          <p className="text-[10px] text-muted font-light mt-3">
            Using a different client?{" "}
            <a
              href="mailto:nitinktr2003@gmail.com"
              className="underline text-text-primary/75 hover:text-text-primary transition-colors cursor-pointer"
            >
              nitinktr2003@gmail.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* 4. Footer Bar */}
      <div className="relative z-20 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 border-t border-stroke/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-[10px] sm:text-xs text-muted font-light tracking-wide select-none">
          &copy; 2026 Nitin Kumar. All rights reserved.
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-3">
          {SOCIALS.map((soc) => (
            <a
              key={soc.label}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-stroke bg-surface hover:border-white/20 text-muted hover:text-text-primary transition-all duration-300 flex items-center justify-center focus:outline-none shadow-sm cursor-pointer"
              title={soc.label}
            >
              {soc.icon}
            </a>
          ))}
        </div>

        {/* Right: Pulsing Availability Badge */}
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[9px] sm:text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
            Available for projects
          </span>
        </div>

      </div>

    </section>
  );
};
export default Contact;
