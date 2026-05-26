import React, { useState } from 'react';
import { useMedia } from '../context/MediaContext';
import type { MediaKey } from '../context/MediaContext';
import { Upload, RotateCcw, Sliders, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MEDIA_FIELDS: { key: MediaKey; label: string; section: string }[] = [
  { key: 'profile', label: 'Profile Photo', section: 'About Me' },
  { key: 'project1', label: 'Bharat Campus Chat', section: 'Projects' },
  { key: 'project2', label: 'MediMind AI Bot', section: 'Projects' },
  { key: 'certCanva', label: 'Canva Master Cert', section: 'Certificates' },
  { key: 'certGraphic', label: 'Graphic Design Cert', section: 'Certificates' },
  { key: 'certIeee', label: 'IEEE Code Astra Cert', section: 'Certificates' },
  { key: 'certSih', label: 'Smart India Hackathon', section: 'Certificates' },
  { key: 'explore1', label: 'Exploration Slide 1', section: 'Visual Playground' },
  { key: 'explore2', label: 'Exploration Slide 2', section: 'Visual Playground' },
  { key: 'explore3', label: 'Exploration Slide 3', section: 'Visual Playground' },
  { key: 'explore4', label: 'Exploration Slide 4', section: 'Visual Playground' },
  { key: 'explore5', label: 'Exploration Slide 5', section: 'Visual Playground' },
];

export const AssetUploader: React.FC = () => {
  const { media, updateMedia, resetMedia, resetAll } = useMedia();
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = (key: MediaKey, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          updateMedia(key, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const sections = Array.from(new Set(MEDIA_FIELDS.map((f) => f.section)));

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[99] flex items-center gap-2 rounded-full glass-pill px-5 py-3 hover:border-white/20 text-xs text-text-primary tracking-widest font-semibold cursor-pointer shadow-2xl focus:outline-none"
      >
        <Sliders className="w-4 h-4 text-gradient animate-pulse" />
        MEDIA MANAGER
      </motion.button>

      {/* Sidebar Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex justify-end">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar Shell */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md h-full bg-[#0a0a0a] border-l border-stroke flex flex-col p-6 overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-stroke">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#89AACC]" />
                    Portfolio Asset Manager
                  </h3>
                  <p className="text-xs text-muted mt-0.5">Customize layouts with your own images</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-stroke/50 hover:bg-stroke text-muted hover:text-text-primary transition-colors focus:outline-none cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Reset All Utility */}
              <div className="py-4 flex justify-between items-center">
                <span className="text-[10px] text-muted uppercase tracking-wider">GLOBAL CONFIG</span>
                <button
                  onClick={resetAll}
                  className="flex items-center gap-1 text-xs text-muted hover:text-[#89AACC] transition-colors focus:outline-none cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset all default graphics
                </button>
              </div>

              {/* Scrollable Fields Grid */}
              <div className="flex-1 overflow-y-auto pr-1 space-y-6 custom-scrollbar pb-10">
                {sections.map((sectionName) => (
                  <div key={sectionName} className="space-y-3">
                    <h4 className="text-xs font-semibold text-muted tracking-widest uppercase border-b border-stroke/30 pb-1">
                      {sectionName}
                    </h4>

                    <div className="space-y-3.5">
                      {MEDIA_FIELDS.filter((f) => f.section === sectionName).map((field) => (
                        <div
                          key={field.key}
                          className="flex items-center justify-between bg-surface border border-stroke p-3 rounded-xl gap-4 hover:border-stroke/85 transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Thumbnail preview */}
                            <div className="w-12 h-12 rounded-lg border border-stroke/70 overflow-hidden bg-bg flex-shrink-0 relative group">
                              <img
                                src={media[field.key]}
                                alt={field.label}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-medium text-text-primary truncate">{field.label}</p>
                              <span className="text-[10px] text-muted opacity-80 uppercase">
                                {media[field.key].startsWith('data:image/svg') ? 'Default Graphic' : 'Uploaded Image'}
                              </span>
                            </div>
                          </div>

                          {/* Upload Actions */}
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <label className="p-2 rounded-lg bg-bg border border-stroke hover:bg-stroke hover:border-white/10 text-muted hover:text-text-primary transition-all cursor-pointer flex items-center justify-center">
                              <Upload className="w-3.5 h-3.5" />
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleFileChange(field.key, e)}
                              />
                            </label>
                            {!media[field.key].startsWith('data:image/svg') && (
                              <button
                                onClick={() => resetMedia(field.key)}
                                className="p-2 rounded-lg bg-bg border border-stroke hover:bg-red-950/20 hover:border-red-900/30 text-muted hover:text-red-400 transition-all cursor-pointer flex items-center justify-center focus:outline-none"
                                title="Reset to default placeholder"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AssetUploader;
