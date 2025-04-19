import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">🎬 Movie App</h2>
      <nav>
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/add-movies" className="nav-link">
          Add Movies
        </NavLink>
        <NavLink to="/stats" className="nav-link">
          Stats
        </NavLink>
        <NavLink to="/favorites" className="nav-link">
          Favorites
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
