import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"

export default function Header( {isLoggedIn, setIsLoggedIn} ) {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const [menuOpen, setMenuOpen] = React.useState(false)

    function toggleMenu() {
        setMenuOpen(prevVal => !prevVal)
    }


    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        setIsLoggedIn(false)
    }


    return (
        <header>
            <div className="logo-menu-container">
                <Link className="site-logo" to="/">#VanLife</Link>
                <div className="burger-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                <NavLink
                    className={"nav-link"}
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    className={"nav-link"}
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    className={"nav-link"}
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                {!isLoggedIn ? (
                    <Link 
                        to="login" 
                        className="login-link"
                    >
                        <img
                            src={imageUrl}
                            className="login-icon"
                        />
                    </Link>
                ) : (
                    <button className="header-logout-btn" onClick={fakeLogOut}>Log Out</button>
                )}
                
                
            </nav>
        </header>
    )
}