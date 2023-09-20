import "../../styles/Filters.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionsHandler, generosSongs } from "../../../../Redux/Actions/Songs";

export default function Filters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generosSongs(1, 100));
  }, [dispatch]);

  const [genreFilter, setGenreFilter] = useState("All");
  const [artistFilter, setArtistFilter] = useState("");
  const { result } = useSelector((state) => state.generosSongs);
  const genres = result ? [...new Set(result.map((song) => song.genre))] : [];

  const handleGenreChange = (event) => {
    const value = event.target.value;
    setGenreFilter(value);
    dispatch(ActionsHandler(value, artistFilter));
  };

  const handleArtistChange = (event) => {
    const value = event.target.value;
    setArtistFilter(value);
  };

  const isSearchButtonVisible = artistFilter.length > 2;

  const SearchByFilters = () => {
    dispatch(ActionsHandler(genreFilter, artistFilter));
    // Limpiar el input de artista después de buscar
    setArtistFilter("");
  };

  return (
    <div className="container-Filters text-white p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Filtre</h1>
      <div className="mb-4">
        <label htmlFor="genre" className="mb-4">
          Por género:
        </label>
        <select
          value={genreFilter}
          onChange={handleGenreChange}
          className="select-Filters"
        >
          <option value="All">Todos los géneros</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="button-SearchBar-artist">
        <input
          type="text"
          placeholder="Buscar artistas..."
          value={artistFilter} // Usar el valor del estado para el valor del input
          onChange={handleArtistChange}
          className="bg-transparent text-white focus:outline-none w-full pl-2"
        />

        {isSearchButtonVisible && (
          <button
            type="submit"
            onClick={SearchByFilters}
            className="icon-searchBar-artist"
          >
            <i className="material-icons">search</i>
          </button>
        )}
      </div>
    </div>
  );
}
