import React, { useState } from 'react'
import '../Component/Style/Portfolio.css'

const Portfolio = () => {

  const [show,setShow] = useState(false)

  return (
    <div className='Project' id='portfolio'>
      <div className='Project-container'>

        <div className='Project-heading'>
          <div className='Project-logo'> <span></span><h4>Projects</h4> </div>
          <h2>My Latest Project</h2>
        </div>

        <div className='Project-card'>
          <div className='card-1'>
              <div className='card-image-project'><a href="/#"><img src="https://tonu-light.netlify.app/static/media/img-1.861441b009982c048ea8.jpg" alt="" /></a></div>
            <div className='card-body-1'>
              <p>WEB DESIGN</p>
              <h2>Business Website Design</h2>
            </div>
          </div>

          <div className='card-1'>
          <div className='card-image-project'><a href="/#"><img src="https://tonu-light.netlify.app/static/media/img-2.f9112dc09ce9e099ee5e.jpg" alt="" /></a></div>
            <div className='card-body-1'>
              <p>WEB DEVELOPMENT</p>
              <h2>Food Website Design</h2>
            </div>
          </div>

          <div className='card-1'>
          <div className='card-image-project'><a href="/#"><img src="https://tonu-light.netlify.app/static/media/img-3.899d5ea8b443276c62b5.jpg" alt="" /></a></div>
            <div className='card-body-1'>
              <p>WEB DESIGN</p>
              <h2>Creative Website Design</h2>
            </div>
          </div>

          { show ? <> <div className='card-1'>
              <div className='card-image-project'><a href="/#"><img src="https://tonu-light.netlify.app/static/media/img-4.e3506b51b14bb7ec70f0.jpg" alt="" /></a></div>
            <div className='card-body-1'>
              <p>APP DESIGN</p>
              <h2>Marketing Website Design</h2>
            </div>
          </div>

          <div className='card-1'>
          <div className='card-image-project'><a href="/#"><img src="https://tonu-light.netlify.app/static/media/img-2.f9112dc09ce9e099ee5e.jpg" alt="" /></a></div>
            <div className='card-body-1'>
              <p>WEB DEVELOPMENT</p>
              <h2>Charity Website Design</h2>
            </div>
          </div>

          <div className='card-1'>
          <div className='card-image-project'><a href="/#"><img src="https://tonu-light.netlify.app/static/media/img-6.70223ad1768addedfef1.jpg" alt="" /></a></div>
            <div className='card-body-1'>
              <p>WEB APP</p>
              <h2>Ecommarce Website Design</h2>
            </div>
          </div> </>: null}
        </div>

          { !show ? <div className='project-button-div'>
            <button onClick={()=> setShow(true)}>View All Work</button>
          </div> : null}
      </div>
    </div>
  )
}

export default Portfolio