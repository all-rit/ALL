import React from 'react';
import useMainStateContext from '@/reducers/MainContext';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { EXERCISE_PLAYING } from '@/constants/index';
import { ExerciseService } from '@/services/lab14/ExerciseService';

const ExerciseIntro = () => {
  const { actions, state } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const startExercise = async () => {
    const body = {
      userid: state.main.user.userid,
      isExerciseComplete: false,
      hasViewed: true,
    };
    await ExerciseService.submitExercise(body);
  };

  const handleContinue = () => {
    startExercise();
    navigate('/Lab14/Exercise/Superposition');
  };

  return (
    <div className="center-div">
      <h1 className="tw-title tw-text-left">Exercise Start</h1>
      <p className="tw-body-text tw-text-left tw-py-4 tw-mb-8">
        Congratulations! You have been accepted for the position of quantum
        researcher at ALL Research and Development Labs. You are tasked with
        investigating how quantum computing can impact cryptography,
        specifically in relation to ciphers and data security. First, we are
        going to refresh your memory on the quantum concepts of superposition
        and entanglement. Then, we will explore how effective quantum computing
        can be at solving ciphers through a series of activities.
      </p>
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Start</strong> button to begin the exercise!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default ExerciseIntro;
