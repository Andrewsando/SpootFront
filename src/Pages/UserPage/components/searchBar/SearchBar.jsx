import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSongName } from "../../../../Redux/Actions/Songs";
import "../../styles/SearchBar.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(getSongName(name));
    setName(""); // Limpia el campo de entrada después de enviar el formulario
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Buscar canciones..."
        value={name} // Usa "value" en lugar de "onChange" para controlar el valor del input
        onChange={handleChange}
        className="bg-transparent text-white focus:outline-none w-full"
      />
      {name.length >= 3 && (
        <button
          type="submit"
          onClick={onSubmit}
          className="icon-searchBar-song"
        >
          <i className="material-icons">search</i>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
