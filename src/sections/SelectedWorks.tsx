import React from 'react';
import { motion } from 'framer-motion';
import { useMedia } from '../context/MediaContext';
import type { MediaKey } from '../context/MediaContext';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
  mediaKey: MediaKey;
  colSpan: string;
  aspect: string;
}

const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Bharat Campus Chat',
    subtitle: 'Indian Campus Connect Platform',
    description: 'A static frontend platform where Indian students connect, share, and collaborate with each other.',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://bharatcampuschat.vercel.app',
    mediaKey: 'project1',
    colSpan: 'md:col-span-7',
    aspect: 'aspect-video md:aspect-auto md:h-[400px]',
  },
  {
    id: 'project-2',
    title: 'MediMind AI',
    subtitle: 'AI Health Chatbot',
    description: 'An AI-powered health chatbot that helps users navigate medical queries with intelligent, conversational responses.',
    tags: ['React', 'Prompt Engineering', 'AI'],
    link: 'https://medimind-ai-health-chatbot.vercel.app',
    mediaKey: 'project2',
    colSpan: 'md:col-span-5',
    aspect: 'aspect-video md:aspect-auto md:h-[400px]',
  },
];

export const SelectedWorks: React.FC = () => {
  const { media } = useMedia();



  return (
    <section id="work" className="bg-bg/60 py-16 md:py-24 overflow-hidden border-t border-stroke/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                Selected Work
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display italic text-text-primary tracking-tight">
              Featured <span className="text-gradient">projects</span>
            </h2>
            {/* Subtext */}
            <p className="text-xs sm:text-sm text-muted mt-2 max-w-md font-light leading-relaxed">
              A selection of projects I've built — from concept to code.
            </p>
          </div>

          {/* Desktop Only View All Button */}
          <a
            href="https://github.com/NitinDebugs"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex relative items-center justify-center rounded-full text-xs font-semibold px-6 py-3 border border-stroke bg-surface hover:border-transparent text-text-primary hover:scale-105 transition-all duration-300 group focus:outline-none cursor-pointer"
          >
            <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
            View all work <span className="ml-1 text-[11px]">→</span>
          </a>
        </motion.div>

        {/* Projects Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {PROJECTS.map((project, idx) => {
            const currentImg = media[project.mediaKey];
            const newMediMindImage = media.project2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                className="group w-full h-[420px] perspective-[1200px] cursor-pointer"
              >
                <div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-style-preserve-3d group-hover:rotate-y-180">
                  
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-white/10">
                    {/* Project screenshot fills entire front */}
                    {project.id === 'project-2' ? (
                      <img
                        src={newMediMindImage}
                        alt="MediMind AI Health Chatbot"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img
                        src={currentImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-xs text-white/50 uppercase tracking-[0.3em] mb-1">{project.subtitle}</p>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden">
                    {/* Accent glow top */}
                    <div className="absolute top-0 left-0 right-0 h-px accent-gradient opacity-60" />
                    
                    <div>
                      <p className="text-xs text-[#89AACC] uppercase tracking-[0.3em] mb-3">{project.subtitle}</p>
                      <h3 className="text-2xl font-display italic text-white mb-4">{project.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed mb-6">{project.description}</p>
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Live link button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-bg bg-text-primary hover:scale-105 transition-transform duration-300 w-fit"
                    >
                      View Live ↗
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Only View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="https://github.com/NitinDebugs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center relative items-center justify-center rounded-full text-xs font-semibold py-3.5 border border-stroke bg-surface hover:border-transparent text-text-primary hover:scale-[1.02] transition-all duration-300 group focus:outline-none cursor-pointer"
          >
            View all work <span className="ml-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
export default SelectedWorks;
