import React, {useEffect} from "react";

import {LAB_ID} from '../../../constants/lab1';
import UserLabService from '../../../services/UserLabService';
const Reinforcement = () => {
    useEffect(() => {
        return () => {
            UserLabService.complete_reinforcement(LAB_ID);
            UserLabService.user_complete_reinforcement(4,LAB_ID);
        }
    });
  return (
      <div>
      <div className="row">
        <h4>Here is some supplemental material to reinforce the topic.</h4>
      </div>
      <div className="row">
        <iframe
    title="Audio Cues"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/vU_Di8EtF3M"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    />
      </div>
      <div className="row">
        <p>Audio Cues</p>
      </div>
      <div className="row">
        <iframe
    title="Audio Cues Lecture"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/Wlf8A0w66o0"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    />
      </div>
      <div className="row">
        <p>Audio Cues Lecture</p>
      </div>
    </div>
  );
};

export default Reinforcement;
