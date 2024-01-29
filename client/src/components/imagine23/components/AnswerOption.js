/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

function AnswerOption(props) {
  switch (props.questionType) {
    case "singleChoice":
      return (
        <li className="answerOption">
          <input
            type="radio"
            className="radioCustomButton"
            name="checkboxGroup"
            // checked={props.answerType === props.answer}
            id={props.answerType}
            value={props.answerType}
            onChange={props.onAnswerSelected}
          />
          <label className="radioCustomLabel" htmlFor={props.answerType}>
            {props.answerContent}
          </label>
        </li>
      );
    case "multiChoice":
      return (
        <li className="answerOption">
          <input
            type="checkbox"
            className="checkboxCustomButton"
            name="checkboxGroup"
            id={props.answerType}
            value={props.answerType}
            onChange={props.onMultiSelected}
          />
          <label className="checkboxCustomLabel" htmlFor={props.answerType}>
            {props.answerContent}
          </label>
        </li>
      );
  }
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  questionType: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onMultiSelected: PropTypes.func.isRequired,
  onFreeTextInput: PropTypes.func.isRequired,
};

export default AnswerOption;
