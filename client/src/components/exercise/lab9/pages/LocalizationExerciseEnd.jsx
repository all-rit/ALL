import { navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { LAB_ID } from '@/constants/lab9/index';
import UserLabService from '@/services/UserLabService';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_IDLE } from '@/constants/index';
import LabButton from '../../../all-components/LabButton';

const Conclusion = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    // navigate to the reinforcement section
    actions.updateUserState(EXERCISE_IDLE);
    await navigate('/Lab9/Reinforcement');
    await UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      await UserLabService.user_complete_exercise(
        state.main.user.userid,
        LAB_ID,
      );
    }
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
  }, []);

  return (
    <>
      <div className="center-div">
        <h1 className={'tw-title tw-text-left tw-my-6'}> Exercise Complete</h1>
        <div className="tw-body-text tw-my-6">
          You have completed the exercise for the Accessible to Localization
          Lab. Your takeaways from this exercise should include:
        </div>
        <div className="tw-body-text tw-px-3">
          1. Recognize the importance of accessible software for non-English
          speakers.
        </div>
        <div className="tw-body-text tw-px-3">
          2. Consider all cultures and locales when designing accessible
          software.
        </div>
        <div className="tw-body-text tw-px-3">
          3. Consider all aspects of software during the localization process,
          including color, text, images, and more.
        </div>
      </div>
      <br />
      <div className="tw-body-text tw-my-6">
        Click the &#39;Continue&#39; button to continue to the Reinforcement
        section of the lab.
      </div>
      <LabButton onClick={handleFinish} key="start" label={'Continue'} />
    </>
  );
};

export default Conclusion;
