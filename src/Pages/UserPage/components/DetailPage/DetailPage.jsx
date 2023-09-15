import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

import ReactAudioPlayer from "react-audio-player";

import Sidebar from "../Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getSongAll } from "../../../../Redux/Actions/Songs";
import "../../styles/DetailPage.css";

export default function DetailSong() {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  const [selectedTableSongId, setSelectedTableSongId] = useState(null); // Para la tabla

  const [isPlaying, setIsPlaying] = useState(false); // Nuevo estado para controlar la reproducción
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.generalSongs.result);
  const [hoveredRow, setHoveredRow] = useState(-1); // Declarar hoveredRow aquí

  useEffect(() => {
    if (id) {
      axios(`https://backend-pf-production-ba15.up.railway.app/song/${id}`)
        .then(({ data }) => {
          if (data.result.name && data.result.artist && data.result.genre) {
            setSong(data.result);
          } else {
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
        });
    }
    dispatch(getSongAll());
  }, [id, dispatch]);

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = "/images/imgSong-NotFound.jpg";
  };

  const nameSong = song ? song.name : "Name of the song";
  const artistSong = song ? song.artist : "Artist or band name";
  const genreSong = song ? song.genre : "Musical genre";

  // Manejador de clic para establecer la canción seleccionada en la tabla
  const handleTableSongClick = (selectedId) => {
    setSelectedTableSongId(selectedId);
    setIsPlaying(true); // Iniciar la reproducción cuando se selecciona una canción de la tabla
  };

  return (
    <div>
      <div className="container-DetailPage">
        <div className="container-sidebar">
          <Sidebar />
        </div>

        <div className="container-SongDetail-and-SongList">
          <div className="subContainer-SongDetail-and-SongList">

            {/* Detalle de una canción en especifico */}
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
                  onClick={() => handleTableSongClick(id)}
                />
              </div>
            </div>

            {/* Tabla de todas las canciones disponibles */}
            <div className="container-SongList">
              <table>
                <thead>
                  <tr className="trTable">
                    <th>#</th>
                    <th>Título</th>
                    <th>Álbum</th>
                    <th>Artista</th>
                    <th>Género</th>
                  </tr>
                </thead>
                <tbody>
                  {songList.map((tableSong, index) => (
                    <tr
                      key={tableSong.id}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(-1)}
                      // Agregar el manejador de clic en la fila de la tabla
                      onClick={() => handleTableSongClick(tableSong.id)}
                      // Marcar la fila como activa si es la seleccionada
                      className={`data-row ${
                        selectedTableSongId === tableSong.id ? "active" : ""
                      }`}
                    >
                      <td>
                        {index === hoveredRow ? (
                          <i className="material-icons icon-played">
                            play_arrow
                          </i>
                        ) : (
                          index + 1
                        )}
                      </td>
                      <td>
                        <div className="list-AddSongToList">
                          <div className="image-AddSongToList">
                            <img src={tableSong.image} alt="profile-picture" />
                          </div>
                          <div className="content-AddSongToList">
                            <h4 className="name-AddSongToList">
                              {tableSong.name}
                            </h4>
                          </div>
                        </div>
                      </td>
                      <td>{tableSong.description}</td>
                      <td>{tableSong.artist}</td>
                      <td>{tableSong.genre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>

      {song && (
        <ReactAudioPlayer
          className="audio-player"
          id="audio-player"
          src={
            selectedTableSongId
              ? songList.find((song) => song.id === selectedTableSongId)?.song
              : song.song
          }
          autoPlay={isPlaying}
          controls
          style={{ display: isPlaying ? "block" : "none" }}
        />
      )}
    </div>
  );
}

