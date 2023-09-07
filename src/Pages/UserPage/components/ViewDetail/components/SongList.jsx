import "../../../styles/SongList.css";
import React from "react";
import AddSongToList from "./AddSongToList";

export default function SongList() {
  // Datos de ejemplo para la lista
  const cardList = [
    {
      image: "/images/gojira.jpeg",
      name: "The Chant",
      artist: "Gojira",
      album: "Fortitude",
      genre:
        "Death metal progresivo Groove metal Death metal técnico Post-metal",
    },
    {
      image: "/images/lindsey-stirling.jpg",
      name: "Carol of the Bells",
      artist: "Lindsey Stirling",
      album: "Warmer in the Winter",
      genre: "Estacional",
    },
    {
      image: "/images/lenfant_sauvage.jpg",
      name: "The Gift of Guilt",
      artist: "Gojira",
      album: "L'Enfant Sauvage",
      genre:
        "Death metal progresivo Groove metal Death metal técnico Post-metal",
    },
    {
      image: "/images/marilyn-manson.jpg",
      name: "Sweet Dreams (Are Made of This)",
      artist: "Marilyn Manson",
      album: "Smells Like Children",
      genre: "Heavy metal, Hard rock, Rock industrial, Halloween music, Rock",
    },
    {
      image: "/images/fortitude.jpg",
      name: "Amazonia",
      artist: "Gojira",
      album: "Fortitude",
      genre:
        "Death metal progresivo Groove metal Death metal técnico Post-metal",
    },
  ];

  return (
    <div className="container-SongList">
      <table>
        <thead>
          <tr className="trTable">
            <th>#</th> {/* Columna para el número de canción */}
            <th>Título</th>
            <th>Álbum</th>
            <th>Artista</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          {cardList.map((song, index) => (
            <tr key={index} className="data-row">
              <td>{index + 1}</td>
              <td>
                <AddSongToList {...song} />
              </td>
              <td>{song.album}</td>
              <td>{song.artist}</td>
              <td>{song.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

