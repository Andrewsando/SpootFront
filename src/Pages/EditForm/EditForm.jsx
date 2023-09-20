import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validationForm from "./validation/validationForm";
import { editSong } from "../../Redux/Actions/Songs";
import { Link } from "react-router-dom";
import BaseLayout from "../../Components/BaseLayout";

export default function EditForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  console.log('form',form)

  //subscripcion al estado
  const failure = useSelector((state) => state.failure);

  // Estados para los archivos
  const [imageFile, setImageFile] = useState(null);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear un objeto FormData para enviar los archivos
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("image", imageFile);

    console.log(formData, 'formData')

    dispatch(editSong(formData))
      .then(() => {
        window.location.href = "/user";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BaseLayout>
      <div className="bg-gradient-to-r from-[#121212] to-[#33313f] h-min-screen">
        <div className=" bg-opacity-30 flex flex-col items-center justify-center">
          <p className="mt-28 text-center text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            ¡Editemos tu canción!
          </p>
          {failure.length ? (
            <div>
              <p>{failure}</p>
            </div>
          ) : (
            <div className="mt-12 mb-28">
              <form
                onSubmit={handleSubmit}
                className="w-96 p-4 bg-[#171717] bg-opacity-90 rounded-lg shadow-md text-white"
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
                    placeholder="Ingresa el nombre acá..."
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-[#525252] text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                    placeholder="Ingresa la descripción acá..."
                    value={form.description}
                    onChange={handleChange}
                    className="w-full p-2 bg-[#525252] text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {errors.description && (
                    <span className="text-red-500">{errors.description}</span>
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
                    className="w-full p-2 bg-[#525252] text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                  {imageFile === null && (
                    <span className="text-red-500">{errors.image}</span>
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
                  className="bg-[#00B44B] text-white font-bold p-2 rounded-md hover:bg-[#54E360] w-full"
                >
                  Cargar cambios
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
    </BaseLayout>
  );
}
