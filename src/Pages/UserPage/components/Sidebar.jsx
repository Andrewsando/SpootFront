import "../styles/Sidebar.css";
import { clearFilter } from "../../../Redux/Actions/Songs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar/SearchBar";
import Filters from "./Filter/Filters";
import { useAuth } from "../../../../context/AuthContext";

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

        {/* Cerrar sesión */}
        <div className="sing-off">
          <i className="material-icons icon-margin icon-signOff">close</i>
          <button className="icon-text-container button-sign-off" onClick={() => handleLogOut()}>Cerrar sesión</button>
        </div>

        {/* Ir al Home */}
        <div className="go-home">
          <Link to="/">
            <div className="icon-text-container icon-goHome">
              <i className="material-icons icon-margin">home</i>
              <span>Inicio</span>
            </div>
          </Link>
        </div>

        {/* Buscador */}
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
      <div className="blockTwo">

        {/* Biblioteca */}
        {/*   <div className="bookshop">
          <Link to="/">
            <div className="icon-text-container icon-goHome">
              <i className="material-icons icon-margin">library_music</i>
              <span>Tu biblioteca</span>
            </div>
          </Link>
        </div> */}

        {/* Cargar canción */}
        <div className="uploadSong">
          <Link to="/upload">
            <div className="icon-text-container">
              <i className="material-icons icon-margin icon-add">add</i>
              <span>Subir canción</span>
            </div>
          </Link>
        </div>

        <div className="to-subscribe">
          <Link to="/suscribe">
            <div className="icon-text-container icon-toSubscribe">

              <i className="material-icons icon-margin">subscriptions</i>
              {/* <i className="material-icons">suscribe</i> */}
              <span>Suscribirse</span>
            </div>
          </Link>
        </div>

        <div className="createLibrary-container">
          {/* Crear lista */}
          <div className="createLibrary">
            <h1>Crea tu propia Playlist</h1>
            <p>¡Es muy fácil! Te vamos a ayudar</p>
            <button className="createLibrary-button">Crear playlist</button>
          </div>

          {/* limpiar filtros */}
          <div className="clearFilters">
            <button className="clearFilters-button" onClick={handleSubmit}>
              Limpiar filtros
            </button>
            <Filters />
          </div>
          {/* ----- */}
        </div>
      </div>
    </div>
  );
}