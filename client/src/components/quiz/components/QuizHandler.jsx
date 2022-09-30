/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
/**
 * QuizHandler is react component responsible for tracking users
 * @param {*} props
 */
const QuizHandler = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  return (
    <>
      {!quizCompleted ? (
        <Quiz
          answer={[]}
          answerOptions={[
            {
              val: 0,
              content: "12 million",
            },
          ]}
          questionId={[]}
          question={""}
          questionTotal={0}
          onAnswerSelected={false}
          nextQuestion={""}
          disable={() => {}}
          multiChoice={() => {}}
        ></Quiz>
      ) : (
        <Result
          quizResult={this.state.result}
          quizScore={100}
          selectedAnswers={[""]}
          quizQuestions={[""]}
          lab={[]}
        ></Result>
      )}
    </>
  );
};
export default QuizHandler;
