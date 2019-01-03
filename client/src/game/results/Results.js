import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
  handleClick() {
    this.props.resetGameHandler();
  }

  render() {
    const { correctAnswers, incorrectAnswers, score, roundNumber } = this.props;

    return (
      <div class="results">
        <p class="results__score">Your final score was {score}!</p>
        <p class="results__answers">You had {correctAnswers} correct answers and {incorrectAnswers} incorrect answers in {roundNumber} rounds.</p>

        <button onClick={this.handleClick.bind(this)}>Play Again?</button>
      </div>
    );
  }
}

export default Results;
