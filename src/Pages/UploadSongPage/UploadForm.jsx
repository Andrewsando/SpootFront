import "./styles/UploadForm.css";
import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import validationForm from "./validation/validationForm";
import { postSong } from "../../Redux/Actions/Songs";

export default function UploadForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    song: "",
    description: "",
    artist: "",
    genre: "",
    image: "",
  });
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

  const isFormEmpty = useMemo(() => {
    for (const key in form) {
      if (form[key] !== "" && form[key].length !== 0) {
        return false;
      }
    }
    return true;
  }, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postSong(form))
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
          <label htmlFor="name">New Song</label>
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
          <label htmlFor="song">Song</label>
          <input
            type="text"
            name="song"
            placeholder=""
            value={form.song}
            onChange={handleChange}
          />
          {errors.song && <span>{errors.song}</span>}
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
          <input
            type="text"
            name="image"
            placeholder="Type song's image..."
            value={form.image}
            onChange={handleChange}
          />
          {errors.image && <span>{errors.image}</span>}
        </div>
        <button
          type="submit"
          disabled={isFormEmpty || Object.keys(errors).length}
        >
          Upload Song
        </button>
      </form>
    </div>
  );
}