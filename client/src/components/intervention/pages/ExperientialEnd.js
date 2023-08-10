// @ts-ignore
/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";
import { connect } from "react-redux";
import { RESET } from "../../../constants/lab2/index";

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

const ExperientialEnd = (props) => {
  const {
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
  const handleNavHome = () => {
    navigate("/#");
  };
  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title">Experiential Empathy Building: End</h2>
      <div className="playthrough__sentence__imagine">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Congratulations! You've completed the Experiential Portion of this lab!
      </div>

      <div className="playthrough__sentence__imagine">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Click "Return to Activity" if you'd like to return to the Activity
        Section,
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        otherwise click "Return Home" to return to the home page.
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

export default connect(mapStateToProps, mapDispatchToProps)(ExperientialEnd);
