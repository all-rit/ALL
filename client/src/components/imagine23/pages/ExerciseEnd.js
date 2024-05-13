import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

const ExerciseEnd = (props) => {
  const { isExperiential, state, resetSystem } = props;

  const endActivity = () => {
    props.actions.setIsImagine(false);
    resetSystem();
    // eslint-disable-next-line react/prop-types
    console.log(state.exercise2.changeExerciseState.exerciseState);
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
  isExperiential: PropTypes.bool,
  actions: PropTypes.shape({
    setIsImagine: PropTypes.func,
  }),
  state: PropTypes.shape({}),
  resetSystem: PropTypes.func,
};

export default ExerciseEnd;
