import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function NavBar() {
  const { isLoggedIn, email, logout } = useContext(AuthContext);

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
            <span className="nav-username">{email}</span>
            <button className="nav-link" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
