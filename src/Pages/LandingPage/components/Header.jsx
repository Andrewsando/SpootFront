import "../styles/Header.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { firebase } from "../../../config/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebase);

export default function Header() {
  const [usuario, setUsuario] = useState(null);
  
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null)
    }
  });
  const [scrolling, setScrolling] = useState(false);

  // Nav flotante
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Event listener al componente para detectar el scroll
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiamos el event listener cuando el componente se desmonta
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Obtenemos la posición actual del scroll en el eje vertical
    setScrolling(scrollY > 0); // Cambiamos el estado de scrolling dependiendo de si la posición del scroll es mayor a 0
  };

  return (
    <nav className={scrolling ? "scrolling" : ""}>
      <div className="logo-container">
        <Link to="/">
          <img src="/images/spotify.png" alt="Logotipo" className="logo-nav" />
        </Link>
        <h1 className="title-logo">SpootChat</h1>
      </div>
      <div className="menu-nav">
        <div className="dropdown">
          <p className="menu-option">Sobre SpootChat</p>
          <div className="dropdown-content">
            <Link to="/what-is-spootchat">¿Qué es SpootChat?</Link>
            <Link to="/meet-our-team">Team - Conoce nuestro equipo</Link>
          </div>
        </div>
        <div className="dropdown">
          <p className="menu-option">Conoce</p>
          <div className="dropdown-content">
            <Link to="/privacy-policy-and-terms-of-use">Políticas de Privacidad y Términos de Uso</Link>
          </div>
        </div>
        <div className="option-content">
          <Link
            className={`contact-option ${
              scrolling ? "scrolling-contact-option" : ""
            }`}
            to="/contact-us"
          >
            Contáctenos
          </Link>
        </div>
        <Link className="accessTo-option" to="/access-to">
          {usuario ? <span>Mi perfil</span> : <span>Iniciar sesión</span>}
        </Link>
      </div>
    </nav>
  );
}
