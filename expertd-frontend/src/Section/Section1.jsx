import React from 'react'
import Clientdet from '../Sectiondet/Clientdet'
import Driver from '../Sectiondet/Driver'

const Section1 = () => {
  return (
      <div>
        <div className='grid justify-center items-center'>
        <div className='grid justify-center items-center'>
          <p className='text-[56px] font-bold'>How it Works</p>
        </div>

        <div className='my-3 '>
          <p className='font-normal w-[945px] px-10 text-center'>Whether you're a business needing reliable transport or a driver looking for steady jobs, ExpertDex makes industrial logistics seamless. Here’s how each side of the platform works</p>
        </div>

        </div>


        <div className='py-10'>
          <div className='flex justify-between '>
          <div className=''>
            <Clientdet/>

          </div>

          <div className=''>

            <Driver/>
          </div>

          </div>
          <div>


          </div>
        </div>



      </div>
  )
}

export default Section1
