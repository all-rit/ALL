import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LAB_ID } from '@/constants/lab4';
import UserLabService from '@/services/UserLabService';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_IDLE } from '@/constants/index';

const Finish = () => {
  const { actions, state } = useMainStateContext();

  const handleSubmit = () => {
    navigate('/Lab4/Exercise');
  };

  useEffect(() => {
    UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
    }
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  return (
    <div className={'tw-p-6'}>
      <h2 className={'tw-title tw-text-left tw-my-6'}> Exercise Complete</h2>
      <p className="tw-body-text tw-text-left">
        Congratulations! You have successfully completed the Dexterity Exercise!
      </p>
      <br />
      <p className="tw-body-text tw-text-left">
        If you would like to start the exercise from the beginning, click the{' '}
        <strong>Return to Exercise Start</strong> button below. To move on to
        the reinforcement section scroll down and click the{' '}
        <strong>Next</strong> button.
      </p>
      <button
        className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase tw-my-6"
        onClick={handleSubmit}
        key="start"
      >
        Return to Exercise Start
      </button>
    </div>
  );
};

export default Finish;
