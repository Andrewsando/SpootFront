import "./styles/CrearCountUser.css";
import { useState } from "react";
import Validation from "../../Utils/Validation.jsx";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions/Users";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  email: "",
  image: "",
};

const CrearCountUser = () => {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //********************** */
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState(initialState);
  const [userData, setUserData] = useState(initialState);

  // Handlers para los archivos
  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    handleChange(event);
    console.log(event);
  };
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
  //const isFormValid = Object.keys(errors).length === 0;

  const handleSubmit = async (event) => {
    event.preventDefault();
    //*************form*********************** */
    // Crear un objeto FormData para enviar los archivos
    const formData = new FormData();
    formData.append("username", userData.username);
    formData.append("password", userData.password);
    formData.append("email", userData.email);
    formData.append("image", imageFile);
    // console.log(formData);
    console.log(userData);
    //********************** */
    dispatch(postUser(userData));
    alert("Usuario registrado correctamente");
    navigate("/access-to");
    //---------MODIFICAR EL REDIRECT---------------------

    // dispatch(postUser(formData))
    //   .then(() => {
    //     window.location.href = "/user";
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // try {
    //   const login = await axios.post(
    //     `http://backend-pf-production-ba15.up.railway.app/users/login`,
    //     userData
    //   );
    //   if (login.status === 200) {
    //     const { token } = login.data;
    //     localStorage.setItem("token", token);
    //     navigate("/user");
    //   }
    // } catch (error) {
    //   alert("No se pudo iniciar sesión");
    // }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="pageForm">
        <form onSubmit={handleSubmit} className="form-create">
          <div className="form-columns">
            <div className="form-column">
              <label htmlFor="username" className="form-create_label" />
              <input
                className={
                  errors.name ? "form-create_inputError" : "form-create_input"
                }
                id="username"
                placeholder="Introduce tu nombre"
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
              <span className="spanError">{errors.password}</span>
            </div>
          </div>
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
          <div className="form-colum">
            <label
              htmlFor="image"
              className="block text-[#54E360] font-bold mb-2"
            >
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full p-2 bg-gray-700 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {imageFile === null && (
              <span className="text-red-500">{errors.image}</span>
            )}
          </div>

          <button className="form-button">Crear cuenta</button>
          {/* 
          <span style={{ color: "#fff" }}> Registrar usuario</span> */}
        </form>
      </div>
    </>
  );
};

export default CrearCountUser;
