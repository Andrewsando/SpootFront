import "./styles/AccessForm.css";
import { useState } from "react";
import Validation from "../../Utils/Validation.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import { useAuth } from "../../../context/authContext";
import axios from "axios";

export default function AccessForm() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      Validation({
        [name]: value,
      })
    );
  };

  const handleGoogle = (event) => {
    event.preventDefault();
    auth.loginWithGoogle();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const login = await axios.post(
        `http://backend-pf-production-ba15.up.railway.app/users/login`, userData
      );
      if (login.status === 200) {
        const { token } = login.data;
        localStorage.setItem("token", token);
        navigate("/user");
      }
    } catch (error) {
      alert("No se pudo iniciar sesión");
    }
  };

  return (
    <div className="container-general-formLogin">
      <div className="container-formLogin">
        <div className="content-log">
          <div className="logo-form-container">
            <img
              src="/images/sonido.png"
              alt="img-form"
              className="logo-form"
              name="image"
            />
          </div>
          <h1 className="titleForm">Regístrate o Inicia Sesión</h1>
        </div>
        <div className="pageForm">
          <form onSubmit={handleSubmit} className="form-create">
            <div className="form-columns">
              <div className="form-column">
                <label htmlFor="email" className="form-create_label" />
                <input
                  className={
                    errors.name ? "form-create_inputError" : "form-create_input"
                  }
                  id="email-login"
                  placeholder="Introduce tu correo electrónico"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="spanError">{errors.email}</span>
                )}
              </div>
            </div>
            {/* Password */}
            <div className="form-columns">
              <div className="form-column">
                <label htmlFor="password" className="form-create_label" />
                <input
                  className={
                    errors.name ? "form-create_inputError" : "form-create_input"
                  }
                  id="password-login"
                  placeholder="Introduce tu contraseña"
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
                <span className="spanError">{errors.password}</span>
              </div>
            </div>
            <Link to="" className="forgotten-password">
              <span>¿Olvidaste tu contraseña?</span>
            </Link>
            <button className="form-button">Iniciar Sesión</button>
          </form>
          <h1 className="forgotten-password">¿Primera vez por aquí?</h1>
          <button className="form-button">
            <Link to="">
              {" "}
              {/* Agregar ruta a formulario de registro */}
              Registrarse
            </Link>
          </button>
          <h1 className="text-opcion">ó</h1>
          <button className="form-continue-button">
            <img
              src="/images/spotify-white.png"
              alt="icon"
              name="image"
              className="iconLog"
            />
            <span> Continúa con SpootChat</span>
          </button>
          <button
            className="form-continue-button"
            onClick={(event) => handleGoogle(event)}
          >
            <img
              src="/images/google.png"
              alt="icon"
              name="image"
              className="iconLog"
            />
            <span> Continúa con Google</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
