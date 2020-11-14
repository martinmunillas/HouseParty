import React from 'react';
import { useState } from 'react';

const NeonLetter = ({ children }) => {
  const [, setState] = useState(1);

  const handleHover = () => {
    setState(Math.random);
  };

  return (
    <span
      style={{
        animation: `text-flicker-in-glow ${Math.random() * 10}s linear both infinite `,
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
