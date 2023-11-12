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
    case "freeText":
      return (
        <li>
          <label className="inline-block w-75 text-left" htmlFor={props.answerType}>
            {props.answerContent}
          </label>
          <input
            type="text"
            className="w-75 p-2 tw-outline-none tw-border-solid tw-rounded-lg"
            id={props.answerType}
            onChange={props.onFreeTextInput}
          />
        </li>
      );
  };
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  questionType: PropTypes.bool.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onMultiSelected: PropTypes.func.isRequired,
  onFreeTextInput: PropTypes.func.isRequired,
};

export default AnswerOption;
