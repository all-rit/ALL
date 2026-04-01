import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_PLAYING } from '@/constants/index';
import LabButton from '../../../../all-components/LabButton';

const EmployerStart = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleStart = () => {
    navigate('/Lab6/Exercise/FavorableHiringCandidate');
  };

  return (
    <div className="center-div">
      <h2 className="tw-title tw-text-left tw-my-6">
        Exercise Part 2: Employer
      </h2>
      <div className="tw-body-text tw-text-left tw-my-6">
        In this part of the exercise, you will be looking at applications for
        “MegaCorp” as a hiring manager with an AI assistant to help you pare
        down the applicants. The AI does have an error, see if you can find it.
      </div>
      <div className="tw-body-text tw-text-left tw-my-6">
        Click the “Continue” button to begin the second half of this exercise!
      </div>
      <LabButton label={'Continue'} onClick={handleStart} />
    </div>
  );
};

export default EmployerStart;
