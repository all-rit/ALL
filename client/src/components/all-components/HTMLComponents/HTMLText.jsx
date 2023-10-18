import PropTypes from "prop-types";
import React from "react";

/**
 * React component for rendering plain text with a background color suitable for HTML content.
 *
 * The `HTMLText` component takes a single prop, `children`, which should be a string containing
 * plain text to be displayed with a background color that is suitable for representing HTML content.
 *
 * @param {Object} props - The props for the `HTMLText` component.
 * @param {string} props.children - The plain text to be displayed with a background color.
 *
 * @return {JSX.Element} The rendered component that displays the plain text with a background color
 * suitable for HTML content.
 */

const HTMLText = ({ children }) => {
  {
    /* Will color all text white as it would in an IDE */
  }
  return <div className="code_editor__code tw-text-bgwhite">{children}</div>;
};

HTMLText.propTypes = {
  children: PropTypes.string,
};

export default HTMLText;
