import { clearFilter } from "../../../Redux/Actions/Songs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import SearchBar from "./searchBar/SearchBar";

export default function Sidebar() {

  const dispatch = useDispatch();

  const handleSubmit = (event)=>{
    event.preventDefault;
    dispatch(clearFilter())
  }

  return (
    <div className="container-Sidebar">
      <div className="blockOne">
        <div className="go-home">
          <Link to="/">
            <img
              src="/images/go-home.png"
              alt="Logotipo"
              className="logo-nav"
            />
          </Link>
          <p>Home</p>
        </div>
        <div className="search-bar">
         <SearchBar></SearchBar>
        <button onClick={handleSubmit}>Limpiar filtros</button>
        </div>
      </div>
    </div>
  );
}
