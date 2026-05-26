import React, { createContext, useContext, useState } from 'react';
import profileImg from '../assets/profile.jpg';
import canvaCert from '../assets/certificates/canva-cert.png';
import graphicCert from '../assets/certificates/graphic-design-cert.png';
import ieeeCert from '../assets/certificates/ieee-cert.jpg';
import sihCert from '../assets/certificates/sih-cert.jpg';
import exp1 from '../assets/explorations/explore1.jpg';
import exp2 from '../assets/explorations/explore2.jpg';
import exp3 from '../assets/explorations/explore3.jpg';
import exp4 from '../assets/explorations/explore4.jpg';
import exp5 from '../assets/explorations/explore5.jpg';
import bharatCampus from '../assets/bharat-campus.png';
import medimindAi from '../assets/medimind-ai.png';

export type MediaKey =
  | 'profile'
  | 'project1'
  | 'project2'
  | 'certCanva'
  | 'certGraphic'
  | 'certIeee'
  | 'certSih'
  | 'explore1'
  | 'explore2'
  | 'explore3'
  | 'explore4'
  | 'explore5';

interface MediaContextType {
  media: Record<MediaKey, string>;
  updateMedia: (key: MediaKey, dataUrl: string) => void;
  resetMedia: (key: MediaKey) => void;
  resetAll: () => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

// Generate beautiful, aesthetic default SVG graphics so the page has no broken images
const createDefaultPlaceholder = (key: MediaKey, title: string): string => {
  let innerContent = '';
  let gradientColors = '';

  switch (key) {
    case 'profile':
      gradientColors = '<linearGradient id="g-prof" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#89AACC"/><stop offset="100%" stop-color="#4E85BF"/></linearGradient>';
      innerContent = `
        <rect width="100%" height="100%" fill="#0a0a0a"/>
        <circle cx="150" cy="150" r="148" fill="none" stroke="url(#g-prof)" stroke-width="2" stroke-dasharray="8 4"/>
        <defs>
          <radialGradient id="avatar-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#4E85BF" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="120" fill="url(#avatar-glow)"/>
        <!-- Abstract Tech Face/Logo -->
        <path d="M100,190 C100,140 130,120 150,120 C170,120 200,140 200,190" fill="none" stroke="url(#g-prof)" stroke-width="3" stroke-linecap="round"/>
        <circle cx="150" cy="110" r="25" fill="none" stroke="url(#g-prof)" stroke-width="3"/>
        <path d="M110,150 L190,150" fill="none" stroke="#4E85BF" stroke-width="1" stroke-dasharray="4 4"/>
        <text x="50%" y="240" font-family="'Instrument Serif', serif" font-style="italic" font-size="28" fill="#f5f5f5" text-anchor="middle">NK</text>
        <text x="50%" y="265" font-family="'Inter', sans-serif" font-weight="300" font-size="12" fill="#888" letter-spacing="4" text-anchor="middle">DESIGN & CODE</text>
      `;
      break;

    case 'project1': // Bharat Campus Chat (Chat UI concept)
      gradientColors = '<linearGradient id="g-proj1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ff7e5f"/><stop offset="100%" stop-color="#feb47b"/></linearGradient>';
      innerContent = `
        <rect width="100%" height="100%" fill="#0c0c0c"/>
        <g opacity="0.1">
          <line x1="0" y1="50" x2="800" y2="50" stroke="#fff" stroke-width="1"/>
          <line x1="0" y1="100" x2="800" y2="100" stroke="#fff" stroke-width="1"/>
          <line x1="0" y1="150" x2="800" y2="150" stroke="#fff" stroke-width="1"/>
          <line x1="0" y1="200" x2="800" y2="200" stroke="#fff" stroke-width="1"/>
          <line x1="0" y1="250" x2="800" y2="250" stroke="#fff" stroke-width="1"/>
          <line x1="0" y1="300" x2="800" y2="300" stroke="#fff" stroke-width="1"/>
          <line x1="0" y1="350" x2="800" y2="350" stroke="#fff" stroke-width="1"/>
          <line x1="200" y1="0" x2="200" y2="500" stroke="#fff" stroke-width="1"/>
          <line x1="400" y1="0" x2="400" y2="500" stroke="#fff" stroke-width="1"/>
          <line x1="600" y1="0" x2="600" y2="500" stroke="#fff" stroke-width="1"/>
        </g>
        <rect x="50" y="50" width="700" height="400" rx="16" fill="#121212" stroke="#222" stroke-width="2"/>
        <rect x="50" y="50" width="700" height="45" rx="16" fill="#181818" stroke="none"/>
        <circle cx="80" cy="72" r="6" fill="#ff5f56"/>
        <circle cx="96" cy="72" r="6" fill="#ffbd2e"/>
        <circle cx="112" cy="72" r="6" fill="#27c93f"/>
        <text x="400" y="77" font-family="'Inter', sans-serif" font-size="12" fill="#666" text-anchor="middle">bharatcampuschat.vercel.app</text>
        <!-- Chat UI Elements -->
        <rect x="80" y="120" width="220" height="300" rx="12" fill="#161616" stroke="#222" stroke-width="1"/>
        <rect x="320" y="120" width="400" height="300" rx="12" fill="#161616" stroke="#222" stroke-width="1"/>
        <!-- Chat Bubbles -->
        <rect x="340" y="150" width="200" height="35" rx="8" fill="#222"/>
        <rect x="470" y="200" width="230" height="35" rx="8" fill="url(#g-proj1)"/>
        <rect x="340" y="250" width="180" height="35" rx="8" fill="#222"/>
        <text x="355" y="172" font-family="'Inter', sans-serif" font-size="11" fill="#bbb">Hey guys! Welcome to Campus Chat.</text>
        <text x="485" y="222" font-family="'Inter', sans-serif" font-size="11" fill="#000" font-weight="500">Connecting student developers 🤝</text>
        <text x="355" y="272" font-family="'Inter', sans-serif" font-size="11" fill="#bbb">This is awesome! 🚀</text>
        <!-- Sidebar items -->
        <rect x="95" y="145" width="190" height="30" rx="6" fill="url(#g-proj1)" fill-opacity="0.15" stroke="url(#g-proj1)" stroke-width="1"/>
        <text x="110" y="164" font-family="'Inter', sans-serif" font-size="11" fill="#feb47b" font-weight="600"># general-chat</text>
        <text x="110" y="210" font-family="'Inter', sans-serif" font-size="11" fill="#888"># announcements</text>
        <text x="110" y="250" font-family="'Inter', sans-serif" font-size="11" fill="#888"># events-2026</text>
        <text x="110" y="290" font-family="'Inter', sans-serif" font-size="11" fill="#888"># hackathons</text>
      `;
      break;

    case 'project2': // MediMind AI (Health Dashboard)
      gradientColors = '<linearGradient id="g-proj2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3a7bd5"/><stop offset="100%" stop-color="#3a6073"/></linearGradient>';
      innerContent = `
        <rect width="100%" height="100%" fill="#0c0c0c"/>
        <g opacity="0.1">
          <circle cx="400" cy="250" r="100" fill="none" stroke="#fff" stroke-width="1"/>
          <circle cx="400" cy="250" r="200" fill="none" stroke="#fff" stroke-width="1"/>
          <circle cx="400" cy="250" r="300" fill="none" stroke="#fff" stroke-width="1"/>
        </g>
        <rect x="50" y="50" width="700" height="400" rx="16" fill="#121212" stroke="#222" stroke-width="2"/>
        <rect x="50" y="50" width="700" height="45" rx="16" fill="#181818" stroke="none"/>
        <circle cx="80" cy="72" r="6" fill="#ff5f56"/>
        <circle cx="96" cy="72" r="6" fill="#ffbd2e"/>
        <circle cx="112" cy="72" r="6" fill="#27c93f"/>
        <text x="400" y="77" font-family="'Inter', sans-serif" font-size="12" fill="#666" text-anchor="middle">medimind-ai-health-chatbot.vercel.app</text>
        <!-- AI Brain Visual -->
        <g transform="translate(180, 240)">
          <circle cx="0" cy="0" r="60" fill="url(#g-proj2)" fill-opacity="0.2"/>
          <circle cx="0" cy="0" r="45" fill="url(#g-proj2)" fill-opacity="0.4"/>
          <!-- AI Nodes -->
          <circle cx="0" cy="-30" r="5" fill="#89AACC"/>
          <circle cx="-25" cy="15" r="5" fill="#4E85BF"/>
          <circle cx="25" cy="15" r="5" fill="#4E85BF"/>
          <line x1="0" y1="-30" x2="-25" y2="15" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
          <line x1="0" y1="-30" x2="25" y2="15" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
          <line x1="-25" y1="15" x2="25" y2="15" stroke="#fff" stroke-width="1.5" opacity="0.6"/>
          <text x="0" y="5" font-family="'Inter', sans-serif" font-size="12" fill="#fff" font-weight="600" text-anchor="middle">AI ACTIVE</text>
        </g>
        <!-- Dashboard Queries -->
        <rect x="360" y="120" width="340" height="260" rx="12" fill="#161616" stroke="#222" stroke-width="1"/>
        <text x="380" y="155" font-family="'Inter', sans-serif" font-size="14" fill="#fff" font-weight="600">MediMind AI Health Bot</text>
        <text x="380" y="180" font-family="'Inter', sans-serif" font-size="11" fill="#555">INTELLIGENT MEDICAL QUERY ASSISTANT</text>
        <rect x="380" y="210" width="300" height="50" rx="8" fill="#1f1f1f"/>
        <text x="395" y="232" font-family="'Inter', sans-serif" font-size="11" fill="#aaa">User: What are the main benefits of a balanced diet?</text>
        <rect x="380" y="275" width="300" height="85" rx="8" fill="url(#g-proj2)" fill-opacity="0.1" stroke="url(#g-proj2)" stroke-width="1"/>
        <text x="395" y="297" font-family="'Inter', sans-serif" font-size="11" fill="#fff" font-weight="600">MediMind: A balanced diet provides essential nutrients,</text>
        <text x="395" y="317" font-family="'Inter', sans-serif" font-size="11" fill="#ccc">supports cellular repair, strengthens immunity, and fuels</text>
        <text x="395" y="337" font-family="'Inter', sans-serif" font-size="11" fill="#ccc">your brain for daily cognitive focus.</text>
      `;
      break;

    case 'certCanva': // Canva Certificate
      gradientColors = '<linearGradient id="g-canv" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00C4CC"/><stop offset="100%" stop-color="#7D2AE8"/></linearGradient>';
      innerContent = `
        <rect width="100%" height="100%" fill="#121212"/>
        <rect x="20" y="20" width="760" height="460" rx="8" fill="#181818" stroke="url(#g-canv)" stroke-width="3"/>
        <!-- Elegant Border Lines -->
        <rect x="35" y="35" width="730" height="430" fill="none" stroke="#222" stroke-width="1"/>
        <!-- Seals & Badges -->
        <circle cx="680" cy="380" r="45" fill="none" stroke="url(#g-canv)" stroke-width="2" stroke-dasharray="6 3"/>
        <circle cx="680" cy="380" r="35" fill="url(#g-canv)" fill-opacity="0.2"/>
        <text x="680" y="385" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#fff" text-anchor="middle">VERIFIED</text>
        <!-- Header Text -->
        <text x="50%" y="100" font-family="'Inter', sans-serif" font-size="16" fill="url(#g-canv)" font-weight="600" letter-spacing="4" text-anchor="middle">CERTIFICATE OF COMPLETION</text>
        <text x="50%" y="160" font-family="'Instrument Serif', serif" font-style="italic" font-size="42" fill="#f5f5f5" text-anchor="middle">Canva Master Course</text>
        <text x="50%" y="200" font-family="'Inter', sans-serif" font-size="14" fill="#888" text-anchor="middle">PROUDLY PRESENTED TO</text>
        <text x="50%" y="250" font-family="'Inter', sans-serif" font-size="28" fill="#fff" font-weight="700" text-anchor="middle">Nitin Kumar</text>
        <line x1="250" y1="270" x2="550" y2="270" stroke="#333" stroke-width="1"/>
        <text x="50%" y="305" font-family="'Inter', sans-serif" font-size="13" fill="#aaa" text-anchor="middle">For successfully mastering Canva graphic design techniques, brand layouts, and content creation.</text>
        <text x="50%" y="325" font-family="'Inter', sans-serif" font-size="12" fill="#666" text-anchor="middle">Instructor: Ronny Hermosa | Date: July 18, 2023 | 16.5 Total Hours</text>
        <text x="50%" y="420" font-family="'Inter', sans-serif" font-size="10" fill="#444" text-anchor="middle">Certificate No: UC-875e8c4b-a054-4933-bb27-6aca5c4f8fce</text>
      `;
      break;

    case 'certGraphic': // Graphic Design Certificate
      gradientColors = '<linearGradient id="g-graph" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f857a6"/><stop offset="100%" stop-color="#ff5858"/></linearGradient>';
      innerContent = `
        <rect width="100%" height="100%" fill="#121212"/>
        <rect x="20" y="20" width="760" height="460" rx="8" fill="#181818" stroke="url(#g-graph)" stroke-width="3"/>
        <rect x="35" y="35" width="730" height="430" fill="none" stroke="#222" stroke-width="1"/>
        <circle cx="680" cy="380" r="45" fill="none" stroke="url(#g-graph)" stroke-width="2" stroke-dasharray="6 3"/>
        <circle cx="680" cy="380" r="35" fill="url(#g-graph)" fill-opacity="0.2"/>
        <text x="680" y="385" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#fff" text-anchor="middle">EXCELLENCE</text>
        <text x="50%" y="100" font-family="'Inter', sans-serif" font-size="16" fill="url(#g-graph)" font-weight="600" letter-spacing="4" text-anchor="middle">CERTIFICATE OF COMPLETION</text>
        <text x="50%" y="160" font-family="'Instrument Serif', serif" font-style="italic" font-size="38" fill="#f5f5f5" text-anchor="middle">Graphic Design Masterclass</text>
        <text x="50%" y="200" font-family="'Inter', sans-serif" font-size="14" fill="#888" text-anchor="middle">PROUDLY PRESENTED TO</text>
        <text x="50%" y="250" font-family="'Inter', sans-serif" font-size="28" fill="#fff" font-weight="700" text-anchor="middle">Nitin Kumar</text>
        <line x1="250" y1="270" x2="550" y2="270" stroke="#333" stroke-width="1"/>
        <text x="50%" y="305" font-family="'Inter', sans-serif" font-size="13" fill="#aaa" text-anchor="middle">For acquiring intermediate to advanced skills in typography, layout theory, visual branding, and great composition.</text>
        <text x="50%" y="325" font-family="'Inter', sans-serif" font-size="12" fill="#666" text-anchor="middle">Instructor: Lindsay Marsh | Date: July 24, 2023 | 29 Total Hours</text>
        <text x="50%" y="420" font-family="'Inter', sans-serif" font-size="10" fill="#444" text-anchor="middle">Certificate No: UC-3754d66a-bd2c-48d5-afbe-79a4de9b9e4b</text>
      `;
      break;

    case 'certIeee': // IEEE Hackathon Certificate
      gradientColors = '<linearGradient id="g-ieee" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#00629B"/><stop offset="100%" stop-color="#00b4db"/></linearGradient>';
      innerContent = `
        <rect width="100%" height="100%" fill="#121212"/>
        <rect x="20" y="20" width="760" height="460" rx="8" fill="#181818" stroke="url(#g-ieee)" stroke-width="3"/>
        <rect x="35" y="35" width="730" height="430" fill="none" stroke="#222" stroke-width="1"/>
        <!-- IEEE Seal -->
        <circle cx="680" cy="380" r="45" fill="none" stroke="url(#g-ieee)" stroke-width="2"/>
        <text x="680" y="384" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="#00b4db" text-anchor="middle">IEEE</text>
        <text x="50%" y="90" font-family="'Inter', sans-serif" font-size="15" fill="url(#g-ieee)" font-weight="600" letter-spacing="4" text-anchor="middle">IEEE STUDENT BRANCH CERTIFICATION</text>
        <text x="50%" y="130" font-family="'Inter', sans-serif" font-size="11" fill="#666" letter-spacing="1" text-anchor="middle">GALGOTIAS UNIVERSITY (ICCSAI-2025)</text>
        <text x="50%" y="175" font-family="'Instrument Serif', serif" font-style="italic" font-size="42" fill="#fff" text-anchor="middle">Code Astra — Young Minds</text>
        <text x="50%" y="220" font-family="'Inter', sans-serif" font-size="13" fill="#888" text-anchor="middle">THIS IS TO CERTIFY THAT</text>
        <text x="50%" y="260" font-family="'Inter', sans-serif" font-size="28" fill="#fff" font-weight="700" text-anchor="middle">Nitin Kumar</text>
        <text x="50%" y="285" font-family="'Inter', sans-serif" font-size="13" fill="#00b4db" font-weight="500" text-anchor="middle">Team: Bumblecow Debuggers</text>
        <line x1="250" y1="305" x2="550" y2="305" stroke="#333" stroke-width="1"/>
        <text x="50%" y="335" font-family="'Inter', sans-serif" font-size="13" fill="#aaa" text-anchor="middle">Participated and excelled in the Code Astra Hackathon track during the 3rd International Conference</text>
        <text x="50%" y="355" font-family="'Inter', sans-serif" font-size="13" fill="#aaa" text-anchor="middle">on Communication, Security, and Artificial Intelligence (ICCSAI-2025) held on April 5–6, 2025.</text>
        <text x="50%" y="415" font-family="'Inter', sans-serif" font-size="11" fill="#444" text-anchor="middle">IEEE Galgotias University Branch | Greater Noida, U.P., India</text>
      `;
      break;

    case 'certSih': // Smart India Hackathon Pre-Qualifiers
      gradientColors = '<linearGradient id="g-sih" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ff9933"/><stop offset="50%" stop-color="#ffffff"/><stop offset="100%" stop-color="#138808"/></linearGradient>';
      innerContent = `
        <rect width="100%" height="100%" fill="#121212"/>
        <rect x="20" y="20" width="760" height="460" rx="8" fill="#181818" stroke="url(#g-sih)" stroke-width="3"/>
        <rect x="35" y="35" width="730" height="430" fill="none" stroke="#222" stroke-width="1"/>
        <!-- Seal -->
        <circle cx="680" cy="380" r="45" fill="none" stroke="#ff9933" stroke-width="2"/>
        <text x="680" y="384" font-family="'Inter', sans-serif" font-weight="700" font-size="14" fill="#ff9933" text-anchor="middle">SIH</text>
        <text x="50%" y="90" font-family="'Inter', sans-serif" font-size="15" fill="url(#g-sih)" font-weight="600" letter-spacing="4" text-anchor="middle">SMART INDIA HACKATHON</text>
        <text x="50%" y="130" font-family="'Inter', sans-serif" font-size="11" fill="#666" letter-spacing="1" text-anchor="middle">GALGOTIAS UNIVERSITY INTERNAL PRE-QUALIFIERS</text>
        <text x="50%" y="175" font-family="'Instrument Serif', serif" font-style="italic" font-size="38" fill="#fff" text-anchor="middle">Pre-Qualifiers Certificate</text>
        <text x="50%" y="220" font-family="'Inter', sans-serif" font-size="13" fill="#888" text-anchor="middle">THIS IS PRESENTED TO</text>
        <text x="50%" y="260" font-family="'Inter', sans-serif" font-size="28" fill="#fff" font-weight="700" text-anchor="middle">Nitin Kumar</text>
        <line x1="250" y1="285" x2="550" y2="285" stroke="#333" stroke-width="1"/>
        <text x="50%" y="320" font-family="'Inter', sans-serif" font-size="13" fill="#aaa" text-anchor="middle">For successfully showcasing software innovative solutions and qualifying in the Internal Pre-Qualifiers</text>
        <text x="50%" y="340" font-family="'Inter', sans-serif" font-size="13" fill="#aaa" text-anchor="middle">of Smart India Hackathon (SIH) held at Galgotias University on September 26–27, 2023.</text>
        <text x="50%" y="410" font-family="'Inter', sans-serif" font-size="11" fill="#444" text-anchor="middle">Galgotias University Campus, Greater Noida, India</text>
      `;
      break;

    default: // Explorations & other designs (Abstract graphics)
      const num = parseInt(key.replace('explore', '')) || 1;
      const hue1 = (num * 60) % 360;
      const hue2 = (hue1 + 120) % 360;
      gradientColors = `<linearGradient id="g-exp-${num}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="hsl(${hue1}, 70%, 60%)"/><stop offset="100%" stop-color="hsl(${hue2}, 80%, 40%)"/></linearGradient>`;
      
      let visualPattern = '';
      if (num === 1) {
        visualPattern = `<rect x="100" y="100" width="200" height="200" rx="30" fill="url(#g-exp-${num})" fill-opacity="0.8" transform="rotate(45, 200, 200)"/>`;
      } else if (num === 2) {
        visualPattern = `
          <circle cx="200" cy="200" r="100" fill="url(#g-exp-${num})" fill-opacity="0.8"/>
          <line x1="50" y1="200" x2="350" y2="200" stroke="#fff" stroke-width="2" stroke-dasharray="10 5"/>
        `;
      } else if (num === 3) {
        visualPattern = `<polygon points="200,80 320,290 80,290" fill="url(#g-exp-${num})" fill-opacity="0.8"/>`;
      } else if (num === 4) {
        visualPattern = `
          <rect x="80" y="80" width="240" height="240" rx="12" fill="none" stroke="url(#g-exp-${num})" stroke-width="4"/>
          <circle cx="200" cy="200" r="60" fill="url(#g-exp-${num})"/>
        `;
      } else if (num === 5) {
        visualPattern = `
          <path d="M100,200 Q200,50 300,200 T500,200" fill="none" stroke="url(#g-exp-${num})" stroke-width="6" stroke-linecap="round"/>
          <path d="M100,250 Q200,100 300,250 T500,250" fill="none" stroke="#fff" stroke-width="2" opacity="0.3"/>
        `;
      } else {
        visualPattern = `
          <circle cx="200" cy="200" r="80" fill="url(#g-exp-${num})"/>
          <circle cx="200" cy="200" r="120" fill="none" stroke="url(#g-exp-${num})" stroke-width="2" stroke-dasharray="4 8"/>
        `;
      }

      innerContent = `
        <rect width="100%" height="100%" fill="#0c0c0c"/>
        <!-- Halftone Overlay inside default SVG -->
        <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#333"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.5"/>
        <g transform="scale(0.75) translate(65, 65)">
          ${visualPattern}
        </g>
        <text x="20" y="355" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#fff" opacity="0.8">${title.toUpperCase()}</text>
        <text x="20" y="375" font-family="'Instrument Serif', serif" font-style="italic" font-size="14" fill="#666">Exploration #${num}</text>
      `;
      break;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${key === 'profile' ? '300 300' : key.startsWith('explore') ? '400 400' : '800 500'}" width="100%" height="100%">
      <defs>
        ${gradientColors}
      </defs>
      ${innerContent}
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const DEFAULT_TITLES: Record<MediaKey, string> = {
  profile: 'Nitin Kumar Profile',
  project1: 'Bharat Campus Chat',
  project2: 'MediMind AI Chatbot',
  certCanva: 'Canva Master Course Cert',
  certGraphic: 'Graphic Design Masterclass Cert',
  certIeee: 'IEEE Code Astra Cert',
  certSih: 'Smart India Hackathon Cert',
  explore1: 'Siren24 Mother\'s Day Banner',
  explore2: 'Siren24 Ambulance Booking Poster',
  explore3: 'Was ist ein ETF? Infographic',
  explore4: 'Unbind IIT Kharagpur Rank List',
  explore5: 'Canvas & Crew Brand Poster',
};

const INITIAL_MEDIA = () => {
  const stored = localStorage.getItem('nk_portfolio_media');
  const mediaObj = stored ? JSON.parse(stored) : {};

  // Fill in missing with elegant SVG placeholders or real certificate assets
  (Object.keys(DEFAULT_TITLES) as MediaKey[]).forEach((key) => {
    if (!mediaObj[key] || (key === 'project2' && mediaObj[key].startsWith('data:image/svg+xml'))) {
      if (key === 'profile') {
        mediaObj[key] = profileImg;
      } else if (key === 'project1') {
        mediaObj[key] = bharatCampus;
      } else if (key === 'project2') {
        mediaObj[key] = medimindAi;
      } else if (key === 'certCanva') {
        mediaObj[key] = canvaCert;
      } else if (key === 'certGraphic') {
        mediaObj[key] = graphicCert;
      } else if (key === 'certIeee') {
        mediaObj[key] = ieeeCert;
      } else if (key === 'certSih') {
        mediaObj[key] = sihCert;
      } else if (key === 'explore1') {
        mediaObj[key] = exp1;
      } else if (key === 'explore2') {
        mediaObj[key] = exp2;
      } else if (key === 'explore3') {
        mediaObj[key] = exp3;
      } else if (key === 'explore4') {
        mediaObj[key] = exp4;
      } else if (key === 'explore5') {
        mediaObj[key] = exp5;
      } else {
        mediaObj[key] = createDefaultPlaceholder(key, DEFAULT_TITLES[key]);
      }
    }
  });

  return mediaObj;
};

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [media, setMedia] = useState<Record<MediaKey, string>>(INITIAL_MEDIA);

  const updateMedia = (key: MediaKey, dataUrl: string) => {
    setMedia((prev) => {
      const updated = { ...prev, [key]: dataUrl };
      localStorage.setItem('nk_portfolio_media', JSON.stringify(updated));
      return updated;
    });
  };

  const resetMedia = (key: MediaKey) => {
    setMedia((prev) => {
      const defaultValue =
        key === 'profile'
          ? profileImg
          : key === 'project1'
          ? bharatCampus
          : key === 'project2'
          ? medimindAi
          : key === 'certCanva'
          ? canvaCert
          : key === 'certGraphic'
          ? graphicCert
          : key === 'certIeee'
          ? ieeeCert
          : key === 'certSih'
          ? sihCert
          : key === 'explore1'
          ? exp1
          : key === 'explore2'
          ? exp2
          : key === 'explore3'
          ? exp3
          : key === 'explore4'
          ? exp4
          : key === 'explore5'
          ? exp5
          : createDefaultPlaceholder(key, DEFAULT_TITLES[key]);
      const updated = { ...prev, [key]: defaultValue };
      localStorage.setItem('nk_portfolio_media', JSON.stringify(updated));
      return updated;
    });
  };

  const resetAll = () => {
    const fresh: Record<MediaKey, string> = {} as any;
    (Object.keys(DEFAULT_TITLES) as MediaKey[]).forEach((key) => {
      fresh[key] =
        key === 'profile'
          ? profileImg
          : key === 'project1'
          ? bharatCampus
          : key === 'project2'
          ? medimindAi
          : key === 'certCanva'
          ? canvaCert
          : key === 'certGraphic'
          ? graphicCert
          : key === 'certIeee'
          ? ieeeCert
          : key === 'certSih'
          ? sihCert
          : key === 'explore1'
          ? exp1
          : key === 'explore2'
          ? exp2
          : key === 'explore3'
          ? exp3
          : key === 'explore4'
          ? exp4
          : key === 'explore5'
          ? exp5
          : createDefaultPlaceholder(key, DEFAULT_TITLES[key]);
    });
    setMedia(fresh);
    localStorage.removeItem('nk_portfolio_media');
  };

  return (
    <MediaContext.Provider value={{ media, updateMedia, resetMedia, resetAll }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
};
