import React, { ForwardedRef } from "react";

interface InfoSVGProps {
  svgTextSpanRefs: React.MutableRefObject<(SVGTSpanElement | null)[]>;
}

const title = "Welcome To Aery";

const InfoSVG = React.forwardRef<SVGTextPathElement, InfoSVGProps>(({ svgTextSpanRefs }, svgTextRef) => (
  <svg
    width="500"
    height="200"
    viewBox="0 0 800 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full md:w-3/4 mb-2"
  >
    <defs>
      <linearGradient id="aeryTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="60%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path
        id="curvePath"
        d="M 60 100 Q 300 10 740 80"
        fill="transparent"
      />
    </defs>
    <text
      fontSize="3.7rem"
      fontFamily="'Montserrat', sans-serif"
      fontWeight="bold"
      letterSpacing="2"
      filter="url(#glow)"
    >
      <textPath
        ref={svgTextRef as ForwardedRef<SVGTextPathElement>}
        href="#curvePath"
        startOffset="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="url(#aeryTextGradient)"
      >
        {Array.from(title).map((char, i) => (
          <tspan
            key={i}
            ref={el => { svgTextSpanRefs.current[i] = el; }}
            style={{ filter: 'blur(4px)' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </tspan>
        ))}
      </textPath>
    </text>
  </svg>
));

export default InfoSVG; 