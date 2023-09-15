import React, { useState } from "react";

const CreatePlaylist = () => {
  const [playlist, setPlaylist] = useState({
    image: "",
    name: "",
    songs: [],
    description: "",
  });

  const HandleInputChange = (event) => {
    const { name, value } = event.target;
    setPlaylist({
      ...playlist,
      [name]: value,
    });
  };

  const handleSelect = (e) => {
    const selectedSong = e.target.value;
    if (!playlist.songs.includes(selectedSong)) {
      setPlaylist({
        ...playlist,
        songs: [...playlist.songs, selectedSong],
      });
    }
  };

  const handleRemoveSong = (song) => {
    const updatedSongs = playlist.songs.filter((s) => s !== song);
    setPlaylist({
      ...playlist,
      songs: updatedSongs,
    });
  };

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();

    if (!playlist.name || playlist.songs.length === 0) {
      alert("Completa todos los campos requeridos.");
      return;
    }

    const newPlaylist = {
      name: playlist.name,
      image: playlist.image,
      description: playlist.description,
      songs: playlist.songs,
    };

    try {
      const response = await fetch("URL_DE_TU_BACKEND/crear-lista-de-reproduccion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Agrega otros encabezados según sea necesario, como el token de autenticación
        },
        body: JSON.stringify(newPlaylist),
      });

      if (response.ok) {
        alert("¡Lista de reproducción creada exitosamente!");
        // Redirige al usuario o realiza cualquier otra acción necesaria después de crear la lista
      } else {
        alert("No se pudo crear la lista de reproducción. Inténtalo de nuevo más tarde.");
      }
    } catch (error) {
      console.error("Error al crear la lista de reproducción:", error);
    }
  };

  return (
    <div>
      <form>
        <label>
          Image:
          <input type="text" name="image" value={playlist.image} onChange={HandleInputChange} />
        </label>

        <label>
          Name:
          <input type="text" name="name" value={playlist.name} onChange={HandleInputChange} />
        </label>

        <label>
          Songs:
          <select name="songs" value="" onChange={handleSelect}>
            <option value="" disabled>
              Selecciona una canción
            </option>
            {/* Renderiza tus opciones de canciones aquí */}
            {/* Ejemplo de opción de canción */}
            <option value="nombre_de_la_cancion">Nombre de la canción</option>
          </select>
          <ul>
            {/* Renderiza la lista de canciones seleccionadas */}
            {playlist.songs.map((song) => (
              <li key={song}>
                {song}
                <button type="button" onClick={() => handleRemoveSong(song)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={playlist.description}
            onChange={HandleInputChange}
          />
        </label>

        <button onClick={handleCreatePlaylist}>Crear Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
