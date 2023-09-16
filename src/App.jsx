import "./styles/App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { AuthProvider } from "./context/AuthContext";
import { firebase } from "../../config"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "../src/Pages/LandingPage/Home";
import Team from "../src/Pages/AboutPage/Team";
import WhatSpootChat from "../src/Pages/AboutPage/WhatSpootChat";
import Contact from "../src/Pages/ContactPage/Contact";
import AccessForm from "./Pages/AccessPage/AccessForm";
import UserProfile from "./Pages/UserPage/UserProfile";
import PoliciesAndTerms from "./Pages/MeetPage/PoliciesAndTerms";
import Support from "./Pages/SupportPage/Support"; 
import Account from "./Pages/AccountPage/Account.jsx";
import UploadForm from "./Pages/UploadSongPage/UploadForm";
import RegistrationSuccess from "./Pages/RegistrationSuccessPage/RegistrationSuccess";
import PremiumSuccess from "./Pages/PremiumSuccessPage/PremiumSuccess.jsx";
import PremiumFail from "./Pages/PremiumFailPage/PremiumFail.jsx";
import ComprarPlanes from "./Pages/MercadoPago/ComprarPlanes";
// import RecoverPassword from "./Pages/UserPage/components/ViewDetail/RecoverPassword";
import EditForm from "./Pages/EditForm/EditForm";
import PremiumPage from "./Pages/PremiumPage/PremiumPage";
import Playlists from "./Redux/Playlists/Playlists";
import DetailPage from "./Pages/UserPage/components/DetailPage/DetailPage";
import CreatePlaylistForm from "./Pages/CreatePlaylistPage/CreatePlaylistForm";
import LiveChat from "./SocketIo(mientras)/LiveChat";

const auth = getAuth(firebase);

// Componente de ruta privada
function PrivateRoute({ element, authenticated }) {
  return authenticated ? element : <AccessForm />;
}

export default function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Comprueba si hay una cookie de token almacenada
    const token = cookies.get("token");

    if (token) {
      // Si hay un token en la cookie, establece el encabezado de autorización
      // para las solicitudes HTTP (por ejemplo, usando axios)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    // Escucha cambios en el estado de autenticación de Firebase
    onAuthStateChanged(auth, (usuarioFirebase) => {
      console.log('Firebase Auth Changed', usuarioFirebase)
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });
  }, []);

  return (
    <AuthProvider>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/what-is-spootchat" element={<WhatSpootChat />} />
        <Route path="/meet-our-team" element={<Team />} />
        <Route
          path="/privacy-policy-and-terms-of-use"
          element={<PoliciesAndTerms />}
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/support" element={<Support />} />

        {/* Rutas de autenticación */}
        <Route
          path="/access-to"
          element={<PrivateRoute element={<UserProfile />} authenticated={usuario} />}
        />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/chat" element={<LiveChat />} />

        {/* Rutas de usuario autenticado */}
        <Route path="/user" element={<UserProfile />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/edit-form" element={<EditForm />} />
        <Route path="/song/:id" element={<DetailPage />} />
        <Route path="/create-playlist" element={<CreatePlaylistForm />} />
        <Route path="/manage-my-account" element={<Account />} />

        {/* Rutas de registro y premium */}
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/suscribe" element={<ComprarPlanes />} />
        <Route path="/premium-success" element={<PremiumSuccess />} />
        <Route path="/premium-fail" element={<PremiumFail />} />
        <Route path="/premium" element={<PremiumPage />} />

        {/* Ruta de recuperación de contraseña */}
        {/* <Route path="/reset-pass" element={<RecoverPassword/>} /> */}
      </Routes>
    </AuthProvider>
  );
}


/*

? LANDING PAGE
http://127.0.0.1:5173/

? SOBRE SPOOTCHAT:
* ¿Qué es SpootChat?
http://127.0.0.1:5173/what-is-spootchat

* Team - Conoce nuestro equipo
http://127.0.0.1:5173/meet-our-team

? CONOCE:
* Políticas de Privacidad y Términos de Uso
http://127.0.0.1:5173/privacy-policy-and-terms-of-use

? CONTÁCTENOS:
http://127.0.0.1:5173/contact-us

? ACCESO/INICIAR SESIÓN:
http://127.0.0.1:5173/access-to

? REPRODUCTOR WEB (USER)
http://127.0.0.1:5173/user

? SUBIR/CARGAR CANCIÓN:
http://127.0.0.1:5173/upload

? SOPORTE
http://127.0.0.1:5173/support

? ADMINISTRAR TU CUENTA
http://127.0.0.1:5173/manage-my-account

? REGISTRO EXITOSO
http://127.0.0.1:5173/registration-success

*/
