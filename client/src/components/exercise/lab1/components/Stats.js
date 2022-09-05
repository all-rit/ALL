import React, {Component} from 'react';

import {
  MILLISECONDS_IN_A_SECOND,
  TIMEOUT_MIN_MS,
  TIMER_SECONDS,
} from '../../../../constants/lab1';

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
      width: this.calculatePercentage(time).toString() + '%',
    };

    if (!visible) return null;

    return (
      <div className="stats">
        <div className="stats__timer">
          <div className="stats__countdown" style={countdown_style} />
        </div>

        <div className="stats__container">
          <div className="stats__column">
            <p className="stats__category">Score</p>
            <p className="stats__result">{score}</p>
          </div>

          <div className="stats__column">
            <p className="stats__category">Correct Answers</p>
            <p className="stats__result">{correctAnswers}</p>
          </div>

          <div className="stats__column">
            <p className="stats__category">Incorrect Answers</p>
            <p className="stats__result">{incorrectAnswers}</p>
          </div>

          <div className="stats__column">
            <p className="stats__category">Round</p>
            <p className="stats__result">{roundNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
