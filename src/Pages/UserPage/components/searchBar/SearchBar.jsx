import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSongName } from '../../../../Redux/Actions/Songs';

const SearchBar = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(getSongName(name)); 
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <div className="flex items-center rounded-md bg-gray-800 px-3 py-2">
      <input
        type="text"
        placeholder="Buscar canciones..."
        onChange={handleChange}
        className="bg-transparent text-white focus:outline-none w-full"
      />
      {name.length >= 3 && (
        <button
          type="submit"
          onClick={onSubmit}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ml-2"
        >
          Buscar
        </button>
      )}
    </div>
  );
};

export default SearchBar;







