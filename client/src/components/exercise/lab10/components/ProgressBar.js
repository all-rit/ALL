import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ duration, onComplete }) => {
  const [width, setWidth] = useState(100);
  const [complete, setComplete] = useState(false);

  const updateWidth = (e) => {
    const currentSec = e / 1000;
    const remaining = ((duration - currentSec) / duration) * 100;
    setWidth(remaining);
    if (remaining <= 0) return setComplete(true);
    requestAnimationFrame(updateWidth);
  };

  useEffect(() => {
    requestAnimationFrame(updateWidth);
  }, []);

  useEffect(() => {
    if (complete && onComplete) onComplete();
  }, [complete]);

  return complete ? (
    <></>
  ) : (
    <div
      style={{ width: `${width}%` }}
      className={`tw-bg-[#7CB1FF] tw-border-solid tw-rounded tw-py-3`}
    />
  );
};

ProgressBar.propTypes = {
  duration: PropTypes.number,
  onComplete: PropTypes.func,
};

export default ProgressBar;
