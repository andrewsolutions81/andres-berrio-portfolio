import React from 'react'
import About from "../../Components/About/About"
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'
import "./Home.css"

export default function Home() {
  return (
    <div className="Home">
      <About />
      <Projects />
      <Contact/>
    </div>
  )
}
