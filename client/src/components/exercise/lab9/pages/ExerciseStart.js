/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_IDLE } from "../../../../constants/lab9";

class ExerciseStart extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_IDLE);
  }

  handleStart() {
    navigate("/Lab9/Exercise/ExerciseEnd");
  }

  render() {
    return (
      <Fragment>
        <div className="center-div">
          <div className="guidance margin-bottom-2">
            MAPE-K Start
          </div>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleStart}
            key="start"
          >
            Start
          </button>
        </div>
      </Fragment>
    );
  }
}

export default ExerciseStart;
