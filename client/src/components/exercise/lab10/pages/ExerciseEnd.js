import React, { Fragment } from "react";
import { navigate } from "@reach/router";

const ExerciseEnd = () => {
  /**
   * Redirect the user to the following page
   */
  const handleHome = () => {
    return navigate("/Lab10/Exercise");
  };

  return (
    <Fragment>
      <div className="center-div">
        <h1 className={"tw-title tw-text-left tw-pb-6"}> Exercise Complete </h1>
        <h4 className="tw-body-text tw-text-left ">
          Congratulations! You have successfully completed the Machine Learning
          Exercise!
        </h4>
        <h4 className="tw-body-text tw-text-left">
          Click the button below to restart the exercise.
        </h4>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleHome}
          key="start"
        >
          Return to Exercise Start
        </button>
      </div>
    </Fragment>
  );
};

export default ExerciseEnd;
