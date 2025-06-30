import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import SignUpButton from '../Buttons/SignUpButton'

const Navbar = () => {
  return (
    <div className='text-white w-full  '>

        <div className='flex items-center lg:mx-[158px] mx-[15.5px]   justify-between lg:pt-2 pt-3 '>
            <div className='flex gap-2  '>
            <div className=''>
                <img src="../images/NavBarimages/expertlogo.png" alt="logo" className=' ' />

            </div>
            <div>
                <p className='text-2xl font-normal'>ExpertDex</p>

            </div>

            </div>




            <div className='hidden md:block'>
                <div className='text-base font-medium  flex gap-10  '>
                    <p >Home</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>FAQs</p>

                </div>
            </div>


            <div className='hidden md:block'>
                <div className='flex  '>
                {/* <SignUpButton style='border-2 bg-[#0037C6]  border-[#0037C6] flex items-center justify-center  text-center w-45 h-15 rounded-[20px]'/> */}

                    <SignUpButton style='bg-[#0037C6] text-center border-[#0037C6] px-[40px] py-[15px] justify-center flex items-center  rounded-[15px]'/> 
                </div>
            </div>

            <div className='lg:hidden'>
                <img src="/image/mainsector/meunbar.png" alt="" />
            </div>





        </div>







      
    </div>
  )
}

export default Navbar
