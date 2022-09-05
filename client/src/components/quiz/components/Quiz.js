import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        multiChoice={props.multiChoice}
      />
    );
  }

  return (
    <div className="quiz container shadow" key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} multi={props.multiChoice} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
      <div className="align-right">
        <button
          className="btn btn-second text-uppercase  nextButton"
          onClick={props.nextQuestion}
          disabled={props.disable}
        >
          {props.questionId === props.questionTotal
            ? "Complete"
            : "Next Question"}
        </button>
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
