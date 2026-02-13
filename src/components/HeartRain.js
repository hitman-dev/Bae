import React, { useEffect, useState } from 'react';
import './HeartRain.css';

const HeartRain = ({ intensity = 'medium' }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartCount = intensity === 'high' ? 30 : intensity === 'medium' ? 20 : 10;
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'];

    const initialHearts = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
      size: 20 + Math.random() * 30,
    }));

    setHearts(initialHearts);
  }, [intensity]);

  return (
    <div className="heart-rain-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="rain-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.symbol}
        </div>
      ))}
    </div>
  );
};

export default HeartRain;
