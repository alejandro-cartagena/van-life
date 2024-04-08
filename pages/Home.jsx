import React from "react"
import { Link } from "react-router-dom"
import VanCard from "../components/VanCard"

export default function Home() {

    const featuredVansData = [
        {imgURL: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", vanName: "Modest Explorer", vanDescription: "The Modest Explorer is a van designed to get you out of the house and into nature."},
        {imgURL: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", vanName: "The Cruiser", vanDescription: "The Cruiser is a van for those who love to travel in comfort and luxury."},
        {imgURL: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", vanName: "Beach Bum", vanDescription: "The Beach Bum is a van inspired by surfers and travelers."},
    ]

    const featuredVans = featuredVansData.map((van, index) => {
        return <VanCard key={index} vanImgSrc={van.imgURL} vanName={van.vanName} vanDescription={van.vanDescription}/>
    })

    console.log(featuredVans)

    return (
        <>
            <div className="home-container">
                <div className="home-text-container">
                    <h1>You got the travel plans</h1>
                    <h1>We got the travel vans</h1>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <Link to="vans">Find your van</Link>
                </div>
            </div>

            <div className="home-section">
                <h2 className="home-section-title">Popular Vans</h2>
                <p className="home-section-subtitle">Whether you're embarking on a scenic road trip or seeking adventure off the beaten path, 
                our vans are carefully hand picked to elevate every moment of your journey.</p>
                <div className="van-cards-container">
                    {featuredVans}
                </div>
            </div>

            <div className="home-section">
                <h2>Host Your Own Van</h2>
                <div className="home-section-host-container">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
     
    )
};