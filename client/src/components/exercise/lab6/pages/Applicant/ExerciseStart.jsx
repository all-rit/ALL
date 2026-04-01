import React, { useEffect } from 'react';
import { navigate } from 'react-router-dom';
import { EXERCISE_IDLE, EXERCISE_PLAYING } from '@/constants/index';
import useMainStateContext from '@/reducers/MainContext';
import LabButton from '../../../../all-components/LabButton';

const ExerciseStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate('/Lab6/Exercise/AvatarSelection');
  };

  return (
    <div className="center-div">
      <h2 className="tw-title tw-text-left tw-my-6">
        Exercise Part 1: Applicant
      </h2>
      <div className="tw-body-text tw-text-left">
        In this exercise you will be applying to the company “MegaCorp.” During
        the process you will experience AI-based bias, and be asked to make
        changes to the AI.
      </div>
      <div className="tw-body-text tw-text-left tw-my-6">
        Click the “Start” button to begin this exercise!
      </div>
      <LabButton label={'Start'} onClick={handleStart} />
    </div>
  );
};

export default ExerciseStart;
