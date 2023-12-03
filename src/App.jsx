import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import {Routes,Route} from 'react-router-dom'
import { IntroCov } from './components/intro-cover'
import { About } from './components/sections/About'
import { Skills } from './components/sections/skills'
import { Contact } from './components/sections/Contact'
import HireMe from './components/sections/HireMe'
import Footer from './components/sections/Footer'
import GithubCalender from './components/sections/GithubCalender'
import { Projects } from './components/sections/Projects'

function App() {
 

  return (
    <>
    <Navbar/>
    <IntroCov/>
    <About/>
   
    <GithubCalender/>
    <Skills/> 
    <Projects/>
    
    <HireMe/>
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Routes> */}
    {/* <Skills/> */}
    <Contact/>
    <Footer/>
  
      
    </>
  )
}

export default App
