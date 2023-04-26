import React from 'react'
import './Header.css';
import CV from '../../assets/CVUIUX.pdf'

function CTA() {
  return (
    <div className='cta'>
      <a href={CV}>Download CV</a>
      <a href="#contact">Let's Talk</a>
    </div>
  )
}

export default CTA
