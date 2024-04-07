import React from 'react'

export default function VanCard({vanImgSrc, vanName, vanDescription}) {
    return (
        <>
            <div className='van-card'>
                <img className='van-card-img' src={vanImgSrc} alt="" srcSet="" />
                <h3 className='van-card-name'>{vanName}</h3>
                <p className='van-card-description'>{vanDescription}</p>
            </div>
        </>
    )
}