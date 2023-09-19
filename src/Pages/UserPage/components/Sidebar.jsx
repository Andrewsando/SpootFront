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
<<<<<<< HEAD

        {/* Cerrar sesión */}
        <div className="sing-off">
          <i className="material-icons icon-margin icon-signOff">close</i>
          <button className="icon-text-container button-sign-off" onClick={() => handleLogOut()}>Cerrar sesión</button>
=======
        {/* Cerrar sesión */}
        <div className="sing-off">
            <i className="material-icons icon-margin icon-signOff">close</i>
            <button className=" button-sign-off" onClick={()=> handleLogOut()}>Cerrar sesión</button>
>>>>>>> ea1f259ebca096a02448ee10e0125bbf422312e0
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
<<<<<<< HEAD

        {/* Buscador */}
=======
        
        {/* Buscador de canciones*/}
>>>>>>> ea1f259ebca096a02448ee10e0125bbf422312e0
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>

      <div className="blockTwo">
        {/* Biblioteca */}
<<<<<<< HEAD
        {/*   <div className="bookshop">
          <Link to="/">
            <div className="icon-text-container icon-goHome">
              <i className="material-icons icon-margin">library_music</i>
              <span>Tu biblioteca</span>
            </div>
          </Link>
        </div> */}
=======
        <Link to="/" className="bookshop">
          <div className="content-bookshop">
            <i className="material-icons icon-margin icon-bookshop">library_music</i>
            <span>Tu biblioteca</span>
          </div>
        </Link>
>>>>>>> ea1f259ebca096a02448ee10e0125bbf422312e0

        {/* SUbir canción */}
          <Link to="/upload">
            <div className="uploadSong">
              <i className="material-icons icon-margin icon-uploadSong">add</i>
              <span>Subir canción</span>
            </div>
          </Link>

<<<<<<< HEAD
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
=======
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
>>>>>>> ea1f259ebca096a02448ee10e0125bbf422312e0
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