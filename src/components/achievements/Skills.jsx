import React from 'react';
import "./skills.css";
import Technical from "./Technical";
import Office from "./Office";

const Skills = () => {
  return (
    <section className="skills section">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">What I currently have</span>
        
        <div className="skills-container container grid">
            <Technical />
            <Office />
        </div>
    </section>
  )
}

export default Skills