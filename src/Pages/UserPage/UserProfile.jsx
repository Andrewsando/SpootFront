import "./styles/UserProfile.css";
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
