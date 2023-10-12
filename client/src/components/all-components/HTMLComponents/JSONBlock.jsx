import React from "react";
import PropTypes from "prop-types";

const JSONBlock = ({ children }) => {
  return <div className={"tw-caret-lightGreen"}>{children}</div>;
};

JSONBlock.propTypes = {
  children: PropTypes.element,
};

export default JSONBlock;
