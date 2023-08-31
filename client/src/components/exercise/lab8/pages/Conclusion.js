/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, { useEffect } from "react";
import { EXERCISE_IDLE } from "../../../../constants/lab8";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import { navigate } from "@reach/router";

const Conclusion = (props) => {
  const { actions } = props;

  const handleFinish = () => {
    navigate("/Lab8/Reinforcement");
  };

  useEffect(() => {
    actions.updateState(EXERCISE_IDLE);
  }, [actions]);

  return (
    <div className="center-div">
      <h3>
        Congratulations - you have completed the Algorithmic Bias exercise!
      </h3>
      <div className="playthrough__sentence">
        Click the &#39;Exercise Home&#39; button to return to the Exercise start
        page, or click the &#39;Next&#39; button to continue to the
        Reinforcement section of the lab.
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleFinish}
        key="start"
      >
        Exercise Home
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Conclusion);
