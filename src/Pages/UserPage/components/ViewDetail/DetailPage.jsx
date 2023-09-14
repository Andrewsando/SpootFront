import "../../styles/UserProfile.css";
import Sidebar from "../../components/Sidebar";
import ViewDetail from "./ViewDetail";

export default function DetailPage () {

  return (
    <div className="container-general-userProfile">
      <div className="container-userProfile">

        {/* Componente Sidebar como barra lateral */}
        <div className="sidebar-container">
          <Sidebar />
        </div>

        {/* Canción especifica y lista de canciones*/}
        <div className="songs-cards-container">

          <div className="container-viewDetail">
            <ViewDetail />
          </div>
          
        </div>
      </div>
    </div>
  );
}
