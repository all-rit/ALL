/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";
import { MathComponent } from "mathjax-react";

const formulateEquation = (equation) => {
  return (
    <div className={"tw-flex tw-flex-col"}>
      <MathComponent tex={String.raw`New\;Utility\;Equation=${equation}`} />
    </div>
  );
};

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.type}
        answerContent={key.content}
        answerType={key.type}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        multiChoice={props.multiChoice}
        multiSelected={props.multiSelectedEntry}
      />
    );
  }

  return (
    <div className="tw-position-relative shadow tw-rounded-3xl tw-bg-labYellow">
      <div className="tw-position-absolute p-3 shadow bg-white tw-rounded-3xl questionContainer tw-bg-labLightGray">
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        {props.isFinalQuiz ? (
          <Question content={props.question} multi={props.multiChoice} />
        ) : (
          <Question
            content={formulateEquation(props.question)}
            multi={props.multiChoice}
          />
        )}
      </div>
      <div
        className="quiz container tw-position-absolute bg-white tw-rounded-3xl shadow questionContainer pt-1 mt-3  tw-bg-labLightGray"
        key={props.questionId}
      >
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <div className="align-right">
          {props.questionId !== props.questionTotal ? (
            <button
              className="btn tw-bg-labBlue text-white text-uppercase mt-0 nextButton"
              onClick={props.nextQuestion}
              disabled={props.disable}
            >
              Next Question
            </button>
          ) : (
            <button
              className="btn btn-second text-uppercase mt-0 nextButton"
              onClick={props.onComplete}
              disabled={props.disable}
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  multiChoice: PropTypes.bool.isRequired,
};

export default Quiz;
