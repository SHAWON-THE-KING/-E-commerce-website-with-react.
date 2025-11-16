import React from 'react'
import Headding from '../Common-Headding/headding'
import Button from '../Common-Btn/Button'

const Mailing = () => {
    return (
        <>
            <div className='bg-[#F2F5FF] py-8 md:py-12 lg:py-16'>
                <div className="container">
                    <div className='text-center px-4 md:px-6'>
                        <Headding
                            title="Join Our Mailing List"
                            titleClass="text-2xl md:text-3xl lg:text-[32px] font-bold"
                            description="Sign up to receive inspiration, product updates, and special offers from our team."
                            descClass="text-sm md:text-lg lg:text-[20px] text-[#111111c2] w-full md:w-[450px] mx-auto pt-3 md:pt-4 lg:pt-5"
                        />
                    </div>

                    {/* Responsive email input and button */}
                    <div className='flex flex-col sm:flex-row gap-2 md:gap-1 justify-center pt-6 md:pt-8 px-4 md:px-0'>
                        <input 
                            type="email" 
                            className='w-full sm:w-auto bg-[#054c731a] py-3 md:py-4 lg:py-5 px-4 md:px-5 rounded-lg sm:rounded-l-lg sm:rounded-r-none hover:bg-amber-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#054C73]'
                            placeholder='example@gmail.com' 
                        />

                        <Button 
                            className='bg-[#054c731a] py-3 md:py-4 lg:py-5 px-4 md:px-5 rounded-lg sm:rounded-none sm:rounded-r-lg text-black hover:bg-amber-100 hover:text-blue-600 border-none w-full sm:w-auto'
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mailing
