import { BsFillPlayCircleFill } from "react-icons/bs";
import "../styles/SongCard.css";

export default function SongCard({ img, name, info, artist, onClick }) {
  return (
    <div onClick={onClick} className="card-songCard">
      <div className="card-content">
        <div className="image-songCard">
          <img className="space-songCard" src={img} alt="profile-picture" />
          <div className="play-button">
            <BsFillPlayCircleFill color="#54E35F" fontSize="3rem" />
          </div>
        </div>
        <div>
          <h4 className="name-songCard">{name}</h4>
          <p className="artist-songCard">{artist}</p>
        </div>
      </div>
    </div>
  );
}
