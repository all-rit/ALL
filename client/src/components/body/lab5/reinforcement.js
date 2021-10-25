import React, { useEffect } from "react";

import { LAB_ID } from "../../../constants/lab5";
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
          title="Dyslexia & Web Accessibility"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9XiHhQikNrY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="row">
        <p>Dyslexia & Web Accessibility</p>
      </div>
      <div className="row">
        <iframe
          title="Cognitive Disabilities - An Introduction to Accessibility and Inclusive Design"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OknYVKtn-Cc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="row">
        <p>
          Cognitive Disabilities - An Introduction to Accessibility and
          Inclusive Design
        </p>
      </div>
    </div>
  );
};

export default Reinforcement;
