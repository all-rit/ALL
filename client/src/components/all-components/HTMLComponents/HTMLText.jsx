import PropTypes from "prop-types";
import React from "react";

const HTMLTag = ({ children }) => {
  return <div className="code_editor__code tw-text-bgwhite">{children}</div>;
};

HTMLTag.propTypes = {
  children: PropTypes.string,
};

export default HTMLTag;
