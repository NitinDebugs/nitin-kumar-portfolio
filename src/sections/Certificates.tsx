import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMedia } from '../context/MediaContext';
import type { MediaKey } from '../context/MediaContext';
import { Eye, Award, ExternalLink, Calendar, User, Clock, Hash, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  tag: string;
  mediaKey: MediaKey;
  details: {
    instructor?: string;
    hours?: string;
    certNo?: string;
    event?: string;
    team?: string;
  };
}

const DESIGN_CERTS: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Canva Master Course | Learn Canva with Ronny',
    issuer: 'Udemy',
    date: 'July 18, 2023',
    tag: 'Design',
    mediaKey: 'certCanva',
    details: {
      instructor: 'Ronny Hermosa',
      hours: '16.5 total hours',
      certNo: 'UC-875e8c4b-a054-4933-bb27-6aca5c4f8fce',
    },
  },
  {
    id: 'cert-2',
    title: 'Graphic Design Masterclass — Learn GREAT Design',
    issuer: 'Udemy',
    date: 'July 24, 2023',
    tag: 'Design',
    mediaKey: 'certGraphic',
    details: {
      instructor: 'Lindsay Marsh',
      hours: '29 total hours',
      certNo: 'UC-3754d66a-bd2c-48d5-afbe-79a4de9b9e4b',
    },
  },
];

const CODING_CERTS: Certificate[] = [
  {
    id: 'cert-3',
    title: 'CODE ASTRA — Young Minds',
    issuer: 'IEEE Student Branch, Galgotias University',
    date: 'April 5–6, 2025',
    tag: 'Hackathon',
    mediaKey: 'certIeee',
    details: {
      event: 'ICCSAI-2025 (3rd International Conference on Communication, Security, and AI)',
      team: 'Nitin Kumar (Dumbledore Debuggers)',
    },
  },
  {
    id: 'cert-4',
    title: 'Smart India Hackathon Pre-Qualifiers',
    issuer: 'Galgotias University, Greater Noida',
    date: 'September 26–27, 2023',
    tag: 'Hackathon',
    mediaKey: 'certSih',
    details: {
      event: 'SIH Pre-Qualifiers (SIHP)',
    },
  },
];

