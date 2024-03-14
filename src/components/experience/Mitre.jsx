import React from 'react'
const Mitre = () => {
  return (
    <div className="experience-content" >
        <h3 className="experience-title">
            MITRE Corporation
        </h3>
        <div className="experience-subtitle">
            <br/>May 2023 - Present<br/>Clemson, SC<br/>Historian
        </div>
        <div className="experience-description-container container grid">
        <ul>
            <li class>
                <div className="experience-description">
                Co-Op at MITRE Corporation: Developed MITRE's xAcademy learning platform, 
                enhancing UI/UX, implementing admin features (VueJS, Docker, MongoDB, TypeScript, TailwindCSS)
                </div>
            </li>
            <li class>
                <div className="experience-description">
                Integrated OpenAI API with YouTube API to automate GPT response generation from video metadata, 
                improving content quality and reducing manual tasks          
                </div>
            </li>
            <li class>
                <div className="experience-description">
                Configured simulators and software across various hardware for Air Force demonstrations, ensuring seamless network setup          
                </div>
            </li>
            <li class>
                <div className="experience-description">
                Played a pivotal role in joint Army and Air Force exercise for CARPE Dronvm, 
                presenting to high-level military officials and securing additional sponsorship.        
                </div>
            </li>
        </ul>
        <div className="asa-img"></div>
        </div>
    </div>
  )
}

export default Mitre