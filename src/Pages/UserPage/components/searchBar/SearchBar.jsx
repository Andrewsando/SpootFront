import { useState } from 'react';
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
    <div>
      <div>
        <input type="text" placeholder="Ingresa 3 caracteres" onChange={handleChange}  style={{ color: 'black' }}/>
        {name.length >= 3 ?<button onClick={onSubmit}>Buscar</button> : null}
      </div>
    </div>
  );
};

export default SearchBar;
