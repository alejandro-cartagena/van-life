import React from "react";
import bgImg from "/images/about-hero.png";
import VanRelax from "/images/van-relax-min.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-page-img-content-container">
        <img src={VanRelax} className="about-hero-image" />
        <div className="about-page-content">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels. This ensures that when you hit the
            road, you can do so with complete peace of mind, knowing that your
            journey will be as seamless and enjoyable as possible.{" "}
          </p>
          <p>
            So whether you're a seasoned road warrior or a newcomer to the
            vanlife scene, rest assured that you're in good hands with us. Let's
            embark on this journey together and unlock the endless possibilities
            that await on the open road.
          </p>
        </div>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className="link-button" to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
