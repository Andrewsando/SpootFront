import "./styles/AccessForm.css";
import { useState } from "react";
import Validation from "../../Utils/Validation.jsx";
import { loginUser } from "../../Redux/Actions/Users";
import { useDispatch } from "react-redux";

export default function AccessForm() {
  const dispatch = useDispatch();

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
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(userData))
      .then(() => {
        // Redirige al usuario después de iniciar sesión con éxito
        window.location.href ="/user";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-formLogin">
      <div className="pageForm">
        <form onSubmit={handleSubmit} className="form-create">
          <div className="logo-form-container">
            <img
              src="/images/usuario.png"
              alt="country-form"
              className="logo-form"
              name="image"
            />
          </div>
          <div className="form-columns">
            <div className="form-column">
              <label htmlFor="email" className="form-create_label" />
              <input
                className={
                  errors.name ? "form-create_inputError" : "form-create_input"
                }
                id="email-login"
                placeholder="Introduce tu email o nombre de usuario"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <span className="spanError">{errors.email}</span>

              <label htmlFor="password" className="form-create_label" />
              <input
                className={
                  errors.name ? "form-create_inputError" : "form-create_input"
                }
                id="password-login"
                placeholder="Introduce tu contraseña"
                type="text"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <span className="spanError">{errors.password}</span>
            </div>
          </div>

          <button className="form-button">Inicia Sesión</button>
        </form>
      </div>
    </div>
  );
}
