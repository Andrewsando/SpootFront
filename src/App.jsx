// Importación del enrutador y los componentes necesarios
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../src/Pages/LandingPage/Home";
import Team from "../src/Pages/AboutPage/Team";
import WhatSpootChat from "../src/Pages/AboutPage/WhatSpootChat";
import PrivacyPolicy from "../src/Pages/MeetPage/PrivacyPolicy";
import TermsAndConditions from "../src/Pages/MeetPage/TermsAndConditions ";
import Contact from "../src/Pages/ContactPage/Contact";
import AccessTo from "./Pages/AccessPage/AccessForm";

export default function App() {
  return (
    // Enrutador principal
    <Routes>
      {/* Ruta a la página principal, Landing Page */}
      <Route path="/" element={<Home />} />
      <Route path="/what-is-spootchat" element={<WhatSpootChat />} />
      <Route path="/meet-our-team" element={<Team />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policies" element={<PrivacyPolicy />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/access-to" element={<AccessTo />} />

      {/* <Route path="/user" element={<PonerPaginaCorrespondiente />} />
    <Route path="/manage-my-account" element={<PonerPaginaCorrespondiente />} />
    <Route path="/support" element={<PonerPaginaCorrespondiente />} />

    */}
    </Routes>
  );
}
