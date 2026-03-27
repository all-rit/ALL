import React, { useEffect } from 'react';
import { navigate } from 'react-router-dom';
import UserLabService from '../../../../services/UserLabService';
import { LAB_ID } from '../../../../constants/lab7';
import useMainStateContext from 'src/reducers/MainContext';
import { EXERCISE_IDLE } from 'src/constants/index';
import LabButton from '../../../all-components/LabButton';

/**
 * Represents the component for the exercise end page.
 * @returns {JSX.Element} The exercise end component.
 */
const ExerciseEnd = () => {
  const { state, actions } = useMainStateContext();

  const handleHome = () => {
    navigate('/Lab7/Exercise/ExerciseStart');
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
    }
  }, [state.main.user]);

  return (
    <>
      <div className="center-div">
        <h1 className={'tw-title tw-text-left'}> Exercise Complete </h1>
        <p className="tw-body-text tw-my-6">
          Congratulations! You&lsquo;ve finished the AI Cybersecurity Module.
        </p>
        <p className="tw-body-text tw-my-6">
          Click the <strong>&lsquo;Return to Exercise Start&lsquo;</strong>{' '}
          button to return to the Exercise start page or click the
          &lsquo;Next&lsquo; button to continue onto the Reinforcement section.
        </p>
        <LabButton
          onClick={handleHome}
          key="start"
          label={'Return to Exercise Start'}
        >
          Return to Exercise Start
        </LabButton>
      </div>
    </>
  );
};

export default ExerciseEnd;
