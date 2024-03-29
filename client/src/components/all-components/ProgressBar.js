import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

/**
 * ProgressBar component to display remaining time on the simulation
 */
const ProgressBar = ({
  duration,
  onComplete,
  onCountChange,
  className,
  disableTitle,
  innerClassName,
}) => {
  const [width, setWidth] = useState(100);
  const [elapsed, setElapsed] = useState(duration);
  const [complete, setComplete] = useState(false);
  let init = null;

  /**
   * Update width based on current time and start time
   */
  const updateWidth = (now) => {
    if (init === null) {
      init = now;
    }
    const elapsedTime = duration - (now - init) / 1000;
    if (Math.floor(elapsedTime) !== elapsed) {
      setElapsed(Math.floor(elapsedTime));
    }
    const remaining = (elapsedTime / duration) * 100;
    setWidth(remaining);
    if (remaining <= 0) return setComplete(true);
    requestAnimationFrame(updateWidth);
  };

  /**
   * Cool way to render components smoothly
   */
  useEffect(() => {
    requestAnimationFrame(updateWidth);
  }, []);

  /**
   * Execute function when time is over
   */
  useEffect(() => {
    if (complete && onComplete) {
      onComplete();
    }
  }, [complete]);

  /**
   * Update elapsed time
   */
  useEffect(() => {
    if (onCountChange) {
      onCountChange(elapsed);
    }
  }, [elapsed]);

  return complete ? (
    <></>
  ) : (
    <div className={twMerge("", className)}>
      {!disableTitle && (
        <p className={"tw-font-bold tw-text-xl"}>Time Remaining: {elapsed}</p>
      )}
      <div
        style={{ width: `${width}%` }}
        className={twMerge(
          "tw-bg-[#7CB1FF] tw-border-solid tw-rounded tw-py-3",
          innerClassName,
        )}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  duration: PropTypes.number,
  onComplete: PropTypes.func,
  onCountChange: PropTypes.func,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  disableTitle: PropTypes.bool,
};

export default ProgressBar;
