import React from 'react';
import './OurStory.css';

const OurStory = () => {
  const milestones = [
    {
      date: "1st February 2024",
      title: "When We Started Talking",
      description: "The day our story began. A simple conversation that changed everything. From that moment, I knew you were special.",
      icon: "✨"
    },
    {
      date: "Our Song",
      title: "Khwab - Where It All Started",
      description: "This song played when our hearts connected. Every time I hear it, I'm reminded of how beautifully our journey began.",
      icon: "🎵"
    },
    {
      date: "Getting Closer",
      title: "The Beginning of Us",
      description: "From strangers to friends, from friends to something more. Every conversation brought us closer.",
      icon: "💑"
    },
    {
      date: "The Moment I Knew",
      title: "You're The One",
      description: "The moment I realized you were the one. My heart knew before my mind did. You became my everything.",
      icon: "💘"
    },
    {
      date: "14th February 2026",
      title: "Our First Valentine's Day",
      description: "Today, I celebrate our love with this special gift. You've made every day feel like Valentine's Day.",
      icon: "💝"
    },
    {
      date: "Forever",
      title: "Our Future Together",
      description: "This is just the beginning of our beautiful story. I can't wait for all the chapters to come, with you by my side, always.",
      icon: "∞"
    }
  ];

  return (
    <section className="our-story-section">
      <div className="section-header">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">Every love story is beautiful, but ours is my favorite</p>
      </div>

      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-icon">{milestone.icon}</div>
              <div className="timeline-date">{milestone.date}</div>
              <h3 className="timeline-title">{milestone.title}</h3>
              <p className="timeline-description">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-line"></div>
    </section>
  );
};

export default OurStory;
