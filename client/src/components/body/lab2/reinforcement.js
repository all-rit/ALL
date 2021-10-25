import React, { useEffect } from "react";

import { LAB_ID } from "../../../constants/lab2";
import UserLabService from "../../../services/UserLabService";
import useScroll from "../../../use-hooks/useScroll";
const Reinforcement = () => {
  useScroll();
  useEffect(() => {
    return () => {
      UserLabService.complete_reinforcement(LAB_ID);
    };
  });
  return (
    <div>
      <div className="row">
        <h4>Here is some supplemental material to reinforce the topic.</h4>
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
        />
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
        />
      </div>
      <div className="row">
        <p>Color Contrast Lecture</p>
      </div>
    </div>
  );
};

export default Reinforcement;
