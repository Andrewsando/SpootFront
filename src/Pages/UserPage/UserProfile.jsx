import SongsCards from "./components/SongsCards";
import Sidebar from "./components/Sidebar";

export default function UserProfile() {
  return (
    <div className="container-userProfile">
      <Sidebar />
      <SongsCards />
    </div>
  );
}
