import React from 'react'
import Headding from '../Common-Headding/headding'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import Footer01 from '../../assets/Footer01.png'
import Footer02 from '../../assets/Footer02.png'
import Footer03 from '../../assets/Footer03.png'
import Footer04 from '../../assets/Footer04.png'




const Footer = () => {
    return (
        <>
            <div className='bg-[#03344F]'>
                <div className="container">
                    <div className='flex justify-between py-20'>
                        <div>
                            <Headding
                                title="Beauty Care"
                                titleClass=" text-[32px] font-bold text-white"
                                description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                                descClass="text-[16px] w-[400px] py-5 text-white"
                            />


                            <Headding
                                title="Follow Us"
                                titleClass=" text-[32px] font-bold text-white"
                                descClass='hidden'
                            />

                            <div className='flex gap-5 text-white text-3xl pt-3'>
                                <FaInstagramSquare className='hover:text-blue-500 hover:scale-110 duration-200' />

                                <FaFacebookSquare className='hover:text-blue-500 hover:scale-110 duration-200' />

                                <FaTwitterSquare className='hover:text-blue-500 hover:scale-110 duration-200' />

                            </div>

                        </div>


                        <div>
                            <div>
                                <Headding
                                    title="Instagram Shop"
                                    titleClass=" text-[32px] font-bold text-white"
                                    descClass='hidden'
                                />
                            </div>

                            <div className='flex gap-5 pt-5'>
                                <img src={Footer01} alt="" className='hover:scale-85 duration-200' />
                                <img src={Footer02} alt="" className='hover:scale-85 duration-200' />
                                <img src={Footer03} alt="" className='hover:scale-85 duration-200' />
                                <img src={Footer04} alt="" className='hover:scale-85 duration-200' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer