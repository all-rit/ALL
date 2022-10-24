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
  console.log(labId);
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
  let [selectedAnswers, setSelectedAnswers] = useState({});
  const [disableNext, setDisableNext] = useState(true);

  // eslint-disable-next-line no-undef
  function handleNext() {
    if (currentQuestionCursor < questions.length) {
      let updateCursor = currentQuestionCursor + 1;
      setCurrentQuestionCursor(updateCursor);
      setAnswerOption(questions[updateCursor].answers);
      setDisableNext(true);
    } else {
      console.log("They have hit the end of the quiz");
    }
  }

  function selectAnswer(e) {
    const answerValue = e.targe.value;
    console.log("Selected Answer: " + answerValue);
    
  }

  return (
    <>
      {!quizCompleted ? (
        <Quiz
          answer={""}
          answerOptions={answerOption}
          questionId={currentQuestionCursor + 1}
          question={questions[currentQuestionCursor].question}
          questionTotal={questions.length}
          onAnswerSelected={selectAnswer}
          nextQuestion={handleNext}
          disable={disableNext}
          multiChoice={questions[currentQuestionCursor].multiChoice}
        ></Quiz>
      ) : (
        // will spawn story for
        <Result
          quizResult={""}
          quizScore={100}
          selectedAnswers={[""]}
          quizQuestions={[""]}
          lab={[]}
        ></Result>
      )}
    </>
  );
};
QuizHandler.propTypes = {
  labId: PropTypes.integer.isRequired,
};
export default QuizHandler;
