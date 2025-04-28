import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#252D89] text-white ' >

        <div className='flex mx-32 justify-between py-24 px-52 border-b border-white'>
            <div className='flex flex-col gap-2'>
                <p className='font-extrabold text-xl'>About Us</p>
                <p className='font-semibold text-xl'>Learn about ExpertDex</p>
                <p className='font-semibold text-xl'>FAQs</p>
            </div>

            <div  className='flex flex-col gap-2'>
                <p className='font-extrabold text-xl'>User</p>
                <p className='font-semibold text-xl'>Login</p>
                <p className='font-semibold text-xl'>Sign Up</p>
            </div>

            <div className='grid gap-4 items-center'>
                <p className='font-extrabold text-xl'>Contact Us</p>

                <div className='flex gap-5 items-center'>
                <p>
                    <img src="../images/LandingPageimages/Mail.png" alt="mail" />
                </p>

                <p className='font-semibold text-xl'>Support@ExpertDex.com</p>

                </div>

                <div className='flex gap-5 items-center'>
                <p> <img src="../images/LandingPageimages/Instagram.png" alt="mail" /></p>

                <p className='font-semibold text-xl'>Instagram</p>
                </div>

                <div className='flex gap-5 items-center'>
                <p> <img src="../images/LandingPageimages/Facebook.png" alt="mail" /></p>

                <p className='font-semibold text-xl'>Facebook</p>
                </div>


                <div className='flex gap-5 items-center'>
                <p> <img src="../images/LandingPageimages/X.png" alt="mail" /></p>

                <p className='font-semibold text-xl'>X</p>
                </div>
            </div>

        


        </div>

        <div className=' grid justify-center text-center gap-2 py-15'>
            <p className='text-2xl font-bold'>
            ExpertDex
            </p>

            <p className='text-lg font-medium'>
            ©2023 Work-X All Rights Reserved
            </p>

            <p className='text-lg font-medium'>
            Terms and Conditions
            </p>
        </div>




      
    </div>
  )
}

export default Footer
