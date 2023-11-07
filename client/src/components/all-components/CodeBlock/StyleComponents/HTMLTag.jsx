import React from "react";
import PropTypes from "prop-types";
import { htmlTagRegex, htmlElementRegex } from "../Constants";

/**
 * React component for rendering HTML-like code with syntax highlighting for HTML tags and attributes.
 *
 * The `HTMLTag` component takes a single prop, `children`, which should be a string containing
 * HTML-like code to be displayed with syntax highlighting. It applies syntax highlighting to the text,
 * distinguishing between HTML tags and attributes to make the code more readable and understandable.
 *
 * @param {Object} props - The props for the `HTMLTag` component.
 * @param {string} props.children - The React element representing the content of the code line, in this
 * case, the children will simply be passed in text, which will then be styled and syntactically highlighted similarly to HTML-like code.
 *
 * @return {JSX.Element} The rendered component that displays HTML-like code with syntax highlighting.
 */

const HTMLTag = ({ children }) => {
  if (typeof children === "object") {
    children = children.toString().replaceAll(/,/g, "").padStart(1);
  }
  const highlightSyntax = (text) => {
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
