import React, { useState } from 'react'
import './Navbar.css';
import {FaHome} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import {BiBookBookmark} from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs'

function Navbar() {
    const[activeNav,setActiveNav]=useState('#');
  return (
    <div id='navdiv'>
    <nav>
            <a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav==='#'?'active':''}>{<FaHome/>}</a>
            <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav==='#about'?'active' : ''}>{<FaUserAlt/>}</a>
            <a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav==='#experience'?'active':''}>{<BiBookBookmark/>}</a>
            <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav==='#contact'?'active':''}>{<BsFillTelephoneFill/>}</a>
        
    </nav>
    </div>
  )
}

export default Navbar
