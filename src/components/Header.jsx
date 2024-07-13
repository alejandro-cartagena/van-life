import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/images/avatar-icon.png";
import { IoClose } from "react-icons/io5";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const [menuOpen, setMenuOpen] = React.useState(false);

  function toggleMenu() {
    setMenuOpen((prevVal) => !prevVal);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    setIsLoggedIn(false);
  }

  return (
    <header>
      <div className="logo-menu-container">
        <Link onClick={closeMenu} className="site-logo" to="/">
          #VanLife
        </Link>
        {!menuOpen ? (
          <div className="burger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <IoClose onClick={closeMenu} className="header-close-btn" />
        )}
      </div>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <NavLink
          className={"nav-link"}
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          onClick={closeMenu}
        >
          Host
        </NavLink>
        <NavLink
          className={"nav-link"}
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          onClick={closeMenu}
        >
          About
        </NavLink>
        <NavLink
          className={"nav-link"}
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          onClick={closeMenu}
        >
          Vans
        </NavLink>
        {!isLoggedIn ? (
          <Link onClick={closeMenu} to="login" className="login-link">
            <img src={imageUrl} className="login-icon" />
          </Link>
        ) : (
          <button className="header-logout-btn" onClick={fakeLogOut}>
            Log Out
          </button>
        )}
      </nav>
    </header>
  );
}
