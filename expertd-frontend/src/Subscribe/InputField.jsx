import React from 'react'

const InputField = () => {
  return (
    <div>
        <div className='flex text-center'>
            <p className=''>
            <input type="text" placeholder='Enter your email' className='border p rounded-l-lg pr-80 py-3 pl-3' />

            </p>

            <p className='bg-[#0037C6] rounded-r-lg py-2 px-4 font-medium text-lg text-white'>
                Subscribe
            </p>


        </div>
      
    </div>
  )
}

export default InputField
