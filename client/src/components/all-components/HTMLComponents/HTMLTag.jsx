import React from "react";
import PropTypes from "prop-types";

/**
 * React component for rendering HTML-like code with syntax highlighting for HTML tags and attributes.
 *
 * The `HTMLTag` component takes a single prop, `children`, which should be a string containing
 * HTML-like code to be displayed with syntax highlighting. It applies syntax highlighting to the text,
 * distinguishing between HTML tags and attributes to make the code more readable and understandable.
 *
 * @param {Object} props - The props for the `HTMLTag` component.
 * @param {string} props.children - The HTML-like code to be displayed and syntax-highlighted.
 *
 * @return {JSX.Element} The rendered component that displays HTML-like code with syntax highlighting.
 */

const HTMLTag = ({ children }) => {
  const highlightSyntax = (text) => {
    {/* htmlTagRegex parses the passed in children for html keywords
    such as div, span, etc and will color them similarly to an IDE */}
    const htmlTagRegex = /\b(div|span|Button|p)\b/g;
    {/* htmlElementRegex uses regex to parse the passed in children for html
    attributes such as className, onClick, etc and colors them accordingly */}
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
