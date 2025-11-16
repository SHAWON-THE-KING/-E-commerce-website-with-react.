import React from 'react'
import Headding from '../Common-Headding/headding'
import Browse01 from '../../assets/Browse01.png'
import Browse02 from '../../assets/Browse02.png'
import Browse03 from '../../assets/Browse03.png'

const Browse = () => {
    return (
        <>
            <div className="container">
                <div className='text-center pt-6 md:pt-8 lg:pt-10'>
                    <Headding
                        title="Browse The Range"
                        titleClass="text-2xl md:text-3xl lg:text-[32px] font-bold"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        descClass="text-sm md:text-lg lg:text-[20px] text-[#111111c2]"
                    />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 py-8 md:py-12 lg:py-20'>

                    <div className='p-3 md:p-4 lg:p-5'>
                        <div className='hover:scale-105 duration-300 transition-transform cursor-pointer overflow-hidden rounded-lg'>
                            <img 
                                src={Browse01} 
                                alt="Dining" 
                                className='w-full h-auto object-cover rounded-lg'
                            />
                        </div>
                        <h3 className='text-xl md:text-2xl lg:text-2xl font-semibold text-[#333333] text-center pt-3 md:pt-4 lg:pt-5'>
                            Dining
                        </h3>
                    </div>

                    <div className='p-3 md:p-4 lg:p-5'>
                        <div className='hover:scale-105 duration-300 transition-transform cursor-pointer overflow-hidden rounded-lg'>
                            <img 
                                src={Browse02} 
                                alt="Living" 
                                className='w-full h-auto object-cover rounded-lg'
                            />
                        </div>
                        <h3 className='text-xl md:text-2xl lg:text-2xl font-semibold text-[#333333] text-center pt-3 md:pt-4 lg:pt-5'>
                            Living
                        </h3>
                    </div>

                    <div className='p-3 md:p-4 lg:p-5'>
                        <div className='hover:scale-105 duration-300 transition-transform cursor-pointer overflow-hidden rounded-lg'>
                            <img 
                                src={Browse03} 
                                alt="Bedroom" 
                                className='w-full h-auto object-cover rounded-lg'
                            />
                        </div>
                        <h3 className='text-xl md:text-2xl lg:text-2xl font-semibold text-[#333333] text-center pt-3 md:pt-4 lg:pt-5'>
                            Bedroom
                        </h3>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Browse
