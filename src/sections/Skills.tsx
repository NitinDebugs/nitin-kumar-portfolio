import React from 'react';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  level: number;
}

const FRONTEND_SKILLS: SkillItem[] = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 75 },
  { name: 'React.js', level: 78 },
];

const DESIGN_SKILLS: SkillItem[] = [
  { name: 'Graphic Design', level: 99.99 },
  { name: 'Canva', level: 99.99 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Visual Communication', level: 85 },
];

const OTHER_TOOLS = [
  'Prompt Engineering',
  'Java (basics)',
  'AI Tools',
  'Vercel',
  'Git & GitHub',
  'Figma (basics)',
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-bg/60 py-16 md:py-24 overflow-hidden border-t border-stroke/20">
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
              Skills
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-display italic text-text-primary tracking-tight">
            What I <span className="text-gradient">know</span>
          </h2>
          {/* Subtext */}
          <p className="text-xs sm:text-sm text-muted mt-2 max-w-md font-light leading-relaxed">
            Technologies, tools, and disciplines I work with.
          </p>
        </motion.div>

        {/* 3-Column Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          
          {/* Column 1 — Frontend Development */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-[rgba(137,170,204,0.3)] backdrop-blur-md p-6 relative overflow-hidden group cursor-default transition-all duration-500 ease-out shadow-xl"
          >
            {/* Glassmorphism hover glow — accent gradient top border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(137,170,204,0.08) 0%, rgba(78,133,191,0.05) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(137,170,204,0.2), 0 8px 32px rgba(137,170,204,0.08)"
              }}
            />
            
            <h3 className="text-xs uppercase tracking-[0.3em] mb-6 text-muted group-hover:text-[#89AACC] transition-colors duration-300">
              Frontend Development
            </h3>

            <div className="space-y-5">
              {FRONTEND_SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-text-primary">{skill.name}</span>
                    <span className="text-muted tabular-nums">{skill.level}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="h-1.5 bg-white/10 group-hover:bg-white/15 transition-colors duration-300 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                      className="h-full rounded-full accent-gradient"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Design */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-[rgba(137,170,204,0.3)] backdrop-blur-md p-6 relative overflow-hidden group cursor-default transition-all duration-500 ease-out shadow-xl"
          >
            {/* Glassmorphism hover glow — accent gradient top border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(137,170,204,0.08) 0%, rgba(78,133,191,0.05) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(137,170,204,0.2), 0 8px 32px rgba(137,170,204,0.08)"
              }}
            />

            <h3 className="text-xs uppercase tracking-[0.3em] mb-6 text-muted group-hover:text-[#89AACC] transition-colors duration-300">
              Design
            </h3>

            <div className="space-y-5">
              {DESIGN_SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-text-primary">{skill.name}</span>
                    <span className="text-muted tabular-nums">{skill.level}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="h-1.5 bg-white/10 group-hover:bg-white/15 transition-colors duration-300 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                      className="h-full rounded-full accent-gradient"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3 — Other Tools */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-[rgba(137,170,204,0.3)] backdrop-blur-md p-6 relative overflow-hidden group cursor-default transition-all duration-500 ease-out shadow-xl flex flex-col"
          >
            {/* Glassmorphism hover glow — accent gradient top border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(137,170,204,0.08) 0%, rgba(78,133,191,0.05) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(137,170,204,0.2), 0 8px 32px rgba(137,170,204,0.08)"
              }}
            />

            <h3 className="text-xs uppercase tracking-[0.3em] mb-6 text-muted group-hover:text-[#89AACC] transition-colors duration-300">
              Tools & Disciplines
            </h3>

            <div className="flex flex-wrap gap-2 pt-2">
              {OTHER_TOOLS.map((tool, idx) => (
                <motion.div
                  key={tool}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15, delay: idx * 0.05 }}
                  className="relative rounded-full text-xs font-medium px-4 py-2 border border-stroke bg-bg hover:border-transparent text-text-primary group/pill cursor-pointer shadow-inner"
                >
                  <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover/pill:opacity-100 -z-10 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Aesthetic bottom visual element */}
            <div className="flex-1 flex items-end justify-center pt-8 md:pt-4 opacity-15">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-gradient stroke-current stroke-[2]" fill="none">
                <path d="M10,90 Q50,10 90,90" />
                <path d="M10,90 L90,90" />
                <circle cx="50" cy="50" r="10" />
              </svg>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Skills;
