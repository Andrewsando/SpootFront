import axios from "axios";
import "../../../styles/SongDetail.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function SongDetail() {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción

  useEffect(() => {
    console.log("Este es el mero Id :D")
    console.log(id)
    // Realiza la solicitud solo si `id` es válido
    if (id) {
      axios(`https://backend-pf-production-ba15.up.railway.app/song/${id}`)
      .then(({ data }) => {
        console.log("Song by Id 😉")
          console.log(data)
          // Verifica si se recibieron datos válidos antes de establecer el estado
          if (data.result.name && data.result.artist && data.result.genre) {
            setSong(data.result);
          } else {
            // Manejar el caso en el que los datos no sean válidos
            setSong({
              name: "Name of the song",
              artist: "Artist or band name",
              genre: "Musical genre",
              img: "/images/imgSong-NotFound.jpg",
            });
          }
        })
        .catch((error) => {
          console.error("Error al obtener los datos de la canción:", error);
          // Manejar errores de solicitud aquí
        });
    }
  }, [id]);

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = "/images/imgSong-NotFound.jpg";
  };

  // Verifica si `song` es nulo antes de acceder a sus propiedades
  const nameSong = song ? song.name : "Name of the song";
  const artistSong = song ? song.artist : "Artist or band name";
  const genreSong = song ? song.genre : "Musical genre";

  const handlePlay = () => {
    // Toggles the play/pause state
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="container-Detail">
      <div className="card-songDetail">
        <div className="image-songDetail">
          <img
            className="space-songDetail"
            src={song ? song.image : "/images/imgSong-NotFound.jpg"}
            alt={nameSong}
            onError={handleImageError}
          />
        </div>
        <div className="content-songDetail">
          <h4 className="name-songDetail">{nameSong}</h4>
          <p className="artist-songDetail">{artistSong}</p>
          <p className="genre-songDetail">{genreSong}</p>
        </div>
      </div>
      <div className="card-songDetail-two">
        <BsFillPlayCircleFill
          color="#54E35F"
          id="reproductor-detail"
          fontSize="3rem"
          onClick={handlePlay} // Agrega un controlador de clic para reproducir/pausar la canción
        />
        {song && (
          <ReactAudioPlayer
            className="audio-player"
            id="audio-player"
            src={song.song}
            autoPlay={isPlaying}
            controls
            style={{ display: isPlaying ? "block" : "none" }}
          />
        )}
      </div>
    </div>
  );

}
