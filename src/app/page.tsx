import React from 'react'
import Navbar from './Navbar/page'
import Home from './Home/page'
import About from './About/page'
import Skill from './Skills/page'
import Projects from './Projects/page'
import Contact from './Contact/page'

function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page
