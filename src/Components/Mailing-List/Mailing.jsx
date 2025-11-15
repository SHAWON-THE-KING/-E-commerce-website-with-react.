import React from 'react'
import Headding from '../Common-Headding/headding'
import Button from '../Common-Btn/Button'


const Mailing = () => {
    return (
        <>
            <div className='bg-[#F2F5FF] py-16'>
                <div className="container">
                    <div className='text-center '>
                        <Headding
                            title="Join Our Mailing List"
                            titleClass=" text-[32px] font-bold"
                            description="Sign up to receive inspiration, product updates, and special offers from our team."
                            descClass="text-[20px] text-[#111111c2] w-[450px] mx-auto pt-5"
                        />
                    </div>

                    <div className='flex gap-1 justify-center pt-8'>
                        <input type="email" className='bg-[#054c731a] py-5 px-5 w-[300px] rounded-l-lg hover:bg-amber-50' placeholder='example@gmail.com' />

                        <Button className='bg-[#054c731a] py-5 px-5 rounded-none rounded-r-lg text-black! hover:bg-amber-100 hover:text-blue-600! border-none'>Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mailing