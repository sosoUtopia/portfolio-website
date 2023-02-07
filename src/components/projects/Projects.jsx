import React from 'react'
import "./projects.css"
import Keylogger from "./Keylogger"
import Trader from "./Trader"
import Ball from "./Ball"

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">My finished and current projects</span>
      <div className="project-container container grid">
        <div className="project-content grid">
          <Trader />
          <div className="trader-img"></div>
        </div> 
      </div>
      <div className="project-container container grid">
        <div className="project-content grid">
          <Keylogger />
          <div className="project-img"></div>
        </div> 
      </div>
      <div className="project-container container grid">
        <div className="project-content grid">
          <Ball />
          <div className="ball-img"></div>
        </div> 
      </div>
    </section>
  )
}

export default Projects