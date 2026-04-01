import { navigate } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_PLAYING } from '@/constants/index';

const FogIndexFormulaConclusion = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(`/Lab11/Exercise/InformationLetterFogIndexFormula`);
  };

  return (
    <div className="center-div">
      <h1 className={'tw-title tw-text-left'}> Repairs Complete </h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-py-6 ">
          Great work, you implemented all 3 parts of the Fog Index formula, and
          the Fog Index widget now displays the correct Fog Index!
        </p>
        <p className="tw-body-text tw-text-left">
          The Fog Index of the email was 10.71, which is the equivalent of a
          post-graduate reading level. Since this email is intended for students
          and families of students, the Fog Index shouldn’t be higher than 10,
          or the reading level of a high school sophomore. To repair the
          readability of the email, you will choose one of the emails on the
          following page with a Fog Index of 10 or less.
        </p>
      </div>
      <div className="tw-body-text tw-pb-6 tw-text-center">
        Click the <strong>Continue to Exercise</strong> button.
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue to Exercise
        </button>
      </div>
    </div>
  );
};

export default FogIndexFormulaConclusion;
