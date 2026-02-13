import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="heart-container">
          <div className="beating-heart">❤️</div>
        </div>

        <h1 className="landing-title">
          Happy Valentine's Day
          <span className="subtitle">My Love</span>
        </h1>

        <p className="landing-message">
          I created something special just for you...
          <br />
          A collection of our beautiful memories together
        </p>

        {showButton && (
          <button className="enter-button" onClick={onEnter}>
            <span>Open Your Gift</span>
            <span className="heart-icon">💝</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
