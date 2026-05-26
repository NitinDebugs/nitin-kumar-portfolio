import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  initials: string;
  duration: string;
  isActive?: boolean;
  description: string;
  skills: string[];
}

const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'exp-1',
    role: 'Graphic Designer Intern',
    company: 'Brain Quest',
    initials: 'BQ',
    duration: '2 months · Currently Working',
    isActive: true,
    description: 'Creating visual content, brand assets, and design systems for digital and print media.',
    skills: ['Graphic Design', 'Canva', 'Brand Identity', 'Visual Communication'],
  },
  {
    id: 'exp-2',
    role: 'Graphic Designer Intern',
    company: 'Terri India Pvt. Limited',
    initials: 'TI',
    duration: '2 months',
    isActive: false,
    description: 'Worked on digital design assets and marketing creatives for various campaigns.',
    skills: ['Graphic Design', 'Adobe Suite', 'Social Media Design'],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-bg/60 py-16 md:py-24 overflow-hidden border-t border-stroke/20">
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
              Experience
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-display italic text-text-primary tracking-tight">
            Work <span className="text-gradient">history</span>
          </h2>
          {/* Subtext */}
          <p className="text-xs sm:text-sm text-muted mt-2 max-w-md font-light leading-relaxed">
            Where I've contributed my design and development skills.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-stroke/80 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
              className="relative"
            >
              {/* Dot Marker on Timeline */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex items-center justify-center">
                {exp.isActive ? (
                  <div className="w-5 h-5 rounded-full bg-surface border-2 border-stroke flex items-center justify-center shadow-lg relative">
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-surface border-2 border-stroke flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-stroke" />
                  </div>
                )}
              </div>

              {/* Entry Card */}
              <div className="bg-surface/70 backdrop-blur-sm border border-stroke hover:border-stroke/85 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-xl flex flex-col md:flex-row gap-6 items-start group relative overflow-hidden">
                
                {/* Visual Top Highlight bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:accent-gradient transition-all duration-300" />

                {/* Left: Company Avatar */}
                <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center relative focus:outline-none select-none">
                  {/* Accent ring */}
                  <div className="absolute inset-0 rounded-full accent-gradient opacity-80 group-hover:rotate-180 transition-transform duration-700" />
                  <div className="absolute inset-[1.5px] bg-surface rounded-full flex items-center justify-center">
                    <span className="font-display italic text-[16px] text-text-primary font-bold">
                      {exp.initials}
                    </span>
                  </div>
                </div>

                {/* Right: Content details */}
                <div className="flex-1 space-y-3.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      {/* Role Name */}
                      <h3 className="text-lg md:text-xl font-bold text-text-primary group-hover:text-gradient transition-colors duration-300">
                        {exp.role}
                      </h3>
                      {/* Company Label */}
                      <p className="text-xs text-muted font-medium mt-0.5 tracking-wider uppercase">
                        {exp.company}
                      </p>
                    </div>

                    {/* Status Badge & Duration */}
                    <div className="flex flex-wrap items-center gap-2">
                      {exp.isActive && (
                        <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider select-none animate-pulse">
                          Active
                        </span>
                      )}
                      <span className="text-[10px] text-muted font-light tracking-wide bg-bg px-2.5 py-1 border border-stroke/40 rounded-full select-none">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description text */}
                  <p className="text-xs sm:text-sm text-muted/95 leading-relaxed font-light">
                    {exp.description}
                  </p>

                  {/* Skills Tag block */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] sm:text-[10px] bg-bg/50 border border-stroke/60 rounded-full px-3 py-1 text-muted select-none font-medium hover:border-[#89AACC]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
export default Experience;
