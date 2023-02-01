/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
class AlterationStart extends Component {
  constructor(props) {
    super(props);
    this.state = { componentName: "AlterationStart" };
  }

  handleStart() {
    navigate("/Lab7/Exercise/AlterationQuiz");
  }

  render() {
    const { actions } = this.props;
    return (
      <Fragment>
        <div className="center-div">
          <div className="guidance margin-bottom-2">
            <p className="playthrough__sentence">
              In this part of the exercise, you will be looking at different
              versions of the utility equation that you edited in the last
              activity.
            </p>
            <p className="playthrough__sentence">
              In AI and machine learning, an <b>utility function</b> or equation
              is used to assign values to certain actions that the AI system can
              take. A simplified version of a utility equation can be written
              as: <b>utility = reward / cost</b>. The goal of a utility
              equation/function is to get more reward despite the cost or higher
              utility.
            </p>
            <p className="playthrough__sentence">
              To assess your understanding and grasp of the material, you will
              be given the original utility equation that was provided and a new
              equation. You will then be asked to compare them and their impact
              on the autonomous system.
            </p>
          </div>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleStart}
            key="continue"
          >
            Continue
          </button>
        </div>
      </Fragment>
    );
  }
}
export default AlterationStart;
