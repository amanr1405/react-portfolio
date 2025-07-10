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

function App() {
  return (
    <>
      <Nav />
      <Heroic />
      <Info />
      
      <div className="container p-10  pt-30 pb-30"><Timeline/></div>
      <Skill/>
      <div className="container p-10"><ProjectMaster/></div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
