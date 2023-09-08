import "./styles/UserProfile.css";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Pagination from "./components/Pagination";
import SongCard from "./components/SongCard";
import ReactAudioPlayer from "react-audio-player";
import { getSongAll } from "../../Redux/Actions/Songs";

export default function UserProfile() {
  const [list, setList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [item, setItem] = useState(null);
  const [shownNext, setShownNext] = useState(true);
  const [shownPrev, setShownPrev] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 4; // Número de elementos por página
  const dispatch = useDispatch();
  const AllSongs = useSelector((state) => state.generalSongs);
  const failure= useSelector((state)=>state.failure)

  useEffect(() => {
    // Cuando cambia la página, llama a la acción para obtener los datos de esa página.
    dispatch(getSongAll(page, perPage));
  }, [dispatch, page, perPage]);

  useEffect(() => {
    if (AllSongs.result) {
      setList(AllSongs.result);
    }
  }, [AllSongs]);

  const handlePlay = (item) => {
    if (!item) {
      setIsPlaying(false);
    }
    setIsPlaying(!isPlaying);
    setItem(item);
  };

  const handleButtonNext = () => {
    setPage(page + 1);
  };

  const handleButtonPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    // Cuando cambia la página, realiza la solicitud de datos para esa página.
    axios(`http://backend-pf-production-ba15.up.railway.app/song?page=${page}&perPage=${perPage}`)
      .then((response) => {
        if (response.data.result.length > 0) {
          setShownNext(true);
        }
        if (response.data.result.length === 0) {
          setShownNext(false);
          setShownPrev(true);
        } else {
          setShownNext(true);
        }
        setList(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, perPage]);

  return (
    <div className="container-general-userProfile">
      <div className="container-userProfile">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="songs-cards-container">
          {/* <div className="container-SongsCards">
            <div className="pagination">
              <Pagination
                shownPrev={shownPrev}
                shownNext={shownNext}
                handleButtonNext={handleButtonNext}
                handleButtonPrev={handleButtonPrev}
              />
            </div>
            <div>
              <h1 className="titleSongs">Tendencias</h1>
            </div>
            <div className="subContainer-songsCards">

              {failure.lenght? <div>
                <p className="failure">
                {failure}
                </p>
                </div> 
              :list.length > 0 ? (
                list.map((item) => (
                  <SongCard
                    key={item.id}
                    img={item.image}
                    name={item.name}
                    info={item.description}
                    artist={item.artist}
                    song={item.song}
                    onClick={() => handlePlay(item)}
                  />
                ))
              ) : (
                <div className="noSong">No hay canciones para mostrar</div>
              )}
            </div>
          </div> */}
          <div className="container-viewDetail">
            <ViewDetail />
          </div>
        </div>
      </div>
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
