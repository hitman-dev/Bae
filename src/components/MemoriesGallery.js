import React, { useState } from 'react';
import './MemoriesGallery.css';

const MemoriesGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  // Generate all images with custom captions (you can customize these!)
  const memories = [
    ...Array.from({ length: 48 }, (_, i) => ({
      id: i + 1,
      src: `/images/img_${String(i + 1).padStart(3, '0')}.jpg`,
      type: 'image',
      caption: `Beautiful memory ${i + 1}`,
      emoji: ['💕', '❤️', '💖', '✨', '🌟', '💝', '🥰', '😍'][i % 8]
    })),
    ...Array.from({ length: 3 }, (_, i) => ({
      id: i + 49,
      src: `/videos/vid_${String(i + 1).padStart(3, '0')}.mp4`,
      type: 'video',
      caption: `Special moment ${i + 1}`,
      emoji: '🎥'
    }))
  ];

  const openLightbox = (media) => {
    setSelectedMedia(media.src);
    setSelectedType(media.type);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setSelectedType(null);
  };

  return (
    <section className="memories-section">
      <div className="section-header">
        <h2 className="section-title">Our Precious Memories</h2>
        <p className="section-subtitle">Every picture tells a story of us</p>
      </div>

      <div className="memories-grid">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="memory-card"
            onClick={() => openLightbox(memory)}
          >
            {memory.type === 'image' ? (
              <img src={memory.src} alt={memory.caption} loading="lazy" />
            ) : (
              <div className="video-preview">
                <video src={memory.src} />
                <div className="play-button">
                  <span className="play-icon">▶</span>
                </div>
              </div>
            )}
            <div className="memory-overlay">
              <div className="memory-info">
                <span className="memory-emoji">{memory.emoji}</span>
                <p className="memory-caption">{memory.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedType === 'image' ? (
              <img src={selectedMedia} alt="Full size" />
            ) : (
              <video src={selectedMedia} controls autoPlay />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MemoriesGallery;
