import React from "react";
import PropTypes from "prop-types";

export const HTMLBlock = ({ children }) => {
  return <div className={"code_editor__line--purple"}>{children}</div>;
};

HTMLBlock.propTypes = {
  children: PropTypes.string,
};
