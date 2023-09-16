import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validationForm from "./validation/validationForm";
import { postSong } from "../../Redux/Actions/Songs";
import { Link } from "react-router-dom";
import BaseLayout from "../../Components/BaseLayout";
// import { useHistory } from "react-router-dom"

export default function UploadForm() {
  const dispatch = useDispatch();
  const history = useHistory();
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
          history.push("/user");
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
      <div className="bg-gradient-to-r from-[#131316] to-[#27272c] h-min-screen">
        <div className="bg-black bg-opacity-30 flex items-center justify-center">
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
              {/* Resto del formulario sigue igual */}
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
        </div>
      </div>
    </BaseLayout>
  );
}
