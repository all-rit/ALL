/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import Option from "./Options";
import { navigate } from "@reach/router";

// import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
// import qqjson from "../../components/QualQuesData.js";

// import Quiz from "../../../../quiz/components/Quiz";

/*
Unsure as to why this is not rendering
*/
function QualificationQuestionsC(props) {
  function renderOptions(key) {
    return (
      <Option
        key={key.type}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  /*Part 7- Handle submit function only accessible after every qual ques is answered*/
  const handleSubmit = () => {
    navigate("/Lab6/Exercise/AnalyzeData");
  };

  return (
    <div className="quiz container shadow" key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      <ul className="answerOptions">{props.Options.map(renderOptions)}</ul>
      <div className="align-right">
        {props.questionId !== props.questionTotal ? (
          <button
            className="btn btn-second text-uppercase nextButton"
            onClick={props.nextQuestion}
            disabled={props.disable}
          >
            Next Question
          </button>
        ) : (
          <button
            className="btn btn-second text-uppercase nextButton"
            onClick={handleSubmit}
            disabled={props.disable}
          >
            Finished
          </button>
        )}
      </div>
    </div>
  );
}

QualificationQuestionsC.propTypes = {
  answer: PropTypes.string.isRequired,
  Options: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  multichoice: PropTypes.bool.isRequired,
};

export default QualificationQuestionsC;
