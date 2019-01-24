import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';

import BuzzSound from './buzz.wav';

import {
  STARTED,
  ENDED,
  IDLE,
  HINT_TIMER_MILLISECONDS,
  HINT_BOX_TIMER_MILLISECONDS,
  POSSIBLE_HINTS,
  BOX_HINT_COMBINATIONS
} from './GameConstants';
import {
  startGame,
  endGame,
  resetGame,
  timerTick,
  increaseScore,
  decreaseScore,
  incrementCorrectAnswers,
  incrementIncorrectAnswers,
  startNewRound,
  updateRoundLength,
  updateHintBoxStatus,
  updateHint,
  updateHintUsed,
  updateBox,
  updateSoundStatus
} from './GameActions';
import { updateCodeEditorStatus } from '../codeeditor/CodeEditorActions';

import Conditional from '../helpers/Conditional';

import Box from './box/Box';
import HintBox from './hintbox/HintBox';
import Results from './results/Results';
import Stats from './stats/Stats';

const mapStateToProps = (state) => {
  return {
    gameState: state.game.gameState,
    startedAt: state.game.startedAt,
    endedAt: state.game.endedAt,
    seconds: state.game.seconds,
    score: state.game.score,
    roundNumber: state.game.roundNumber,
    roundLength: state.game.roundLength,
    correctAnswers: state.game.correctAnswers,
    incorrectAnswers: state.game.incorrectAnswers,
    correctBoxNumber: state.game.correctBoxNumber,
    currentHint: state.game.currentHint,
    isHintBoxOpen: state.game.isHintBoxOpen,
    hintUsed: state.game.hintUsed,
    soundEnabled: state.game.soundEnabled
  };
};

const mapDispatchToProps = {
  startGame,
  endGame,
  resetGame,
  timerTick,
  increaseScore,
  decreaseScore,
  incrementCorrectAnswers,
  incrementIncorrectAnswers,
  startNewRound,
  updateRoundLength,
  updateHintBoxStatus,
  updateHint,
  updateHintUsed,
  updateBox,
  updateSoundStatus,
  updateCodeEditorStatus
};

class Game extends Component {
  constructor(props) {
    super(props);

    this.audio = new Audio(BuzzSound);
    this.audio.loop = false;
  }

  startGame() {
    const { startGame, endGame, timerTick } = this.props;

    // Log data to database
    fetch('/game/start', {
      method: 'POST'
    }).then((res) => {
      console.log(res);

      startGame();
      this.startNewRound();
      
      this.timer = setInterval(() => {
        timerTick();
  
        if (this.props.seconds === 0) {
          endGame();
          clearInterval(this.timer);
          clearInterval(this.hintTimer);
        }
      }, 1000);
    }).catch((err) => {
      console.log(err);
    })
  }

  resetGame() {
    const { resetGame } = this.props;

    resetGame();
  }

  startNewRound() {
    const { startNewRound, soundEnabled, updateHint, updateRoundLength, roundLength } = this.props;

    if (soundEnabled) {
      this.audio.load();
    }

    startNewRound();
    updateHint();
    updateRoundLength(0);

    this.closeHintBox();
    this.randomizeBox();

    this.hintTimer = setInterval(() => {
      const chance = Math.floor(Math.random() * 2) + 1;

      if (chance > 1) {
        this.randomizeHint();
        clearInterval(this.hintTimer);
      }
    }, HINT_TIMER_MILLISECONDS)

    this.roundTimer = setInterval(() => {
      updateRoundLength(roundLength + 1);
    }, 1);

    // Log data to database
    fetch('/game/round', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        soundOption: soundEnabled
      })
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  randomizeBox() {
    const { updateBox } = this.props;

    updateBox(Math.floor(Math.random() * 4) + 1);
  }

  randomizeHint() {
    const { correctBoxNumber, updateHint, soundEnabled } = this.props;
    const hintNumber = Math.floor(Math.random() * 3);
    const hint = POSSIBLE_HINTS[BOX_HINT_COMBINATIONS[correctBoxNumber][hintNumber]];

    this.closeHintBox();
    updateHint(hint);

    if (soundEnabled) {
      this.audio.play();
    }
  }

  openHintBox() {
    const { updateHintBoxStatus, decreaseScore, updateHintUsed } = this.props;

    updateHintBoxStatus(true);
    updateHintUsed(true);
    decreaseScore();

    this.hintBoxTimer = setTimeout(this.closeHintBox.bind(this), HINT_BOX_TIMER_MILLISECONDS);
  }

  closeHintBox() {
    const { updateHintBoxStatus } = this.props;

    clearTimeout(this.hintBoxTimer);
    updateHintBoxStatus(false);
  }

  toggleSound() {
    const { updateSoundStatus, soundEnabled } = this.props;

    updateSoundStatus(!soundEnabled);
  }

  validateAnswer(number) {
    const { correctBoxNumber, increaseScore, decreaseScore, incrementCorrectAnswers, incrementIncorrectAnswers, score, hintUsed, roundLength } = this.props;

    const correct = number === correctBoxNumber;

    if (correct) {
      clearInterval(this.hintTimer);
      clearInterval(this.roundTimer);
      this.audio.pause();
      this.startNewRound();
      increaseScore();
      incrementCorrectAnswers();
    } else {
      decreaseScore();
      incrementIncorrectAnswers();
    }

    // Log data to database
    fetch('/game/choice', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        score: score,
        time: roundLength,
        hintUsed: hintUsed,
        boxNumber: number,
        correct: correct
      })
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  openCodeEditor() {
    const { updateCodeEditorStatus } = this.props;

    updateCodeEditorStatus(true);
  }

  render() {
    const { 
      gameState,
      seconds,
      score,
      roundNumber,
      correctAnswers,
      incorrectAnswers,
      currentHint,
      isHintBoxOpen
    } = this.props;

    return (
      <div className="game">
        <Conditional if={gameState !== ENDED}>
  
          <Conditional if={gameState === IDLE}>
            <button onClick={this.openCodeEditor.bind(this)}>Repair</button>
            <button>How to Play?</button>
            <button onClick={this.startGame.bind(this)} className="game__start_button">Start</button>
          </Conditional>

          <Conditional if={gameState === STARTED}>
            <HintBox hint={currentHint}
                      isExtended={isHintBoxOpen}
                      onClickHandler={this.openHintBox.bind(this)} />
              
              <div className="game__boxes">
                <Box number={1} onClickHandler={this.validateAnswer.bind(this)} />
                <Box number={2} onClickHandler={this.validateAnswer.bind(this)} />
                <Box number={3} onClickHandler={this.validateAnswer.bind(this)} />
                <Box number={4} onClickHandler={this.validateAnswer.bind(this)} />
              </div>

            <Stats score={score}
                    correctAnswers={correctAnswers}
                    incorrectAnswers={incorrectAnswers}
                    roundNumber={roundNumber}
                    seconds={seconds} />
          </Conditional>
  
        </Conditional>

        <Conditional if={gameState === ENDED}>
          <Results correctAnswers={correctAnswers}
                    incorrectAnswers={incorrectAnswers}
                    score={score}
                    roundNumber={roundNumber}
                    resetGameHandler={this.resetGame.bind(this)} />
        </Conditional>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
