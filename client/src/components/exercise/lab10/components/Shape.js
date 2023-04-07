import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Shape = ({ y, x, color, width, height }) => {
  return (
    <div
      style={{ left: x, top: y }}
      className={twMerge("tw-absolute tw-rounded-full", color, width, height)}
    />
  );
};

Shape.propTypes = {
  y: PropTypes.number,
  x: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Shape;
