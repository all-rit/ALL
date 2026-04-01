import React, { useEffect } from 'react';
import { navigate } from 'react-router-dom';
import { EXERCISE_PLAYING } from '@/constants/index';
import useMainStateContext from '@/reducers/MainContext';

const TargetGuideline = () => {
  const { actions } = useMainStateContext();
  const handleSubmit = () => {
    navigate('/Lab4/Exercise/CodeChangeTarget');
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <div className={'tw-p-10'}>
      <h2 className="tw-title tw-text-left">Was That Difficult?</h2>
      <br />
      <p className="tw-body-text tw-font-medium tw-text-left">
        People with mobile dexterity disabilities have a hard time clicking
        small buttons. To make sure your software is accessible by everyone,
        ensure that buttons follow the{' '}
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          WGAC 2.55 Target Guideline
        </a>
        . Buttons must be a minimum of <strong> 44 x 44 px</strong>. Go ahead
        and make the changes to the code by clicking “continue”.
      </p>
      <br />
      <button
        onClick={handleSubmit}
        className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
      >
        Continue
      </button>
    </div>
  );
};

export default TargetGuideline;
