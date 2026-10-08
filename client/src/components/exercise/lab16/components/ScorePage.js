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
        <div className="tw-flex tw-items-center tw-justify-center tw-border-solid tw-border-0 tw-border-b tw-border-secondary-gray">
          <div className="tw-my-12 tw-body-text tw-mx-14">
            <div className="tw-my-4 tw-font-bold tw-text-labGray tw-text-center">
              Your team
            </div>
            <div className="tw-font-poppins tw-font-bold tw-text-center tw-text-5xl tw-text-mediumBlue">
              {userScore + teammateScore}
            </div>
          </div>
          <div className="tw-my-12 tw-body-text tw-mx-14">
            <div className="tw-my-4 tw-font-bold tw-text-labGray tw-text-center">
              Opponent
            </div>
            <div className="tw-font-poppins tw-font-bold tw-text-center tw-text-5xl tw-text-darkGray">
              {totalOpponentScore}
            </div>
          </div>
        </div>
        <div className="tw-my-4">
          <div className="tw-body-text tw-text-labGray tw-mx-auto">
            <p>
              You <span className="tw-font-bold tw-text-black">{userScore}</span> &middot; Teammate <span className="tw-font-bold tw-text-black">{teammateScore}</span>
            </p>
          </div>
        </div>

        <Button
          className="tw-body-text tw-font-bold tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[10rem] tw-h-[3rem]
       tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl tw-text-black tw-mt-20"
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
