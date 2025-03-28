import React from "react";
import PropTypes from "prop-types";
import QuestionCount from "../../quiz/components/QuestionCount";
import AnswerOption from "./AnswerOption";

function Survey(props) {
  const likertResponse = () => {
    return (
      <div className="tw-my-4">
        <div className="tw-flex tw-w-[80%] tw-mx-auto tw-justify-center tw-justify-between">
          <p className="tw-body-text tw-text-center">
            Strongly
            <br /> Disagree
          </p>
          <p className="tw-body-text tw-text-center">
            Strongly
            <br /> Agree
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-5 lg:tw-grid-cols-10 tw-mx-auto tw-w-[80%] ">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="tw-flex tw-flex-col tw-items-center">
              <input
                type="radio"
                className="radioCustomButton"
                id={index}
                value={index + 1}
                name="likert"
                onChange={props.onAnswerSelected}
              />
              <label className="radioCustomLabel" htmlFor={index}>
                {index + 1}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
      <div className={"tw-flex tw-justify-center tw-mt-0"}>
        <hr className={"tw-w-3/4"} />
      </div>
      {props.questionType == "likert" ? (
        likertResponse()
      ) : (
        <ul className="answerOptions tw-grid tw-grid-cols-2 tw-body-text">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      )}
      <div className="align-right">
        {props.questionId !== props.questionTotal && !props.isUnderAge ? (
          <button
            className="btn btn-second text-uppercase  nextButton  "
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
  answerOptions: PropTypes.array,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  questionType: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onMultiSelected: PropTypes.func.isRequired,
  multiChoice: PropTypes.string,
  nextQuestion: PropTypes.func,
  disable: PropTypes.bool,
  onComplete: PropTypes.func,
  isUnderAge: PropTypes.bool.isRequired,
};

export default Survey;
