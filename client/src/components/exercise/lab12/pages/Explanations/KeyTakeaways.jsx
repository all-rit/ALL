// Key Takeaways (Page #6)

import React from 'react';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_IDLE } from '@/constants/index';
import UserLabService from '@/services/UserLabService';
import { LAB_ID } from '@/constants/lab12';
import { useNavigate } from 'react-router-dom';

const KeyTakeaways = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    actions.updateUserState(EXERCISE_IDLE);
    await navigate('/Lab12/Reinforcement');
    await UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      await UserLabService.user_complete_exercise(
        state.main.user.userid,
        LAB_ID,
      );
    }
  };

  return (
    <div className="center-div">
      <h1 className={'tw-title tw-text-left'}> Exercise Complete </h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-3">
          You have completed the exercise for Accessibility to Expression. Some
          of your key takeaways from this lab should include:
        </p>
        <ul>
          <li className={'tw-body-text'}>
            Gender is not a social construct, but one’s own feelings as to who
            they are as a person.
          </li>
          <li className={'tw-body-text'}>
            Companies and workplaces should strive for bias-free environments to
            increase collaboration, decrease stress, and promote bonding between
            coworkers.
          </li>
          <li className={'tw-body-text'}>
            Applications and forms should ask the user for their preferred name,
            pronouns, etc. and use them in all further communications.
          </li>
        </ul>
      </div>
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Continue</strong> button to move on the the
        Reinforcement Section!
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleFinish}
        key="start"
      >
        Continue
      </button>
    </div>
  );
};

export default KeyTakeaways;
