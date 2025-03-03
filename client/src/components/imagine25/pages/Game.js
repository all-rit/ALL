import React, { useEffect, useState } from "react";
import "./Game.css";
import ScorePage from "../components/ScorePage";

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
          setContent(<ScorePage className={contentSizing} />);
          setContainerFormating("tw-mt-[7rem]");
          return;
        }

        return prevSeconds - 1;
      });
    }, 1000);
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
