import PropTypes from "prop-types";
import React from "react";

/**
 * React component for rendering plain text with a background color suitable for HTML content.
 *
 * The `HTMLText` component takes a single prop, `children`, which should be a string containing
 * plain text to be displayed with a background color that is suitable for representing HTML content.
 *
 * @param {Object} props - The props for the `HTMLText` component.
 * @param {string} props.children - props.children - The React element representing the content of the code line, in this
 * case, the children will simply be passed in text, which will then be styled and syntactically highlighted similarly to text inside
 * an HTML element, which will be white.
 *
 * @return {JSX.Element} The rendered component that displays the plain text with a background color
 * suitable for Import path content.
 */

const ImportText = ({ children }) => {
  /* Will color all text white as it would in an IDE */
  return <div className="code_editor__code import">{children}</div>;
};

ImportText.propTypes = {
  children: PropTypes.string,
};

export default ImportText;
