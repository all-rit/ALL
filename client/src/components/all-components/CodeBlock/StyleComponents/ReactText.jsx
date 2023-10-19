import PropTypes from "prop-types";
import React from "react";
import "../../../../assets/stylesheets/components/CodeBlockCSS.scss";
import {
  javascriptRegex,
  operatorRegex,
  reactRegex,
  numberRegex,
} from "../Constants";

/**
 * React component for rendering code with syntax highlighting tailored for React code.
 *
 * The `ReactText` component takes a single prop, `children`, which should be a string containing
 * React code to be displayed with syntax highlighting. It applies syntax highlighting to the text,
 * distinguishing between keywords, operators, React-specific functions, and numbers to make the code more
 * readable and understandable for users.
 *
 * @param {Object} props - The props for the `ReactText` component.
 * @param {string} props.children - props.children - The React element representing the content of the code line, in this
 * case, the children will simply be passed in text, which will then be styled and syntactically highlighted similarly to React/Javascript style code.
 *
 * @return {JSX.Element} The rendered component that displays React code with syntax highlighting.
 */

const ReactText = ({ children }) => {
  const highlightSyntax = (text) => {
    return text.split(/(\s+|\b|\W)/).map((segment, index) => {
      if (javascriptRegex.test(segment)) {
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
