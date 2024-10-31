/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import useScroll from "../../../../use-hooks/useScroll";
import Button from "../components/header/buttons/button";
import MainInstructions from "./mainInstructions";

const LandingPage = ({ endFirstExercise, toWhiteBackground, background }) => {
  useScroll();

  const closePage = () => {
    endFirstExercise();
  };

  if (background !== "white") {
    toWhiteBackground();
  }

  return (
    <div>
      <div id="Header" className={""}>
        <p className="tw-title-styling-name">Exercise Overview</p>
      </div>
      <div id="Body">
        <MainInstructions />
        <div className="mainInstructionsContainer tw-py-4 tw-text-left">
          <p className="tw-body-styling-name tw-font-medium">
            To help track your exercise history and to help ensure we are
            providing you with the best possible learning experience, please
            sign in with Google.
          </p>
        </div>
        <p className="tw-body-styling-name tw-font-medium">
          When you are ready, click the <strong>'Let's Get Started'</strong>{" "}
          button to begin the exercise
        </p>
        <div className="center tw-my-3">
          <Button
            clickMethod={closePage}
            message={"Lets Get Started!"}
            fontSizing={"25px"}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
