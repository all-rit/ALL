import React from "react";
import PropTypes from "prop-types";

const CodeLine = ({ children }) => {
  return <div className={"tw-flex tw-row-auto"}>{children}</div>;
};

CodeLine.propTypes = {
  children: PropTypes.element,
};

export default CodeLine;