/* eslint-disable require-jsdoc */
import { React, useEffect, useState } from 'react';
import { PropTypes } from 'victory';
import Quiz from './Quiz';
import Result from './Result';

// TODO: This Removed to add in service functionality
import QuestionsLab1 from '../api/Lab1/quizQuestions';
import QuestionsLab2 from '../api/Lab2/quizQuestions';
import QuestionsLab3 from '../api/Lab3/quizQuestions';
import QuestionsLab4 from '../api/Lab4/quizQuestions';
import QuestionsLab5 from '../api/Lab5/quizQuestions';

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
          question: 'Default',
          answers: [
            {
              val: 0,
              content: 'Default',
            },
          ],
          multiChoice: false,
        },
      ];
  }
}
/**
 * QuizHandler is react component responsible for tracking users
 * @param {*} props
 */
const QuizHandler = (props) => {
  const [currentLabId, setCurrentLab] = useState(props.labId);
  let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
  const [questions, setQuestions] = useState(assignQuizQuestions(props.labId));
  const [answerOption, setAnswerOption] = useState(
    questions[currentQuestionCursor].answers
  );
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // eslint-disable-next-line no-undef
  const handleNext = () => {
    currentQuestionCursor < questions.length
      ? setCurrentQuestionCursor(currentQuestionCursor + 1)
      : console.log('I am at the end');
  };

  const selectAnswer = () => {};

  useEffect(() => {
    // this is gonna gonna be temp function to be removed
  });

  return (
    <>
      {!quizCompleted ? (
        <Quiz
          answer={true}
          answerOptions={answerOption}
          questionId={currentQuestionCursor + 1}
          question={questions[currentQuestionCursor].question}
          questionTotal={questions.length}
          onAnswerSelected={''}
          nextQuestion={() => handleNext()}
          disable={false}
          multiChoice={() => {}}
        ></Quiz>
      ) : (
        <Result
          quizResult={''}
          quizScore={100}
          selectedAnswers={['']}
          quizQuestions={['']}
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
