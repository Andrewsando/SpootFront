import "../../../styles/AddSongToList.css";

export default function AddSongToList({
  image,
  name,
}) {
  return (
    <div className="list-AddSongToList">
      <div className="image-AddSongToList">
        <img src={image} alt="profile-picture" />
      </div>
      <div className="content-AddSongToList">
        <h4 className="name-AddSongToList">{name}</h4>
      </div>
    </div>
  );
}
