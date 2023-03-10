import React from 'react'
import Creative from './Creative'
import Asa from './Asa'
import Yummy from './Yummy'
import "./experience.css"

const Experience = () => {
  return (
    <section className="experience section">
        <h2 className="section-title">
            Experiences
        </h2>
        <span className="section-subtitle">
            My Work and Leadership Experiences
        </span>
        <div className="education-container container grid">
            <Creative />
            <Asa />
            <Yummy />
            
        </div>
    </section>
  )
}

export default Experience