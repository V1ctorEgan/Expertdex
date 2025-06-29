import React from 'react'

export default function Stats({stats,details}) {
  return (
    <div>

        <div className=''>

            <div className='grid justify-center items-center'>
            <p className='text-[56px] font-bold'>{stats}</p>
            <p className='text-sm font-normal'>{details}</p>

            </div>


        </div>
      
    </div>
  )
}
