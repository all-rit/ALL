import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const ScorePage = (props) => {
  const { onClick } = props;
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

  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-full tw-p-4">
        <h3 className="tw-title text-center">You Win!!!</h3>
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
          </div>
        </div>

        <Button
          className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
       tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black"
          //alert model should pop up and deepfake should be shown
          onClick={onClick}
        >
          End Game
        </Button>
      </div>
    </>
  );
};

export default ScorePage;

ScorePage.propTypes = {
  onClick: PropTypes.func,
};
