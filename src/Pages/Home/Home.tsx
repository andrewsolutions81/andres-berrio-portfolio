import React from 'react'
import About from "../../Components/About/About"
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'
import "./Home.css"

export default function Home() {
  return (
    <main className="Home">
        <p className='home'>i am home page</p>
      <About />
      <Projects />
      <Contact/>
    </main>
  )
}
