import { Link} from "react-router-dom";
import '../css/Navbar.css'
import { useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("username");
    if (token !=null){
      setIsLoggedIn(true);
      setUsername(user);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
      <div className="navbar-user-links">
        {!isLoggedIn && (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <span className="nav-link">{username}</span>
            <button className="nav-link" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;