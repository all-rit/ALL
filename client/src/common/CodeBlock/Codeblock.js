import React from "react";
import PropTypes from "prop-types";

const CodeBlock = ({ fileName, children }) => {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-m-2 tw-bg-white tw-rounded-lg tw-shadow-2xl tw-text-left tw-border-2">
        <div className="tw-flex-row">
          <div className=" tw-bg-labGray tw-inline-block tw-border-t-dark tw-border-t-2 tw-border-r-2 tw-border-r-dark tw-border-l-4 tw-border-l-dark tw-cursor-pointer tw-p-3">
            {fileName}
          </div>
          <div className="tw-grow"></div>
        </div>
        <div className="tw-ease-in tw-p-5 tw-rounded-lg tw-shadow-2xl font-mono">
          {children}
        </div>
      </div>
    </>
  );
};

CodeBlock.propTypes = {
  fileName: PropTypes.string.isRequired,
  children: PropTypes.array,
};
export default CodeBlock;
