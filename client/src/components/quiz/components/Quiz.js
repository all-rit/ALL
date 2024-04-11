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
        onAnswerSelected={(e) => props.onAnswerSelected(e.target.value)}
        multiChoice={props.multiChoice}
        multiSelected={props.multiSelectedEntry}
      />
    );
  }

  return (
    <div className="quiz container shadow" key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      {props.isFinalQuiz ? (
        <Question content={props.question} multi={props.multiChoice} />
      ) : (
        formulateEquation(props.question)
      )}
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

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  multiChoice: PropTypes.bool.isRequired,
};

export default Quiz;
