/**
 * CodeBlock is a function that is responsible for being a universal wrapper
 * around the code repair section. This will provide the styling to show the
 * grey code environment.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string} props.fileName - The name of the file associated with the code block.
 * @param {ReactNode} props.children - The content of the code block, typically containing code.
 * @returns {ReactElement} A React element representing the CodeBlock component.
 */
import React from "react";
import PropTypes from "prop-types";

const CodeBlock = ({ fileName, children }) => {
  return (
    <div className="tw-flex tw-flex-col tw-m-2 tw-bg-[#ffffffe8] tw-rounded-lg tw-text-left tw tw-border-solid tw-border-0 tw-shadow-[0px_0px_10px_0px_rgba(0,0,0,.4)]">
      <div className="tw-flex-row tw-pt-3 tw-pl-3">
        <div className="tw-font-normal tw-text-sm tw-bg-[#fff] tw-border-solid tw-inline-block tw-border-2 tw-border-b-0 tw-cursor-pointer tw-p-2 tw-rounded-t-lg hover:tw-font-extrabold ">
          {fileName}
        </div>
        <div className="tw-grow"></div>
      </div>

      <div className="tw-bg-[#333] tw-m-3 tw-mt-0 tw-ease-in  tw-shadow-2xl tw-rounded-r-sm code_editor__code">
        <div className={"tw-m-5"}>{children}</div>
      </div>
    </div>
  );
};

CodeBlock.propTypes = {
  fileName: PropTypes.string.isRequired,
  children: PropTypes.element,
};
export default CodeBlock;
