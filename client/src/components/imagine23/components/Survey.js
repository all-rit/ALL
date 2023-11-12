/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import QuestionCount from "../../quiz/components/QuestionCount";
import AnswerOption from "./AnswerOption";

function Survey(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        answerContent={key.content}
        answerType={key.index}
        answer={props.answer}
        questionId={props.questionId}
        questionType={props.questionType}
        onAnswerSelected={props.onAnswerSelected}
        onMultiSelected={props.onMultiSelected}
        onFreeTextInput={props.onFreeTextInput}
      />
    );
  }

  return (
    <div className="quiz container shadow" key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <h2 className="quiz question">
        {props.question} {props.multiChoice && " Select all that apply."}
      </h2>
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
      <div className="align-right">
        {props.questionId !== props.questionTotal ? (
          <button
            className="btn btn-second text-uppercase  nextButton"
            onClick={props.nextQuestion}
            disabled={props.disable}
          >
            Next Question
          </button>
        ) : (
          <button
            className="btn btn-second text-uppercase  nextButton"
            onClick={props.onComplete}
            disabled={props.disable}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
}

Survey.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onMultiChoice: PropTypes.func.isRequired,
  onFreeTextInput: PropTypes.func.isRequired,
};

export default Survey;
