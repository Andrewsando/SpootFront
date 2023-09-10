import React from "react";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

export default function ViewDetail() {
  // Datos de ejemplo para las tarjetas
  const songDetail = [
    {
      image: "/images/gojira.jpeg",
      name: "The Chant",
      artist: "Gojira",
      album: "Fortitude",
      genre: "Death metal progresivo Groove metal Death metal técnico Post-metal",
    },
  ];

  return (
    <div>
      {/* <div className="container-viewDetail"> */}
      <div>
        {/* Por cada song se renderiza una CardSong */}
        {songDetail.map((song, index) => (
          <SongDetail key={index} {...song} />
        ))}
        <div>
          <SongList />
        </div>
      </div>
    </div>
  );
}
