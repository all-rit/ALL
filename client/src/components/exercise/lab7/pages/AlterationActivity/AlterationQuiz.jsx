import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { default as Quiz } from '../../../../quiz/components/QuizHandler';
import { EXERCISE_IDLE } from '@/constants/index';
import { useNavigate } from 'react-router-dom';
import { MathJax } from 'better-react-mathjax';
import ExerciseService from '../../../../../services/lab7/ExerciseService';
import useMainStateContext from '@/reducers/MainContext';
import alterationQuizQuestions from '@/constants/lab7/alterationQuestions';

/**
 * Renders the Alteration Quiz component.
 *
 * @returns {JSX.Element} The rendered Alteration Quiz component.
 */
const AlterationQuiz = () => {
  const [showContinue, setShowContinue] = useState(false);
  const [quizCompleted, setQuizComplete] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [questions, setQuestions] = useState(alterationQuizQuestions);
  const [result, setResult] = useState(0);
  const { state: mainState, actions: mainActions } = useMainStateContext();

  useEffect(() => {
    if (mainState.state === EXERCISE_IDLE)
      setTimeout(() => navigate('/Lab7/Exercise/AlterationStart'));
  }, [mainState.state]);

  const handleContinue = () => {
    mainActions.updateUserState(EXERCISE_IDLE);
    navigate('/Lab7/Exercise/ExerciseEnd');
  };

  const handleSubmitData = (output, userId) => {
    ExerciseService.submitRepair(output, userId);
    setQuizComplete(true);
    setShowContinue(true);
  };

  return (
    <div className="center-div">
      <p className="tw-title tw-text-left tw-p-3">Alteration Quiz</p>
      <p className={'playthrough__sentence'}>
        How does the <b>new utility equation</b> impact the autonomous system
        compared to the <b>original utility equation</b>?
      </p>
      <div className={'tw-flex tw-flex-col playthrough__sentence'}>
        <MathJax>{String.raw`Original\;Utility\;Equation=\frac{Reward\;Value}{Cost\;Value}`}</MathJax>
      </div>
      <Quiz
        path={`/AlterationQuiz`}
        labId={7}
        user={mainState.main.user}
        hideCertificate
        isFinalQuiz={false}
        submitData={handleSubmitData}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        questions={questions}
        setQuestions={setQuestions}
        quizCompleted={quizCompleted}
        setQuizCompleted={() => {
          return true;
        }}
        result={result}
        setResult={setResult}
      />
      {showContinue && (
        <button
          className="btn btn-primary text-black btn-xl text-uppercase tw-mt-4"
          onClick={handleContinue}
          key="start"
        >
          Continue
        </button>
      )}
    </div>
  );
};
AlterationQuiz.propTypes = {
  setQuizCompleted: PropTypes.func,
};

export default AlterationQuiz;
