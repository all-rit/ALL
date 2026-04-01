import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EXERCISE_PLAYING } from '@/constants/index';
import useMainStateContext from '@/reducers/MainContext';

const BypassBlocksGuideline = () => {
  const { actions } = useMainStateContext();

  const handleSubmit = () => {
    navigate('/Lab4/Exercise/CodeChangeBlocks');
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <div className={'tw-p-10'}>
      <h2 className="tw-title tw-text-left">Was That Difficult?</h2>
      <br />
      <p className="tw-body-text tw-font-medium tw-text-left">
        People with mobile dexterity disabilities sometimes use a keyboard to
        navigate the page. This can be cumbersome if there is no way to skip to
        the main section. Software should follow the{' '}
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          WGAC 2.4.1: Bypass Blocks Guideline
        </a>
        . Go ahead and make the changes to the code by clicking “continue”.
      </p>
      <br />
      <button
        onClick={handleSubmit}
        className="btn tw-bg-secondary-gray tw-cursor-pointer tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
      >
        Continue
      </button>
    </div>
  );
};

export default BypassBlocksGuideline;