export const Certificates: React.FC = () => {
  const { media } = useMedia();
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const handleOpenLightbox = (cert: Certificate) => {
    setActiveCert(cert);
    // Fire confetti for celebration
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#89AACC', '#4E85BF', '#ffffff'],
    });
  };



  const renderCertCard = (cert: Certificate, idx: number) => {
    const currentImg = media[cert.mediaKey];
    const isDefault = currentImg.startsWith('data:image/svg');

    return (
      <motion.div
        key={cert.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
        onClick={() => handleOpenLightbox(cert)}
        className="bg-surface/70 backdrop-blur-sm border border-stroke rounded-2xl overflow-hidden group hover:border-stroke/85 relative transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between"
      >
        {/* Hover subtle top border glow */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:accent-gradient transition-all duration-300 z-20" />

        {/* Certificate Image Area */}
        <div className="relative aspect-video w-full overflow-hidden bg-bg/40 border-b border-stroke/30">
          <img
            src={currentImg}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark visual cover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-text-primary border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Eye className="w-4 h-4" />
            </div>
          </div>



          {/* Type Badge */}
          {isDefault && (
            <div className="absolute bottom-3 left-3 z-20 bg-bg/80 border border-dashed border-stroke/60 rounded px-2 py-0.5 text-[8px] text-muted pointer-events-none select-none">
              Vector Placeholder
            </div>
          )}
        </div>

        {/* Bottom Details area */}
        <div className="p-5 flex-1 flex flex-col justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] text-muted tracking-wider uppercase font-semibold">
              <Award className="w-3 h-3 text-[#89AACC]" />
              <span>{cert.issuer}</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-text-primary group-hover:text-gradient transition-colors line-clamp-2 pt-0.5">
              {cert.title}
            </h3>
          </div>

          <div className="flex items-center justify-between border-t border-stroke/20 pt-3 text-[10px] text-muted font-light">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {cert.date}
            </span>
            <span className="bg-bg border border-stroke rounded-full px-2.5 py-0.5 text-[9px] text-[#89AACC] font-medium tracking-wide">
              {cert.tag}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="certificates" className="bg-bg/60 py-16 md:py-24 overflow-hidden border-t border-stroke/20">
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
              Achievements
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-display italic text-text-primary tracking-tight">
            My <span className="text-gradient">certificates</span>
          </h2>
          {/* Subtext */}
          <p className="text-xs sm:text-sm text-muted mt-2 max-w-md font-light leading-relaxed">
            Learning never stops — here's proof of my skills and hackathon challenges.
          </p>
        </motion.div>

        {/* Sub-section 6A: Design Certificates */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 select-none">
            <span className="text-xs font-semibold text-muted tracking-[0.25em] uppercase">
              DESIGN CERTIFICATIONS
            </span>
            <div className="w-8 h-px bg-stroke/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DESIGN_CERTS.map((cert, idx) => renderCertCard(cert, idx))}
          </div>
        </div>

        {/* Sub-section 6B: Coding/Competition Certificates */}
        <div>
          <div className="flex items-center gap-3 mb-6 select-none">
            <span className="text-xs font-semibold text-muted tracking-[0.25em] uppercase">
              CODING & COMPETITIONS
            </span>
            <div className="w-8 h-px bg-stroke/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CODING_CERTS.map((cert, idx) => renderCertCard(cert, idx))}
          </div>
        </div>

      </div>

      {/* 7. Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 select-none">
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.93, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.93, y: 15, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-4xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[85vh] md:h-auto max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-bg/80 hover:bg-bg border border-stroke text-muted hover:text-text-primary transition-all duration-300 shadow-xl focus:outline-none cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Side: Large Certificate Image */}
              <div className="w-full md:w-3/5 bg-bg/40 flex items-center justify-center relative overflow-hidden group flex-shrink-0 min-h-[30vh]">
                <img
                  src={media[activeCert.mediaKey]}
                  alt={activeCert.title}
                  className="w-full h-full object-contain max-h-[400px]"
                />


              </div>

              {/* Right Side: Detailed credentials info */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stroke/30 overflow-y-auto">
                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 bg-[#89AACC]/10 border border-[#89AACC]/20 text-[#89AACC] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {activeCert.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-text-primary leading-snug pt-1">
                      {activeCert.title}
                    </h3>
                  </div>

                  <div className="space-y-3.5 text-xs text-muted border-t border-b border-stroke/20 py-4 font-light">
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-[#89AACC] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-text-primary">Issuer</p>
                        <p className="text-[11px] mt-0.5">{activeCert.issuer}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Calendar className="w-4 h-4 text-[#89AACC] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-text-primary">Date Issued</p>
                        <p className="text-[11px] mt-0.5">{activeCert.date}</p>
                      </div>
                    </div>

                    {activeCert.details.instructor && (
                      <div className="flex items-start gap-2.5">
                        <User className="w-4 h-4 text-[#89AACC] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-text-primary">Instructor</p>
                          <p className="text-[11px] mt-0.5">{activeCert.details.instructor}</p>
                        </div>
                      </div>
                    )}

                    {activeCert.details.hours && (
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-[#89AACC] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-text-primary">Duration</p>
                          <p className="text-[11px] mt-0.5">{activeCert.details.hours}</p>
                        </div>
                      </div>
                    )}

                    {activeCert.details.event && (
                      <div className="flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-[#89AACC] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-text-primary">Event / Conference</p>
                          <p className="text-[11px] mt-0.5 leading-relaxed">{activeCert.details.event}</p>
                        </div>
                      </div>
                    )}

                    {activeCert.details.team && (
                      <div className="flex items-start gap-2.5">
                        <User className="w-4 h-4 text-[#89AACC] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-text-primary">Team</p>
                          <p className="text-[11px] mt-0.5">{activeCert.details.team}</p>
                        </div>
                      </div>
                    )}

                    {activeCert.details.certNo && (
                      <div className="flex items-start gap-2.5">
                        <Hash className="w-4 h-4 text-[#89AACC] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-text-primary">Credential ID</p>
                          <p className="text-[10px] mt-0.5 font-mono select-all text-text-primary/70">{activeCert.details.certNo}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Direct verify trigger link */}
                <div className="pt-6">
                  <button
                    onClick={() => {
                      confetti({
                        particleCount: 120,
                        spread: 80,
                        origin: { y: 0.6 }
                      });
                    }}
                    className="w-full relative flex items-center justify-center rounded-full text-xs font-semibold py-3 border border-stroke bg-bg hover:border-transparent text-text-primary hover:scale-[1.02] transition-all duration-300 group focus:outline-none cursor-pointer"
                  >
                    <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-1">
                      Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Certificates;
