import React, { useState } from 'react'
import '../Header/Navbar.css'
import '../App.css'
// import { NavLink } from "react-router-dom"
import { HashLink as  Link} from 'react-router-hash-link';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {

   const [showlist,setshowList] = useState(false)
   const [model,setModel] = useState(false);

   const handlemodel = () => {
      setModel(!model)
   }

   
  return (
    <>
    <div className='Navbar'> 
       <div className='Logo-section'>
           <a href="/"><img className='main-logo' src="https://static.vecteezy.com/system/resources/thumbnails/005/925/285/small/initial-letter-k-logo-and-wings-symbol-wings-design-element-initial-letter-k-logo-icon-initial-logo-k-silhouette-vector.jpg" alt="" /> </a> 
       </div>
       
       <div className={ showlist ? 'mobile-list' : 'List-section'}>
          <ul>
            <Link exact smooth to="#home"><li>Home</li></Link>
            <Link smooth to="#about"><li>About</li></Link>
            <Link smooth to="#service"><li>Service</li></Link>
            <Link smooth to="#portfolio"><li>Porfolio</li></Link>
            <Link smooth to="#blog"><li>Blog</li></Link>
            <Link smooth to="#contact"><li>Contact</li></Link>
          </ul>
       </div>
         <div className='burger-menu'>
             <a href="#/" onClick={() => setshowList(!showlist)}><AiOutlineMenu/></a>
         </div>
       <div className='Search-section'>
          <span className='search-logo' >{ !model ? <IoSearchOutline onClick={handlemodel}/> : <IoMdClose onClick={handlemodel}/>} </span> 
       </div>
       {model && <div className='Serch-model'>
          <span><input type="text" size={33} placeholder='Search here...'  />  <IoSearchOutline className="model-search-icon"/></span>
       </div>} 
    </div> 
    <div className='Line-hr'> 
       <hr style={{opacity : "0.3"}}/> 
    </div> </>
  )
}

export default Navbar