import { useState } from 'react'
import './index.css'
import Nav from './Nav.jsx'
import Heroic from './Heroic.jsx'
import Info from './Info.jsx'
import Footer from './Footer.jsx'
import Code from './Code.jsx'
import Timeline from './Timeline.jsx'
import Skill from './Skill.jsx'
import Project from './Project.jsx'
import ProjectMaster from './ProjectMaster.jsx'
import Contact from './Contact.jsx'
import InfoMaster from './InfoMaster.jsx'


function App() {
  return (
    <>
      
      <Nav />
      <Heroic />
      <div className="container pt-30 pb-30"><Info /></div>
      <div className="container p-5 pb-30 max-w-full"><Timeline/></div>
      <Skill/>
      <div className="container p-5 pt-30 pb-30 max-w-full"><ProjectMaster/></div>
      <Contact />
      <Footer />


    
    </>
  )
}

export default App
