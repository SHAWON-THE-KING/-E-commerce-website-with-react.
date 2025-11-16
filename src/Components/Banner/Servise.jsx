import React from 'react'
import truck from '../../assets/Delevary.png'
import Support from '../../assets/Support.png'
import Authentic from '../../assets/Authentic.png'
import Headding from '../Common-Headding/headding'

const Servise = () => {
    return (
        <>
            <div className='bg-[#F2F5FF] py-8 md:py-12'>
                <div className="container">
                    <div className='flex flex-row justify-between gap-4 md:gap-6 lg:gap-8'>
                        
                        <div className='flex gap-3 md:gap-4 lg:gap-8 items-start md:items-center flex-1'>
                            <img src={truck} alt="Delivery" className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0' />

                            <div className='flex-1'>
                                <Headding
                                    title="Free Delivery"
                                    titleClass="text-sm md:text-lg lg:text-[24px] font-semibold"
                                    description="Lorem ipsum dolor sit amet."
                                    descClass="text-xs md:text-sm lg:text-[18px] text-[#111111c2]"
                                />
                            </div>
                        </div>

                        <div className='flex gap-3 md:gap-4 lg:gap-8 items-start md:items-center flex-1'>
                            <img src={Support} alt="Support" className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0' />

                            <div className='flex-1'>
                                <Headding
                                    title="Support 24/7"
                                    titleClass="text-sm md:text-lg lg:text-[24px] font-semibold"
                                    description="Lorem ipsum dolor sit amet."
                                    descClass="text-xs md:text-sm lg:text-[18px] text-[#111111c2]"
                                />
                            </div>
                        </div>

                        <div className='flex gap-3 md:gap-4 lg:gap-8 items-start md:items-center flex-1'>
                            <img src={Authentic} alt="Authentic" className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex-shrink-0' />

                            <div className='flex-1'>
                                <Headding
                                    title="100% Authentic"
                                    titleClass="text-sm md:text-lg lg:text-[24px] font-semibold"
                                    description="Lorem ipsum dolor sit amet."
                                    descClass="text-xs md:text-sm lg:text-[18px] text-[#111111c2]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servise
