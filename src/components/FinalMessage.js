import React from 'react';
import './FinalMessage.css';

const FinalMessage = () => {
  return (
    <section className="final-message-section">
      <div className="final-content">
        <div className="final-hearts-decoration">
          <span>💕</span>
          <span>❤️</span>
          <span>💖</span>
          <span>💗</span>
          <span>💝</span>
        </div>

        <h2 className="final-title">Happy Valentine's Day, My Love</h2>

        <div className="final-message-box">
          <p className="final-message-text">
            This website is just a small way to show you how much you mean to me.
            Every picture, every word, every moment we've shared—they all remind me
            how lucky I am to have you in my life.
          </p>

          <p className="final-message-text">
            You are my yesterday, my today, and my tomorrow.
            You are my always and forever.
          </p>

          <p className="final-message-text highlight">
            I love you more than words can express, but I'll spend forever trying.
          </p>

          <div className="signature">
            <p>Forever yours,</p>
            <p className="signature-name">Your Valentine</p>
            <div className="signature-heart">❤️</div>
          </div>
        </div>

        <div className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to Top
        </div>
      </div>

      <div className="animated-hearts-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-heart-bg"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinalMessage;
