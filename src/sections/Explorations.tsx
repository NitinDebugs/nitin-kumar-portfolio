import React, { useEffect, useRef, useState } from 'react';
import { useMedia } from '../context/MediaContext';
import type { MediaKey } from '../context/MediaContext';
import { Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExploreCard {
  key: MediaKey;
  title: string;
  rotation: string;
}

const CARDS_COL1: ExploreCard[] = [
  { key: 'explore1', title: "Siren24 Mother's Day Banner", rotation: '-hover:rotate-2 hover:-rotate-1' },
  { key: 'explore3', title: 'Was ist ein ETF? Infographic', rotation: 'hover:rotate-2' },
  { key: 'explore5', title: 'Canvas & Crew Brand Poster', rotation: '-hover:rotate-1' },
];

const CARDS_COL2: ExploreCard[] = [
  { key: 'explore2', title: 'Siren24 Ambulance Booking Poster', rotation: 'hover:rotate-1' },
  { key: 'explore4', title: 'Unbind IIT Kharagpur Rank List', rotation: '-hover:rotate-2 hover:rotate-1' },
];

export const Explorations: React.FC = () => {
  const { media } = useMedia();
  const [activeImg, setActiveImg] = useState<{ url: string; title: string } | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const col1Ref = useRef<HTMLDivElement | null>(null);
  const col2Ref = useRef<HTMLDivElement | null>(null);

  // GSAP ScrollTrigger for Pinned Content and Parallax Columns
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;

    if (!section || !content || !col1 || !col2) return;

    const ctx = gsap.context(() => {
      // 1. Pin the Left Content Panel
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: content,
        pinSpacing: false,
      });

      // 2. Parallax column 1 (scrolls up)
      gsap.fromTo(col1,
        { y: 80 },
        {
          y: -180,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          }
        }
      );

      // 3. Parallax column 2 (scrolls down/slower)
      gsap.fromTo(col2,
        { y: -80 },
        {
          y: 180,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);



  const renderCard = (card: ExploreCard) => {
    const currentImg = media[card.key];

    return (
      <div
        key={card.key}
        onClick={() => setActiveImg({ url: currentImg, title: card.title })}
        className={`aspect-square w-full max-w-[320px] bg-surface/70 backdrop-blur-sm border border-stroke rounded-2xl overflow-hidden group relative cursor-pointer transition-all duration-500 shadow-2xl ${card.rotation}`}
      >


        {/* Exploration Image */}
        <img
          src={currentImg}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
        />

        {/* Hover glass action */}
        <div className="absolute inset-0 bg-bg/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center gap-1.5 p-4 text-center">
          <div className="w-9 h-9 rounded-full glass-pill border border-white/10 flex items-center justify-center text-text-primary">
            <Eye className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-text-primary leading-tight font-display italic">
            {card.title}
          </span>
        </div>


      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative w-full min-h-[220vh] bg-bg/60 flex flex-col lg:flex-row justify-between border-t border-stroke/20 pb-20"
    >
      
      {/* Layer 1: Pinned Center Heading (sticky feel) */}
      <div
        ref={contentRef}
        className="w-full lg:w-[45%] h-auto lg:h-screen flex flex-col justify-center p-6 md:p-12 lg:p-20 z-10 select-none"
      >
        <div className="max-w-md">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
              Explorations
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-display italic text-text-primary tracking-tight leading-tight">
            Some of my <span className="text-gradient">works</span>
          </h2>
          {/* Subtext */}
          <p className="text-xs sm:text-sm text-muted mt-3 mb-8 font-light leading-relaxed">
            Design experiments, UI concepts, and creative explorations. Powered by AI and pixel-perfect layouts.
          </p>

          {/* Social Dribbble/Behance Button */}
          <a
            href="https://drive.google.com/drive/folders/1RIhIoKGC9bj65gYOfEXwgc9zZg4aeSrk"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center rounded-full text-xs font-semibold px-6 py-3 border border-stroke bg-surface hover:border-transparent text-text-primary hover:scale-105 transition-all duration-300 group focus:outline-none cursor-pointer"
          >
            <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
            <svg className="w-4 h-4 mr-2 text-[#89AACC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"/></svg>
            View designs <span className="ml-1 text-[10px]">↗</span>
          </a>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (flows alongside pinned content) */}
      <div className="w-full lg:w-[50%] flex gap-6 md:gap-12 px-6 md:px-12 lg:pr-20 pt-10 lg:pt-28 justify-center">
        
        {/* Parallax Column 1 */}
        <div ref={col1Ref} className="flex flex-col gap-6 md:gap-10">
          {CARDS_COL1.map((card) => renderCard(card))}
        </div>

        {/* Parallax Column 2 */}
        <div ref={col2Ref} className="flex flex-col gap-6 md:gap-10 pt-12 md:pt-20">
          {CARDS_COL2.map((card) => renderCard(card))}
        </div>

      </div>

      {/* Full Lightbox modal for explorations */}
      <AnimatePresence>
        {activeImg && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImg(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <button
              onClick={() => setActiveImg(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-surface/80 hover:bg-surface border border-stroke text-muted hover:text-text-primary transition-all shadow-xl cursor-pointer focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] z-10 flex flex-col items-center"
            >
              <img
                src={activeImg.url}
                alt={activeImg.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl border border-stroke shadow-2xl"
              />
              <p className="text-sm font-semibold text-text-primary mt-4 font-display italic text-lg text-gradient">
                {activeImg.title}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
export default Explorations;
