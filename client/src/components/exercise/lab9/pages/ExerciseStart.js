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
    navigate("/Lab9/Exercise/Welcome");
  }

  render() {
    return (
      <Fragment>
        <div className="center-div">
          <p className="tw-mb-4 guidance">
            In this exercise you will be participating in a social media
            platform called PawPrint, a platform used by pet owners to talk
            about their pets. During the process you will experience AI-based
            adaption control loops such as MAPE-K. If a reply in a thread is
            deemed inappropriate by the artificial intelligence, the comment
            will be flagged and deleted. Click the “Start” button to begin this
            exercise!
          </p>
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
