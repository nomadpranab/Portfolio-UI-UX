import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <section id='project'>
      <div>
      <h2 className='text-center mb-3'>My Projects</h2>
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
    </div>
    </section>
    
  )
}

export default Portfolio
