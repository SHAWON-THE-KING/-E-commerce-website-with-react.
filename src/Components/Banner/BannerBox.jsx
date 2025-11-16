import React from 'react'
import Headding from '../Common-Headding/headding'
import Button from '../Common-Btn/Button'

const BannerBox = () => {
    return (
        <>
            <div className="container">
                <div className='w-[280px] h-auto sm:w-[400px] md:w-[500px] lg:w-[645px] lg:h-[445px] bg-[#DFE9F4] rounded-2xl'>
                    
                    <div className='py-6 px-6 sm:py-8 sm:px-10 lg:py-10 lg:px-20'>
                        <p className='text-sm sm:text-base'>
                            New Arrival
                        </p>

                        <div>
                            <Headding
                                title="Discover Our New Collection"
                                titleClass="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] text-[#054C73] font-bold w-full lg:w-[400px]"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                                descClass="pt-2 sm:pt-3 lg:pt-4 text-[#111111] text-sm sm:text-base lg:text-[18px] w-full lg:w-[400px]"
                            />
                        </div>

                        <Button className='my-4 sm:my-6 lg:my-8 bg-[#054C73]'>BUY Now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerBox
