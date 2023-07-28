import React from 'react'
import '../Component/Style/About.css'

const About = () => {
  return (
    <div className='About' id='about'>
      <div className='section-About'>
        <div className='image-About'>
          <img src="https://tonu-light.netlify.app/static/media/img-1.21ca43f839c9bb363a89.jpg" alt="" />
          <div className='exp-model'>
            <div className='child-exp-model'>
              <h3>8+</h3>
              <span>Years Exprience</span>
            </div>
          </div>
        </div>

        <div className='heading-About'>
          <div className='heading-About-logo'> <span></span><h4>About Me</h4> </div>
          <h1>Welcome to Tonu, Best Software Services</h1>
          <h5>I have 8+ years of experiences in Software Development for give you better services.</h5>
          <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite</p>

          <div className='heading-item'>
            <div> <h3>500 <span>+</span> </h3> <p>Projects Completed</p> </div>
            <div ><h3>52 <span>+</span> </h3> <p>Awards Win</p> </div>
            <div> <h3>2M <span>+</span> </h3> <p>Happy clients</p> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About