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
      // console.log(selectedAnswers);
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
  async function onComplete(surveyType) {
    setSurveyComplete(true);

    if (surveyType === "pre") {
      // will need to be changed with next logic story
      ImagineService.preSurvey(props.userID, selectedAnswers, "experiential");
      groupUserByAnswers(); // This will handle navigation
    } else if (surveyType === "post") {
      ImagineService.postSurvey(props.userID, selectedAnswers);
      navigate("/Imagine/ExerciseEnd");
    }
  }

  async function groupUserByAnswers() {
    let groupingQuestions = [0, 1, 2];

    // Helper function to compare answers, since they can be either strings or arrays
    const isEqualAnswer = (a, b) => {
      // Normalize both answers to arrays and sort to ensure order doesn't matter
      const arrA = Array.isArray(a) ? a : [a];
      const arrB = Array.isArray(b) ? b : [b];
      arrA.sort();
      arrB.sort();

      // Check if arrays are of the same length and have equal elements (case-insensitive for strings)
      return (
        arrA.length === arrB.length &&
        arrA.every((val, index) => {
          return typeof val === "string" && typeof arrB[index] === "string"
            ? val.toLowerCase() === arrB[index].toLowerCase()
            : val === arrB[index];
        })
      );
    };

    // Use age, gender, and enthnicity to group users together
    const resUsers = await ImagineService.getUsers();
    let groupedUsers = resUsers.filter((user) =>
      groupingQuestions.every((index) => {
        return isEqualAnswer(
          user.preSurvey[index].answer,
          selectedAnswers[index].answer
        );
      })
    );

    // Is in either group 1 or 2 (experiential or expressive). Judge this based on whether, in their group, they is an even or odd number of people in their group
    let group = groupedUsers.length % 2;
    console.log(group === 0 ? "Experiential" : "Expression");
    props.handleGroupAssignment(group === 0 ? true : false);
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
    // let tempSelectedAnswers;
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
