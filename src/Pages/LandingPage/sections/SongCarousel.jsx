import React from "react";
import CardSong from "../components/CardSong";
import SwiperCarousel from "../components/SwiperCarousel";
import "../styles/SongCarousel.css";

import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongAll } from "../../../Redux/Actions/Songs";

export default function SongCarousel() {
 const dispatch = useDispatch()
 const allSongs= useSelector((state)=>state.generalSongs)

 useEffect(()=>{
  dispatch(getSongAll(1, 4))
 }, [dispatch])

  return (
    <div className="container-songCarousel">
      {/* por cada song se renderiza una CardSong */}
      <SwiperCarousel  slidesPerView={4}
         cards={allSongs.result &&
          allSongs.result.map((song) => (
            <CardSong
              key={song.id} // Asegúrate de tener una clave única para cada CardSong
              imagen={song.image}
              cancion={song.name}
              artista={song.artist}
            />
          ))}
        // cards={tarjetas.map((tarjeta, index) => (
        //   <CardSong key={index} {...tarjeta} />
        // ))}
       
      ></SwiperCarousel>
    </div>
  );
}
