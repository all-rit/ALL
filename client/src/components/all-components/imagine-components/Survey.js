import React from "react";
import PropTypes from "prop-types";
import QuestionCount from "../../quiz/components/QuestionCount";
import AnswerOption from "./AnswerOption";

function Survey(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.index}
        answerContent={key.content}
        answerType={key.index}
        answer={props.answer}
        questionId={props.questionId}
        questionType={props.questionType}
        onAnswerSelected={props.onAnswerSelected}
        onMultiSelected={props.onMultiSelected}
      />
    );
  }

  return (
    <div className="quiz container tw-p-6" key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <h2 className="quiz tw-sub-title tw-text-[2rem]">
        {props.question} {props.multiChoice && " Select all that apply."}
      </h2>
      <div className={"tw-flex tw-justify-center"}>
        <hr className={"tw-w-3/4"} />
      </div>
      <ul className="answerOptions tw-grid tw-grid-cols-2 tw-body-text">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
      <div className="align-right">
        {props.questionId !== props.questionTotal && !props.isUnderAge ? (
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
  questionType: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onMultiSelected: PropTypes.func.isRequired,
  multiChoice: PropTypes.string,
  nextQuestion: PropTypes.string,
  disable: PropTypes.boolean,
  onComplete: PropTypes.func,
  isUnderAge: PropTypes.bool.isRequired,
};

export default Survey;
