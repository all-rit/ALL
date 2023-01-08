/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import QualQuestionsManager from "../../components/QualQuestionsManager";
import QualificationQuestionsC from "../../components/QualificationQuestionsC";
// import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
// import qqjson from "../../components/QualQuesData.js";

// import Quiz from "../../../../quiz/components/Quiz";

function QualificationQuestions(props) {
  const { actions } = props;
  let questions = require("../../components/QualQuestionsManager");
  let answers = require("../../components/QualQuestionsManager");

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/AnalyzeData");
  };

  return (
    <div className="quiz container shadow" key={props.questionId}>
      <h2 className="playthrough_title">QualificationQuestions:</h2>
      <div>
        <p>Hello</p>

        {/* Taking from render quiz function*/}
        {/* <QualificationQuestionsC
             answer={this.state.answer}
             answerOptions={this.state.Options}
             questionId={this.state.questionId}
             question={this.state.question}
             questionTotal={this.state.quizQuestions.length}
             onAnswerSelected={this.handleAnswerSelected}
             nextQuestion={this.setNextQuestion}
             disable={this.state.disableNextQuestion}
             multiChoice={this.state.multiChoice}
           /> */}
        {/*         
            <QualificationQuestionsC
            question = {props.question}
            answer = {props.answer}
            />

             */}

        {/* <p className= "question">{this.props.questions}</p>
            <p className= "answers">{this.props.answers}</p>
             */}

        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="confirm"
        >
          Finished
        </button>
      </div>
    </div>
  );
}

export default QualificationQuestions;
