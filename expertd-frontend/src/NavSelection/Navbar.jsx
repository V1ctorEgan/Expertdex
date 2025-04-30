import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignUpButton'

const Navbar = () => {
  return (
    <div className='text-white bg-white/5 backdrop-blur-sm  w-full '>

        <div className='flex items-center mx-32 justify-between  py-4'>
            <div className='flex gap-2'>
            <div>
                <img src="../images/NavBarimages/expertlogo.png" alt="logo" />

            </div>
            <div>
                <p className='text-2xl font-extrabold '>ExpertDex</p>
              

            </div>

            </div>




            <div>
                <div className='text-xl font-medium  flex gap-10 '>
                    <p>About Us</p>
                    <p>FAQs</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>

                </div>
            </div>


            <div>
                <div className='flex gap-5'>
                   <LoginButton style='border-2 border-white  text-center px-7 py-3 rounded-lg'/>
                    <SignUpButton style='bg-[#0037C6] text-center border-2 border-[#0037C6] px-7 py-3 rounded-lg'/> 
                </div>
            </div>





        </div>







      
    </div>
  )
}

export default Navbar
