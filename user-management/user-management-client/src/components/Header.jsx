import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { state, logout } = useAuth();

  return (
    <header className="header">
      <h1 className="header-title">User Management</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          {!state.isAuthenticated ? (
            <>
              <li>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
              <li>
                <button className="logout-link" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
