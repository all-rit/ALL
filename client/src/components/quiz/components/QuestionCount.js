/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

function QuestionCount(props) {
  return (
    <div className="tw-body-styling-name">
      Question <span>{props.counter}</span>:
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
