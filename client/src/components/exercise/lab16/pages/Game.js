import React, { useEffect, useRef, useState } from "react";
import TeammateVideo from "../components/TeammateVideo";
import ScorePage from "../components/ScorePage";
import Analysis from "../components/Analysis";
import TicTacToeGame from "../components/TicTacToeGame";

const Game = () => {
  const [status, setStatus] = useState("game");

  const contentSizing =
    "tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] tw-h-[40vw] xxl:tw-h-[600px] xxl:tw-w-[800px]";

  const [seconds, setSeconds] = useState(60);

  const [teammateId, setTeammateId] = useState(1);

  //When page loads timer starts that counts down from 60->0
  useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);
            setStatus("scorePage");
            return 0;
          }

          return prevSeconds - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const id = Math.floor(Math.random() * 4);
    setTeammateId(id);
  }, []);

  return (
    //flex container used to center game vertically, dimensions are slightly different than content sizing for scaling purposes
    <div>
      <div
        className={
          contentSizing +
          (status == "game"
            ? "tw-flex tw-justify-center tw-items-center tw-relative tw-bg-[blue]"
            : "tw-pt-[7rem]")
        }
      >
        {(status == "game") && (
            <TicTacToeGame
              className={contentSizing}
            />
          
        )}

        {status == "scorePage" && (
          <ScorePage
            onClick={() => setStatus("analysis")}
            className={contentSizing}
          />
        )}

        {(status === "analysis" || status === "groupVideo") && (
          <Analysis
            teammateId={teammateId}
            showVideo={() => setStatus("groupVideo")}
          />
        )}

        {/*Not sure if tailwind can support custom styling so "timerFont" is in a css file */}
        <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
          <div>{seconds}</div>
        </div>
      </div>

      <TeammateVideo teammateId={teammateId} status={status} />
    </div>
  );
};

export default Game;
