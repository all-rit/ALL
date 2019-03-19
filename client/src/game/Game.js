import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';

import Sound from '../assets/sounds/female.mp3';

import {
  PLAYING,
  ENDED,
  IDLE,
  COUNTDOWN,

  HINT_BOX_CLOSED,
  HINT_BOX_THINKING,
  HINT_BOX_OPEN,

  BOX_CORRECT,
  BOX_INCORRECT,

  MILLISECONDS_IN_A_SECOND,
  MILLISECONDS_MIN_VALUE,
  HINT_TIMER_MILLISECONDS,
  HINT_BOX_TIMER_MILLISECONDS,
  HINT_BOX_THINKING_TIMER_MILLISECONDS,
  POSSIBLE_HINTS,
  BOX_HINT_COMBINATIONS,
  CONGRATULATION_MESSAGES
} from './GameConstants';
import {
  updateStartAt,
  updateEndAt,
  reset,
  updateGameState,
  resetCountdownTimer,
  countdownTimerTick,
  timerTick,
  updateScore,
  incrementCorrectAnswers,
  incrementIncorrectAnswers,
  startNewRound,
  updateRoundLength,
  updateHintBoxStatus,
  updateHint,
  updateHintUsed,
  updateBox,
  updateBoxStatus,
  updateSoundStatus,
  updateInstructionsStatus,
  updateCongratulationMessage
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
    time: state.game.time,
    countdownTime: state.game.countdownTime,
    score: state.game.score,
    roundNumber: state.game.roundNumber,
    roundLength: state.game.roundLength,
    correctAnswers: state.game.correctAnswers,
    incorrectAnswers: state.game.incorrectAnswers,
    correctBoxNumber: state.game.correctBoxNumber,
    currentHint: state.game.currentHint,
    hintBoxState: state.game.hintBoxState,
    hintUsed: state.game.hintUsed,
    soundEnabled: state.game.soundEnabled,
    boxes: state.game.boxes,
    numberOfPlays: state.game.numberOfPlays,
    congratulationMessage: state.game.congratulationMessage
  };
};

const mapDispatchToProps = {
  updateStartAt,
  updateEndAt,
  reset,
  updateGameState,
  resetCountdownTimer,
  countdownTimerTick,
  timerTick,
  updateScore,
  incrementCorrectAnswers,
  incrementIncorrectAnswers,
  startNewRound,
  updateRoundLength,
  updateHintBoxStatus,
  updateHint,
  updateHintUsed,
  updateBox,
  updateBoxStatus,
  updateSoundStatus,
  updateCodeEditorStatus,
  updateInstructionsStatus,
  updateCongratulationMessage
};

class Game extends Component {
  constructor(props) {
    super(props);

    this.audio = new Audio(Sound);
    this.audio.loop = false;
  }

  /**
   * Starts the game.
   * 
   * Flow:
   * 1. Call the '/game/start' endpoint to store the game data.
   * 2. Update the variable 'startedAt' using the 'updateStartAt()' method.
   * 3. Start a new round.
   * 4. Create a timer for decreasing the game's timer.
   *   a. Only decrement the time if the game state is PLAYING.
   *   b. If the time runs out, end the game.
   */
  startGame() {
    const { updateStartAt, updateEndAt, timerTick } = this.props;

    fetch(process.env.REACT_APP_SERVER_URL + '/game/start', {
      method: 'POST',
      credentials: 'include'
    }).then((res) => {
      console.log(res);

      updateStartAt();
      this.startRound();

      this.timer = setInterval(() => {
        const { gameState, time, updateGameState } = this.props;

        if (gameState === PLAYING) {
          timerTick();
        }

        if (time <= 0) {
          updateEndAt();
          updateGameState(ENDED);

          // Clear all timers
          clearInterval(this.timer);
          clearInterval(this.hintTimer);
          clearInterval(this.countdownTimer);
          clearInterval(this.roundTimer);
        }
      }, MILLISECONDS_MIN_VALUE);
    }).catch((err) => {
      console.log(err);
    });
  }

