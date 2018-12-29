import React, { Component } from 'react';
import './Game.css';

import Box from './box/Box';
import HintBox from './hintbox/HintBox';
import Score from './score/Score';
import SoundOption from './soundoption/SoundOption';
import Timer from './timer/Timer';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasStarted: false,
      hasEnded: false,
      seconds: 60,
      score: 0,
      roundNumber: 0,
      correctBoxNumber: -1,
      currentHint: "",
      isHintBoxOpen: false,
      soundEnabled: true,
      possibleHints: ["The box is an odd number.", "The box is an even number.", "The box is one of the two on the left/right.",
                      "The box is not at both ends.", "The box is white.", "The box is black."],
      boxHintCombinations: {
        1: [0, 2, 4],
        2: [1, 3, 5],
        3: [0, 3, 5],
        4: [1, 2, 4]
      }
    };
  }

  /**
   * Starts the game.
   * - Update hasStarted to true.
   * - Start a new round using startNewRound().
   * - Starts countdown timer.
   */
  startGame() {
    this.setState({
      hasStarted: true
    });
    this.startNewRound();

    this.timer = setInterval(() => {
      const seconds = this.state.seconds - 1;

      if (seconds < 0) {
        clearInterval(this.timer);
      }

      this.setState({
        seconds: seconds > 0 ? seconds : 0
      });
    }, 1000);
  }

  /**
   * Starts a new round.
   * - Increments round number.
   * - Randomizes correct box number using randomizeBox().
   * - Starts hint timer that randomizes a hint using randomizeHint()
   *   with 50% chance of appearing every 3 seconds.
   */
  startNewRound() {
    this.setState({
      roundNumber: this.state.roundNumber + 1,
      currentHint: "",
    });
    this.closeHintBox();
    this.randomizeBox();

    this.hintTimer = setInterval(() => {
      const chance = Math.floor(Math.random() * 2) + 1;

      if (chance > 1) {
        this.randomizeHint();
        clearInterval(this.hintTimer);
      }
    }, 3000)
  }

  /**
   * Randomizes correct box number.
   */
  randomizeBox() {
    this.setState({
      correctBoxNumber: Math.floor(Math.random() * 4) + 1
    });
  }

  /**
   * Randomizes hint.
   * - Collapse hint box if hint is available.
   */
  randomizeHint() {
    const hintNumber = Math.floor(Math.random() * 3);
    const { boxHintCombinations, correctBoxNumber, possibleHints } = this.state;
    const hint = possibleHints[boxHintCombinations[correctBoxNumber][hintNumber]];

    this.closeHintBox();
    this.setState({
      currentHint: hint,
    });
  }

  /**
   * Opens hint box.
   * - Show hint if available.
   * - Decrement score by 1.
   * - Collapse itself after 3 seconds.
   */
  openHintBox() {
    this.setState({
      isHintBoxOpen: true,
      score: this.state.score - 1
    });

    this.hintBoxTimer = setTimeout(this.closeHintBox.bind(this), 3000);
  }

  /**
   * Closes hint box.
   */
  closeHintBox() {
    clearTimeout(this.hintBoxTimer);
    this.setState({
      isHintBoxOpen: false
    });
  }

  /**
   * Enables sound.
   */
  enableSound() {

  }

  /**
   * Disables sound.
   */
  disableSound() {
    
  }

  /**
   * Compares the correct box number with user's answer.
   * - If correct, start a new round using startNewRound().
   *   Increment score by 5.
   * - If incorrect, decrement score by 1.
   */
  validateAnswer(number) {
    let correct = number === this.state.correctBoxNumber;
    let score = this.state.score;

    if (correct) {
      this.startNewRound();
    }

    this.setState({
      score: correct ? score + 5 : score - 1
    });
  }

  /**
   * Render view.
   */
  render() {
    const { hasStarted, hasEnded, seconds, score, currentHint, soundEnabled, isHintBoxOpen } = this.state;

    return (
      <div className="game">
        <div className="game__header">
          <Score score={score}></Score>
          <Timer seconds={seconds}></Timer>
          <SoundOption enabled={soundEnabled}></SoundOption>
        </div>

        <div className="game__instructions">
          <p>Instructions: Find the box with the hidden item</p>

          {!hasStarted && <button onClick={this.startGame.bind(this)} className="game__start_button">Start</button>}
        </div>

        {hasStarted && !hasEnded &&
        <HintBox hint={currentHint}
                  isExtended={isHintBoxOpen}
                  onClickHandler={this.openHintBox.bind(this)}></HintBox>}

        {hasStarted && !hasEnded &&
        <div className="game__boxes">
          <Box number={1} onClickHandler={this.validateAnswer.bind(this)}></Box>
          <Box number={2} onClickHandler={this.validateAnswer.bind(this)}></Box>
          <Box number={3} onClickHandler={this.validateAnswer.bind(this)}></Box>
          <Box number={4} onClickHandler={this.validateAnswer.bind(this)}></Box>
        </div>
        }
      </div>
    );
  }
}

export default Game;
