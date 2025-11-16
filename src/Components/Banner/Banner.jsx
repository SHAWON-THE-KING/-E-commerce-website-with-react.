import React from 'react'
import banner from '../../assets/Banner.jpg'
import BannerBox from './BannerBox'
import Servise from './Servise'

const Banner = () => {
    return (
        <>
            <div className="relative pb-12 md:pb-24 lg:pb-32">
                <div>
                    <img src={banner} className=' w-full' alt="banner" />
                </div>

                <div className="absolute top-[10%] right-[13%] md:top-[15%] md:right-[10%] lg:top-[25%] lg:right-[15%] z-10">
                    <BannerBox />
                </div>
            </div>

            <div className="mt-22 md:-mt-12 lg:-mt-16 ">
                <Servise/>
            </div>
        </>
    )
}

export default Banner
