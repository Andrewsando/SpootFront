import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import SearchBar from "./searchBar/SearchBar";
import Filters from "./Filter/Filters";

export default function Sidebar() {
  const auth = useAuth();

  const handleLogOut = () => {
    auth.logout();
    window.location.href = "/";
  }

  return (
    <div className="container-Sidebar">
      <div className="blockOne">

        {/* Cerrar sesión */}
        <div className="sing-off">
            <i className="material-icons icon-margin icon-signOff">close</i>
            <button className=" button-sign-off" onClick={()=> handleLogOut()}>Cerrar sesión</button>
        </div>

        {/* Inicio */}
        <div className="">
          <Link to="/access-to">
            <div className="go-home">
              <i className="material-icons icon-margin icon-goHome">home</i>
              <span>Inicio</span>
            </div>
          </Link>
        </div>

        
        {/* Buscador de canciones*/}
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>

      <div className="blockTwo">
        {/* Biblioteca */}

        <Link to="/" className="bookshop">
          <div className="content-bookshop">
            <i className="material-icons icon-margin icon-bookshop">library_music</i>
            <span>Tu biblioteca</span>
          </div>
        </Link>

        {/* SUbir canción */}
          <Link to="/upload">
            <div className="uploadSong">
              <i className="material-icons icon-margin icon-uploadSong">add</i>
              <span>Subir canción</span>
            </div>
          </Link>

        {/* Suscribirse */}
          <Link to="/suscribe">
              <div className="to-subscribe">
                <i className="material-icons icon-margin icon-toSubscribe">subscriptions</i>
                <span>Suscribirse</span>
              </div>
          </Link>

        {/* Crear lista */}
        <div className="createPlaylist">
          <Link to="/create-playlist">
            <h1>Crea tu propia Playlist</h1>
            <p>¡Es muy fácil! Te vamos a ayudar</p>
            <button className="button-CreatePlaylist">Crear playlist</button>
          </Link>
        </div>

        {/* Filtro por genero */}
        <div className="filter-by-gender">           
          <Filters />
        </div>
      </div>
    </div>
  );
}