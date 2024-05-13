/* eslint-disable react/prop-types */
import React from "react";
import "./exerciseStyle.scss";

/*
Component for displaying the score at the bottom of the page
*/
const Score = ({
  score,
  rightClick,
  wrongClick,
  rightNoClick,
  wrongNoClick,
  isHex,
  background,
  currentColor,
  exerciseMode,
}) => {
  return (
    <div className="scoreLine">
      <p className="scoreElement">Score: {score}</p>
      <p className="scoreElement">Number Correct From Click: {rightClick}</p>
      <p className="scoreElement">Number Incorrect From Click: {wrongClick}</p>
      <p className="scoreElement">
        Number Correct From Not Clicking: {rightNoClick}
      </p>
      <p className="scoreElement">
        Number Incorrect From Not Clicking: {wrongNoClick}
      </p>
      <p className="scoreElement">Exercise Mode: {exerciseMode}</p>
      {isHex ? (
        <div className="oneline">
          <p className="scoreElement spaceRight">Background: {background}</p>
          <p className="scoreElement spaceLeft">
            Current Color: {currentColor}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Score;
