import React from 'react'
import Headding from '../Common-Headding/headding'
import Button from '../Common-Btn/Button'

const BannerBox = () => {
    return (
        <>

            <div className="container">
                <div className='w-[645px] h-[445px] bg-[#DFE9F4] rounded-2xl'>

                    <div className='py-10 px-20'>
                        <p>
                            New Arrival
                        </p>

                        <div >
                            <Headding
                                title="Discover Our New Collection"
                                titleClass=" text-[52px] text-[#054C73] font-bold w-[400px]"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                                descClass=" pt-4 text-[#111111] text-[18px] w-[400px]"
                            />
                        </div>

                        
                        <Button className='my-8 bg-[#054C73]'>BUY Now</Button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default BannerBox