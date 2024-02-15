import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

const ExerciseEnd = (props) => {
  const { isExperiential } = props;

  const endActivity = () => {
    props.actions.setIsImagine(false);
    navigate("/");
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">
        {isExperiential ? "Experiential" : "Expression"} Empathy Building: End
      </h2>
      <div className="playthrough__sentence__imagine">
        Congratulations! You&apos;ve completed the activity!
      </div>
      <h2 className="playthrough__title">Thanks for participating!</h2>
      <button
        className="btn btn-second text-uppercase nextButton"
        onClick={endActivity}
      >
        Return Home
      </button>
    </div>
  );
};

ExerciseEnd.propTypes = {
  isExperiential: PropTypes.boolean,
  actions: PropTypes.shape({
    setIsImagine: PropTypes.func,
  }),
};

export default ExerciseEnd;
