import React from "react";
import Circle from "../components/circle";
import { navigate } from "@reach/router";
import "./landingpage.css";

const MainInstructions = () => {
  const handleNext = () => {
    navigate("/Imagine/ExperientialExercise");
  };
  return (
    <div className="mainInstructionsContainer">
      <h2 className="playthrough__title">
        Experiential Empathy Building: Instructions
      </h2>

      <p className="playthrough__sentence__imagine">
        You are about to play a exercise involving three colored circles, the
        same size as this one:
      </p>
      <div className="center">
        <Circle color={"blue"} clickable={false} />
      </div>
      <ul className="study__list">
        <li className="playthrough__sentence__imagine">
          You will need to <strong>click the circle</strong> in the center of
          the screen.
        </li>
        <li className="playthrough__sentence__imagine">
          The circle will be 1 of 3 colors.
        </li>
        <li className="playthrough__sentence__imagine">
          The color you need to click will appear in the{" "}
          <strong>bottom left</strong> corner of the screen.
        </li>
        <li className="playthrough__sentence__imagine">
          The colors you should <strong>avoid</strong> clicking will appear in
          the <strong>bottom right</strong> of the screen.
        </li>
        <li className="playthrough__sentence__imagine">
          You will gain or lose points based on if you clicked the{" "}
          <strong>correct or incorrect</strong> circle and based on{" "}
          <strong>how fast you clicked</strong> the correct colored circle. So
          click as fast as you possibly can!
        </li>
        <li className="playthrough__sentence__imagine">
          The color changes in the center of the screen every second for fifteen
          seconds.
        </li>
      </ul>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNext}
        key="start"
      >
        Start
      </button>
    </div>
  );
};

export default MainInstructions;
