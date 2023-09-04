import "./styles/UserProfile.css";
import React from "react";
import SongsCards from "./components/SongsCards";
import Sidebar from "./components/Sidebar";

export default function UserProfile() {
  return (
    <div>
      <div className="container-userProfile">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="songs-cards-container">
          <SongsCards />
        </div>
      </div>
      <div className="songPlayer">Reproductor</div>
    </div>
  );
}
