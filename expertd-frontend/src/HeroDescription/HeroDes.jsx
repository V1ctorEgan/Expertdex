import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignUpButton'


const HeroDes = () => {
  return (
    <div className='mx-[158px]   '>
    {/* <div className='mx-[158px]  pt-23  '> */}

        <div className='w-3xl  text-white '>
          <div className='leading-none'>
            <p className=' text-[64px] font-semibold '>
              
           Powering Logistics 
            </p>
            <p className=' text-[64px] font-semibold py-0.5'>
              for Heavy Industries.

            </p>

          </div>
           

          

            <p className='w-xl pt-4 text-black'>
            ExpertDex bridges the gap between businesses that need reliable, heavy-duty transportation and verified drivers with the right vehicles to deliver. Whether you are a company moving critical equipment or a vehicle owner looking to maximize your income, our platform offers a seamless and efficient solution
            </p>


            <div className='flex gap-8 items-center pt-[32px]  '>
                <LoginButton style=' border-2 border-white text-center flex items-center justify-center  w-45 h-15 rounded-[20px]'/>
                <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-45 h-15 rounded-[20px]'/>
            </div>

         
        </div>
      
    </div>
  )
}

export default HeroDes
