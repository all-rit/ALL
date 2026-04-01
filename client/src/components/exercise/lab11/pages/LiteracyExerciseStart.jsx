import { navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_IDLE, EXERCISE_PLAYING } from '@/constants/index';

const LiteracyExerciseStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate('/Lab11/Exercise/InformationLetterIntroduction');
  };

  return (
    <div className="center-div">
      <div className="guidance">
        <h1 className={'tw-title tw-text-left tw-pb-6'}> Exercise Start </h1>
        <p className="tw-body-text tw-text-left">
          Welcome to ALL University! In this exercise, you are a student and
          receive an email from ALL University for their family weekend event.
          However, the email is difficult to understand due to the amount of
          complex words, so you are unsure of what events will occur during the
          family weekend event.
        </p>
        <p className="tw-body-text tw-text-left tw-py-6">
          In this exercise, you will implement the Fog Index formula, which
          measures readability, by calculating the total number of words, total
          number of sentences, and total number of complex words. Afterwards,
          you will use the Fog Index to edit the email to increase readability.
        </p>
      </div>
      <p className="tw-body-text tw-text-center tw-pb-6 ">
        Click the <strong>Start</strong> button to begin this exercise!
      </p>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleStart}
        key="start"
      >
        Start
      </button>
    </div>
  );
};

export default LiteracyExerciseStart;
