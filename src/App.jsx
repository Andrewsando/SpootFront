// Importación del enrutador y los componentes necesarios
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/LandingPage/Home";
import Team from "../src/Pages/AboutPage/Team";
import WhatSpootChat from "../src/Pages/AboutPage/WhatSpootChat";
import Contact from "../src/Pages/ContactPage/Contact";
import AccessTo from "./Pages/AccessPage/AccessForm";
import UserProfile from "./Pages/UserPage/UserProfile";
import PoliciesAndTerms from "./Pages/MeetPage/PoliciesAndTerms";
import Support from "./Pages/SupportPage/Support";
import Account from './Pages/AccountPage/Account.jsx';


export default function App() {
  return (
    // Enrutador principal
    <Routes>
      {/* Ruta a la página principal*/}
      <Route path="/" element={<Home />} />
      <Route path="/what-is-spootchat" element={<WhatSpootChat />} />
      <Route path="/meet-our-team" element={<Team />} />
      <Route path="/privacy-policy-and-terms-of-use" element={<PoliciesAndTerms />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/access-to" element={<AccessTo />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/support" element={<Support />} />
      <Route path="/manage-my-account" element={<Account />} />
    </Routes>
  );
}
