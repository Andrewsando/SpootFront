import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSongName } from "../../../../Redux/Actions/Songs";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

export default function ViewDetail() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const songDetail = useSelector((state) => state.generalSongs.result);
  const failure= useSelector((state)=> state.failure)

  useEffect(() => {
    const loadSongDetail = () => {
      try {
        dispatch(getSongName(name));
      } catch (error) {
        window.alert(failure);
      }
    };

    if (!songDetail) {
      loadSongDetail();
    }

    console.log('cargandooooo');
    if (songDetail) {
      console.log(songDetail[0]);
    }
  }, [dispatch, name, songDetail]);

  return (
    <div>
      <SongDetail {...songDetail} />
      <div>
        <SongList />
      </div>
    </div>
  );
}