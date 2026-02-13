import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import OurStory from './components/OurStory';
import MemoriesGallery from './components/MemoriesGallery';
import ReasonsILoveYou from './components/ReasonsILoveYou';
import LoveLetters from './components/LoveLetters';
import FinalMessage from './components/FinalMessage';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import HeartTrail from './components/HeartTrail';

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleEnter = () => {
    setShowContent(true);
  };

  return (
    <div className="App">
      <FloatingHearts />
      <HeartTrail />
      <MusicPlayer autoPlay={showContent} />

      {!showContent ? (
        <LandingPage onEnter={handleEnter} />
      ) : (
        <div className="main-content">
          <OurStory />
          <MemoriesGallery />
          <ReasonsILoveYou />
          <LoveLetters />
          <FinalMessage />
        </div>
      )}
    </div>
  );
}

export default App;
