import React from "react";
import PropTypes from "prop-types";

function Question(props) {
  return (
    <div className="tw-body-text tw-py-6">
      {props.content} {props.multi && " Select all that apply."}
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  multi: PropTypes.bool.isRequired,
};

export default Question;
