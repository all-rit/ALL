import React from "react";
import PropTypes from "prop-types";

const JSONText = ({ children }) => {
  const highlightSyntax = (text) => {
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
