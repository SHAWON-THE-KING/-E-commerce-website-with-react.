import React from 'react'
import Headding from '../Common-Headding/headding'
import Collection1 from '../../assets/Inspiration-Collection-01.png'
import Collection2 from '../../assets/Inspiration-Collection-02.png'
import Collection3 from '../../assets/Inspiration-Collection-03.png'

const Inspiration = () => {
    return (
        <>
            <div className="container">
                <div className='text-center pt-6 md:pt-8 lg:pt-10'>
                    <Headding
                        title="Inspiration Collection"
                        titleClass="text-2xl md:text-3xl lg:text-[32px] font-bold"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        descClass="text-sm md:text-lg lg:text-[20px] text-[#111111c2] mt-2"
                    />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 py-8 md:py-12 lg:py-20'>
                    
                    <div className='overflow-hidden rounded-lg p-2 sm:p-3 md:p-4 lg:p-0'>
                        <img 
                            src={Collection1} 
                            alt="Collection 1" 
                            className='w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-none object-cover hover:scale-110 duration-300 transition-transform cursor-pointer rounded-lg'
                        />
                    </div>

                    <div className='overflow-hidden rounded-lg p-2 sm:p-3 md:p-4 lg:p-0'>
                        <img 
                            src={Collection2} 
                            alt="Collection 2" 
                            className='w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-none object-cover hover:scale-110 duration-300 transition-transform cursor-pointer rounded-lg'
                        />
                    </div>

                    <div className='overflow-hidden rounded-lg p-2 sm:p-3 md:p-4 lg:p-0'>
                        <img 
                            src={Collection3} 
                            alt="Collection 3" 
                            className='w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-none object-cover hover:scale-110 duration-300 transition-transform cursor-pointer rounded-lg'
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Inspiration
