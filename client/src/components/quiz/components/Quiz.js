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
    <div>
      <div className="tw-rounded-lg tw-text-left tw-px-6 tw-shadow-lg tw-py-6 tw-mx-6">
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
      <div className="quiz bg-white tw-mt-6" key={props.questionId}>
        <ol className="tw-grid tw-grid-cols-2">
          {props.answerOptions.map(renderAnswerOptions)}
        </ol>
        <div
          className={"tw-w-full tw-flex tw-flex-row tw-justify-between tw-p-6"}
        >
          <div className="align-right">
            {props.questionId !== 1 && (
              <button
                className="tw-body-text tw-border-[.5rem] tw-p-5 tw-rounded-bl-lg tw-border-t-0 tw-border-r-0
                          tw-border-solid tw-border-primary-yellow tw-bg-white"
                onClick={props.lastQuestion}
              >
                Previous Question
              </button>
            )}
          </div>
          <div className={"tw-font-bold tw-body-text tw-my-6"}>
            {props.questionId}/{props.questionTotal}
          </div>
          <div className="align-right">
            {props.questionId !== props.questionTotal ? (
              <button
                className="tw-body-text tw-border-solid tw-border-primary-blue
                                        tw-bg-white tw-border-l-0 tw-border-b-0 tw-border-[.5rem] tw-p-5 tw-rounded-tr-lg"
                onClick={props.nextQuestion}
                disabled={props.disable}
              >
                Next Question
              </button>
            ) : (
              <button
                className="tw-body-text tw-border-solid tw-border-primary-blue
                                        tw-bg-white tw-border-l-0 tw-border-b-0 tw-border-[.5rem] tw-p-5 tw-rounded-tr-lg"
                onClick={props.onComplete}
                disabled={props.disable}
              >
                Complete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Quiz.propTypes = {
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  multiChoice: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  lastQuestion: PropTypes.func.isRequired,
  multiSelectedEntry: PropTypes.func,
  isFinalQuiz: PropTypes.bool.isRequired,
};

export default Quiz;
