import React, { useEffect } from 'react';
import { navigate } from 'react-router-dom';
import useMainStateContext from 'src/reducers/MainContext';
import { EXERCISE_PLAYING } from 'src/constants/index';
import LabButton from '../../../../all-components/LabButton';

const AIReasoning = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate('/Lab6/Exercise/AIRepair');
  };

  return (
    <div className="center-div">
      <h2 className="tw-title tw-text-left tw-my-6">AI Candidate Reasoning:</h2>
      <div className="tw-body-text tw-text-left tw-my-6">
        The reason that the AI was not recommending certain people it should
        have been was because the AI was taking into account whether the
        interviewee was wearing glasses or a hat in the image. It had nothing to
        do with the applicants work qualities, the AI was prejudice against what
        the people were wearing in the pictures.
      </div>
      <div className="tw-body-text tw-text-left tw-my-6">
        {' '}
        Click the &quot;Continue&quot; button to proceed to the repair section
        to repair the AI!
      </div>
      <LabButton onClick={handleContinue} label={'Continue to Repair'} />
    </div>
  );
};

export default AIReasoning;
