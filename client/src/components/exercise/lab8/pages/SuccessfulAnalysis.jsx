import React from 'react';
import { useNavigate } from 'react-router-dom';
import LabButton from '../../../all-components/LabButton';

const SuccessfulAnalysis = () => {
  const handleNav = () => {
    navigate('/Lab8/Exercise/Conclusion');
  };

  return (
    <div className={'tw-p-6'}>
      <h2 className={'tw-title tw-text-left'}> AI Analysis Successful</h2>
      <div>
        <p className={'tw-body-text tw-py-6'}>
          The chatroom AI effectively demonstrated its ability to retain and
          discard comments appropriately by dynamically adjusting comment
          weights based on updated parameters.
        </p>
        <p className={'tw-body-text tw-pb-6'}>
          By properly setting weights and training the AI, you are able to
          achieve your preferred use case outcome. Click the{' '}
          <strong>Continue</strong> button below to move on to the conclusion.
        </p>
      </div>
      <LabButton label={'Continue'} onClick={handleNav} />
    </div>
  );
};

export default SuccessfulAnalysis;
