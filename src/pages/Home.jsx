import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VanCard from "../components/VanCard";
import ReviewCard from "../components/ReviewCard";
import { MdAttachMoney } from "react-icons/md";
import { GiSurferVan } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";

import { featuredVansData, reviewData } from "../data";

// Host Page Images
import HostIncomeSc from "/images/host-income-sc.png";
import HostVansSc from "/images/host-vans-sc.png";
import HostReviewsSc from "/images/host-reviews-sc.png";

export default function Home() {
  const [featuredVans, setFeaturedVans] = useState(null);
  const [reviewCards, setReviewCards] = useState(null);

  useEffect(() => {
    setFeaturedVans(
      featuredVansData.map((van, index) => {
        return (
          <VanCard
            key={index}
            vanImgSrc={van.imgURL}
            vanName={van.vanName}
            vanDescription={van.vanDescription}
          />
        );
      })
    );

    setReviewCards(
      reviewData.map((review, index) => {
        return (
          <ReviewCard
            key={index}
            reviewText={review.reviewText}
            reviewAuthorImg={review.reviewAuthorImg}
            reviewAuthorName={review.reviewAuthorName}
            reviewAuthorCity={review.reviewAuthorCity}
          />
        );
      })
    );
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-text-container">
          <h1 className="home-main-text">You got the travel plans</h1>
          <h1>We got the travel vans</h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to="vans">Find your van</Link>
        </div>
      </div>

      <div className="home-section">
        <h2 className="home-section-title">Popular Vans</h2>
        <p className="home-section-subtitle">
          Whether you're embarking on a scenic road trip or seeking adventure
          off the beaten path, our vans are carefully hand picked to elevate
          every moment of your journey.
        </p>
        <div className="van-cards-container">{featuredVans}</div>
      </div>

      <div className="home-section">
        <h2>Host Your Own Van</h2>
        <div className="home-section-host-container">
          <div className="home-section-host-features">
            <div className="home-section-host-feature">
              <MdAttachMoney className="host-feature-icon money-icon" />
              <div>
                <p className="host-feature-heading">
                  <b>Income</b>
                </p>
                <p className="host-feature-text">
                  Dive into a comprehensive overview of your earnings, presented
                  in visually stunning charts and graphs that provide insightful
                  breakdowns of your revenue streams.
                </p>
              </div>
            </div>
            <div className="home-section-host-feature">
              <GiSurferVan className="host-feature-icon van-icon" />
              <div>
                <p className="host-feature-heading">
                  <b>Vans</b>
                </p>
                <p className="host-feature-text">
                  Host multiple vans on our platform, offering users an
                  unparalleled opportunity to embark on unforgettable journeys.
                </p>
              </div>
            </div>
            <div className="home-section-host-feature">
              <RiStarSFill className="host-feature-icon star-icon" />
              <div>
                <p className="host-feature-heading">
                  <b>Reviews</b>
                </p>
                <p className="host-feature-text">
                  Gain valuable insights into your van rental experience by
                  accessing and exploring your reviews from satisfied customers.
                </p>
              </div>
            </div>
          </div>
          <div className="host-feature-img-container">
            <img
              className="host-feature-img host-income-img"
              src={HostIncomeSc}
              alt=""
              srcset=""
            />
            <img
              className="host-feature-img host-van-img"
              src={HostVansSc}
              alt=""
              srcset=""
            />
            <img
              className="host-feature-img host-review-img"
              src={HostReviewsSc}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <div className="home-section home-section-last">
        <h2 className="home-page-review-heading">Our Client Reviews</h2>
        <div className="reviews-container">{reviewCards}</div>
      </div>
    </>
  );
}
