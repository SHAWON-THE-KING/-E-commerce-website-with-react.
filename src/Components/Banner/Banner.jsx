import React from 'react'
import banner from '../../assets/Banner.jpg'
import BannerBox from './BannerBox'
import Servise from './Servise'

const Banner = () => {
    return (
        <>
            <div className="relative">
                <div>
                    <img src={banner} className='w-full' alt="banner" />
                </div>

                <div className="absolute top-[25%] right-[15%]">
                    <BannerBox />
                </div>
            </div>

            <Servise/>

        </>
    )
}

export default Banner