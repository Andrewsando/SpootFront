import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
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
          <Link to="/">
            <div className="icon-text-container">
              <i className="material-icons icon-margin">search</i>
              <span>Buscador</span>
            </div>
          </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
