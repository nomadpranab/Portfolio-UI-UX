import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Nav/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Certfication from './components/Certification/Certification'
import { useState } from 'react'
import loader from './assets/spinnergif.svg'
import Temp from './components/TEMP/temp'



function App() {

  const[loading,setloading]=useState(true);

  setTimeout(()=>{
      setloading(false);
  },3000);
  
  if(loading===true)
  {
      return (
          <div className=" loader container text-center">
              <img id="loaderimage" src={loader} alt='spinner'/>
          </div>
        )
  }
  else{
  return (
    <>
    
    <Navbar/>
    <Header/>
    <About/>
    <Experience/>
    <Certfication/>
    <Portfolio/>
    <Contact/>
    <Temp/>
    </>
  )
  }
}

export default App
