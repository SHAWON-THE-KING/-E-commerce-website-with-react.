import React from 'react'
import Headding from '../Common-Headding/headding'
import Collection1 from '../../assets/Inspiration-Collection-01.png'
import Collection2 from '../../assets/Inspiration-Collection-02.png'
import Collection3 from '../../assets/Inspiration-Collection-03.png'



const Inspiration = () => {
    return (
        <>

            <div className="container">
                <div className='text-center pt-10'>
                    <Headding
                        title="Inspiration Collection"
                        titleClass=" text-[32px] font-bold"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        descClass="text-[20px] text-[#111111c2]"
                    />
                </div>

                <div className='flex justify-between py-20'>
                    <img src={Collection1} alt="" className='hover:scale-x-110 duration-200'/>
                    <img src={Collection2} alt="" className='hover:scale-x-110 duration-200'/>
                    <img src={Collection3} alt="" className='hover:scale-x-110 duration-200'/>
                </div>
            </div>
        </>
    )
}

export default Inspiration