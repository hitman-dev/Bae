import React, { useEffect, useState } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {heart.symbol}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
