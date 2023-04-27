import React from 'react'
import './About.css'
import Me1 from '../../assets/me11.png'
import {FaMedal} from 'react-icons/fa';
import {FaFolderOpen} from 'react-icons/fa';

function About() {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
            <div className="about_me">
            <div className="about_me_img">
                <img src={Me1} alt=""/>
            </div>
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                        <FaMedal className='about_icon'/>
                        <h4>Experience</h4>
                        <h6>Fresher</h6>
                    </article>
                    <article className='about_card'>
                        <FaFolderOpen className='about_icon'/>
                        <h4>Projects</h4>
                        <h6>10+</h6>
                    </article>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor totam
                     ratione nam culpa aut aliquid corrupti,inventore fugiat.
                     Maiores perferendis repellat quasi rem soluta,
                     deserunt animi cupiditate quos recusandae sed?
                </p>
                <a href="#contact" className='btn btn-primary'>Lets Talk</a>
            </div>
            
        </div>
    </section>
  )
}

export default About
