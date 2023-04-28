import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Shape = ({ y, x, color, size }) => {
  return (
    <div
      style={{ left: x, top: y, width: size, height: size }}
      className={twMerge("tw-absolute tw-border-solid", color)}
    >
      <p>X: {Math.floor(x)}</p>
      <p>Y: {Math.floor(y)}</p>
    </div>
  );
};

Shape.propTypes = {
  y: PropTypes.number,
  x: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Shape;
