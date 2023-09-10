import "../styles/Footer.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-login">
      <hr className="footer-line" />
      <div className="footer-data">
        <div className="footer-derechos">
          <div className="footer-menu">
            <Link to="/"> Home </Link>
          </div>
        </div>
        <div className="footer-menu">
          <Link to="/privacy-policy-and-terms-of-use">
            Políticas de Privacidad y Términos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
