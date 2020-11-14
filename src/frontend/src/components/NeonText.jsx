import React from 'react';
import { useState } from 'react';

const NeonLetter = ({ children }) => {
  const handleHover = (e) => {
    e.target.style.animation = 'none'
    e.target.offsetHeight;
    e.target.style.animation = `text-flicker-in-glow ${Math.random() * 1}s linear both`
  };

  return (
    <span
      style={{
        animation: `text-flicker-in-glow ${Math.random() * 10}s linear both`,
        color: `hsla(${Math.random() * 360}, 100%, 80%, 1)`,
      }}
      onMouseOver={handleHover}
    >
      {children}
    </span>
  );
};

const NeonText = ({ children }) => {
  return (
    <h1>
      {children.split('').map((letter, i) => (
        <NeonLetter key={i}>{letter}</NeonLetter>
      ))}
    </h1>
  );
};

export default NeonText;
