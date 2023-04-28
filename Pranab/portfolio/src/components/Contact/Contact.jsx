import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi';

function Contact() {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <h4>Email</h4>
            <h5>pranabpatra520@gmail.com</h5>
            <a href='mailto:pranabpatra520@gmail.com'><FiMail className='contaact_option_icon'/></a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
