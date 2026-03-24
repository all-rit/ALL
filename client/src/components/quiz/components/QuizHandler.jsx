import UserLabService from "../../../services/UserLabService";
import labService from "src/services/LabService";
import useMainStateContext from "../../../reducers/MainContext";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz";
import Result from "./Result";

/**
 * QuizHandler is react component responsible for tracking users responses
 * this will be the main handler to manage the state and logic for the new quiz component
 * @param {Object} props will be the injectable fields that will populate and provide the
 * component with information.
 */
const QuizHandler = (props) => {
  const { state } = useMainStateContext();
  const [currentLabId, setCurrentLab] = useState(props.labId);
  let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
  const [answerOption, setAnswerOption] = useState([]);
  // initialized to a empty array to house recorded answers
  let [disableNext, setDisableNext] = useState(true);

  useEffect(() => {
    setCurrentLab(props.labId);
    if (!props.isFinalQuiz) {
      const quiz = props.questions;
      const quizAnswers = props.questions[currentQuestionCursor].answers;
      props.setQuestions(quiz);
      setAnswerOption(quizAnswers);
    } else {
      getQuiz();
    }
  }, []);

  async function getQuiz() {
    try {
      const response = await labService.getLabQuiz(props.labId);
      const { quiz } = response[0];
      const quizAnswers = quiz[currentQuestionCursor].answers;
      props.setQuestions(quiz);
      setAnswerOption(quizAnswers);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * HandleNext() is a function that is responsible for allowing the user to
   * iterate to the next question. this will then update the disabling for the
   * selection on the next question as it iterates to the next option
   */
  function handleNext() {
    if (currentQuestionCursor < props.questions.length) {
      let updateCursor = currentQuestionCursor + 1;
      setCurrentQuestionCursor(updateCursor);
      setAnswerOption(props.questions[updateCursor].answers);
      setDisableNext(true);
    }
  }

  /**
   * handleBack() is a function that allows the user to
   * return to the previous question
   */
  const handleBack = () => {
    if (currentQuestionCursor < props.questions.length) {
      let updateCursor = currentQuestionCursor - 1;
      if (props.questions[currentQuestionCursor].multiChoice) {
        let tempAnswers = props.selectedAnswers;
        tempAnswers.splice(currentQuestionCursor);
        props.setSelectedAnswers(tempAnswers);
      }
      if (props.questions[updateCursor].multiChoice) {
        let tempAnswers = props.selectedAnswers;
        tempAnswers.splice(updateCursor);
        props.setSelectedAnswers(tempAnswers);
      }
      setCurrentQuestionCursor(updateCursor);
      setAnswerOption(props.questions[updateCursor].answers);
      setDisableNext(true);
    }
  };

  /**
   * onComplete is a function that is responsible for preparing and running the
   * calculations to grade a users responses to the quiz. This will then prepare the data
   * to display to the user for the result portion of the quiz.
   */
  function onComplete() {
    scoreResults();
    props.setQuizCompleted(true);
  }

  /**
   * checkIfCorrect checks to see if the users answer is correct by using the passed
   * answerIndex and referencing the question using the questionIndex and checking the
   * answer
   * @param {integer} answerIndex passed to check the questions answer
   * @param {integer} questionIndex passed to check what question the answer should be checked against
   */
  function checkIfCorrect(answerIndex, questionIndex) {
    let isCorrect;
    props.questions[questionIndex].answers[answerIndex].val === 1
      ? (isCorrect = true)
      : (isCorrect = false);
    return isCorrect;
  }

  /**
   * getMultiCorrectNumCount checks the question by using questionIndex and then returns the number of of
   * correct answers to the question
   * @param {integer} questionIndex passed to check how many correct answers there are
   * for the passed index
   */
  function getMultiCorrectNumCount(questionIndex) {
    let multiCount = 0;
    props.questions[questionIndex].answers.map((answer) => {
      if (answer.val === 1) {
        multiCount++;
      }
    });
    return multiCount;
  }

  /**
   * scoreResults takes all the users answers and checks to see if they are correct
   * it then proceeds to update the results to allow for them to be displayed
   * scoreResults also PUSHes the answers to the database aswell as the quiz score
   */
  function scoreResults() {
    let questionsTotal = props.questions.length;
    let output = [];
    const QuizQuestions = {
      question: "",
      selectAnswers: {},
      IsCorrect: false,
    };
    for (let i = 0; i < questionsTotal; i++) {
      let tempQuestion = { ...QuizQuestions };
      tempQuestion.question = props.questions[i].question;
      tempQuestion.number = i + 1;
      if (props.questions[i].multiChoice) {
        // logic for multi select
        let userAnswers = [...props.selectedAnswers[i]];
        tempQuestion.selectAnswers = userAnswers;
        let isCorrect = userAnswers.map((element) => {
          return checkIfCorrect(element, i);
        });
        isCorrect.every((value) => value === true)
          ? (tempQuestion.IsCorrect = true)
          : (tempQuestion.IsCorrect = false);
        if (tempQuestion.IsCorrect) {
          tempQuestion.IsCorrect =
            getMultiCorrectNumCount(i) === isCorrect.length ? true : false;
        }
        output.push(tempQuestion);
      } else {
        // logic for non multi select
        let userAnswers = { ...props.selectedAnswers[i] };
        tempQuestion.selectAnswers = userAnswers;
        checkIfCorrect(userAnswers.type, i)
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

    props.setResult(countCorrect / questionsTotal);
    if (props.isFinalQuiz) {
      UserLabService.complete_quiz(
        props.labId,
        (countCorrect / questionsTotal) * 100,
        JSON.stringify(output),
      );
      if (props.user.firstname !== null) {
        UserLabService.user_complete_quiz(
          props.user.userid,
          props.labId,
          Math.ceil((countCorrect / questionsTotal) * 100),
        );
      }
    } else {
      props.submitData(
        output,
        props.user.userid,
        props.labId,
        Math.ceil((countCorrect / questionsTotal) * 100),
      );
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
    let tempSelectedAnswers;
    tempSelectedAnswers = [...props.selectedAnswers];
    tempSelectedAnswers[currentQuestionCursor] = {
      content:
        props.questions[currentQuestionCursor].answers[answerValue].content,
      val: 1,
      type: answerValue,
    };
    props.setSelectedAnswers(tempSelectedAnswers);
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
    let tempAnswers = props.selectedAnswers;
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
    props.setSelectedAnswers(tempAnswers);
  }

  return (
    <div className={"tw-rounded-lg"}>
      {!props.quizCompleted ? (
        <Quiz
          answer={""}
          answerOptions={answerOption}
          disable={disableNext}
          multiChoice={props.questions[currentQuestionCursor].multiChoice}
          multiSelectedEntry={selectMulti}
          nextQuestion={handleNext}
          lastQuestion={handleBack}
          onAnswerSelected={selectAnswer}
          onComplete={onComplete}
          questionId={currentQuestionCursor + 1}
          question={props.questions[currentQuestionCursor].question}
          questionTotal={props.questions.length}
          isFinalQuiz={props.isFinalQuiz}
        />
      ) : (
        <Result
          quizResult={Math.round(props.result * 100) + "%"}
          quizScore={100}
          selectedAnswers={props.selectedAnswers}
          quizQuestions={props.questions}
          labId={currentLabId}
          state={state}
          lab={state.main.lab}
        />
      )}
    </div>
  );
};
QuizHandler.propTypes = {
  labId: PropTypes.number,
  quizQuestions: PropTypes.array,
  isFinalQuiz: PropTypes.bool.isRequired,
  hideCertificate: PropTypes.bool.isRequired,
  submitData: PropTypes.func,
  user: PropTypes.shape({
    firstname: PropTypes.string,
    userid: PropTypes.number,
  }),
  quizCompleted: PropTypes.bool,
  setQuizCompleted: PropTypes.func,
  selectedAnswers: PropTypes.array.isRequired,
  setSelectedAnswers: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  setQuestions: PropTypes.func.isRequired,
  result: PropTypes.number,
  setResult: PropTypes.func,
};
export default QuizHandler;
