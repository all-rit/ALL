import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import { AppBar } from "@material-ui/core";

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
        <div className="cognitive_instructions">
          <div>
            <AppBar position="static" className="appBar">
              <h4 className="flex-boxes ">
                Congratulations! You have successfully completed the Machine
                Learning Exercise!
              </h4>
            </AppBar>
          </div>
        </div>
        <h4 className="flex-boxes">
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
