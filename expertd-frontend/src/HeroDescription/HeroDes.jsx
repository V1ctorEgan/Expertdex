import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignUpButton'

const HeroDes = () => {
  return (
    <div>

        <div className='w-3xl grid gap-7 text-white '>
            <p className=' text-6xl font-bold '>
              
            Connecting Manufacturers and Consumers Seamlessly
            </p>

            <p className='w-xl text-3xl font-medium'>
            Your trusted platform for high-quality products and reliable manufacturers
            where innovation is boundless
            </p>


            <div className='flex gap-8'>
                <LoginButton style='bg-[#0037C6] text-center border-2 border-[#0037C6] px-23 py-4 rounded-lg'/>
                <SignUpButton style='border-2 border-white  text-center px-23 py-4 rounded-lg'/>
            </div>
        </div>
      
    </div>
  )
}

export default HeroDes
