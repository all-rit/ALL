/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

function QuestionCount(props) {
  return (
    <div className="tw-font-calibri tw-font-bold tw-text-[1.125rem]">
      Question <span>{props.counter}</span>:
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
