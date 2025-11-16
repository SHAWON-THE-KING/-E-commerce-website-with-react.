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




                    <div className="w-full text-center p-6 text-white">
                        <h5 className="mb-3 text-2xl tracking-tight font-semibold text-heading">Work fast from anywhere</h5>
                        <p className="mb-6 text-base text-body sm:text-lg">Stay up to date and move work forward on iOS &amp; Android. <br />Download the app today.</p>
                        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            <a href="#" className="w-full sm:w-auto bg-dark hover:bg-black rounded-2xl text-white rounded-base inline-flex items-center justify-center px-4 py-3 bg-[#0000007e]">
                                <svg className="me-2 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                                <div className="text-left rtl:text-right">
                                    <div className="text-xs">Download on the</div>
                                    <div className="text-sm font-bold">Mac App Store</div>
                                </div>
                            </a>
                            <a href="#" className="w-full sm:w-auto bg-dark hover:bg-black rounded-2xl  bg-[#0000007e] text-white rounded-base inline-flex items-center justify-center px-4 py-3">
                                <svg className="me-2 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                <div className="text-left rtl:text-right">
                                    <div className="text-xs">Get in on</div>
                                    <div className="text-sm font-bold">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>



                    <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-10 lg:gap-12 py-8 md:py-12 lg:py-20 px-4 md:px-0'>

                        <div className='w-full md:w-1/2'>
                            <Headding
                                title="Beauty Care"
                                titleClass="text-2xl md:text-3xl lg:text-[32px] font-bold text-white"
                                description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                                descClass="text-sm md:text-base lg:text-[16px] w-full md:w-[400px] py-3 md:py-4 lg:py-5 text-white"
                            />

                            <div className='pt-6 md:pt-8 lg:pt-10'>
                                <Headding
                                    title="Follow Us"
                                    titleClass="text-xl md:text-2xl lg:text-[32px] font-bold text-white"
                                    descClass='hidden'
                                />
                            </div>

                            <div className='flex gap-3 md:gap-4 lg:gap-5 text-white text-2xl md:text-3xl pt-3 md:pt-4'>
                                <FaInstagramSquare
                                    className='hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer transition-transform'
                                />
                                <FaFacebookSquare
                                    className='hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer transition-transform'
                                />
                                <FaTwitterSquare
                                    className='hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer transition-transform'
                                />
                            </div>
                        </div>

                        <div className='w-full md:w-1/2'>
                            <div>
                                <Headding
                                    title="Instagram Shop"
                                    titleClass="text-xl md:text-2xl lg:text-[32px] font-bold text-white"
                                    descClass='hidden'
                                />
                            </div>

                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 lg:gap-5 pt-4 md:pt-5 lg:pt-5'>
                                <img
                                    src={Footer01}
                                    alt="Instagram Shop 1"
                                    className='w-full h-auto hover:scale-110 duration-200 cursor-pointer transition-transform rounded-lg object-cover'
                                />
                                <img
                                    src={Footer02}
                                    alt="Instagram Shop 2"
                                    className='w-full h-auto hover:scale-110 duration-200 cursor-pointer transition-transform rounded-lg object-cover'
                                />
                                <img
                                    src={Footer03}
                                    alt="Instagram Shop 3"
                                    className='w-full h-auto hover:scale-110 duration-200 cursor-pointer transition-transform rounded-lg object-cover'
                                />
                                <img
                                    src={Footer04}
                                    alt="Instagram Shop 4"
                                    className='w-full h-auto hover:scale-110 duration-200 cursor-pointer transition-transform rounded-lg object-cover'
                                />
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Footer
