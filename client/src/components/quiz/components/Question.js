import React from "react";
import PropTypes from "prop-types";

function Question(props) {
  return (
    <p className="tw-body-text tw-py-6">
      {props.content} {props.multi && " Select all that apply."}
    </p>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
  multi: PropTypes.bool.isRequired,
};

export default Question;
