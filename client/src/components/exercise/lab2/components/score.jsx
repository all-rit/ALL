/* eslint-disable react/prop-types */
import './exerciseStyle.css';

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
}) => {
  return (
    <div className="scoreLine tw-rounded-b-lg tw-p-5 tw-mt-5 tw-py-10 tw-text-white">
      <p className="tw-body-text">Current Score: {score}</p>
      <p className="tw-body-text">Correct Clicks: {rightClick}</p>
      <p className="tw-body-text">Incorrect Clicks: {wrongClick}</p>
      <p className="tw-body-text">Correct Non-Clicks: {rightNoClick}</p>
      <p className="tw-body-text">Incorrect Non-Clicks: {wrongNoClick}</p>
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
