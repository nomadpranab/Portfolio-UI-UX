import React from 'react'
import './Portfolio.css'
import ReactPlayer from 'react-player'
import video from '../../assets/movieappvideo.mp4'

function Portfolio() {
  return (
    <section id='project'>
      <div>
      <h2 className='text-center mb-3'>My Projects</h2>
      <h6 className='text-center'>Development Projects</h6>
      <div class="d-flex flex-wrap justify-content-evenly">
            <div>
            <div>
              <img src={require('../../assets/project1.png')} style={{width:"20rem",height:"20rem"}} alt=''/>
            </div>

            <div style={{width:"20rem"}}>
              <p className='text-center'>This project is all about my portfolio.You can download my cv,see my skillset,experiences,projects and lastly you can get in touch with me.</p>
              <br></br>
              <a href='https://portfolio-ui-ux.vercel.app/'><button className='btn btn-sm m-2 '>Live </button></a>
              <a href='https://github.com/nomadpranab/Portfolio-UI-UX'><button className='btn btn-sm m-2'>GitHub </button></a>
            </div>
            </div>

            <div>
            <div>
              <img src={require('../../assets/PROJECT3.png')} style={{width:"20rem",height:"20rem"}} alt=''/>
            </div>

            <div style={{width:"20rem"}}>
              <p className='text-center'>
                A website that offers inexpensive itineraries,offbeat destinations,aesthetic accommodation for travelling.Making it a one-stop destination for every kind of tourist/travellers.
              </p>
              <br></br>
              <a href='https://parindey7.com/'><button className='btn btn-sm m-2 '>Live </button></a>              
              <a href='https://github.com/Parindey7/parindey7_html'><button className='btn btn-sm m-2'>GitHub </button></a>
            </div>
            </div>

            <div>
            <div>
              <img src={require('../../assets/project2.png')} style={{width:"20rem",height:"20rem"}} alt=''/>
            </div>

            <div className="container" style={{width:"20rem"}}>
              <p className='text-center'>In this website you will get random quote of the day on every reload, and you can type it to check your typing accuracy.This website measures how much errors you are making and gives a score accordingly.
              </p>
              <br></br>
              <a href='https://typing-accuracy-app.vercel.app/'><button className='btn btn-sm m-2'>Live </button></a>
              <a href='https://github.com/nomadpranab/Typing-Accuracy-App'><button className='btn btn-sm m-2 '>GitHub </button></a>
            </div>
            </div>

      
        
        
      </div>




      <h4 className='text-center mt-5'>Designing Projects</h4>
      <div class="d-flex flex-wrap justify-content-evenly">
            <div>
              <h6 className="text-center m-3">Movie Ticket Booking App</h6>
            <div className='text-center'>
              <ReactPlayer width={350} autoplay url={video} controls={true} />
            </div>

            <div style={{width:"22rem"}}>
              <p className='text-center'>The app offers a variety of browsing options, allowing you to explore based on genres, directors, actors, or even visual aesthetics. Want to delve into the dreamy world of surrealism? Or perhaps you're drawn to the vibrant colors of the '80s? CineScape lets you curate your own personalized movie collections, making it easy to revisit your favorite films or share them with friends.</p>
              <br></br>
            </div>
            </div>
      </div>
    </div>
    </section>
    
  )
}

export default Portfolio
