import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Sidebar from "../Sidebar";
import SongList from "./components/SongList";

import "../../styles/DetailPage.css";

export default function DetailSong() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
  }, [id]);

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = "/images/imgSong-NotFound.jpg";
  };

  const nameSong = song ? song.name : "Name of the song";
  const artistSong = song ? song.artist : "Artist or band name";
  const genreSong = song ? song.genre : "Musical genre";

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="container-DetailPage">
        <div className="container-sidebar">
          <Sidebar />
        </div>
        <div className="container-SongDetail-and-SongList">
          <div className="subContainer-SongDetail-and-SongList">
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
                  onClick={handlePlay}
                />
              </div>
            </div>
            <SongList />
          </div>
        </div>
      </div>

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
  );
}
