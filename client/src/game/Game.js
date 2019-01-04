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
  updateHintBoxStatus,
  updateHint,
  updateBox,
  updateSoundStatus
} from './GameActions';

import Conditional from '../helpers/Conditional';

import Box from './box/Box';
import HintBox from './hintbox/HintBox';
import Results from './results/Results';
import Score from './score/Score';
import SoundOption from './soundoption/SoundOption';
import Timer from './timer/Timer';

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
    startedAt: state.startedAt,
    endedAt: state.endedAt,
    seconds: state.seconds,
    score: state.score,
    roundNumber: state.roundNumber,
    correctAnswers: state.correctAnswers,
    incorrectAnswers: state.incorrectAnswers,
    correctBoxNumber: state.correctBoxNumber,
    currentHint: state.currentHint,
    isHintBoxOpen: state.isHintBoxOpen,
    soundEnabled: state.soundEnabled
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
  updateHintBoxStatus,
  updateHint,
  updateBox,
  updateSoundStatus
};

class Game extends Component {
  constructor(props) {
    super(props);

    this.audio = new Audio(BuzzSound);
    this.audio.loop = false;
  }

  startGame() {
    const { startGame, endGame, timerTick } = this.props;

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
  }

  resetGame() {
    const { resetGame } = this.props;

    resetGame();
  }

  startNewRound() {
    const { startNewRound, soundEnabled, updateHint } = this.props;

    if (soundEnabled) {
      this.audio.load();
    }

    startNewRound();
    updateHint();

    this.closeHintBox();
    this.randomizeBox();

    this.hintTimer = setInterval(() => {
      const chance = Math.floor(Math.random() * 2) + 1;

      if (chance > 1) {
        this.randomizeHint();
        clearInterval(this.hintTimer);
      }
    }, HINT_TIMER_MILLISECONDS)
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
    const { updateHintBoxStatus, decreaseScore } = this.props;

    updateHintBoxStatus(true);
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
    const { correctBoxNumber, increaseScore, decreaseScore, incrementCorrectAnswers, incrementIncorrectAnswers } = this.props;

    const correct = number === correctBoxNumber;

    if (correct) {
      clearInterval(this.hintTimer);
      this.audio.pause();
      this.startNewRound();
      increaseScore();
      incrementCorrectAnswers();
    } else {
      decreaseScore();
      incrementIncorrectAnswers();
    }
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
      isHintBoxOpen,
      soundEnabled
    } = this.props;

    return (
      <div className="game">
        <Conditional if={gameState !== ENDED}>
          <div className="game__header">
            <Score score={score} />
            <Timer seconds={seconds} />
            <SoundOption enabled={soundEnabled}
                          onClickHandler={this.toggleSound.bind(this)}
                          blocked={gameState === STARTED} />
          </div>

          <div className="game__instructions">
            <p>Instructions: Find the box with the hidden item</p>

            <Conditional if={gameState === IDLE}>
              <button onClick={this.startGame.bind(this)} className="game__start_button">Start</button>
            </Conditional>
          </div>

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
