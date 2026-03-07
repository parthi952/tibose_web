import React from 'react'
import Card from '../OurSolution/Card'
import Conn from '../../Assets/Connectivity.png'

const ItermList =[
    {
        NameOfButton: "Learn More",
        Onclick: () => console.log("Button Clicked"),
        CardImg: Conn,
        CardImgName: "Connectivity",
        Title: "Connectivity",
        Description: "Reliable high-speed connectivity ensuring smooth communication and consistent performance for all business operations."
    }
]


const OurSolution = () => {
  return (
    <div>
      <Card 
        NameOfButton={"Learn More"} 
        Onclick={() => console.log("Button Clicked")} 
        CardImg={Conn}
        CardImgName="Connectivity"
        Title="Connectivity"
        Description="Reliable high-speed connectivity ensuring smooth communication and consistent performance for all business operations."
      />
    </div>
  )
}

export default OurSolution;
