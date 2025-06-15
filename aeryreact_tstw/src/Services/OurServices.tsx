import { forwardRef } from 'react';
import birb2 from "../assets/images/logo2.png";
import birb1 from "../assets/images/logo.png";

const OurServicesHeaderSVG = forwardRef<SVGSVGElement>((_props, ref) => (
  <svg
    ref={ref}
    width="100%"
    height="230"
    viewBox="0 0 700 230"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      display: 'block',
      margin: '0 auto 40px auto',
      overflow: 'visible', 
      maxWidth: '100%'
    }}
  >
    <defs>
      <linearGradient id="serviceTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#8A2BE2', stopOpacity: 1 }} />
        <stop offset="60%" style={{ stopColor: '#FF00FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FF69B4', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#FF69B4', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#FF00FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8A2BE2', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="textGlow" width="300%" height="300%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feOffset dx="1" dy="1" result="offsetBlur"/>
        <feMerge>
          <feMergeNode in="offsetBlur"/>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="imgGlow" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
        <feOffset dx="1" dy="0.1" result="offsetBlur"/>
        <feMerge>
          <feMergeNode in="offsetBlur"/>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g id="decorative-elements" filter="url(#imgGlow)">
      <image className="birb" width="45" height="45" x="-600" y="50" href={birb1} style={{ opacity: 0.4}} transform="scale(-1, 1)"/>
      <image className="birb" width="80" height="80" x="-680" y="130" href={birb2} style={{ opacity: 0.6 }}  transform="scale(-1, 1)"/>
      <image className="birb" width="80" height="80" x="20" y="130" href={birb1} style={{ opacity: 0.4 }}/>
      <image className="birb" width="45" height="45" x="100" y="50" href={birb2} style={{ opacity: 0.6  }}/>
    </g>
    <text
      id="services-title-text"
      textAnchor="middle"
      x="350"
      y="100"
      fontWeight="bold"
      filter="url(#textGlow)"
      style={{ letterSpacing: '1.5px' }}
    >
      <tspan
        id="text-our"
        x="350"
        dy="0em"
        fill="url(#serviceTextGradient)"
        style={{ fontSize: '55px', textTransform: 'uppercase' }}
      >
        OUR
      </tspan>
      <tspan
        id="text-services"
        x="350"
        dy="1em"
        fill="url(#serviceTextGradient)"
        style={{ fontSize: '80px', textTransform: 'uppercase', letterSpacing: '3px' }}
      >
        <tspan className="gsap-char">S</tspan>
        <tspan className="gsap-char">E</tspan>
        <tspan className="gsap-char">R</tspan>
        <tspan className="gsap-char">V</tspan>
        <tspan className="gsap-char">I</tspan>
        <tspan className="gsap-char">C</tspan>
        <tspan className="gsap-char">E</tspan>
        <tspan className="gsap-char">S</tspan>
      </tspan>
    </text>
    
    <path
      id="title-underline"
      d="M150 200 Q350 240 550 200"
      stroke="url(#underlineGradient)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"

    />
  </svg>
));

export default OurServicesHeaderSVG;