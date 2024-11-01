import React from "react";
import { PropTypes } from "prop-types";

/**
 * React component for rendering an input element within a code block.
 *
 * The `CodeBlockInput` component takes a single prop, `attributes`, which should be an object containing
 * the attributes and properties to be applied to the input element. It is used to render an input field
 * within a code block, typically used for user input or interaction in a code editor.
 *
 * @param {Object} props - The props for the `CodeBlockInput` component.
 * @param {Object} props.attributes - An object containing attributes and properties for the input element.
 *
 * @return {JSX.Element} The rendered component that displays an input element within a code block.
 */

const CodeBlockInput = (props) => {
  const { attributes, value, defaultValue } = props;
  return (
    <>
      <input
        value={value}
        defaultValue={defaultValue}
        className={"tw-p-1 code_editor__input"}
        {...attributes}
      />
    </>
  );
};

CodeBlockInput.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  attributes: PropTypes.object,
};

export default CodeBlockInput;
