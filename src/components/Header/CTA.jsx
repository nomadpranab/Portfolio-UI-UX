import React from 'react'
import './Header.css';
import CV from '../../assets/mycv.pdf'

function CTA() {
  return (
    <div className='cta'>
      <a href={CV} className='btn'>Download CV</a>
      <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA
