import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_IDLE} from "../../../../constants/lab7";

class ExerciseStart extends Component {
  componentDidMount() {
    const {actions} = this.props;
    actions.updateState(EXERCISE_IDLE);
  }

  handleStart() {
    navigate("/Lab7/Exercise/AICybersecurity");
  }

  render() {
    return (
      <Fragment>
        <div className="center-div">
          <div className="guidance margin-bottom-2">

              Lab 7

          </div>
          <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {this.handleStart}
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
