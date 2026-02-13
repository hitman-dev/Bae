import React, { useState } from 'react';
import './LoveLetters.css';

const LoveLetters = () => {
  const [openLetter, setOpenLetter] = useState(null);

  const letters = [
    {
      title: 'To My Beautiful Love',
      date: 'Every Day',
      content: `My Dearest,

Every moment with you feels like a dream I never want to wake up from. You've filled my life with colors I didn't know existed and shown me what true happiness means.

When I look into your eyes, I see my future, my home, and everything I've ever wanted. You are my today and all of my tomorrows.

Thank you for being you, for loving me, and for making every day an adventure.

Forever yours,
With all my love ❤️`
    },
    {
      title: 'My Promise to You',
      date: 'Always',
      content: `My Love,

I promise to always make you laugh, even on your hardest days. I promise to support your dreams as if they were my own. I promise to hold your hand through every storm and celebrate every victory.

I promise to love you not just for who you are, but for who we become together. I promise that no matter what life throws our way, you'll never face it alone.

You are my forever, and I am completely and utterly yours.

All my love,
Forever and Always 💕`
    },
    {
      title: 'What You Mean to Me',
      date: 'Valentine\'s Day',
      content: `My Everything,

You are the first thought when I wake up and the last before I sleep. You're in every song I hear, every sunset I see, and every smile I wear.

You've taught me that love isn't just a feeling—it's a choice we make every single day. And every day, I choose you. I will always choose you.

Thank you for being my partner, my best friend, and the love of my life.

Happy Valentine's Day, my love.

With infinite love,
Your Forever Valentine 💝`
    }
  ];

  const toggleLetter = (index) => {
    setOpenLetter(openLetter === index ? null : index);
  };

  return (
    <section className="love-letters-section">
      <div className="section-header">
        <h2 className="section-title">Love Letters</h2>
        <p className="section-subtitle">Words from my heart to yours</p>
      </div>

      <div className="letters-container">
        {letters.map((letter, index) => (
          <div
            key={index}
            className={`letter-envelope ${openLetter === index ? 'open' : ''}`}
            onClick={() => toggleLetter(index)}
          >
            <div className="envelope-front">
              <div className="envelope-seal">💌</div>
              <div className="envelope-label">
                <h3>{letter.title}</h3>
                <span className="letter-date">{letter.date}</span>
              </div>
              <div className="envelope-hint">Click to open</div>
            </div>

            <div className="letter-content">
              <div className="letter-paper">
                <div className="letter-header">
                  <h3>{letter.title}</h3>
                  <span className="letter-date-full">{letter.date}</span>
                </div>
                <div className="letter-body">
                  {letter.content.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoveLetters;
