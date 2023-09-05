import "../../styles/Filters.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenre, filterArtist } from "../../../../Redux/Actions/Songs";

export default function Filters() {
  const dispatch = useDispatch();
  const [genreFilter, setGenreFilter] = useState("All");
  const [artistFilter, setArtistFilter] = useState("All");
  const { result } = useSelector((state) => state.copySongs);

  useEffect(() => {
    dispatch(filterGenre(genreFilter));
  }, [genreFilter]);

  useEffect(() => {
    dispatch(filterArtist(artistFilter));
  }, [artistFilter]);

  const genres = result ? [...new Set(result.map((song) => song.genre))] : [];
  const artists = result ? [...new Set(result.map((song) => song.artist))] : [];

  const handleGenreChange = (event) => {
    const value = event.target.value;
    setGenreFilter(value);
  };

  const handleArtistChange = (event) => {
    const value = event.target.value;
    setArtistFilter(value);
  };

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
        <label htmlFor="artist" className="font-semibold">
          Por artista
        </label>
        <select
          value={artistFilter}
          onChange={handleArtistChange}
          className="select-Filters w-full p-2 border rounded-md text-white"
        >
          <option value="All">All</option>
          {artists.map((artist, index) => (
            <option key={index} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
