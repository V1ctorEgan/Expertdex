import React from 'react'
import LandingCard from '../LandingCards/LandingCard'

const LandingDetails = () => {
  return (
    <div className=''>

        <div className='grid justify-center items-center text-white '>

          <div>
            <p className='text-center  text-[56px] font-bold  '>
             Why ExpertDex?
            </p>


          <div className='my-3 '>
          <p className='font-normal w-[945px] px-10 text-center'>ExpertDex is built specifically for the complex demands of the manufacturing, oil, and gas industries. Whether you're transporting sensitive equipment or maximizing the value of your vehicle, our platform ensures secure, efficient, and reliable logistics</p>
        </div>

          </div>

        </div>

      


        <div className='flex justify-center items-center gap-3 py-10'>
             {/* <div className='bg-white text-center rounded-2xl px-6 '> */}
          <div className='bg-white w-70 h-53 text-center px-6 rounded-2xl grid'>

            <div className='flex justify-center items-center '>
              <img src="/image/landingpage/exportlandingp.png" alt="" className='h-10 w-5' />
            </div>

            <div className=''>
              <p className='text-xl font-medium'>Specialized in Heavy & Industrial Logistics</p>
            </div>

            <div className=''>
              <p className='text-sm font-normal px-3'>We focus exclusively on transporting industrial goods, machinery, and equipment with precision.</p>

            </div>


          </div>

             {/* <div className='bg-white  text-center rounded-2xl px-6 '> */}
          <div className='bg-white w-70 h-53 text-center px-6 rounded-2xl grid'>

            <div className='flex justify-center items-center '>
              <img src="/image/landingpage/exportlandingp.png" alt=""className='h-10 w-5'/>
            </div>

            <div className=''>
              <p className='text-xl font-medium'>Safe, Verified Drivers and Vehicles</p>
            </div>

            <div className=''>
              <p className='text-sm font-normal '>All drivers and vehicles go through strict verification and compliance checks to ensure safety and reliability on every trip.</p>

            </div>


          </div>

             {/* <div className='bg-white text-center rounded-2xl px-6 '> */}
          <div className='bg-white w-70 h-53 text-center px-6 rounded-2xl grid'>

            <div className='flex justify-center items-center '>
              <img src="/image/landingpage/exportlandingp.png" alt="" className='h-10 w-5' />
            </div>

            <div className=''>
              <p className='text-xl font-medium'>Real-Time Tracking and  Communication</p>
            </div>

            <div className=''>
              <p className='text-sm font-normal px-3'>Track your deliveries live and stay informed with updates every step of the way. No guessing, no blind spots.</p>

            </div>


          </div>


             {/* <div className='bg-white text-center rounded-2xl px-6 '> */}
          <div className='bg-white w-70 h-53 grid text-center px-6 rounded-2xl'>

            <div className='flex justify-center items-center '>
              <img src="/image/landingpage/exportlandingp.png" alt="" className='h-10 w-5' />
            </div>

            <div className=''>
              <p className='text-xl font-medium'>Built for Both Businesses & Drivers</p>
            </div>

            <div className=''>
              <p className='text-sm font-normal '>Whether you’re booking transport or earning with your vehicle, ExpertDex offers seamless tools for both sides of the logistics journey.</p>

            </div>


          </div>

          

        </div>

        <div className='flex justify-center  '>
          <p className='flex w-45 h-15 border rounded-2xl border-white justify-center text-base font-normal text-white items-center'>Get Started</p>
        </div>
       

      
    </div>
  )
}

export default LandingDetails
