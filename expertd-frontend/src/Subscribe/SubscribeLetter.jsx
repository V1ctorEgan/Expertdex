import React from 'react'
import InputField from './InputField'
import SignUpButton from '../Buttons/SignUpButton'
import LoginButton from '../Buttons/LoginButton'

const SubscribeLetter = () => {
  return (
    <div className='grid grid-cols-2  '>
        <div>
            <p className='relative overflow-hidden '>
                <img src="../images/LandingPageimages/SubscribeImage.png" alt="image" className='  scale-150 object-right ' />
            </p>
        </div>
        <div className='flex flex-col gap-10 py-10 mx-30'>
        {/* <div className='flex flex-col gap-10 py-40 mx-40'> */}
            <p className='text-[56px] font-bold '>
            {/* <p className='text-5xl font-medium '> */}
           Ready to Join the Future of Industrial Logistics?
            </p>

            <p className='text-base font-normal  '>
            Get started today—book a vehicle or earn with yours.
            </p>

           <div className='flex gap-8 items-center pt-[32px]  '>
                <LoginButton style=' border-2 border-[#0073FF] text-[#0073FF] text-center flex items-center justify-center  w-45 h-15 rounded-[20px]'/>
                <p className='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center text-white justify-center  text-center w-45 h-15 rounded-[20px]'>Find a vehicle</p>
                {/* <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-45 h-15 rounded-[20px]'/> */}
            </div>


        </div>

      
    </div>
  )
}

export default SubscribeLetter
