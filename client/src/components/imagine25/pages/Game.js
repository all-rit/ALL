import React, { useEffect, useState } from "react";
import "./Game.css";

const Game = () => {
  const [seconds, setSeconds] = useState(60);
  const [modal, setModal] = useState(false);

  //When page loads timer starts that counts down from 60->0
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timer);
          toggle();
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggle = () => setModal(!modal);

  return (
    //flex container used to venter game vertically
    <div
      className={
        "tw-flex tw-justify-left tw-items-center tw-relative tw-w-[52vw] xs:tw-h-[500px] md:tw-h-[525px] lg:tw-h-[550px] xl:tw-h-[600px] tw-bg-[Black] tw-rounded-xl"
      }
    >
      <iframe
        src="https://microstudio.io/Nerozz/galaga/3E7A6TBT/"
        className={"tw-rounded-xl tw-w-[52vw] tw-h-[39vw] xl:tw-h-[600px]"}
      />
      {/*Not sure if tailwind can support custom styling so "timerFont" is in a css file */}
      <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
        <div>{seconds}</div>
      </div>
    </div>
  );
};

export default Game;
