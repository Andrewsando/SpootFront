import Validate from "./validations";
import { useState, useEffect} from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongName } from "../../../Redux/Actions/Songs";
import { createPlaylist } from "../../../Redux/Actions/Playlists";

const CreatePlaylist = () => {
  const SongName = useSelector((state) => state.generalSongs);
  const NewSongName = SongName.result;
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const [playlist, setPlaylist] = useState({
    image: "",
    name: "",
    songs: [],
    description: "",
  });

  useEffect(() => {
    const validationErrors = Validate(playlist);
    setErrors(validationErrors);
  }, [playlist]);

  const HandleInputChange = (event) => {
    const value = event.target.value;
    const updatedForm = {
      ...playlist,
      [event.target.name]: value,
    };
    setPlaylist(updatedForm);
  };

  const handleSelect = (newSongName) => {
    const updatedForm = {
      ...playlist,
      songs: [...playlist.songs, newSongName],
    };
    setPlaylist(updatedForm);
  };

  const HandleSearch = () => {
    dispatch(getSongName(search));
  };
  const handleDeleteSearch=()=>{
    dispatch(getSongName())
    setSearch('')
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPlaylist(playlist));
  };

  const handleDeleteSong = (index) => {
    const updatedSongs = [...playlist.songs];
    updatedSongs.splice(index, 1); // Elimina la canción en el índice especificado
    const updatedForm = {
      ...playlist,
      songs: updatedSongs,
    };
    setPlaylist(updatedForm);
  };
 

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Imagen:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="image"
            value={playlist.image}
            onChange={HandleInputChange}
          />
          {errors.image? <p>{errors.image}</p>:<p></p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={playlist.name}
            onChange={HandleInputChange}
          />
           {errors.name? <p>{errors.name}</p>:<p></p>}
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            value={playlist.description}
            onChange={HandleInputChange}
          />
          {errors.description? <p>{errors.description}</p>:<p></p>}
        </label>
      </form>
      <div>
        <input
        value={search}
          type="text"
          placeholder="Canciones..."
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={HandleSearch}>🔍︎</button>
        <button onClick={handleDeleteSearch}>x</button>
      </div>
      <div>
        {NewSongName ? (
          NewSongName.map((song, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-semibold">{song.name}</h2>
              <img src={song.image} alt={song.name} className="max-w-xs" />
              <button onClick={() => handleSelect(song.name)}>+</button>
            </div>
          ))
        ) : (
          <p>Busca tus canciones</p>
        )}
      </div>
      <div>
        <h1>Canciones Seleccionadas</h1>
      {playlist.songs.length > 0 ? (
  playlist.songs.map((song, index) => (
    <div key={index} className="mb-4">
      <h2 className="text-lg font-semibold">{song}</h2>
      <button onClick={() => handleDeleteSong(index)}>x</button>
    </div>
  ))
) : (
  <p>No se han agregado canciones aún.</p>
)}</div>

      <div>
        <button type="submit">CREAR PLAYLIST</button>
      </div>
    </div>
  );
};

export default CreatePlaylist;