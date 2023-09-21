import Validate from "./validations";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongName } from "../../../Redux/Actions/Songs";
import { createPlaylist } from "../../../Redux/Actions/Playlists";
import { Link } from "react-router-dom";

const CreatePlaylist = () => {
  const SongName = useSelector((state) => state.songsForm);
  const failure = useSelector((state) => state.failure);
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
  const handleDeleteSearch = () => {
    dispatch(getSongName());
    setSearch("");
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPlaylist(playlist));
    if (failure.length > 0) {
      window.alert(failure);
    } else {
      window.alert("Playlist creada exitosamente");
      setPlaylist({
        name: "",
        description: "",
        songs: [],
      });
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  const handleDeleteSong = (index) => {
    const updatedSongs = [...playlist.songs];
    updatedSongs.splice(index, 1);
    const updatedForm = {
      ...playlist,
      songs: updatedSongs,
    };
    setPlaylist(updatedForm);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Crear Playlist</h1>
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={playlist.name}
            onChange={HandleInputChange}
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Descripción:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            value={playlist.description}
            onChange={HandleInputChange}
          />
          {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description}</p>}
        </div>
      </form>
      <div className="mb-4">
        <input
          value={search}
          type="text"
          placeholder="Canciones..."
          onChange={(event) => setSearch(event.target.value)}
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={HandleSearch}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Buscar
        </button>
        <button
          onClick={handleDeleteSearch}
          className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Limpiar
        </button>
      </div>
      <div className="mb-4">
        {NewSongName ? (
          NewSongName.map((song, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-lg font-semibold">{song.name}</h2>
                <img src={song.image} alt={song.name} className="max-w-xs" />
              </div>
              <button
                onClick={() => handleSelect(song.name)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Agregar
              </button>
            </div>
          ))
        ) : (
          <p>No se han encontrado canciones.</p>
        )}
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Canciones Seleccionadas</h1>
        {playlist.songs.length > 0 ? (
          playlist.songs.map((song, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">{song}</h2>
              <button
                onClick={() => handleDeleteSong(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>No se han agregado canciones aún.</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={!isFormValid}
          onClick={HandleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          CREAR PLAYLIST
        </button>
      </div>
      <div className="mt-4">
        <Link to="/access-to">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreatePlaylist;