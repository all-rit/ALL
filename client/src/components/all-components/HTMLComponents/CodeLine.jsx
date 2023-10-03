import React from "react";
import PropTypes from "prop-types";

export const CodeLine = ({ children , className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
};

CodeLine.propTypes = {
  text: PropTypes.string,
};
