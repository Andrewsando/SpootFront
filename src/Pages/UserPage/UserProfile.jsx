import "./styles/UserProfile.css";
import Sidebar from "./components/Sidebar";

import React, { useEffect, useState, Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import Pagination from "./components/Pagination";
import SongCard from "./components/SongCard";
import ReactAudioPlayer from "react-audio-player";
import { clearFilter, getSongAll } from "../../Redux/Actions/Songs";

export default function UserProfile() {

  // Define varios estados iniciales usando useState para gestionar el estado local.
  const [list, setList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [item, setItem] = useState(null);
  const [shownNext, setShownNext] = useState(true);
  const [shownPrev, setShownPrev] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 4; // Cantidad de elementos por página.
  const [message, setMessage] = useState(""); // Estado para el mensaje personalizado.

  // Función "dispatch" de Redux para despachar acciones.
  const dispatch = useDispatch();
  
  // Estado de Redux "generalSongs" y "failure" mediante el selector.
  const AllSongs = useSelector((state) => state.generalSongs);
  const failure = useSelector((state) => state.failure);

  // Efecto para llamar a la acción "getSongAll" cuando cambian las dependencias (dispatch, page y perPage).
  useEffect(() => {
    dispatch(getSongAll(page, perPage));
  }, [dispatch, page, perPage]);

  // Efecto para actualizar la lista de canciones cuando cambia "AllSongs.result".
  useEffect(() => {
    if (AllSongs.result) {
      setList(AllSongs.result);
  
      if (AllSongs.result.length > 0) {
        setShownNext(true);
        setShownPrev(page > 1);
        setMessage(""); // Reinicia el mensaje si hay más páginas.
      } else {
        setShownNext(false);
        setShownPrev(true);
        setMessage("No se hallaron coincidencias");
      }
    }
  }, [AllSongs, page]);
  
  // Función para manejar la reproducción de canciones.
  const handlePlay = (item) => {
    if (!item) {
      setIsPlaying(false);
    }
    setIsPlaying(!isPlaying);
    setItem(item);
  };

  // Función para manejar el botón "Siguiente" de la paginación.
  const handleButtonNext = () => {
    setPage(page + 1);
  };

  // Función para manejar el botón "Anterior" de la paginación.
  const handleButtonPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  // Función para restablecer la página y borrar filtros
  const handlePageResetAndClear = (newPage) => {
    setPage(newPage);
    dispatch(clearFilter());
  };

  return (
    <div className="container-general-userProfile">
      <div className="container-userProfile">

        {/* Componente Sidebar como barra lateral */}
        <div className="sidebar-container">
          <Sidebar />
        </div>

        {/* Lista de canciones y elementos relacionados */}
        <div className="songs-cards-container">
          <div className="container-SongsCards">
          <div className="pagination">
           <Pagination
             shownPrev={shownPrev}
             shownNext={shownNext}
             handleButtonNext={handleButtonNext}
             handleButtonPrev={handleButtonPrev}
             onPageResetAndClear={handlePageResetAndClear} 
               />
         </div>
            <div>
              <h1 className="titleSongs">Tendencias</h1>
            </div>
            <div className="subContainer-songsCards">
              
          {/* Renderiza las tarjetas de canciones o un mensaje si no hay canciones */}
          {failure.length ? (
            <div>
              <p className="failure">{failure}</p>
            </div>
          ) : (
            <Fragment>
              {list.length > 0 ? (
                list.map((item) => { console.log (item) 
                  return(
                  <SongCard
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    name={item.name}
                    info={item.description}
                    artist={item.artist}
                    song={item.song}
                    starRating={1} // Calificación por default para testear, pero la consulta de canciones como actualizacion de misma no trae el campo requerido 
                    onClick={() => handlePlay(item)}
                  />
                )})
              ) : (
                // Muestra el mensaje de no hay canciones si no hay resultados
                <div className="noSong">{message}</div>
                )}
            </Fragment>
          )}
          
            </div>
          </div>
          {console.log("LISTA CANCIONES JE")}
          {console.log(list)}
        </div>
      </div>

      {/* Renderiza el reproductor de música si hay una canción seleccionada */}
      <div>
        {item && (
          <ReactAudioPlayer
            className="audio-player"
            id="audio-player"
            src={item.song}
            autoPlay={isPlaying}
            controls
            style={{ display: isPlaying ? "block" : "none" }}
          />
        )}
      </div>
    </div>
  );
}
