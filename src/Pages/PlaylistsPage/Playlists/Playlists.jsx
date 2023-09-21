import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect} from "react"
import { getPlaylists } from "../../../Redux/Actions/Playlists"
import PcardsContainer from './Pcardscontainer'

const Playlistsview = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.generalPlaylists);
  const playlistsData = playlists.result;

  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  useEffect(() => {
    setCurrentData(playlistsData);
  }, [playlistsData]);

  return (
    <div>
      <div>
        <button>Atrás</button>
      </div>
      <div>
        <PcardsContainer data={currentData} />
      </div>
    </div>
  );
};

export default Playlistsview

