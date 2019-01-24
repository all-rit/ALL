import React, { Component } from 'react';
import './Stats.css';

import { TIMER_SECONDS } from '../GameConstants';

class Stats extends Component {
  calculatePercentage(seconds) {
    return (seconds / TIMER_SECONDS) * 100;
  }

  render() {
    const { score, correctAnswers, incorrectAnswers, roundNumber, seconds } = this.props;

    const countdown_style = {
      width: this.calculatePercentage(seconds).toString() + '%'
    };

    return (
      <div className="stats">
        <div className="stats__timer">
          <div className="stats__countdown" style={ countdown_style }></div>
        </div>
        <div className="stats__container">
          <div className="stats__column">
            <p className="stats__category">Score</p>
            <p className="stats__result">{ score }</p>
          </div>
          <div className="stats__column">
            <p className="stats__category">Correct Answers</p>
            <p className="stats__result">{ correctAnswers }</p>
          </div>
          <div className="stats__column">
            <p className="stats__category">Incorrect Answers</p>
            <p className="stats__result">{ incorrectAnswers }</p>
          </div>
          <div className="stats__column">
            <p className="stats__category">Round</p>
            <p className="stats__result">{ roundNumber }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
