import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ element }) {
  const auth = useAuth();

  // Si el usuario está autenticado, permite el acceso a la ruta, de lo contrario, redirige a iniciar sesión
  return auth.isAuthenticated() ? (
    <Route element={element} />
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
