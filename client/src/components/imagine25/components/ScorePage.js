import React from "react";
import { Button } from "reactstrap";

const ScorePage = () => {
  const navigation = () => {
    console.log("move to next page");
  };

  //Random score that will be generated for both teams
  const totalUserScore = Math.floor(Math.random() * 1000 + 500);

  const userScore = Math.floor(Math.random() * totalUserScore);
  const teammateScore = totalUserScore - userScore;

  /*opponent score will always be less than user score, but never less than 475
      This is done so that the game seems realistically close*/
  const totalOpponentScore = Math.floor(
    (userScore - 500) * Math.random() + 475,
  );
  //Calcute Opponent and Opponent Score
  //get two random number that add up to totalScore every time
  const opponentScore1 = Math.floor(Math.random() * totalOpponentScore);
  const opponentScore2 = totalOpponentScore - opponentScore1;

  return (
    <>
      <h3 className="tw-title text-center">Game Outcome</h3>

      <div className="tw-grid tw-grid-cols-2 tw-pt-8 tw-justify-center">
        <div className="w-full tw-border tw-border-t-black tw-rounded-md tw-my-20">
          <div className="tw-font-bold text-l">
            Overall User Team Score: {userScore + teammateScore}
          </div>
          <div>Your Score: {userScore}</div>
          <div>Your Teammate Score: {teammateScore}</div>
        </div>

        <div className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-my-20">
          <div className="tw-font-bold text-lg">
            Overall Opponent Score: {totalOpponentScore}
          </div>
          <div>Opponent 1 Score: {opponentScore1}</div>
          <div>Opponent 2 Score: {opponentScore2}</div>
        </div>
      </div>

      <Button
        className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
        onClick={navigation}
      >
        Analyze Game
      </Button>
    </>
  );
};
export default ScorePage;
