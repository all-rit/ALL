import React, { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import ImagineService from "src/services/ImagineService";
import TeammateVideo from "../components/TeammateVideo";

const ScorePage = () => {
  const [analysisPage, setAnalysisPage] = useState(false);
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

  return analysisPage ? (
    <Analysis />
  ) : (
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
        onClick={() => setAnalysisPage(true)}
      >
        Analyze Game
      </Button>
    </>
  );
};

const Analysis = () => {
  const [content, setContent] = useState(null);

  //until the userID is grabbed, the page will techincally be blank until the useeffect activates
  useEffect(() => {
    const fetchContent = async () => {
      //yoink that user data
      const user = await ImagineService.getUserByID(
        sessionStorage.getItem("userID"),
        25,
      );

      //pastel yellow and blue annoyingly are stored in their key forms and need to be re-converted to a readable form
      const colorMap = {
        Red: "Red",
        Black: "Black",
        PastelBlue: "Blue",
        PastelYellow: "Yellow",
        Pink: "Pink",
      };

      //using map instead of "code smell" switch statment ft - Professor Bobby (st.Jaques or something like that)
      const text = {
        experiential:
          "Sorry, your shirt is " +
          colorMap[user.avatar.clotheColor].toLowerCase() +
          ", we simply cannot tolerate such awful choices and you and your teammte are both are disqualified.",
        expression:
          "Sorry, your teammate's shirt is " +
          colorMap[user.teammateAvatar.clotheColor].toLowerCase() +
          ", we simply cannot tolerate such awful choices. You and your teammte are both are disqualified.",
        control:
          "Congrats on winning! You may collect a prize after completeting the post survery for being so awesome sauce.",
      };
      setContent(<p className="tw-body-text tw-my-24">{text[user.section]}</p>);
    };
    fetchContent();
  }, []);

  return (
    //container aligns everything horizontally
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
  //Make game window immediately focused on so no clicking is needed on the embeded game
  const iframeRef = useRef(null);

  //Checks the iframe ref to see if anything exists, when the iframe fully loads, immediately focus it
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const focusIframe = () => {
        iframe.focus();
      };

      iframe.addEventListener("load", focusIframe);

      return () => iframe.removeEventListener("load", focusIframe);
    }
  }, []);

  const contentSizing =
    "tw-border tw-rounded-xl tw-w-[52vw] tw-h-[39vw] xxl:tw-h-[600px] xxl:tw-w-[800px]";

  //format for the differnt diplayed content types
  const [containerFormating, setContainerFormating] = useState(
    "tw-justify-left tw-flex tw-items-center tw-relative tw-bg-[black]",
  );

  const [gameActive, setGameActive] = useState(true);

  const [seconds, setSeconds] = useState(60);

  //When page loads timer starts that counts down from 60->0
  useEffect(() => {
    if (iframeRef.current) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);
            setGameActive(false);
            setContainerFormating("tw-pt-[7rem]");
            return 0;
          }

          return prevSeconds - 1;
        });
      }, 10);
      return () => clearInterval(timer);
    }
  }, [iframeRef]);

  return (
    //flex container used to center game vertically, dimensions are slightly different than content sizing for scaling purposes
    <div>
      <div className={contentSizing + "  " + containerFormating}>
        {gameActive ? (
          <iframe
            ref={iframeRef}
            src="https://microstudio.io/Imagine2025/galaga/6GZNBHTD/"
            className={contentSizing}
          />
        ) : (
          <ScorePage className={contentSizing} />
        )}
        {/*Not sure if tailwind can support custom styling so "timerFont" is in a css file */}
        <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
          <div>{seconds}</div>
        </div>
      </div>
      <TeammateVideo teammateId={0} messageShown={false} />
    </div>
  );
};

export default Game;
