import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout( {isLoggedIn, setIsLoggedIn} ) {

    return (
        <div className="site-wrapper">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <main className="main-container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}