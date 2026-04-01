import React, { useEffect } from 'react';
import { navigate } from 'react-router-dom';
import { EXERCISE_PLAYING } from '@/constants/index';
import useMainStateContext from '@/reducers/MainContext';

/**
 * Renders the component that explains the behavior of a bad AI in file access management.
 * The AI makes mistakes when it comes to managing file access when threats are detected in the system.
 * It uses only one piece of sensitive information within the file to determine the sensitivity of the entire file.
 *
 * @returns {JSX.Element} The rendered BadAIExplanation component.
 */
const BadAIExplanation = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleStart = () => {
    actions.updateUserState(EXERCISE_PLAYING);
    navigate('/Lab7/Exercise/AICodeRepair');
  };

  return (
    <div>
      <h2 className={'tw-title tw-text-left'}> Simulation Explanation</h2>
      <p className="tw-body-text tw-text-left tw-my-6">
        As you can see, the AI made many mistakes when it came to managing file
        access when threats were detected in the system.
      </p>
      <p className="tw-body-text tw-text-left tw-my-6">
        This is due to the factors of the files that the AI is using to
        determine if a file&lsquo;s access should be restricted or not.
      </p>
      <p className="tw-body-text tw-text-left tw-my-6">
        The AI is currently only using one piece of sensitive information within
        the file to determine the sensitivity of the entire file.
      </p>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleStart}
        key="start"
      >
        Start
      </button>
    </div>
  );
};

export default BadAIExplanation;
