/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "../../../../../constants/lab6";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab6/ExerciseReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

const ExerciseStart = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_IDLE);
  }, [actions]);

  const handleStart = () => {
    actions.updateState(EXERCISE_PLAYING);
    navigate("/Lab6/Exercise/AvatarSelection");
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Part 1: Applicant</h2>
      <div className="playthrough__sentence">
        In this exercise you will be applying to the company “MegaCorp.” During
        the process you will experience AI-based bias, and be asked to make
        changes to the AI.
      </div>
      <div className="playthrough__sentence">
        Click the “Start” button to begin this exercise!
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleStart}
        key="start"
      >
        Start
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseStart);
