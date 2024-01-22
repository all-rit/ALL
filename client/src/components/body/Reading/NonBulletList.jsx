/* eslint-disable react/prop-types */
import React from "react";

/**
 * NonBulletList is a display component used to render to the page a
 * list like view of information to the reading section of the lab.
 */
const NonBulletList = ({ data }) => {
  return (
    <>
      <ul className="non-bullet-list">
        {data.map((text, index) => {
          return (
            <li key={index}>
              {/* change h5 and p tags font size */}
              <h5>{text.header}</h5>
              <p>{text.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default NonBulletList;
