import React, {useState, useEffect}from 'react'
// import {fetchProjects} from '../../data/projectsData'
import { projects } from '../../data/projectsData';
import "./Projects.css"

export default function Projects() {
  const data = projects

  return (
    <div className="Projects">
      <main className="project-main">
        <div className="test">test
        <div className="test-data">
          {data[0].title}
        </div>
        </div>
      </main>
    </div>
  )
}
