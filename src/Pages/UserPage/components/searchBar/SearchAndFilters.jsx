import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongName, ActionsHandler, generosSongs } from "../../../../Redux/Actions/Songs";
import "../../styles/Filters.css";
import "../../styles/SearchBar.css";

export default function SearchAndFilters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generosSongs(1, 100));
  }, [dispatch]);

  const [searchType, setSearchType] = useState("song"); // 'song' o 'artist'
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const { result } = useSelector((state) => state.generosSongs);
  const genres = result ? [...new Set(result.map((song) => song.genre))] : [];

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const isSearchButtonVisible = searchTerm.length >= 3;

  const handleSearch = () => {
    if (searchTerm.length >= 3) {
      if (searchType === "song") {
        dispatch(getSongName(searchTerm));
      } else if (searchType === "artist") {
        dispatch(ActionsHandler(genreFilter, searchTerm));
      }
    }
  };

  return (
    <div className="container-SearchAndFilters text-white p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Buscar canciones</h1>

      <div className="mb-4">
        <label htmlFor="searchType">Tipo de búsqueda:</label>
        <select
          id="searchType"
          value={searchType}
          onChange={handleSearchTypeChange}
          className="select-Filters"
        >
          <option value="song">Por nombre de canción</option>
          <option value="artist">Por artista</option>
        </select>
      </div>

      <div className="button-SearchBar">
        <input
          type="text"
          placeholder={`Buscar ${searchType === 'song' ? 'canciones' : 'artistas'}...`}
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="bg-transparent text-white focus:outline-none w-full pl-2"
        />

      {isSearchButtonVisible && (
            <button
              type="submit"
              onClick={handleSearch}
              className="icon-searchBar-song"
            >
              <i className="material-icons">search</i>
            </button>
          )}
      </div>

      {searchType === 'artist' && (
        <div className="mb-4">
          <label htmlFor="genre" className="mb-4">
            Por género:
          </label>
          <select
            id="genre"
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
      )}

    </div>
  );
}
