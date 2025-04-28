import React from 'react'
import Navbar from '../NavSelection/Navbar'
import HeroDes from '../HeroDescription/HeroDes'
import Section1 from '../Section/Section1'
import Section2 from '../Section/Section2'
import LandingDetails from '../LandingDetails/LandingDetails'

const Landingpage = () => {
  return (
    <div className='bg-[url(../images/LandingPageImages/landingPageImage.png)] h-screen w-screen bg-cover bg-no-repeat'>

        <div>
            <Navbar/>
        </div>


        <div className='mx-32 my-48'>
            <HeroDes/>
        </div> 

        <div className='mx-32  '>
            <Section1/>
            <Section2/>
        </div>

        <div>
            <LandingDetails/>
        </div>
      


        


      
    </div>
  )
}

export default Landingpage
