import React from "react";
import CardSong from "../components/CardSong";
import SwiperCarousel from "../components/SwiperCarousel";
import "../styles/SongCarousel.css";

export default function SongCarousel() {
  // Datos de ejemplo para las tarjetas
  const tarjetas = [
    {
      imagen: "/images/gojira.jpeg",
      cancion: "The Chant",
      artista: "Gojira",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/within-temptation.jpeg",
      cancion: "Our Solemn Hour",
      artista: "Within Temptation",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/gojira.jpeg",
      cancion: "The Chant",
      artista: "Gojira",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/gojira.jpeg",
      cancion: "The Chant",
      artista: "Gojira",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/within-temptation.jpeg",
      cancion: "Our Solemn Hour",
      artista: "Within Temptation",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/within-temptation.jpeg",
      cancion: "Our Solemn Hour",
      artista: "Within Temptation",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
    {
      imagen: "/images/within-temptation.jpeg",
      cancion: "Our Solemn Hour",
      artista: "Within Temptation",
      album: "Álbum 1",
      descripcion: "Descripción 1",
    },
  ];

  return (
    <div className="container-songCarousel">
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
