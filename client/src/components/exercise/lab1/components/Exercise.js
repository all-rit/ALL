/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import ExerciseService from "../../../../services/lab1/ExerciseService";
import UserLabService from "../../../../services/UserLabService";
import ExerciseButtons from "./ExerciseButtons";
import Countdown from "./Countdown";
import HintBox from "./HintBox";
import Boxes from "./Boxes";
import Stats from "./Stats";
import Results from "./Results";

import Sound from "../../../../assets/sounds/female.mp3";

import {
  EXERCISE_PLAYING,
  EXERCISE_ENDED,
  EXERCISE_IDLE,
  EXERCISE_COUNTDOWN,
  BOX_CORRECT,
  BOX_INCORRECT,
  BOX_REVEALED,
  BOX_LOCKED,
  BOX_UNOPENED,
  BOXES_NUM_VALUE,
  MILLISECONDS_IN_A_SECOND,
  TIMEOUT_MIN_MS,
  HINT_BOX_THINKING_TIMER_SECONDS,
  CONGRATULATION_MESSAGES,
  HINT_BOX_THINKING,
  HINT_BOX_OPEN,
  HINT_BOX_CLOSED,
  OPEN_HINT_BOX_DELAY,
  LAB_ID,
} from "../../../../constants/lab1";

class Exercise extends Component {
  constructor(props) {
    super(props);

    this.audio = new Audio(Sound);
    this.audio.loop = false;
  }

  startExercise() {
    // Proceed with starting the Exercise
    this.startRound();
    this.timer = setInterval(() => {
      const { data, handlers, user } = this.props;

      if (data.state === EXERCISE_PLAYING) handlers.tick();

      if (data.time <= 0) {
        handlers.updateState(EXERCISE_ENDED);
        UserLabService.complete_exercise(LAB_ID);
        if (user?.firstname !== null && user !== null) {
          UserLabService.user_complete_exercise(user.userid, LAB_ID);
        }
        ExerciseService.updateEndExerciseScore(data.score);
        // Clear all timers
        clearInterval(this.timer);
        clearInterval(this.countdownTimer);
      }
    }, TIMEOUT_MIN_MS);
  }

  startRound() {
    const { data, handlers } = this.props;
    const chance = Math.floor(Math.random() * 2) + 1;

    // Proceed with starting a new round
    handlers.updateHintBoxStatus(HINT_BOX_CLOSED);
    handlers.resetRoundTimer();
    handlers.hideBox();
    handlers.startNewRound();
    this.randomizeBox();

    // Load audio if sound is enabled
    if (data.soundEnabled) this.audio.load();

    // Play the audio cue based on chance
    if (chance > 1) {
      handlers.revealBox();

      if (data.soundEnabled) this.audio.play();
    }
  }

  startCountdown() {
    const { data, handlers } = this.props;

    // Reset countdown timer back to three and change the exercise state
    handlers.resetCountdownTimer();
    handlers.updateState(EXERCISE_COUNTDOWN);

    if (data.roundNumber === 0) {
      // Create a new exercise entry in the database
      ExerciseService.createExercise(data.plays);
    }

    // We still have to create a new timer, don't we?
    this.countdownTimer = setInterval(() => {
      const { data } = this.props;

      handlers.countdownTick();

      if (data.countdownTime <= 0) {
        handlers.updateState(EXERCISE_PLAYING);

        // Create a new round entry in the database
        ExerciseService.createRound(data.soundEnabled);

        if (data.roundNumber === 0) {
          this.startExercise();
        } else {
          this.startRound();
        }

        clearInterval(this.countdownTimer);
      }
    }, MILLISECONDS_IN_A_SECOND);
  }

  resetExercise() {
    const { data, handlers } = this.props;

    // Stop the round timer
    clearInterval(this.roundTimer);

    // Store the results and reset the exercise
    handlers.addResult({
      score: data.score,
      correctAnswers: data.correctAnswers,
      incorrectAnswers: data.incorrectAnswers,
      roundNumber: data.roundNumber,
      soundEnabled: data.soundEnabled,
    });
    handlers.reset();

    // Disable sound for a certain playthrough
    if (data.plays === 0) handlers.toggleSound();
  }

