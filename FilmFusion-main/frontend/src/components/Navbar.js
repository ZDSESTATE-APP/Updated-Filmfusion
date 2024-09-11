import React from "react";
import logo3 from "../assets/logo3.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="navbar-logo" src={logo3} alt="Film Fusion Logo" />
      </div>
      <div className="text-container">
        <Link className='site-name' to="/">Film Fusion</Link>
      </div>
      <div className="nav-links">
        <ul className="nav-list">
          {!token ? (
            <>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout}>Logout</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;