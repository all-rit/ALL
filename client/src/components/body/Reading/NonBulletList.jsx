/* eslint-disable react/prop-types */
import React from "react";
import { useContext } from "react";
import FontSizeContext from "src/components/imagine23/Imagine23Context";

/**
 * NonBulletList is a display component used to render to the page a
 * list like view of information to the reading section of the lab.
 */
const NonBulletList = ({ data }) => {
  const {
    // h5FontSize,
    pFontSize,
  } = useContext(FontSizeContext);

  return (
    <>
      <ul className="non-bullet-list">
        {data.map((text, index) => {
          return (
            <li key={index}>
              {/* change h5 and p tags font size */}
              <h5>{text.header}</h5>
              <p className={pFontSize}>{text.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default NonBulletList;
