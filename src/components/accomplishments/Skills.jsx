import React from 'react';
import "./accomplishments.css";
import Technical from "./Technical";
import Office from "./Office";

const Accomplishments = () => {
  return (
    <section className="Accomplishments section">
        <h2 className="section-title">Achievements</h2>
        <span className="section-subtitle">What I currently have</span>
        
        <div className="Accomplishments-container container grid">
            <Technical />
            <Office />
        </div>
    </section>
  )
}

export default Accomplishments