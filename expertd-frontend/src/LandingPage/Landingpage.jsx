import React from 'react'
import Navbar from '../NavSelection/Navbar'
import HeroDes from '../HeroDescription/HeroDes'

const Landingpage = () => {
  return (
    <div className='bg-[url(../images/LandingPageImages/landingPageImage.png)] h-screen w-screen bg-cover bg-no-repeat'>

        <div>
            <Navbar/>
        </div>


        <div className='mx-32 my-48'>
            <HeroDes/>
        </div> 
      


        


      
    </div>
  )
}

export default Landingpage
