import { React, useEffect } from 'react';
import { EXERCISE_PLAYING } from '@/constants/index';
import useMainStateContext from '@/reducers/MainContext';
import { useNavigate } from 'react-router-dom';
import { ExerciseService } from '@/services/lab13/ExerciseService';

const ExerciseIntroduction = () => {
  const navigate = useNavigate();
  const { state, actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const startExercise = async () => {
    const body = {
      userid: state.main.user.userid,
      isExerciseComplete: false,
      hasViewed: true,
    };
    await ExerciseService.submitExercise(body);
  };

  const handleContinue = () => {
    startExercise();
    navigate('/Lab13/Exercise/ConfidenceRanking');
  };

  return (
    <div>
      <h1 className={'tw-title tw-text-left'}>Exercise Start</h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          You are a student at ALL university who is doing their psychology
          homework. You are given 3 questions to answer and are allowed to use
          ALL&apos;s new Generative AI tool, AL, to help you answer them. You
          want to tackle each question from your least to most knowledgeable.
          Let&apos;s start with ranking your knowledge about each topic before
          you use AL to help you answer.
        </p>
        <div className="tw-body-text tw-text-center tw-pb-6">
          Click the <strong>Start</strong> button to begin the exercise!
        </div>
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase"
        onClick={handleContinue}
      >
        Start
      </button>
    </div>
  );
};

export default ExerciseIntroduction;
