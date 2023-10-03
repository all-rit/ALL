import React from "react";
import PropTypes from "prop-types";

const JSONBlock = ({ children }) => {
  return (
    <div className={"tw-bg-yellow code_editor__code tw-flex tw-flex-col"}>
      {children}
    </div>
  );
};

JSONBlock.propTypes = {
  children: PropTypes.element,
};

export default JSONBlock;
