import React from 'react'
import IMG from "../../Constents";

const ABCareer = IMG.AboutPage.ABCareer;

const Careerbanner = () => {
  return (
    <div>
              {/* Top Image */}
      <img
        src={ABCareer}
        alt="Career"
        className="mt-20"
      />
    </div>
  )
}

export default Careerbanner