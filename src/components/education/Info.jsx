import React from 'react'
import "./education.css";
//
const Info = () => {
  return (
    <div className="education-info grid">
        <div className="education-box">
            <i class='bx bx-book-open education-icon'></i>
            <h3 className="education-title">College</h3>
                <span className="education-subtitle">Clemson University</span>
        </div>
        <div className="education-box">
            <i class='bx bx-briefcase-alt education-icon'></i>
            <h3 className="education-title">Enrolled Year</h3>
                <span className="education-subtitle">August 2021</span>
        </div>
        <div className="education-box">
            <i class='bx bx-happy-alt education-icon'></i>
            <h3 className="education-title">Projected Graduation</h3>
                <span className="education-subtitle">May 2025</span>
        </div>
        <div className="education-box">
            <i class='bx bx-timer education-icon'></i>
            <h3 className="education-title">Standing</h3>
                <span className="education-subtitle">Junior</span>
        </div>
        <div className="education-box">
            <i class='bx bx-stats education-icon'></i>
            <h3 className="education-title">GPA</h3>
                <span className="education-subtitle">3.71</span>
        </div>
        <div className="education-box">
            <i class='bx bx-line-chart education-icon'></i>
            <h3 className="education-title">Degree in Progress</h3>
                <span className="education-subtitle">Bachelor of Science in Computer Science</span>
        </div>
    </div>
  )
}

export default Info