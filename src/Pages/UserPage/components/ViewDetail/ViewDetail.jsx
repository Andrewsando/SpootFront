// ----------------------------------------- //
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSongName } from "../../../../Redux/Actions/Songs"; // Importa la acción getSongName.
// ----------------------------------------- //

// import React from "react";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";


export default function ViewDetail() {
  // Datos de ejemplo para las tarjetas
  // const songDetail = [
  //   {
  //     image: "/images/gojira.jpeg",
  //     name: "The Chant",
  //     artist: "Gojira",
  //     album: "Fortitude",
  //     genre: "Death metal progresivo Groove metal Death metal técnico Post-metal",
  //   },
  // ];

  // ----------------------------------------- //
  
  const { name } = useParams();
  const dispatch = useDispatch();
  
  // Utiliza useSelector para obtener los detalles de la canción desde el estado de Redux.
  const songDetail = useSelector((state) => state.generalSongs.result);

  useEffect(() => {
    // Cuando el componente se monta, llama a la acción getSongName con el nombre de la canción.
    dispatch(getSongName(name));
    console.log('cargandooooo')
    if(songDetail){
      console.log(songDetail[0])
    }
  }, [dispatch, name, songDetail]);
  // ----------------------------------------- //

  return (
    <div>
      {/* <div className="container-viewDetail"> */}
      <div>
        {/* {songDetail.map((song, index) => (
          <SongDetail key={index} {...song} />
        ))} */}
        
        {/* ----------------------------------------- */}
        <SongDetail {...songDetail} />
        {/* ----------------------------------------- */}

        <div>
          <SongList />
        </div>
      </div>
    </div>
  );
}
