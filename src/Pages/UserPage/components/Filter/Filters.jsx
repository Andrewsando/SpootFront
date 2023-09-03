import { useDispatch, useSelector } from "react-redux";
import { filterGenre } from '../../../../Redux/Actions/Songs';
import { useState, useEffect } from 'react';

const Filters = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('All');
  const { result } = useSelector(state => state.generalSongs);

  useEffect(() => {
    dispatch(filterGenre(filter));
  }, [filter]);

  const genres = result ? [...new Set(result.map(song => song.genre))] : [];

  const handleChange = (event) => {
    const value = event.target.value;
    setFilter(value); 
  }

  return (
    <div>
      <p>Filter name</p>
      <select value={filter} onChange={handleChange}>
        <option value="All">All</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filters;
