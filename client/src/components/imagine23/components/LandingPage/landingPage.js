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
      <div id="Header">
        <p className="mainTitle">Welcome!</p>
      </div>
      <div id="Body">
        <MainInstructions />
        <p
          className="mainInstructionList"
          style={{ marginTop: "40px", marginBottom: "10px" }}
        >
          When you are ready, click the 'Let's Get Started' button to begin the
          exercise
        </p>
        <div className="center">
          <Button
            clickMethod={closePage}
            message={"Lets Get Started!"}
            fontSizing={"25px"}
          />
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default LandingPage;
