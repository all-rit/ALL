import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MILLISECONDS_IN_A_SECOND,
  TIMEOUT_MIN_MS,
  TIMER_SECONDS,
} from "../../../../constants/lab1";

/**
 * Renders the statistics for the exercise.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Indicates whether the stats should be visible.
 * @param {number} props.score - The score of the exercise.
 * @param {number} props.correctAnswers - The number of correct answers.
 * @param {number} props.incorrectAnswers - The number of incorrect answers.
 * @param {number} props.roundNumber - The current round number.
 * @param {number} props.time - The remaining time for the exercise.
 * @returns {JSX.Element} The rendered Stats component.
 */
const Stats = ({
  visible,
  score,
  correctAnswers,
  incorrectAnswers,
  roundNumber,
  time,
}) => {
  /**
   * Calculates the percentage of time remaining.
   *
   * @param {number} time - The remaining time for the exercise.
   * @returns {number} The percentage of time remaining.
   */
  const calculatePercentage = (time) => {
    const percentage =
      (time / ((TIMER_SECONDS * MILLISECONDS_IN_A_SECOND) / TIMEOUT_MIN_MS)) *
      100;

    return percentage;
  };
  const [countdownStyle] = useState({
    width: calculatePercentage(time).toString() + "%",
  });

  return (
    <div className="stats">
      {visible && (
        <div className="stats__timer">
          <div className="stats__countdown" style={countdownStyle} />
        </div>
      )}

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
};

Stats.propTypes = {
  visible: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  incorrectAnswers: PropTypes.number.isRequired,
  roundNumber: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

export default Stats;
