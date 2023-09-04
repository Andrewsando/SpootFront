import "../styles/SongCard.css"
import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function SongCard({ img, name, info, artist, song }) {
  
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="card-songCard relative flex w-46 flex-col rounded-xl">
        <div className="relative mx-4 mt-4 h-600 overflow-auto rounded-xl bg-neutral bg-clip-border text-neutral-800 shadow-lg">
          <img className="w-40 h-40 rounded-lg" src={img} alt="profile-picture" />
        </div>
        <div className="play-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 bg-success" onClick={handlePlay}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
          </svg>
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block font-sans text-base font-semibold leading-snug tracking-normal text-white antialiased">
            {name}
          </h4>
          <p className="block bg-gradient-to-tr text-neutral-600 bg-clip-text font-sans text-sm font-medium leading-relaxed  antialiased">
            {artist}
          </p>
          <p className="block bg-gradient-to-tr text-neutral-600  bg-clip-text font-sans text-sm font-medium leading-relaxed  antialiased">
            {info}
          </p>
        </div>
      </div>
      <ReactAudioPlayer
        src={song}
        autoPlay={isPlaying}
        controls
        style={{ display: isPlaying ? 'block' : 'none' }}
      />
    </div>
  );
}
