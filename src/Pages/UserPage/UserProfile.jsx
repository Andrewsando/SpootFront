import "./styles/UserProfile.css";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import SongCard from "./components/SongCard";
import ReactAudioPlayer from "react-audio-player";
import ViewDetail from "./components/ViewDetail/ViewDetail";

export default function UserProfile() {
  // const [list, setList] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [item, setItem] = useState(null);
  const [shownNext, setshownNext] = useState(true);
  const [shownPrev, setshownPrev] = useState(true);
  let perPage = 10;

  useEffect(() => {
    if (numPage === 1) {
      setshownPrev(false);
    } else if (numPage > 0) {
      setshownNext(true);
      setshownPrev(true);
    }
    numPage >= 0 &&
      axios(`http://localhost:4322/song?page=${numPage}&perPage=${perPage}`)
        .then((response) => {
          if (response.data.result.length > 0) {
            setshownNext(true);
          }
          if (response.data.result.length === 0) {
            setshownNext(false);
            setshownPrev(true);
          } else {
            setshownNext(true);
          }
          setList(response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [numPage]);

  const handlePlay = (item) => {
    if (!item) {
      setIsPlaying(false);
    }
    setIsPlaying(!isPlaying);
    setItem(item);
  };

  function handleButtonNext(e) {
    e.preventDefault();
    setNumPage(numPage + 1);
  }

  function handleButtonPrev(e) {
    e.preventDefault();
    if (numPage > 1) {
      setNumPage(numPage - 1);
    }
  }

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
              {list.length > 0 ? (
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
