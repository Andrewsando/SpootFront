import "./styles/App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cookies } from "react-cookie";
import { AuthProvider } from "./context/AuthContext";
import { firebase } from "./config/config.js"

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
import Playlistsview from "./Pages/PlaylistsPage/Playlists/Playlists";
import CreatePlaylist from './Pages/PlaylistsPage/createPlaylist/CreatePlaylist'
import "./styles/App.css";
import RecoverPassword from "./Pages/AccessPage/RecoverPassword";



import EditForm from "./Pages/EditForm/EditForm";
import PremiumPage from "./Pages/PremiumPage/PremiumPage";
import DetailPage from "./Pages/UserPage/components/DetailPage/DetailPage";

import ComoFunciona from "./Pages/SupportPage/components/ComoFunciona";
import NuevosProductos from "./Pages/SupportPage/components/NuevosProductos";
import QueEsSpootChat from "./Pages/SupportPage/components/QueEsSpootChat";
import SolucionProblemas from "./Pages/SupportPage/components/SolucionProblemas";
import PagoYCuentas from "./Pages/SupportPage/components/PagoYCuentas";
import ApoyoArtistas from "./Pages/SupportPage/components/ApoyoArtistas";
import Dispositivos from "./Pages/SupportPage/components/Dispositivos";
import Desarrolladores from "./Pages/SupportPage/components/Desarrolladores";


// import RecoverPassword from "";
// import LiveChat from "./SocketIo(mientras)/LiveChat";
import Register from './Pages/CrearCountUser/CrearCountUser.jsx';

const auth = getAuth(firebase);
const cookies = new Cookies();

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
        <Route path="/support" element={<Support />} />
        <Route path="/meet-our-team" element={<Team />} />
        <Route
          path="/privacy-policy-and-terms-of-use"
          element={<PoliciesAndTerms />}
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/nuevos-productos" element={<NuevosProductos />} />
        <Route path="/que-es-spootchat" element={<QueEsSpootChat />} />
        <Route path="/dispositivos" element={<Dispositivos />} />
        <Route path="/solucion-problemas" element={<SolucionProblemas />} />
        <Route path="/pago-y-cuentas" element={<PagoYCuentas />} />
        <Route path="/apoyo-artistas" element={<ApoyoArtistas />} />
        <Route path="/desarrolladores" element={<Desarrolladores />} />


        {/* Rutas de autenticación */}
        <Route
          path="/access-to"
          element={<PrivateRoute element={<UserProfile />} authenticated={usuario} />}
        />
        <Route path="/playlists" element={<Playlistsview />} />
        {/* <Route path="/chat" element={<LiveChat />} /> */}

        {/* Rutas de usuario autenticado */}
        <Route path="/user" element={<UserProfile />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/edit-form" element={<EditForm />} />
        <Route path="/song/:id" element={<DetailPage />} />
        <Route path="/create-playlist" element={<CreatePlaylist />} />

        <Route path="/manage-my-account" element={<Account />} />

        {/* Rutas de registro y premium */}
        <Route path="/registration-success" element={<RegistrationSuccess />} />

        <Route path="/reset-pass" element={<RecoverPassword />} />

        <Route path="/suscribe" element={<ComprarPlanes />} />

        <Route path="/premium-success" element={<PremiumSuccess />} />
        <Route path="/premium-fail" element={<PremiumFail />} />
        <Route path="/premium" element={<PremiumPage />} />

        {/* Ruta de recuperación de contraseña */}
        {/* <Route path="/reset-pass" element={<RecoverPassword/>} /> */}
        <Route path="/register" element={<Register />} />
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