import React, { useState, useEffect } from 'react';
import './ReasonsILoveYou.css';

const ReasonsILoveYou = () => {
  const [visibleReasons, setVisibleReasons] = useState([]);

  const reasons = [
    {
      emoji: '😊',
      title: 'Your Smile',
      text: 'Your smile lights up my darkest days and makes everything better.'
    },
    {
      emoji: '💬',
      title: 'The Way We Talk',
      text: 'Hours feel like minutes when we\'re together. I never want our conversations to end.'
    },
    {
      emoji: '🤗',
      title: 'Your Kindness',
      text: 'The way you care for others and spread love everywhere you go inspires me.'
    },
    {
      emoji: '✨',
      title: 'You Make Me Better',
      text: 'With you by my side, I\'m the best version of myself.'
    },
    {
      emoji: '🌟',
      title: 'Your Dreams',
      text: 'The way you chase your dreams with passion and determination amazes me.'
    },
    {
      emoji: '💝',
      title: 'Your Heart',
      text: 'You have the most beautiful heart, and I\'m grateful it chose mine.'
    },
    {
      emoji: '🎭',
      title: 'Your Laugh',
      text: 'Your laugh is my favorite sound in the whole world.'
    },
    {
      emoji: '🌈',
      title: 'You Are My Everything',
      text: 'You\'re my best friend, my love, and my home. I love every part of you.'
    },
    {
      emoji: '∞',
      title: 'A Million More Reasons',
      text: 'These are just a few... I could list a million reasons why I love you.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.reasons-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.75) {
        reasons.forEach((_, index) => {
          setTimeout(() => {
            setVisibleReasons(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }, index * 150);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="reasons-section">
      <div className="section-header">
        <h2 className="section-title">Reasons I Love You</h2>
        <p className="section-subtitle">There are infinite reasons, but here are some of my favorites</p>
      </div>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`reason-card ${visibleReasons.includes(index) ? 'visible' : ''}`}
          >
            <div className="reason-emoji">{reason.emoji}</div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-text">{reason.text}</p>
            <div className="reason-heart">❤️</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
