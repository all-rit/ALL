/* eslint-disable react/prop-types */
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
      <div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="tw-title tw-mb-6">Exercise Over</div>

        <div className="">
          <p className="">Stats</p>
          <div className={"tw-grid tw-grid-cols-2 tw-gap-3 tw-w-full tw-my-6"}>
            <div className="result tw-bg-primary-blue tw-text-white tw-p-6 tw-rounded-lg">
              <span className="tw-font-bold">Final Score: {score}</span>
            </div>

            <div className="result tw-bg-primary-blue tw-text-white tw-p-6 tw-rounded-lg">
              <span className="result__category">
                Correct Answers: {correctAnswers}
              </span>
            </div>

            <div className="result tw-bg-primary-blue tw-text-white tw-p-6 tw-rounded-lg">
              <span className="result__category">
                Incorrect Answers: {incorrectAnswers}
              </span>
            </div>

            <div className="result tw-bg-primary-blue tw-text-white tw-p-6 tw-rounded-lg">
              <span className="result__category">Rounds: {roundNumber}</span>
            </div>
          </div>
        </div>

        <LabButton label={"Continue"} onClick={clickHandler} />
      </div>
    );
  }
}

export default Results;
