/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import LabButton from "../../../all-components/LabButton";

class Results extends Component {
  render() {
    const {
      visible,
      score,
      correctAnswers,
      incorrectAnswers,
      roundNumber,
      clickHandler,
    } = this.props;

    if (!visible) return null;

    return (
      <div className="results">
        <div className="tw-title tw-mb-6">Exercise Over</div>

        <div className="results__content tw-sub-title">
          <p className="results__sentence">
            Great job! Here are your statistics:
          </p>

          <div className="result">
            <span className="result__category">Final Score:</span>
            <span className="result__value">{score}</span>
          </div>

          <div className="result">
            <span className="result__category">Correct Answers:</span>
            <span className="result__value">{correctAnswers}</span>
          </div>

          <div className="result">
            <span className="result__category">Incorrect Answers:</span>
            <span className="result__value">{incorrectAnswers}</span>
          </div>

          <div className="result tw-mb-6">
            <span className="result__category">Rounds:</span>
            <span className="result__value">{roundNumber}</span>
          </div>
        </div>

        <LabButton label={"Continue"} onClick={clickHandler} />
      </div>
    );
  }
}

export default Results;
