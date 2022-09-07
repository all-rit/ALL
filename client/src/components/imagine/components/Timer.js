/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

const Timer = ({ seconds: startTime, finished }) => {
  // does it need to be "App"?
  const [seconds, updateSeconds] = useState(startTime);
  const [startTimer, setStartTimer] = useState(false);

  const timer = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setStartTimer(true);
      timer.current = setInterval(() => {
        updateSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }, 2000);
    return () => {
      clearInterval(timer.current);
      timer.current = null; // safer to set to null
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timer.current);
      timer.current = null;
      finished(); // change this or the logic inside
    }
    // eslint-disable-next-line
  }, [seconds]);

  return (
    <>
      {startTimer && (
        <div className="timer tw-flex tw-flex-wrap tw-p-4 tw-space-x-3">
          <h3 className="tw-font-semibold  tw-text-4xl ">
            Penalty is lifted in:
          </h3>
          <h3 className="tw-font-bold  tw-text-4xl">{seconds} seconds</h3>
        </div>
      )}
    </>
  );
};

export default Timer;
