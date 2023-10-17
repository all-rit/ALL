import PropTypes from "prop-types";
import React from "react";
import "../../../assets/stylesheets/components/CodeBlockCSS.scss";

/**
 * React component for rendering code with syntax highlighting tailored for React code.
 *
 * The `ReactText` component takes a single prop, `children`, which should be a string containing
 * React code to be displayed with syntax highlighting. It applies syntax highlighting to the text,
 * distinguishing between keywords, operators, React-specific functions, and numbers to make the code more
 * readable and understandable for users.
 *
 * @param {Object} props - The props for the `ReactText` component.
 * @param {string} props.children - The React code to be displayed and syntax-highlighted.
 *
 * @return {JSX.Element} The rendered component that displays React code with syntax highlighting.
 */

const ReactText = ({ children }) => {
  const highlightSyntax = (text) => {
    const keywordRegex =
      /\b(const|var|let|function|default|return|import|export)\b/g;
    const operatorRegex = /(\+|-|\*|\/|;|:|=|==|>|\(|\)|{|})/g;
    const reactRegex = /\b(useState|useEffect|props)\b/g;
    const numberRegex = /-?\d+(\.\d+)?/g;

    return text.split(/(\s+|\b|\W)/).map((segment, index) => {
      if (keywordRegex.test(segment)) {
        return (
          <span key={index} className="keyword">
            {segment}
          </span>
        );
      } else if (operatorRegex.test(segment)) {
        return (
          <span key={index} className="operator">
            {segment}
          </span>
        );
      } else if (reactRegex.test(segment)) {
        return (
          <span key={index} className="react">
            {segment}
          </span>
        );
      } else if (numberRegex.test(segment)) {
        return (
          <span key={index} className="number">
            {segment}
          </span>
        );
      }
      return (
        <span key={index} className={"otherText"}>
          {segment}
        </span>
      );
    });
  };

  return <div className="code_editor__code">{highlightSyntax(children)}</div>;
};

ReactText.propTypes = {
  children: PropTypes.string,
};

export default ReactText;
