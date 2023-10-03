import React from "react";
import PropTypes from "prop-types";

export const CodeLine = ({ text }) => {
  return <>{text}</>;
};

CodeLine.propTypes = {
  text: PropTypes.string,
};
