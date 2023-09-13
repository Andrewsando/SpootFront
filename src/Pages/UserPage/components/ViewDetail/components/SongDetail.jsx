import "../../../styles/SongDetail.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import React from 'react'

export default function SongDetail({ img, name, genre, artist }) {
  // Función para manejar el error de carga de imagen 🖼️
  const handleImageError = (event) => {
    event.target.onerror = null; // Evita el bucle infinito al asignar null al evento onerror
    event.target.src = "/images/imgSong-NotFound.jpg"; // Carga una imagen por defecto en caso de error
  };

  // Valores predeterminados si name, artist y genre no están definidos
  const nameSong = name || "Name of the song";
  const artistSong = artist || "Artist or band name";
  const genreSong = genre || "Musical genre";

  React.useEffect(() => {
    console.log(img, nameSong, genre, artistSong)
  }, [img, nameSong, genre, artistSong])

  return (
    <div className="container-Detail">
      <div className="card-songDetail">
        <div className="image-songDetail">
          <img className="space-songDetail"
            src={img ? img : "/images/imgSong-NotFound.jpg"}
            alt={nameSong}
            onError={handleImageError}
          />
        </div>
        <div className="content-songDetail">
          <h4 className="name-songDetail">{nameSong}</h4>
          <p className="artist-songDetail">{artistSong}</p>
          <p className="genre-songDetail">{genreSong}</p>
          {/* <p className="album-songDetail">{info}</p> */}
        </div>
      </div>
      <div className="card-songDetail-two">
        <BsFillPlayCircleFill color="#54E35F" id="reproductor-detail" fontSize="3rem" />
      </div>
    </div>
  );
}






// React.useEffect(()=>{
//   console.log(img,name, info, artist)
// }, [img,name, info, artist])

// return (  
//     <div className="container-Detail">
//       <div className="card-songDetail">
//         <div className="image-songDetail">

//         <img className="space-songDetail" 
//             src={img ? img : "/images/imgSong-NotFound.jpg"}
//             alt={name}
//             onError={handleImageError}
//           />

//         </div>
//         <div className="content-songDetail">
//           <h4 className="name-songDetail">{name}</h4>
//           <p className="artist-songDetail">{artist}</p>
//           <p className="genre-songDetail">{genre}</p>
//           {/* <p className="album-songDetail">{info}</p> */}
//         </div>
//       </div>
//       <div className="card-songDetail-two">
//         <BsFillPlayCircleFill color="#54E35F"  id="reproductor-detail" fontSize="3rem" />
//       </div>
//     </div>
//   );
// }
