import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Shape = ({ x, color, width, height, parentRef }) => {
  const parentAttributes = parentRef.current.getBoundingClientRect();
  return (
    <div
      style={{ left: x + parentAttributes.left }}
      className={twMerge("tw-absolute tw-rounded-full", color, width, height)}
    />
  );
};

Shape.propTypes = {
  x: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  parentRef: PropTypes.object,
};

export default Shape;
