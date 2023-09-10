import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { AuthProvider } from "../context/AuthContext";
import { firebase } from "../config/config";
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

import "./Styles/App.css";
import RecoverPassword from "./Pages/UserPage/components/ViewDetail/RecoverPassword";

const auth = getAuth(firebase);
const cookies = new Cookies();

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
        <Route path="/" element={<Home />} />
        <Route path="/what-is-spootchat" element={<WhatSpootChat />} />
        <Route path="/meet-our-team" element={<Team />} />
        <Route
          path="/privacy-policy-and-terms-of-use"
          element={<PoliciesAndTerms />}
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/access-to"
          element={usuario ? <UserProfile /> : <AccessForm />}
        />

        {usuario && (
          <>
            <Route path="/user" element={<UserProfile />} />
            <Route path="/upload" element={<UploadForm />} />
            <Route
              path="/registration-success"
              element={<RegistrationSuccess />}
            />
          </>
        )}

        <Route path="/support" element={<Support />} />
        <Route path="/manage-my-account" element={<Account />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/reset-pass" element={<RecoverPassword/>} />
      </Routes>
    </AuthProvider>
  );
}
