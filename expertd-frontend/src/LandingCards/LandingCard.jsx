import React from 'react'

const LandingCard = ({img,desc}) => {
  return (
    <div>

        <div>

            <p>
                <img src={img} alt="img" />
            </p>

            <p>
                {desc}
            </p>

        </div>
      
    </div>
  )
}

export default LandingCard
