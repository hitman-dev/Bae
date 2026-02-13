import React, { useEffect, useState } from 'react';
import './HeartTrail.css';

const HeartTrail = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setHearts((prevHearts) => [...prevHearts, heart]);

      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
      }, 1000);
    };

    // Throttle the mousemove event
    let lastTime = 0;
    const throttledMove = (e) => {
      const now = Date.now();
      if (now - lastTime > 100) {
        handleMouseMove(e);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', throttledMove);

    return () => {
      window.removeEventListener('mousemove', throttledMove);
    };
  }, []);

  return (
    <div className="heart-trail-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="trail-heart"
          style={{
            left: heart.x,
            top: heart.y,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default HeartTrail;
