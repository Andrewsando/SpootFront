import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import validationForm from "./validation/validationForm";
import { postSong } from "../../Redux/Actions/Songs";
import { Link } from "react-router-dom";

export default function UploadForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
    artist: "",
    genre: "",
  });

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
  };

  const handleSoundChange = (event) => {
    setSoundFile(event.target.files[0]);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type song's name..."
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Type song's description..."
            value={form.description}
            onChange={handleChange}
          />
          {errors.description && <span>{errors.description}</span>}
        </div>
        <div>
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            name="artist"
            placeholder="Type song's artist..."
            value={form.artist}
            onChange={handleChange}
          />
          {errors.artist && <span>{errors.artist}</span>}
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Type song's genre..."
            value={form.genre}
            onChange={handleChange}
          />
          {errors.genre && <span>{errors.genre}</span>}
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={handleImageChange} />
          {errors.image && <span>{errors.image}</span>}
        </div>
        <div>
          <label htmlFor="sound">Sound</label>
          <input type="file" name="sound" onChange={handleSoundChange} />
          {errors.sound && <span>{errors.sound}</span>}
        </div>
        <button type="submit">Upload Song</button>
        <Link to="/user">
        <div className="icon-text-container">
          <span>Volver</span>
        </div>
      </Link>
      </form>
    </div>
  );
}
