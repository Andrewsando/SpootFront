import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>404 - Pagina no encontrada</h1>
      <p>Page not found.</p>
      <Link to="/">Volver a la pagina de inicio</Link>
    </div>
  );
}
