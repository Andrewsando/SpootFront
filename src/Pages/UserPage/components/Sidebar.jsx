import "../styles/Sidebar.css";
import { clearFilter } from "../../../Redux/Actions/Songs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar/SearchBar";
import Filters from "./Filter/Filters";
import { useAuth } from "../../../../context/authContext";

export default function Sidebar() {
  const dispatch = useDispatch();
  const auth = useAuth();
  const handleLogOut = () => {
    auth.logout();
    window.location.href = "/";
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(clearFilter());
  };

  return (
    <div className="container-Sidebar">
      <div className="blockOne">
        <div className="go-home">
          <Link to="/">
            <div className="icon-text-container">
              <i className="material-icons icon-margin">home</i>
              <span>Inicio</span>
            </div>
          </Link>
          <button onClick={()=> handleLogOut()}>Desconectarse</button>
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
      <div className="blockTwo">
        <div className="bookshop">
          <Link to="/">
            <div className="icon-text-container">
              <i className="material-icons icon-margin">library_music</i>
              <span>Tu biblioteca</span>
            </div>
          </Link>
        </div>
        <div className="uploadSong">
          <Link to="/upload">
            <div className="icon-text-container">
              <i className="material-icons icon-margin icon-add">add</i>
              <span>Subir canción</span>
            </div>
          </Link>
        </div>
        <div className="createLibrary-container">
          <div className="createLibrary">
            <h1>Crea tu propia Playlist</h1>
            <p>¡Es muy fácil! Te vamos a ayudar</p>
            <button className="createLibrary-button">Crear playlist</button>
          </div>
          <div className="clearFilters">
            <button className="clearFilters-button" onClick={handleSubmit}>
              Limpiar filtros
            </button>
            <Filters />
          </div>
        </div>
      </div>
    </div>
  );
}
