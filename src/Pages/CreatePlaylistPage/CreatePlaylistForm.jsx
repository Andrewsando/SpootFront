import "./styles/CreatePlaylistForm.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist } from "../../Redux/Actions/Playlists";
import { validatePlaylistData } from "../../Utils/ValidationPlaylist";

export default function CreatePlaylistForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    setErrors(validatePlaylistData({ ...form, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realiza la validación final antes de enviar los datos al servidor
    const validationErrors = validatePlaylistData(form);

    if (Object.keys(validationErrors).length === 0) {
      // No hay errores de validación, puedes enviar los datos al servidor
      dispatch(createPlaylist(form));
    } else {
      // Hay errores de validación, muestra los mensajes de error
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container-FormCreatePlaylist">
      <div className="pageForm-createPlaylist">
        <form className="form-createPlaylist" onSubmit={handleSubmit}>
          {/* CAMPOS DEL FORMULARIO */}
          <div className="form-column">
            {/* NAME */}
            <input
              className={
                errors.name ? "form-createPlaylist_inputError" : "form-createPlaylist_input"
              }
              placeholder="Nombre de la Playlist"
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <span className="spanError">{errors.name}</span>

            {/* DESCRIPTION */}
            <input
              className={
                errors.description
                  ? "form-createPlaylist_inputError"
                  : "form-createPlaylist_input"
              }
              placeholder="Descripción"
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
            <span className="spanError">{errors.description}</span>
          </div>

          {/* BOTÓN CREAR PLAYLIST */}
          <button className="createPlaylist-button" type="submit">
            Crear Playlist
          </button>

          {/* Mensaje de éxito o error */}
          {Object.keys(errors).length > 0 && (
            <span style={{ color: "red" }}>
              Por favor complete el formulario correctamente.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
