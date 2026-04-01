// Pre Correct Diploma (Page #4)

import { useNavigate } from 'react-router-dom';
import React from 'react';

const PreCorrectDiploma = () => {
  const handleContinue = () => {
    navigate(`/Lab12/Exercise/Diploma`);
  };

  return (
    <div className="center-div">
      <h1 className={'tw-title tw-text-left'}> Explanation </h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-text tw-text-left tw-pt-6">
          This time, after being prompted for your preferred name and pronouns,
          and the database being updated to reflect these changes, your official
          ALL University diploma reflects your correct pronouns AND preferred
          name!
        </p>
      </div>
      <div className="tw-body-text tw-pb-6 tw-text-left">
        Click the <strong>Next</strong> button!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PreCorrectDiploma;
