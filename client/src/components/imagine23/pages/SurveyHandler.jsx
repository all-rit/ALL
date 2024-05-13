import { React, useState } from "react";
import { PropTypes } from "prop-types";
import Survey from "../components/Survey";
import { navigate } from "@reach/router";
import PreSurveyQuestions from "../data/preSurveyQuestions";
import PostSurveyQuestions from "../data/postSurveyQuestions";
import ImagineService from "../../../services/ImagineService";
import Spinner from "../../../common/Spinner/Spinner";
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
 * SurveyHandler is react component responsible for tracking users responses
 * this will be the main handler to manage the state and logic for the new quiz component
 * @param {Object} props will be the injectable fields that will populate and provide the
 * component with information.
 */
const SurveyHandler = (props) => {
  let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
  const [questions] = useState(assignQuizQuestions(props.type));
  const [answerOption, setAnswerOption] = useState(
    questions[currentQuestionCursor].answers,
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
   * onComplete(): is a function that is responsible for preparing and running the
   * calculations to grade a users responses to the quiz. This will then prepare the data
   * to display to the user for the result portion of the quiz.
   */
  async function onComplete(surveyType) {
    setSurveyComplete(true);
    if (surveyType === "pre") {
      // will need to be changed with next logic story
      const response = await activitySelector();
      return response;
      // This will handle navigation
    } else if (surveyType === "post") {
      ImagineService.postSurvey(props.userID, selectedAnswers);
      navigate("/Imagine/ExerciseEnd");
    }
  }
  /**
   * activitySelector(): is a function that is responsible for determining
   * what activity the user will be directed to based on the responses given
   * in the pre-survey.
   */
  async function activitySelector() {
    const response = await ImagineService.preSurvey(
      props.userID,
      selectedAnswers,
    );
    const section = (await response.text()).replace(/['"]+/g, "");

    if (section == "experiential" || section === "control") {
      console.log("Navigating to Experiential");
      navigate("/Imagine/ExperientialStart");
    } else if (
      section === "discomfortCountNonPOC" ||
      section === "discomfortCountPOC"
    ) {
      console.log("Navigating to Expression");
      navigate("/Imagine/ExpressionStart");
    } else {
      console.log("Navigating to None");
    }
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
    setSelectedAnswers([
      ...selectedAnswers,
      {
        question: questions[currentQuestionCursor].question,
        answer: questions[currentQuestionCursor].answers[answerValue].content,
      },
    ]);
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
    const answerValue =
      questions[currentQuestionCursor].answers[e.target.value].content;
    let tempAnswers = selectedAnswers;
    let storageSet;
    // ensures that there is a value stored there
    if (typeof tempAnswers[currentQuestionCursor] !== "undefined") {
      // copies over the set
      storageSet = new Set(tempAnswers[currentQuestionCursor].answer);
      // checks to see if the set has the value in it
      !storageSet.has(answerValue)
        ? storageSet.add(answerValue)
        : storageSet.delete(answerValue);
      // disable next if the set is empty
      setDisableNext(storageSet.size === 0 ? true : false);
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

    tempAnswers[currentQuestionCursor] = {
      question: questions[currentQuestionCursor].question,
      answer: Array.from(storageSet),
    };
    setSelectedAnswers(tempAnswers);
  }
  return (
    <>
      {!surveyComplete ? (
        <Survey
          answer={""}
          answerOptions={answerOption}
          question={questions[currentQuestionCursor].question}
          questionId={currentQuestionCursor + 1}
          questionTotal={questions.length}
          questionType={questions[currentQuestionCursor].type}
          disable={disableNext}
          onAnswerSelected={selectAnswer}
          onMultiSelected={selectMulti}
          nextQuestion={handleNext}
          onComplete={() => onComplete(props.type)}
        ></Survey>
      ) : (
        <div className="flex !tw-justify-center items-center">
          <Spinner className="m-auto" />
        </div>
      )}
    </>
  );
};
SurveyHandler.propTypes = {
  path: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleGroupAssignment: PropTypes.func, // optional
};
export default SurveyHandler;
