/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import { React, useEffect, useState } from "react";
import { PropTypes } from "victory";
import Quiz from "./Quiz";
import Result from "./Result";

// TODO: This Removed to add in service functionality
import QuestionsLab1 from "../api/Lab1/quizQuestions";
import QuestionsLab2 from "../api/Lab2/quizQuestions";
import QuestionsLab3 from "../api/Lab3/quizQuestions";
import QuestionsLab4 from "../api/Lab4/quizQuestions";
import QuestionsLab5 from "../api/Lab5/quizQuestions";

function assignQuizQuestions(labId) {
  switch (labId) {
    case 1:
      return QuestionsLab1;
    case 2:
      return QuestionsLab2;
    case 3:
      return QuestionsLab3;
    case 4:
      return QuestionsLab4;
    case 5:
      return QuestionsLab5;
    default:
      return [
        {
          question: "Default",
          answers: [
            {
              val: 0,
              type: 0,
              content: "Default",
            },
          ],
          multiChoice: false,
        },
      ];
  }
}
/**
 * QuizHandler is react component responsible for tracking users responses
 * this will be the main handler to manage the state and logic for the new quiz component
 * @param {Object} props will be the injectable fields that will populate and provide the
 * component with information.
 */
const QuizHandler = (props) => {
  const [currentLabId, setCurrentLab] = useState(props.labId);
  let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
  const [questions, setQuestions] = useState(assignQuizQuestions(props.labId));
  const [answerOption, setAnswerOption] = useState(
    questions[currentQuestionCursor].answers
  );
  const [quizCompleted, setQuizCompleted] = useState(false);
  // initialized to a empty array to house recorded answers
  let [selectedAnswers, setSelectedAnswers] = useState([]);
  let [disableNext, setDisableNext] = useState(true);
  let [result, setResult] = useState({});

  /**
   * HandleNext() is a function that is responsible for allowing the user to
   * iterate to the next question. this will then update the disabling for the
   * selection on on the next question as it iterates to the next option
   */
  function handleNext() {
    if (currentQuestionCursor < questions.length) {
      let updateCursor = currentQuestionCursor + 1;
      setCurrentQuestionCursor(updateCursor);
      setAnswerOption(questions[updateCursor].answers);
      setDisableNext(true);
    }
  }
  /**
   * onComplete is a function that is responsible for preparing and running the
   * calculations to grade a users responses to the quiz. This will then prepare the data
   * to display to the user for the result portion of the quiz.
   */
  function onComplete() {
    // this will be filled in currently only stub
    scoreResults()
    setQuizCompleted(true)
  }

  function checkIfCorrect(answerIndex, questionIndex) {
    let isCorrect;
    questions[questionIndex].answers[answerIndex].val === 1
      ? (isCorrect = true)
      : (isCorrect = false);
    return isCorrect;
  } 

  function scoreResults() {
    let questionsTotal = questions.length;
    let output = [];
    const QuizQuestions = {
      question: "",
      answers: [],
      selectAnswers: {},
      IsCorrect: false,
    };
    for (let i = 0; i < questionsTotal; i++) {
      let tempQuestion = { ...QuizQuestions };
      tempQuestion.question = questions[i].question;
      if (questions[i].multiChoice) {
        // logic for multi select
        let userAnswers = [...selectedAnswers[i]];
        let isCorrect = userAnswers.map((element)=> {
          return checkIfCorrect(element,i)
        });
        isCorrect.every((value) => value === true)
          ? (tempQuestion.IsCorrect = true)
          : (tempQuestion.isCorrect = false);
        output.push(tempQuestion);
      } else {
        // logic for non multi select
        let userAnswers = {...selectedAnswers[i]};
        checkIfCorrect(userAnswers.type,i)
          ? (tempQuestion.IsCorrect = true)
          : (tempQuestion.IsCorrect = false);
        output.push(tempQuestion);
      }
    }

    // count number of correct questions.
    let countCorrect = 0;
    output.forEach((element) => {
      element.IsCorrect ? (countCorrect += 1) : countCorrect;
    });

    console.log("user score is: " + countCorrect / questionsTotal);
    setResult(countCorrect / questionsTotal);
  }

  /**
   * selectAnswer() is a function responsible for recording the
   * behavior in which a user enters in their answer. This function once
   * called will record the responses index and update the state of the
   * component.
   * @param {*} e event containing the index of the selected answer response.
   */
  function selectAnswer(e) {
    const answerValue = e.target.value;
    let tempSelectedAnswers;
    tempSelectedAnswers = [...selectedAnswers];
    tempSelectedAnswers[currentQuestionCursor] = {
      content: questions[currentQuestionCursor].answers[answerValue].content,
      val: 1,
      type: answerValue,
    };
    console.log("Recorded answers: " + tempSelectedAnswers);
    setSelectedAnswers(tempSelectedAnswers);
    setDisableNext(false);
  }
  /**
   * selectMulti is a function that is responsible for handling
   * behavior of a multi-answer question by recording the given input to
   * a set. this allowing for no duplicates and to easily remove entries when we
   * want to change what data is being recorded.
   * @param {*} e event holding the index of the selected answer
   */
  function selectMulti(e) {
    const answerValue = e.target.value;
    let tempAnswers = selectedAnswers;
    let storageSet;
    // ensures that there is a value stored there
    if (typeof tempAnswers[currentQuestionCursor] !== "undefined") {
      // copies over the set
      storageSet = new Set(tempAnswers[currentQuestionCursor]);
      // checks to see if the set has the value in it
      !storageSet.has(answerValue)
        ? // adds it if it doesn't
          storageSet.add(answerValue)
        : // removes it if it does
          storageSet.delete(answerValue);
      // assigns the updated set to the array
      tempAnswers[currentQuestionCursor] = storageSet;
    } else {
      // creates an empty set because does not exist in that spot
      setDisableNext(false);
      storageSet = new Set();
      // adds the value
      storageSet.add(answerValue);
      // assigns it to the array
      tempAnswers[currentQuestionCursor] = storageSet;
    }
    setSelectedAnswers(tempAnswers);
  }

  return (
    <>
      {!quizCompleted ? (
        <Quiz
          answer={""}
          answerOptions={answerOption}
          disable={disableNext}
          multiChoice={questions[currentQuestionCursor].multiChoice}
          multiSelectedEntry={selectMulti}
          nextQuestion={handleNext}
          onAnswerSelected={selectAnswer}
          onComplete={onComplete}
          questionId={currentQuestionCursor + 1}
          question={questions[currentQuestionCursor].question}
          questionTotal={questions.length}
        ></Quiz>
      ) : (
        // will spawn story for
        <Result
          quizResult={(result*100)+"%"}
          quizScore={100}
          selectedAnswers={selectedAnswers}
          quizQuestions={questions}
          lab={currentLabId}
        ></Result>
      )}
    </>
  );
};
QuizHandler.propTypes = {
  labId: PropTypes.integer.isRequired,
};
export default QuizHandler;
