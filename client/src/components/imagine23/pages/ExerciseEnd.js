import React from "react";
import PropTypes from "prop-types";

const ExerciseEnd = (props) => {
  const { isExperiential } = props;
  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">
        {isExperiential ? "Experiential" : "Expression"} Empathy Building: End
      </h2>
      <div className="playthrough__sentence__imagine">
        Congratulations! You&apos;ve completed the activity!
      </div>

      <h2 className="playthrough__title">Thanks for participating!</h2>
    </div>
  );
};

ExerciseEnd.propTypes = {
  isExperiential: PropTypes.boolean,
};

export default ExerciseEnd;
