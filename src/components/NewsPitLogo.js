import React from "react";

const NewsPitLogo = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#000000" />
        <stop offset="100%" stopColor="#00e5ff" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#circleGradient)" />
    <g transform="translate(100,100)">
      <text textAnchor="middle" fontFamily="Orbitron, sans-serif" fontSize="20" fill="white" letterSpacing="-5">
        NEWS-PIT
      </text>
    </g>
  </svg>
);

export default NewsPitLogo;
