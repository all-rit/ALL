/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { PropTypes } from "prop-types";
import Survey from "../components/Survey";
import { navigate } from "@reach/router";
import PreSurveyQuestions from "../data/preSurveyQuestions";
import PostSurveyQuestions from "../data/postSurveyQuestions";
import ImagineService from "../../../services/ImagineService";
/**
 * assignQuizQuestions is a function that returns a given set
 * of quiz questions dependent on the labId passed
 * @param {integer} labId is passed to the function to determine
 * what questions to grab
 */
function assignQuizQuestions(surveyType) {
  switch (surveyType) {
    case "pre":
      return PreSurveyQuestions;
    case "post":
      return PostSurveyQuestions;
    default:
      return [
        {
          question: "Default",
          answers: [
            {
              val: 0,
              type: "0",
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
const SurveyHandler = (props) => {
  let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
  const [questions, setQuestions] = useState(assignQuizQuestions(props.type));
  const [answerOption, setAnswerOption] = useState(
    questions[currentQuestionCursor].answers
  );
  // initialized to a empty array to house recorded answers
  let [selectedAnswers, setSelectedAnswers] = useState([]);
  let [disableNext, setDisableNext] = useState(true);
  let [surveyComplete, setSurveyComplete] = useState(false);

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
    setSurveyComplete(true);
    ImagineService.preSurvey(props.userID, selectedAnswers);
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

  const handleNextPage = (surveyType) => {
    switch (surveyType) {
      case "pre":
        navigate("/Imagine/Navigation");
        break;
      case "post":
        navigate("/Imagine/ExerciseEnd");
        break;
      default:
        navigate("/Imagine");
        break;
    }
  };

  return (
    <>
      {!surveyComplete ? (
        <Survey
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
        ></Survey>
      ) : (
        <>
          <h2 className="p-5">
            Thank you for completing the {props.type == "pre" ? "pre" : "post"}
            -survey!
          </h2>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
            onClick={() => handleNextPage(props.type)}
          >
            Continue
          </button>
        </>
      )}
    </>
  );
};
SurveyHandler.propTypes = {
  submitData: PropTypes.func.isRequired,
  userID: PropTypes.string,
  type: PropTypes.string,
};
export default SurveyHandler;
