import React, { useState } from "react";
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
  EXERCISE_ENDED,
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
import { useLab1StateContext } from "src/reducers/lab1/Lab1Context";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

/**
 * Exercise component represents the main exercise screen.
 * It manages the state and logic for the exercise.
 *
 * @returns {JSX.Element} The Exercise component.
 */
const Exercise = () => {
  const { state: lab1State, actions: lab1Actions } = useLab1StateContext();
  const { state: mainState } = useMainStateContext();
  const [countdownTimer, setCountDownTimer] = useState(null);
  const [roundTimer, setRoundTimer] = useState(null);
  const audio = new Audio(Sound);

  /**
   * Starts the exercise.
   *
   * @returns {void}
   */
  const startExercise = () => {
    // Proceed with starting the Exercise
    startRound();
    setRoundTimer(
      setInterval(() => {
        if (lab1State.exerciseState === EXERCISE_PLAYING) lab1Actions.tick();

        if (lab1State.time <= 0) {
          lab1Actions.updateState(EXERCISE_ENDED);
          UserLabService.complete_exercise(LAB_ID);
          if (mainState.user?.firstname !== null && mainState.user !== null) {
            UserLabService.user_complete_exercise(
              mainState.user.userid,
              LAB_ID
            );
          }
          ExerciseService.updateEndExerciseScore(lab1State.score);
          // Clear all timers
          clearInterval(roundTimer);
          clearInterval(countdownTimer);
        }
      }, TIMEOUT_MIN_MS)
    );
  };

  /**
   * Starts a new round in the exercise.
   */
  const startRound = () => {
    const chance = Math.floor(Math.random() * 2) + 1;

    // Proceed with starting a new round
    lab1Actions.updateHintBoxStatus(HINT_BOX_CLOSED);
    lab1Actions.resetRoundTimer();
    lab1Actions.hideBox();
    lab1Actions.startNewRound();
    randomizeBox();

    // Load audio if sound is enabled
    if (lab1State.soundEnabled) audio.load();

    // Play the audio cue based on chance
    if (chance > 1) {
      lab1Actions.revealBox();

      if (lab1State.soundEnabled) audio.play();
    }
  };

  /**
   * Starts the countdown timer for the exercise.
   */
  const startCountdown = () => {
    // Reset countdown timer back to three and change the exercise state
    lab1Actions.resetCountdownTimer();
    lab1Actions.updateState(EXERCISE_COUNTDOWN);

    if (lab1State.roundNumber === 0) {
      // Create a new exercise entry in the database
      ExerciseService.createExercise(lab1State.plays);
    }

    // We still have to create a new timer, don't we?
    setCountDownTimer(
      setInterval(() => {
        lab1Actions.countdownTick();

        if (lab1State.countdownTime <= 0) {
          lab1Actions.updateState(EXERCISE_PLAYING);

          // Create a new round entry in the database
          ExerciseService.createRound(lab1State.soundEnabled);

          if (lab1State.roundNumber === 0) {
            startExercise();
          } else {
            startRound();
          }

          clearInterval(countdownTimer);
        }
      }, MILLISECONDS_IN_A_SECOND)
    );
  };

  /**
   * Resets the exercise by stopping the round timer, storing the results, and resetting the exercise state.
   * If it's the first playthrough, it also disables the sound.
   */
  const resetExercise = () => {
    // Stop the round timer
    clearInterval(roundTimer);

    // Store the results and reset the exercise
    lab1Actions.addResult({
      score: lab1State.score,
      correctAnswers: lab1State.correctAnswers,
      incorrectAnswers: lab1State.incorrectAnswers,
      roundNumber: lab1State.roundNumber,
      soundEnabled: lab1State.soundEnabled,
    });
    lab1Actions.reset();

    // Disable sound for a certain playthrough
    if (lab1State.plays === 0) lab1Actions.toggleSound();
  };

  /**
   * Validates the user's answer for the exercise.
   * @param {number} number - The number chosen by the user.
   * @returns {void}
   */
  const validateAnswer = (number) => {
    const correct = number === lab1State.correctBoxNumber;

    let score = lab1State.score;
    if (correct) {
      score = score + calculateScore();
      lab1Actions.updateBoxStatus(number, BOX_CORRECT);
      clearInterval(roundTimer);
      audio.pause();
      lab1Actions.updateScore(score);
      lab1Actions.incrementCorrectAnswers();

      updateCongratulationMessage();
      startCountdown();
    } else {
      score = score - 75;
      lab1Actions.updateBoxStatus(number, BOX_INCORRECT);
      lab1Actions.updateScore(score);
      lab1Actions.incrementIncorrectAnswers();
    }
    // Create a new choice entry in the database
    ExerciseService.createChoice(score, lab1State.hintUsed, number, correct);
  };

  /**
   * Calculates the score based on the round time in seconds.
   * @returns {number} The calculated score.
   */
  const calculateScore = () => {
    const seconds = lab1State.roundTime / MILLISECONDS_IN_A_SECOND;
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
  };

  /**
   * Randomizes the box number and updates the box.
   */
  const randomizeBox = () => {
    const number = Math.floor(Math.random() * BOXES_NUM_VALUE) + 1;

    lab1Actions.updateBox(number);
  };

  /**
   * Locks all unopened boxes in the lab1State.
   */
  const lockBoxes = () => {
    Object.keys(lab1State.boxes).forEach((box) => {
      if (lab1State.boxes[box] === BOX_UNOPENED) {
        lab1Actions.updateBoxStatus(box, BOX_LOCKED);
      }
    });
  };

  /**
   * Unlocks all the boxes in the lab1State by updating their status to BOX_UNOPENED.
   */
  const unlockBoxes = () => {
    Object.keys(lab1State.boxes).forEach((box) => {
      if (lab1State.boxes[box] === BOX_LOCKED) {
        lab1Actions.updateBoxStatus(box, BOX_UNOPENED);
      }
    });
  };

  /**
   * Opens the hint box and performs necessary actions based on the current state.
   * If there is an available hint, it shows it instantly. Otherwise, it simulates the hint box "thinking"
   * and updates the hint box status, score, and locks/unlocks the boxes accordingly.
   */
  const openHintBox = () => {
    // If there is an available hint, just show it instantly
    if (lab1State.boxRevealed) {
      lab1Actions.updateHintBoxStatus(HINT_BOX_OPEN);
      lab1Actions.updateHintUsed(true);
      lab1Actions.updateBoxStatus(lab1State.correctBoxNumber, BOX_REVEALED);
    } else {
      // Otherwise, have the hint box "think"
      // Update hint box status & used status and update the score
      lab1Actions.updateHintBoxStatus(HINT_BOX_THINKING);
      lab1Actions.updateHintUsed(true);
      lab1Actions.updateScore(lab1State.score - 25);

      // Lock the unopened boxes
      lockBoxes();

      // Create a timer for the hint box to "think"
      setTimeout(() => {
        // Update hint box status and unlock boxes
        lab1Actions.updateHintBoxStatus(HINT_BOX_OPEN);

        setTimeout(() => {
          unlockBoxes();
        }, OPEN_HINT_BOX_DELAY * MILLISECONDS_IN_A_SECOND);
      }, HINT_BOX_THINKING_TIMER_SECONDS * MILLISECONDS_IN_A_SECOND);
    }
  };

  /**
   * Updates the congratulation message with a random message from the CONGRATULATION_MESSAGES array.
   */
  const updateCongratulationMessage = () => {
    const message =
      CONGRATULATION_MESSAGES[
        Math.floor(Math.random() * CONGRATULATION_MESSAGES.length)
      ];

    lab1Actions.updateCongratulationMessage(message);
  };

  return (
    <div className="exercise">
      <ExerciseButtons
        visible={lab1State.exerciseState === EXERCISE_IDLE}
        plays={lab1State.plays}
        repairApplied={lab1State.changesApplied}
        openRepairHandler={lab1Actions.openRepair}
        openInstructionsHandler={lab1Actions.openInstructions}
        startExerciseHandler={startCountdown}
      />
      <Countdown
        visible={lab1State.exerciseState === EXERCISE_COUNTDOWN}
        time={lab1State.countdownTime}
        message={lab1State.congratulationMessage}
      />
      <HintBox
        visible={lab1State.exerciseState === EXERCISE_PLAYING}
        state={lab1State.hintBoxStatus}
        boxRevealed={lab1State.boxRevealed}
        availableMessage={lab1State.availableMessage}
        unavailableMessage={lab1State.unavailableMessage}
        availableBackgroundColor={lab1State.availableBackgroundColor}
        unavailableBackgroundColor={lab1State.unavailableBackgroundColor}
        clickHandler={openHintBox}
      />
      <Boxes
        visible={lab1State.exerciseState === EXERCISE_PLAYING}
        elements={lab1State.boxes}
        clickHandler={validateAnswer}
      />
      <Stats
        visible={
          lab1State.exerciseState !== EXERCISE_IDLE &&
          lab1State.exerciseState !== EXERCISE_ENDED
        }
        score={lab1State.score}
        correctAnswers={lab1State.correctAnswers}
        incorrectAnswers={lab1State.incorrectAnswers}
        roundNumber={lab1State.roundNumber}
        time={lab1State.time}
      />
      <Results
        visible={lab1State.exerciseState === EXERCISE_ENDED}
        score={lab1State.score}
        correctAnswers={lab1State.correctAnswers}
        incorrectAnswers={lab1State.incorrectAnswers}
        roundNumber={lab1State.roundNumber}
        clickHandler={resetExercise}
      />
    </div>
  );
};

export default Exercise;
