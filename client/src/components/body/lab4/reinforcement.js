import React, {useEffect} from "react";

import {LAB_ID} from '../../../constants/lab4';
import UserLabService from '../../../services/UserLabService';
const Reinforcement = () => {
    useEffect(() => {
        return () => {
            UserLabService.complete_Reinforcement(LAB_ID);
        }
    });
    return (
        <div>
            <p className="playthrough__sentence">Here is some supplemental material to reinforce the topic.</p>
            <br/>
            <div className="row">
                <iframe
                    title="Motor Impaired User Review"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/yE1S0Biuxcc"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="row">
                <p>Motor Impaired User Review</p>
            </div>
            <div className="row">
                <iframe
                    title="Digital Accessibility User Impact: Motor Disabilities"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/nnDw7JPJBAE"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="row">
                <p>Digital Accessibility User Impact: Motor Disabilities</p>
            </div>
            <div className="row">
                <iframe
                    title="Large Links, Buttons, and Controls"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CzfKB3PuuIY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="row">
                <p>Large Links, Buttons, and Controls</p>
            </div>
        </div>
    );
};

export default Reinforcement;
