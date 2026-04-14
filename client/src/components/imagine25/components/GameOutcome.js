import React from "react";

const GameOutcome = () => {
  //Random score that will be generated for both teams
  const totalUserScore = Math.floor(Math.random() * 1000 + 500);

  const userScore = Math.floor(
    Math.random() * (totalUserScore * 0.6) + totalUserScore * 0.2,
  );
  const teammateScore = totalUserScore - userScore;

  /*opponent score will always be less than user score, but never less than 475
      This is done so that the game seems realistically close*/
  const totalOpponentScore = Math.floor(
    Math.random() * (totalUserScore * 0.8) + totalUserScore * 0.2,
  );

  // Ensure a fair distribution between opponents
  const opponentScore1 = Math.floor(
    Math.random() * (totalOpponentScore * 0.6) + totalOpponentScore * 0.2,
  );
  const opponentScore2 = totalOpponentScore - opponentScore1;

  return (
    <>
      <h3 className="tw-title text-center">Game Outcome</h3>

      <div className="tw-grid tw-grid-cols-2 tw-pt-8 tw-justify-center">
        <div className="tw-my-20 tw-body-text tw-mx-auto">
          <div className="tw-font-bold">
            Overall Team Score: {userScore + teammateScore}
          </div>
          <div>Your Score: {userScore}</div>
          <div>Your Teammate Score: {teammateScore}</div>
        </div>

        <div className="tw-my-20 tw-body-text tw-mx-auto">
          <div className="tw-font-bold ">
            Overall Opponent Score: {totalOpponentScore}
          </div>
          <div>Opponent 1 Score: {opponentScore1}</div>
          <div>Opponent 2 Score: {opponentScore2}</div>
        </div>
      </div>
    </>
  );
};

export default GameOutcome;
