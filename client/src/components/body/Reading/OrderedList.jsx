/* eslint-disable react/prop-types */
import React from "react";

/**
 * OrderedList is a display component used to render to the page
 * an ordered list view of the information on the reading page.
 */
const OrderedList = ({ data }) => {
  return (
    <>
      <div className="ordered__list__div">
        <ol className={"ordered__list"}>
          {data.map((text, index) => {
            return <li key={index}>{text}</li>;
          })}
        </ol>
      </div>
    </>
  );
};
export default OrderedList;
