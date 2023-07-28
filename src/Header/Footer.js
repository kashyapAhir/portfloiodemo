import React from 'react'
import '../Header/Footer.css'
// import { FaBeFaFacebookFer } from 'react-icons/fa';
// import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { FaPinterestP } from 'react-icons/fa';
import { IoLogoVimeo } from 'react-icons/io';
import { GrLinkedinOption } from 'react-icons/gr';


const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-container'>
            <div className='Footer-logo'>
            <img className='main-logo' src="https://static.vecteezy.com/system/resources/thumbnails/005/925/285/small/initial-letter-k-logo-and-wings-symbol-wings-design-element-initial-letter-k-logo-icon-initial-logo-k-silhouette-vector.jpg" alt="" />
            </div>

            <div className='Footer-social'>
               <a href="facebook.com" target="_blank"><span><GrFacebookOption/></span></a>
               <a href="twitter.com" target="_blank"><span><AiOutlineTwitter/></span></a>
               <a href="linkedin.com" target="_blank"><span><GrLinkedinOption/></span></a>
               <a href="pinterest.com" target="_blank"><span><IoLogoVimeo/></span></a>
               <a href="vimeo.com" target="_blank"><span><FaPinterestP/></span></a>
            </div>
            
            <div className='Footer-copyright'>
                <p>© 2023. All rights reserved by themepresss.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer