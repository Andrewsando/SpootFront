import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSong } from "../../Redux/Actions/Songs";
import { Link, useNavigate } from "react-router-dom";
import BaseLayout from "../../Components/BaseLayout";
import "./styles/UploadForm.css"
import {
  validationForm,
  submitFormValidation,
} from "./validation/validationForm";

export default function UploadForm() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const user = useSelector((state) => state.generalUsers);
  const premium = user.result.premium;
  const [form, setForm] = useState({
    name: undefined,
    description: undefined,
    artist: undefined,
    genre: undefined,
    image: undefined,
    sound: undefined,
  });

  const [imageFile, setImageFile] = useState(null);
  const [soundFile, setSoundFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
    console.log("Form setted.", form);
    setErrors(
      validationForm({
        ...form,
        [name]: value,
      })
    );
    console.log("Errors setted.");
  };

  const handleImageChange = (event) => {
    console.log("event", event);
    setImageFile(event.target.files[0]);
    handleChange(event);
  };

  const handleSoundChange = (event) => {
    setSoundFile(event.target.files[0]);
    handleChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (premium) {
      const errors = submitFormValidation(form);
      if (Object.keys(errors).length > 0) {
        setErrors(errors);
      } else {
        dispatch(postSong(form))
          .then(() => {
            history("/user");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      alert("Debes ser un usuario premium para cargar canciones.");
    }
  };

  return (
    <div>
      {premium ? (
        <BaseLayout>
          <div className="bg-gradient-to-l from-[#141921] to-[#000000] h-min-screen">
            <div className="bg-opacity-30 flex flex-col items-center justify-center">
              <p className="mt-32 text-center text-4xl tracking-tight font-extrabold dark:text-white">
                ¡Carguemos tu canción!
              </p>
              <div className="h-fit flex items-center justify-center">
                {errors.length ? (
                  <div>
                    <p>{errors}</p>
                  </div>
                ) : (
                  <div className="mt-12 mb-28">
                    <form
                      onSubmit={handleSubmit}
                      className="max-w-md p-4 bg-[#171717] bg-opacity-90 rounded-lg shadow-md text-white"
                    >
                      <div className="my-4">
                        <label
                          htmlFor="name"
                          className="block text-[#54E360] font-bold mb-2"
                        >
                          Nombre de tu canción
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Escribe el nombre de la canción..."
                          value={form.name}
                          onChange={handleChange}
                          className="w-full p-2 bg-[#525252] text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.name && (
                          <span className="text-red-500">{errors.name}</span>
                        )}
                      </div>
                      <div className="my-4">
                        <label
                          htmlFor="description"
                          className="block text-[#54E360]  font-bold mb-2"
                        >
                          Descripción
                        </label>
                        <input
                          type="text"
                          name="description"
                          placeholder="Escribe la descripción de la canción...."
                          value={form.description}
                          onChange={handleChange}
                          className="w-full p-2 bg-[#525252] text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.description && (
                          <span className="text-red-500">
                            {errors.description}
                          </span>
                        )}
                      </div>
                      <div className="my-4">
                        <label
                          htmlFor="artist"
                          className="block text-[#54E360] font-bold mb-2"
                        >
                          Artista
                        </label>
                        <input
                          type="text"
                          name="artist"
                          placeholder="Escribe el artista de la canción..."
                          value={form.artist}
                          onChange={handleChange}
                          className="w-full p-2 bg-[#525252] text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.artist && (
                          <span className="text-red-500">{errors.artist}</span>
                        )}
                      </div>
                      <div className="my-4">
                        <label
                          htmlFor="genre"
                          className="block text-[#54E360] font-bold mb-2"
                        >
                          Género
                        </label>
                        <input
                          type="text"
                          name="genre"
                          placeholder="Escribe el género de la canción  ..."
                          value={form.genre}
                          onChange={handleChange}
                          className="w-full p-2 bg-[#525252] text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {errors.genre && (
                          <span className="text-red-500">{errors.genre}</span>
                        )}
                      </div>
                      <div className="my-4">
                        <label
                          htmlFor="image"
                          className="block text-[#54E360] font-bold mb-2"
                        >
                          Imagen
                        </label>
                        <input
                          type="file"
                          name="image"
                          onChange={handleImageChange}
                          className="w-full p-2 bg-[#525252] text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {imageFile === null && (
                          <span className="text-red-500">{errors.image}</span>
                        )}
                      </div>
                      <div className="my-4">
                        <label
                          htmlFor="sound"
                          className="block text-[#54E360] font-bold mb-2"
                        >
                          Sonido
                        </label>
                        <input
                          type="file"
                          name="sound"
                          onChange={handleSoundChange}
                          className="w-full p-2 bg-[#525252] text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        {soundFile === null && (
                          <span className="text-red-500">{errors.sound}</span>
                        )}
                      </div>
                      <button
                        disabled={
                          !form.name ||
                          !form.description ||
                          !form.artist ||
                          !form.genre
                            ? true
                            : false
                        }
                        type="submit"
                        className="bg-[#54E360] text-black font-bold p-2 rounded-md hover:bg-[#00B44B] w-full"
                      >
                        Cargar
                      </button>
                      <Link
                        to="/user"
                        className="mt-4 block text-center text-white hover:text-[#00B44B]"
                      >
                        Volver
                      </Link>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </BaseLayout>
      ) : (
        <div class="bg-gradient-to-l from-[#141921] to-[#000000] min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">
              Necesitas ser premium para esta funcionalidad
            </h1>
            <div className="buttonUpload-container">
              <Link to={"/premium"}>
                <button className="formbutton-planes">Ver planes</button>
              </Link>
              <Link to={"/user"}>
                <button className="formbutton-volver">Volver</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
