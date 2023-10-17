import PropTypes from "prop-types";
import React from "react";

/**
 * React component for rendering text in a dark green color, typically used for comments in code.
 *
 * The `CommentText` component takes a single prop, `children`, which should be a string containing
 * text to be displayed in a dark green color. It is typically used for rendering comments within code
 * to distinguish them from regular code text.
 *
 * @param {Object} props - The props for the `CommentText` component.
 * @param {string} props.children - The text to be displayed in dark green.
 *
 * @return {JSX.Element} The rendered component that displays the text in a dark green color.
 */

const CommentText = ({ children }) => {
  return <div className="code_editor__code comment">{children}</div>;
};

CommentText.propTypes = {
  children: PropTypes.string,
};
export default CommentText;
