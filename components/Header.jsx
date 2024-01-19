import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"

export default function Header( {isLoggedIn, setIsLoggedIn} ) {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        setIsLoggedIn(false)
    }


    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav className="nav-links">
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
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