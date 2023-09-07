import React, { Fragment, useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE } from "../../../../constants/lab10";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";

const ExerciseStart = (props) => {
  /**
   * Update lab state onMount
   */
  useEffect(() => {
    props.actions.updateState(EXERCISE_IDLE);
  }, []);

  /**
   * Redirect the user to the following page
   * @returns {Promise} navigate promise
   */
  const handleStart = () => {
    return navigate("/Lab10/Exercise/BuildingAI");
  };

  return (
    <Fragment>
      <div className="center-div">
        <div className="guidance margin-bottom-2">
          <p className="playthrough__sentence">
            In this exercise, the user will experience how a neural network
            based AI is trained and implemented. Through a simple game where the
            user must avoid different colored falling balls, the user will learn
            how the AI inherently builds bias based on the results of the game.
            After analyzing the results, the user will then re-train the AI to
            eliminate bias.
          </p>
        </div>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleStart}
          key="start"
        >
          Start
        </button>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

ExerciseStart.propTypes = {
  actions: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(ExerciseStart);
