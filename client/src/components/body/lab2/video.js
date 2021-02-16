import React, {useEffect} from "react";

import {LAB_ID} from '../../../constants/lab2';
import UserLabService from '../../../services/UserLabService';
const Video = () => {
    useEffect(() => {
        return () => {
            UserLabService.complete_video(LAB_ID);
        }
    });
  return (
      <div>
      <div className="row">
        <h4>Here are some videos to aid in understanding the material.</h4>
      </div>
      <div className="row">
        <iframe
          title="Color Blindness Testimony"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/d6KKsmmOKEI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="row">
        <p>Color Blindness Testimony</p>
      </div>
      <div className="row">
        <iframe
          title="Audio Cues Lecture"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zrl0CW8m-Qk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="row">
        <p>Color Contrast Lecture</p>
      </div>
    </div>
  );
};

export default Video;