  /**
   * Starts a new round.
   * 
   * Flow:
   * 1. Load the sound, if the sound option is enabled.
   * 2. Set the hint to an empty string.
   * 3. Update the round's time length to zero.
   * 4. Close the hint box.
   * 5. Randomize the chosen box.
   * 6. Increment round number + initialize boxes using 'startNewRound()' method.
   * 7. Create a hint timer
   *   a. The hint is randomized with a 50% chance.
   *   b. If chance is above 1, end the timer.
   * 8. Create a round timer
   *   a. Increment the round length by 1 every 1 ms.
   * 9. Log the info to the database.
   */
  startRound() {
    const { startNewRound, soundEnabled, updateHint, updateRoundLength } = this.props;

    if (soundEnabled)
      this.audio.load();

    updateHint();
    updateRoundLength(0);
    this.closeHintBox();
    this.randomizeBox();

    startNewRound();

    this.hintTimer = setInterval(() => {
      const chance = Math.floor(Math.random() * 2) + 1;

      if (chance > 1) {
        this.randomizeHint();
        clearInterval(this.hintTimer);
      }
    }, HINT_TIMER_MILLISECONDS)

    this.roundTimer = setInterval(() => {
      const { roundLength } = this.props;

      updateRoundLength(roundLength + MILLISECONDS_MIN_VALUE);
    }, MILLISECONDS_MIN_VALUE);

    fetch(process.env.REACT_APP_SERVER_URL + '/game/round', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        soundOption: soundEnabled
      }),
      credentials: 'include'
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  /**
   * Used for playing again.
   */
  resetGame() {
    const { reset } = this.props;

    reset();
  }

  /**
   * Starts a countdown.
   * 
   * Flow:
   * 1. Reset the countdown timer.
   * 2. Update the game state to 'COUNTDOWN'.
   * 3. Create a new timer for countdown timer tick.
   */
  startCountdown() {
    const { updateGameState, countdownTimerTick, resetCountdownTimer } = this.props;

    resetCountdownTimer();
    updateGameState(COUNTDOWN);

    this.countdownTimer = setInterval(() => {
      const { roundNumber, countdownTime, updateGameState } = this.props;

      if (countdownTime <= 0) {
        updateGameState(PLAYING);

        if (roundNumber === 0) {
          this.startGame();
        } else {
          this.startRound();
        }

        clearInterval(this.countdownTimer);
      }

      countdownTimerTick();
    }, MILLISECONDS_IN_A_SECOND);
  }

  /**
   * Used for randomizing the chosen box with treasure.
   */
  randomizeBox() {
    const { updateBox } = this.props;
    const number = Math.floor(Math.random() * 4) + 1;

    updateBox(number);
  }

  /**
   * Randomizes the hint.
   * 
   * Flow:
   * 1. Randomize a number from 0 to 3.
   * 2. Close the hint box.
   * 3. Delete the hint box timer.
   * 4. Update the hint.
   * 5. Play the audio cue, if enabled.
   */
  randomizeHint() {
    const { correctBoxNumber, updateHint, soundEnabled } = this.props;
    const hintNumber = Math.floor(Math.random() * 3);
    const hint = POSSIBLE_HINTS[BOX_HINT_COMBINATIONS[correctBoxNumber][hintNumber]];

    this.closeHintBox();
    clearTimeout(this.hintBoxTimer);
    updateHint(hint);

    if (soundEnabled) {
      this.audio.play();
    }
  }

  /**
   * Opens the hint box.
   * 
   * Flow:
   * 1. Update the hint box status to 'HINT_BOX_THINKING'.
   * 2. Update the variable 'hintUsed' to true.
   * 3. Decrease score.
   * 4. Create a hint box thinking timer.
   *   a. Open the hint box in a specified amount of milliseconds.
   *   b. Update the hint box status to 'HINT_BOX_OPEN'.
   *   b. Create a new timer for closing the hint box.
   */
  openHintBox() {
    const { updateHintBoxStatus, updateHintUsed, updateScore, score } = this.props;

    updateHintBoxStatus(HINT_BOX_THINKING);
    updateHintUsed(true);
    updateScore(score - 25);

    this.hintBoxThinkingTimer = setTimeout(() => {
      updateHintBoxStatus(HINT_BOX_OPEN);

      this.hintBoxTimer = setTimeout(this.closeHintBox.bind(this), HINT_BOX_TIMER_MILLISECONDS);
    }, HINT_BOX_THINKING_TIMER_MILLISECONDS);
  }

  /**
   * Closes the hint box.
   * 
   * Flow:
   * 1. Update the hint box status to 'HINT_BOX_CLOSED'.
   */
  closeHintBox() {
    const { updateHintBoxStatus } = this.props;

    updateHintBoxStatus(HINT_BOX_CLOSED);
  }

