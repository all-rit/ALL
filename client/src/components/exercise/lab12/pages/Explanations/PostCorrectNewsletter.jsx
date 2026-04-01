// Post Correct Newsletter (Page #5)

import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import useMainStateContext from '@/reducers/MainContext';
import { ExerciseService } from '@/services/lab12/ExerciseService';

const PostCorrectNewsletter = () => {
  const { state } = useMainStateContext();

  const setExerciseComplete = async () => {
    const body = {
      userid: state.main.user.userid,
      isFormRepairComplete: false,
      isDatabaseRepairComplete: false,
      hasViewed: true,
    };
    await ExerciseService.submitExercise(body);
  };

  useEffect(() => {
    setExerciseComplete();
  }, []);

  const handleContinue = () => {
    navigate(`/Lab12/Exercise/KeyTakeaways`);
  };

  return (
    <div className="center-div">
      <h1 className={'tw-title tw-text-left'}> Explanation </h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6">
          This time the alumni newsletter uses your preferred name, even years
          after you graduated. This not only affirms your beliefs in who you
          are, it also makes you proud of your school and hopeful for the next
          generation of people who identify outside of their given sex and name
          at birth.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the <strong>Continue</strong> button!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PostCorrectNewsletter;
