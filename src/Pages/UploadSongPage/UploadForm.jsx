import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import validationForm from "./validation/validationForm";
import { postSong } from "../../Redux/Actions/Songs";
import { Link } from "react-router-dom";
import BaseLayout from "../../Components/BaseLayout";

export default function UploadForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
    artist: "",
    genre: "",
  });

  //subscripcion al estado
  const failure = useSelector((state) => state.failure);

  // Estados para los archivos
  const [imageFile, setImageFile] = useState(null);
  const [soundFile, setSoundFile] = useState(null);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validationForm({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  // Handlers para los archivos
  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
    handleChange(event);
    console.log(event);
  };

  const handleSoundChange = (event) => {
    setSoundFile(event.target.files[0]);
    handleChange(event);
  };

  /* const isFormEmpty = useMemo(() => {
    for (const key in form) {
      if (form[key] !== "" && form[key].length !== 0) {
        return false;
      }
    }
    return true;
  }, [form]); */

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear un objeto FormData para enviar los archivos
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("artist", form.artist);
    formData.append("genre", form.genre);
    formData.append("image", imageFile);
    formData.append("sound", soundFile);

    dispatch(postSong(formData))
      .then(() => {
        window.location.href = "/user";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BaseLayout>
      <div className="bg-gradient-to-r from-[#131316] to-[#27272c] h-min-screen">
        <div className="bg-black bg-opacity-30 flex items-center justify-center">
          {failure.length ? (
            <div>
              <p>{failure}</p>
            </div>
          ) : (
            <div className="mt-36 mb-28">
              <form
                onSubmit={handleSubmit}
                className="max-w-md p-4 bg-black bg-opacity-90 rounded-lg shadow-md text-white"
              >
                <div className="my-4">
                  <label
                    htmlFor="name"
                    className="block text-[#54E360] font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type song's name..."
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Type song's description..."
                    value={form.description}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    Artist
                  </label>
                  <input
                    type="text"
                    name="artist"
                    placeholder="Type song's artist..."
                    value={form.artist}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    Genre
                  </label>
                  <input
                    type="text"
                    name="genre"
                    placeholder="Type song's genre..."
                    value={form.genre}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-700 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                <div className="my-4">
                  <label
                    htmlFor="sound"
                    className="block text-[#54E360] font-bold mb-2"
                  >
                    Sound
                  </label>
                  <input
                    type="file"
                    name="sound"
                    onChange={handleSoundChange}
                    className="w-full p-2 bg-gray-700 text-white border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                  Upload
                </button>
                <Link
                  to="/user"
                  className="mt-4 block text-center text-blue-500 hover:text-blue-700"
                >
                  Volver
                </Link>
              </form>
            </div>
          )}
        </div>
      </div>
      {console.log(errors)}
    </BaseLayout>
  );
}
