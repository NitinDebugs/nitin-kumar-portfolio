import React from 'react';
import { motion } from 'framer-motion';
import { useMedia } from '../context/MediaContext';
import { ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  const { media } = useMedia();



  return (
    <section id="about" className="bg-bg/60 py-16 md:py-24 overflow-hidden border-t border-stroke/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
              About
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-display italic text-text-primary tracking-tight">
            A little <span className="text-gradient">about me</span>
          </h2>
        </motion.div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text bio details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Pull Quote */}
            <div className="relative pl-4 border-l-2 border-stroke">
              <p className="font-display italic text-2xl sm:text-3xl text-text-primary leading-snug">
                "I design what I build, and build what I design."
              </p>
            </div>

            {/* Bios */}
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
              I'm Nitin Kumar, a Frontend Developer and Graphic Designer passionate about crafting eye-catching digital experiences. I combine design sensibility with frontend skills to build interfaces that feel alive — not just functional.
            </p>

            <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
              I'm deeply interested in how AI is reshaping both design and development. From building AI-powered tools like MediMind to using prompt engineering to accelerate creative workflows — I believe the future belongs to those who can talk to machines creatively.
            </p>

            {/* Link Button to Drive */}
            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1TjYEiMeRBX3DjiCGaP5FR688nuneWyDT/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center rounded-full text-xs font-semibold px-7 py-3.5 border-2 border-stroke bg-bg hover:border-transparent text-text-primary hover:scale-105 transition-all duration-300 group focus:outline-none cursor-pointer"
              >
                <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
                View Full Portfolio Drive <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] bg-surface/70 backdrop-blur-sm border border-stroke rounded-3xl overflow-hidden group shadow-2xl">
              
              {/* Profile Image */}
              <img
                src={media.profile}
                alt="Nitin Kumar Profile Avatar"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
              />

              {/* Dark Vector Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent pointer-events-none" />



              {/* Vector status tag */}
              {media.profile.startsWith('data:image/svg') && (
                <div className="absolute bottom-4 left-4 z-20 bg-bg/85 border border-dashed border-stroke/70 rounded-lg px-2.5 py-1 text-[9px] text-muted pointer-events-none select-none">
                  Vector Avatar
                </div>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default About;
