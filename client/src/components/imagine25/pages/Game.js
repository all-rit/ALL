import React, { useEffect, useState } from "react";

const Game = () => {
  const [seconds, setSeconds] = useState(60);

  //When page load timer starts that counts down from 60->0
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(timer);
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //This is the sizing of both the div container and game
  const sizeStyling = " tw-w-[800px] tw-h-[600px]";
  return (
    //flex container used to venter game vertically
    <div
      className={
        "tw-flex tw-justify-left tw-items-center tw-relative" + sizeStyling
      }
    >
      <iframe
        src="https://microstudio.io/Nerozz/galaga/3E7A6TBT/"
        className={"tw-rounded-xl" + sizeStyling}
      />
      <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white ">
        <div>{seconds}</div>
      </div>
    </div>
  );
};

export default Game;
