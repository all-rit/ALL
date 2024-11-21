/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "reactstrap";
import UserLabService from "../../../../services/UserLabService";
import "./secondaryInstructions.css";
import { LAB_ID } from "../../../../constants/lab2";

/*
Responible for displaying the fourth and final page of instructions to the users
*/
const FourthInstructions = ({
  closePage,
  activatePopup,
  endSystem,
  toWhiteBackground,
  background,
  user,
}) => {
  const endExercise = () => {
    endSystem();
    closePage();
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
  };

  if (background !== "white") {
    toWhiteBackground();
  }

  const closeInstructions = () => {
    closePage();
  };

  return (
    <div className=" tw-flex tw-flex-col tw-h-[35rem] tw-p-6 tw-text-justify tw-justify-between">
      <p className="tw-title">Nice work!</p>
      <div>
        <p className="tw-body-copy tw-font-medium">
          Now that you've made some adjustments and played the exercise again,
          it's time to make one last decision:
        </p>
        <ul>
          <li>
            <br />
            <p className="tw-body-copy tw-font-medium">
              Option #1: You can click the "Continue Playing!" button to try and
              get a higher score with your current color configuration. You will
              also be able to try out other color vision deficiencies with your
              color configuration.
            </p>
          </li>
          <li>
            <br />
            <p className="tw-body-copy tw-font-medium">
              Option #2: You can click the "I'm Finished!" button to finalize
              the application and see the conclusion (you can play more but all
              of your work will be reset to the beginning).
            </p>
            <br />
          </li>
          <li>
            <p className="tw-body-copy tw-font-medium">
              Option #3: You can click the "Make Adjustments!" button to change
              the colors you are using in the system to attempt to get a higher
              score or to improve the contrast in the colors you are using.
            </p>
            <br />
          </li>
        </ul>
      </div>
      <div className="center tw-gap-x-3">
        <Button
          className="btn btn-primary tw-text-nowrap tw-text-[1.25rem]"
          onClick={closeInstructions}
        >
          Continue Playing
        </Button>
        <Button
          className="btn btn-primary tw-text-nowrap tw-text-[1.25rem]"
          onClick={endExercise}
        >
          I'm Finished
        </Button>
        <Button
          className="btn btn-primary tw-text-nowrap tw-text-[1.25rem]"
          onClick={activatePopup}
        >
          Make Changes
        </Button>
      </div>
    </div>
  );
};

export default FourthInstructions;
