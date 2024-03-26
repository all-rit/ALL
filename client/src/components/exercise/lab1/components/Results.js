import React from "react";
import PropTypes from "prop-types";

/**
 * Renders the results of an exercise.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines if the results should be visible.
 * @param {number} props.score - The final score of the exercise.
 * @param {number} props.correctAnswers - The number of correct answers.
 * @param {number} props.incorrectAnswers - The number of incorrect answers.
 * @param {number} props.roundNumber - The number of rounds in the exercise.
 * @param {Function} props.clickHandler - The click event handler for the "Continue" button.
 * @returns {JSX.Element|null} The rendered Results component.
 */
const Results = ({
  visible,
  score,
  correctAnswers,
  incorrectAnswers,
  roundNumber,
  clickHandler,
}) => {
  if (!visible) return null;

  return (
    <div className="results">
      <div className="results__title">Exercise Over</div>

      <div className="results__content">
        <p className="results__sentence">
          Great job! Here are your statistics:
        </p>

        <div className="result">
          <span className="result__category">Final Score:</span>
          <span className="result__value">{score}</span>
        </div>

        <div className="result">
          <span className="result__category">Correct Answers:</span>
          <span className="result__value">{correctAnswers}</span>
        </div>

        <div className="result">
          <span className="result__category">Incorrect Answers:</span>
          <span className="result__value">{incorrectAnswers}</span>
        </div>

        <div className="result">
          <span className="result__category">Rounds:</span>
          <span className="result__value">{roundNumber}</span>
        </div>
      </div>

      <button
        className="btn btn-second btn-xl text-uppercase "
        onClick={clickHandler}
      >
        Continue
      </button>
    </div>
  );
};

Results.propTypes = {
  visible: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  incorrectAnswers: PropTypes.number.isRequired,
  roundNumber: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Results;
