import "../../styles/Filters.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionsHandler, generosSongs} from "../../../../Redux/Actions/Songs";


export default function Filters() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(generosSongs(1,100))
  }, [dispatch])
  
  const [genreFilter, setGenreFilter] = useState("All");
  const [artistFilter, setArtistFilter] = useState(""); 
  const { result } = useSelector((state) => state.generosSongs);
  const genres = result ? [...new Set(result.map((song) => song.genre))] : []; 

  const handleGenreChange = (event) => {
    const value = event.target.value;
    setGenreFilter(value);
  };

  const handleArtistChange = (event) => {
    const value = event.target.value;
    setArtistFilter(value);
  };
  
  const SearchByFilters=()=>{
    dispatch(ActionsHandler(genreFilter,artistFilter))
  }

  return (
    <div className="container-Filters text-white p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Filtre:</h1>
      <div className="mb-4">
        <label htmlFor="genre" className="font-semibold">
          Por genero
        </label>
        <select
          value={genreFilter}
          onChange={handleGenreChange}
          className="select-Filters w-full p-2 border rounded-md text-white"
        >
          <option value="All">All</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div>
      <input
        type="text"
        placeholder="Artista..."
        onChange={handleArtistChange}
        className="w-full px-3 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
      />
    </div>
    <div>
      <button
        onClick={SearchByFilters}
        disabled={genreFilter === 'All' && artistFilter === ''}
        className="px-4 py-2 bg-white text-black border border-green-500 rounded-lg hover:bg-green-500 focus:outline-none"
      >
        Search
      </button>
      </div>
    </div>
  );
}
