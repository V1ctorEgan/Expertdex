import React from 'react'
import LandingCard from '../LandingCards/LandingCard'

const LandingDetails = () => {
  return (
    <div>

        <div>
            <p className='text-center text-4xl font-bold  my-10'>
            What We Do
            </p>


            <div className='flex  justify-between gap-20 h-96 '>
              <div>
                <LandingCard img='../images/LandingPageimages/clock.png' desc='Work-X dramatically accelerates the connection process, mitigating delays inherent in traditional methods; ensuring swift, direct interactions, preserving valuable time and expediting collaboration. '/>

              </div>
              <div className='mt-7'>
                <LandingCard img='../images/LandingPageimages/meeting.png' desc='Work-X dramatically accelerates the connection process, mitigating delays inherent in traditional methods; ensuring swift, direct interactions, preserving valuable time and expediting collaboration.'/>

              </div>

              <div className='mt-14'>

                <LandingCard img='../images/LandingPageimages/illustration.png' desc='Work-X dramatically accelerates the connection process, mitigating delays inherent in traditional methods; ensuring swift, direct interactions, preserving valuable time and expediting collaboration.'/>
              </div>
                
            </div>




        </div>
      
    </div>
  )
}

export default LandingDetails