  /**
   * Calculates score if answer is correct
   */
  calculateScore() {
    const { roundLength } = this.props;
    const seconds = roundLength / MILLISECONDS_IN_A_SECOND;
    let score = 0;

    if (seconds < 1) {
      score = 150;
    } else if (seconds < 2) {
      score = 125;
    } else if (seconds < 3) {
      score = 100;
    } else if (seconds < 4) {
      score = 75;
    } else if (seconds < 5) {
      score = 50;
    } else {
      score = 25;
    }

    return score;
  }

  /**
   * Update the congratulation message.
   */
  changeCongratulationMessage() {
    const { updateCongratulationMessage } = this.props;
    let message = CONGRATULATION_MESSAGES[Math.floor(Math.random() * CONGRATULATION_MESSAGES.length)];

    updateCongratulationMessage(message);
  }

  /**
   * Validates the user's answer.
   * 
   * Flow:
   * 1. If correct:
   *   a. Update the box status to 'BOX_CORRECT' based on the number.
   *   b. Clear intervals on Hint & Round timers
   *   c. Pause the audio.
   *   d. Increase the score using the 'updateScore()' method.
   *   e. Increase the number of correct answers.
   *   f. Proceed to the countdown.
   * 2. If wrong:
   *   a. Update the box status to 'BOX_INCORRECT' based on the number.
   *   b. Decrease the score using the 'updateScore()' method.
   *   c. Increase the number of incorrect answers.
   * 3. Log the choice to the database.
   */
  validateAnswer(number) {
    const { correctBoxNumber, updateScore, incrementCorrectAnswers, incrementIncorrectAnswers, score, hintUsed, roundLength, updateBoxStatus } = this.props;

    const correct = (number === correctBoxNumber);

    if (correct) {
      updateBoxStatus(number, BOX_CORRECT);

      clearInterval(this.hintTimer);
      clearInterval(this.roundTimer);

      this.audio.pause();

      updateScore(score + this.calculateScore());
      incrementCorrectAnswers();

      this.changeCongratulationMessage();
      this.startCountdown();
    } else {
      updateBoxStatus(number, BOX_INCORRECT);
      updateScore(score - 50);
      incrementIncorrectAnswers();
    }

    // Log data to database
    fetch(process.env.REACT_APP_SERVER_URL + '/game/choice', {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
        score: score,
        time: roundLength,
        hintUsed: hintUsed,
        boxNumber: number,
        correct: correct
      }),
      credentials: 'include'
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  /**
   * Open the code editor.
   */
  openCodeEditor() {
    const { updateCodeEditorStatus } = this.props;

    updateCodeEditorStatus(true);
  }

  /**
   * Open the instructions.
   */
  openInstructions() {
    const { updateInstructionsStatus } = this.props;

    updateInstructionsStatus(true);
  }

  render() {
    const { 
      gameState,
      time,
      countdownTime,
      score,
      roundNumber,
      correctAnswers,
      incorrectAnswers,
      currentHint,
      hintBoxState,
      boxes,
      numberOfPlays,
      congratulationMessage
    } = this.props;
    const boxesList = Object.keys(boxes).map(key => {
      return <Box key={key} number={parseInt(key)} onClickHandler={this.validateAnswer.bind(this)} state={boxes[key]}></Box>
    });

    return (
      <div className="game">
        <Conditional if={gameState !== ENDED}>
  
          <Conditional if={gameState === IDLE}>
            <Conditional if={numberOfPlays >= 2}>
              <button onClick={this.openCodeEditor.bind(this)}>Repair</button>
            </Conditional>
            <button onClick={this.openInstructions.bind(this)}>How to Play?</button>
            <button onClick={this.startCountdown.bind(this)} className="game__start_button">Start</button>
          </Conditional>

          <Conditional if={gameState === COUNTDOWN}>
            <Conditional if={congratulationMessage !== ""}>
              <div className="game__congratulation">
                { congratulationMessage }
              </div>
            </Conditional>
            <div className="game__countdown">
              { countdownTime }
            </div>
          </Conditional>

          <Conditional if={gameState === PLAYING}>
            <HintBox hint={currentHint}
                      state={hintBoxState}
                      onClickHandler={this.openHintBox.bind(this)} />
              
              <div className="game__boxes">
                { boxesList }
              </div>
          </Conditional>

          <Conditional if={gameState !== IDLE}>
            <Stats score={score}
                    correctAnswers={correctAnswers}
                    incorrectAnswers={incorrectAnswers}
                    roundNumber={roundNumber}
                    time={time} />
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
