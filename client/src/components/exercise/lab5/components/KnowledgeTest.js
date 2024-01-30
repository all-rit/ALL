import React, { useState } from "react";
import ExerciseService from "../../../../services/lab5/ExerciseService";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

/**
 * Represents a Knowledge Test component.
 * @param {Object} props - The props for the KnowledgeTest component.
 * @returns {JSX.Element} The rendered KnowledgeTest component.
 */
const KnowledgeTest = (props) => {
  const [options] = useState(props.question.Options);
  const [currentSelection, setCurrentSelection] = useState(null);
  const [question] = useState(props.question.Question);
  const [correct, setCorrect] = useState(false);

  /**
   * Checks if the selected choice is correct.
   * @param {number} selected - The index of the selected choice.
   * @returns {boolean} - True if the selected choice is correct, false otherwise.
   */
  const isCorrectChoice = (selected) => {
    return options[selected] === 1;
  };

  /**
   * Handles the selection of an option in the knowledge test.
   * @param {Event} event - The event object triggered by the selection.
   */
  const handleSelection = (event) => {
    const value = event.target.getAttribute("value");
    if (currentSelection === null) {
      setCurrentSelection(value);
      const isCorrect = isCorrectChoice(value);
      setCorrect(isCorrect);
      ExerciseService.submitChoice(
        isCorrect,
        question,
        value,
        JSON.stringify(options)
      );
    }
  };

  /**
   * Returns the correct choice from the options object.
   * @returns {string} The correct choice.
   */
  const getCorrectChoice = () => {
    for (const itm in options) {
      if (options[itm] === 1) {
        return itm;
      }
    }
  };

  /**
   * Handles the navigation to the specified link.
   */
  const handleNav = () => {
    navigate(props.link);
  };

  return (
    <div className="knowledgeTest">
      <div className="question">{question}</div>
      <div className={"options"}>
        {Object.keys(options).map((option, index) => (
          <button
            key={index}
            onClick={handleSelection}
            value={option}
            className={`option + ${
              option === currentSelection && !correct
                ? "incorrect"
                : "" + option === currentSelection && correct
                ? "correct"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {currentSelection !== null && (
        <div className="result">
          <div className="text">
            {correct
              ? "Good Job! "
              : "Incorrect! Correct Response was: '" +
                getCorrectChoice() +
                "'. "}{" "}
            Select &rsquo;Next&rsquo;
          </div>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase  next"
            onClick={handleNav}
            key="next"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

KnowledgeTest.propTypes = {
  handler: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default KnowledgeTest;
