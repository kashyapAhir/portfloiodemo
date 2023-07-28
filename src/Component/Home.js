import React from 'react'
import About from '../Component/About'
import '../Component/Style/Home.css'
import Blog from './Blog'
import Portfolio from './Portfolio'
import ScrollText from './ScrollText'
import Service from './Service'
import Contact from './Contact'
import Footer from '../Header/Footer'
import ScrollButton from './ScrollButton'

const Home = () => {
    return (
        <>
        <div className='Home' id='home'>
            <div className='container-2'>
                <div className='heading-container'>
                    <h1>APP & Software</h1>  
                    <h1>Developer</h1>
                    <h2>KASHYAP AHIR</h2> <br />
                    <button>Contact Us</button>
                </div>
                <div className='image-container'>
                  <img src="https://tonu-light.netlify.app/static/media/right-img.46b9eed7972d7a29e1bf.png" alt=""  /> 
                </div>
            </div>
        </div>
        <About/>
        <Service/>
        <ScrollText/>
        <Portfolio/>
        <Blog/>
        <Contact/>
        <Footer/>
        <ScrollButton/>
        </>
    )
}

export default Home