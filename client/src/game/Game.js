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
      roundNumber: 1,
      correctBoxNumber: -1,
      currentHint: "",
      soundEnabled: true
    };
  }

  startGame() {
    this.setState({
      hasStarted: true
    });
    this.randomizeBox();

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

  randomizeBox() {
    this.setState({
      correctBoxNumber: Math.floor(Math.random() * 4) + 1
    })
  }

  validateAnswer(number) {
    let correct = number === this.state.correctBoxNumber;
    let score = this.state.score;

    this.setState({
      score: correct ? score + 5 : score - 1
    });
  }

  render() {
    const { hasStarted, hasEnded, seconds, score, currentHint, soundEnabled } = this.state;

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

        {hasStarted && !hasEnded && <HintBox hint={currentHint}></HintBox>}

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
