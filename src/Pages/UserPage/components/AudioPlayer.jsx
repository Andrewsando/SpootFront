import React, { useState } from 'react';
import "../styles/AudioPlayer.css"

const AudioPlayer = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`audio-player ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <audio className='audio-player' controls preload="metadata">
        <source src={src} type="audio/ogg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
