import React from 'react'
import InputField from './InputField'

const SubscribeLetter = () => {
  return (
    <div className='grid grid-cols-2 '>
        <div className='flex flex-col gap-10 py-40 ml-32'>
            <p className='text-5xl font-medium '>
            Subscribe To Our Newsletter
            </p>

            <p className='text-2xl font-medium w-96 '>
            We’ll send you updates on our best deals and offers
            </p>

            <div>
                <InputField/>
            </div>


        </div>

        <div>
            <p className='relative overflow-hidden '>
                <img src="../images/LandingPageimages/SubscribeImage.png" alt="image" className='  scale-150 object-right ' />
            </p>
        </div>
      
    </div>
  )
}

export default SubscribeLetter
