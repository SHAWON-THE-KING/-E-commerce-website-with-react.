import React from 'react'
import Headding from '../Common-Headding/headding'
import Browse01 from '../../assets/Browse01.png'
import Browse02 from '../../assets/Browse02.png'
import Browse03 from '../../assets/Browse03.png'


const Browse = () => {
    return (
        <>

            <div className="container">
                <div className='text-center pt-10'>
                    <Headding
                        title="Browse The Range"
                        titleClass=" text-[32px] font-bold"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        descClass="text-[20px] text-[#111111c2]"
                    />
                </div>

                <div className='flex justify-between py-20'>

                    <div className='hover:scale-105 duration-200' >
                        <img src={Browse01} alt="" />

                        <h3 className='text-2xl font-semibold text-[#333333] text-center pt-5'>
                            Dining
                        </h3>
                    </div>

                    <div className='hover:scale-105 duration-200' >
                        <img src={Browse02} alt="" />

                        <h3 className='text-2xl font-semibold text-[#333333] text-center pt-5'>
                            Living
                        </h3>
                    </div>

                    <div className='hover:scale-105 duration-200' >
                        <img src={Browse03} alt="" />

                        <h3 className='text-2xl font-semibold text-[#333333] text-center pt-5'>
                            Bedroom
                        </h3>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Browse