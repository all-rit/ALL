/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { PropTypes } from "victory";
//to use same functionality as quiz component

import QualificationQuestionsC from "./QualificationQuestionsC";
import QualQuesData from "./QualQuesData";

// import Result from "./Result";
//need substitute for result page, or can just implement a handle submit on this one
/* Takes data from json file and should include functionality to go from from question to the next
with the corresponding answers */

/*Created option (answer) and question object*/
const QualQuestionsManager = (props) => {
  //currently unnecessary and should be used if other labs are being used
  let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
  const [questions, setQuestions] = useState({
    ...assignQualQuestions(props.labId),
  });
  //this constant need to come into play with a handle submit
  const [questionsCompleted, setQuestionsCompleted] = useState(false);
  //Part 4 - answer object
  const [Option, setOption] = useState(
    questions[currentQuestionCursor].answers
  );
  let [disableNext, setDisableNext] = useState(true);

  // let [selectedAnswers, setSelectedAnswers] = useState([]);

  function assignQualQuestions(labId) {
    let info = { ...QualQuesData };
    return info;
  }

  /*Part 6 - Functions used to to iterate the list of questions*/
  function handleNext() {
    if (currentQuestionCursor < questions.length) {
      let updateCursor = currentQuestionCursor + 1;
      setCurrentQuestionCursor(updateCursor);
      setOption(questions[updateCursor].answers);
      setDisableNext(true);
    }
  }

  // const handleSubmit = () =>{
  //     navigate("/Lab6/Exercise/AnalyzeData");
  // }

  function selectOption(e) {
    console.log("E:" + e);
    const answerValue = e.target.value;
    let tempSelectedAnswers;
    console.log("Selected Answer: " + answerValue);
    console.log(questions[currentQuestionCursor].multiChoice);
    tempSelectedAnswers = [...setOption];
    // tempSelectedAnswers = [...selectedAnswers];
    // tempSelectedAnswers[currentQuestionCursor] = answerValue;
    tempSelectedAnswers[currentQuestionCursor] = {
      content: questions[currentQuestionCursor].answers[answerValue].content,
      val: 1,
      type: answerValue,
    };
    console.log("Recorded answers: " + tempSelectedAnswers);
    setDisableNext(false);
  }

  // function setUserAnswer(answer) {
  //     this.setState((state, props) => ({
  //         disableNextQuestion: false,
  //         selectedAnswers: {
  //             ...state.selectedAnswers,
  //             [this.state.counter]: answer
  //         },
  //         answer: answer
  //     }));
  // }

  return (
    <div>
      {!questionsCompleted ? (
        <QualificationQuestionsC
          answer={""}
          Options={Option}
          disable={disableNext}
          multiChoice={questions[currentQuestionCursor].multichoice}
          nextQuestion={handleNext}
          onAnswerSelected={selectOption}
          //   onComplete={onComplete}
          questionId={currentQuestionCursor + 1}
          question={questions[currentQuestionCursor].question}
          questionTotal={questions.length}
        ></QualificationQuestionsC>
      ) : (
        <div></div>
      )}
    </div>
  );
};

QualQuestionsManager.propTypes = {
  labId: PropTypes.integer.isRequired,
};

export default QualQuestionsManager;
