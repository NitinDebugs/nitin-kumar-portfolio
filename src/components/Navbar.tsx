import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  onLinkClick: (sectionId: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onLinkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && !navRef.current?.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 md:pt-6 px-4 w-full"
    >
      {/* Desktop floating pill navbar */}
      <div
        className={`hidden md:inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-1.5 md:py-2 transition-all duration-300 ${
          isScrolled ? 'shadow-lg shadow-black/30 border-white/15 scale-[0.98]' : 'shadow-md shadow-black/10'
        }`}
      >
        {/* 1. Logo */}
        <motion.button
          onClick={() => onLinkClick('home')}
          onHoverStart={() => setIsLogoHovered(true)}
          onHoverEnd={() => setIsLogoHovered(false)}
          whileHover={{ scale: 1.1 }}
          className="relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden focus:outline-none"
        >
          {/* Rotating gradient background border */}
          <div
            className={`absolute inset-0 transition-transform duration-700 ease-in-out accent-gradient ${
              isLogoHovered ? 'rotate-180 scale-105' : 'rotate-0'
            }`}
          />
          {/* Inner ring background */}
          <div className="absolute inset-[1.5px] bg-bg rounded-full flex items-center justify-center">
            <span className="font-display italic text-[14px] text-text-primary font-bold">NK</span>
          </div>
        </motion.button>

        {/* 2. Divider */}
        <div className="w-px h-5 bg-stroke mx-2 opacity-50" />

        {/* 3. Nav links */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onLinkClick(link.id)}
                className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-text-primary bg-stroke/60 font-semibold shadow-inner'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/30'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-2 opacity-50" />

        {/* 5. "Say hi" button */}
        <motion.button
          onClick={() => {
            window.open(
              "https://mail.google.com/mail/?view=cm&to=nitinktr2003@gmail.com&su=Hello%20Nitin%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Nitin%2C",
              "_blank"
            );
          }}
          whileHover="hover"
          className="relative inline-flex items-center justify-center text-xs sm:text-sm rounded-full font-medium tracking-wide focus:outline-none ml-1 cursor-pointer"
        >
          {/* Hover accent ring */}
          <motion.span
            variants={{
              hover: { opacity: 1, scale: 1.05 },
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            className="absolute -inset-[2px] accent-gradient rounded-full blur-[1px] transition-opacity duration-300"
          />
          <span className="relative bg-surface hover:bg-surface/90 text-text-primary border border-white/5 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1">
            Say hi <span className="font-sans">↗</span>
          </span>
        </motion.button>
      </div>

      {/* Mobile navbar pill */}
      <div className="flex md:hidden items-center justify-between w-full max-w-[360px] mx-auto rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-4 py-2.5">
        {/* Logo */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-display italic text-text-primary font-bold"
          style={{ background: "linear-gradient(135deg, #89AACC, #4E85BF)" }}
        >
          NK
        </div>
        {/* Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-[5px] p-1 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
            className="block w-5 h-px bg-white/70"
          />
          <motion.span
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            className="block w-5 h-px bg-white/70"
          />
          <motion.span
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
            className="block w-5 h-px bg-white/70"
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden absolute top-[70px] left-4 right-4 rounded-2xl border border-white/10 bg-surface/90 backdrop-blur-xl p-4 flex flex-col gap-1 z-50"
          >
            {["Home", "Work", "Experience", "Certificates", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  onLinkClick(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-3 rounded-xl text-sm text-muted hover:text-text-primary hover:bg-white/5 transition-all duration-200 focus:outline-none cursor-pointer"
              >
                {item}
              </button>
            ))}

            {/* Divider */}
            <div className="w-full h-px bg-stroke my-1" />

            {/* Say hi button */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=nitinktr2003@gmail.com&su=Hello%20Nitin%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Nitin%2C"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm text-center font-medium text-bg bg-text-primary hover:scale-[1.02] transition-transform duration-200"
            >
              Say hi ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
