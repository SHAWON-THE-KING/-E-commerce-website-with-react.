import React from 'react'
import Headding from '../Common-Headding/headding'
import Button from '../Common-Btn/Button'
import beautify from '../../assets/Beautify-Your-Space.png'




const Beautify = () => {
    return (
        <>
            <div className='bg-[#F2F5FF] py-16'>
                <div className="container">

                    <div className='flex justify-between'>
                        <div className='my-auto'>
                            <Headding
                                title="Beautify Your Space"
                                titleClass=" text-[32px] font-bold"
                                description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                                descClass="text-[20px] text-[#111111c2] w-[400px] pt-5"
                            />

                            <Button className='my-8 bg-[#054C73]'>Learn More</Button>
                        </div>

                        <div>
                            <img src={beautify} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Beautify