/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import React from "react";
// import "../../../../assets/stylesheets/components/ExerciseFrame.scss";
import "../../../../assets/stylesheets/components/Witch.css";
// Changing import to see if relative vs absolute positioning works
import ChatRoom from "./ChatRoom";


const ExerciseFrame = () => {
  return (
    <div
      className="exercise-frame tw-w-full tw-aspect-video"
      // style={{ opacity: 0.5 }}
    >
      <ChatRoom />
      {/* right now the div contains a background image */}
    </div>
  );
};

export default ExerciseFrame;
