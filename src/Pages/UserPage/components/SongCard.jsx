import { BsFillPlayCircleFill } from "react-icons/bs";
import "../styles/SongCard.css";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function SongCard({ id, img, name, info, artist, onClick, starRating }) {

  // El método substring se utiliza para extraer una porción de una cadena.
  // Los parámetros que se pasan son los índices de inicio y final.
  const chainClipping = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  return (
      <div className="card-songCard">

        <div className="card-content">
            <Link to={`/song/${id}`} className="song-link">
              <div className="image-songCard">
                <img className="space-songCard" src={img} alt="profile-picture" />
              </div>
            </Link>

            <div>
              <div className="text-container">
                  <div>
                    <Link to={`/song/${id}`} className="song-link">
                      <h4 className="name-songCard">{chainClipping(name, 12)}</h4>
                    </Link>
                    <p className="artist-songCard">{artist}</p>
                  </div>
                  <div id="play-button-card" onClick={onClick}>
                    <BsFillPlayCircleFill />
                  </div>
              </div>
            </div>

            <StarRating songId={id}  currentRating={starRating}/>
        </div>
      </div>
  );
}


