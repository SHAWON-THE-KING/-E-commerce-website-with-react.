import React from 'react'
import Headding from '../Components/Common-Headding/headding'
import Works01 from '../assets/Works01.png'
import Works02 from '../assets/Works02.png'
import Works03 from '../assets/Works03.png'
import Button from '../Components/Common-Btn/Button'

const Services = () => {
  return (
    <div className='py-12'>
      <div className="container">







        <div className='text-center mb-10'>
          <Headding
            title="How It Works"
            titleClass="text-3xl font-bold"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            descClass="text-base text-gray-600"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center sm:text-left">

          <div className="max-w-xs group cursor-pointer transition-all">
            <div className='relative mb-4 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Works01}
                alt="Purchase Securely"
                className="rounded-xl object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold'>
                1
              </div>
            </div>
            <h3 className='font-semibold text-xl mb-2'>Purchase Securely</h3>
            <p className='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="max-w-xs group cursor-pointer transition-all">
            <div className='relative mb-4 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Works02}
                alt="Ships From Warehouse"
                className="rounded-xl object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold'>
                2
              </div>
            </div>
            <h3 className='font-semibold text-xl mb-2'>Ships From Warehouse</h3>
            <p className='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="max-w-xs group cursor-pointer transition-all">
            <div className='relative mb-4 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Works03}
                alt="Style Your Room"
                className="rounded-xl object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold'>
                3
              </div>
            </div>
            <h3 className='font-semibold text-xl mb-2'>Style Your Room</h3>
            <p className='text-gray-700 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

        </div>




        <div className=' py-20 flex flex-col sm:flex-row px-10 justify-center items-center gap-8'>


          <div className="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-2xl hover:bg-amber-50 cursor-pointer shadow-xs">
            <h5 className="mb-4 text-xl font-medium text-body">Standard plan</h5>
            <div className="flex items-baseline text-heading">
              <span className="text-5xl font-extrabold tracking-tight">$29</span>
              <span className="ms-2 font-medium text-body">/month</span>
            </div>
            <ul role="list" className="space-y-4 my-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">2 team members</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">20GB Cloud storage</span>
              </li>
              <li className="flex items-center line-through ">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Integration help</span>
              </li>
              <li className="flex items-center line-through">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Sketch Files</span>
              </li>
              <li className="flex items-center line-through">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">API Access</span>
              </li>
              <li className="flex items-center line-through">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Complete documentation</span>
              </li>
              <li className="flex items-center line-through">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">24×7 phone &amp; email support</span>
              </li>
            </ul>
            {/* <button type="button" className="w-full text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Choose plan</button> */}

            <Button className='bg-[#00000094] w-full cursor-pointer'>Choose plan</Button>

          </div>

          <div className="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-2xl hover:bg-amber-50 cursor-pointer shadow-xs">
            <h5 className="mb-4 text-xl font-medium text-body">Gold plan</h5>
            <div className="flex items-baseline text-heading">
              <span className="text-5xl font-extrabold tracking-tight">$49</span>
              <span className="ms-2 font-medium text-body">/month</span>
            </div>
            <ul role="list" className="space-y-4 my-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">2 team members</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">20GB Cloud storage</span>
              </li>
              <li className="flex items-center ">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Integration help</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Sketch Files</span>
              </li>
              <li className="flex items-center line-through">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">API Access</span>
              </li>
              <li className="flex items-center line-through">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Complete documentation</span>
              </li>
              <li className="flex items-center line-through">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">24×7 phone &amp; email support</span>
              </li>
            </ul>
            {/* <button type="button" className="w-full text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Choose plan</button> */}

            <Button className='bg-[#00000094] w-full cursor-pointer'>Choose plan</Button>

          </div>

          <div className="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-2xl hover:bg-amber-50 cursor-pointer shadow-xs">
            <h5 className="mb-4 text-xl font-medium text-body">Dimond plan</h5>
            <div className="flex items-baseline text-heading">
              <span className="text-5xl font-extrabold tracking-tight">$89</span>
              <span className="ms-2 font-medium text-body">/month</span>
            </div>
            <ul role="list" className="space-y-4 my-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">2 team members</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">20GB Cloud storage</span>
              </li>
              <li className="flex items-center ">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Integration help</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Sketch Files</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">API Access</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">Complete documentation</span>
              </li>
              <li className="flex items-center ">
                <svg className="w-5 h-5 shrink-0 text-fg-brand me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-body">24×7 phone &amp; email support</span>
              </li>
            </ul>
            {/* <button type="button" className="w-full text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Choose plan</button> */}

            <Button className='bg-[#00000094] w-full cursor-pointer'>Choose plan</Button>

          </div>



        </div>


      </div>
    </div>
  )
}

export default Services
