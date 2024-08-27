import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { NAMES } from "../../../../constants/lab10";

/**
 * Shape component for render
 */
const Shape = ({ y, x, size, className, color }) => {
  const name = NAMES[color];
  return (
    <div
      style={{ left: x, top: y, width: size, height: size }}
      className={twMerge(
        className,
        "tw-flex tw-items-center tw-justify-center tw-font-bold",
      )}
    >
      {name}
    </div>
  );
};

Shape.propTypes = {
  y: PropTypes.number,
  x: PropTypes.number,
  size: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default Shape;
