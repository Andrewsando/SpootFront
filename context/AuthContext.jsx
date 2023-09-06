/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { auth } from "../config/config";
import { createContext, useContext } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("No se ha podido cerrar sesión");
    }
  };
  return (
    <authContext.Provider value={{ loginWithGoogle, logout }}>
      {children}
    </authContext.Provider>
  );
}
