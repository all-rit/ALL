/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import UserLabService from "../../../../services/UserLabService";
import "./secondaryInstructions.css";
import { LAB_ID } from "../../../../constants/lab2";
import LabButton from "../../../all-components/LabButton";

/*
Responsible for displaying the fourth and final page of instructions to the users
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

  useEffect(() => {
    if (background !== "white") {
      toWhiteBackground();
    }
  }, []);

  const closeInstructions = () => {
    closePage();
  };

  return (
    <div className=" tw-flex tw-flex-col tw-p-6 tw-text-justify tw-justify-between">
      <p className="tw-title">Exercise Complete</p>
      <div>
        <p className="tw-body-text">
          Now that you've made some adjustments and played the exercise again,
          it's time to make one last decision:
        </p>
        <ul>
          <li>
            <br />
            <p className="tw-body-text tw-font-medium">
              Option #1: You can click the "Continue Playing!" button to try and
              get a higher score with your current color configuration. You will
              also be able to try out other color vision deficiencies with your
              color configuration.
            </p>
          </li>
          <li>
            <br />
            <p className="tw-body-text tw-font-medium">
              Option #2: You can click the "I'm Finished!" button to finalize
              the application and see the conclusion (you can play more but all
              of your work will be reset to the beginning).
            </p>
            <br />
          </li>
          <li>
            <p className="tw-body-text tw-font-medium">
              Option #3: You can click the "Make Adjustments!" button to change
              the colors you are using in the system to attempt to get a higher
              score or to improve the contrast in the colors you are using.
            </p>
            <br />
          </li>
        </ul>
      </div>
      <div className="center tw-gap-x-3">
        <LabButton onClick={closeInstructions} label={"Continue Playing"} />
        <LabButton onClick={endExercise} label={"End Exercise"} />
        <LabButton onClick={activatePopup} label={"Make Changes"} />
      </div>
    </div>
  );
};

export default FourthInstructions;
