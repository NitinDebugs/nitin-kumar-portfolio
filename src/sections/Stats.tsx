import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  { value: '4+', label: 'Months Experience' },
  { value: '2', label: 'Live Projects' },
  { value: '4', label: 'Certificates Earned' },
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="bg-bg/60 py-16 md:py-24 border-t border-stroke/20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
              className="bg-surface/70 backdrop-blur-sm border border-stroke rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-stroke/85 transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              {/* Subtle top border bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:accent-gradient transition-all duration-300" />
              
              {/* Stat number value */}
              <div className="font-display italic text-6xl md:text-7xl text-text-primary tracking-tight group-hover:scale-105 transition-transform duration-500 select-none pb-1">
                <span className="text-gradient inline-block px-4 py-1">{stat.value}</span>
              </div>
              
              {/* Stat label description */}
              <div className="text-muted text-xs uppercase tracking-[0.25em] font-semibold mt-3 select-none leading-relaxed">
                {stat.label}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
export default Stats;
