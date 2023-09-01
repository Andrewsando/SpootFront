// Importación del enrutador y los componentes necesarios
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../src/Pages/LandingPage/Home";
import Team from "../src/Pages/AboutPage/Team";
import WhatSpootChat from "../src/Pages/AboutPage/WhatSpootChat";
import Contact from "../src/Pages/ContactPage/Contact";
import AccessTo from "./Pages/AccessPage/AccessForm";
import UserPage from "./Pages/UserPage/UserPage";
import PoliciesAndTerms from "./Pages/MeetPage/PoliciesAndTerms";

export default function App() {
  return (
    // Enrutador principal
    <Routes>
      {/* Ruta a la página principal, Landing Page */}
      <Route path="/" element={<Home />} />
      <Route path="/what-is-spootchat" element={<WhatSpootChat />} />
      <Route path="/meet-our-team" element={<Team />} />
      <Route path="/privacy-policy-and-terms-of-use" element={<PoliciesAndTerms />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/access-to" element={<AccessTo />} />
      <Route path="/user" element={<UserPage />} />

      {/* <Route path="/user" element={<PonerPaginaCorrespondiente />} />
    <Route path="/manage-my-account" element={<PonerPaginaCorrespondiente />} />
    <Route path="/support" element={<PonerPaginaCorrespondiente />} />

    */}
    </Routes>
  );
}
