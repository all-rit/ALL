import React from "react";
import PropTypes from "prop-types";

const HTMLTag = ({ children }) => {
  const highlightSyntax = (text) => {
    const htmlTagRegex = /\b(div|span|Button|p)\b/g;
    const htmlElementRegex = /\b(className|onClick|disabled|next|fileName|)\b/g;
    return text.split(/(\s+|\b|\W)/).map((segment, index) => {
      if (htmlTagRegex.test(segment)) {
        return (
          <span key={index} className="htmlTag">
            {segment}
          </span>
        );
      } else if (htmlElementRegex.test(segment)) {
        return (
          <span key={index} className="htmlAttribute">
            {segment}
          </span>
        );
      }
      return (
        <span key={index} className={"htmlText"}>
          {segment}
        </span>
      );
    });
  };

  return <div className="code_editor__code">{highlightSyntax(children)}</div>;
};

HTMLTag.propTypes = {
  children: PropTypes.string,
};

export default HTMLTag;
