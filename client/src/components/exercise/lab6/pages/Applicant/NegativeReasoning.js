import React, { useEffect } from 'react';
import { navigate } from 'react-router-dom';
import useMainStateContext from 'src/reducers/MainContext';
import { EXERCISE_PLAYING } from 'src/constants/index';
import LabButton from '../../../../all-components/LabButton';

const NegativeReasoning = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate('/Lab6/Exercise/AIAnalysisQuestions');
  };

  return (
    <div className="center-div">
      <div className={'tw-flex'}>
        <h2 className="tw-title tw-text-left tw-my-6">Decision:</h2>
        <h2 className="tw-title tw-text-left tw-my-6 tw-px-2 tw-text-brightRed">
          Not Chosen
        </h2>
      </div>
      <h2 className="tw-title tw-text-left tw-mb-6">Explanation</h2>
      <div className="tw-body-text tw-text-left tw-my-6">
        The reason you were not selected was because there were an overwhelming
        number of applicants and an AI was used to pare down the number of
        applications. Under normal circumstances a human would have made the
        decisions.
      </div>

      <LabButton label={'Continue'} onClick={handleContinue} key="confirm" />
    </div>
  );
};

export default NegativeReasoning;
