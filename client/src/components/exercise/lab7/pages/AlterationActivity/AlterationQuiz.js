/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { default as Quiz } from "../../../../quiz/App";
import { EXERCISE_IDLE } from "../../../../../constants/lab7";
import { navigate } from "@reach/router";

class AlterationQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "AlterationQuiz",
      updateStateFunc: undefined,
    };
  }

  componentDidMount() {
    const { state } = this.props;
    if (state.exercise7.state === EXERCISE_IDLE)
      setTimeout(() => navigate("/Lab7/Exercise/AlterationStart"));
  }

  render() {
    const { updateStateFunc } = this.state;
    const { state, actions } = this.props;
    return (
      <div className="center-div">
        <p className="playthrough__sentence">Alteration Quiz</p>

        <p className="playthrough__sentence">
          Original Utility Equation: File Sensitivity Level / Threat Level
        </p>

        <p className="playthrough__sentence">
          How does the following utility equation impact the autonomous system
          compared to the original utility equation?
        </p>

        <Quiz
          path={`/AlterationQuiz`}
          user={state.main.user}
          updateStateFunc={updateStateFunc}
          hideCertificate={true}
        />
      </div>
    );
  }
}

export default AlterationQuiz;
