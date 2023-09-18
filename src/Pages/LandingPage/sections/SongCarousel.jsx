import React from "react";
import CardSong from "../components/CardSong";
import SwiperCarousel from "../components/SwiperCarousel";
import "../styles/SongCarousel.css";

export default function SongCarousel() {
  // Datos de ejemplo para las tarjetas
  const tarjetas = [
    {
      imagen: "/songCards/AustinPostMalone.png",
      cancion: "Chemical",
      artista: "Post Malone",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/EneroTIMO.png",
      cancion: "Enero",
      artista: "TIMO",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/HappierThanEverBillie.png",
      cancion: "Happier Than Ever",
      artista: "Billie Eilish",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/HeavenBazzi.png",
      cancion: "Heaven",
      artista: "Bazzi",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/HoudiniFosterThePeople.png",
      cancion: "Houdini",
      artista: "Foster the people",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/InnerlightElderBrook.png",
      cancion: "Inner Light",
      artista: "Elder Brook",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/RadioLanadelRey.png",
      cancion: "Radio",
      artista: "Lana del Rey",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/Ride21Pilots.png",
      cancion: "Ride",
      artista: "Twenty One Pilots",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/SingleSoonSelenaGomez.png",
      cancion: "Single Soon",
      artista: "Selena Gomez",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/songCards/YouthTroyeSilvan.png",
      cancion: "Youth",
      artista: "Troye Silvan",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
  ];

  return (
    <div className="slider-cardSong">
      {/* por cada song se renderiza una CardSong */}
      <SwiperCarousel
        cards={tarjetas.map((tarjeta, index) => (
          <CardSong key={index} {...tarjeta} />
        ))}
        slidesPerView={4}
      ></SwiperCarousel>
    </div>
  );
}
