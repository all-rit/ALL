import React from "react";
import PropTypes from "prop-types";

/**
 * React component for rendering a line of code as a row in a code editor or display.
 *
 * The `CodeLine` component takes a single prop, `children`, which should be a React element representing
 * the content of the code line. It is used to display a single line of code in a code editor or display,
 * typically as a row in a multi-line code block.
 *
 * @param {Object} props - The props for the `CodeLine` component.
 * @param {ReactElement} props.children - The React element representing the content of the code line.
 *
 * @return {JSX.Element} The rendered component that displays the code line as a row.
 */

const CodeLine = ({ children }) => {
  return <div className={"tw-flex tw-row-auto"}>{children}</div>;
};

CodeLine.propTypes = {
  children: PropTypes.element,
};

export default CodeLine;
