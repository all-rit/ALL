/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../../../assets/stylesheets/components/ScoreTally.scss";

const ScoreTally = ({ totalScore, intrusions, protectedTP, incorrectFP }) => {
  return (
    <div className="scoreTally">
      <div className="scoreTallyDetails">
        <div className="scoreItemsTallyDiv">
          <p className="scoreItemTally">Total Score: {totalScore}</p>
          <p className="scoreItemTally">Intrusions: {intrusions}</p>
          <p className="scoreItemTally">Protected (TP): {protectedTP}</p>
          <p className="scoreItemTally">Incorrect (TP): {incorrectFP}</p>
        </div>
      </div>
    </div>
  );
};
export default ScoreTally;
