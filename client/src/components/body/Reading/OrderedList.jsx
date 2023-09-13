import React from "react";
import PropTypes from "prop-types";

/**
 * OrderedList is a display component used to render to the page
 * an ordered list view of the information on the reading page.
 */
const OrderedList = ({ data }) => {
  return (
    <>
      <div className="ordered__list__div">
        <ol className={"ordered__list"}>
          {data.map((text) => {
            return <li key={text.id}>{text}</li>;
          })}
        </ol>
      </div>
    </>
  );
};

OrderedList.propTypes = {
  data: PropTypes.string.isRequired,
};

export default OrderedList;
