import React from 'react'

import  { useState, useEffect } from 'react';
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
    <h1 className="typing-animation">
      {displayText}
      <span className="blinking-cursor">|</span>
    </h1>
  );
};

export default TypingAnimation;
