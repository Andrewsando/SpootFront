import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSongPoints } from '../../../Redux/Actions/Songs';

export default function StarRating({ songId, currentRating }) {
  const [rating, setRating] = useState(currentRating); // Estado local para la puntuación del componente
  const dispatch = useDispatch();

  // Manejador para el clic a cada una estrella
  const handleStarClick = (newRating) => {
    try {
    console.log("songId:", songId);
    console.log("newRating:", newRating);

      // Si el usuario hace clic en la estrella ya seleccionada, quita la calificación
      if (newRating === rating) {
        setRating(0);
      } else {
        setRating(newRating);
      }
  
      // Acción q se uso para actualizar la puntuación de la canción
      dispatch(updateSongPoints(songId, newRating));
    } catch (error) {
      console.error('Error al actualizar la puntuación:', error);
    }
  };

  return (
    <div>
      {/* Mapear y renderizar estrellas je! ⭐⭐⭐⭐⭐*/}
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`material-icons star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(star)} 
        >
          star
        </i>
      ))}
      {/* Puntuación actual */}
      <p className='text-points'>Calificación: {rating} estrella(s)</p>
    </div>
  );
}
