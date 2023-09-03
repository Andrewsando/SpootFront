import { useDispatch, useSelector } from "react-redux";
import { filterGenre, filterArtist } from '../../../../Redux/Actions/Songs';
import { useState, useEffect } from 'react';

const Filters = () => {
  const dispatch = useDispatch();
  const [genreFilter, setGenreFilter] = useState('All');
  const [artistFilter, setArtistFilter] = useState('All');
  const { result } = useSelector(state => state.copySongs);

  useEffect(() => {
    dispatch(filterGenre(genreFilter));
  }, [genreFilter]);

  useEffect(() => {
    dispatch(filterArtist(artistFilter));
  }, [artistFilter]);

  const genres = result ? [...new Set(result.map(song => song.genre))] : [];
  const artists = result ? [...new Set(result.map(song => song.artist))] : [];

  const handleGenreChange = (event) => {
    const value = event.target.value;
    setGenreFilter(value);
  }

  const handleArtistChange = (event) => {
    const value = event.target.value;
    setArtistFilter(value);
  }

  return (
    <div>
      <p>Filter by Genre</p>
      <select value={genreFilter} onChange={handleGenreChange}>
        <option value="All">All</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <p>Filter by Artist</p>
      <select value={artistFilter} onChange={handleArtistChange}>
        <option value="All">All</option>
        {artists.map((artist, index) => (
          <option key={index} value={artist}>
            {artist}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filters;
