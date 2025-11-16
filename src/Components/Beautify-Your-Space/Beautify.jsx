import React from 'react'
import Headding from '../Common-Headding/headding'
import Button from '../Common-Btn/Button'
import beautify from '../../assets/Beautify-Your-Space.png'

const Beautify = () => {
    return (
        <>
            <div className='bg-[#F2F5FF] py-8 md:py-12 lg:py-16'>
                <div className="container">
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-10'>
                        
                        <div className='w-full md:w-1/2 my-auto text-center md:text-left order-2 md:order-1'>
                            <Headding
                                title="Beautify Your Space"
                                titleClass="text-2xl md:text-3xl lg:text-[32px] font-bold"
                                description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                                descClass="text-base md:text-lg lg:text-[20px] text-[#111111c2] w-full md:w-[400px] pt-3 md:pt-4 lg:pt-5 mx-auto md:mx-0"
                            />

                            <Button className='my-4 md:my-6 lg:my-8 bg-[#054C73]'>Learn More</Button>
                        </div>
                        <div className='w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2'>
                            <img 
                                src={beautify} 
                                alt="Beautify Your Space" 
                                className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Beautify
