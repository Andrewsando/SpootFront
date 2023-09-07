// Importación del enrutador y los componentes necesarios
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/LandingPage/Home";
import Team from "../src/Pages/AboutPage/Team";
import WhatSpootChat from "../src/Pages/AboutPage/WhatSpootChat";
import Contact from "../src/Pages/ContactPage/Contact";
import AccessForm from "./Pages/AccessPage/AccessForm";
import UserProfile from "./Pages/UserPage/UserProfile";
import PoliciesAndTerms from "./Pages/MeetPage/PoliciesAndTerms";
import Support from "./Pages/SupportPage/Support";
import Account from './Pages/AccountPage/Account.jsx';
import UploadForm from "./Pages/UploadSongPage/UploadForm";
import RegistrationSuccess from "./Pages/RegistrationSuccessPage/RegistrationSuccess";

import "./Styles/App.css"
import { AuthProvider } from "../context/authContext";



export default function App() {
  return (
    <AuthProvider>
    {/* Enrutador principal */}
    <Routes>
      {/* Ruta a la página principal*/}
      <Route path="/" element={<Home />} />
      <Route path="/what-is-spootchat" element={<WhatSpootChat />} />
      <Route path="/meet-our-team" element={<Team />} />
      <Route path="/privacy-policy-and-terms-of-use" element={<PoliciesAndTerms />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/access-to" element={<AccessForm />} />
      
      <Route path="/user" element={<UserProfile />} />


      <Route path="/upload" element={<UploadForm />} />
      <Route path="/support" element={<Support />} />
      <Route path="/manage-my-account" element={<Account />} />
      <Route path="/registration-success" element={<RegistrationSuccess />} />
    </Routes>
    </AuthProvider>
  );
}
