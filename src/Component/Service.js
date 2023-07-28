import React from 'react'
import '../Component/Style/Service.css'
import { SlVector } from 'react-icons/sl';
import { GiSmartphone } from 'react-icons/gi';
import { FaPalette } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';


const Service = () => {

  return (
    <div className='Service' id='service'>
      <div className='Service-container'>
        <div className='Service-heading'>
           <div className='Service-logo'> <span></span><h4>Check Services</h4> </div> 
           <h2>My Best Services</h2>
        </div>

        <div className='Service-card'>
          <div className='Website-card'>
            <span> <SlVector/> </span> 
            <h2>Website Design</h2>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
            <button> <BsArrowDownRight/></button>
          </div>

          <div className='Mobile-card'>
            <span> <GiSmartphone/> </span>
            <h2>Mobile App Design</h2>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
            <button> <BsArrowDownRight/></button>
          </div>

          <div className='Brand-card'>
            <span> <FaPalette/> </span>
            <h2>Brand Identity</h2>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
            <button> <BsArrowDownRight/></button>
          </div>

          <div className='Market-card'>
            <span> <BsBarChartFill/> </span>
            <h2>Market Analysis</h2>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
            <button> <BsArrowDownRight/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service