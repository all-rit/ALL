import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Timer component that counts down the seconds and triggers a callback when the timer is done.
 * @param {Object} props - The props object containing the seconds and timerDone function.
 * @param {number} props.seconds - The number of seconds for the timer.
 * @param {Function} props.timerDone - The callback function to be triggered when the timer is done.
 * @returns {JSX.Element} The Timer component.
 */
const Timer = (props) => {
  const { seconds, timerDone } = props;
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  useEffect(() => {
    let interval = null;
    if (secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
    } else {
      timerDone();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [secondsLeft, timerDone]);

  return (
    <div>
      <div className="timer">
        <div>
          <b>Seconds Left to Read:</b>{" "}
        </div>
        <div className="timer__window tw-w-fit">
          0 : {secondsLeft < 10 ? "0" : ""}
          {secondsLeft}
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  timerDone: PropTypes.func.isRequired,
};

export default Timer;
