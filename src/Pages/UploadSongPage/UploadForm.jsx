import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validationForm from "./validation/validationForm";
import { postSong } from "../../Redux/Actions/Songs";
import { Link, useNavigate } from "react-router-dom";
import BaseLayout from "../../Components/BaseLayout";
// import { useHistory } from "react-router-dom"

export default function UploadForm() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const user = useSelector((state) => state.user);

  const [form, setForm] = useState({
    name: "",
    description: "",
    artist: "",
    genre: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [soundFile, setSoundFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors(
      validationForm({
        ...form,
        [name]: value,
      })
    );
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    handleChange(event);
  };

  const handleSoundChange = (event) => {
    setSoundFile(event.target.files[0]);
    handleChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.isPremium) {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("artist", form.artist);
      formData.append("genre", form.genre);
      formData.append("image", imageFile);
      formData.append("sound", soundFile);

      dispatch(postSong(formData))
        .then(() => {
          history("/user");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Debes ser un usuario premium para cargar canciones.");
    }
  };

  return (
    <BaseLayout>
      <div className="bg-gradient-to-r from-[#121212] to-[#33313f] h-min-screen">
      <div className=" bg-opacity-30 flex flex-col items-center justify-center">
      <p className="mt-32 text-center text-4xl tracking-tight font-extrabold dark:text-white">
            ¡Carguemos tu canción!
          </p>
        <div className=" h-fit flex items-center justify-center">
          {failure.length ? (
            <div>
              <p>{failure}</p>
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
                    <span className="text-red-500">{errors.description}</span>
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
                    form.name === "" &&
                    form.description === "" &&
                    form.artist === "" &&
                    form.genre === ""
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
  );
}
