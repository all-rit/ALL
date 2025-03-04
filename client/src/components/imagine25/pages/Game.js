import React, { useEffect, useState } from "react";
import "./Game.css";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import ImagineService from "src/services/ImagineService";

const ScorePage = ({ nextPage }) => {
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

      <Button
        className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
        onClick={nextPage}
      >
        Analyze Game
      </Button>
    </>
  );
};

ScorePage.propTypes = {
  nextPage: PropTypes.func,
};

const Analysis = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const user = await ImagineService.getUserByID(
        sessionStorage.getItem("userID"),
        25,
      );

      let text;
      switch (user.section) {
        case "experiential":
          text =
            "Sorry, your shirt is " +
            user.avatar.clotheColor +
            ", we simply cannot tolerate such awful choices and you and your teammte are both are disqualified.";
          break;
        case "expression":
          text =
            "Sorry, your teammate's shirt is " +
            user.teammateAvatar.clotheColor +
            ", we simply cannot tolerate such awful choices. You and your teammte are both are disqualified.";
          break;
        case "control":
          text = "Congrats on winning!";
          break;
        default:
          text = "";
          break;
      }
      setContent(<p className="tw-body-text tw-my-24">{text}</p>);
    };
    fetchContent();
  }, []);

  return (
    <div className="tw-text-center tw-w-[50%] tw-mx-auto tw-h-[100%] tw-items-center">
      <h3 className="tw-title text-center">Analysis</h3>
      {content}
      <Button
        className="btn btn-primary text-black btn-xl text-uppercase"
        onClick={() => alert("no next yet")}
      >
        Next
      </Button>
    </div>
  );
};

const Game = () => {
  const contentSizing = "tw-rounded-xl tw-w-[52vw] tw-h-[39vw]";

  const [containerFormating, setContainerFormating] = useState(
    "tw-justify-left tw-flex tw-items-center tw-relative tw-bg-[black]",
  );

  //Content that is embeded on the left side
  const [content, setContent] = useState(
    <iframe
      src="https://microstudio.io/Nerozz/galaga/3E7A6TBT/"
      className={contentSizing}
    />,
  );

  const [seconds, setSeconds] = useState(60);

  //When page loads timer starts that counts down from 60->0
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timer);
          setContent(
            <ScorePage
              className={contentSizing}
              nextPage={() =>
                setContent(<Analysis className={contentSizing} />)
              }
            />,
          );
          setContainerFormating("tw-mt-[7rem]");
          return;
        }

        return prevSeconds - 1;
      });
    }, 10);
    return () => clearInterval(timer);
  }, []);

  return (
    //flex container used to center game vertically, dimensinos are slightly different than content sizing for scaling purposes
    <div
      //make backgorund black if game is running
      className={
        "tw-rounded-xl tw-w-[52vw] xs:tw-h-[500px] md:tw-h-[525px] lg:tw-h-[550px] xl:tw-h-[600px] " +
        containerFormating
      }
    >
      {content}
      {/*Not sure if tailwind can support custom styling so "timerFont" is in a css file */}
      <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
        <div>{seconds}</div>
      </div>
    </div>
  );
};

export default Game;
