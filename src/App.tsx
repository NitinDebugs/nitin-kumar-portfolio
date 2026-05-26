import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MediaProvider } from './context/MediaContext';
import { Navbar } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import Hls from 'hls.js';


// Sections
import { Hero } from './sections/Hero';
import { SelectedWorks } from './sections/SelectedWorks';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Certificates } from './sections/Certificates';
import { About } from './sections/About';
import { Explorations } from './sections/Explorations';
import { Stats } from './sections/Stats';
import { Contact } from './sections/Contact';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const globalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Global background video HLS setup
  useEffect(() => {
    if (isLoading) return;
    const video = globalVideoRef.current;
    if (!video) return;

    const streamUrl = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => console.log('Global video autoplay blocked:', err));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((err) => console.log('Global video autoplay blocked:', err));
      });
    }
  }, [isLoading]);

  // IntersectionObserver to spy which section is active
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'work', 'experience', 'certificates', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          // Triggers active state when section takes up the middle of the viewport
          rootMargin: '-30% 0px -50% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [isLoading]);

  // Smooth scroll handler
  const handleLinkClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <div className="bg-transparent text-text-primary min-h-screen selection:bg-[#4E85BF] selection:text-white relative">
      {/* 1. Loading Screen overlay */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 2. Main Site Shell */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          {/* Global Video Background */}
          <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
            <video
              ref={globalVideoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Glass Navbar */}
          <Navbar activeSection={activeSection} onLinkClick={handleLinkClick} />

          {/* 10 Sections in precise order */}
          <main className="relative z-10">
            {/* Section 2: Hero */}
            <Hero onSeeWorksClick={() => handleLinkClick('work')} />

            {/* Section 3: Selected Works */}
            <SelectedWorks />

            {/* Section 4: Experience */}
            <Experience />

            {/* Section 5: Skills & Tools */}
            <Skills />

            {/* Section 6: Certificates */}
            <Certificates />

            {/* Section 7: About / Journal */}
            <About />

            {/* Section 8: Explorations Parallax Gallery */}
            <Explorations />

            {/* Section 9: Stats */}
            <Stats />

            {/* Section 10: Contact / Footer */}
            <Contact />
          </main>


        </motion.div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <MediaProvider>
      <AppContent />
    </MediaProvider>
  );
};

export default App;
