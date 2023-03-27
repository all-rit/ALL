/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE } from "../../../../constants/lab10";

class ExerciseStart extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_IDLE);
  }

  handleStart() {
    navigate("/Lab10/Exercise/ExerciseEnd");
  }

  render() {
    return (
      <Fragment>
        <div className="center-div tw-flex-col tw-justify-center">
          <div className="guidance margin-bottom-2 tw-flex tw-justify-center">
            <p className={"tw-ml-20 tw-mr-20 tw-text-2xl"}>
              In this exercise, the user will experience how a neural network based AI
              is trained and implemented. Through a simple game where the user must avoid
              different colored falling balls, the user will learn how the AI inherently builds bias
              based on the results of the game. After analyzing the results, the user will then
              retrain the AI in order to eliminate bias.
            </p>
          </div>
          <div>
           <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleStart}
            key="start"
           >
            Start Exercise
          </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ExerciseStart;
