import PropTypes from "prop-types";
import React from "react";

const ErrorText = ({ children }) => {
  return <div className="code_editor__code form-error">{children}</div>;
};

ErrorText.propTypes = {
  children: PropTypes.string,
};
export default ErrorText;
