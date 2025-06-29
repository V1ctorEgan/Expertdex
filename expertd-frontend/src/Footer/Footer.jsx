import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0073FF] text-white rounded-[64px] ' >

        <div className='flex mx-32 justify-between py-24 border-b border-white'>

            <div>

            <div className='flex gap-2  '>
            <div className=''>
                <img src="../images/NavBarimages/expertlogo.png" alt="logo" className=' ' />

            </div>
            <div>
                <p className='text-2xl font-normal'>ExpertDex</p>

            </div>

            </div>


            </div>




            <div className='flex flex-col gap-2'>
                <p className='text-lg font-bold'>Quick Links</p>
                <p className='font-normal text-base'>Home</p>
                <p className='font-normal text-base'>About Us</p>
                <p className='font-normal text-base'>Contact Us</p>
                <p className='font-normal text-base'>FAQs</p>
            </div>


            <div className='grid gap-4 items-center'>
                <p className='font-extrabold text-xl'>Contact </p>

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
