import React from "react"
import { Link } from "react-router-dom"
import VanCard from "../components/VanCard"
import ReviewCard from "../components/ReviewCard";
import { MdAttachMoney } from "react-icons/md";
import { GiSurferVan } from "react-icons/gi";
import { RiStarSFill } from "react-icons/ri";

// Host Page Images
import HostIncomeSc from '../assets/images/host-income-sc.png'
import HostVansSc from '../assets/images/host-vans-sc.png'
import HostReviewsSc from '../assets/images/host-reviews-sc.png'

// Review Images
import ReviewImg1 from '../assets/images/review-pic-1.jpg'
import ReviewImg2 from '../assets/images/review-pic-2.jpg'
import ReviewImg3 from '../assets/images/review-pic-3.jpg'
import ReviewImg4 from '../assets/images/review-pic-4.jpg'
import ReviewImg5 from '../assets/images/review-pic-5.jpg'


// React Carousel Package
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
    // const [imagesLoaded, setImagesLoaded] = React.useState(false);

    // React.useEffect(() => {
    //     const preloadImages = () => {
    //         const images = [HostIncomeSc, HostVansSc, HostReviewsSc, ReviewImg1, ReviewImg2, ReviewImg3, ReviewImg4, ReviewImg5];
    //         images.forEach((image) => {
    //             const img = new Image();
    //             img.src = image;
    //             img.onload = () => {
    //                 setImagesLoaded(true);
    //             };
    //         });
    //     };

    //     preloadImages();
    // }, []);

    const featuredVansData = [
        {imgURL: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", vanName: "Modest Explorer", vanDescription: "The Modest Explorer is a van designed to get you out of the house and into nature."},
        {imgURL: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", vanName: "Green Wonder", vanDescription: "The Green Wonder is perfect for people who are looking for a mode of transport that can go anywhere."},
        {imgURL: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", vanName: "The Cruiser", vanDescription: "The Cruiser is a van for those who love to travel in comfort and luxury."}
        
    ]

    const featuredVans = featuredVansData.map((van, index) => {
        return <VanCard key={index} vanImgSrc={van.imgURL} vanName={van.vanName} vanDescription={van.vanDescription}/>
    })

    // for carousel

    const reviewData = [
        {
            reviewText: `I rented a van from this platform for a weekend getaway, and I couldn't be happier with my experience! 
            The van was clean, comfortable, and equipped with everything I needed for my trip.`,
            reviewAuthorImg: ReviewImg1,
            reviewAuthorName: 'Samantha',
            reviewAuthorCity: 'Chicago, IL'
        
        },
        {
            reviewText: `What a fantastic service! The vans available on this platform are top-notch and perfect for any adventure.
             I recently rented a van for a road trip with friends, and it exceeded all our expectations. `,
            reviewAuthorImg: ReviewImg2,
            reviewAuthorName: 'Tom',
            reviewAuthorCity: 'New York City, NY'
        
        },
        {
            reviewText: `I've rented vans from various platforms in the past, but none have compared to the quality and service provided
             by this platform. The vans are well-maintained, and the hosts are incredibly friendly.`,
            reviewAuthorImg: ReviewImg3,
            reviewAuthorName: 'Sierra',
            reviewAuthorCity: 'Miami, FL'
        
        },
        {
            reviewText: `Five stars all around! I recently used this platform to rent a van for a camping trip with my family, and it was
             a breeze from start to finish. The website is user-friendly, making it super easy.`,
            reviewAuthorImg: ReviewImg4,
            reviewAuthorName: 'Alex',
            reviewAuthorCity: 'Los Angeles, CA'
        
        },
        {
            reviewText: `I can't say enough good things about this platform! I've rented vans multiple times for various trips, and each time 
            has been a positive experience. The vans are always in excellent condition.`,
            reviewAuthorImg: ReviewImg5,
            reviewAuthorName: 'Evelyn',
            reviewAuthorCity: 'Phoenix, AZ'
        
        },

    ]

    const reviewCards = reviewData.map((review, index) => {
        return <ReviewCard 
                    key={index}
                    reviewText={review.reviewText}
                    reviewAuthorImg={review.reviewAuthorImg}
                    reviewAuthorName={review.reviewAuthorName}
                    reviewAuthorCity={review.reviewAuthorCity}
                />
    })

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1200, min: 800 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 800, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <>
            <div className="home-container">
                <div className="home-text-container">
                    <h1 className="home-main-text">You got the travel plans</h1>
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
                    <div className="home-section-host-features">
                        <div className="home-section-host-feature">
                            <MdAttachMoney className="host-feature-icon money-icon"/>
                            <div>
                                <p className="host-feature-heading"><b>Income</b></p>
                                <p className="host-feature-text">Dive into a comprehensive overview of your earnings, presented in visually stunning charts 
                                and graphs that provide insightful breakdowns of your revenue streams.</p>
                            </div>
                        </div>
                        <div className="home-section-host-feature">
                            <GiSurferVan className="host-feature-icon van-icon"/>
                            <div>
                                <p className="host-feature-heading"><b>Vans</b></p>
                                <p className="host-feature-text">Host multiple vans on our platform, offering users an unparalleled opportunity to embark on 
                                unforgettable journeys.</p>
                            </div>
                        </div>
                        <div className="home-section-host-feature">
                            <RiStarSFill className="host-feature-icon star-icon"/>
                            <div>
                                <p className="host-feature-heading"><b>Reviews</b></p>
                                <p className="host-feature-text">Gain valuable insights into your van rental experience by accessing and exploring your
                                 reviews from satisfied customers.</p>
                            </div>
                        </div>

                    </div>
                    <div className="host-feature-img-container">
                        <img className="host-feature-img host-income-img" src={HostIncomeSc} alt="" srcset="" />
                        <img className="host-feature-img host-van-img" src={HostVansSc} alt="" srcset="" />
                        <img className="host-feature-img host-review-img" src={HostReviewsSc} alt="" srcset="" />
                    </div>
                </div>
            </div>

            <div className="home-section home-section-last">
                <h2 className="home-page-review-heading">Our Client Reviews</h2>
                {/* {reviewCards} */}
                {/* Carousel */}

                <Carousel 
                    className="carousel" 
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    partialVisible={false}
                    ssr={true}
                    >
                    {reviewCards}
                </Carousel>
            </div>
        </>
     
    )
};