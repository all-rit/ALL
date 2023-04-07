import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Shape = ({ x, color, width, height }) => {
  return (
    <div
      style={{ left: x }}
      className={twMerge("tw-absolute tw-rounded-full", color, width, height)}
    />
  );
};

Shape.propTypes = {
  x: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Shape;
