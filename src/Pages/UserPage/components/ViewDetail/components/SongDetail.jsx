import "../../../styles/SongDetail.css";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function SongDetail({
  image,
  name,
  artist,
  album,
  genre,
}) {
  return (
    <div className="container-Detail">
      <div className="card-songDetail">
        <div className="image-songDetail">
          <img className="space-songDetail" src={image} alt="profile-picture" />
        </div>
        <div className="content-songDetail">
          <h4 className="name-songDetail">{name}</h4>
          <p className="artist-songDetail">{artist}</p>
          <p className="album-songDetail">{album}</p>
          <p className="genre-songDetail">{genre}</p>
        </div>
      </div>
      <div className="card-songDetail-two">
        <BsFillPlayCircleFill color="#54E35F" fontSize="3rem" />
      </div>
    </div>
  );
}
