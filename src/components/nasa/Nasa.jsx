import React, { useState } from "react";
import axios from 'axios'
import "./nasa.css"

const Nasa = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
      setToggleState(index);
    }

    let API_KEY = 'I7wAETlfmdUb6V30YRzGxj2V2wcycaYPSH3LBESG';

    const [img, setImg] = useState();
    const [word, setWord] = useState();

    useState(() => {
        axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
            ).then((response) => {
                setImg(response.data.url)
                setWord(response.data.explanation)
            })
        }
    )

    return (
        <>
            {/* <h1 className="section-title">Inspire</h1> */}
            <div className="nasa-container container grid">
                <div className="nasa-content grid">
                    <img className="nasa-img" src={img}></img>
                    <div className="nasa-data">
                        <h3 className="nasa-subtitle">
                        "The journey of a thousand miles begins with a single step” - Lao Tzu                        
                        </h3>
                        <p className="nasa-description-content">
                            千里之行始於足下
                        </p>
                        <p className="nasa-description-content">
                            Wish to be inspired, wish to inspire one at a time.
                        </p>
                        <p className="nasa-description-footer">Today's image from Nasa's Astronomy Picture of the Day API. Come back after midnight to see a different one!<br/>
                            <span className="nasa-button" onClick={() => toggleTab(1)}>View Image Description{" "}
                            <i className="uil uil-arrow-right nasa-button-icon"></i></span></p>
                            <div className= {toggleState === 1 ? "nasa-modal active-modal" : "nasa-modal"}>
                            <div className="nasa-modal-content">
                                <i className="uil uil-times nasa-modal-close" onClick={() => toggleTab(0)}></i>
                                <h3 className="nasa-modal-title">Explanation</h3>
                                <div className="nasa-subtitle">
                                    {word}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Nasa