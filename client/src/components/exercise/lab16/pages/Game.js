import React, { useEffect, useRef, useState } from "react";
import TeammateVideo from "../components/TeammateVideo";
import DisplayDeepFake from "../components/DisplayDeepfake";
import ScorePage from "../components/ScorePage";
import { TEAMMATE_INFO } from "src/constants/lab16";
import { ExerciseService } from "../../../../services/lab16/ExerciseService";
 import useMainStateContext from "src/reducers/MainContext";


const Game = () => {
  const [status, setStatus] = useState("game");
  const { state } = useMainStateContext();
  const contentSizing =
    "tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] tw-h-[40vw] xxl:tw-h-[600px] xxl:tw-w-[800px]";

  const iframeRef = useRef(null);

  const [seconds, setSeconds] = useState(60);

  const [teammateId, setTeammateId] = useState(1);

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

  //When page loads timer starts that counts down from 60->0
  useEffect(() => {
    if (iframeRef.current) {
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
    }
  }, []);


  useEffect(() => {
    const id = Math.floor(Math.random() * 4);
    setTeammateId(id);

    const teammateInfo = TEAMMATE_INFO[id]
    console.log(teammateInfo)

    async function saveTeammateInfo() {
      try {
        const resp = await ExerciseService.saveTeammate(
          {
          userID: state.main.user.userid,
          teammateInfo:teammateInfo}
          )
        console.log(resp)
      } catch (err){
        console.log(err)
      }
    }
    
    saveTeammateInfo()

  }, []);

  return (
    //flex container used to center game vertically, dimensions are slightly different than content sizing for scaling purposes
    <div>
      <div
        className={
          contentSizing +
          (status == "game"
            ? "tw-justify-left tw-flex tw-items-center tw-relative tw-bg-[black]"
            : "tw-pt-[7rem]")
        }
      >
        {status == "game" && (
          <iframe
            ref={iframeRef}
            src="https://microstudio.io/Imagine2025/galaga/6GZNBHTD/"
            className={contentSizing}
          />
        )}

        {status == "scorePage" && (
          <ScorePage
            onClick={() => setStatus("deepfakePage")}
            className={contentSizing}
          />
        )}

        {(status === "deepfakePage" || status === "deepfakeVideo") && (
          <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center">
            {
              <DisplayDeepFake
                teammateId={teammateId}
                toggleAction={() => setStatus("deepfakeVideo")}
                isChatRoom={false}
              />
            }
          </div>
        )}

        {/*Not sure if tailwind can support custom styling so "timerFont" is in a css file */}
        <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
          <div>{seconds}</div>
        </div>
      </div>
        {(status !== "deepfakePage") && (
          <TeammateVideo teammateId={teammateId} status={status} />
        )}
    </div>
  );
};

export default Game;
