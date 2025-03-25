/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

function AnswerOption(props) {
  if (props.multiChoice === true) {
    return (
      <li className="answerOption tw-rounded-lg tw-shadow-lg">
        <input
          type="checkbox"
          className="checkboxCustomButton"
          name="checkboxGroup"
          id={props.answerType}
          value={props.answerType}
          onChange={props.multiSelected}
        />
        <label className="checkboxCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    );
  } else {
    return (
      <li className="answerOption tw-rounded-lg tw-shadow-lg">
        <input
          type="radio"
          className="radioCustomButton tw-body-text"
          name="checkboxGroup"
          checked={props.answerContent === props.selectedAnswer.content}
          id={props.answerType}
          value={props.answerType}
          onChange={props.onAnswerSelected}
        />
        <label
          className="radioCustomLabel tw-body-text"
          htmlFor={props.answerType}
        >
          {props.answerContent}
        </label>
      </li>
    );
  }
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  multiSelected: PropTypes.func.isRequired,
  multiChoice: PropTypes.bool.isRequired,
  selectedAnswer: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default AnswerOption;
