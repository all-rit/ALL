import React from "react";
import PropTypes from "prop-types";

const Shape = ({ y, x, size, className }) => {
  return (
    <div
      style={{ left: x, top: y, width: size, height: size }}
      className={className}
    />
  );
};

Shape.propTypes = {
  y: PropTypes.number,
  x: PropTypes.number,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Shape;
