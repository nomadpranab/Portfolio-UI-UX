import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi';
import {BsGithub} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';

function Contact() {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">

          <article className="contact_option">
          <a href='mailto:pranabpatra520@gmail.com' target='_blank'><FiMail className='contact_option_icon'/></a>
          
            <h4>Email</h4>
            <h5>pranabpatra520@gmail.com</h5>
            
          </article>

          <article className="contact_option">
          <a href='https://github.com/nomadpranab' target='_blank'><BsGithub className='contact_option_icon'/></a>
            <h4>Github</h4>
            <h5>nomadpranab</h5>
            
          </article>

          <article className="contact_option">
          <a href='https://wa.me/8895815237' target='_blank'><BsWhatsapp className='contact_option_icon'/></a>
            <h4>Whatsapp</h4>
            <h5>+91 8895815237</h5>
            
          </article>
        </div>

        <form action=''>
          <input type='text' name='name' placeholder='Full Name' required/>
          <input type='text' name='email' placeholder=' Your Email' required/>
          <textarea name='message' placeholder='"Your Message' required></textarea>
          <button type='submit' className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
