import React from 'react'
import SubscribeLetter from './SubscribeLetter'
import InputField from './InputField'

const Subcribe = () => {
  return (
    <div>



      
        

        <div className='py-7'>

          <div className='grid justify-center items-center'>
        <div className='grid justify-center items-center'>
          <p className='text-[56px] font-bold'>Subscribe to Our Newsletter</p>
        </div>

        <div className='my-3 '>
          <p className='font-normal w-[945px] px-10 text-center'>We will send you updates on our best deals and offers</p>
        </div>

        </div>


        <div className='flex justify-center pt-2'>
        <InputField/>

        </div>

        </div>


      
    </div>
  )
}

export default Subcribe