  validateAnswer(number) {
    const { data, handlers } = this.props;
    const correct = number === data.correctBoxNumber;

    let score = data.score;
    if (correct) {
      score = score + this.calculateScore();
      handlers.updateBoxStatus(number, BOX_CORRECT);
      clearInterval(this.roundTimer);
      this.audio.pause();
      handlers.updateScore(score);
      handlers.incrementCorrectAnswers();

      this.updateCongratulationMessage();
      this.startCountdown();
    } else {
      score = score - 75;
      handlers.updateBoxStatus(number, BOX_INCORRECT);
      handlers.updateScore(score);
      handlers.incrementIncorrectAnswers();
    }
    // Create a new choice entry in the database
    ExerciseService.createChoice(score, data.hintUsed, number, correct);
  }

  calculateScore() {
    const { data } = this.props;
    const seconds = data.roundTime / MILLISECONDS_IN_A_SECOND;
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

  randomizeBox() {
    const { handlers } = this.props;
    const number = Math.floor(Math.random() * BOXES_NUM_VALUE) + 1;

    handlers.updateBox(number);
  }

  lockBoxes() {
    const { data, handlers } = this.props;

    Object.keys(data.boxes).forEach((box) => {
      if (data.boxes[box] === BOX_UNOPENED) {
        handlers.updateBoxStatus(box, BOX_LOCKED);
      }
    });
  }

  unlockBoxes() {
    const { data, handlers } = this.props;

    Object.keys(data.boxes).forEach((box) => {
      if (data.boxes[box] === BOX_LOCKED) {
        handlers.updateBoxStatus(box, BOX_UNOPENED);
      }
    });
  }

  openHintBox() {
    const { data, handlers } = this.props;

    // If there is an available hint, just show it instantly
    if (data.boxRevealed) {
      handlers.updateHintBoxStatus(HINT_BOX_OPEN);
      handlers.updateHintUsed(true);
      handlers.updateBoxStatus(data.correctBoxNumber, BOX_REVEALED);
    } else {
      // Otherwise, have the hint box "think"
      // Update hint box status & used status and update the score
      handlers.updateHintBoxStatus(HINT_BOX_THINKING);
      handlers.updateHintUsed(true);
      handlers.updateScore(data.score - 25);

      // Lock the unopened boxes
      this.lockBoxes();

      // Create a timer for the hint box to "think"
      setTimeout(() => {
        const { handlers } = this.props;

        // Update hint box status and unlock boxes
        handlers.updateHintBoxStatus(HINT_BOX_OPEN);

        setTimeout(() => {
          this.unlockBoxes();
        }, OPEN_HINT_BOX_DELAY * MILLISECONDS_IN_A_SECOND);
      }, HINT_BOX_THINKING_TIMER_SECONDS * MILLISECONDS_IN_A_SECOND);
    }
  }

  updateCongratulationMessage() {
    const { handlers } = this.props;
    const message =
      CONGRATULATION_MESSAGES[
        Math.floor(Math.random() * CONGRATULATION_MESSAGES.length)
      ];

    handlers.updateCongratulationMessage(message);
  }

  render() {
    const { data, handlers } = this.props;

    return (
      <div className="exercise">
        <ExerciseButtons
          disabled={this.props.data.repairError}
          visible={data.state === EXERCISE_IDLE}
          plays={data.plays}
          repairApplied={data.changesApplied}
          openRepairHandler={handlers.openRepair}
          openInstructionsHandler={handlers.openInstructions}
          startExerciseHandler={this.startCountdown.bind(this)}
        />
        <Countdown
          visible={data.state === EXERCISE_COUNTDOWN}
          time={data.countdownTime}
          message={data.congratulationMessage}
        />
        <HintBox
          visible={data.state === EXERCISE_PLAYING}
          state={data.hintBoxStatus}
          boxRevealed={data.boxRevealed}
          availableMessage={data.availableMessage}
          unavailableMessage={data.unavailableMessage}
          availableBackgroundColor={data.availableBackgroundColor}
          unavailableBackgroundColor={data.unavailableBackgroundColor}
          clickHandler={this.openHintBox.bind(this)}
        />
        <Boxes
          visible={data.state === EXERCISE_PLAYING}
          elements={data.boxes}
          clickHandler={this.validateAnswer.bind(this)}
        />
        <Stats
          visible={
            data.state !== EXERCISE_IDLE && data.state !== EXERCISE_ENDED
          }
          score={data.score}
          correctAnswers={data.correctAnswers}
          incorrectAnswers={data.incorrectAnswers}
          roundNumber={data.roundNumber}
          time={data.time}
        />
        <Results
          visible={data.state === EXERCISE_ENDED}
          score={data.score}
          correctAnswers={data.correctAnswers}
          incorrectAnswers={data.incorrectAnswers}
          roundNumber={data.roundNumber}
          clickHandler={this.resetExercise.bind(this)}
        />
      </div>
    );
  }
}

export default Exercise;
