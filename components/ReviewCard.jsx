import React from 'react'
import { RiStarSFill } from "react-icons/ri";

export default function ReviewCard({reviewText, reviewAuthorImg, reviewAuthorName, reviewAuthorCity}) {
    return (
        <>
            <div className='review-card'>
                <div className='review-stars'>
                    <RiStarSFill className='review-card-star' />
                    <RiStarSFill className='review-card-star'/>
                    <RiStarSFill className='review-card-star'/>
                    <RiStarSFill className='review-card-star'/>
                    <RiStarSFill className='review-card-star'/>
                </div>
                <p className='review-comment'>{reviewText}</p>
                <div className='review-author-container'>
                    <img className='review-img' src={reviewAuthorImg} alt="" />
                    <div>
                        <p className='review-author-name'><b>{reviewAuthorName}</b></p>
                        <p className='review-author-city'>{reviewAuthorCity}</p>
                    </div>
                </div>
                

            </div>
        </>
    )
}