import React from 'react'
import '../Component/Style/ScrollButton.css'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { HashLink as  Link} from 'react-router-hash-link';

const ScrollButton = () => {
  return (
    <div className='ScrollButton' id='home'>
       
       <Link exact smooth to="#home"><button> <AiOutlineArrowUp/> </button></Link>
    </div>
  )
}

export default ScrollButton