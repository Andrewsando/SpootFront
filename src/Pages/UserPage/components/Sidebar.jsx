import { clearFilter } from "../../../Redux/Actions/Songs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import SearchBar from "./searchBar/SearchBar";
import Filters from "./Filter/Filters";

export default function Sidebar() {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(clearFilter());
  }

  return (
    <div className="container-Sidebar">
      <div className="blockOne">
        <div className="go-home">
          <Link to="/">
            <div className="icon-text-container">
              <i className="material-icons icon-margin">home</i>
              <span>Home</span>
            </div>
          </Link>
        </div>
        <div className="search-bar">
          <SearchBar></SearchBar>
          <button onClick={handleSubmit}>Limpiar filtros</button>
        </div>
      </div>
      <div className="blockTwo">
        <div className="go-home">
          <Link to="/">
            <div className="icon-text-container">
              <i className="material-icons icon-margin">library_music</i>
              <span>Tu biblioteca</span>
            </div>
          </Link>
        </div>
        <div className="createLibrary-container">
          <div className="createLibrary">
            <h1>Crea tu propia Playlist</h1>
            <p>¡Es muy fácil! Te vamos a ayudar</p>
            <button className="createLibrary-button">Crear playlist</button>
          <Filters/>
          </div>
        </div>
        <Link to="/upload">
            <div className="icon-text-container">
              <i className="material-icons icon-margin">library_music</i>
              <span>Subir cancion</span>
            </div>
          </Link>
      </div>
    </div>
  );
}
