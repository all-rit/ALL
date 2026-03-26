// Post Wrong Newsletter (Page #3)

import { navigate } from 'react-router-dom';
import React from 'react';

const PostWrongDiploma = () => {
  const handleContinue = () => {
    navigate(`/Lab12/Exercise/FormRepair`);
  };

  return (
    <div className="center-div">
      <h1 className={'tw-title tw-text-left'}> Explanation </h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-py-6">
          As with before, the alumni newsletter used your non-preferred name.
          This makes you unrecognized by your college, a place where you spent
          so much time and made so many friends. As a community, we should be as
          considerate as possible to those around us, even if their beliefs
          contradict your own.
        </p>
        <p className="tw-body-text">
          Think about the difference a single input box would have made in this
          scenario, the difference between being accepted and appreciated for
          who you are as a person and just being another alum.
        </p>
      </div>
      <div className="tw-body-text tw-text-center tw-pb-6">
        Click the <strong>Continue to Repair</strong> button to fix the issue in
        this code!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue to Repair
        </button>
      </div>
    </div>
  );
};

export default PostWrongDiploma;
