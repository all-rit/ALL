/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

function Question(props) {
  return (
    <h2 className="quiz question">
      {props.content} {props.multi && " Select all that apply."}
    </h2>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
  multi: PropTypes.bool.isRequired,
};

export default Question;
