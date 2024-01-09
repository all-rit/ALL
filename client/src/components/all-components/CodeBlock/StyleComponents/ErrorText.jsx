import PropTypes from "prop-types";
import React from "react";

/**
 * React component for rendering text in a red color, used for errors.
 *
 * The `ErrorText` component takes a single prop, `children`, which should be a string containing
 * text to be displayed in a red color. It is typically used for rendering errors within code
 * to distinguish them from regular code text.
 *
 * @param {Object} props - The props for the `ErrorText` component.
 * @param {string} props.children - The React element representing the content of the code line, in this
 * case, the children will simply be passed in text, which will be displayed in red.
 *
 * @return {JSX.Element} The rendered component that displays the text in a red color.
 */
const ErrorText = ({ children }) => {
  return <div className="code_editor__code form-error">{children}</div>;
};

ErrorText.propTypes = {
  children: PropTypes.string,
};
export default ErrorText;
