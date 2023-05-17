import React from 'react'
import './certification.css'

function Certification() {
  return (
    <section>
      <h2 className='text-center'>My Certifications</h2>
      <div className="d-flex flex-wrap justify-content-evenly">
        <div className='p-2' id='certficatediv' style={{width:"18rem",height:"30rem"}}>
          <img src={require('../../assets/me11.png')} alt=''/>
        </div>

        <div className='p-2' id='certficatediv'  style={{width:"18rem",height:"30rem"}}>
          <img src={require('../../assets/me11.png')} alt=''/>
        </div>

        <div className='p-2' id='certficatediv' style={{width:"18rem",height:"30rem"}}>
          <img src={require('../../assets/me11.png')} alt=''/>
        </div>


      </div>
    </section>
  )
}

export default Certification
