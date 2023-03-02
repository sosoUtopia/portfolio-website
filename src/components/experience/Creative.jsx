import React, { useState } from 'react'

const Creative = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
      setToggleState(index);
    }
  
  return (
    <div className="experience-content" >
        <h3 className="experience-title">
        Creative Inquiry: Signals, Sensors, and Machine Learning to Improve Psychotherapy Outcomes
        </h3>
        <div className="experience-subtitle">
            <br/>January 2023 - Present<br/>Clemson, SC<br/>Undergraduate Data Science Assistant Researcher 
        </div>
        <div className="experience-description-container container grid">
            <ul>
                <li class>
                    <div className="experience-description">
                    Collaborate with 5 students weekly to discuss project progress                
                    </div>
                </li>
                <li class>
                    <div className="experience-description">
                        Incorporate Natural Language Processing audio mining from records extracted from psychotherapy sessions.
                    </div>
                </li>
                <li class>
                  <div className="experience-description">
                  Goal: Create training tools using machine learning model from data extracted from therapy sessions
                  </div>
                </li>
                
            </ul>
            <div className="creative-inquiry-img"></div>
        </div>
        <span className="experience-button" onClick={() => toggleTab(1)}>View More{" "}
                <i className="uil uil-arrow-right experience-button-icon"></i></span>
                <div className= {toggleState === 1 ? "experience-modal active-modal" : "experience-modal"}>
            <div className="experience-modal-content">
              <i className="uil uil-times experience-modal-close" onClick={() => toggleTab(0)}></i>

              <h3 className="experience-modal-title">Signals, Sensors, and Machine Learning to Improve Psychotherapy Outcomes</h3>
              <p className="experience-modal-description">
              This Creative Inquiry project is an interdisciplinary collaboration led by engineers, a computer scientist, and a social scientist. 
              The team will work together 
              to create training tools for therapists to improve session outcomes, especially using the Motivational Interviewing framework. 
              </p>
              <p className="experience-modal-description">
              The team will be assisted by clinical psychologists from the Medical University of South Carolina (MUSC) and Florida State University, who will provide content knowledge of the therapy setting. 
              </p>
              <p className="experience-modal-description">
              Engineering and computing students will develop instrumentation and data processing techniques that will allow the therapists to be physiologically monitored, adding important information to the session records, which can be improved for better patient outcomes.
              </p>

              <ul className="experience-modal-experience grid">

              <h5>Team Leader</h5>
                <li className="experience-modal-service">
                  <i className="uil uil-check-circle experience-modal-icon"></i>
                    <p className="experience-modal-info">Jordon Gilmore - <i>Bioengineering</i></p>
                </li>
                <li className="experience-modal-service">
                  <i className="uil uil-check-circle experience-modal-icon"></i>
                  <p className="experience-modal-info">Delphine Dean - <i>Bioengineering</i></p>
                </li>
                <li className="experience-modal-service">
                  <i className="uil uil-check-circle experience-modal-icon"></i>
                  <p className="experience-modal-info">Jerome McClendon <i>Campbell Grad Engr Program</i></p>
                </li>
                <li className="experience-modal-service">
                  <i className="uil uil-check-circle experience-modal-icon"></i>
                  <p className="experience-modal-info">Nina Hubig - <i>School of Computing</i></p>
                </li>
              </ul>
            </div>
          </div>
    </div>  
    )
}

export default Creative