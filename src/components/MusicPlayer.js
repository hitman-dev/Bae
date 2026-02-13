import React, { useRef, useEffect, useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ autoPlay = false }) => {
  const audioRef = useRef(null);
  const hasAutoPlayed = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      // Loop the song when it ends
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Auto-play when autoPlay prop becomes true
  useEffect(() => {
    if (autoPlay && !hasAutoPlayed.current && audioRef.current) {
      hasAutoPlayed.current = true;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Autoplay prevented:', error);
        });
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/songs/Khwab (PenduJatt.Com.Se).mp3" type="audio/mpeg" />
      </audio>

      <button
        className="music-toggle-btn"
        onClick={toggleMusic}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
};

export default MusicPlayer;
