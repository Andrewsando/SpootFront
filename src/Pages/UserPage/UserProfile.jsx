<<<<<<< HEAD
import "./styles/UserProfile.css";
import React from "react";
=======
>>>>>>> 1b755226e7ec1479c20d8e8501646218c3b6fbba
import SongsCards from "./components/SongsCards";
import Sidebar from "./components/Sidebar";

export default function UserProfile() {
  return (
    <div className="container-userProfile">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="songs-cards-container">
        <SongsCards />
      </div>
    </div>
  );
}
