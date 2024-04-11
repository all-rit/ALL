import { React, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import Quiz from "./Quiz";
import Result from "./Result";
import UserLabService from "../../../services/UserLabService";
import alterationQuizQuestions from "src/constants/lab7/alterationQuestions";
import labService from "src/services/LabService";

/**
 * QuizHandler is react component responsible for tracking users responses
 * this will be the main handler to manage the state and logic for the new quiz component
 * @param {Object} props will be the injectable fields that will populate and provide the
 * component with information.
 */
const QuizHandler = (props) => {
  const [currentLabId, setCurrentLab] = useState(props.labId);
  let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
  const [questions, setQuestions] = useState([
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
  ]);
  const [answerOption, setAnswerOption] = useState([]);
  // initialized to a empty array to house recorded answers
  let [selectedAnswers, setSelectedAnswers] = useState([]);
  let [disableNext, setDisableNext] = useState(true);
  let [result, setResult] = useState({});

  useEffect(() => {
    setCurrentLab(props.labId);
    if (!props.isFinalQuiz) {
      const quiz = alterationQuizQuestions;
      const quizAnswers = quiz[currentQuestionCursor].answers;
      setQuestions(quiz);
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
      setQuestions(quiz);
      setAnswerOption(quizAnswers);
    } catch (error) {
      console.error(error);
    }
  }

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
    questions[questionIndex].answers[answerIndex].val === 1
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
    questions[questionIndex].answers.map((answer) => {
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
    let questionsTotal = questions.length;
    let output = [];
    const QuizQuestions = {
      question: "",
      selectAnswers: {},
      IsCorrect: false,
    };
    for (let i = 0; i < questionsTotal; i++) {
      let tempQuestion = { ...QuizQuestions };
      tempQuestion.question = questions[i].question;
      tempQuestion.number = i + 1;
      if (questions[i].multiChoice) {
        // logic for multi select
        let userAnswers = [...selectedAnswers[i]];
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
        let userAnswers = { ...selectedAnswers[i] };
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

    console.log("user score is: " + countCorrect / questionsTotal);
    console.log(output);
    setResult(countCorrect / questionsTotal);
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
          (countCorrect / questionsTotal) * 100,
        );
      }
    } else {
      props.submitData(
        output,
        props.user.userid,
        props.labId,
        (countCorrect / questionsTotal) * 100,
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
      {!props.quizCompleted ? (
        <Quiz
          answer={""}
          answerOptions={answerOption}
          disable={disableNext}
          multiChoice={questions[currentQuestionCursor].multiChoice}
          multiSelectedEntry={selectMulti}
          nextQuestion={handleNext}
          onAnswerSelected={(e) => selectAnswer(e)}
          onComplete={onComplete}
          questionId={currentQuestionCursor + 1}
          question={questions[currentQuestionCursor].question}
          questionTotal={questions.length}
          isFinalQuiz={props.isFinalQuiz}
        ></Quiz>
      ) : (
        <Result
          hideCertificate={props.hideCertificate}
          quizResult={result * 100 + "%"}
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
  labId: PropTypes.number,
  isFinalQuiz: PropTypes.bool.isRequired,
  hideCertificate: PropTypes.bool.isRequired,
  submitData: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string,
    userid: PropTypes.number,
  }),
  quizCompleted: PropTypes.bool,
  setQuizCompleted: PropTypes.func,
};
export default QuizHandler;
