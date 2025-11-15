import React from 'react'
import truck from '../../assets/Delevary.png'
import Support from '../../assets/Support.png'
import Authentic from '../../assets/Authentic.png'
import Headding from '../Common-Headding/headding'


const Servise = () => {
    return (
        <>

            <div className='bg-[#F2F5FF] py-12'>
                <div className="container ">
                    <div className='flex justify-between'>
                        <div className='flex gap-8'>
                            <img src={truck} alt="" />

                            <Headding
                                title="Free Delivery"
                                titleClass=" text-[24px] font-semibold"
                                description="Lorem ipsum dolor sit amet."
                                descClass="text-[18px] text-[#111111c2]"
                            />
                        </div>
                        <div className='flex gap-8'>
                            <img src={Support} alt="" />

                            <Headding
                                title="Support 24/7"
                                titleClass=" text-[24px] font-semibold"
                                description="Lorem ipsum dolor sit amet."
                                descClass="text-[18px] text-[#111111c2]"
                            />
                        </div>
                        <div className='flex gap-8'>
                            <img src={Authentic} alt="" />

                            <Headding
                                title="100% Authentic"
                                titleClass=" text-[24px] font-semibold"
                                description="Lorem ipsum dolor sit amet."
                                descClass="text-[18px] text-[#111111c2]"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Servise