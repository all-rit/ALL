/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import Circle from "../components/circle";

/*
Component for displaying the instructions at the bottom of the page of the
individual.
*/
const Instructions = ({
  correctColor,
  incorrectColorOne,
  incorrectColorTwo,
}) => {
  return (
    <div>
      <p className="thirdTitle center lowMargin">Instructions:</p>
      <div className="instruction tw-flex tw-flex-row tw-justify-between tw-w-100">
        <p className="fourthTitle tw-ml-20 Left tw-w-1/4">
          When this colored circle pops up, click it!
        </p>
        <p className="fourthTitle tw-w-1/4 tw-me-28">
          When either of these colored circles pop up, don't click them!
        </p>
      </div>
      <div className="circles tw-p-6">
        <div className="correctCircle">
          <Circle color={correctColor} />
        </div>
        <div className="incorrectCircle">
          <Circle color={incorrectColorOne} />
        </div>
        <div className="incorrectCircle">
          <Circle color={incorrectColorTwo} />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
