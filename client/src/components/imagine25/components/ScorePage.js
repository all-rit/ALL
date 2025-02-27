import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const ScorePage = () => {
  let [userScore, setUserScore] = useState(0);
  let [opponentScore, setOpponentScore] = useState(0);
  let [teammateScore, setTeammateScore] = useState(0);
  let [teammateScore2, setTeammateScore2] = useState(0);

  const navigation = () => {
    console.log("move to next page");
  };

  const calculateScore = () => {
    //Random score that will be generated for both teams
    const totalUserScore = Math.floor(Math.random() * 1000 + 500);
    const userScore = Math.floor(Math.random() * totalUserScore);
    const teammateScore = totalUserScore - userScore;

    setUserScore(userScore);
    setTeammateScore(teammateScore);

    //Calcute User and Teammate Score

    //get two random number that add up to totalScore every time

    /*opponent score will always be less than user score, but never less than 475
        This is done so that the game seems realistically close*/
    const totalOpponentScore = Math.floor(
      (userScore - 500) * Math.random() + 475,
    );

    //Calcute Opponent and Opponent Score

    //get two random number that add up to totalScore every time
    const opponent1Score = Math.floor(Math.random() * totalOpponentScore);
    const teammateScore2 = totalOpponentScore - opponent1Score;

    setOpponentScore(opponent1Score);
    setTeammateScore2(teammateScore2);
  };

  useEffect(() => {
    calculateScore();
  }, []);

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
            Overall Opponent Score: {opponentScore + teammateScore2}
          </div>
          <div>Opponent 1 Score: {opponentScore}</div>
          <div>Opponent 2 Score: {teammateScore2}</div>
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
