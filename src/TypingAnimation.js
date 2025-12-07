import React from 'react'

import { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ textArray, typingSpeed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentText = textArray[currentIndex];
      const newText = currentText.slice(0, displayText.length + 1);

      setDisplayText(newText);

      if (newText === currentText) {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentIndex((currentIndex) => (currentIndex + 1) % textArray.length);
          setDisplayText('');
        }, typingSpeed);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentIndex, displayText, textArray, typingSpeed]);

  return (
    <h1 className="typing-animation" style={{
      fontSize: '48px',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #6366f1, #ec4899, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2',
      minHeight: '60px'
    }}>
      {displayText}
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default TypingAnimation;
