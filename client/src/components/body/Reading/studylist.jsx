import React from "react";

/**
 * StudyList is a displays component used to render to the page a list
 * view of the information on the reading page.
 */
const StudyList = ({ data }) => {
  return (
    <>
      <ul className="study__list">
        {data.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </>
  );
};
export default StudyList;
