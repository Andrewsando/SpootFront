import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

function PrivateRoute({ element }) {
  const auth = useAuth();


  return auth.isAuthenticated() ? (
    <Route element={element} />
  ) : (
    <Navigate to="/access-to" />
  );
}

export default PrivateRoute;
