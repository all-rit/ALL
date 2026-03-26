import React, { useEffect, useRef, useState } from "react";
import ImagineService from "src/services/ImagineService";
import TeammateVideo from "../components/TeammateVideo";
import { navigate } from "@reach/router";

const Game = () => {
  const contentSizing =
    "tw-border tw-rounded-xl tw-w-[52vw] tw-h-[39vw] xxl:tw-h-[600px] xxl:tw-w-[800px]";

  const iframeRef = useRef(null);

  const [seconds, setSeconds] = useState(60);

  const [teammateId, setTeammateId] = useState(null);

  const buttonSize = "tw-w-16 tw-mx-auto";

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
            return 0;
          }

          return prevSeconds - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [iframeRef]);

  useEffect(() => {
    if (seconds <= 0) {
      navigate("/Imagine2025/Analysis");
    }
  }, [seconds]);

  useEffect(() => {
    const fetchTeammateID = async () => {
      const id = await ImagineService.getTeammate(
        sessionStorage.getItem("userID"),
        25,
      );
      setTeammateId(id);
    };
    fetchTeammateID();
  }, []);

  return (
    //flex container used to center game vertically, dimensions are slightly different than content sizing for scaling purposes
    <div>
      <div
        className={
          contentSizing +
          " tw-justify-left tw-flex tw-items-center tw-relative tw-bg-[black]"
        }
      >
        <iframe
          ref={iframeRef}
          src="https://microstudio.io/Imagine2025/galaga/6GZNBHTD/"
          className={contentSizing}
        />
        {/*Not sure if tailwind can support custom styling so "timerFont" is in a css file */}
        <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
          <div>{seconds}</div>
        </div>
      </div>
      <div className="tw-absolute tw-top-[3.4%] tw-right-1 tw-p-4 tw-pointer-events-none tw-bg-white tw-border-solid tw-border-[1px] tw-rounded-lg tw-max-h-[575px]">
        <TeammateVideo teammateId={teammateId} messageShown={false} />
        <p className="tw-col-span-2 tw-text-center tw-font-bold">
          <br />
          (Keyboard)
        </p>
        <div className="tw-pt-2 tw-pb-[200px] tw-grid tw-grid-cols-2 tw-grid-rows-4 tw-gap-y-2">
          <h4 className="tw-col-span-2 tw-text-center">Movement:</h4>
          <img
            className={
              "tw-rotate-180 tw-translate-x-0 tw-translate-y-0 tw-skew-x-0 tw-skew-y-0 tw-scale-x-100 tw-scale-y-100 " +
              buttonSize
            }
            src="/img/imagine_game_controls/ArrowKey.png"
          />
          <img
            className={buttonSize}
            src="/img/imagine_game_controls/ArrowKey.png"
          />
          <h4 className="tw-col-span-2 tw-text-center">Fire Weapon:</h4>
          <img
            className="tw-col-span-2 tw-w-32 tw-mx-auto"
            src="/img/imagine_game_controls/SpaceBar.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
