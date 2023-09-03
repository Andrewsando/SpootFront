import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="container-Sidebar">
      <div className="blockOne">
        <div className="go-home">
          <Link to="/">
            <img
              src="/images/go-home.png"
              alt="Logotipo"
              className="logo-nav"
            />
          </Link>
          <p>Home</p>
        </div>
        <div className="search-bar">
          <Link to="/">
            <img
              src="/images/search-bar.png"
              alt="Logotipo"
              className="logo-nav"
            />
          </Link>
          <p>Buscador</p>
        </div>
      </div>
    </div>
  );
}
