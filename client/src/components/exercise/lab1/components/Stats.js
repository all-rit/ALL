/* eslint-disable react/prop-types */
import React, { Component } from "react";

import {
  MILLISECONDS_IN_A_SECOND,
  TIMEOUT_MIN_MS,
  TIMER_SECONDS,
} from "../../../../constants/lab1";

class Stats extends Component {
  calculatePercentage(time) {
    const percentage =
      (time / ((TIMER_SECONDS * MILLISECONDS_IN_A_SECOND) / TIMEOUT_MIN_MS)) *
      100;

    return percentage;
  }

  render() {
    const {
      visible,
      score,
      correctAnswers,
      incorrectAnswers,
      roundNumber,
      time,
    } = this.props;
    const countdown_style = {
      width: this.calculatePercentage(time).toString() + "%",
    };

    if (!visible) return null;

    return (
      <div className="tw-w-full tw-p-0 tw-m-0 tw-left-0 tw-bottom-0 tw-rounded-b-xl tw-bg-[#ddd] tw-body-text">
        <div className="stats__timer">
          <div className="stats__countdown" style={countdown_style} />
        </div>

        <div className="stats__container tw-w-full tw-h-[3rem] tw-items-center tw-sub-title tw-font-bold">
          <div className="tw-flex">
            <p>Score:&nbsp;</p>
            <p>{score}</p>
          </div>

          <div className="tw-flex">
            <p>Correct:&nbsp;</p>
            <p>{correctAnswers}</p>
          </div>

          <div className="tw-flex">
            <p>Incorrect:&nbsp;</p>
            <p>{incorrectAnswers}</p>
          </div>

          <div className="tw-flex">
            <p>Round:&nbsp;</p>
            <p>{roundNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
