/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../../../assets/stylesheets/components/Score.scss";

const Score = ({ totalScore, intrusions, protectedTP, incorrectFP }) => {
  return (
    <div className="scores">
      <div className="scoreDetails">
        <div className="totalScoreDiv">
          <p className="totalScore">Total Score: {totalScore}</p>
        </div>

        <div className="scoreItemsDiv">
          <p className="scoreItem">Intrusions: {intrusions}</p>
          <p className="scoreItem">Protected (TP): {protectedTP}</p>
          <p className="scoreItem">Incorrect (TP): {incorrectFP}</p>
        </div>
      </div>
    </div>
  );
};
export default Score;
