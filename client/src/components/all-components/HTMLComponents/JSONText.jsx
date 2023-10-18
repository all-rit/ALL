import React from "react";
import PropTypes from "prop-types";

/**
 * React component for rendering JSON-formatted text with syntax highlighting.
 *
 * The `JSONText` component takes a single prop, `children`, which should be a string containing
 * the JSON-formatted text to be displayed. It applies syntax highlighting to the text, differentiating
 * between JSON data and operators, making it more readable for users.
 *
 * @param {Object} props - The props for the `JSONText` component.
 * @param {string} props.children - props.children - The React element representing the content of the code line, in this
 * case, the children will simply be passed in text, which will then be styled and syntactically highlighted similarly to JSON-formatted text.
 *
 * @return {JSX.Element} The rendered component that displays JSON text with syntax highlighting.
 */

const JSONText = ({ children }) => {
  const highlightSyntax = (text) => {
    {
      /* Operator regex only colors operator symbols in a passed in child, such as /?+, etc */
    }
    const operatorRegex = /(\+|-|\*|\/|;|:|=|==|>|\(|\)|{|})/g;

    return text.split(/(\s+|\b|\W)/).map((segment, index) => {
      if (operatorRegex.test(segment)) {
        return (
          <span key={index} className="operator">
            {segment}
          </span>
        );
      }
      return (
        <span key={index} className={"json"}>
          {segment}
        </span>
      );
    });
  };

  return <div className="code_editor__code">{highlightSyntax(children)}</div>;
};

JSONText.propTypes = {
  children: PropTypes.string,
};

export default JSONText;
