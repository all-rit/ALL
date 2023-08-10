/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { navigate } from "@reach/router";
import { RESET } from "../../../constants/lab2/index";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    resetColorsState: () => dispatch({ type: RESET }),
    resetExerciseOptionState: () => dispatch({ type: RESET }),
    resetExerciseState: () => dispatch({ type: RESET }),
    resetUserState: () => dispatch({ type: RESET }),
  };
};

const mapStateToProps = (state) => ({
  exerciseState: state.exerciseState,
});
const handleNavHome = () => {
  navigate("/#");
};
const ExerciseEnd = (props) => {
  const {
    isExperiential,
    resetExerciseState,
    resetColorsState,
    resetExerciseOptionState,
    resetUserState,
  } = props;
  const handleRestartNav = () => {
    resetColorsState(); // Reset colors state
    resetExerciseOptionState(); // Reset exercise option state
    resetExerciseState(); // Reset exercise state
    resetUserState();
    navigate("/Intervention/Exercise/StartActivity");
  };
  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">
        {isExperiential ? "Experiential" : "Expression"} Empathy Building: End
      </h2>
      <div className="playthrough__sentence__imagine">
        Congratulations! You've completed the Expression Portion of this lab!
      </div>

      <div className="playthrough__sentence__imagine">
        Click "Return to Activity" if you'd like to return to the Activity
        Section, otherwise click "Return Home" to return to the home page.
      </div>
      <span>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase tw-m-5"
          onClick={handleRestartNav}
        >
          Return to Activity
        </button>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleNavHome}
        >
          Return Home
        </button>
      </span>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseEnd);
