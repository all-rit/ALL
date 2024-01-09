/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import React from "react";

const ExerciseEnd = (props) => {
  const { isExperiential } = props;
  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">
        {isExperiential ? "Experiential" : "Expression"} Empathy Building: End
      </h2>
      <div className="playthrough__sentence__imagine">
        Congratulations! You've completed the activity! 
      </div>

      <h2 className="playthrough__title">
      Thanks for participating!
      </h2>


    </div>
  );
};

export default ExerciseEnd;
